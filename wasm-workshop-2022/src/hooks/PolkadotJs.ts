import { ApiPromise, WsProvider } from '@polkadot/api';
import { RPOVIDER_URL } from './../utils/Constant';

/**
 * getNodeInfo function
 */
export const getNodeInfo = async() => {
    // get provider
    const provider = new WsProvider(RPOVIDER_URL);
    // Create the API and wait until ready
    const api = await ApiPromise.create({ provider });
    // Retrieve the chain & node information information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version()
    ]);

    return {
        chain, 
        nodeName, 
        nodeVersion
    };
};

