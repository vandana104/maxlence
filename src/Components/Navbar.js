import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] = useState(null);
  const userName = localStorage.getItem("userName") || "";

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

    // Implement your search logic here (example with an array of items)
    const allItems = []; // Replace with your actual data
    const filteredResults = allItems.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setSearchResults(filteredResults);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      borderBottom="1px solid grey"
      height="70px"
      width="100%"
    >
      <Box>
        <img
          onClick={() => navigate("/")}
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          alt="Bewkoof"
          style={{ width: "80%", cursor: "pointer" }}
        />
      </Box>
      <Box display="flex">
        <TextField
          sx={{
            height: "56px",
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
              onClose={handleAvatarClose}
            >
              {userName ? (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/");
                    }}
                  >
                    Hello.. {userName}
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/account");
                    }}
                  >
                    My Account
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/login");
                    }}
                  >
                    Login
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleAvatarClose();
                      navigate("/signup");
                    }}
                  >
                    Signup
                  </MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Box>
      </Box>
      {/* Display search results */}
      {searchResults.length > 0 && (
        <Box>
          {searchResults.map((result) => (
            <div key={result.id}>
              {/* Display your search result items */}
              {result.name}
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
