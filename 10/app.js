var fs = require('fs');
//
// var str = '';
//
// fs.readFile('./js/config.js','utf-8', (err, data) => {
//     if(err) throw err;
//     str += data.toString();
//     // console.log(data);
// });
//
// console.log(str);

// var concat = require('concat-files');
//
// concat([
//     './js/config.js',
//     './js/main.js'
// ], 'app.min.js', function () {
//     console.log("Done~!")
// });

var uglify = require('uglify-js');

var result = uglify.minify([]);

fs.wirteFile('app.min.js', result.code, function () {
    console.log("It is saved!");
})

    
