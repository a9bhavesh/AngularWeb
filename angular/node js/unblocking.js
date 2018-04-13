var fs=require('fs');
fs.readFile('help.txt',function (err,data) {
    if (!err){
        console.log(data.toString());
    }else {
        console.log("unable to read");
    }
});
console.log("completed");