const Lion = require("../interfaces/lion");

module.exports = class AsianLion extends Lion {
  constructor() {
    super();
  }

  roar() {
    console.log("ROAR!!! ASIAN");
  }
};
