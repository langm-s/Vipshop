$(function () {
    // 验证用户注册时的输入
    // 表单失去焦点时清除表单输入内容的左右空格
    $('.user').blur(function () {
        $(this).val(myTrim($('.user').val()));
    })
    $('.pwd').blur(function () {
        $(this).val(myTrim($('.pwd').val()));
    })
    //点击登录时验证用户名和密码输入是否正确
    $('.submit').click(function () {
        //判断用户名和密码是否为空
        if ($('.user').val() == '') {
            // 用户名为空
            $('.message').text("请输入用户名！");
            if ($('.pwd').val() == '') {
                $('.message').text("请输入用户名和密码！");
            }
        } else {
            //用户名不为空
            if ($('.pwd').val() == '') {
                $('.message').text("请输入密码！");
            }
        }
        //用户名和密码均不为空
        if ($('.user').val() != '' && $('.pwd').val() != '') {
            $('.message').text("");
            // 将用户注册的账号密码保存到浏览器的本地存储
            // 验证用户名和密码的可用性暂时没写
            if (getCookie($('.user').val())) {
                $('.message').text("该用户名已被注册！");
                return;
            }
            setCookie({
                key: $('.user').val(),
                val: $('.user').val(),
                days: 90
            });
            setCookie({
                // 给密码的key加后缀，防止有多个账户密码相同
                key: $('.pwd').val() + 'pwd',
                val: $('.pwd').val(),
                days: 90
            });
            location.href = 'login.html';
        }
    })
    
    // 点击去登录 跳转到登录页
    $('.gotologin').click(function () {
        location.href = 'login.html';
    })
})
