const DevelopmentManager = require("./services/development-manager");
const MarketingManager = require("./services/marketing-manager");

const devManager = new DevelopmentManager();
devManager.takeInterview();

const marketingManager = new MarketingManager();
marketingManager.takeInterview();
