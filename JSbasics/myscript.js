// jQuery.js || $
// $(document).ready(function() {
// $('#button').html('New BUTTON').css('color','green');
// $('.my-unslider').unslider();
// $('li').css('color','green');
// });

// underscore.js || _
// var myArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(myArray);
// var x = _.shuffle(myArray); // mix value between indexes
// console.log(x);
// var y = _.map(myArray, function(v){ return v * 7 }); // go thru Array
// alert(y);
// var z = _.reduce(myArray, function(a, b) { return a + b }) //reduce Array to one value
// alert(z);
// var u = _.random(0, 100) // one value random defined from range inclusive

// lodash.js || _
var myArray = [1, 2, 3, 4, 5, 6, 7];
var string = 'Simple text to check';
var a = 4.562;

var x = _.drop(myArray, 3) // drop three values from index 0
console.log(x);

var stringArray = _.split(string, ' ');
console.log(stringArray);

var k = _.sum(myArray);
console.log(k);

var m = _.ceil(a, 2); // Computes number rounded up to precision, 
console.log(m);