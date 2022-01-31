import React from "react";
import { GradientText } from "../../theme";
import { FooterCopyright, FooterWrapper } from "./Footer.styles";
import { SocialGroup } from "../SocialGroup";

function Footer() {
  return (
    <FooterWrapper>
      <FooterCopyright>
        Copyright &copy; 2022 <GradientText>Football Punks</GradientText>
      </FooterCopyright>
      <SocialGroup />
    </FooterWrapper>
  );
}

export default Footer;
