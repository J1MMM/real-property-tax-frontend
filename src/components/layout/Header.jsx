import { MenuRounded } from "@mui/icons-material";
import { AppBar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/favicon.svg";
import backgroundImage from "../../assets/images/header-bg.jpg";
import UserAvatar from "../shared/UserAvatar";
import { HEADER_HEIGHT } from "../../utils/constant";

const headerContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: HEADER_HEIGHT,
  width: "100%",
  p: 1,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  boxSizing: "border-box",
  backgroundImage: `linear-gradient(rgba(12, 19, 99, .7), rgba(12, 19, 99, .7)), url(${backgroundImage})`,
  zIndex: 1,
};

export const Header = (props) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Box sx={headerContainerStyle}>
        <Stack gap={2} direction={"row"} alignItems={"center"}>
          <IconButton
            sx={{ color: "primary.light", ml: 1 }}
            onClick={props.handleDrawerOpen}
          >
            <MenuRounded />
          </IconButton>
          <Box
            sx={{
              width: "64px",
              position: "relative",
            }}
          >
            <img src={logo} alt="logo" width={"100%"} />
          </Box>
          <Typography variant="h6" fontWeight={600} color="primary.light">
            REAL PROPERTY TAX MANAGEMENT SYSTEM
          </Typography>
        </Stack>

        <UserAvatar />
      </Box>
    </AppBar>
  );
};
