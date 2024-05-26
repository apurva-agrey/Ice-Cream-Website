import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../style/Header.css";
import logo from '../../images/logo.png'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };





  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center"  }}>
      <Box sx={{ bgcolor: 'black' }}>
        <Typography
          color={"goldenrod"}
          component="div"
          sx={{ flexGrow: 1 }}
        >
          <NavLink to={'/'}>
            <img src={logo} alt="logo" height={"30"} width="auto" />
          </NavLink>
        </Typography>
        <Divider />
      </Box>
      <ul className="mobile-navigation">
        <li><NavLink to={"/menu"}>Menu</NavLink></li>
        <li><NavLink to={"/about"}>About Us</NavLink></li>
        <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box >
        <AppBar className='nav' component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>



            <Typography
              color={"goldenrod"}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <NavLink to={'/'}>
                <img src={logo} alt="logo" height={"40"} width="155" className="img" />
              </NavLink>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li><NavLink to={"/menu"}>Menu</NavLink></li>
                <li><NavLink to={"/about"}>About Us</NavLink></li>
                <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>


        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "150px",
                // textAlign: 'center',
                backgroundColor: "pink"
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;