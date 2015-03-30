
var React       = require('react'),
    Application = require('./app/application')

window.onload = function() {
  var div = document.createElement('div')
  document.body.appendChild(div)
  React.render(<Application />, div)
}
