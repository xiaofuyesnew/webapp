"use strict";

$(function () {
    //创建根节点对象
    var app = {
        el: $('#app'),
        setScreen: function setScreen() {
            app.el.css({ "height": window.innerHeight - 20 + "px" });
        }
    };

    //调用方法
    app.setScreen();
});