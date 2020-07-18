/*
        登陆验证功能
*/

const http = require('http');
const fs = require('fs');
const path = require('path');
const querstring = require('querystring');
const url = require('url');

http.createServer((req, res) => {
    if (req.url.startsWith('/login')) {
        fs.readFile(path.join(__dirname, req.url), (err, content) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain; charset=utf-8'
                });
                res.end('服务器错误，请与管理员联系...');
            }
            res.end(content);
        })
    }
    if (req.url.startsWith('/result')) {
        res.end("OK...");
    }
}).listen(3000, () => {
    console.log('running');
})