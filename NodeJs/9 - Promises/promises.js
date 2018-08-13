const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            console.log(post.title);
        });
    },1000);
}

//Basic Promise
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Something Went Wrong');
            }
        }, 2000);
    })
}


//Promises flowing
createPost({
    title: 'Post three',
    body: 'This is post three'
}).then(getPosts);

///////////////////////// Or /////////////////////////

function http(url, method) {
    var promise = new Promise(function(resolve, reject) {
        // throw new Error('Error in promise');
            
        setTimeout(() => {
            const data = 'data test';
            // const data;

            if(data) {
                resolve(data);
            } else {
                reject('No Data!');
            }

        }, 2000);
    })
    return promise;
}

/* Simple way
http('https://www.google.com/', 'GET')
    .then(function(data) {
        // throw new Error('Error in promise.then');
        console.log(data);
    }).catch(function(err) {
        console.log('Catch: ' + err);
    });
*/
http('https://www.google.com/', 'GET')
    .then(function(data) {
        return data.toUpperCase();
    })
    .then(function(modifiedData) {
        console.log(modifiedData);
        //Make sure you are returning to others then methods can retrieve
        return modifiedData + " XXXXXXXXXXX";
    })
    .then(function(retriviedData) {
        console.log(retriviedData);
    }).catch(function(err) {
        console.log(err);
    })