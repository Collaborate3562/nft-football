import React from "react";

import {
  Description,
  FAQ,
  HeroSection,
  ImageSlider,
  Introduction,
  Roadmap,
  Team,
} from "../components";

function Homepage() {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <Introduction />
      <Roadmap />
      <Description />
      <Team />
      <FAQ />
    </>
  );
}

export default Homepage;
