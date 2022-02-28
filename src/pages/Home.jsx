import React from "react";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import Hero from "../components/Hero";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <TopNavbar />

      <Navbar />
      <Hero />
      <Video />
    </>
  );
};

export default Home;
