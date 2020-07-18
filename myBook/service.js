/*
        业务模块
*/

const data = require('./data.json');
const path = require('path');
const fs = require('fs');
/*******************************************其他方法处理*********************************/
//自动生成图书编号
let maxBookCode = () => {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id);
    });
    return Math.max.apply(null, arr);
}

/*******************************************响应方法处理*********************************/
//渲染主页面
exports.showIndex = (req, res) => {
        res.render('index.art', { list: data });
    }
    //跳转至添加图书页面
exports.toAddBook = (req, res) => {
    res.render('addBook.art', {});
};
//添加图书数据
exports.addBook = (req, res) => {
    let info = req.body;
    let book = {};
    for (let key in info) {
        book[key] = info[key];
    }
    book.id = maxBookCode() + 1;
    data.push(book);
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.end('Service error！Please try again');
        }
        res.redirect('/');
    })
};
//跳转到修改图书页面
exports.toEditBook = (req, res) => {
    let id = req.query.id;
    let book = null;
    data.forEach((item) => {
        if (item.id == id) {
            book = item;
            return;
        }
    });
    res.render('editBook.art', book);
};
//修改信息并保存更逊
exports.editBook = (req, res) => {
    let info = req.body;
    data.forEach((item) => {
        if (info.id == item.id) {
            for (let key in info) {
                item[key] = info[key];
            }
            return;
        }
    });
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.end('Service error！Please try again');
        }
        res.redirect('/');
    });
};
//删除图书信息
exports.delBook = (req, res) => {
    let id = req.query.id;
    data.forEach((item) => {
        if (id == item.id) {
            data.splice(item.id - 1, 1);
            return;
        }
    });
    let i = 1;
    data.forEach((item) => {
        item.id = i;
        i = i + 1;
    });
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.end('Service error！Please try again');
        }
        res.redirect('/');
    });
};