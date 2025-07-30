const http =require("http");
const fs = require("fs/promises");
const dns = require("dns/promises")
const url = require("url");
// console.log(dns);
// console.log(url)

const port = 3000;
const hostname = 'localhost'



function requestListener (req,res){
   
const  Url = url.parse(req.url,true)
const pathname = Url.pathname;

    
// res.writeHead(200);
// res.end("welcome to our first http server")

// res.setHeader("Content-Type","application/json");
// res.writeHead(200);
// res.end(`{
//     "messane":"this is json type data"
//     }`)

// res.setHeader("content-Type","text/html");
// res.writeHead(200);
// res.end(`
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Document</title>
//     <style>
//         h1{
//             color: blue;
//         }
//     </style>
// </head>
// <body>
//     <h1>Hello from server</h1>
//     <h3>this is html file.</h3>
// </body>
// </html>
//     `)

// fs.readFile(__dirname + "/index.html")
//  .then((contents) => {
// res.setHeader("Content-Type","text/html");
// res.writeHead(200);
// res.end(contents);

// })

switch (pathname) {
    case "/":
         res.writeHead(200);
         res.end("welcome to our first http server")
        break;

     case "/about":
        res.setHeader("content-Type","text/html");
        res.writeHead(200);
        res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
        h1{
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Hello from server</h1>
    <h3>this is html file.</h3>
</body>
</html>
    `)
        break;   

     
     case "/content":
        fs.readFile(__dirname + "/index.html")
        .then((contents) => {
            res.setHeader("Content-Type","text/html");
            res.writeHead(200);
            res.end(contents);

        })
       
        break;    
        

     case "/api/users":
         res.setHeader("Content-Type","application/json");
         res.writeHead(200);
         res.end(`{
  "id": 1,
  "name": "Monika ",
  "email": "monika@example.com",
  "username": "monikasaini",
  "password": "123456",
  "phone": "+91-1112223334",
  "address": {
             "street": "123 Main Street",
             "city": "Jalandhar",
             "state": "Punjab",
             "country": "India"
             },
  "profile": {
             "bio": "Software developer and designer.",
             "gender": "female"
             },
}`)
        break;   

   
     case "/image":
        fs.readFile(__dirname + "/dog.jpg")
        .then((contents) => {
            res.setHeader("Content-Type","image/jpeg");
            res.writeHead(200);
            res.end(contents);

        })
       
        break;    
     
      
        case "/lookup":   
           const domain = Url.query.domain;
         dns.lookup(domain)
        .then((address) => {
          res.setHeader("Content-Type", "application/json");
          res.writeHead(200);
          res.end(JSON.stringify({ domain, ip: address }));
        })
        break;

     default:
        res.setHeader("Content-Type","text/plain");
         res.writeHead(404);
         res.end("Oops, URL you are requesting is not available !")
        break;
}
}

const server = http.createServer(requestListener);

server.listen(port,hostname,()=>{
console.log(`server is up and run at ${hostname}:${port}` )
})