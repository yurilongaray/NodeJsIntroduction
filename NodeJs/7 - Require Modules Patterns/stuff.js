let counter = function(arr) {
    return 'There are ' + arr.length + ' elements in the array';
}

//One way of exporting is: module.exports.adder = fun...
let adder = function(a, b) { 
    return `The sum of the 2 numbers are: ${a + b}`;
}

let pi = 3.142;

//Another way of exporting
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};