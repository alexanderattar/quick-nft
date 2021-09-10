async function main() {
  // Grab the contract factory
  const QuickNFT = await ethers.getContractFactory('QuickNFT');

  // Start deployment, returning a promise that resolves to a contract object
  const quickNFT = await QuickNFT.deploy(); // Instance of the contract
  console.log('Contract deployed to address:', quickNFT.address);
}

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
