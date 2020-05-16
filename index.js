// nodejs_server/index.js

var express = require('express');
var bodyParser = require('body-parser');
var Web3 = require('web3');
const {tokenAbi, tokenSaleAbi} = require('./abi/abis');
app = express();

// bodyParser is a type of middleware
// It helps convert JSON strings
// the 'use' method assigns a middleware
app.use(bodyParser.json({type: 'application/json'}));

const hostname = '127.0.0.1';
const port = 3000;

// http status codes
const statusOK = 200;
const statusNotFound = 404;


const web3 = new Web3(Web3.givenProvider || 'ws://localhost:7545');

const tokenContractAddr = '0x674f217D9729845dc8e6DE394bB63a52b78EbFa8';
const TokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddr);
const tokenSaleContractAddr = '0x936bEaE9e6693a6A0beEb1fCc6E86e2d81938069';
const TokenSaleContract =
    new web3.eth.Contract(tokenSaleAbi, tokenSaleContractAddr);


var tokenEvents = TokenContract.events.allEvents((error, events) => {
  console.log(events);
});



async function getTokenSupply() {
  const result = await TokenContract.methods.totalSupply().call();
  return result;
}

async function getAccounts() {
  const result = await web3.eth.getAccounts();
  return result;
}

async function getBalance(account) {
  const balance = await TokenContract.methods.getBalance(account).call();
  return balance;
}



app.get('/totalSupply', async function(req, res) {
  getTokenSupply().then((totalSupply) => {
    res.statusCode = statusOK;
    res.send(totalSupply);
  })
});

app.get('/accounts', async function(req, res) {
  getAccounts().then((accounts) => {
    res.statusCode = statusOK;
    res.send(accounts);
  })
});

app.get('/accounts/:id', async function(req, res) {
  var id = req.params.id;
  getAccounts().then((accounts) => {
    accounts.forEach(account => {
      if (account == id) {
        getBalance(account).then((balance) => {
          res.statusCode = statusOK;
          res.send(balance);
        })
      }
    });
  })
});



app.listen(port, hostname, function() {
  console.log(`Listening at http://${hostname}:${port}/...`);
});