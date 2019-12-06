const { accounts, contract, web3, defaultSender } = require('@openzeppelin/test-environment');
const { BN, constants, expectEvent, shouldFail } = require('openzeppelin-test-helpers');
const should = require('chai').should();

const Counter = contract.fromArtifact('Counter');

describe("counter", async () => {
  const [owner] = accounts;
  let counter;
  const value = '9999';
  const add = '1';
  const total = '10000';

  beforeEach(async function () {
    counter = await Counter.deploy().send();
    await counter.methods.initialize(value).send({from: owner});
  });

  it("should have proper owner", async () => {
    (await counter.methods.owner().call()).should.equal(owner);
  });

  it("should have proper default value", async () => {
    (await counter.methods.getCounter().call()).should.be.equal(value);
  });

  it("should increase counter value", async () => {
    await counter.methods.increaseCounter(add).send();
    (await counter.methods.getCounter().call()).should.be.equal(total);
  });

});