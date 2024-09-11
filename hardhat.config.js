require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const {ALCHEMY_URL} = process.env;
const { PRIVATE_KEY } = process.env;
const {ETHERSCAN_API} = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.26",
  networks: {
    sepolia: {
      url: ALCHEMY_URL, 
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
     
  },
}; 