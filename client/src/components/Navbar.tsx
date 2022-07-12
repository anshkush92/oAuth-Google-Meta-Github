// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";
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
        <Toolbar sx={{ backgroundColor: "#67568c" }}>
          <Button
            variant="contained"
            sx={{ color: "white" }}
            startIcon={<VpnKeyIcon sx={{ color: "white" }}></VpnKeyIcon>}
          >
            Vault
          </Button>

          <Paper sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <InputBase></InputBase>
            <Divider sx={{ height: "28px", m: 0.5, backgroundColor: "red" }} orientation="vertical" />
            <SearchIcon></SearchIcon>
          </Paper>

          <Tooltip title="See all the blogs" arrow>
            <IconButton>
              <FeedIcon sx={{ color: "white" }}></FeedIcon>
            </IconButton>
          </Tooltip>

          <Button sx={{ color: "white" }}>Sign Up</Button>
          <Button sx={{ color: "white" }}>Login</Button>

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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Navbar;
