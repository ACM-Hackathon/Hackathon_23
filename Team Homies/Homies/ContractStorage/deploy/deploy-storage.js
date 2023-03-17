const { network } = require("hardhat");


async function deployFunc(hre){
    const acc = await hre.getNamedAccounts()
    const dep = await hre.deployments
    // console.log(dep);
    const {deploy, log} = dep;
    const chainId = network.config.chainId;
}

module.exports.default = deployFunc;