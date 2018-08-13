let fs = require('fs');

//Using Assynchronous request (better cus is non-blocking code)
fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('writeMe.txt', data);
});
