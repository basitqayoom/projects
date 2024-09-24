const http = require("http");
const httpProxy = require("http-proxy");
// Create a proxy server that forwards requests
const proxy = httpProxy.createProxyServer({});

// Set up the server to listen on port 9999 and redirect traffic
const server = http.createServer((req, res) => {

  // Proxy requests to http://192.168.29.10/
  proxy.web(req, res, { target: "http://192.168.29.10" }, (error) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Something went wrong.");
    }
  });
});

// Listen on port 9999
server.listen(1000, () => {
  console.log("Proxy server is running on mac:1000");
});
