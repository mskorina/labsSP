class Service {
  static rejectResponse(error, code = 500) {
    return { error, code };
  }

  static successResponse(payload, code = 200) {
    // return { payload, code };
    return payload;
  }
}

module.exports = Service;
