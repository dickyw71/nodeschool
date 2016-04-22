var mymodule = require('./my_first_module.js');

var dir = process.argv[2];
var ext = process.argv[3];


mymodule(dir, ext, function(err, files) {
    if(err) {
        return console.error("There was an error:", err);
    }
    files.forEach(function(file){
        console.log(file);
    });
});