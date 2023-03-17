const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("Storage", function () {
  let StorageFactory, Storage;
  beforeEach(async function () {
    StorageFactory = await ethers.getContractFactory("Storage");
    Storage = await StorageFactory.deploy();
  });

  

  it("Should update when we call add", async function () {
    const expectedValue = [
      "nilay",
      "Omkar",
      "255",
      "15:20:00 16-03-2022",
      "1234hd"
    ];
    const transactionResponse = await Storage.AddtoArray(
        // expectedValue
      "nilay",
      "Omkar",
      "255",
      "15:20:00 16-03-2022",
      "1234hd"
    );
    await transactionResponse.wait(1);

    const currentValue = await Storage.retrieve();
    console.log(currentValue[0].Sender);
    assert.equal(currentValue[0], expectedValue);
  });

// it("Should start with a empty array", async function () {
//     const currentValue = await Storage.retrieve();
//     const expectedValue = []

//     assert.equal(currentValue, expectedValue);
//   });
});
