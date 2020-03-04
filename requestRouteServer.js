var http = require('http');
var url = require('url');
var queryString = require('querystring');
var port = 8888;

function start(route) {
    function onRequest(requrst, response){
        var parseUrl = url.parse(requrst.url);
        var path = parseUrl.path;
        var query = parseUrl.query;
        console.log(JSON.stringify(parseUrl));

        route(path);

        response.writeHead(200, {'Content-Type': 'text/plain'});

        response.write('' + __filename + '\n');
        response.write('path: ' + path + '\n');
        response.write('query: ' + query + '\n');

        response.write('a:' + queryString.parse(query)["a"] + '\n');
        response.write('c:' + queryString.parse(query)["c"] + '\n');
        response.write('z:' + queryString.parse(query)["z"] + '\n');
        response.end();
    }

    http.createServer(onRequest).listen(port);
    console.log('server started at port:' + port);
}

exports.start = start;