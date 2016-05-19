var fs = require('fs');

fs.writeFile('message.txt', 'hello Node', function (err) {
    if(err) throw err;
    console.log('It\'s saved');
});
