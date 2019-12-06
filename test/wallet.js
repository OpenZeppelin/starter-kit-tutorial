const { accounts, contract, web3, defaultSender } = require('@openzeppelin/test-environment');
const { BN, constants, expectEvent, shouldFail } = require('openzeppelin-test-helpers');
const should = require('chai').should();

const Wallet = contract.fromArtifact('Wallet');
const StandaloneERC20 = contract.fromArtifact('StandaloneERC20');

describe("wallet", async () => {
  const [owner, receiver] = accounts;
  let wallet;
  let token;

  beforeEach(async function () {
    wallet = await Wallet.deploy().send();
    await wallet.methods.initialize(owner).send();
    token = await StandaloneERC20.deploy().send();
    await token.methods.initialize('Token', 'TKN', 18, 1000, owner, [], []).send();
  });

  it("should have proper owner", async () => {
    (await wallet.methods.owner().call()).should.equal(owner);
  });

  it("should transfer ERC20 tokens from wallet to receiver", async () => {
    await token.methods.transfer(wallet._address, 100).send({from: owner});
    await wallet.methods.transferERC20(token._address, receiver, '10').send({ from: owner });
    (await token.methods.balanceOf(receiver).call()).should.be.equal('10');
  });
  
});