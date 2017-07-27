'use strict';

$(function () {
    //创建根节点对象
    var app = {
        el: $('#app'),
        setLocalData: function setLocalData() {
            if (localStorage.username && localStorage.password) {
                $('#username').val(localStorage.username);
                $('#password').val(localStorage.password);
            }
        },
        setScreen: function setScreen() {
            app.el.css({ "height": window.innerHeight - 20 + 'px' });
        },
        loadBtn: function loadBtn() {
            $('.u-login button').click(function () {
                $('.sp-wraper').show(function () {
                    $('.sp-wraper').css({ 'opacity': '1' });
                });
                setTimeout(function () {
                    $('.sp-wraper').css({ 'opacity': '0' });
                }, 3000);
                setTimeout(function () {
                    window.location = 'html/macroresult.html';
                }, 5000);
            });
        },
        checkCode: function checkCode() {
            $('.u-check img').click(function () {
                $('.u-check img').attr('src', 'http://test.360guanggu.com/fupingv1/api.php/Login/get_codes?PHPSESSID=code');
            });
        },
        login: function login() {
            $('button').click(function () {
                var username = 'username=' + $('#username').val(),
                    password = 'password=' + $('#password').val(),
                    code = 'code=' + $('#code').val(),
                    key = 'PHPSESSID=code',
                    prama = username + '&' + password + '&' + code + '&' + key;
                console.log(prama);
                $.ajax({
                    url: 'http://test.360guanggu.com/fupingv1/api.php/Login/login',
                    type: "post",
                    data: prama,
                    success: function success(data) {
                        if (JSON.parse(data).status === 1) {
                            localStorage.setItem('uid', JSON.parse(data).uid);
                            if ($('#remember').prop('checked')) {
                                localStorage.setItem('username', $('#username').val());
                                localStorage.setItem('password', $('#password').val());
                            } else {
                                localStorage.setItem('username', '');
                                localStorage.setItem('password', '');
                            }
                            console.log(localStorage);
                            window.location = 'html/main.html';
                        } else {
                            app.showMsg(JSON.parse(data).info);
                        }
                        console.log(JSON.parse(data));
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

        //调用方法
    };app.setScreen();
    app.setLocalData();
    app.checkCode();
    app.login();
});