const utils = require('../lib/hashUtils');
const Model = require('./model');
const db = require('../db');
const hashAlg = require('../lib/hashUtils');

// Write your user database model methods here

class Users extends Model {
  constructor() {
    super('users');

  }

  createUser(body) {
//	console.log('GOT TO HERE')
    var cryptPass = hashAlg.encrypt(body.password);
    var user = {
      username: body.username,
      password: cryptPass,
      timestamp: new Date(),
    }
    return this.create(user);
  }

  validateUser(body) {
    // hash user's pw
    // get hashed password from database
    // if the two are not equal, fail
    return this.get({
      username: body.username
    })
  }

};



module.exports = new Users();