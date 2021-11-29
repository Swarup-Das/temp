const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home");
  }
  if (req.url === "/about") {
    res.end("Welcome to about");
  }
  res.end(`
  <h1>Oops</h1>
  <a href='/'>HOME</a>
  `);
});

server.listen(5000);
