$(function () {
    alert('欢迎来到唯品会，请登录您的唯品会账号~')
    // 账户登录样式显示
    $('.uplogin').click(function () {
        $(this).addClass('active');
        $('.scan').removeClass('active');
        $('.scan-login').css('display', 'none');
        $('.account-login').css('display', 'block');
        $('.user').val('');
        $('.pwd').val('');
        $('.message').text('');
    })
    // 扫码登录样式显示
    $('.scan').click(function () {
        $(this).addClass('active');
        $('.uplogin').removeClass('active');
        $('.account-login').css('display', 'none');
        $('.scan-login').css('display', 'block');
    })

    // 清除表单输入内容的左右空格
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
            // 验证浏览器本地存储中是否有该用户名
            if(getCookie($('.user').val())){
                // 用户存在  验证密码是否正确
                if(getCookie($('.user').val()+'pwd')){
                    // 验证成功 在浏览器本地存储中添加一个key，记录我们是已登录状态
                    setCookie({
                        key: 'islogin',
                        val: 'true',
                        days: 7
                    });
                    // 密码正确
                    // location.href = 'goodslist.html';
                    window.open('goodslist.html');
                }
            }else {
                $('.message').text("该用户不存在！");
            }
        }
    })

    // 点击免费注册 跳转到注册页面
    $('.gotoregist').click(function(){
        location.href = 'regist.html';
    })
})