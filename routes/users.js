const express = require('express');
const router = express.Router();
const oktaClient = require('../lib/okta_client.js');


/* Create a new User (register). */
router.post('/', (req, res, next) => {
  console.log(req.body);
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email,
      ethAddress: req.body.ethAddress
    },
    credentials: {password: {value: req.body.password}}
  };
  oktaClient.createUser(newUser)
      .then(user => {
        res.status(201);
        res.send(user);
      })
      .catch(err => {
        res.status(400);
        res.send(err);
      });
});

module.exports = router;