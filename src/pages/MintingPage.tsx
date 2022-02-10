import * as anchor from "@project-serum/anchor";
import { MintSection } from "../components";
import { getCandyMachineId } from "../web3/utils";

const candyMachineId = getCandyMachineId();
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl("devnet")
);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeoutInMilliseconds = 30000;

function MintingPage() {
  return (
    <MintSection
      candyMachineId={candyMachineId}
      connection={connection}
      startDate={startDateSeed}
      txTimeout={txTimeoutInMilliseconds}
      rpcHost={rpcHost}
    />
  );
}

export default MintingPage;
