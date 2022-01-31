import { useEffect, useMemo, useState, useCallback } from "react";
import * as anchor from "@project-serum/anchor";
import { SectionTitle } from "../../theme";
import {
  MintingBox,
  MintingContainer,
  MintingContent,
  MintingImage,
  MintingImageWrapper,
  MintingWrapper,
  MintTitle,
  MintActions,
  MintQuantityWrapper,
  NewLine,
  MintText,
  LoadingCandyMachine,
} from "./MintSection.styles";
import useImageChanger from "../../hooks/useImageChanger";
import { MintButton } from "./MintButton";

// Web3 import
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { getCandyMachineId, AlertState, getMintPrice } from "../../web3/utils";
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintToken,
} from "../../web3/candy-machine";

// const PRICE = 0.08;
// const REMAINING = 238;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl("devnet")
);

function MintSection() {
  const candyMachineId = getCandyMachineId();
  const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
  const txTimeout = 30000;

  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const rpcUrl = rpcHost;
  const wallet = useWallet();

  // const [quantity, setQuantity] = useState(1);
  const image = useImageChanger();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const refreshCandyMachineState = useCallback(async () => {
    if (!anchorWallet) {
      return;
    }

    if (candyMachineId) {
      try {
        const cndy = await getCandyMachineState(
          anchorWallet,
          candyMachineId,
          connection
        );
        setCandyMachine(cndy);
      } catch (e) {
        console.log("There was a problem fetching Candy Machine state");
        console.log(e);
      }
    }
  }, [anchorWallet, candyMachineId]);

  const onMint = async () => {
    try {
      setIsUserMinting(true);
      document.getElementById("#identity")?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (await mintToken(candyMachine, wallet.publicKey))[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            txTimeout,
            connection,
            true
          );
        }

        if (status && !status.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (!error.message) {
          message = "Transaction Timeout! Please try again.";
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      setIsUserMinting(false);
    }
  };

  useEffect(() => {
    refreshCandyMachineState();
  }, [anchorWallet, candyMachineId, refreshCandyMachineState]);

  // const increment = () => setQuantity((prevCount) => prevCount + 1);
  // const decrement = () =>
  //   setQuantity((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));

  // const remainingPunks = REMAINING - quantity;
  // const totalCost = PRICE * quantity;

  return (
    <MintingWrapper id="description">
      <SectionTitle>Mint</SectionTitle>
      <MintingContainer>
        <MintingImageWrapper>
          <MintingImage
            src={image}
            alt="Football Punks NFT"
            draggable={false}
          />
        </MintingImageWrapper>
        <MintingContent>
          <MintingBox>
            <MintTitle>
              Purchase your <NewLine>Football Punk!</NewLine>
            </MintTitle>

            {candyMachine ? (
              <>
                <MintText>
                  {candyMachine &&
                    `${
                      candyMachine.state.itemsRemaining
                    } remaining / ${getMintPrice(candyMachine)} SOL each`}
                </MintText>
                <MintActions>
                  <MintQuantityWrapper>
                    {candyMachine?.state.isActive &&
                    candyMachine?.state.gatekeeper &&
                    wallet.publicKey &&
                    wallet.signTransaction ? (
                      <GatewayProvider
                        wallet={{
                          publicKey:
                            wallet.publicKey ||
                            new PublicKey(CANDY_MACHINE_PROGRAM),
                          //@ts-ignore
                          signTransaction: wallet.signTransaction,
                        }}
                        gatekeeperNetwork={
                          candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                        }
                        clusterUrl={rpcUrl}
                        options={{ autoShowModal: false }}
                      >
                        <MintButton
                          candyMachine={candyMachine}
                          isMinting={isUserMinting}
                          onMint={onMint}
                        />
                      </GatewayProvider>
                    ) : (
                      <MintButton
                        candyMachine={candyMachine}
                        isMinting={isUserMinting}
                        onMint={onMint}
                      />
                    )}
                  </MintQuantityWrapper>
                </MintActions>
              </>
            ) : (
              <LoadingCandyMachine />
            )}

            {/* <MintText>
              Total Cost: <b>{totalCost.toFixed(2)}</b> ETH
            </MintText> */}
          </MintingBox>
        </MintingContent>
      </MintingContainer>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          <span
            style={{ color: alertState.severity === "error" ? "red" : "green" }}
          >
            {alertState.message}
          </span>
        </Alert>
      </Snackbar>
    </MintingWrapper>
  );
}

export default MintSection;
