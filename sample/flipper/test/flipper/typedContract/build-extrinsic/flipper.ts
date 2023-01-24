/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@supercolony/typechain-types';
import { buildSubmittableExtrinsic } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flipper';
import type BN from 'bn.js';



export default class Methods {
	private __nativeContract : ContractPromise;

	constructor(
		nativeContract : ContractPromise,
	) {
		this.__nativeContract = nativeContract;
	}
	/**
	 * flip
	 *
	*/
	"flip" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "flip", [], __options);
	}

	/**
	 * get
	 *
	*/
	"get" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__nativeContract, "get", [], __options);
	}

}