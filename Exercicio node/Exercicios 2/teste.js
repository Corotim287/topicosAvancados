var http = require('http');

var minhabiblioteca = require("./exemplobiblia");
var minhaApp = "Arquivo principal";



var http = require('http'); //bibliotecas/module
http.createServer(function (req, res) { 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(minhabiblioteca.aula);
 }).listen(8080);


