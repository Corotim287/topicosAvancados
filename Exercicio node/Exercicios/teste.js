var http = require('http');
var fs = require('fs')
let arquivoaberto = fs.createReadStream("./index.html");

var minhabiblioteca = require("./exemplobiblia");
var minhaApp = "Arquivo principal";




http.createServer(function (req, res) {fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});}).listen(8080);


