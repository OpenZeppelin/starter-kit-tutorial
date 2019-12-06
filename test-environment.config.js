module.exports = {
  accounts: {
    amount: 10, // Number of unlocked accounts
    ether: 1e6, // Initial balance of unlocked accounts (in ether)
  },

  contracts: {
    type: 'web3', // Contract abstraction to use: 'truffle' for @truffle/contract or 'web3' for web3-eth-contract
    defaultGas: 6e6, // Maximum gas for contract calls (when unspecified)
  },

  blockGasLimit: 8e6, // Maximum gas per block
};