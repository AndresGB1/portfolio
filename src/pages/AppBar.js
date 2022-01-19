import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";
import Projects from "./Projects.js";
import Footer from "./Footer.js";
import "./Main.css";
import "../figures/figures.css";
import BannerSkills from "./BannerSkills.js";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide,
  IconButton,
  Typography,
  MenuItem,
  Box,
  Menu,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const useStyles = makeStyles({
  button: {
    textTransform: "none",
    color: "inherit",
    sx: { flexGrow: 1 },
  },
});
const alert = () => {
  console.log("clicked");
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const sections = ["Home", "Skills", "Projects", "Contact"];

export default function HideAppBar(props) {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <div className="headercolor">
        <section id="home">
          <HideOnScroll {...props}>
            <AppBar
              style={{
                background: "transparent",
                boxShadow: "none",
                paddingLeft: "11%",
                paddingRight: "11%",
                paddingTop: "1%",
              }}
            >
              <Toolbar>
                <div maxwidth="sm">
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {sections.map((section, index) => (
                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                          <Button
                            color="inherit"
                            sx={{ flexGrow: 1 }}
                            href={"#" + section.toLowerCase()}
                            style={{
                              textTransform: "none",
                              fontFamily: "Fira code",
                              fontStyle: "medium",
                              fontSize: "18px",
                              width: "5%",
                            }}
                          >
                            {section}
                          </Button>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </div>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {sections.map((section, index) => (
                    <Button
                      key={index}
                      color="inherit"
                      sx={{ flexGrow: 1 }}
                      href={"#" + section.toLowerCase()}
                      style={{
                        textTransform: "none",
                        fontFamily: "Fira code",
                        fontStyle: "medium",
                        fontSize: "18px",
                        width: "5%",
                      }}
                    >
                      {section}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
              <hr className="hr1" />
            </AppBar>
          </HideOnScroll>
          <br />

          <Header />
        </section>
        <hr className="hr2" />

        <a href="/" style={{ cursor: "pointer" }}>
          <div className="pe">
            <div className="cubo">
              <div className="cara" id="uno"></div>
              <div className="cara" id="dos"></div>
              <div className="cara" id="tres"></div>
              <div className="cara" id="cuatro"></div>
              <div className="cara" id="cinco"></div>
              <div className="cara" id="seis"></div>
            </div>
          </div>
        </a>
      </div>
      <section id="skills">
        <BannerSkills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
