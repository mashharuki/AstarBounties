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

## WASM  contract test command

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

## refference

1. [WASM Smart Contract Workshop](https://github.com/hoonsubin/wasm-workshop-amsterdot2022)
2. [ionic docs](https://ionicframework.com/docs/components)
3. [【Zenn】[できた]ASTAR Network(local)上に Ink! を使って RUST製 smart contract をデプロイ](https://zenn.dev/polonity/articles/ddffad4663a04e)
4. [polkadot.js Explorer](https://polkadot.js.org/apps/#/explorer)
5. [polkadot.js docs](https://polkadot.js.org/docs/api/start/api.tx.subs)