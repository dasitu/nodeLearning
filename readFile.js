var fs = require('fs')

fs.readFile('input1.txt', function(err, data){
    console.log('file read completed');
    if(err){
        console.log(err.message);
    }
    else{
        console.log(data.toString());
    }
});

console.log('all done');