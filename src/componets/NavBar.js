import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Sidebar from "./Sidebar";
import ToolBar from "./ToolBar";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from './NavbarTheme'

const drawerWidth = 240;
const navItems = [
  "HOME",
  "PRODUCT",
  "CONTACT",
  "ABOUT",
  "LOGIN/REGISTER",
  
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{
            "--Grid-borderWidth": "0px",
            boxShadow: "var(--Grid-borderWidth)"
          }}
          color="primary"
          component="nav"
          position="fixed"
        >
          <ToolBar
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
            sx={{ align: "left" }}
          />
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Sidebar
              handleDrawerToggle={handleDrawerToggle}
              navItems={navItems}
            />
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
