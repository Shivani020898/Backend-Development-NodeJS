const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write(`<html>
    <head>

    <title>My Server</title>
    </head>
    <body>
    <h1>This is Html Page</h1>
    </body>
    </html>`);
  res.end();
});

server.listen(3003, () => {
  console.log(`server is running on port http://localhost:3003`);
});
