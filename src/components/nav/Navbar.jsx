import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} margin={1}>
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
        sx={{ justifyContent: "space-around" }}
      >
        <Toolbar>
          <IconButton
            sx={{ flexGrow: 1, border: 0, borderRadius: 0 }}
            size="small"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="" />
          </IconButton>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
            justifyContent="center"
          >
            <Typography variant="body2">Home</Typography>
            <Typography variant="body2">About us</Typography>
            <Typography variant="body2">Services</Typography>
            <Typography variant="body2">Blog</Typography>
            <Typography variant="body2">Contact us</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
