const Door = require("../interfaces/door");

module.exports = class IronDoor extends Door {
  getDescription() {
    console.log('I am an iron door');
  }
};