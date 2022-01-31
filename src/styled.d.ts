import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    navbarHeight: number;
    themeTransition: string;
    accentShadow: string;
    gradientBg: string;
  }
}