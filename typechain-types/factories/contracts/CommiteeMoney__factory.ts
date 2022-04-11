/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CommiteeMoney,
  CommiteeMoneyInterface,
} from "../../contracts/CommiteeMoney";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "OpenCommitee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "refunded",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    inputs: [],
    name: "balanceOf",
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
    inputs: [],
    name: "clearCommitee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "commiteeMembers",
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
    name: "commiteeReward",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "commiteeWinners",
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
    name: "destroyContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fixedDepositAmount",
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
    inputs: [],
    name: "getNotWonMembers",
    outputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasEveryonePaid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "hasPaid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "hasWon",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "isUserInCommitee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastCommiteeOpenDate",
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
    inputs: [],
    name: "openCommitee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "receivePayment",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setAllowedParticipants",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setCommiteeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setFixedDepositAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startCommitee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllowedParticipants",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052662386f26fc100006001556002805566470de4df82000060035534801561002a57600080fd5b5061004761003c61004c60201b60201c565b61005460201b60201c565b610118565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61234480620001286000396000f3fe6080604052600436106101405760003560e01c8063722713f7116100b65780639d30edd11161006f5780639d30edd1146103f6578063a52b2b8814610421578063be5e7f1f1461045e578063e691d2fd14610475578063f2fde38b1461049e578063fbf47a9a146104c757610140565b8063722713f7146103055780637833a23d14610330578063829bd8a11461035b578063835c19f3146103985780638da5cb5b146103a25780639c6acd3d146103cd57610140565b80631aee091e116101085780631aee091e146102075780631c13ded114610232578063263c2c641461024957806328ad2ad714610274578063576b6e56146102b1578063715018a6146102ee57610140565b806306f2fee414610145578063092a5cce1461016e5780630ac3692c14610185578063186806a2146101b05780631a174fef146101db575b600080fd5b34801561015157600080fd5b5061016c6004803603810190610167919061198e565b610504565b005b34801561017a57600080fd5b5061018361058a565b005b34801561019157600080fd5b5061019a61061f565b6040516101a79190611e4f565b60405180910390f35b3480156101bc57600080fd5b506101c5610625565b6040516101d29190611e4f565b60405180910390f35b3480156101e757600080fd5b506101f061062b565b6040516101fe929190611c99565b60405180910390f35b34801561021357600080fd5b5061021c610945565b6040516102299190611e4f565b60405180910390f35b34801561023e57600080fd5b5061024761094b565b005b34801561025557600080fd5b5061025e610a18565b60405161026b9190611ce4565b60405180910390f35b34801561028057600080fd5b5061029b6004803603810190610296919061198e565b610ac4565b6040516102a89190611c7e565b60405180910390f35b3480156102bd57600080fd5b506102d860048036038101906102d3919061198e565b610b03565b6040516102e59190611c7e565b60405180910390f35b3480156102fa57600080fd5b50610303610b42565b005b34801561031157600080fd5b5061031a610bca565b6040516103279190611e4f565b60405180910390f35b34801561033c57600080fd5b50610345610bd2565b6040516103529190611e4f565b60405180910390f35b34801561036757600080fd5b50610382600480360381019061037d9190611965565b610bd8565b60405161038f9190611ce4565b60405180910390f35b6103a0610cad565b005b3480156103ae57600080fd5b506103b7610e50565b6040516103c49190611c7e565b60405180910390f35b3480156103d957600080fd5b506103f460048036038101906103ef919061198e565b610e79565b005b34801561040257600080fd5b5061040b610eff565b6040516104189190611cc2565b60405180910390f35b34801561042d57600080fd5b5061044860048036038101906104439190611965565b61110e565b6040516104559190611ce4565b60405180910390f35b34801561046a57600080fd5b506104736111e3565b005b34801561048157600080fd5b5061049c6004803603810190610497919061198e565b611374565b005b3480156104aa57600080fd5b506104c560048036038101906104c09190611965565b6113fa565b005b3480156104d357600080fd5b506104ee60048036038101906104e99190611965565b6114f2565b6040516104fb9190611ce4565b60405180910390f35b61050c61153f565b73ffffffffffffffffffffffffffffffffffffffff1661052a610e50565b73ffffffffffffffffffffffffffffffffffffffff1614610580576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057790611dcf565b60405180910390fd5b8060038190555050565b61059261153f565b73ffffffffffffffffffffffffffffffffffffffff166105b0610e50565b73ffffffffffffffffffffffffffffffffffffffff1614610606576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd90611dcf565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b60025481565b60045481565b60008061063661153f565b73ffffffffffffffffffffffffffffffffffffffff16610654610e50565b73ffffffffffffffffffffffffffffffffffffffff16146106aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a190611dcf565b60405180910390fd5b600254600580549050146106f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ea90611d8f565b60405180910390fd5b6106fb610a18565b61073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073190611e2f565b60405180910390fd5b6000610744610eff565b905060008151334260405160200161075d929190611c3d565b6040516020818303038152906040528051906020012060001c6107809190612099565b905060008282815181106107bd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190508073ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f1935050505015801561080f573d6000803e3d6000fd5b508073ffffffffffffffffffffffffffffffffffffffff167fe1c5635ccdf9d101232c64d60044acb1d38bb3dd1d9ca60a82ae880d816d4ae36003544260405161085a929190611ea1565b60405180910390a26007819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600254600780549050141561092f576109206111e3565b80600194509450505050610941565b42600481905550806000945094505050505b9091565b60035481565b61095361153f565b73ffffffffffffffffffffffffffffffffffffffff16610971610e50565b73ffffffffffffffffffffffffffffffffffffffff16146109c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109be90611dcf565b60405180910390fd5b600060058054905014610a0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0690611def565b60405180910390fd5b42600481905550565b600080600090505b600580549050811015610abb57610a9a60058281548110610a6a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166114f2565b610aa8576000915050610ac1565b8080610ab390612022565b915050610a20565b50600190505b90565b60058181548110610ad457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60078181548110610b1357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b4a61153f565b73ffffffffffffffffffffffffffffffffffffffff16610b68610e50565b73ffffffffffffffffffffffffffffffffffffffff1614610bbe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb590611dcf565b60405180910390fd5b610bc86000611547565b565b600047905090565b60015481565b600080600090505b600580549050811015610ca2578273ffffffffffffffffffffffffffffffffffffffff1660058281548110610c3e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610c8f576001915050610ca8565b8080610c9a90612022565b915050610be0565b50600090505b919050565b610cb6336114f2565b15610cf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ced90611d6f565b60405180910390fd5b610d356040518060400160405280600a81526020017f616d6f756e7473656e74000000000000000000000000000000000000000000008152503461160b565b600154341015610d7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7190611e0f565b60405180910390fd5b610d8333610bd8565b15610d9757610d9233346116a7565b610e4e565b60025460058054905010610de0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd790611d4f565b60405180910390fd5b610dea33346116a7565b6005339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610e8161153f565b73ffffffffffffffffffffffffffffffffffffffff16610e9f610e50565b73ffffffffffffffffffffffffffffffffffffffff1614610ef5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eec90611dcf565b60405180910390fd5b8060018190555050565b60606000600780549050600580549050610f199190611f61565b67ffffffffffffffff811115610f58577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610f865781602001602082028036833780820191505090505b5090506000805b6005805490508110156111055761100760058281548110610fd7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661110e565b6110f25760058181548110611045577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168383815181106110a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081806110ee90612022565b9250505b80806110fd90612022565b915050610f8d565b50819250505090565b600080600090505b6007805490508110156111d8578273ffffffffffffffffffffffffffffffffffffffff1660078281548110611174577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156111c55760019150506111de565b80806111d090612022565b915050611116565b50600090505b919050565b6111eb61153f565b73ffffffffffffffffffffffffffffffffffffffff16611209610e50565b73ffffffffffffffffffffffffffffffffffffffff161461125f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125690611dcf565b60405180910390fd5b600067ffffffffffffffff8111156112a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156112ce5781602001602082028036833780820191505090505b50600590805190602001906112e4929190611894565b50600067ffffffffffffffff811115611326577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156113545781602001602082028036833780820191505090505b506007908051906020019061136a929190611894565b5042600481905550565b61137c61153f565b73ffffffffffffffffffffffffffffffffffffffff1661139a610e50565b73ffffffffffffffffffffffffffffffffffffffff16146113f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e790611dcf565b60405180910390fd5b8060028190555050565b61140261153f565b73ffffffffffffffffffffffffffffffffffffffff16611420610e50565b73ffffffffffffffffffffffffffffffffffffffff1614611476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146d90611dcf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156114e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114dd90611d2f565b60405180910390fd5b6114ef81611547565b50565b6000600454600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054119050919050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6116a38282604051602401611621929190611cff565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061186b565b5050565b6001548111156117cf5760008273ffffffffffffffffffffffffffffffffffffffff16600154346116d89190611f61565b6040516116e490611c69565b60006040518083038185875af1925050503d8060008114611721576040519150601f19603f3d011682016040523d82523d6000602084013e611726565b606091505b505090508061176a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176190611daf565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167f750e6bbedd4312ada35caa75e07fc0b85f1a6fc9c675e6962aef84691871109783600154346117b19190611f61565b426040516117c193929190611eca565b60405180910390a250611823565b8173ffffffffffffffffffffffffffffffffffffffff167f750e6bbedd4312ada35caa75e07fc0b85f1a6fc9c675e6962aef8469187110978260004260405161181a93929190611e6a565b60405180910390a25b42600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805482825590600052602060002090810192821561190d579160200282015b8281111561190c5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906118b4565b5b50905061191a919061191e565b5090565b5b8082111561193757600081600090555060010161191f565b5090565b60008135905061194a816122e0565b92915050565b60008135905061195f816122f7565b92915050565b60006020828403121561197757600080fd5b60006119858482850161193b565b91505092915050565b6000602082840312156119a057600080fd5b60006119ae84828501611950565b91505092915050565b60006119c383836119cf565b60208301905092915050565b6119d881611f95565b82525050565b6119e781611f95565b82525050565b6119fe6119f982611f95565b61206b565b82525050565b6000611a0f82611f11565b611a198185611f34565b9350611a2483611f01565b8060005b83811015611a55578151611a3c88826119b7565b9750611a4783611f27565b925050600181019050611a28565b5085935050505092915050565b611a6b81611fa7565b82525050565b611a7a81611fdd565b82525050565b6000611a8b82611f1c565b611a958185611f50565b9350611aa5818560208601611fef565b611aae81612128565b840191505092915050565b6000611ac6602683611f50565b9150611ad182612146565b604082019050919050565b6000611ae9601083611f50565b9150611af482612195565b602082019050919050565b6000611b0c601083611f50565b9150611b17826121be565b602082019050919050565b6000611b2f601783611f50565b9150611b3a826121e7565b602082019050919050565b6000611b52601083611f50565b9150611b5d82612210565b602082019050919050565b6000611b75602083611f50565b9150611b8082612239565b602082019050919050565b6000611b98601883611f50565b9150611ba382612262565b602082019050919050565b6000611bbb600083611f45565b9150611bc68261228b565b600082019050919050565b6000611bde601583611f50565b9150611be98261228e565b602082019050919050565b6000611c01601183611f50565b9150611c0c826122b7565b602082019050919050565b611c2081611fd3565b82525050565b611c37611c3282611fd3565b61208f565b82525050565b6000611c4982856119ed565b601482019150611c598284611c26565b6020820191508190509392505050565b6000611c7482611bae565b9150819050919050565b6000602082019050611c9360008301846119de565b92915050565b6000604082019050611cae60008301856119de565b611cbb6020830184611a62565b9392505050565b60006020820190508181036000830152611cdc8184611a04565b905092915050565b6000602082019050611cf96000830184611a62565b92915050565b60006040820190508181036000830152611d198185611a80565b9050611d286020830184611c17565b9392505050565b60006020820190508181036000830152611d4881611ab9565b9050919050565b60006020820190508181036000830152611d6881611adc565b9050919050565b60006020820190508181036000830152611d8881611aff565b9050919050565b60006020820190508181036000830152611da881611b22565b9050919050565b60006020820190508181036000830152611dc881611b45565b9050919050565b60006020820190508181036000830152611de881611b68565b9050919050565b60006020820190508181036000830152611e0881611b8b565b9050919050565b60006020820190508181036000830152611e2881611bd1565b9050919050565b60006020820190508181036000830152611e4881611bf4565b9050919050565b6000602082019050611e646000830184611c17565b92915050565b6000606082019050611e7f6000830186611c17565b611e8c6020830185611a71565b611e996040830184611c17565b949350505050565b6000604082019050611eb66000830185611c17565b611ec36020830184611c17565b9392505050565b6000606082019050611edf6000830186611c17565b611eec6020830185611c17565b611ef96040830184611c17565b949350505050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000611f6c82611fd3565b9150611f7783611fd3565b925082821015611f8a57611f896120ca565b5b828203905092915050565b6000611fa082611fb3565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611fe882611fd3565b9050919050565b60005b8381101561200d578082015181840152602081019050611ff2565b8381111561201c576000848401525b50505050565b600061202d82611fd3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156120605761205f6120ca565b5b600182019050919050565b60006120768261207d565b9050919050565b600061208882612139565b9050919050565b6000819050919050565b60006120a482611fd3565b91506120af83611fd3565b9250826120bf576120be6120f9565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f436f6d6d697465652069732066756c6c00000000000000000000000000000000600082015250565b7f596f7520616c7265616479207061696400000000000000000000000000000000600082015250565b7f5061727469636970616e7473206e6f7420656e6f756768000000000000000000600082015250565b7f5061796d656e74206e6f742073656e7400000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f436f6d6d6974656520616c726561647920737461727465640000000000000000600082015250565b50565b7f5061796d656e74206973206e6f7420656e6f7567680000000000000000000000600082015250565b7f4e6f742065766572796f6e652070616964000000000000000000000000000000600082015250565b6122e981611f95565b81146122f457600080fd5b50565b61230081611fd3565b811461230b57600080fd5b5056fea2646970667358221220c1a6d9534eb3834a4487324f6c37b9efbedd065313d4adba8212a4f102a268da64736f6c63430008040033";

type CommiteeMoneyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CommiteeMoneyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CommiteeMoney__factory extends ContractFactory {
  constructor(...args: CommiteeMoneyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CommiteeMoney> {
    return super.deploy(overrides || {}) as Promise<CommiteeMoney>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CommiteeMoney {
    return super.attach(address) as CommiteeMoney;
  }
  override connect(signer: Signer): CommiteeMoney__factory {
    return super.connect(signer) as CommiteeMoney__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CommiteeMoneyInterface {
    return new utils.Interface(_abi) as CommiteeMoneyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CommiteeMoney {
    return new Contract(address, _abi, signerOrProvider) as CommiteeMoney;
  }
}
