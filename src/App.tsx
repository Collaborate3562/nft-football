import { useMemo } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer, Header } from "./components";
import { PageWrapper } from "./components/PageWrapper";
import HomePage from "./pages/HomePage";
import MintingPage from "./pages/MintingPage";
import { GlobalStyles, darkTheme } from "./theme";

import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
          <WalletDialogProvider>
            <Header />
          </WalletDialogProvider>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mint" element={<MintingPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </PageWrapper>
          <Footer />
        </ThemeProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
