import Head from "next/head";
import Image from "next/image";
import HomeContent from "../components/HomeContent";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "../components/Navbar";

export default function Home({ nasaData }: any) {
  const classes = useStyles();
  return (
    // <div className={styles.container}>
    <>
      <HomeContent />
    </>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: "#000",
    },
  };
});
