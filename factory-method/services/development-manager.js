const Developer = require('../models/developer');
const HiringManager = require('./hiring-manager');

module.exports = class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
};