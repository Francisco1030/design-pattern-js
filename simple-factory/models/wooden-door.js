const Door = require("../interfaces/door");

module.exports = class WoodenDoor extends Door {
 constructor(width, height) {
  super();
  this.width = width;
  this.height = height;
 }

 getWidth() {
   return this.width;
 }

 getHeight() {
   return this.height;
 }
};