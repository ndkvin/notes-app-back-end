/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */

class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'CluentError';
  }
}

module.exports = ClientError;
