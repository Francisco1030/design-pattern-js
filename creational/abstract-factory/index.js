let door;
let expect;

const WoodenDoorFactory = require('./factories/wooden-door-factory');
const woodenDoorFactory = new WoodenDoorFactory();

door = woodenDoorFactory.makeDoor();
expect = woodenDoorFactory.makeFittingExpert();

door.getDescription();
expect.getDescription();

const IronDoorFactory = require('./factories/iron-door-factory');
const ironDoorFactory = new IronDoorFactory();

door = ironDoorFactory.makeDoor();
expect = ironDoorFactory.makeFittingExpert();

door.getDescription();
expect.getDescription();
