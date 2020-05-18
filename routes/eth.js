const express = require('express');
const router = express.Router();
var Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:7545');


async function getAccounts() {
  const result = await web3.eth.getAccounts();
  return result;
}

async function getBalance(account) {
  const balance = await TokenContract.methods.getBalance(account).call();
  return balance;
}



router.get('/accounts', async function(req, res) {
  getAccounts().then((accounts) => {
    res.statusCode = statusOK;
    res.send(accounts);
  })
});

router.get('/accounts/:id', async function(req, res) {
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



module.exports = router;