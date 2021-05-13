const Door = require("../interfaces/door");

module.exports = class Welder {
  getDescription() {
    console.log('I can only fit iron doors');
  }
};