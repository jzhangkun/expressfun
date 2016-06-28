var jade = require('jade');

var userTemplate = jade.compile('li name = #{name}');
var ratingsTemplate = jade.compile('li #{name} was reated #{rating}');

var user = userTemplate({name:'jack'});
var rating = ratingsTemplate({name:'jack',rating:5});

console.log(user);
console.log(rating);
