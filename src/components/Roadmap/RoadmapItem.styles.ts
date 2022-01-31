import styled from "styled-components";
import Flip from "react-reveal/Flip";

export const AnimationWrapper = styled(Flip)`
  width: 100%;
`;

export const ItemWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  margin: 10px 0;
  overflow-wrap: break-word;
  position: relative;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 40px;
  }

  &::after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.textColor};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    top: calc(50% - 8px);
    right: -10px;
    transform: rotate(45deg);
    z-index: 20;
  }

  &:nth-child(odd)::after {
    right: auto;
    left: -10px;
  }

  &::before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.textColor};
    box-shadow: ${({ theme }) => theme.accentShadow};
    height: 16px;
    width: 16px;
    top: calc(50% - 7px);
    right: 31px;
    transform: rotate(45deg);
    z-index: 5;
  }

  &:nth-child(odd)::before {
    right: auto;
    left: 31px;
  }

  &:hover {
    & > div,
    &::before {
      background: ${({ theme }) => theme.textColor};
    }

    * {
      color: ${({ theme }) => theme.bgColor};
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    align-self: flex-start;
    justify-content: flex-start;
    padding: 0 0 0 30px !important;

    &::after {
      left: -9px !important;
    }

    &::before {
      right: auto;
      left: 21px !important;
      border: none;
      border-bottom: 2px solid ${({ theme }) => theme.textColor};
      border-left: 2px solid ${({ theme }) => theme.textColor};
    }
  }
`;

export const ItemContent = styled.div`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.textColor};
  box-shadow: ${({ theme }) => theme.accentShadow};
  background: ${({ theme }) => theme.bgColor};
  border-radius: 10px;
  padding: 20px;
  z-index: 10;

  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const ItemTitle = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ItemDescription = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 25px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ItemStage = styled.time`
  font-weight: bold;
  text-align: right;
  width: 100%;
  display: block;
  margin-top: 10px;
  font-size: 16px;
  font-style: italic;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
