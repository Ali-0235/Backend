const http = require('http');

// create server object
http.createServer((req,res)=>{
    //write a res
    res.write('node js');
    res.end;
}).listen(1000,()=>console.log('start'));