require("@nomiclabs/hardhat-waffle");
require('hardhat-conflux');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    confluxTestnet: {
      url: "https://test.confluxrpc.com",
      accounts: ["6c978f45a4e8bf9c81f75a63b1c1efd44a96ccfde5aaeda39b4841c265ad0879"],
      chainId: 1,
    }
  }
};
// export PRIVATE_KEY1=production
// npx hardhat verifyCfxContract cfxtest:aam3xs88adxvs6wh15ck7t79eda2p22eje5hebrghk