class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Exception");
  }
}

module.exports = class Lion {
  roar() {
    throw new NotImplementedException();
  }
};
