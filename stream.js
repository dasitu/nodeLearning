var fs = require('fs');
var fileContent = "";
var zlib = require('zlib');

// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));

// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input_unziped.txt'));

var readStream = fs.createReadStream('input.txt');

readStream.on('data', function(chunk){
    fileContent += chunk;
})

readStream.on('end', function(){
    console.log(fileContent);
})

readStream.on('error', function(err){
    console.log(err.stack);
})

var writeSteam = fs.createWriteStream('output.txt');
writeSteam.setDefaultEncoding('utf8');

writeSteam.on('error', function(err){
    console.log(err.stack)
});

var line = 'write the first line with writeStram\n';
writeSteam.write(line);

readStream.pipe(writeSteam);

console.log('all done')