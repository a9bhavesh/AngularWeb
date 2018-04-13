var http= require ("http");
http.createServer(function (request,response) {

    var x=10;
    var y=20;
    if (x>200 && y<300)
    {
        response.end("ravi");

    }
    else
    {
        response.end("pradeep");
    }


}).listen(8080);
console.log('server started http://127.0.0.1:8080');