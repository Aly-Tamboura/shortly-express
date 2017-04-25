const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

var algorithm = 'aes-256-ctr';
var password = 'd6F3Efeq';
var encrypt = function(text) {
  var cipher = crypto.createCipher(algorithm, password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
var decrypt = function(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
module.exports = {
    encrypt: encrypt,
    decrypt: decrypt,
};