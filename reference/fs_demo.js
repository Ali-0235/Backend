const fs = require("fs");
const path = require("path");

//Create a folder

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created");
// });


//Create and write a file
// fs.writeFile(path.join(__dirname, '/test','hello.txt'), 'Hello Nodejs', (err) => {
//   if (err) throw err;
//   console.log("File Written to");
  
//file append in callback

//   fs.appendFile(path.join(__dirname, '/test','hello.txt'), ' Holla Nodejs', (err) => {
//     if (err) throw err;
//     console.log("File Written to");
//   });

// });


//read file 
// fs.readFile(path.join(__dirname, "/test",'hello.txt'), 'utf8', (err,data) => {
//   if (err) throw err;
//   console.log(data);
// });


// rename a file
fs.rename(path.join(__dirname, "/test",'hello.txt'), path.join(__dirname, "/test",'node.txt'), (err) => {
    if (err) throw err;
    console.log('file renamed');
  });
  
