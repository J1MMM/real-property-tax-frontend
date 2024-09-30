import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/images/favicon.svg";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./index.scss";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import Cookies from "js-cookie";

const LoginPage = () => {
  const { auth, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [formMsg, setFormMsg] = useState("");

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    try {
      const response = await axios.post(
        "/api/user/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(response.data);

      if (response.data.token) {
        const token = response?.data?.token;
        Cookies.set("token", token);
        setAuth({ accessToken: token });
        setEmail("");
        setPassword("");
        navigate(from, { replace: true });
      } else {
        if (response.data.error) {
          setFormMsg(response.data.error);
        } else {
          setFormMsg(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);

      if (!error?.response) {
        setFormMsg("No Server Response");
      } else if (error.response?.status == 400) {
        setFormMsg("All Field required");
      } else if (error.response?.status == 401) {
        setFormMsg("Incorrect Email or Password");
      } else {
        setFormMsg("Login Failed");
      }
    }
    setDisable(false);
  };

  if (auth?.accessToken) {
    return <Navigate to="/" />;
  }
  //comment here another one
  return (
    <div className="background">
      <div className="tint"></div>
      <div className="login-container">
        <div>
          <img src={logo} alt="Logo" className="logo-container" />
        </div>
        <div className="logoname">
          <Typography variant="h4" fontWeight={600} maxWidth={500}>
            REAL PROPERTY TAX MANAGEMENT SYSTEM
          </Typography>
        </div>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "280px",
            gap: 1,
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            disabled={disable}
            fullWidth
            label="Email"
            margin="dense"
            // type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            disabled={disable}
            fullWidth
            margin="dense"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Typography color="error" width="55%" minWidth={300}>
            {formMsg}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{ paddingY: 1 }}
            disabled={disable}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
