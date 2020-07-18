/*
    ***********************************Express教程*****************************
    ***********************************Express教程*****************************

    
    1   托管静态文件：可以指定虚拟目录且可以指定多个目录作为静态资源目录
    如：const express = require('express');
        const app = express();
        app.use('虚拟目录',express.static("指定目录")).listen(...);   即可访问“指定目录”下面的所有文件;
        *********1.如果加了虚拟路径 访问文件时必须要加虚拟路径
        *********2.指定目录应该是js文件所在的包的子目录
    2   路由:根据路径和请求方式进行请求的分发
        http常用请求方式：post(增)  get（查）  put（更新）   delete（删除）    
        restful api(一种url的格式)
        基本路由操作:1.app.get/post/put/delete('/',(req,res) =< {
                        //something been doing...
                    })
                    2.app.use((req,res) = {
                        //something been doing...        第二种方法可处理所有请求方式
                    })
    3   中间件:next():把请求传递给下一个中间件（中间件本质上就是一个函数）;
              next('route'):跳转到下一个路由;
              使用[]将中间件连接成链路,在请求方式中加入各中间件形成的数组，当然各中间件需要声明好,各中间件也是一个函数
    4   中间件的挂载方式：(1)use方法   (2)路由方式
    5   应用层面的中间件：npm i 包名 --save
                1).get参数处理：使用query()方法，即req.query;
                2).post参数处理：npm i body-parser --save   ===>> app.use(body.urlencoded({ extended: false }));
                3).json数据参数处理：JavaScript中需要设置是提交json数据，后端中加上  ===>>const body = require('body-parser');

*/
const express = require('express');
const app = express();
const body = require('body-parser');
//挂载内置中间件
app.use(express.static('public'));

//挂载中间件：参数处理(post提交)
app.use(body.urlencoded({ extended: false }));
//处理json数据
app.use(body.json());
//get提交参数
app.get('/login', (req, res) => {
    let data = req.query;
    if (data.username == "admin" && data.userpd == "wza990928") {
        console.log(data);
        res.end('success');
    } else {
        console.log(data);
        res.end('failure');
    }
});
//post提交参数
app.post('/login', (req, res) => {
    let data = req.body;
    if (data.username == "admin" && data.userpd == "wza990928") {
        console.log(data);
        res.end('success');
    } else {
        console.log(data);
        res.end('failure');
    }
});
//put提交参数
app.put('/login', (req, res) => {
    res.end("put data");
});
//delete提交参数
app.delete('/login', (req, res) => {
    res.end("delete data");
});

app.listen(3000, () => {
    console.log('running...');
})