/* 获取元素信息 */
var scoll = document.getElementById("scoll");
var ul = document.getElementById("ul");
var lis = ul.children;
var liWidth = ul.children[0].offsetWidth;

var timer;

function play() {
    timer = setInterval(nextClick, 3000);
}
scoll.addEventListener("load", play(), false);

var num = lis.length - 1; //最后一张图的索引号
/* 克隆第一张和最后一张图片图片实现无缝循环 */
ul.appendChild(ul.children[0].cloneNode(true));
ul.insertBefore(ul.children[num].cloneNode(true), ul.firstChild);
/* 确定轮播图小点 */
var ol = document.getElementById("olnavi");
for (let i = 0; i < lis.length - 2; i++) {
    var li = document.createElement('li');
    li.id = i + 1;
    ol.appendChild(li);
}
ol.children[0].className = "current"; // 设置第一张图，小点为触发状态
/* 为箭头添加事件，放上去会变色 */
/* 分别需要监听鼠标放上去和鼠标移开两种状态 */
var next = document.getElementById("next");
var last = document.getElementById("last");

last.addEventListener("mouseenter", function() {
    last.style.backgroundColor = "red";
});
next.addEventListener("mouseenter", function() {
    next.style.backgroundColor = "red";
});
last.addEventListener("mouseleave", function() {
    last.style.backgroundColor = "white";
});
next.addEventListener("mouseleave", function() {
    next.style.backgroundColor = "white";
});
/* JavaScript动画：
    1.鼠标点到第几个小圆圈就显示第几张图，而且圆圈会变色，形成交互
    2.点击左右箭头轮播图片
    3.图片暗示自动轮播
    4.鼠标放在图片上，停止轮播；
      鼠标离开图片，自动继续轮播
*/
var flag = true; //为true可执行，否则禁止触发事件
/***************************************************/
function animate(obj, target) {
    //obj是需要移动的元素，target是需要移动到的位置
    var speed = obj.offsetLeft < target ? 10 : -10; //判断移动方向左or右
    obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft; //剩余需要移动的距离
        obj.style.left = obj.offsetLeft + speed + "px"; //通过left实现移动
        if (Math.abs(result) <= Math.abs(speed)) {
            clearInterval(obj.timer);
            obj.style.left = target + "px";
            flag = true;
        }
    }, 1);
}
//小圆点
function btnShow(cur_index) {
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = ' ';
    }
    ol.children[cur_index - 1].className = "current";
};
/* 将动画作用于左右箭头 */
var index = 1; //判断第几个小圆点
var lastClick = function() {
    if (flag) {
        flag = false;
        console.log(flag);
        if (index === 1) {
            index = 6;
            ul.style.left = '-5594px';
            animate(ul, ul.offsetLeft + liWidth);
        }
    } else {
        animate(ul, ul.offsetLeft + liWidth);
    }
    index -= 1;
    btnShow(index);
}
last.addEventListener("click", lastClick, false);
var nextClick = function() {
    if (flag) {
        if (index === 5) {
            index = 0;
            ul.style.left = "0px";
            animate(ul, ul.offsetLeft - liWidth);
        }
    } else {
        animate(ul, ul.offsetLeft - liWidth);
    }
    index += 1;
    btnShow(index);
};
next.addEventListener("click", nextClick, false);


//鼠标移入图片是清除计时器
scoll.addEventListener("mouseenter", function() {
    clearInterval(timer);
}, false);
//鼠标移出图片时再次启动计时器
scoll.addEventListener("mouseleave", function() {
    play();
}, false);
//8.最后给小圆点加上事件，点第几个轮播到第几张
//小圆点的点击事件
var olliclick = function() {
    if (flag) {
        flag = false;
        var cur_li = document.getElementsByClassName("current");
        var lastid = cur_li[0].id; //当前的小圆点是第几个
        var distance = this.id - lastid; //计算当前小圆点与点击的小圆点的距离（分正负）
        if (distance == 0) {
            flag = true;
        } else {
            animate_ol(ul, distance);
        }
    }
}

//给所有的小圆点添加上点击事件
var ollitimer = 1
var lis = ol.getElementsByTagName('li');
for (ollitimer; ollitimer < lis.length + 1; ollitimer++) {
    var olli = document.getElementById(ollitimer);
    olli.addEventListener("click", olliclick, false);
}

function animate_ol(obj, value) { //小圆点动画函数
    if (value > 0) { //判断移动方向
        var speed = -20 * value; //使动画时间一致
    }
    if (value < 0) {
        var speed = -20 * value;
    }
    var lastleft = obj.offsetLeft;
    obj.timer = setInterval(function() {
        var distance = Math.abs(value * liWidth) - Math.abs(obj.offsetLeft - lastleft);
        //剩余需要移动的距离
        if (distance < Math.abs(speed)) {
            clearInterval(obj.timer);
            if (value > 0) {
                obj.style.left = obj.offsetLeft - distance + "px";
                flag = true;
            }
            if (value < 0) {
                obj.style.left = obj.offsetLeft + distance + "px";
                flag = true;
            }
        } else {
            obj.style.left = obj.offsetLeft + speed + "px";
        }
    }, 1);
    index = index + value;
    btnShow(index);
}