import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Button, Link, Typography } from "@mui/material";
import Home from "./Home"; 

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    if (email && password) {
      setLoggedIn(true);
    } else {
      alert("Please fill in both email and password fields.");
    }
  };

  return (
    loggedIn ? (
      <Home />
    ) : (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background:
            "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(255,190,203,1) 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "40%",
            height: "60vh",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            background:
              "linear-gradient(299deg, rgba(185,196,251,1) 0%, rgba(250,183,197,0.4543067226890757) 133%)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: "4rem", mt: "2rem", fontWeight: 600 }}
          >
            Log into your account
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: "2rem" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl fullWidth variant="outlined">
            <Input
              placeholder="Enter your password"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              marginTop: "4rem",
              height: "3rem",
              backgroundColor: "#4caf50",
              "&:hover": {
                backgroundColor: "#45a049",
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <Link
              href="/forgot"
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
              }}
            >
              Forgot Password?
            </Link>
            <Link
              href="/signup"
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
              }}
            >
              Sign Up
            </Link>
          </Box>
        </Box>
      </Box>
    )
  );
}

export default Login;
