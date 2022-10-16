import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Link } from "@mui/material";
import About from "./about";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Skills", "Projects", "Contact", "Resume"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Avatar src="./images.png" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              pl: "20px",
            }}
          >
            <Avatar src="./images.png" sx={{ width: 56, height: 56 }} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, pr: "20px" }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  px: "30px",
                  fontSize: "20px",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
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
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
        <Typography sx={{ backgrounColor: "#0a0416" }}>
          <div
            style={{
              display: "flex",
              boxSizing: "border-box",
              backgroundColor: "#0a192f",
              color: "white",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                color: "white",
                justifyContent: "center",
                paddingLeft: "50px",
                // border: "1px solid red",
                boxSizing: "border-box",
              }}
            >
              <h1>Hi There!</h1>
              <h1>
                I'M <span style={{ color: "#cd5ff8" }}>Suman</span>
              </h1>
              <Button
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                  display: "block",
                  width: "fit-content",
                }}
              >
                <Link
                  href="https://drive.google.com/file/d/1MpM0hx_z1orh_0doTLNW5BoU_FXJ_VIE/view?usp=sharing"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Resume
                </Link>
              </Button>
            </div>
            <div style={{ width: "50%" }}>
              <img
                src="https://www.ravishukla.me/static/media/home-main.359935c39288e92d4dba5c9f2445b91d.svg"
                style={{ height: "100%", width: "100%" }}
                alt="img"
              />
            </div>
          </div>
        </Typography>
      <About />
      </Box>
    </Box>
  );
}
