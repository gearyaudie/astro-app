import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const HomeContent: React.FC<any> = ({ data }) => {
  const classes = UseStyles();
  const router = useRouter();

  return (
    <Container className={classes.root}>
      <div className={classes.mainTextContainer}>
        <Typography
          variant="h2"
          color="inherit"
          gutterBottom
          className={classes.mainText}
        >
          <span className={classes.specialTxt}>
            Astronomy Picture of The Day,
          </span>
        </Typography>
        <Typography variant="h6" className={classes.secondTxt}>
          Check out the daily astronomy picture from the button below. Get real
          time, updated content through astro.
        </Typography>

        <Button
          variant="outlined"
          color="secondary"
          onClick={() => router.push("/daily_pic")}
          className={classes.mainBtn}
        >
          Click Here
        </Button>
      </div>
      <div className={classes.mainImgContainer}>
        <Image
          src="/assets/main-img-2.jpg"
          alt="main-image"
          width={350}
          height={500}
          className={classes.mainImg}
        ></Image>
      </div>
      {/* <h1>{data.title}</h1>
        <img src={data.url} alt="" /> */}
      {/* </div> */}
    </Container>
  );
};

const UseStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      maxWidth: "1400px",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(12),
      "@media(max-width: 800px)": {
        flexDirection: "column",
      },
      "@media(max-width: 400px)": {
        padding: theme.spacing(9),
      },
    },
    mainTextContainer: {
      flex: "2.5",
      width: "80%",
    },
    mainText: {
      color: "#ededed",
      fontSize: "4.5em",
      fontWeight: 600,
      "@media(max-width: 800px)": {
        fontSize: "3em",
      },
    },
    specialTxt: {
      color: "#ededed",
    },
    secondTxt: {
      fontWeight: 300,
      color: "#808080",
      width: "75%",
      "@media(max-width: 800px)": {
        fontSize: "1em",
      },
    },
    mainBtn: {
      padding: `${theme.spacing(1.5)}px ${theme.spacing(3)}px`,
      margin: `${theme.spacing(2)}px auto`,
    },
    mainImgContainer: {
      flex: 2,
      marginTop: theme.spacing(10),
    },
    mainImg: {
      minWidth: 200,
    },
  };
});

export default HomeContent;
