const AirdropToken = artifacts.require("AirdropToken");

module.exports = function (deployer) {
  deployer.deploy(AirdropToken,'0xfc38b4e4840aca306c31891BB01E76E0979145Eb','0xB0A478255452F7D7401dE860415cC1038113a8eA','1000000000000000','100000000000000000000');
};
