import styled from "styled-components";

export const TeamCard = styled.div`
  flex: 1;
  border: 2px solid white;
  border-radius: 10px 10px 0 0;
  box-shadow: ${({ theme }) => theme.accentShadow};
  overflow: hidden;
  position: relative;

  :not(:last-of-type) {
    margin-right: 50px;
  }

  @media screen and (max-width: 850px) {
    :not(:last-of-type) {
      margin-right: 0px;
      margin-bottom: 50px;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    );
  }
`;

export const TeamImage = styled.img`
  width: 100%;
  margin-bottom: -10px;
  border-radius: ${({ theme }) => theme.accentShadow};

  @media screen and (max-width: 850px) {
    max-width: 350px;
  }

  @media screen and (max-width: 450px) {
    max-width: 250px;
  }
`;

export const TeamContent = styled.div`
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 32px;

  @media screen and (max-width: 1100px) {
    font-size: 28px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }

  @media screen and (max-width: 850px) {
    font-size: 28px;
  }
`;

export const TeamName = styled.span`
  color: white !important;
  font-weight: bold;
  position: relative;
`;

export const TeamRole = styled.span`
  background: ${({ theme }) => theme.gradientBg};
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  font-size: 14px;
  position: absolute;
  bottom: -12px;
  left: 0px;
  white-space: nowrap;
`;

export const TeamSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TeamSocialLink = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.themeTransition};

  &:hover {
    transform: scale(1.1);
  }
`;
