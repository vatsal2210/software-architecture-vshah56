const http = require('http');
const express = require('express');
const log4js = require('log4js');
const path = require('path');
const appName = "companies";
const localConfig = require('./config/local.json');

const logger = log4js.getLogger(appName);
logger.level = process.env.LOG_LEVEL || 'info'
const app = express();
const server = http.createServer(app);

require("./config/database");
app.use(log4js.connectLogger(logger, { level: logger.level }));
const serviceManager = require('./services/service-manager');
require('./services/index')(app);
require('./routers/index')(app, server);

// Add your code here

const port = process.env.PORT || localConfig.port;
server.listen(port, function(){
  logger.info(`companies listening on http://localhost:${port}/appmetrics-dash`);
  logger.info(`OpenAPI (Swagger) spec is available at http://localhost:${port}/swagger/api`);
  logger.info(`Swagger UI is available at http://localhost:${port}/explorer`);
});

app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, './public', '404.html'));
});

app.use(function (err, req, res, next) {
	res.sendFile(path.join(__dirname, './public', '500.html'));
});

module.exports = server;