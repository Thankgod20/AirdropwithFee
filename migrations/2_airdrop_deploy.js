const AirdropToken = artifacts.require("AirDropTokenCont");

module.exports = function (deployer) {
  deployer.deploy(AirdropToken,'0xccE9B1E4dC268f4001d17bc2E99fe55C3FA92d2F','0x2D96016cE9128915039Ff49BB5E93eC912D7BA7b','2500000000000000','1000000000000000000000000');
};
