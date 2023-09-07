import React from "react";
import { Navbar, Hero, Podcast, CTA, Episode, Footer } from "../../stories";
import callbg from "../../assets/img/call-bg.jpg";
const Home = () => {
  return (
    <>
      <Hero />
      <Podcast />
      <CTA bgImage={callbg} />
      <Episode />
    </>
  );
};

export default Home;
