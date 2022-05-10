var http = require('http');
var url = require('url');
var fs = require('fs');
var CalculationModule = require('./CalculationModule.js');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log("chegou aqui");
    if (q.query.operation == "Subtraction"){
        CalculationModule.subtruction(req, res, q.query)
        console.log("Subtraction");
    }
    else if (q.query.operation == "Sum")
        CalculationModule.addition(req, res, q.query)    
    else if (q.query.operation == "Multiplication")
        CalculationModule.multiplication(req, res, q.query)
    else if (q.query.operation == "Division")
        CalculationModule.division(req, res, q.query)
    else
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200); // Content-Type not included
            res.write(data);
            return res.end();
        });
}).listen(8080);