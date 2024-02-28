// jQuery.js || $
// $(document).ready(function() {
// $('#button').html('New BUTTON').css('color','green');
// $('.my-unslider').unslider();
// $('li').css('color','green');
// });

// underscore.js || _
var myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(myArray);
var x = _.shuffle(myArray); // mix value between indexes
console.log(x);
var y = _.map(myArray, function(v){ return v * 7 }); // go thru Array
alert(y);
var z = _.reduce(myArray, function(a, b) { return a + b }) //reduce Array to one value
alert(z);
var u = _.random(0, 100) // one value random defined from range inclusive