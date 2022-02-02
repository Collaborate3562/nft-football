import * as anchor from "@project-serum/anchor";
import { MintSection } from "../components";

export interface MintProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

function MintingPage(props: MintProps) {
  return (
    <MintSection
      candyMachineId={props.candyMachineId}
      connection={props.connection}
      startDate={props.startDate}
      txTimeout={props.txTimeout}
      rpcHost={props.rpcHost}
    />
  );
}

export default MintingPage;
