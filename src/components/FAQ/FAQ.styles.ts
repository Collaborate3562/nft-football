import styled from "styled-components";

export const FAQWrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  padding: 50px 0;

  @media screen and (min-width: 1100px) {
    max-width: 950px;
  }
`;

export const FAQItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

