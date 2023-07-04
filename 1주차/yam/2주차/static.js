const http = require('http');
const port = process.env.PORT || 3000;
const fs = require('fs');

const serveStaticFile = function (res) {
    fs.readFile(__dirname + '/index.html', (err,data) => {
        if(err){
            res.writeHead(500, { 'Content-Type': 'text/plain'})
            return res.end('500 = Internal Error')
        };
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(data);
    })
}
const server = http.createServer((req, res) => {
    serveStaticFile(res);
})

server.listen(port, () => console.log(`server stareted on port ${port};` + 'press Ctrl=C to terminate...'))