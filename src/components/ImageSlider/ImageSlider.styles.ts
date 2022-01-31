import styled, { keyframes } from "styled-components";
import { PLAYERS_IMAGES } from "../../images";

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 380px;
  gap: 20px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 600px) {
    height: 280px;
  }
`;

export const SliderContainer = styled.ul`
  display: flex;
  height: 100%;
  width: calc(-330px * ${PLAYERS_IMAGES.length * 2});

  @media screen and (max-width: 1200px) {
    width: calc(-280px * ${PLAYERS_IMAGES.length * 2});
  }

  @media screen and (max-width: 600px) {
    width: calc(-230px * ${PLAYERS_IMAGES.length * 2});
  }
`;

const infiniteScroll1 = keyframes`
  100% {
    transform: translateX(calc(-330px * ${PLAYERS_IMAGES.length}));
  }
`;

const infiniteScroll2 = keyframes`
  100% {
    transform: translateX(calc(-280px * ${PLAYERS_IMAGES.length}));
  }
`;

const infiniteScroll3 = keyframes`
  100% {
    transform: translateX(calc(-230px * ${PLAYERS_IMAGES.length}));
  }
`;

export const SliderItem = styled.li`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 330px;
  animation: ${infiniteScroll1} 50s linear infinite;

  @media screen and (max-width: 1200px) {
    min-width: 280px;
    animation-name: ${infiniteScroll2};
  }

  @media screen and (max-width: 600px) {
    min-width: 230px;
    animation-name: ${infiniteScroll3};
  }
`;

export const SliderImage = styled.img`
  max-width: 90%;
  border-radius: 5px;
  border: 2px solid white;
  box-shadow: ${({theme}) => theme.accentShadow};
`;
