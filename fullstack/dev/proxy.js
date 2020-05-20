const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
    if (req.url.startsWith("/api")) {
        proxy.web(req, res, { target: 'http://localhost:3002/' });
    }
    else {
        proxy.web(req, res, { target: 'http://localhost:3001/' });
    }
}).listen(3000);