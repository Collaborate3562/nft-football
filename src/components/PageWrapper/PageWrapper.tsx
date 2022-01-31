import React from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  margin-top: ${({ theme }) => theme.navbarHeight}px;
  width: 100%;
`;

function PageWrapper(props: any) {
  return <MainWrapper>{props.children}</MainWrapper>;
}

export default PageWrapper;
