const http = require('http')
//here we r importing http functionality, import doesnot work here
const port=process.env.port || 3000;
const server=http.createServer();
