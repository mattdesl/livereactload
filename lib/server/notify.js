'use strict';

var http     = require('http'),
    color    = require('cli-color'),
    defaults = require('../defaults.json');

module.exports = function(hostname, port, done) {
  var data = 'reload'
  var options = {
    hostname: hostname || '127.0.0.1',
    port: port || defaults.notifyPort,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      'Content-Length': data.length,
      'Cache-Control': 'no-cache'
    }
  };


  var req = http.request(options, function(res) {
    res.setEncoding('utf8')
    res.on('data', function(buf) {
      console.log(buf)
    })
    if (typeof done === 'function') {
      process.nextTick(done);
    }
  });

  req.on('error', function() {
    console.error(color.red('LiveReactload: could not send reload notification. Are you sure that reload server is listening?'));
  })
  req.write(data);
  req.end();
}
