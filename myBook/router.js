/*
        路由文件
*/

const express = require('express');
const router = express.Router();
const service = require('./service.js');
/*******************************************路由处理*********************************/

//渲染页面
router.get('/', service.showIndex);
//跳转至添加图书的页面
router.get('/toAddBook', service.toAddBook);
//添加图书并提交表单
router.post('/addBook', service.addBook);
//跳转到修改图书的页面
router.get('/toEditBook', service.toEditBook);
//提交修改信息
router.post('/editBook', service.editBook);
//删除图书
router.get('/delBook', service.delBook);

module.exports = router;