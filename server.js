const http = require('http')
//here we r importing http functionality, import doesnot work here
const app =require('./app');
const port=process.env.port || 3000;
const server=http.createServer(app); //create server func is defined in http
server.listen(port);
// all this above is a simple server setup
