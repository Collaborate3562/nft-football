import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { TeamCard, TeamContent, TeamImage, TeamName, TeamRole, TeamSocialLink, TeamSocials } from "./TeamItem.styles";

interface IProps {
  image: string;
  name: string;
  role: string;
  twitterLink: string;
  instagramLink: string;
}

function TeamItem({ name, image, role, twitterLink, instagramLink }: IProps) {
  return (
    <TeamCard>
      <TeamImage src={image} draggable={false} />
      <TeamContent>
        <TeamName>
          {name}
          <TeamRole>{role}</TeamRole>
        </TeamName>
        <TeamSocials>
          <TeamSocialLink href={twitterLink} target="_blank">
            <FaTwitter />
          </TeamSocialLink>
          <TeamSocialLink href={instagramLink} target="_blank">
            <FaInstagram />
          </TeamSocialLink>
        </TeamSocials>
      </TeamContent>
    </TeamCard>
  );
}

export default TeamItem;
