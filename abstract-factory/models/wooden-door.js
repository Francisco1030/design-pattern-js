const Door = require("../interfaces/door");

module.exports = class WoodenDoor extends Door {
  getDescription() {
    console.log('I am a wooden door');
  }
};