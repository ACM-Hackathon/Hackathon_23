from web3 import Web3
import json
# Create your views here.


url = 'http://127.0.0.1:7545'
w3 = Web3(Web3.HTTPProvider(url))
w3.eth.default_account = w3.eth.accounts[0]
address = '0x49e4B05d42389960F7FD60214FCD788fC463cc14'
abi = json.loads('[{"inputs":[],"name":"createBallotContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"medicineArray","outputs":[{"internalType":"contract Ballot","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ballotIndex","type":"uint256"},{"internalType":"address","name":"_voter","type":"address"},{"internalType":"uint256","name":"_vote","type":"uint256"}],"name":"mfMakeVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ballotIndex","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"voted","type":"bool"},{"internalType":"address","name":"delegate","type":"address"},{"internalType":"uint256","name":"vote","type":"uint256"}],"name":"mfMakeVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ballotIndex","type":"uint256"}],"name":"mfRetrieveMedicine","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ballotIndex","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"dosages","type":"uint256"},{"internalType":"string","name":"manufactorar","type":"string"},{"internalType":"string","name":"_type","type":"string"},{"internalType":"uint256","name":"percentage","type":"uint256"}],"name":"mfStoreMedicine","outputs":[],"stateMutability":"nonpayable","type":"function"}]')

contract = w3.eth.contract(address=address, abi=abi)

def setVariables(request):
    try:
        global address, abi, contract
        address = request.data['address']
        abi = request.data['abi']
        contract = w3.eth.contract(address=address, abi=abi)
        return True
    except Exception as e:
        return False

def createBallotContract():
    tx_hash = contract.functions.createBallotContract().transact()
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    return tx_receipt


def mfStoreMedicine(_ballotIndex, name, description, price, dosages, manufactorar, _type, percentage):
    tx_hash = contract.functions.mfStoreMedicine(_ballotIndex, name, description, price, dosages, manufactorar, _type, percentage).transact()
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    return tx_receipt


def mfMakeVoter(_ballotIndex, name, voted,  delegate, vote):
    tx_hash = contract.functions.mfMakeVoter(_ballotIndex, name, voted,  delegate, vote).transact()
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    return tx_receipt


def mfMakeVote(_ballotIndex, _voter, _vote):
    tx_hash = contract.functions.mfMakeVote(_ballotIndex, _voter, _vote).transact()
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    return tx_receipt


def mfRetrieveMedicine(_ballotIndex):
    val = contract.functions.mfRetrieveMedicine(_ballotIndex).call()
    return val
