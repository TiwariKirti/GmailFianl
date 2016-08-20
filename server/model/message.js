var mongoose = require('mongoose');

var message = mongoose.Schema({
  Wind: String,
  Subject: String,
   date: String })

var message = mongoose.model(
  'message', message);

module.exports=message;
