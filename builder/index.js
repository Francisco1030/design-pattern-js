const BurguerBuilder = require("./services/burger-builder");

const burger = 
  (new BurguerBuilder(14))
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();

  console.log(burger);