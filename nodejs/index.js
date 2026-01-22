// let nodejs = require("./message")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plane');
    if (req.url==="/"){
         res.setHeader('Content-Type', 'text/html');
        res.write("<h1>this is my main home  page ");
    }else if (req.url==="about_us"){
          res.setHeader('Content-Type', 'text/html');
        res.write("this is my about us page");

    }else if(req.url==="contract"){
          res.setHeader('Content-Type', 'text/html');
        res.write("this is  contract my us page ");

    }
    else{

        res.write("404 page not found");
    }

    res.end();

    // json -- javascript object notation 
    // json store the value in key value 
    // eg: {
    // id:1;
    // name :"Gla University";
// }
    

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});





