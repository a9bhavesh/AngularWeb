var http=require("http");
var fs=require("fs");
http.createServer(function (request,response) {
    var data=fs.readfileSync("help.txt");
    response.end(data.toString());
    console.log("Response success");

}).listen(8080);
console.log("Server Started on port 8080");