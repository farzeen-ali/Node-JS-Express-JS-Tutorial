const http = require('http');

// http.createServer((request,response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write("<h2>Hello From Node JS</h2>")
//     response.end();
// }).listen(1000)

// function as a parameter

const sayHello = (request, response) => {
    response.write("Hello From SayHello Function")
    response.end()
}

http.createServer(sayHello).listen(1000)