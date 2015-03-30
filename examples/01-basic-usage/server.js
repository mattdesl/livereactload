var express = require('express'),
    fs      = require('fs'),
    http = require('http'),
    ecstatic = require('ecstatic')


var app = express()

// app.use(ecstatic(process.cwd()))
var handler = ecstatic({ root: process.cwd() })

app.get('/', function(req, res) {
  handler(req, res)
  // var body = '<!DOCTYPE html>'
  // + '<html>'
  // + '<head><title>LiveReactload basic example</title></head>'
  // + '<body><div id="app"></div><script type="text/javascript" src="/static/bundle.js"></script></body>'
  // + '</html>'
  // res.send(body)
})

app.get('/static/bundle.js', function(req, res) {
  console.log("REQUEST")
  handler(req, res)
})
// app.get('/static/bundle.js', function(req, res) {
//   console.log("REQUEST", req)
//   res.send(fs.readFileSync('static/bundle.js'))
// })

// app.listen(3000)
http.createServer(app).listen(3000)
