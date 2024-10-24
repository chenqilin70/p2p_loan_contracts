import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();
const { OWNER_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200, // adjust based on your needs
        details: {
          yulDetails: {
            optimizerSteps: "u", // recommended for better performance
          },
        },
      },
    },
  },
  networks:{
    local: {
      url: 'http://localhost:8545',
      chainId:31337
    },
    sepolia: {
      url: 'https://rpc.sepolia.org',
      chainId: 11155111,
      accounts: [`0x${OWNER_PRIVATE_KEY}`]
  },
  }
};

export default config;
