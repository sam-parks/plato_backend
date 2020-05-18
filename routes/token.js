const express = require('express');
const router = express.Router();

var Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:7545');
const {tokenAbi, tokenSaleAbi} = require('../abi/abis');

const tokenContractAddr = '0x674f217D9729845dc8e6DE394bB63a52b78EbFa8';
const TokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddr);
const tokenSaleContractAddr = '0x936bEaE9e6693a6A0beEb1fCc6E86e2d81938069';
const TokenSaleContract =
    new web3.eth.Contract(tokenSaleAbi, tokenSaleContractAddr);


var tokenEvents = TokenContract.events.allEvents((error, events) => {
  console.log(events);
});



router.get('/totalSupply', async function(req, res) {
  getTokenSupply().then((totalSupply) => {
    res.statusCode = statusOK;
    res.send(totalSupply);
  })
});



async function getTokenSupply() {
  const result = await TokenContract.methods.totalSupply().call();
  return result;
}



module.exports = router;