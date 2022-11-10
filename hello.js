var http = require("http");
http.createServer(function (req, res) {
    res.writeHead(200, {"content-type" : "text/html"});
    res.end("<h1>Hello world! This is my first nodejs code</h1>");
}).listen(8000);

console.log("Server Listening on Port 8000...");