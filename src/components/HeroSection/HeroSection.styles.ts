import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const HeroWrapper = styled.div`
  min-height: 450px;
  display: flex;
  justify-content: flex-start;
  padding: 0 8%;
  position: relative;

  /* Video overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
  }

  * {
    color: white !important;
  }
  
  @media screen and (max-width: 600px) {
    min-height: 350px;
  }
`;

export const HeroBanner = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const appearAnimation = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  } to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex: 3;
  animation: ${appearAnimation} 1s ease-out forwards;
  z-index: 20;
`;

export const HeroTitle = styled.h1`
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: ${({theme}) => theme.accentShadow};

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

export const HeroText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const HeroLink = styled(Link)`
  margin: 30px 0 50px;
  padding: 10px 0;
  width: 150px;

  color: black !important;
  background: white;
  text-decoration: none;
  cursor: pointer;

  border: none;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;

  transition: 0.2s ease-out;
  text-shadow: none;
  text-transform: uppercase;
  box-shadow: ${({theme}) => theme.accentShadow};

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 600px) {
    width: 100px;
    font-size: 20px;
  }
`;