import styled from "styled-components";

export const SocialGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  font-size: 22px;
  color: white;
  transition: ${({ theme }) => theme.themeTransition};
  border: 2px solid white;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.accentShadow};
  background: ${({ theme }) => theme.bgColor};
  overflow: hidden;

  :not(:first-of-type) {
    margin-left: 20px;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const SocialLinkImage = styled.img`
  width: 100%;
  height: 100%;
`;
