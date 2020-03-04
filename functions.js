var http = require("http")
var port = 8080

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end('hello, world!');
}).listen(port);

var msg = "this is message";
console.log(msg);
console.log("Server is running at http://localhost:" + port);

function say(word){
    console.log(word);
}

function executeFunction(someFunction, parameter){
    someFunction(parameter);
}

executeFunction(say, 'hello');
executeFunction(say, 'this is my word');
