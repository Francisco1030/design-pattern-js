const Door = require("../interfaces/door");

module.exports = class Carpenter {
  getDescription() {
    console.log('I can only fit woonden doors');
  }
};