const express = require('express');
const {getAccounts} = require('./eth.js');
const router = express.Router();
let bigInt = require('big-integer');
let ethers = require('ethers');

const url = 'http://localhost:7545'
let provider = new ethers.providers.JsonRpcProvider(url);
const {tokenAbi, tokenSaleAbi} = require('../abi/abis');

const PLATO_TOKEN_ADDRESS = '0xC05EB4B93351770eC2c966000C49CF31415f527D';
let userWallet;
let TokenContract;


// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
const TokenReadOnlyContract =
    new ethers.Contract(PLATO_TOKEN_ADDRESS, tokenAbi, provider);



router.get('/totalSupply', async function(req, res) {
  let totalSupply = await TokenReadOnlyContract.totalSupply();

  console.log(totalSupply);

  res.send(totalSupply);
});

router.get('/symbol', async function(req, res) {
  let symbol = await TokenReadOnlyContract.symbol();

  console.log(symbol);

  res.send(symbol);
});



router.post('/userWallet', (req, res, next) => {
  userWallet = req.body
  TokenContract =
      new ethers.Contract(PLATO_TOKEN_ADDRESS, tokenAbi, userWallet);
});



router.get('/balances', async function(req, res) {
  let etherBalance = await TokenContract.balanceOf(userWallet.address);
  res.send(etherBalance);
});



// http status codes
const statusOK = 200;
const statusNotFound = 404;



module.exports = router;