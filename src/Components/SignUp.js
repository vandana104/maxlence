import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSignUp = () => {
    console.log("Signing up:", formData);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
     
      sx={{
        background:
          "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(255,190,203,1) 100%)",
      }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="40%"
        height="85vh"
        mb="1rem"
        padding="2rem"
        borderRadius="15px"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        sx={{
          background:
            "linear-gradient(299deg, rgba(185,196,251,1) 0%, rgba(250,183,197,0.4543067226890757) 133%)",
        }}>
        <Typography variant="h4" mb="4rem" mt="2rem" fontWeight={600}>
          Sign Up
        </Typography>
        <TextField
          required
          onChange={handleChange}
          fullWidth
          sx={{ mb: "2rem" }}
          label="Name"
          name="username"
          variant="outlined"
        />
        <TextField
          required
          fullWidth
          sx={{ mb: "2rem" }}
          label="Mobile"
          name="mobile"
          variant="outlined"
        />
        <TextField
          required
          onChange={handleChange}
          fullWidth
          sx={{ mb: "2rem" }}
          label="Email Id"
          name="email"
          variant="outlined"
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <Input
            required
            type={showPassword ? "text" : "password"}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          onClick={handleSignUp}
          fullWidth
          variant="contained"
          sx={{
            marginTop: "4rem",
            height: "3rem",
            backgroundColor: "#989898",
            "&:hover": {
              backgroundColor: "#878787",
            },
          }}>
          PROCEED
        </Button>
      </Box>
    </Box>
  );
}

export default SignUp;
