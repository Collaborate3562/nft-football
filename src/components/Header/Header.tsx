import { useEffect, useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import LogoImage from "../../assets/logo.png";
import { animateScroll } from "react-scroll";
import useWidth from "../../hooks/useWidth";
import { v4 as randomID } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderContainer,
  LinkWrapper,
  Logo,
  NavActions,
  NavLink,
  NavWrapper,
  NavIcon,
  LogoIMG,
  CTAButton,
} from "./Header.styles";

import { useWallet } from "@solana/wallet-adapter-react";
import { ConnectedButton } from "./ConnectedButton";

const LINKS = [
  { to: "roadmap", title: "Roadmap" },
  { to: "description", title: "Description" },
  { to: "team", title: "Team" },
  { to: "faq", title: "FAQ" },
];

const MOBILE_BREAKPOINT = 950; // DON'T EVER CHANGE

function Header() {
  const screenWidth = useWidth();
  const [navIsActive, setNavIsActive] = useState(
    screenWidth > MOBILE_BREAKPOINT
  );

  const wallet = useWallet();

  const navigate = useNavigate();
  const location = useLocation();
  const isMintPage = location.pathname === "/mint";

  useEffect(() => {
    if (screenWidth <= MOBILE_BREAKPOINT) setNavIsActive(false);
  }, [screenWidth]);

  const logoClickHandler = () => {
    navigate("/");
    animateScroll.scrollToTop();
  };

  const toggleNav = () => {
    if (!navIsActive) {
      setNavIsActive(true);
      document.body.style.overflow = "hidden";
    } else {
      setNavIsActive(false);
      document.body.style.overflow = "";
    }
  };

  const navLinks = LINKS.map((link) => (
    <LinkWrapper key={randomID()}>
      <NavLink
        spy
        offset={-70}
        smooth
        to={link.to}
        onClick={screenWidth <= MOBILE_BREAKPOINT ? toggleNav : undefined}
      >
        {link.title}
      </NavLink>
    </LinkWrapper>
  ));

  return (
    <HeaderContainer>
      <Logo onClick={logoClickHandler}>
        <LogoIMG src={LogoImage} alt="Football Punks" />
      </Logo>
      {!isMintPage && (
        <NavWrapper
          isActive={
            (navIsActive && screenWidth <= MOBILE_BREAKPOINT) ||
            screenWidth > MOBILE_BREAKPOINT
          }
        >
          {navLinks}
        </NavWrapper>
      )}
      <NavActions>
        {!wallet.connected ? (
          <CTAButton>
            <span style={{ color: "black" }}>Connect Wallet</span>
          </CTAButton>
        ) : (
          <ConnectedButton>{wallet.publicKey?.toString()}</ConnectedButton>
        )}
        {!isMintPage && (
          <NavIcon onClick={toggleNav}>
            {!navIsActive ? <MdOutlineMenu /> : <MdClose />}
          </NavIcon>
        )}
      </NavActions>
    </HeaderContainer>
  );
}

export default Header;
