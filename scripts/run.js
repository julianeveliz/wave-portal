const main = async () => {
  const date = new Date();
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("This Smart Contract address is: ", waveContract.address);
  console.log("This Smart Contract is being executed by:", owner.address);

  let waveCount = await waveContract.getTotalWaves();
  let lastWaveDate = await waveContract.saveLastWaveDate(date.toString());

  let waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  lastWaveDate = await waveContract.saveLastWaveDate(date.toString());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();