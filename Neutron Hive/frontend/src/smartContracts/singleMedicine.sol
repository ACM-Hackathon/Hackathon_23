// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/** 
 * @title Ballot
 * @dev Implements voting process along with vote delegation
 */
contract Ballot {

    struct Voter {
       string name;
        bool voted;  
        address delegate; 
        uint vote;   
    }


    struct Medicines {
        string name;
        string description;
        uint price;
        uint dosages;
        string manufactorar;
        string _type;
        uint percentage; 
    }

    address public chairperson;

    // mapping(address => Voter) public voters;

    Medicines public _medicine;
    Voter[] public voters;

    function storeMedicine(string memory name,
            string  memory description,
            uint price,
            uint dosages,
            string memory manufactorar,
            string memory _type,
            uint percentage
        ) public {
            _medicine = Medicines(name,description,price,dosages,manufactorar,_type,percentage);
    }
    function makeVoter( 
        string memory name,
        bool voted,  
        address delegate, 
        uint vote
    ) public {
        voters.push(Voter(name,voted,delegate,vote));
    }
     function retrieve() public view returns(Medicines memory){
        return _medicine;
    }

    function makeVote(address _voter, uint _vote ) public {
        bool flag = false;
        for(uint i = 0; i < voters.length; ++i){
            if(voters[i].delegate == _voter){
                require(voters[i].voted == false,"You have already voted");
                voters[i].vote = _vote;
                flag = true;
                voters[i].voted = true;
                UpdatePercentage();
                break;
            }
        }
        require(flag == true, "No Oracle with entered address found");
    }
    function retrieveVote(uint i) public view returns(uint){
        return voters[i].vote;
    }

    function UpdatePercentage()internal{
        uint sum=0;
        for(uint i=0;i<voters.length;++i){
            sum+=voters[i].vote;
        }
        sum=sum/voters.length;
        _medicine.percentage=sum;
    }

    function medicinePercentage() public view returns(uint){
        return _medicine.percentage;
    }
    // function giveRightToVote(address voter) public {
    //     require(
    //         msg.sender == chairperson,
    //         "Only chairperson can give right to vote."
    //     );
    //     require(
    //         !voters[voter].voted,
    //         "The voter already voted."
    //     );
    //     require(voters[voter].weight == 0);
    //     voters[voter].weight = 1;
    // }

}