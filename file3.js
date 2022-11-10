var http = require("http");
var fs = require("fs");
var url = require("url");
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
    console.log("...Incoming Request: " + req.url);
    var q = url.parse(req.url, true);
    console.log(q.pathname);
    var filename = "." + q.pathname;
    if (filename == "./") {
        filename = "./index";
    }

    filename = filename + ".html";

    
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {"content-type" : "text/html"});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {"content-type" : "text/html"});
        res.write(data);
        return res.end();
    });
    
}).listen(PORT);


console.log("Server Listening on Port 8000...");