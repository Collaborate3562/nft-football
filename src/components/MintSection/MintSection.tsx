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
import { useWallet } from "@solana/wallet-adapter-react";
import {
  AlertState,
  getAtaForMint,
  getMintPrice,
  toDate,
} from "../../web3/utils";
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  getCandyMachineState,
  mintToken,
} from "../../web3/candy-machine";
import { MintCountdown } from "./MintCountdown";

export interface MintProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

function MintSection(props: MintProps) {
  const [isUserMinting, setIsUserMinting] = useState(false);
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [isActive, setIsActive] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [whitelistTokenBalance, setWhitelistTokenBalance] = useState(0);
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const wallet = useWallet();

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

    if (props.candyMachineId) {
      try {
        const cndy = await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        );
        setCandyMachine(cndy);

        if (cndy.state.whitelistMintSettings) {
          let balance = 0;
          try {
            const tokenBalance = await props.connection.getTokenAccountBalance(
              (
                await getAtaForMint(
                  cndy.state.whitelistMintSettings.mint,
                  anchorWallet.publicKey
                )
              )[0]
            );

            balance = tokenBalance?.value?.uiAmount || 0;
          } catch (e) {
            console.error(e);
            balance = 0;
          }
          setWhitelistTokenBalance(balance);
          setIsWhitelisted(balance > 0);

          if (balance > 0) {
            setIsActive(true);
          } else {
            if (
              cndy.state.goLiveDate <=
              new anchor.BN(new Date().getTime() / 1000)
            ) {
              setIsActive(true);
            } else {
              setIsActive(false);
            }
          }
        }
      } catch (e) {
        console.log("There was a problem fetching Candy Machine state");
        console.log(e);
      }
    }
  }, [anchorWallet, props.candyMachineId, props.connection]);

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
            props.txTimeout,
            props.connection,
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
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
    refreshCandyMachineState,
  ]);

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

            {wallet?.connected ? (
              <>
                {candyMachine && isActive ? (
                  isWhitelisted ? (
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MintText>{`${candyMachine.state.itemsRemaining} / ${candyMachine.state.itemsAvailable} remaining`}</MintText>
                      <MintText>{`You have ${whitelistTokenBalance} whitelist mint(s) remaining.`}</MintText>
                    </div>
                  ) : (
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <MintText>{`${candyMachine.state.itemsRemaining} / ${candyMachine.state.itemsAvailable} remaining`}</MintText>
                      <MintText>{`${getMintPrice(
                        candyMachine
                      )} SOL each`}</MintText>
                    </div>
                  )
                ) : null}
                <MintActions>
                  {candyMachine ? (
                    isActive || isWhitelisted ? (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        <MintQuantityWrapper>
                          <MintButton
                            candyMachine={candyMachine}
                            isMinting={isUserMinting}
                            onMint={onMint}
                          />
                        </MintQuantityWrapper>
                        <h6 style={{ marginTop: 10 }}>
                          Make sure you have enough SOL in your wallet
                        </h6>
                      </div>
                    ) : (
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          {!candyMachine?.state?.isSoldOut && (
                            <h3 style={{ margin: "10px 0", fontSize: 24 }}>
                              Mint starts in
                            </h3>
                          )}
                          <MintCountdown
                            date={toDate(
                              candyMachine?.state.goLiveDate
                                ? candyMachine?.state.goLiveDate
                                : candyMachine?.state.isPresale
                                ? new anchor.BN(new Date().getTime() / 1000)
                                : undefined
                            )}
                            style={{ justifyContent: "flex-end" }}
                            status={
                              candyMachine?.state?.isSoldOut
                                ? "SOLD OUT!"
                                : undefined
                            }
                          />
                        </div>
                      </div>
                    )
                  ) : (
                    <LoadingCandyMachine style={{ margin: "0 auto" }} />
                  )}
                </MintActions>
              </>
            ) : (
              <h3 style={{ marginTop: 20 }}>Please Connect Your Wallet</h3>
            )}
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
