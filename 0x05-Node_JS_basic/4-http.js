const http = require('http');

const app = htt.createServer((req, res) => {
    res.setHeader(200, {'Content-Type': 'text/html'});
    res.end('Hello Holberton School');
}).listen(1245)

module.exports = app;
