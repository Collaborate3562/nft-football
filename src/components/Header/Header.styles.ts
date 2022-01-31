import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { WalletMultiButton } from "../../web3/WalletMultiButton";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: ${({ theme }) => theme.navbarHeight}px;
  padding: 0 10%;

  background: ${({ theme }) => theme.bgColor};
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 50;

  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  transition: ${({ theme }) => theme.themeTransition};

  @media screen and (max-width: 600px) {
    padding: 0 5%;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LogoIMG = styled.img`
  max-height: 50px;

  @media screen and (max-width: 460px) {
    max-height: 30px;
  }
`;

export const NavWrapper = styled.nav<{ isActive: boolean }>`
  height: 100%;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  align-items: center;
  z-index: 100;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    background: ${({ theme }) => theme.bgColor};

    position: absolute;
    top: ${({ theme }) => theme.navbarHeight}px;
    left: 0;
    right: 0;
    height: calc(100vh - ${({ theme }) => theme.navbarHeight}px);
    padding: 100px 0 150px;
  }
`;

export const LinkWrapper = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  outline: 10px solid transparent;
  transition: ${({ theme }) => theme.themeTransition};

  &.active {
    background: ${({ theme }) => theme.gradientBg};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    outline: 4px solid ${({ theme }) => theme.textColor};
  }

  @media screen and (max-width: 950px) {
    font-size: 22px;
  }
`;

export const NavActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavIcon = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;

  @media screen and (min-width: 951px) {
    display: none;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(0.95);
  }
`;

export const CTAButton = styled(WalletDialogButton)`
  padding: 10px 26px !important;

  color: black !important;
  background: white !important;
  text-decoration: none !important;
  cursor: pointer;
  white-space: nowrap !important;

  border: none !important;
  border-radius: 30px !important;
  font-size: 16px !important;
  font-weight: bold !important;

  transition: 0.2s ease-out !important;
  text-shadow: none !important;
  text-transform: uppercase !important;
  box-shadow: ${({ theme }) => theme.accentShadow} !important;
  animation: ${pulseAnimation} 2s ease-in-out infinite !important;

  @media screen and (max-width: 700px) {
    padding: 10px 24px !important;
    font-size: 16px !important;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 18px !important;
    font-size: 14px !important;
  }
`;

export const WalletButton = styled(WalletMultiButton)`
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 25px !important;

  color: black !important;
  background: white !important;
  text-decoration: none !important;
  cursor: pointer;
  white-space: nowrap !important;

  border: none !important;
  border-radius: 30px !important;
  font-size: 16px !important;
  font-weight: bold !important;

  text-shadow: none !important;
  text-transform: uppercase !important;
  box-shadow: ${({ theme }) => theme.accentShadow} !important;

  @media screen and (max-width: 700px) {
    max-width: 200px;
    padding: 10px 20px !important;
    font-size: 16px !important;
  }

  @media screen and (max-width: 500px) {
    max-width: 200px;
    padding: 10px 15px !important;
    font-size: 14px !important;
  }
`;
