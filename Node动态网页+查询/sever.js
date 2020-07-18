/*
笔记:
1.创建服务器:
		const http = require('http');  导入
		let sever = http.createServer();  实例化
		sever.listen(端口号,IP地址,回调函数)
		路径分发:使用red.url进行url的判断/path传入就是res.url
		
		end方法用来结束响应只执行一次,write可执行多次.
		
		设置响应头:res.writeHeader(http状态码,头内容)

		get请求参数:const url = require('url');通过url.parse进行解析获得对象取得相关键的值;
		post请求参数:const querystring = require('querystring');parse解析为对象;
		
*/


const http = require('http');
const path = require("path");
const fs = require("fs");
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {
    if (req.url.startsWith('/login')) {
        let pdata = '';
        req.on('data', (chunk) => {
            pdata += chunk;
        });
        res.end('end', () => {
            console.log(pdata);
            let obj = querystring.parse(pdata);
            console.log(obj.username + "=====" + obj.password);
        });
    }
}).listen(3000, () => {
    console.log("running...");
})