class NotImplementedException extends Error {
  constructor() {
    super('Not Implemented Exception');
  }
}

module.exports = class Door {
  getWidth() {
    throw new NotImplementedException();
  }
 
  getHeight() {
    throw new NotImplementedException();
  }
};