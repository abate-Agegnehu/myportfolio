import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    Home: homeRef,
    About: aboutRef,
    Skill: skillRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ["Home", "About", "Skill", "Projects", "Contact"];

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          background:
            "linear-gradient(to left, transparent 10%, rgba(10, 200, 150, 0.8) 100%)",
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Container
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-around",
              color: "black",
              [theme.breakpoints.down("sm")]: { display: "none" },
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item}
                variant="h6"
                onClick={() => scrollToSection(item)}
                sx={{ cursor: "pointer" }}
              >
                {item}
              </Typography>
            ))}
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background:
              "linear-gradient(to left, transparent 0%, rgba(10, 200, 150, 0.6) 100%)",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
          },
        }}
      >
        <List
          sx={{ width: 250 }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems.map((text) => (
            <ListItem button key={text} onClick={() => scrollToSection(text)}>
              <ListItemText
                primary={text}
                sx={{
                  textAlign: "center",
                  fontSize: { sm: "1rem", xs: "1.2rem" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container ref={homeRef} sx={{ paddingTop: theme.spacing(10) }}>
        <Home />
      </Container>
      <Container ref={aboutRef} sx={{ paddingTop: theme.spacing(10) }}>
        <About />
      </Container>
      <Container ref={skillRef} sx={{ paddingTop: theme.spacing(10) }}>
        <Skill />
      </Container>
      <Container ref={projectsRef} sx={{ paddingTop: theme.spacing(10) }}>
        <Projects />
      </Container>
      <Container ref={contactRef} sx={{ paddingTop: theme.spacing(10) }}>
        <Contact />
      </Container>
    </div>
  );
};

export default NavBar;
