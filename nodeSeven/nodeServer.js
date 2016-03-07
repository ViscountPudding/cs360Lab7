var fs = require('fs')
var http = require('http')
var url = require('url')
var app = require('./app')
var ROOT_DIR = "nodeSeven/public"

app.set('port', 3000);

var server = http.createServer(app);

server.listen(3000);

/*
http.createServer(function (req, res) {

	var urlObj = url.parse(req.url, true, false)

	console.log(urlObj);

	fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
		if(err)
		{
			res.writeHead(404)
			res.end(JSON.stringify(err))
			return
		}
		res.writeHead(200)
		res.end(data)
		})
	}).listen(3000);
*/