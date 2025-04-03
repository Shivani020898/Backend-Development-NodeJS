const http = require("http");
function reqresHandler(req, res) {

  res.write("Welcome to Node Js Server");
  res.end();
}
const server = http.createServer(reqresHandler);

server.listen(3001, () => {
  console.log(`server is running on port http://localhost:3001`);
});
