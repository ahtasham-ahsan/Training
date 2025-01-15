// Async Await
// Added on ES 08
// Built on top of Promises

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// this can be done using async await
async function fetch_Users(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

fetch_Users()


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// fetching all using promises
Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('Users', array[0])
    console.log('Posts', array[1])
    console.log('Albums', array[2])
}).catch('oops');

// using async function
const get_Data = async function () {
    const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));

    console.log('Users', users)
    console.log('Posts', posts)
    console.log('Albums', albums)
}