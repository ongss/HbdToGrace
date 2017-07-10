var express = require('express');
var fs = require('fs');

fs.readFile(__dirname+'/resource/heightScore.json',function(err,data){
	var score = JSON.parse(data);
});

var app = express();

app.use(express.static(__dirname));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html',score);
});

app.listen(777);

console.log("");
console.log("SERVER IS RUNNING FORM",__dirname,"AT PORT 777");
console.log("");

