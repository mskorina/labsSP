const Controller = require('./Controller');

class DefaultController {
  constructor(Service) {
    this.service = Service;
  }

  async getmd5(request, response) {
    await Controller.handleRequest(request, response, this.service.getmd5);
  }

  async getsha1(request, response) {
    await Controller.handleRequest(request, response, this.service.getsha1);
  }

  async getsha256(request, response) {
    await Controller.handleRequest(request, response, this.service.getsha256);
  }

}

module.exports = DefaultController;
