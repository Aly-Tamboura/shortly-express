const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you session database model methods here

class Session extends Model {
  constructor() {
    super('session');

  }

  createUser(body) {
  }

};

module.exports = new Session();