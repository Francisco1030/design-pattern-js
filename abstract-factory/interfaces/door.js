class NotImplementedException extends Error {
  constructor() {
    super('Not Implemented Exception');
  }
}

module.exports = class Door {
  getDescription() {
    throw new NotImplementedException();
  }
};