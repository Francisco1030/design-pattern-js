const Lion = require("../interfaces/lion");

module.exports = class AfricanLion extends Lion {
  constructor() {
    super();
  }

  roar() {
    console.log("ROAR!!! AFRICAN");
  }
};
