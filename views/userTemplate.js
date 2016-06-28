var jade = require('jade');

var userTemplate = jade.compile('li #{name}');

console.log( userTemplate({name => 'wang'}) );
console.log( userTemplate({name => 'jason'}) );
