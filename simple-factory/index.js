const DoorFactory = require("./factories/door-factory");

const door =  DoorFactory.makeDoor(100, 200);
console.log('Width:', door.getWidth());
console.log('Height:', door.getHeight());