"use strict";var app=new Vue({el:".app",data:{message:"nihao"},methods:{setScreen:function(){var e=innerHeight;document.getElementsByClassName("app")[0].style.height=e+"px"}}});app.setScreen();