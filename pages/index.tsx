import Head from "next/head";
import Image from "next/image";
import HomeContent from "../components/HomeContent";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "../components/Navbar";

export default function Home({ nasaData }: any) {
  const classes = UseStyles();
  return (
    // <div className={styles.container}>
    <>
      <HomeContent />
    </>
  );
}

const UseStyles = makeStyles((theme) => {
  return {
    root: {
      background: "#000",
    },
  };
});
