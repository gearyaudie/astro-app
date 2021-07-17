import React from "react";
import Link from "next/link";
import {
  AppBar,
  Drawer,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

export const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="relative">
        <Toolbar className={classes.toolbar}>
          <Link href="/">
            <img src="./assets/logo.png" className={classes.logoImg} alt="" />
          </Link>
          <Typography className={classes.mainTxt}>
            <Link href="/">astro</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: classes.paper }}>
        <LinkedInIcon className={classes.icons} />
        <InstagramIcon className={classes.icons} />
        <GitHubIcon className={classes.icons} />
      </Drawer>
    </div>
  );
};

const drawerWidth = 25;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      position: "relative",
    },
    appBar: {
      background: "#000",
      color: "#f4f4f4",
    },
    toolbar: {},
    logoImg: {
      width: 55,
      margin: "1em",
      zIndex: 1000,
      cursor: "pointer",
    },
    mainTxt: {
      position: "absolute",
      left: `calc(50% - ${drawerWidth}px)`,
      fontSize: 30,
      fontWeight: 500,
      color: "#d3d3d3",
    },
    paper: {
      display: "flex",
      justifyContent: "flex-end",
      background: "#000",
      margin: "0 2em",
      color: "#f4f4f4",
      width: drawerWidth,
      height: "95vh",
      zIndex: 10,
    },
    icons: {
      margin: "0.5em 0",
      transition: "0.3s",
      cursor: "pointer",
      "&:hover": {
        color: "#55BEC0",
        transform: "translate(0, -0.2em)",
      },
    },
  };
});
