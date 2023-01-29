const hre = require("hardhat");
const {
    ConfluxSDK,  // The js-conflux-sdk SDK
    conflux,    // The Conflux instance
} = hre;
const { writer_info_all } = require('./tool/cfx_hh_log.js');
const { getcontractinfo } = require('./tool/readcontracts');
// npx hardhat run scripts/1_develop_main.js --network dev
// npx hardhat run scripts/1_develop_main.js --network zhaomei
// npx hardhat run scripts/1_develop_main.js --network polygonMumbai
// npx hardhat run scripts/1_develop_main.js --network confluxTestnet
// npx hardhat verify 0xcE68d81F5278Dc00A7D5bD46b3CDc0C2B728Af6E --network zhaomei

async function main() {
    // 加载hardhat.config.js设置的钱包
    const accounts = await conflux.getSigners();
    // console.log(owner.address);

    const Main_con = await conflux.getContractFactory("mainwithdraw");
    const arguments = require('../other_info/arguments');

    const main_con = await Main_con.constructor().sendTransaction({
        from: accounts[0].address,
    }
        // ...arguments
    ).executed();
    main_con["address"] = main_con.contractCreated
    console.log("Main_con deployed to:", main_con.address);
    // console.log(main_con);
    let Artifact = await artifacts.readArtifact("mainwithdraw");
    await writer_info_all(network, Artifact, main_con, null);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });