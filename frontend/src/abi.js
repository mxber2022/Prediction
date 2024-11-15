module.exports = {
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "outcomeIndex",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "BetPlaced",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "question",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string[]",
          name: "outcomes",
          type: "string[]",
        },
        {
          indexed: false,
          internalType: "string",
          name: "imageUri",
          type: "string",
        },
      ],
      name: "MarketCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "winningOutcomeIndex",
          type: "uint256",
        },
      ],
      name: "MarketResolved",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "WinningsWithdrawn",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "question",
          type: "string",
        },
        {
          internalType: "string[]",
          name: "outcomes",
          type: "string[]",
        },
        {
          internalType: "string",
          name: "imageUri",
          type: "string",
        },
      ],
      name: "createMarket",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
      ],
      name: "getMarketDetails",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
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
          name: "marketId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "outcomeIndex",
          type: "uint256",
        },
      ],
      name: "getUserBet",
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
          name: "marketId",
          type: "uint256",
        },
      ],
      name: "getUserWinningAmount",
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
      name: "marketCount",
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
      name: "markets",
      outputs: [
        {
          internalType: "string",
          name: "question",
          type: "string",
        },
        {
          internalType: "string",
          name: "imageUri",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "totalPool",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "resolved",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "winningOutcomeIndex",
          type: "uint256",
        },
      ],
      stateMutability: "view",
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
      inputs: [
        {
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "outcomeIndex",
          type: "uint256",
        },
      ],
      name: "placeBet",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "winningOutcomeIndex",
          type: "uint256",
        },
      ],
      name: "resolveMarket",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "marketId",
          type: "uint256",
        },
      ],
      name: "withdrawWinnings",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
