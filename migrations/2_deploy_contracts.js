const Moonshot = artifacts.require("Moonshot");
const prospectAddress = "0x8c1621c5412e039421a70a282d1b3d730472f085";

module.exports = function(deployer) {
  deployer.deploy(Moonshot, prospectAddress);
};
