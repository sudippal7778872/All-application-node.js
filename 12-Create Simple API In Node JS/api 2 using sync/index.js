const http = require("http");
const url = require("url");
const fs = require("fs");
const { Console } = require("console");

const server = http.createServer((req,res)=> {
    // calling api
    const data = fs.readFileSync(`${__dirname}/userJson.json`, "utf-8")
    const objdata = JSON.parse(data);
        

    if(req.url == "/"){
    res.end("Hello from the Home page")
    }else if(req.url == "/about"){
        res.end("Hello from the About page.")
    }else if(req.url == "/userapi"){
        res.end(objdata[0].name)
    }else{
        res.writeHead(404,{ "Content-type": "text/html" })
        res.end("<h1>Error 404. page not found</h1>");
    }
})
//listen(port,servername, callback)
server.listen(9000,"127.0.0.1",()=>{
    console.log("listening port 9000");
})

