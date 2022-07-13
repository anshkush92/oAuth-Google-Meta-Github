// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Paper,
  InputBase,
  Divider,
} from "@mui/material";

import VpnKeyIcon from "@mui/icons-material/VpnKey";
import FeedIcon from "@mui/icons-material/Feed";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Navbar = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const avatarMenuOpenClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event?.currentTarget);
  };

  const avatarMenuCloseClick = () => {
    setAnchorElement(null);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            backgroundColor: "#67568c",
          }}
        >
          <Box>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "black",
                }}
                startIcon={<VpnKeyIcon sx={{ color: "white" }}></VpnKeyIcon>}
              >
                Vault
              </Button>
            </NavLink>
          </Box>

          <Box flex={0.5}>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pr: 1,
              }}
            >
              <InputBase
                fullWidth
                placeholder="Search the blogs...."
              ></InputBase>
              <Divider
                flexItem
                sx={{ m: 0.5, backgroundColor: "red" }}
                orientation="vertical"
              />
              <SearchIcon></SearchIcon>
            </Paper>
          </Box>

          <Box>
            <Tooltip title="See all the blogs" arrow>
              <NavLink to="/blogs" style={{ textDecoration: "none" }}>
                <IconButton>
                  <FeedIcon sx={{ color: "white" }}></FeedIcon>
                </IconButton>
              </NavLink>
            </Tooltip>

            <NavLink to="/signup" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Signup</Button>
            </NavLink>

            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Login</Button>
            </NavLink>

            <Tooltip title="Click to get different menu items">
              <>
                <IconButton onClick={avatarMenuOpenClick}>
                  <Avatar
                    src="https://mui.com/static/images/avatar/2.jpg"
                    alt="Ansh Singh"
                  ></Avatar>
                </IconButton>
                Ansh
                <Menu
                  open={open}
                  anchorEl={anchorElement}
                  onClose={avatarMenuCloseClick}
                  disableScrollLock
                >
                  <MenuItem onClick={avatarMenuCloseClick}>
                    <ListItemIcon>
                      <AccountCircleIcon></AccountCircleIcon>
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </MenuItem>

                  <MenuItem onClick={avatarMenuCloseClick}>
                    <ListItemIcon>
                      <SettingsIcon></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText>Settings</ListItemText>
                  </MenuItem>

                  <MenuItem onClick={avatarMenuCloseClick}>
                    <ListItemIcon>
                      <LogoutIcon></LogoutIcon>
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </MenuItem>
                </Menu>
              </>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Navbar;
