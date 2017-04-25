const utils = require('../lib/hashUtils');
const Model = require('./model');
const db = require('../db');

// Write your user database model methods here

class Users extends Model {
  constructor() {
    super('users');

  }

  createUser(body, callback) {
	console.log('GOT TO HERE')
    var user = {
      username: body.username,
      password: body.password,
    }

    db.query('INSERT INTO users SET ?', user, function(err, results) {
      if (err) {
        console.log(err);
      } else {
        console.log('saved to database')
      }
    });
  }

};



module.exports = new Users();