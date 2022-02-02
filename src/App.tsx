import { useMemo } from "react";
import * as anchor from "@project-serum/anchor";
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
import { getCandyMachineId } from "./web3/utils";

const candyMachineId = getCandyMachineId();
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl("devnet")
);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;

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
          <WalletDialogProvider>
            <GlobalStyles />
            <Header />
            <PageWrapper>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/mint"
                  element={
                    <MintingPage
                      candyMachineId={candyMachineId}
                      connection={connection}
                      startDate={startDateSeed}
                      txTimeout={txTimeoutInMilliseconds}
                      rpcHost={rpcHost}
                    />
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </PageWrapper>
            <Footer />
          </WalletDialogProvider>
        </ThemeProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
