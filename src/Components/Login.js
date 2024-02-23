import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Button, Link, Typography } from "@mui/material";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <Box
        display="flex"
        justifyContent="center"
        height="664px"
        width="100%"
        sx={{
          backgroundImage: "linear-gradient(0deg, #fff4c4, #fff)",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          width="70%"
          height="640px"
          backgroundColor="white"
        >
          <form
            style={{
              container: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <h2
              style={{
                marginTop: "110px",
                fontFamily: "montserrat-bold,sans-serif",
              }}
            >
              Log into your account
            </h2>
            <TextField
              fullWidth
              sx={{ marginTop: "60px" }}
              label="Email"
              variant="standard"
            />
            <FormControl
              width="100%"
              fullWidth
              variant="standard"
              sx={{ marginTop: "60px", mb: "10px" }}
            >
              <Input
                id="standard-adornment-password"
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
              />
            </FormControl>
            <Link
              to="/forgot"
              style={{
                marginTop: "50px",
                textDecoration: "none",
                fontFamily: "montserrat,sans-serif",
              }}
            >
              Forgot Password ?
            </Link>
            <Button
              variant="contained"
              className="login-button"
              sx={{
                marginTop: "40px",
                width: "100%",
                height: "50px",
                backgroundColor: "#989898",
                boxShadow: "none",
              }}
            >
              Login
            </Button>
            <Box
              display="flex"
              width="100%"
              justifyContent="center"
              mt="40px"
            >
              <Typography>Create new account ?</Typography>
              <Link
                style={{ textDecoration: "none", marginLeft: "5px" }}
                href="/signup"
              >
                Signup
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
