const http = require("http");
const url = require("url");
const fs = require("fs");
const { Console } = require("console");

const server = http.createServer((req,res)=> {
    if(req.url == "/"){
    res.end("Hello from the Home page")
    }else if(req.url == "/about"){
        res.end("Hello from the About page.")
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userJson.json`, "utf-8",(error,data) => {
            // console.log(data)
            // res.end(data);
            const objdata = JSON.parse(data);
            // console.log(objdata);
            // console.log(objdata[0].name);
            res.end(objdata[0].name)
        });
    }else{
        res.writeHead(404,{ "Content-type": "text/html" })
        res.end("<h1>Error 404. page not found</h1>");
    }
})
//listen(port,servername, callback)
server.listen(9000,"127.0.0.1",()=>{
    console.log("listening port 9000");
})

