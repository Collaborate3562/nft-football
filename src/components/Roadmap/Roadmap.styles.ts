import styled from "styled-components";

export const RoadmapWrapper = styled.section`
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

export const RoadmapItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media screen and (min-width: 1100px) {
    max-width: 950px;
  }

  &::before {
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(50% - 1px);
    background: ${({ theme }) => theme.textColor};
  }

  @media screen and (max-width: 800px) {
    width: 96%;

    &::before {
      left: 0px;
    }
  }
`;
