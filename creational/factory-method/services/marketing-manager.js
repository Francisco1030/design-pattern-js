const CommunityExecutive = require('../models/community-executive');
const HiringManager = require('./hiring-manager');

module.exports = class MarketingManager extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
};