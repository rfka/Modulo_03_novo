const http = require('http');

// console.log(http);

http.createServer(function(req, res){
    res.end('<h1>Ola Mundo!!</h1>');
}).listen(3000);

console.log('Meu servidor esta rodando');