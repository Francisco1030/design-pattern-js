const Burguer = require("../models/burger");

module.exports = class BurguerBuilder {
  constructor(size) {
    this.size = size;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addCheeze() {
    this.cheeze = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build() {
    return new Burguer(this);
  }

};