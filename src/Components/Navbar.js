import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../ProductContext";

function Navbar() {
  const navigate = useNavigate();
  const {
    setSearch,
    filteredProducts,
    setFilteredProducts,
    searchResults,
    setSearchResults,
  } = useProductContext();
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] = useState(null);
  const userName = localStorage.getItem("userName") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setFilteredProducts(data.products.slice(0, 30)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [setFilteredProducts]);

  const handleAvatarClick = (event) => {
    setAvatarMenuAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAvatarMenuAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setAvatarMenuAnchorEl(null);
    alert("Successfully Logged out");
    navigate("/");
  };

  const handleChangeKey = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

  
    const filteredResults = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchValue),
    );
    setSearchResults(filteredResults);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      borderBottom="1px solid grey"
      height="55px"
      sx={{background:"black"}}
x      width="100%">
      <Box>
        <Typography
          onClick={() => navigate("/")}
          style={{ color:"white",fontWeight:"bold" ,width: "80%", cursor: "pointer" }}>
          Home
        </Typography>
      </Box>
      <Box display="flex">
        <TextField
          sx={{
            paddingLeft: "0px !important",
            marginRight: "10px",
            background: "#eaeaea",
          }}
          onChange={handleChangeKey}
          placeholder="Search..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <IconButton sx={{ color: "#555" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Divider orientation="vertical" className="vertical-divider" />
        <Box display="flex" alignItems="center" gap="12px">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar
              alt="User Avatar"
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
              onClick={handleAvatarClick}
            />
            <Menu
              anchorEl={avatarMenuAnchorEl}
              open={Boolean(avatarMenuAnchorEl)}
              onClose={handleAvatarClose}>
              {userName ? (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/");
                    }}>
                    Hello.. {userName}
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/account");
                    }}>
                    My Account
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/login");
                    }}>
                    Login
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/signup");
                    }}>
                    Signup
                  </MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Box>
      </Box>
      {searchResults.length > 0 && (
        <Box>
          {searchResults.map((result) => (
            <div key={result.id}>
              {result.title}
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
