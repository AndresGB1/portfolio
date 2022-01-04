import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Header from "./Header.js";
import './Main.css'
import {
  makeStyles,
    
} from "@mui/styles";
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
    textTransform: 'none',
    color: 'inherit',
    sx: {flexGrow: 1}
  }
});


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
    <HideOnScroll {...props}>
      <AppBar style={{ background: "transparent", boxShadow: 'none',paddingLeft:"11%",paddingRight:"11%", paddingTop:"1%"}}>
        <Toolbar >
          <Button color="inherit" sx={{flexGrow: 1}}  style={{ textTransform: "none"}}>Home</Button>
          <Button color="inherit" sx={{flexGrow: 1}}  style={{ textTransform: "none"}}>Skills</Button>
          <Button color="inherit" sx={{flexGrow: 1}}  style={{ textTransform: "none"}}>Projects</Button>
          <Button color="inherit" sx={{flexGrow: 1}}  style={{ textTransform: "none"}} >Contact </Button>
          
        </Toolbar>
        <hr className="hr1" />
      </AppBar>
    </HideOnScroll>
    <br/><br/>

      
      <Header />
    </div>
  );
}
