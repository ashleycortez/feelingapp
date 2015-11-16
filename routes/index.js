var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// our db models
var Person = require("../models/person.js");
//var Course = require("../models/course.js");

/**
 * GET '/'
 * Default home route. Just relays a success message back.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/', function(req, res) {

  var jsonData = {
  	'name': 'feelingapp',
  	'api-status':'OK'
  }

  // respond with json data
  res.render('add.html')
  //res.json(jsonData)
});

router.get('/add-person', function(req,res){

  res.render('add.html')

})

router.get('/directory', function(req,res){

  res.render('directory.html')

})


router.post('/api/create', function(req,res){

  console.log('!!!!!GOT HERE!!!!!!')
  console.log(req.body);

  var personObj = {
    date: req.body.date,
    location: req.body.location,
    want: req.body.want,
    strengthofwant: req.body.strengthofwant,
    wantcolor: req.body.wantcolor,
    need: req.body.need,
    strengthofneed: req.body.strengthofneed,
    needcolor: req.body.needcolor,
    have: req.body.have,
    strengthofhave: req.body.strengthofhave,
    havecolor: req.body.havecolor 
  }

  var person = new Person(personObj);

  person.save(function(err,data){
    if(err){
      var error = {
        status: "ERROR",
        message: err
      }
      return res.json(err)
    }

    var jsonData = {
      status: "OK",
      person: data
    }

    return res.json(jsonData);

  })

})


router.get('/api/get', function(req,res){

  Person.find(function(err,data){

      if(err){
        var error = {
          status: "ERROR",
          message: err
        }
        return res.json(err)
      }

      var jsonData = {
        status: "OK",
        people: data
      }

      return res.json(jsonData);

  })

})





module.exports = router;







