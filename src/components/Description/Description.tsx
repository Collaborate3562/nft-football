import { SectionTitle } from "../../theme";
import {
  DescriptionContainer,
  DescriptionContent,
  DescriptionImage,
  DescriptionImageWrapper,
  DescriptionSeparator,
  DescriptionText,
  DescriptionWrapper,
} from "./Description.styles";
import useImageChanger from "../../hooks/useImageChanger";

function Description() {
  const image = useImageChanger();

  return (
    <DescriptionWrapper id="description">
      <SectionTitle>Description</SectionTitle>
      <DescriptionContainer>
        <DescriptionImageWrapper>
          <DescriptionImage src={image} alt="Football Punks NFT" draggable={false} />
        </DescriptionImageWrapper>
        <DescriptionContent>
          <DescriptionText>
            A total of 365 NFTs will be distributed evenly during the minting
            stage of our project. We envision Football Punks being a global,
            exclusive community that brings together members who share
            admiration for football. <DescriptionSeparator />
            Our team is committed to integrating Football Punks into Web3:
            bridging the football community with the Metaverse. <DescriptionSeparator />
            It's time to choose your favorite team and cheer them on to the
            World Cup final blockchain.
          </DescriptionText>
        </DescriptionContent>
      </DescriptionContainer>
    </DescriptionWrapper>
  );
}

export default Description;
