const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {

// CHECK TO SEE WHETHER A NEW SESSION ACTUALLY NEEDS TO BE MADE

// CREATE A SESSION_ID HASH

// CALL MODEL.CREATE AND SEND IT A .this (?) AND THE REQ OBJECT

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

  // createUser(body) {
  //   //  console.log('GOT TO HERE')
  //   var cryptPass = hashAlg.encrypt(body.password);
  //   var user = {
  //     username: body.username,
  //     password: cryptPass,
  //     timestamp: new Date(),
  //   }
  //   return this.create(user);
  // }
