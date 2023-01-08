// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./ERC20.sol";

contract MyERC20Token is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {

        _mint(msg.sender, 100000 * 10**uint(decimals()));
    }
}
