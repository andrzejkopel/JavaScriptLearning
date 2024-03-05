var u = require('underscore');
var firstArray = [1, 2, 3, 4, 5];
var result = u._.map(firstArray, function(v) {return v + 10});
console.log(result);