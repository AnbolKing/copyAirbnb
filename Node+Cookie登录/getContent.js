const http = require('http');
const path = require("path");
const fs = require("fs");
const url = require('url');
const querystring = require('querystring');

exports.getContent = (req, res, root) => {
    fs.readFile(path.join(root, req.url), (err, content) => {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8'
            });
            console.log(path.join(root, req.url));
            res.end('服务器错误，请与管理员联系...');
        }
        res.end(content);
    });
}