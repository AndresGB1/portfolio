import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Header.js";
import Projects from "./Projects.js";
import "./Main.css";
import "../figures/figures.css";
import BannerSkills from "./BannerSkills.js";
import {
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide,
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

export default function HideAppBar(props) {
  const classes = useStyles();

  return (
    <div>
      <div className="headercolor">
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
              <Button
                color="inherit"
                sx={{ flexGrow: 1 }}
                href="/"
                style={{
                  textTransform: "none",
                  fontFamily: "Fira code",
                  fontStyle: "medium",
                  fontSize: "18px",
                  width: "5%",
                }}
              >
                Home
              </Button>
              <Button
                
                to="/skills"
                color="inherit"
                sx={{ flexGrow: 1 }}
                style={{
                  textTransform: "none",
                  fontFamily: "Fira code",
                  fontStyle: "medium",
                  fontSize: "16px",
                  width: "5%",
                }}
              >
                Skills
              </Button>
              <Button
                color="inherit"
                sx={{ flexGrow: 1 }}
                style={{
                  textTransform: "none",
                  fontFamily: "Fira code",
                  fontStyle: "medium",
                  fontSize: "16px",
                  width: "5%",
                }}
              >
                Projects
              </Button>
              <Button
                color="inherit"
                sx={{ flexGrow: 1 }}
                style={{
                  textTransform: "none",
                  fontFamily: "Fira code",
                  fontStyle: "medium",
                  fontSize: "16px",
                  width: "5%",
                }}
              >
                Contact{" "}
              </Button>
            </Toolbar>
            <hr className="hr1" />
          </AppBar>
        </HideOnScroll>
        <br />
        <Header />
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
      <BannerSkills />
      
      <Projects />
    </div>
  );
}
