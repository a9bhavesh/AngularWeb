var express=require("express");
var app=express();
app.get('/list',function (req,res) {
    res.send('Access All Product Details');
    console.log('Get Success');
});

app.get('/details/:id',function (req,res) {
    res.send("Accessing product id:"+req.params["id"]);
    console.log('Get Success');
});

app.get('d*s',function (req,res) {
    res.send('Request for Annonymous page');
    console.log('Get Success');
});

app.post('/create',function (req,res) {
    res.send('Record inserted');
    console.log('post success');
});

app.put('/update',function (req,res) {
    res.send('Record update');
    console.log('put success');
});

app.delete('/delete',function (req,res) {
    res.send('Record Delete');
    console.log('Delete Success');
});
app.listen(8080);
console.log('Server started on port:8080');