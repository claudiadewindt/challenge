import React from "react";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import Hero from "../components/Hero";
import HeroImage from "../components/HeroImage";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <HeroImage />
      <Video />
      <Hero />
    </>
  );
};

export default Home;
