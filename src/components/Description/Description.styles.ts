import styled from "styled-components";

export const DescriptionWrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  padding: 50px 0;

  @media screen and (min-width: 1100px) {
    max-width: 950px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const DescriptionImageWrapper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

export const DescriptionImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: ${({ theme }) => theme.accentShadow};

  @media screen and (max-width: 800px) {
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const DescriptionContent = styled.div`
  flex: 3;
  margin-left: 50px;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    margin-bottom: 50px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const DescriptionSeparator = styled.span`
  display: block;
  height: 15px;
  width: 15px;
`;
