/**
 * Created by pxq on 17-7-7.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// var json = require('./public/json/json.json');


app.use(express.static('public'));
app.use(express.static('public/views'));
// app.use(express.static('public/'));

app.get('/index.html', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("http://%s:%s", host, port);
})




//login.html
// app.post('/login',function(req,res){
//   var loginArr = [
//     {
//       name:'Lili',
//       password:123
//     },
//     {
//       name:'Jhon',
//       password:123
//     }
//   ];
//
//   // var flag = false;
//   for(var i=0,len=loginArr.length;i<len;i++){
//     var loginarr = loginArr[i];
//     // console.log(loginarr.name,loginarr.password);
//     console.log(req.body.name,req.body.password);
//     if(loginarr.name == req.body.name && loginarr.password == req.body.password){
//       // flag = true;
//       return res.send({success:1,data:"ok"})
//     }else {
//       return res.send({data:"出错了，假数据中木有！"})
//     }
//   }
//   /*if(flag){
//     return res.send({success:1,data:"ok"})
//   }else {
//     return res.send({data:"出错了，假数据中木有！"})
//   }*/
// })
