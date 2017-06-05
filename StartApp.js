process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express_config.js');

var app = express();
app.listen(3000);
module.exports = app;

console.log('server running at localhost');