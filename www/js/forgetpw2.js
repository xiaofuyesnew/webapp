"use strict";$(function(){var t={el:$("#app"),setScreen:function(){t.el.css({height:window.innerHeight-20+"px"})},loadBtn:function(){$(".u-forget button").click(function(){$(".sp-wraper").show(function(){$(".sp-wraper").css({opacity:"1"})}),setTimeout(function(){$(".sp-wraper").css({opacity:"0"}),t.showMsg("修改完成")},3e3),setTimeout(function(){$(".sp-wraper").hide(),window.location="../index.html"},5e3)})},showMsg:function(t){$(".msg").html(t).show(function(){$(".msg").css({opacity:"1"}),setTimeout(function(){$(".msg").css({opacity:"0"})},2e3),setTimeout(function(){$(".msg").hide()},3e3)})}};t.setScreen(),t.loadBtn()});