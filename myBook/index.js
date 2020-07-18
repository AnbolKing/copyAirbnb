/*
        **********************---------------------------------------------------------------*************************
        **********************||基于Express和各类npm安装包：body-parse||art-template||express||*************************
        **********************||基于Express和各类npm安装包：body-parse||art-template||express||*************************
        **********************||基于Express和各类npm安装包：body-parse||art-template||express||*************************
        **********************||基于Express和各类npm安装包：body-parse||art-template||express||*************************
        **********************---------------------------------------------------------------*************************
                    图书管理系统-入口文件

*/

const express = require('express');
const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = require('./router.js');

//启动静态资源服务
app.use('/www', express.static('public'));

//设置模板引擎
app.set('views', path.join(__dirname, 'views')); //设置模板引擎路径
app.set('view engine', 'art'); //设置模板引擎
app.engine('art', require('express-art-template')); //使express适应art-template

//处理参数
app.use(bodyParser.urlencoded({ extended: false })); //POST
app.use(bodyParser.json()); //JSON

//启动服务器功能
app.use(router); //设置路由
app.listen(3000, () => {
    console.log('running...') //监听端口
})