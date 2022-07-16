// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useEffect } from "react";
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
import { VaultButton } from "../../utilities/vault-button";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser, logoutUser } from "../../features/userStatus/userStatus";
import { Cookie } from "@mui/icons-material";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Navbar = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector((state) => state.userStatus.isLoggedIn);

  const open = Boolean(anchorElement);

  const avatarMenuOpenClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event?.currentTarget);
  };

  const avatarMenuCloseClick = () => {
    setAnchorElement(null);
  };

  const logoutHandler = () => {
    setAnchorElement(null);
    // Opens a new window / current in which we moved to the logged out screen
    window.open("http://localhost:8000/auth/logout", "_self");
    dispatch(logoutUser());
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(loginUser());
        console.log(data);
      } else {
        console.log("Authentication failed");
      }

      console.log("getUser ran successfully");
    };

    getUser();

    console.log("Ran useEffect from Navbar.tsx");
    return () => {
      console.log("Cleanup Function from Navbar.tsx");
    };
  }, [dispatch]);

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
              <VaultButton
                variant="contained"
                startIcon={<VpnKeyIcon></VpnKeyIcon>}
              >
                Vault
              </VaultButton>
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

            {!isLoggedIn && (
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button sx={{ color: "white" }}>Login</Button>
              </NavLink>
            )}

            {isLoggedIn && (
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

                    <MenuItem onClick={logoutHandler}>
                      <ListItemIcon>
                        <LogoutIcon></LogoutIcon>
                      </ListItemIcon>
                      <ListItemText>Logout</ListItemText>
                    </MenuItem>
                  </Menu>
                </>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Navbar;
