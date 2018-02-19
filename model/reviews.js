var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  where: String,
  author: String,
  quote:String,
  rate:Number,

});

var Reviews = mongoose.model('Reviews', quoteSchema);

// make this available to our users in our Node applications
module.exports = Reviews;
