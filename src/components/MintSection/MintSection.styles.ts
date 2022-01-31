import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

export const MintingWrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  padding: 50px 0;

  @media screen and (min-width: 1100px) {
    max-width: 950px;
  }
`;

export const MintingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const MintingImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 90%;
`;

export const MintingImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: ${({ theme }) => theme.accentShadow};

  @media screen and (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const MintingContent = styled.div`
  flex: 1;
  margin-left: 50px;
  width: 90%;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    margin-bottom: 50px;
  }

  * {
    font-family: "Outfit", sans-serif;
  }
`;

export const MintingBox = styled.div`
  padding: 30px;
  border: 2px solid white;
  box-shadow: ${({ theme }) => theme.accentShadow};
  border-radius: 10px;
  text-align: center;
`;

export const MintTitle = styled.p`
  font-size: 30px;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
`;

export const NewLine = styled.span`
  display: block;
`;

export const MintText = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const MintActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 20px;

  & > * {
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    height: 40px;
  }
`;

export const MintQuantityWrapper = styled.div`
  flex: 1;
  box-shadow: inset 0 0 0 2px white;
  border-radius: 10px;
  display: flex;
  align-items: center;

  & > * {
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    margin-right: 10px;
  }
`;

export const QuantityValue = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const QuantityControl = styled.div`
  border-radius: inherit;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: 0.1s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const CTAButton = styled.button`
  flex: 1;
  background: ${({ theme }) => theme.gradientBg};
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s ease-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.accentShadow}, inset 0 0 0 2px white;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const LoadingCandyMachine = styled(CircularProgress)`
  width: 100%;
  color: rgb(129, 15, 171) !important;
  margin: 20px 0;
`;
