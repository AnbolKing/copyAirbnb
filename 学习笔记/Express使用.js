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
    


    ***********************************Express常用 API*****************************
    ***********************************Express常用 API*****************************
    ======================================路   由==================================
    var router = express.Router([选项])
    创建一个新的路由器，开启路由
    
    1.router.all(路径，回调函数)  可以用于各类HTTP方法路由以及各种路由，及适用于所有情况
    2.router.METHDO(路径，回调函数)    可以用于各类HTTP方法的回调
    3.router.get()  router.post()  router.put()  router.delete()
    4.router.param(名称，回调)    可以将回调触发器添加到参数“名称”上，即后面语句中若路径存在这个“名称”，则会触发这个路由
    5.router.route(路径)    可以确定路径后，在具体对各种情况进行路由细化
    ======================================响   应==================================
    1.res.append(字段,[值])   将指定的内容附加到字段到HTTP响应头中。
    2.res.cookie(名称,值,[选项])  将cookie设置name为value。该value参数可以是字符串或转换为JSON的对象。
    3.res.clearCookie(名称,[,选项])   清楚指定“名称”的cookie
    4.res.download（路径[，文件名] [，选项] [，fn]）    用于浏览器提示用户下载
    5.res.end（[数据] [，编码]）    用于结束响应过程（也即路由过程）
    6.res.get（字段）  返回由指定的HTTP响应头“字段”的内容
    7.res.redirect（[状态，]路径）    重定向到符合“状态”的path
    8.res.render（view [，locals] [，callback]）  把内容渲染到指定路径的页面
    9.res.send([body])    把body发送过去
    10.res.sendStatus（statusCode）   将响应HTTP状态代码设置为statusCode，并将其字符串表示形式发送为响应主体。
    11.res.set（字段[，值]）    将响应的HTTP标头设置field为value。要一次设置多个字段，请传递一个对象作为参数。
    12.res.status（代码）     设置响应的HTTP状态。它是Node的response.statusCode的可链接别名。
    13.res.type（类型）   将Content-TypeHTTP标头设置为mime.lookup（）为指定的MIME类型 type。如果type包含“ /”字符，则将其设置Content-Type为type。
    
*/