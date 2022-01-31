import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 85%;
  margin: 0 auto;
  padding: 50px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: 1100px) {
    max-width: 950px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const FooterCopyright = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;

  span {
    font-size: 20px !important;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
    font-size: 14px;

    span {
      font-size: 16px !important;
    }
  }
`;
