const http = require('http')

function reqresHandler(req,res){
    console.log(req.url,req.method,req.headers)
}
const server = http.createServer(reqresHandler);

server.listen(3002,()=>{
    console.log(`server is running on port http://localhost:3002`)
})