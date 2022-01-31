import styled from "styled-components";
import Fade from "react-reveal/Fade";

export const AnimationWrapper = styled(Fade)`
  width: 100%;
`;

export const FAQItemWrapper = styled.li`
  list-style: none;
  width: 100%;
  border: 2px solid white;
  box-shadow: ${({ theme }) => theme.accentShadow};
  border-radius: 10px;
  transition: ${({ theme }) => theme.themeTransition};
  user-select: none;

  :not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.textColor};

    * {
      color: ${({ theme }) => theme.bgColor};
    }
  }
`;

export const FAQHeader = styled.div`
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const FAQTitle = styled.h3`
  font-size: 22px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const FAQIcon = styled.div<{ rotated: boolean }>`
  flex-basis: min-content;
  font-size: 40px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textColor};

  transform: rotate(${(props) => (props.rotated ? "-90deg" : 0)});

  @media screen and (max-width: 600px) {
    font-size: 34px;
  }
`;

export const FAQAnswer = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "inherit" : "none")};
  height: auto;
  padding: 0 20px 20px;
  font-weight: bold;
  line-height: 25px;
`;

export const FAQText = styled.p`
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;