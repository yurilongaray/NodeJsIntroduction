//Link: https://www.youtube.com/watch?v=Nau-iEEgEoM


//After 3s the callback function will be called
setTimeout(function() {
    console.log('This function is called back');
}, 3000);

let students = [
    {name: "Mary",     score: 90,  school: "East"},
    {name: "James",    score: 100, school: "East"},
    {name: "Steve",    score: 40,  school: "East"},
    {name: "Gabe",     score: 90,  school: "West"},
    {name: "Rachel",   score: 85,  school: "East"},
    {name: "Rochelle", score: 95,  school: "West"},
    {name: "Lynete",   score: 75,  school: "East"}
];



let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].school.toLowerCase() === "east") {
            if(typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

processStudents(students, function(obj) {
    if(obj.score > 60) {
        console.log(obj.name + " passed!");
    }
});

let determineTotal = function() {
    let total = 0;
    let count = 0;

    processStudents(students, function(obj) {
        total += obj.score;
        count++;
        console.log(obj.name + " " + obj.score);
    });
    console.log("The score total is: " + total + " - Total Count: " + count);
}

determineTotal();

////////////////////////// Or //////////////////////////

function http(url, method, successCallback, errorHandler) {
    setTimeout(function() {
        var data;
        // var data = 'Teste';
        if(data) {
            successCallback(data);
        } else {
            errorHandler('No Data!');
        }
    }, 1000);
}

http('https://www.google.com/', 'GET', function(data) {
    console.log(data);
}, function(err) {
    console.log(err);
});
