const WildDogAdapter = require("./adapter/wild-dog-adapter");
const Hunter = require("./models/hunter");
const WildDog = require("./models/wild-dog");

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);
