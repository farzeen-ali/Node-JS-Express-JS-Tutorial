const http = require('http');
const data = require('./empData')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'application\json'});
    res.write(JSON.stringify({name: 'Farzeen', dep : 'IT'}));
    // res.write(JSON.stringify(data));
    res.end();
}).listen(1000);