var jade = require('jade');

var template = jade.compileFile('./views/observer_query.jade', {pretty: true});

var html = template({title:"test"});

console.log(html);
