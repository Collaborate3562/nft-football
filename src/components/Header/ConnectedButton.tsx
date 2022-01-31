import React from "react";
import { WalletButton } from "./Header.styles";
import "./ConnectedButton.css";

export interface ConnectedProps {
  children: React.ReactNode;
}

export const ConnectedButton = (props: ConnectedProps) => {
  return (
    <WalletButton>
      <span
        style={{
          color: "black",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {props.children}
      </span>
    </WalletButton>
  );
};
