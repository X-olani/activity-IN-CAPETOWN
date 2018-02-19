var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false });
var mongoose = require('mongoose');
var fs = require("fs");
var Reviews = require('./model/reviews');
 var path = require('path');

//mongodb://<dbuser>:<dbpassword>@ds127065.mlab.com:27065/codespace
var mongoDB ='mongodb://Xolani:yo48chess@ds127065.mlab.com:27065/codespace'

mongoose.connect(mongoDB, {
  useMongoClient: true
});


mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.join(__dirname, '/styless')));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" +"index.html" );
})


app.post('/qte', urlencodedParser, function (req, res) {


  var ccc = new Reviews({
    author:req.body.author,
    quote:req.body.quote,
    rate:req.body.rate,
  });
});
app.post('/', urlencodedParser, function (req, res) {

   var newReview = new Reviews ({
     where:req.body.where,
   author:req.body.author,
 quote: req.body.quote,
 rate:req.body.rate,
});

 newReview.save(function(err) {
   if (err) throw err;

   console.log('User created!');
   });
});

   app.get('/revie', function(req,res){
 Reviews.find({}, function(err, quotes){
   if (err) throw  err;
   res.end(JSON.stringify(quotes))
});


})







var server = app.listen(8082, function () {

   var host = server.address().address
   var port = server.address().port
 console.log("Example app listening at http://%s:%s", host,port)
})
