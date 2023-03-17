const hre = require("hardhat");

async function main({transaction_id, sender_id, receiver_id, amount, timestamp}) {
  const StorageFactory = await ethers.getContractFactory("Storage")
  console.log("Deploying contract...")
  const Storage = await StorageFactory.deploy()
  await Storage.deployed()
  console.log(Storage);
  console.log(`Deployed contract to: ${Storage.address}`)

  const currentValue = await Storage.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  const transactionResponse = await Storage.AddtoArray(
    sender_id,receiver_id,String(amount), timestamp, transaction_id
  )

  
  await transactionResponse.wait(1)

  // const transactionResponse1 = await Storage.AddtoArray(
  //   "Omkar","Nilay","255","15:20:00 16-03-2022","12df43"
  // )
  // await transactionResponse1.wait(1)
  const updatedValue = await Storage.retrieve()
  console.log(`Updated Value is: ${updatedValue[0]}`)
  return Storage.address
}

module.exports = {main};
// export default main;
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
