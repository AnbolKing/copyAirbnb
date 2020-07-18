const http = require('http');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
const grades = require('./score.json')
http.createServer((req, res) => {
    if(req.url.startsWith('/query')) 
	{
        fs.readFile(path.join(__dirname, 'index.html'), 'UTF-8', (err, content) => {
            if (err) 
			{
                res.writeHead(500, {
                    'Content-Type': 'text/plain; charset=utf-8'
                });
                res.end('服务器错误，请与管理员联系...');
				console.log(path.join(__dirname,'index.html'));
            }
            res.end(content);
        });
    }
    if (req.url.startsWith('/score')) 
	{
        let pdata = "";
        req.on('data', (chunk) => {
            pdata += chunk;
        });
        req.on('end', () => {
            let obj = querystring.parse(pdata);
            let result = grades[obj.code];
            fs.readFile(path.join(__dirname, 'result.html'), 'UTF-8', (err, content) => {
                if (err) {
                    res.write(500, {
                        'Content-Type': 'text/plain;charset=utf-8'
                    });
                    res.end('服务器错误，请与管理员联系...');
                }
                content = content.replace("$$chinese$$", result.chinese);
                content = content.replace("$$math$$", result.math);
                content = content.replace("$$English$$", result.English);
                content = content.replace("$$summary$$", result.summary);
                res.end(content);
            });
        });
    }
}).listen(3000, () => {
    console.log("running");
})