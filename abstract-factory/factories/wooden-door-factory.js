const Carpenter = require("../models/carpenter");
const WoodenDoor = require("../models/wooden-door");

module.exports = class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeFittingExpert() {
    return new Carpenter();
  }
};