"use strict";

var _express = _interopRequireDefault(require("express"));

var _helloWorld = _interopRequireDefault(require("./utils/helloWorld"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.get('/', function (req, res) {
  var helloWorld = (0, _helloWorld.default)();
  res.json(helloWorld);
});
app.listen(3000, function () {
  return console.log('App running on PORT 3000');
});