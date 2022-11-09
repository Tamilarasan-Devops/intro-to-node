var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {
        res.writeHead(200, {"content-type" : "text/html"});
        res.write(data);
        console.log("...Incoming Request: " + req.url);
        res.end();
    });
    
}).listen(8000);


console.log("Server Listening on Port 8000...");