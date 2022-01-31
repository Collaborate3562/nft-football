import styled from "styled-components";

export const IntroductionWrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  padding: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1100px) {
    max-width: 950px;
  }
`;

export const IntroductionTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;

  background: none;
  -webkit-background-clip: unset !important;
  background-clip: unset !important;
  -webkit-text-fill-color: initial !important;

  span {
    font-family: "Outfit", sans-serif;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;

    span {
      display: inline-block;
    }
  }
`;

export const IntroductionText = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  text-align: center;
  max-width: 750px;
  margin: 10px 0;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;
