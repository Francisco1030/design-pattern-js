module.exports = class President {
  constructor() {
    this.presidentsPrivateInformation = 'Super private';
    this.name = 'Turd Sandwich';
  }

  static instance() {
    return new this();
  }

  getName() {
    return this.name;
  }

};