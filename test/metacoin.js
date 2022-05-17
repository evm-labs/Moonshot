const Moonshot = artifacts.require("Moonshot");
const truffleAssert = require('truffle-assertions');

contract("First Moonshot test", async accounts => {

/*
Tests
*/

  it("sample test should pass", async () => {
    const instance = await Moonshot.deployed();
    const balance = await instance.getBalance.call(accounts[0]);
    assert.equal(1, 1);
  });
});

