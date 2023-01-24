# AstarBounties

Astar bounties during hackathons.

Hackathons with Astar

- <s>Tokyo web3 Hackathon</s>
- <s>Polkadot Hackathon Latam</s>
- <s>Cal Hacks 9.0</s>
- <s>Data Native</s>
- <s>amsterDOT</s>
- <s>NA Hackathon Polkadot</s>

## AmsterDOT

You can view the presentation during AmsterDOT.io here:
https://docs.google.com/presentation/d/1SC7LZPo8XspRkah5l4hk15kA3QToohrXRTQlafP4DEo/edit?usp=sharing

Workshop documentation:
https://github.com/hoonsubin/wasm-workshop-amsterdot2022

## WASM contract build command

```bash
yarn build:contract
```

result

```bash
The contract was built in DEBUG mode.

Your contract artifacts are ready. You can find them in:
~/AstarBounties/wasm-workshop-2022/contracts/ink/target/ink

  - ERC20.contract (code + metadata)
  - ERC20.wasm (the contract's code)
  - metadata.json (the contract's metadata)
✨  Done in 392.43s.
```

## WASM contract test command

```bash
yarn test:contract
```

result

```bash
running 7 tests
test erc20::tests::total_supply_works ... ok
test erc20::tests::new_works ... ok
test erc20::tests::balance_of_works ... ok
test erc20::tests::invalid_transfer_should_fail ... ok
test erc20::tests::allowance_must_not_change_on_failed_transfer ... ok
test erc20::tests::transfer_from_works ... ok
test erc20::tests::transfer_works ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

✨  Done in 65.51s.
```

### astar-collator でローカルノードを動かす方法

```bash
cd astar && ./astar-collator --dev
```

### sample ディレクトリにあるコントラクトをデプロイする方法

```bash
swanky contract compile flipper -v
swanky contract deploy flipper --account alice --gas 100000000000 --args true --network shibuya
```

- result

```bash
✔ Initialising OK
✔ Getting WASM OK
⠹ Connecting to node2023-01-24 21:31:16        API/INIT: RPC methods not decorated: transaction_unstable_submitAndWatch, transaction_unstable_unwatch
✔ Connecting to node OK
✔ Deploying OK
✔ Writing config OK
Contract deployed!
Contract address: XNxU8kt9VJmoshkvfpxSuTFnnpr1Hy2Gw7Gg1mNrVyVmrxS
```

## refference

1. [WASM Smart Contract Workshop](https://github.com/hoonsubin/wasm-workshop-amsterdot2022)
2. [ionic docs](https://ionicframework.com/docs/components)
3. [【Zenn】[できた]ASTAR Network(local)上に Ink! を使って RUST 製 smart contract をデプロイ](https://zenn.dev/polonity/articles/ddffad4663a04e)
4. [polkadot.js Explorer](https://polkadot.js.org/apps/#/explorer)
5. [polkadot.js docs](https://polkadot.js.org/docs/api/start/api.tx.subs)
6. [【Qita】Substrate インストールの方法](https://qiita.com/SotaWatanabe/items/f0c460bffa700b5a39de)
7. [Ionic docs](https://ionicframework.com/docs/ja/api/input)
8. [React の useState で TypeScript の型を複数指定する方法 useState();](https://off.tokyo/blog/react-usestate-typescript/)
9. [Shibuya にデプロイした ERC20 コントラクト](https://contracts-ui.substrate.io/contract/XbWd99FgTZscva4Fmz9B2a7zFUDh5PhDFFCPYmCBzjVL1As)
10. [Substrate 理解への第一歩：ink!によるコントラクト開発・Ethereum との違い](https://recruit.gmo.jp/engineer/jisedai/blog/develop-substrate-contract-by-ink/)
11. [【Github】!ink contract sample](https://github.com/mashharuki/ink/tree/master/examples)
12. [【Github】wasm-showcase-dapps](https://github.com/AstarNetwork/wasm-showcase-dapps)
13. [!ink Playground](https://ink-playground.substrate.io/?id=9230e11fc09945ac2cdc928d53cfbfdd)
14. [【Github】ink-workshop](https://github.com/mashharuki/ink-workshop)
15. [OpenBrush](https://openbrush.io/)
16. [【Qita】OpenBrush で SmartContract 開発](https://qiita.com/oggata/items/a557acd7bb4571caf0b6)
17. [【Github】openbrush](https://github.com/Supercolony-net/openbrush-contracts)
18. [【Github】polkadot_js_examples](https://github.com/realtakahashi/polkadot_js_examples)
19. [【Github】Flipper: WASM dApp for Astar](https://github.com/AstarNetwork/wasm-flipper)
