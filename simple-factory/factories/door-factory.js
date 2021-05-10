const WoodenDoor = require("../interfaces/wooden-door");

const DoorFactory = {
  makeDoor: (width, height) => new WoodenDoor(width, height)
};

module.exports = DoorFactory;