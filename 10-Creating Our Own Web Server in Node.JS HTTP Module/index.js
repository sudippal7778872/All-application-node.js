// create server
// step1: need to import http module
// step2: use createServer() method. this method take two property. request and response.
// step3: send response
// step4: listen request.

const http = require("http");
const server = http.createServer((req,res)=> {
    res.end("Hello from the other sides")
})
//listen(port,servername, callback)
server.listen(9000,"127.0.0.1",()=>{
    console.log("listening port 9000");
})

