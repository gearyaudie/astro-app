import React from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";

const Layout = ({ children }: any) => {
  const classes = UseStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

const UseStyles = makeStyles((theme) => {
  return {
    root: {
      background: "#000",
    },
  };
});

export default Layout;
