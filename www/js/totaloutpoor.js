"use strict";$(function(){var a={el:$("#app"),setScreen:function(){a.el.css({height:window.innerHeight-20+"px"})}};a.setScreen(),$(".u-main:first .button").click(function(){$($(".u-main")[0]).children(".unit").removeClass("hide"),$(this).parents(".unit").addClass("hide")}),$(".subnav .unit").click(function(){$(".subnav .unit").removeClass("blue"),$(".subnav .unit .bar").addClass("hide"),$(this).addClass("blue"),$(this).children(".bar").removeClass("hide"),"1"===$(this).attr("data-nav")?($(".m-main").children().addClass("hide"),$($(".m-main .u-main")[0]).removeClass("hide")):"2"===$(this).attr("data-nav")?($(".m-main").children().addClass("hide"),$($(".m-main .u-main")[1]).removeClass("hide")):"3"===$(this).attr("data-nav")&&($(".m-main").children().addClass("hide"),$($(".m-main .u-main")[2]).removeClass("hide"))});var e=echarts.init(document.getElementById("diffYear"));$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/index",type:"get",success:function(a){for(var t=[],n=[],i=[],r=0;r<JSON.parse(a).data.length;r++)t[r]=JSON.parse(a).data[r].filingyear,n[r]=JSON.parse(a).data[r].nopeople_num,i[r]=JSON.parse(a).data[r].people_num;t.reverse(),n.reverse(),i.reverse(),e.setOption({legend:{data:["贫困人口数","脱贫人口数"]},grid:{left:"left",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],position:"top"},yAxis:{type:"category",axisTick:{interval:0},axisLabel:{interval:0},data:t},series:[{name:"贫困人口数",type:"bar",data:n},{name:"脱贫人口数",type:"bar",data:i}]})}});var t=echarts.init(document.getElementById("diffArea")),n=function(a){a||(a="year=2017&town=不限"),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/area",type:"post",data:a,success:function(a){for(var e=[],n=[],i=[],r=0;r<JSON.parse(a).data.length;r++)e[r]=JSON.parse(a).data[r].text,n[r]=JSON.parse(a).data[r].nonum,i[r]=JSON.parse(a).data[r].num;e.reverse(),n.reverse(),i.reverse(),t.setOption({legend:{data:["贫困户数","脱贫户数"]},grid:{left:"left",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],position:"top"},yAxis:{type:"category",axisTick:{interval:0},axisLabel:{interval:0},data:e},series:[{name:"贫困户数",type:"bar",data:n},{name:"脱贫户数",type:"bar",data:i}]})}})},i=echarts.init(document.getElementById("sydincome")),r=function(a){a||(a="year=2017"),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/hushu",type:"post",data:a,success:function(a){for(var e=[],t=0;t<JSON.parse(a).data.length;t++)e[t]=JSON.parse(a).data[t].res;i.setOption({grid:{left:"5%",containLabel:!0},xAxis:[{name:"元",type:"category",axisTick:{interval:0},axisLabel:{interval:0,rotate:-30},data:["0~1000","1000~1500","1500~2000","2000~2500","2500~3000","3000~4000","4000以上"]}],yAxis:[{name:"户数",type:"value"}],series:[{name:"户数",type:"bar",data:e,itemStyle:{normal:{color:"#4fb5ff"}}}]})}})},s=echarts.init(document.getElementById("dydincome")),l=function(a){a||(a="min=0&max=1000"),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/hushu_nianfen",type:"post",data:a,success:function(a){for(var e=[],t=[],n=0;n<JSON.parse(a).data.length;n++)e[n]=JSON.parse(a).data[n].filingyear,t[n]=JSON.parse(a).data[n].num;s.setOption({grid:{left:"5%",containLabel:!0},xAxis:[{name:"人数",type:"value",boundaryGap:[0,.01],position:"top"}],yAxis:[{type:"category",axisTick:{interval:0},axisLabel:{interval:0},data:e}],series:[{type:"bar",data:t,itemStyle:{normal:{color:"#4fb5ff"}}}]})}})},o=echarts.init(document.getElementById("sydincomes")),u=function(a){a||(a="year=2017"),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/resource",type:"post",data:a,success:function(a){var e=[],t={};for(var n in JSON.parse(a).data)switch(n){case"wageIncome":t.value=+JSON.parse(a).data[n],t.name="工资性收入",e.push(t),t={};break;case"propertyIncome":t.value=+JSON.parse(a).data[n],t.name="财产性收入",e.push(t),t={};break;case"birthFunding":t.value=+JSON.parse(a).data[n],t.name="计划生育金",e.push(t),t={};break;case"fiveGuarnSubsidy":t.value=+JSON.parse(a).data[n],t.name="五保金",e.push(t),t={};break;case"ecoCompensation":t.value=+JSON.parse(a).data[n],t.name="生态补偿金",e.push(t),t={};break;case"productiveIncome":t.value=+JSON.parse(a).data[n],t.name="生产经营性收入",e.push(t),t={};break;case"transferredIncome":t.value=+JSON.parse(a).data[n],t.name="转移性收入",e.push(t),t={};break;case"mininumSubsidy":t.value=+JSON.parse(a).data[n],t.name="低保金",e.push(t),t={};break;case"pension":t.value=+JSON.parse(a).data[n],t.name="养老保险金",e.push(t),t={};break;case"otherTransIncome":t.value=+JSON.parse(a).data[n],t.name="其他转移性收入",e.push(t),t={}}o.setOption({tooltip:{trigger:"item",formatter:"{c}元 {d}%"},series:[{type:"pie",radius:"40%",center:["50%","50%"],data:e,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}})};n(),r(),l(),u(),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/year",type:"get",success:function(a){for(var e=JSON.parse(a),t=[],i=0;i<e.data.length;i++)t[i]=e.data[i].filingyear;new MobileSelect({trigger:"#year",title:"选择年份",wheels:[{data:t}],callback:function(a,e){var t="year="+e[0]+"&town="+$("#zhen").html();n(t)}}),new MobileSelect({trigger:"#yearTwo",title:"选择年份",wheels:[{data:t}],callback:function(a,e){var t="year="+e[0];r(t)}}),new MobileSelect({trigger:"#yearThree",title:"选择年份",wheels:[{data:t}],callback:function(a,e){var t="year="+e[0];u(t)}})}});new MobileSelect({trigger:"#zhen",title:"选择镇",wheels:[{data:["不限","河口乡","嫘祖镇","花林寺镇","旧县镇","茅坪场镇","鸣凤镇","洋坪镇"]}],callback:function(a,e){var t="year="+$("#year").html()+"&town="+e[0];n(t)}}),new MobileSelect({trigger:"#rand",title:"选择收入范围",wheels:[{data:[{id:"1",value:"0~1000元"},{id:"2",value:"1000~1500元"},{id:"3",value:"1500~2000元"},{id:"4",value:"2000~2500元"},{id:"5",value:"2500~3000元"},{id:"6",value:"3000~4000元"},{id:"7",value:"4000元以上"}]}],callback:function(a,e){var t="";switch(e[0].id){case"1":t="min=0&max=1000";break;case"2":t="min=1000&max=1500";break;case"3":t="min=1500&max=2000";break;case"4":t="min=2000&max=2500";break;case"5":t="min=2500&max=3000";break;case"6":t="min=3000&max=4000";break;case"7":t="min=4000&max="}l(t)}})});