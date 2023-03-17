// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {
    struct Transaction {
        string Sender;
        string receiver;
        // uint amount;
        string amount;
        string date;
        string transactionId;
    }
    Transaction[] public TransactionData;

    function AddtoArray(
        string memory _sender,
        string memory _receiver,
        string memory  _amount,
        // uint  _amount,
        string memory _date,
        string memory _transactionId
    ) public {
        TransactionData.push(
            Transaction(_sender, _receiver, _amount, _date, _transactionId)
        );
    }

    function retrieve() public view returns (Transaction[] memory) {
        return TransactionData;
    }
}
