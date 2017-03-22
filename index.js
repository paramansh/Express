// var express = require('express');
// var app = express();
// var things = require("./things");
// app.use("/things", things);
// /*
// //The app.use function call on route '/things' attaches the things router with this route.(/things route)
// */
// app.listen(3000);
var express = require('express');
var app = express();
var url = require('url');
var fs = require('fs');
// app.set('view engine', 'pug');
// app.set('views','./views');
//
// app.get('/first_template', function(req, res){
//     res.render('first_view');
app.get('/', function(req, res){
  res.sendFile(__dirname+"/input.html");
});
app.get('/output', function(req, res){
  console.log(url.parse(req.url).query.toString().split('=')[1]);
  var inputStr = url.parse(req.url).query.toString().split('=')[1];
  var meaning = 'not found';
  fs.readFile('meanings', 'utf8', function(err,data){
    if (err) {
   return console.log(err);
   }
 console.log(data);
 var words = data.split("\n");
 for(var i = 0;i<words.length;i++)
 {
   var word = words[i].split(': ')[0];
   if(word === inputStr)
   {
     meaning = words[i].split(': ')[1];
     console.log(meaning);
     var file = __dirname+"/output.html";
     res.send(meaning);
   }
 }
  });

//  res.sendFile(__dirname+"/output.html");
});
app.listen(3000);
