import React from "react";
import { GradientText } from "../../theme";
import {
  IntroductionText,
  IntroductionTitle,
  IntroductionWrapper,
} from "./Introduction.styles";

function Introduction() {
  return (
    <IntroductionWrapper>
      <IntroductionTitle>
        <span>
          Your <GradientText>Player</GradientText>.
        </span>
        <span>
          Your <GradientText>Story</GradientText>.
        </span>
      </IntroductionTitle>
      <IntroductionText>
        Buying an NFT grants you early access to our soon-to-come play-to-earn
        game and exclusive group chats.
      </IntroductionText>
      <IntroductionText>
        Each Football Punk is custom-designed after football athletes who
        represent their national team.
      </IntroductionText>
    </IntroductionWrapper>
  );
}

export default Introduction;
