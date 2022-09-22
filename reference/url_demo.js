const url=require('url');



const myUrl = new URL('http://mywebsite.com/hello.html?id=10&status=active');

//serializes URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host)

//HostName (does not contain port)
console.log(myUrl.hostname)

//Path name (file name)
console.log(myUrl.pathname)

//Serialized query
console.log(myUrl.search)

//params object
console.log(myUrl.searchParams)

// Add param
// myUrl.searchParams.append('abc', '123')
// console.log(myUrl.searchParams)

//loop through the params
myUrl.searchParams.forEach((v,n)=>{console.log(v)})
console.log(myUrl.searchParams)



