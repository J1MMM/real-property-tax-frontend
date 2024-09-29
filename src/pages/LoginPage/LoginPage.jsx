import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/images/favicon.svg";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./index.scss";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

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
        "/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      const accessToken = response?.data?.token;

      setAuth({ accessToken });
      setEmail("");
      setPassword("");

      navigate(from, { replace: true });
    } catch (error) {
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
  console.log(auth);
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
            "& > :not(style)": {
              m: 1,
              width: "280px",
            },
            // border: " 1px solid red",
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              "& .MuiInputBase-input": {
                height: "15px", // Adjust height as needed
                fontSize: "14px", // Adjust font size if needed
              },
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              "& .MuiInputBase-input": {
                height: "15px", // Adjust height as needed
                fontSize: "15px", // Adjust font size if needed
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "280px", // Makes the button take full width of its container
              height: "35px", // Adjust height as needed
              fontSize: "14px", // Adjust font size if needed
            }}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
