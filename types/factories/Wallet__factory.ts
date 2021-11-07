/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Wallet, WalletInterface } from "../Wallet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "ERC721_RECEIVED",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "call",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractFactory",
    outputs: [
      {
        internalType: "contract IContractFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IContractFactory",
        name: "_contractFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105fb806100206000396000f3fe6080604052600436106100745760003560e01c80636dbf2fa01161004e5780636dbf2fa0146101635780637c7acba614610176578063ecc98ce4146101ae578063f6b4dfb4146101c957600080fd5b8063150b7a02146100805780631794bb3c146100e257806317d70f7c1461013f57600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100ac61009b366004610474565b630a85bd0160e11b95945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b61013d6100f03660046104e7565b600080546001600160a01b039485167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091556001805493909416921691909117909155600255565b005b34801561014b57600080fd5b5061015560025481565b6040519081526020016100d9565b61013d610171366004610528565b6101e9565b34801561018257600080fd5b50600054610196906001600160a01b031681565b6040516001600160a01b0390911681526020016100d9565b3480156101ba57600080fd5b506100ac630a85bd0160e11b81565b3480156101d557600080fd5b50600154610196906001600160a01b031681565b6001546002546040516331a9108f60e11b81526001600160a01b0390921691636352211e9161021e9160040190815260200190565b602060405180830381600087803b15801561023857600080fd5b505af115801561024c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102709190610584565b6001600160a01b0316336001600160a01b0316146102df5760405162461bcd60e51b815260206004820152602160248201527f4e46544e533a2043616c6c6572206973206e6f7420746f6b656e20686f6c64656044820152603960f91b60648201526084015b60405180910390fd5b6102eb848484846102f1565b50505050565b6000846001600160a01b031684848460405161030e9291906105a8565b60006040518083038185875af1925050503d806000811461034b576040519150601f19603f3d011682016040523d82523d6000602084013e610350565b606091505b50509050806103c75760405162461bcd60e51b815260206004820152602d60248201527f4e46544e532057616c6c65743a20756e6465726c79696e67207472616e73616360448201527f74696f6e2072657665727465640000000000000000000000000000000000000060648201526084016102d6565b846001600160a01b03167f7aa5ed2c76d4b9b3e8cbc2d86e798d468acf8cc22876dbfe0b62ea3180006c26858585604051610404939291906105b8565b60405180910390a25050505050565b6001600160a01b038116811461042857600080fd5b50565b60008083601f84011261043d57600080fd5b50813567ffffffffffffffff81111561045557600080fd5b60208301915083602082850101111561046d57600080fd5b9250929050565b60008060008060006080868803121561048c57600080fd5b853561049781610413565b945060208601356104a781610413565b935060408601359250606086013567ffffffffffffffff8111156104ca57600080fd5b6104d68882890161042b565b969995985093965092949392505050565b6000806000606084860312156104fc57600080fd5b833561050781610413565b9250602084013561051781610413565b929592945050506040919091013590565b6000806000806060858703121561053e57600080fd5b843561054981610413565b935060208501359250604085013567ffffffffffffffff81111561056c57600080fd5b6105788782880161042b565b95989497509550505050565b60006020828403121561059657600080fd5b81516105a181610413565b9392505050565b8183823760009101908152919050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f191601019291505056fea164736f6c6343000809000a";

type WalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Wallet__factory extends ContractFactory {
  constructor(...args: WalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Wallet> {
    return super.deploy(overrides || {}) as Promise<Wallet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Wallet {
    return super.attach(address) as Wallet;
  }
  connect(signer: Signer): Wallet__factory {
    return super.connect(signer) as Wallet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletInterface {
    return new utils.Interface(_abi) as WalletInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Wallet {
    return new Contract(address, _abi, signerOrProvider) as Wallet;
  }
}
