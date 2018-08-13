let fs = require('fs');

//Using Syncronous operations

//Force the code to run after it reads
let readMe = fs.readFileSync('readMe.txt', 'utf8');

//Writing what s int the readMe to de destination writeMe
fs.writeFileSync('writeMe.txt', readMe);