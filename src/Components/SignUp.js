import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSignUp = () => {
    // Perform any client-side validation or UI-related actions here
    console.log("Signing up:", formData);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        backgroundImage: "linear-gradient(0deg, #fff4c4, #fff)",
      }}>
      <Box
        display="flex"
        width="70%"
        fontFamily="montserrat, sans-serif"
        backgroundColor="white"
        height="100vh"
        justifyContent="center">
        <form style={{ width: "80%", marginTop: "80px" }}>
          <h2>Sign Up</h2>
          <h3 style={{ marginTop: "20px" }}>
            Hi new buddy, let's get you started <br /> with the bewakoofi!
          </h3>
          <TextField
            required
            onChange={handleChange}
            fullWidth
            sx={{ marginTop: "30px" }}
            label="Name"
            name="username"
            variant="standard"
          />
          <TextField
            required
            fullWidth
            sx={{ marginTop: "30px" }}
            label="Mobile"
            name="mobile"
            variant="standard"
          />
          <TextField
            required
            onChange={handleChange}
            fullWidth
            sx={{ marginTop: "30px" }}
            label="Email Id"
            name="email"
            variant="standard"
          />
          <FormControl fullWidth sx={{ marginTop: "30px" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              required
              type={showPassword && "text"}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              endAdornment={
                showPassword && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
          </FormControl>
          <FormControlLabel
            sx={{ marginTop: "30px" }}
            control={<Checkbox defaultChecked />}
            label="I want to receive order updates on Whatsapp"
          />

          <Button
            onClick={handleSignUp}
            variant="contained"
            sx={{
              marginTop: "40px",
              width: "100%",
              height: "50px",
              backgroundColor: "#989898",
              boxShadow: "none",
            }}>
            PROCEED
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default SignUp;
