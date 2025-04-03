const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`<html>
      <head>
        <title>My Server</title>
      </head>
      <body>
        <h1>This is Home Page</h1>
      </body>
    </html>`);
    res.end();
  } else if (req.url === "/Product") {
    res.write(`<html>
      <head>
        <title>My Server</title>
      </head>
      <body>
        <h1>This is Product Page</h1>
      </body>
    </html>`);
    res.end();
  } else {
    // Handle cases where the URL doesn't match
    res.writeHead(404); // Not Found
    res.end(`<h1>404: Page Not Found</h1>`);
  }
});

server.listen(3004, () => {
  console.log(`server is running on port http://localhost:3004`);
});
