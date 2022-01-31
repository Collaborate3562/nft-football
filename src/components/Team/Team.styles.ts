import styled from "styled-components";

export const TeamWrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  padding: 50px 0;

  @media screen and (min-width: 1100px) {
    max-width: 950px;
  }
`;

export const TeamItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 50px; */

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;