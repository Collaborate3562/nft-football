import styled, {
  createGlobalStyle,
  DefaultTheme,
  keyframes,
} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }

  body { 
    background: ${({ theme }) => theme.bgColor};
  }

  h1, h2, h3, p, span, div {
    color: ${({ theme }) => theme.textColor};
    transition: ${({ theme }) => theme.themeTransition};
  }

  h1, h2, h3, a {
    font-family: "Outfit", sans-serif;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 600px) {
      font-size: 28px;
    }
  }

  h2, h3 {
    background: ${({ theme }) => theme.gradientBg};
    -webkit-background-clip: text !important;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }

  section:not(:last-of-type) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const darkTheme: DefaultTheme = {
  bgColor: "#111",
  textColor: "#fff",
  navbarHeight: 80,
  themeTransition: "0.15s ease-out",
  accentShadow: "rgb(255, 0, 0) 0px 0px 12px, rgb(0, 0, 255) 0px 0px 20px",
  gradientBg: "linear-gradient(-70deg, rgb(129, 15, 171), rgb(219, 20, 73));",
};

export const flowingGradient = keyframes`
  from {
    background-position: left;
  } to {
    background-position: right;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;

  background: linear-gradient(
    -70deg,
    rgb(219, 20, 73),
    rgb(129, 15, 171),
    rgb(219, 20, 73)
  );
  background-size: 500%;
  background-position: left;

  animation: ${flowingGradient} 2s linear infinite;

  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(
    -70deg,
    rgb(219, 20, 73),
    rgb(129, 15, 171),
    rgb(219, 20, 73)
  );
  background-size: 500%;
  background-position: left;
  font-family: "Outfit", sans-serif;

  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;

  animation: ${flowingGradient} 2s linear infinite;

  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`;
