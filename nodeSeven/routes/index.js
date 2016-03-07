var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('cityfinder.html', { root: 'public' });
});

router.get('/test1', function(req, res, next) {
  res.sendFile('test1.html', { root: 'public' });
});

router.get('/test2', function(req, res, next) {
  res.sendFile('test2.txt', { root: 'public' });
});

router.get('/test3', function(req, res, next) {
  res.sendFile('test3.gif', { root: 'public' });
});

router.get('/test4', function(req, res, next) {
  res.sendFile('test4.jpg', { root: 'public' });
});

router.get('/getcity',function(req,res,next) {
  fs.readFile(__dirname + '/cities.dat.txt', function(err,data) {
	if(err) throw err;
	var cities = data.toString().split('\n');

	var regex = new RegExp("^" + req.query.q);

	var jsonresult = [];

	for(var i = 0; i < cities.length; i++) {
	  var result = cities[i].search(regex);
	  if(result != -1) {  
		
		jsonresult.push({city:cities[i]});
	  }
	}

	res.status(200).json(jsonresult);
  })
});



module.exports = router;
