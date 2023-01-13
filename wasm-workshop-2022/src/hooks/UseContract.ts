import { ContractPromise } from "@polkadot/api-contract";
import { 
    CONTRACT_ADDRESS,
    RPOVIDER_URL
} from './../utils/Constant';
import abi from "../contract/metadata.json";
import { 
    ApiPromise,
    WsProvider
} from '@polkadot/api';


/**
 * getFliper function
 */
export const getFliper = async () => {
    const { web3FromSource } = await import("@polkadot/extension-dapp");
    // get provider
    //const provider = new WsProvider(RPOVIDER_URL);
    // Create the API and wait until ready
    //const api = await new ApiPromise({ provider }).isReady;

    // create contract object
    //const contract = new ContractPromise(props.api!, abi, CONTRACT_ADDRESS);
    // call getMessageList function
    /*
    const { result } = await contract.query.get(
          "",
          {
                value: 0,
                gasLimit: -1,
          },
    );

    console.log("result:", result)

    if (result !== undefined && result !== null) {
          return result;
    }
    return "";
    */
};