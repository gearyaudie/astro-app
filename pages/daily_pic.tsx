import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";

const daily_pic = ({ data }: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{data.title}</h1>
      <img
        src={data.url}
        alt=""
        width={320}
        height={480}
        className={classes.mainImg}
      />
      <p className={classes.desc}>{data.explanation}</p>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "1000px",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(12),
      margin: "0 auto",
      marginTop: "2em",
      color: "#fff",
    },
    title: {
      fontSize: "3.5em",
      fontWeight: 600,
      color: "#D3D3D3",
    },
    mainImg: {
      margin: "3em auto",
    },
    desc: {
      fontSize: "1.6em",
      fontWeight: 100,
      color: "#808080",
    },
  };
});

export default daily_pic;

export async function getStaticProps() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=d4lQ5TbFkVCctkq7MgkYT4hBmcyQPRcIjqI0E9ww"
  );

  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
