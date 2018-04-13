var http=require("http");
http.createServer(function (request,response) {
    var x=10;
    var y=20;
    var z=x+y;
    response.end('Addition:'+z);
}).listen(8080);
console.log("server started http://127.0.0.1:8080");
