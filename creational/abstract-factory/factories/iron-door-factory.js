const Welder = require("../models/welder");
const IronDoor = require("../models/iron-door");

module.exports = class IronDoorFactory {
  makeDoor() {
    return new IronDoor()
  }

  makeFittingExpert() {
    return new Welder();
  }
};