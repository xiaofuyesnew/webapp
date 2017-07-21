'use strict';

$(function () {
    var app = {
        el: $('#app'),
        setScreen: function setScreen() {
            app.el.css({ "height": window.innerHeight - 20 + 'px' });
        },
        loadBtn: function loadBtn() {
            $($('.u-forget button')[0]).click(function () {
                var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                    username = 'username=' + $('#username').val(),
                    mail = 'mail=' + $('#mail').val(),
                    prama = username + '&' + mail;
                if ($('#username').val() === '') {
                    app.showMsg('请输入用户名');
                } else if (!emailReg.test($('#mail').val())) {
                    app.showMsg('邮箱格式不正确');
                } else {
                    $.ajax({
                        url: 'http://test.360guanggu.com/fupingv1/api.php/Login/add',
                        type: "POST",
                        data: prama,
                        success: function success(data) {
                            app.showMsg('发送成功');
                        }
                    });
                }
            });
            $($('.u-forget button')[1]).click(function () {
                var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                    username = 'username=' + $('#username').val(),
                    mail = 'mail=' + $('#mail').val(),
                    code = 'code=' + $('#code').val(),
                    prama = username + '&' + mail + '&' + code;
                $.ajax({
                    url: 'http://test.360guanggu.com/fupingv1/api.php/Login/checkEmailCode',
                    type: "POST",
                    data: prama,
                    success: function success(data) {
                        console.log(JSON.parse(data));
                        if (JSON.parse(data).status === 1) {
                            localStorage.setItem('id', JSON.parse(data).id);
                            window.location = 'forgetpw2.html';
                        } else {
                            app.showMsg(JSON.parse(data).info);
                        }
                    }
                });
            });
        },
        showMsg: function showMsg(msg) {
            $('.msg').html(msg).show(function () {
                $('.msg').css({ 'opacity': '1' });
                setTimeout(function () {
                    $('.msg').css({ 'opacity': '0' });
                }, 2000);
                setTimeout(function () {
                    $('.msg').hide();
                }, 3000);
            });
        }
    };

    app.setScreen();
    app.loadBtn();
});