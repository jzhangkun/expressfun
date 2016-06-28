var jade = require('jade');

var userJade = jade.compileFile('./views/user.jade', {pretty: true});

var html = userJade({title:"test"});

console.log(html);
