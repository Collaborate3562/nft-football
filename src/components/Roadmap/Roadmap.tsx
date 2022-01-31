import React from "react";
import { RoadmapItems, RoadmapWrapper } from "./Roadmap.styles";
import { SectionTitle } from "../../theme";
import RoadmapItem from "./RoadmapItem";
import { v4 as randomID } from "uuid";

const ROADMAP_DATA = [
  {
    title: "Starting off!",
    description:
      "The Website and the Smart Contract are done and ready for the launch. Paid advertising on social media.",
    stage: "Qualifying stage",
  },
  {
    title: "Hear Us Out!",
    description:
      "Launching on NFT related websites. Announcing Giveaways and AirDrops on our Discord.",
    stage: "Group stage",
  },
  {
    title: "25% sold",
    description:
      "Announcing AirDrop winners and distributing the NFTs to them.",
    stage: "Round of 32",
  },
  {
    title: "50% sold",
    description:
      "Announcement of the new “Legends” collection to our NFT holders in the exclusive Discord groups.",
    stage: "Round of 16",
  },
  {
    title: "75% sold",
    description:
      "Exclusive NFT Airdrop for top holders (legends) + donation to a charity chosen in the Discord poll.",
    stage: "Quarterfinals",
  },
  {
    title: "90% sold",
    description: "Limited merch drop.",
    stage: "Semi-finals",
  },
  {
    title: "100% sold",
    description: "Starting the development of our pay-to-earn game.",
    stage: "Finals",
  },
];

function Roadmap() {
  const roadmapElements = ROADMAP_DATA.map((item) => (
    <RoadmapItem
      key={randomID()}
      title={item.title}
      description={item.description}
      stage={item.stage}
    />
  ));

  return (
    <RoadmapWrapper id="roadmap">
      <SectionTitle>Roadmap</SectionTitle>
      <RoadmapItems>{roadmapElements}</RoadmapItems>
    </RoadmapWrapper>
  );
}

export default Roadmap;
