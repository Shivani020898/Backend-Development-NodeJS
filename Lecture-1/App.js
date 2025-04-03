const http = require('http')

function reqresHandler(req,res){
    console.log(req.url,req.method,req.headers)
}
const server = http.createServer(reqresHandler);

server.listen(3002,()=>{
    console.log(`server is running on port http://localhost:3002`)
})

// In Node.js, the req object is an instance of http.IncomingMessage. It represents the HTTP request and contains information about the client's request, such as:

// Headers: Information like user-agent, content-type, etc. (req.headers)
// URL: The requested URL. (req.url)
// Method: The HTTP method (GET, POST, etc.). (req.method)
// Body: The data sent in the request's body (requires parsing).
// Query parameters: values after the '?' in the url.