const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//todo Serialized Url
console.log(myUrl.href);
console.log(myUrl.toString());

//todo Host(root domain)
console.log(myUrl.host);

//todo HostName (does not give the port)
console.log(myUrl.hostname);

//todo Pathname
console.log(myUrl.pathname)

//todo Serialized Query
console.log(myUrl.search)

//todo Params Object..(useful) It gives an object of search Params
// and also you can add an entry to that object and loop over that object
console.log(myUrl.searchParams)
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach(((value, key) => {
    console.log(`${key} :${value} `)
}))
