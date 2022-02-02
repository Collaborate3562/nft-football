import React from "react";
import {
  SocialGroupWrapper,
  SocialLink,
  SocialLinkImage,
} from "./SocialGroup.styles";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import MagicEdenImage from "../../assets/magiceden.png";

function SocialGroup() {
  return (
    <SocialGroupWrapper>
      <SocialLink href="https://twitter.com" target="_blank">
        <FaTwitter />
      </SocialLink>
      <SocialLink href="https://discord.com" target="_blank">
        <FaDiscord />
      </SocialLink>
      <SocialLink href="https://magiceden.io/u/footballpunks" target="_blank">
        <SocialLinkImage src={MagicEdenImage} />
      </SocialLink>
    </SocialGroupWrapper>
  );
}

export default SocialGroup;
