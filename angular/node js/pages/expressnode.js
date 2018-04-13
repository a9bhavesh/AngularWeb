var express=require('express');
var app=express();
app.use(express.static("pages"));
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'amazondb'
});
app.get('/',function (req,res) {
    res.redirect('pages/index.html')
})
app.get('/products',function (req,res) {
    con.connect();
    con.query('select * from products',function (err,rows,fields) {
        res.send(rows);
    })
})
app.listen(8080);
console.log("Server listening the successfully");