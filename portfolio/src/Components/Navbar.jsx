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
import { Avatar } from "@mui/material";
import { Link, animateScroll } from "react-scroll";
import { useState } from "react";
import { saveAs } from "file-saver";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "about" },
  { name: "Skills", link: "skills" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
  { name: "Resume", link: "bt" },
];
const onButtonClick = () => {
    saveAs('https://drive.google.com/u/0/uc?id=1MpM0hx_z1orh_0doTLNW5BoU_FXJ_VIE&export=download')
}
export default function Navbar(props: Props) {
  const { window } = props;
  const [head, setHead] = useState(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Avatar src="./images.PNG" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.link != "bt" ? (
              <Link
                activeClass="active"
                to={item.link}
                onClick={() => {
                  item.link === "/"
                    ? animateScroll.scrollToTop()
                    : setHead(true);
                }}
                spy={true}
                smooth={true}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            ) : (
              <a
                href="https://drive.google.com/file/d/1MpM0hx_z1orh_0doTLNW5BoU_FXJ_VIE/view"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none",color:"#000000DE" }}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </a>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} >
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
          ><a href="/">

            <Avatar src="./images.PNG" sx={{ width: 56, height: 56 }} />
          </a>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, pr: "20px" }} id="nav">
                      {navItems.map((item,index) => (
               
              <Link
                activeClass="active"
                to={item.link}
                onClick={() => {
                  item.link === "/"
                    ? animateScroll.scrollToTop(): setHead(true);
                }}
                spy={true}
                smooth={true}
              >
                <Button
                  key={index}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    px: "30px",
                    fontSize: "20px",
                  }}
                                  onClick={()=>{item.link === "bt" ? onButtonClick() : setHead(true)}}
                              >
                  {item.name}
                </Button>
              </Link>
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
      </Box>
    </Box>
  );
}