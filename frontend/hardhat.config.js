require('@nomiclabs/hardhat-waffle')

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http:/hardhat_server:8545/',
    },
  },
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './src/contracts',
    artifacts: './src/abis',
  },
  mocha: {
    timeout: 40000,
  },
}
