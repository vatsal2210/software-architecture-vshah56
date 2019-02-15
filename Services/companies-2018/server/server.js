// Uncomment following to enable zipkin tracing, tailor to fit your network configuration:
// var appzip = require('appmetrics-zipkin')({
//     host: 'localhost',
//     port: 9411,
//     serviceName:'frontend'
// });

require('appmetrics-dash').attach();
require('appmetrics-prometheus').attach();
const appName = require('./../package').name;
const http = require('http');
const express = require('express');
const log4js = require('log4js');
const localConfig = require('./config/local.json');
const path = require('path');
const mongoose = require('mongoose');

// database connection
require("./config/database");
// mongoose.connect(localConfig.dbUrl, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// }, err => {
//   if (err) {
//     console.log("Database connection Error: " + err);
//     return console.log(err);
//   } else {
//     console.log("Connect to MongoDB");
//   }
// });

const logger = log4js.getLogger(appName);
logger.level = process.env.LOG_LEVEL || 'info'
const app = express();
const server = http.createServer(app);

app.use(log4js.connectLogger(logger, {
  level: logger.level
}));
const serviceManager = require('./services/service-manager');
require('./services/index')(app);
require('./routers/index')(app, server);

// Add your code here

const port = process.env.PORT || localConfig.port;
server.listen(port, function () {
  logger.info(`companies2018 listening on http://localhost:${port}/appmetrics-dash`);
  logger.info(`OpenAPI (Swagger) spec is available at http://localhost:${port}/swagger/api`);
  logger.info(`Swagger UI is available at http://localhost:${port}/explorer`);
});

app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

app.use(function (err, req, res, next) {
  res.sendFile(path.join(__dirname, '../public', '500.html'));
});

module.exports = server;