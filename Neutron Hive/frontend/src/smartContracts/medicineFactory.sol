// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "./singleMedicine.sol";


contract MedicineFactory{
    Ballot[] public medicineArray;
    function createBallotContract() public{
        Ballot ballotStorage = new Ballot();
        medicineArray.push(ballotStorage);
    }
    function mfStoreMedicine(uint256 _ballotIndex,
            string memory name,
            string  memory description,
            uint price,
            uint dosages,
            string memory manufactorar,
            string memory _type,
            uint percentage) public{
        Ballot ballotStorage = medicineArray[_ballotIndex];
        ballotStorage.storeMedicine(name,description,price,dosages,manufactorar,_type,percentage);
    }

    function mfMakeVoter(uint256 _ballotIndex,
        string memory name,
        bool voted,  
        address delegate, 
        uint vote
    ) public {
            Ballot ballotStorage = medicineArray[_ballotIndex];
        ballotStorage.makeVoter(name,voted,delegate,vote);
    }

    function mfMakeVote(uint256 _ballotIndex,
    address _voter, 
    uint _vote 
    ) public {
        Ballot ballotStorage = medicineArray[_ballotIndex];
        ballotStorage.makeVote(_voter,_vote);
    }

    function mfRetrieveMedicine(uint256 _ballotIndex) public view returns (uint){
        Ballot ballotStorage = medicineArray[_ballotIndex];
        uint _percentage = ballotStorage.medicinePercentage();
        return _percentage;
    }


}