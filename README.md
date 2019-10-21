# OpenZeppelin Starter Kit Tutorial

An OpenZeppelin Starter Kit Tutorial containing React, OpenZeppelin SDK, OpenZeppelin Contracts, Truffle and Infura.

This kit comes with everything you need to start using upgradeable Smart
contracts inside your applications. It also includes all the configuration
required to deploy to different networks.

In addition to the contents included in the [vanilla Starter Kit](https://github.com/OpenZeppelin/starter-kit/blob/master/README.md), this kit contains a step-by-step tutorial on how to use the OpenZeppelin SDK to develop your decentralized application.

## Requirements

Install OpenZeppelin SDK, Ganache, and Truffle

```
npm install -g truffle@5.0.41 ganache-cli@6.7.0 @openzeppelin/cli@2.5.3
```

## Installation

Ensure you are in a new and empty directory, and run the `unpack` command with `tutorial` to create a starter project:

```javascript
openzeppelin unpack tutorial
```

## Run

In a new terminal window, run your local blockchain:

```
ganache-cli --deterministic
```

In your original terminal window, at the top level of your folder, initialize the project
and follow the prompts:

```javascript
openzeppelin init
```

After that compile the contracts:

```javascript
openzeppelin compile
```

In a new terminal window, in the `client` directory, run the React app:

```javascript
cd client
npm run start
```

## Interact

You can interact directly with your smart contracts from the `openzeppelin` cli.

`openzeppelin transfer`

send funds to a given address.

`openzeppelin balance [address]`

query the ETH balance of the specified account, also supports ERC20s.

`openzeppelin send-tx`

sends a transaction to your contract and returns the events.

`openzeppelin call`

execute a constant method and receive back the value.

Type `openzeppelin` to see a complete list of availible commands.

## Test

Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the truffle development console.

```javascript
// inside the development console.
test

// outside the development console..
truffle test
```

Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.

```javascript
// ensure you are inside the client directory when running this
npm run test
```

## Build

To build the application for production, use the build script. A production build will be in the `client/build` folder.

```javascript
// ensure you are inside the client directory when running this
npm run build
```

## Hot Loader

[Solidity Hot Loader](https://github.com/OpenZeppelin/solidity-loader) allows seamless updates to frontend by just editing and saving Solidity code. To enable change `disabled` flag in `client/config/webpack.js` file to `false`.

## FAQ

- **How do I use this with the Ganache-CLI?**

  It's as easy as modifying the config file! [Check out our documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks). Depending on the port you're using, you'll also need to update line 29 of `client/src/utils/getWeb3.js`.

- **Where is my production build?**

  The production build will be in the `client/build` folder after running `npm run build` in the `client` folder.

- **Where can I find more documentation?**

  Check out the [OpenZeppelin Starter Kits documentation](https://docs.openzeppelin.com/starter-kits/).
