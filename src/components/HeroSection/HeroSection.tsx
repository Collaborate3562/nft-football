import React from "react";
import {
  HeroBanner,
  HeroContent,
  HeroLink,
  HeroText,
  HeroTitle,
  HeroWrapper,
} from "./HeroSection.styles";
import bannerImage from "../../assets/banner.jpg";
import { SocialGroup } from "../SocialGroup";

function HeroSection() {
  return (
    <HeroWrapper>
      <HeroBanner src={bannerImage} />
      <HeroContent>
        <HeroTitle>Football Punks</HeroTitle>
        <HeroLink to="/mint">Mint</HeroLink>
        <HeroText>An exclusive collection of unique, hand-made NFTs.</HeroText>
        <SocialGroup />
      </HeroContent>
    </HeroWrapper>
  );
}

export default HeroSection;
