"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var Pass = new index_1["default"]({ salt: 20, rounds: 15 });
var hashedPass = Pass.hashPass('password');
console.log(hashedPass);
var isEqualPass = Pass.compare('password', hashedPass);
console.log(isEqualPass);
