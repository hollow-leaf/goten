import { task } from "hardhat/config"
import { readFileSync, writeFileSync } from "../helpers/pathHelper"
task("deploy:contract", "Deploy contract")
  .addParam("contract")
  .setAction(async ({ contract }, hre) => {
    await hre.run("compile")
    const [signer]: any = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory(contract)
    // if you mint in constructor, you need to add value in deploy function
    const deployContract: any = await contractFactory.connect(signer).deploy()
    console.log(`TestToken.sol deployed to ${deployContract.address}`)

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, "mainContract.json", addressData)

    await deployContract.deployed()
  },
  )

task("deploy:token", "Deploy contract")
  .addFlag("verify", "Validate contract after deploy")
  .setAction(async ({ verify }, hre) => {
    await hre.run("compile")
    const [signer]: any = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory("TestToken")
    // if you mint in constructor, you need to add value in deploy function
    const deployContract: any = await contractFactory.connect(signer).deploy(signer.address)
    console.log(`TestToken.sol deployed to ${deployContract.address}`)

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, "TestToken.json", addressData)

    await deployContract.deployed()

    if (verify) {
      console.log("verifying contract...")
      await deployContract.deployTransaction.wait(3)
      try {
        await hre.run("verify:verify", {
          address: deployContract.address,
          constructorArguments: [signer.address],
          contract: "contracts/TestToken.sol:TestToken",
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  )

  task("deploy:miner", "Deploy Miner contract")
  .addFlag("verify", "Validate contract after deploy")
  .setAction(async ({ verify }, hre) => {
    await hre.run("compile")
    const [signer]: any = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory("Goten")
    // if you mint in constructor, you need to add value in deploy function
    const token = JSON.parse(readFileSync(`scripts/address/${hre.network.name}/`, "TestToken.json"))
    const deployContract: any = await contractFactory.connect(signer).deploy(token.main)
    console.log(`MinerStakeToken.sol deployed to ${deployContract.address}`)

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, "Goten.json", addressData)

    await deployContract.deployed()

    if (verify) {
      console.log("verifying contract...")
      await deployContract.deployTransaction.wait(3)
      try {
        await hre.run("verify:verify", {
          address: deployContract.address,
          constructorArguments: [token.main],
          contract: "contracts/core/Goten.sol:Goten",
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  )
