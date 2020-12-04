'use strict';

const c = require('crypto');
/**
  @module miniCrypt
  @desc
 */
module.exports = (function() {
  /**
    @constructor
    @arg {number} its - The number of iterations to be performed; higher iterations means more security but slower speed.
    @arg {number} keyL - The length of the result in bytes.
    @arg {number} saltL - The amount of salt in bytes.
    @arg {string} saltL - The digest (i.e. hash) algorithm to use.
    @desc Creates a new `MiniCrypt` instance.
   */
  function MiniCrypt(its = 1e5, keyL = 64, saltL = 16, digest = 'sha256') {
    this.its = its;
    this.keyL = keyL;
    this.saltL = saltL;
    this.digest = digest;
  }

  /**
    @public
    @memberof MiniCrypt
    @arg {string} pw - The plain-text user password to be hashed.
    @returns {[string, string]} - An array containing (1) the salt used to hash the specified password, and (2) the hash itself.
    @desc Hash a user password.
   */
  MiniCrypt.prototype.hash = function(pw) {
    const salt = c.randomBytes(this.saltL).toString('hex'), // get our new salt for this pw
          hash = c.pbkdf2Sync(pw, salt, this.its, this.keyL, this.digest).toString('hex'); // hash the pw
    return [salt, hash]; // return the pair for safe storage
  };

  /**
    @public
    @memberof MiniCrypt
    @arg {string} pw - The plain-text user password to be checked.
    @arg {string} salt - The salt associated with the user.
    @arg {string} hash - The hash associated with the user.
    @returns {Boolean} - A result of `true` iff `pw` & `salt` hash to `hash`.
    @desc Validate a user password.
   */
  MiniCrypt.prototype.check = function(pw, salt, hash) {
    return c.timingSafeEqual(c.pbkdf2Sync(pw, salt, this.its, this.keyL, this.digest), Buffer.from(hash, 'hex'));
  };

  return MiniCrypt;
}());