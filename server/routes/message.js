var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var message = require('../model/message');

/* GET users listing. */
router.get('/', function(req, res, next)
{
  message.find(function(err,data)
  {
    if(err){
      console.log(err);
    }else{
      res.send(data)
    }
  })
//  res.send('respond with a resource');
})


.put('/', function(req, res, next){
// message.fin({_id:req.body.id},function(err,data)){
//   if(err)
//   {
//     res.send({response:err});
//   }
//   else {
//     var emailFrom=req.body.From;
//     var emailSubject=req.body.Subject;
//
//   }
// }
  res.send('Update the record');
})

.post('/', function(req, res, next)
{
  console.log(req);
  var messages = new message({ From: req.body.From,
   Subject: req.body.Subject,date:req.body.date});
  messages.save(function (err)
  {
    if (err) {
      console.log(err);
    } else {
      console.log('Hello Saved');
    }
  });

  res.send('Update the record');
})
.delete('/', function(req, res, next){
  console.log(req.body._id);
message.remove({_id:req.body._id}, function (err) {
   if (err)
       {
        console.log(err);
      } else
      {

        console.log('deleted');
       
      }
 });


 });
module.exports = router;
