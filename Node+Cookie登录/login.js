function check(form) {
    // console.log($("#name").val());
    // console.log($("#password").val());
    var accountName = $("#name").val();
    var accountPass = $("#password").val();
    $(".userName").focus();
    if (getCookie("name") != null) {
        console.log(getCookie("name"));
        $(".userName").val(getCookie("name"));
        $(".userPassword").val(getCookie("password"));
    }
    if (!accountName || accountName == "") {
        showmes("请输入用户名!");
        form.name.focus();
        return false;
    }
    if (!accountPass || accountPass == "") {
        showmes("请输入密码!");
        form.password.focus();
        return false;
    }
    //验证登录信息,初始用户名admin,密码123456
    if (accountName == "admin" && accountPass == "123456") {
        setTimeout(function() {
            showmes("正在登陆中...");
        }, 1000)
        showmes("登陆成功!");
        alert("登陆成功!");
        window.open("wjs.html");
    } else {
        showmes("用户名或密码错误!");
        return false;
    }
}
//错误信息提示
function showmes(message) {
    $("#message").text(message);
}
//监听其他事件
$(function() {
        if (getCookie("name") != null) {
            console.log(getCookie("name"));
            $(".userName").val(getCookie("name"));
            $(".userPassword").val(getCookie("password"));
            if ($("#name").val() == 'admin' && $("#name").val() == '123456') {
                $(".submit").click();
            }
        }
        $("#remember").click(function() {
            //存cookie
            if ($("#remember").prop("checked") == true) {
                console.log("勾选");
                if ($("#name").val() == "admin" && $("#password").val() == 123456) {
                    setCookie("name", $("#name").val());
                    setCookie("password", $("#password").val());
                }
            } else {
                delCookie("name");
                delCookie("password");
            }
        });

        $("#reset").click(function() {
            document.getElementById("name").value = "";
            document.getElementById("password").value = "";
            showmes("");
        });
        document.onkeydown = keySearch;

        function keySearch(event) {
            var code = event.keyCode;
            if (code == 13) {
                $("#submit").click();
                return false;
            }
            return true;
        }
    })
    //写Cookie
function setCookie(name, value) {
    var minute = 5;
    var time = new Date();
    time.setTime(time.getTime() + 5 * 60 * 1000);
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; expires=" + time.toGMTString();
}
//读Cookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + "=",
        cookieValue = null,
        cookieStart = document.cookie.indexOf(cookieName);
    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
            return null;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}
//删Cookie
function delCookie(name) {
    this.setCookie(name, "");
}