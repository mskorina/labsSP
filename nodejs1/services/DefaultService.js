/* eslint-disable no-unused-vars */
const Service = require('./Service');
const crypto = require('crypto');
class DefaultService {

  /**
   * Получение md5 из исходной строки
   * Получение хеша mda5
   *
   * inputstring String Входная строка
   * returns String
   **/
  static getmd5({ inputstring }) {
    return new Promise(
      async (resolve) => {
        try {
          var hash = crypto.createHmac('md5', inputstring)
                        .digest('hex');
          resolve(Service.successResponse(hash));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Получение sha1 из исходной строки
   * Получение хеша sha256
   *
   * inputstring String Входная строка
   * returns String
   **/
  static getsha1({ inputstring }) {
    return new Promise(
      async (resolve) => {
        try {
          var hash = crypto.createHmac('sha1', inputstring)
                        .digest('hex');
          resolve(Service.successResponse(hash));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

  /**
   * Получение sha256 из исходной строки
   * Получение хеша sha256
   *
   * inputstring String Входная строка
   * returns String
   **/
  static getsha256({ inputstring }) {
    return new Promise(
      async (resolve) => {
        try {
          var hash = crypto.createHmac('sha256', inputstring)
                        .digest('hex');
          resolve(Service.successResponse(hash));
        } catch (e) {
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    );
  }

}

module.exports = DefaultService;
