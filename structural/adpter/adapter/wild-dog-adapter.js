module.exports = class WildDogAdapter {
  constructor(dog) {
    this.dog = dog;
  }

  roar() {
    return this.dog.bark();
  }
};
