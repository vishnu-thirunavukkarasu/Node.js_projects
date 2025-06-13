const fs= require('fs');

//sync method
const files=fs.readdirSync('./');
console.log(files);

//async method
fs.readdir('./', function(err,files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});