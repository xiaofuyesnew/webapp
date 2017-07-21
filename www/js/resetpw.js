'use strict';

$(function () {
    var app = {
        el: $('#app'),
        setScreen: function setScreen() {
            app.el.css({ "height": window.innerHeight - 20 + 'px' });
        },
        loadBtn: function loadBtn() {
            $('.u-reset button').click(function () {
                var pwReg = /^[0-9a-zA-Z]{6,}$/,
                    username = 'username=' + $('#username').val(),
                    oldPassword = 'old_password=' + $('#oldPassword').val(),
                    newPassword = 'new_password=' + $('#newPassword').val(),
                    conPassword = 'con_password=' + $('#conPassword').val(),
                    code = 'code=' + $('#code').val() + '&PHPSESSID=code',
                    prama = username + '&' + oldPassword + '&' + newPassword + '&' + conPassword + '&' + code;

                if ($('#username').val() === '' || $('#oldPassword').val() === '' || $('#newPassword').val() === '' || $('#conPassword').val() === '' || $('#code').val() === '') {
                    app.showMsg('请填写相应项');
                } else if (!pwReg.test($('#newPassword').val())) {
                    app.showMsg('密码至少6位');
                } else if ($('#conPassword').val() !== $('#newPassword').val()) {
                    app.showMsg('确认密码不正确');
                } else {
                    $.ajax({
                        url: 'http://test.360guanggu.com/fupingv1/api.php/Login/reset',
                        type: "POST",
                        data: prama,
                        success: function success(data) {
                            console.log(JSON.parse(data));
                            if (JSON.parse(data).status === 1) {
                                app.showMsg('重置成功');
                                window.location = '../index.html';
                            }
                        }
                    });
                }
            });
        },
        checkCode: function checkCode() {
            $('.u-check img').click(function () {
                $('.u-check img').attr('src', 'http://test.360guanggu.com/fupingv1/api.php/Login/get_codes?PHPSESSID=code');
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
    app.checkCode();
    app.loadBtn();
});