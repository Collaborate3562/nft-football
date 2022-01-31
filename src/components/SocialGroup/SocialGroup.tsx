import React from "react";
import { SocialGroupWrapper, SocialLink, SocialLinkImage } from "./SocialGroup.styles";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import OpenSeaImage from '../../assets/opensea.svg';

function SocialGroup() {
  return (
    <SocialGroupWrapper>
      <SocialLink href="https://twitter.com" target="_blank">
        <FaTwitter />
      </SocialLink>
      <SocialLink href="https://discord.com" target="_blank">
        <FaDiscord />
      </SocialLink>
      <SocialLink
        href="https://opensea.io/collection/footballpunks"
        target="_blank"
      >
        <SocialLinkImage src={OpenSeaImage} />
      </SocialLink>
    </SocialGroupWrapper>
  );
}

export default SocialGroup;
