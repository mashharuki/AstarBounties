import { 
    ApiPromise, 
    WsProvider,
    Keyring
 } from '@polkadot/api';
import { RPOVIDER_URL } from './../utils/Constant';

/**
 * getNodeInfo function
 */
export const getNodeInfo = async() => {
    // get provider
    const provider = new WsProvider(RPOVIDER_URL);
    // Create the API and wait until ready
    const api = await ApiPromise.create({ provider: provider });
    // Retrieve the chain & node information information via rpc calls
    const [
        chain, 
        nodeName, 
        nodeVersion, 
        consts, 
        header
    ] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version(),
        api.consts,
        api.rpc.chain.getHeader()
    ]);

    return {
        chain, 
        nodeName, 
        nodeVersion,
        consts,
        header,
        api
    };
};

/**
 * stateQuery function
 */
export const stateQuery = async() => {
    // get provider
    const provider = new WsProvider(RPOVIDER_URL);
    // Create the API and wait until ready
    const api = await ApiPromise.create({ provider });

    // The actual address that we will use
    const ADDR = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';
    // Retrieve the account balance & nonce via the system module
    const [
        now, 
        data,
        accountData
    ] = await Promise.all([
        api.query.timestamp.now(),
        api.query.system.account(ADDR),
        api.query.system.account
    ]);

    return {
        now,
        data,
        accountData
    }
};

/**
 * connect extention
 */
export const connect = async () => {
    const { web3Accounts, web3Enable } = await import("@polkadot/extension-dapp");
    const extensions = await web3Enable("Polk4NET");

    if (extensions.length === 0) {
            return;
    }
    // get accounts
    const accounts = await web3Accounts();
   
    return accounts[0];
};