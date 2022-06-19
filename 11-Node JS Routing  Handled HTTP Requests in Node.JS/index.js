// now if user type any url then how we will handle it.
// we have url module.
// we will do the routing.

const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=> {
    // console.log(req.url); // user request for about page
    if(req.url == "/"){
    res.end("Hello from the Home page")
    }else if(req.url == "/about"){
        res.end("Hello from the About page.")
    }else{
        res.writeHead(404,{ "Content-type": "text/html" })
        res.end("<h1>Error 404. page not found</h1>");
    }
})
//listen(port,servername, callback)
server.listen(9000,"127.0.0.1",()=>{
    console.log("listening port 9000");
})

