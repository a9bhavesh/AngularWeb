var fs=require("fs");
var data=fs.readFileSync('helpe.txt');
console.log(data.toString());
console.log("Read operation successfllly");