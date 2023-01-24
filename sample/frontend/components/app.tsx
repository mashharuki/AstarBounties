import { ApiPromise, WsProvider } from '@polkadot/api'
import { Abi, ContractPromise } from '@polkadot/api-contract'
import {
  isWeb3Injected,
  web3Accounts, web3Enable
} from '@polkadot/extension-dapp'
import type { InjectedAccountWithMeta, InjectedExtension } from '@polkadot/extension-inject/types'
import type { WeightV2 } from '@polkadot/types/interfaces'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import abiData from './abi'
import Spinner from './spinner'

// local
// const WS_PROVIDER = 'ws://127.0.0.1:9944'

// shibuya
const WS_PROVIDER = 'wss://shibuya-rpc.dwellir.com'

const proofSize = 131072
const refTime = 6219235328
const storageDepositLimit = null

/**
 * Home component
 * @returns 
 */
const Home: NextPage = () => {
  const [address, setAddress] = useState('')
  const [addressSubmitted, setAddressSubmitted] = useState(false)
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState<string>('')
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([])
  const [extensions, setExtensions] = useState<InjectedExtension[]>([])

  useEffect(() => {
    if (address) {
      read().catch(console.error)
    }
  }, [address])

  /**
   * load Substrate wallet and set the signer 
   */
  const initSubstrateProvider = useCallback(async () => {
    if (!isWeb3Injected) {
      throw new Error('The user does not have any Substrate wallet installed')
    }
    // load extention data
    const extensions = await web3Enable('Flipper UI')

    if (extensions.length > 0) {
      setExtensions(extensions)
    }

    // set the first wallet as the signer (we assume there is only one wallet)
    // wallet.substrate.setSigner(extensions[0].signer)
    // get Accounts data
    const injectedAccounts = await web3Accounts()

    if (injectedAccounts.length > 0) {
      setAccounts(injectedAccounts)
    }
  }, [])

  /**
   * handleOnSelect function
   * @param event 
   */
  const handleOnSelect = async (event: any) => {
    setAccount(event.target.value)
  }

  /**
   * query function
   * @param api 
   * @param contract 
   * @param address 
   */
  const query = async (api: ApiPromise, contract: ContractPromise, address: string) => {
    // (We perform the send from an account, here using Alice's address)
    const { gasRequired, result, output } = await contract.query.get(
      address,
      {
        gasLimit: api.registry.createType('WeightV2', {
          refTime,
          proofSize,
        }) as WeightV2,
        storageDepositLimit,
      }
    )

    // const result = await api.call.contractsApi.call(address, contract.address, 0, null, null, msg.toU8a(msg.args.map((_) => account.address)))

    // The actual result from RPC as `ContractExecResult`
    console.log(result.toHuman())

    // the gas consumed for contract execution
    console.log(gasRequired.toHuman())

    // check if the call was successful
    if (result.isOk) {
      // output the return value
      console.log('Success', output?.toHuman())

      if (output) {
        setValue(output?.toString())
      }
    } else {
      console.error('Error', result.asErr)
    }
  }

  /**
   * read function
   */
  const read = async () => {
    const provider = new WsProvider(WS_PROVIDER)
		const api = new ApiPromise({ provider })

    await api.isReady

    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)
    // call query function
    await query(api, contract, address)
  }

  /**
   * flip function
   */
  const flip = async () => {
    const provider = new WsProvider(WS_PROVIDER)
		const api = new ApiPromise({ provider })

    await api.isReady

    api.setSigner(extensions[0].signer)

    console.log('API is ready')

    const abi = new Abi(abiData, api.registry.getChainProperties())

    const contract = new ContractPromise(api, abi, address)

    // call filp function
    const { gasRequired, result, output } = await contract.query.flip(
      address,
      {
        gasLimit: api.registry.createType('WeightV2', {
          refTime,
          proofSize,
        }) as WeightV2,
        storageDepositLimit,
      }
    )

    const gasLimit = api.registry.createType('WeightV2', gasRequired) as WeightV2

    setLoading(true)

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    try {
      await contract.tx
        .flip({
          gasLimit: gasLimit,
          storageDepositLimit
        })
        .signAndSend(account, async (res) => {
          if (res.status.isInBlock) {
            console.log('in a block')
            setLoading(false)
          } else if (res.status.isFinalized) {
            console.log('finalized')
          }
        })

      await query(api, contract, address)
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Flipper Contract</title>
        <meta name='description' content='Flipper Contract' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {loading ? <Spinner /> : null }

      <main className={styles.main}>
        {addressSubmitted ? <>
          <h3 className={styles.title}>
            Flipper Contract
          </h3>

          <button onClick={initSubstrateProvider}>Load Wallets</button><br />

          <select onChange={handleOnSelect}>
            <option value="">Select Address</option>
            {accounts.map(account => (
              <option key={account.address} value={account.address}>{account.meta.name} {account.address}</option>
            ))}
          </select><br />

          <div>
            <button onClick={read}>Read</button>
            <button onClick={flip}>Flip</button>
          </div>
          <h4>{value}</h4>
        </> :
        <>
          <h3 className={styles.title}>
            Provide Contract Address
          </h3>
          <div className={styles.address}>
            <input
              type='text'
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <button onClick={e => setAddressSubmitted(true)}>Set</button>
          </div>
        </>}
      </main>
    </div>
  )
}

export default Home