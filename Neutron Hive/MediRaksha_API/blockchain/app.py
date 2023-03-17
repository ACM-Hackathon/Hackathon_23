# Setup
from web3 import Web3
import json

url = 'http://127.0.0.1:7545'
w3 = Web3(Web3.HTTPProvider(url))
w3.eth.default_account = w3.eth.accounts[0]
print("Connection : " + str(w3.is_connected()))


address='0x0222572801C481F517333524Daf97dD25E4057Bb'
abi = json.loads('[{"inputs":[],"name":"createBallotContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"medicineArray","outputs":[{"internalType":"contract Ballot","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ballotIndex","type":"uint256"},{"internalType":"address","name":"_voter","type":"address"},{"internalType":"uint256","name":"_vote","type":"uint256"}],"name":"mfMakeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ballotIndex","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"voted","type":"bool"},{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint256","name":"vote","type":"uint256"}],"name":"mfMakeVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ballotIndex","type":"uint256"}],"name":"mfRetrieveMedicine","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ballotIndex","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"dosages","type":"uint256"},{"internalType":"string","name":"manufactorar","type":"string"},{"internalType":"string","name":"_type","type":"string"},{"internalType":"uint256","name":"percentage","type":"uint256"}],"name":"mfStoreMedicine","outputs":[],"stateMutability":"nonpayable","type":"function"}]')


contract = w3.eth.contract(address=address, abi=abi)

tx_hash = contract.functions.createBallotContract().transact()
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

tx_hash = contract.functions.mfStoreMedicine(0,"aspirin","xyz",123,2,"shah medics","cough",34).transact()
tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)


print(contract.functions.mfRetrieveMedicine(0).call())