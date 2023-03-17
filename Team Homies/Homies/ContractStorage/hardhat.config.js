require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks:{
    goerli:{
      url: GOERLI_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId : 5,
    },
  },
  namedAccounts:{
    deployer:{
      default:0,
    },
    user:{
      default:1,
    }
  }
};
