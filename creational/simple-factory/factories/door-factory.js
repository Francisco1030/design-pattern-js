const WoodenDoor = require("../models/wooden-door");

const DoorFactory = {
  makeDoor: (width, height) => new WoodenDoor(width, height)
};

module.exports = DoorFactory;