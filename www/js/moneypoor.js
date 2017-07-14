"use strict";$(function(){var e={el:$("#app"),setScreen:function(){e.el.css({height:window.innerHeight-20+"px"})}};e.setScreen(),$(".subnav .unit").click(function(){$(".subnav .unit").removeClass("blue"),$(".subnav .unit .bar").addClass("hide"),$(this).addClass("blue"),$(this).children(".bar").removeClass("hide"),"1"===$(this).attr("data-nav")?($(".m-main").children().addClass("hide"),$($(".m-main .u-main")[0]).removeClass("hide")):"2"===$(this).attr("data-nav")?($(".m-main").children().addClass("hide"),$($(".m-main .u-main")[1]).removeClass("hide")):"3"===$(this).attr("data-nav")&&($(".m-main").children().addClass("hide"),$($(".m-main .u-main")[2]).removeClass("hide"))});var a=echarts.init(document.getElementById("moneyin")),t=function(e){e||(e="year=2017"),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/zijin_total",type:"post",data:e,success:function(e){var t=[{name:"县级统筹"},{name:"省办项目"}];for(var n in JSON.parse(e).data)switch(n){case"xianji":t[0].value=+JSON.parse(e).data[n];break;case"shengban":t[1].value=+JSON.parse(e).data[n]}a.setOption({series:[{type:"pie",radius:"35%",center:["50%","40%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},label:{normal:{formatter:"{b} {c} {d}%"}}}]})}})},n=echarts.init(document.getElementById("moneyout")),r=function(e){e||(e="year=2017"),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/zijin_total",type:"post",data:e,success:function(e){var a=[{name:"县级统筹"},{name:"省办项目"}];for(var t in JSON.parse(e).data)switch(t){case"xianji":a[0].value=+JSON.parse(e).data[t];break;case"shengban":a[1].value=+JSON.parse(e).data[t]}n.setOption({series:[{type:"pie",radius:"35%",center:["50%","40%"],data:a,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},label:{normal:{formatter:"{b} {c} {d}%"}}}]})}})},i=echarts.init(document.getElementById("symoneygo")),o=function(e){e||(e="year=2017&projectTypeText=&projectChildTypeText="),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/finaly",type:"post",data:e,success:function(e){var a=[],t={};for(var n in JSON.parse(e).data)switch(n){case"hangyeMoney":t.name="行业部门资金",t.value=+JSON.parse(e).data[n],a.push(t),t={};break;case"otherMoney":t.name="其他资金",t.value=+JSON.parse(e).data[n],a.push(t),t={};break;case"shehuiMoney":t.name="社会自筹资金",t.value=+JSON.parse(e).data[n],a.push(t),t={};break;case"shenjiMoney":t.name="省级专项资金",t.value=+JSON.parse(e).data[n],a.push(t),t={};break;case"shijiMoney":t.name="市级专项资金",t.value=+JSON.parse(e).data[n],a.push(t),t={};break;case"xianjiMoney":t.name="县级专项资金",t.value=+JSON.parse(e).data[n],a.push(t),t={};break;case"xindaiMoney":t.name="信贷资金",t.value=+JSON.parse(e).data[n],a.push(t),t={};break;case"zhongyangMoney":t.name="中央专项资金",t.value=+JSON.parse(e).data[n],a.push(t),t={}}i.setOption({series:[{type:"pie",radius:"35%",center:["50%","40%"],data:a,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},label:{normal:{formatter:"{b} {c} {d}%"}}}]})}})},s=echarts.init(document.getElementById("eymoneysproject")),p=function(e){e||(e="ziduan=&town=&country=&projectTypeText=&projectChildTypeText="),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/laiyuan_num",type:"post",data:e,success:function(e){for(var a=[],t=[],n=0;n<JSON.parse(e).data.length;n++)a[n]=JSON.parse(e).data[n].year,t[n]=+JSON.parse(e).data[n].total;s.setOption({grid:{left:"left",containLabel:!0},xAxis:{name:"项目数",nameRotate:90,type:"value",boundaryGap:[0,.01],position:"top"},yAxis:{name:"年份",nameLocation:"start",type:"category",axisTick:{interval:0},axisLabel:{interval:0},data:a},series:[{name:"项目数",type:"bar",data:t}]})}})},c=echarts.init(document.getElementById("dmoneygo")),l=function(e){e||(e="ziduan=&town=&country=&projectTypeText=&projectChildTypeText="),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/laiyuan_num1",type:"post",data:e,success:function(e){for(var a=[],t=[],n=0;n<JSON.parse(e).data.length;n++)a[n]=JSON.parse(e).data[n].year,t[n]=+JSON.parse(e).data[n].total;c.setOption({grid:{left:"left",containLabel:!0},xAxis:{name:"总金额",nameRotate:90,type:"value",boundaryGap:[0,.01],position:"top"},yAxis:{name:"年份",nameLocation:"start",type:"category",axisTick:{interval:0},axisLabel:{interval:0},data:a},series:[{name:"项目数",type:"bar",data:t}]})}})},u=echarts.init(document.getElementById("smoneygo")),d=function(e){e||(e="year=2017"),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/laiyuan_num2",type:"post",data:e,success:function(e){for(var a=[],t={},n=0;n<JSON.parse(e).data.length;n++)t.name=JSON.parse(e).data[n].text,t.value=+JSON.parse(e).data[n].num,a.push(t),t={};u.setOption({series:[{type:"pie",radius:"35%",center:["50%","40%"],data:a,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},label:{normal:{formatter:"{b} {c} {d}%"}}}]})}})};t(),r(),o(),p(),l(),d(),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/search",type:"get",success:function(e){for(var a=[{data:[{id:"0",value:"不限"}]}],t=["不限"],n={},r={},i=0;i<JSON.parse(e).data.length;i++){if(n.id=JSON.parse(e).data[i].id,n.value=JSON.parse(e).data[i].text,t.push(JSON.parse(e).data[i].text),JSON.parse(e).data[i].data.length){n.childs=[{id:"0",value:"不限"}];for(var s=0;s<JSON.parse(e).data[i].data.length;s++)r.id=JSON.parse(e).data[i].data[s].id,r.value=JSON.parse(e).data[i].data[s].text,n.childs.push(r),r={}}a[0].data.push(n),n={}}new MobileSelect({trigger:"#project",title:"选择项目类型",wheels:a,callback:function(e,a){var t=JSON.parse($("#yearThree").attr("data-self"))[0],n="";$("#project").attr("data-self",JSON.stringify(a)),n=1===a.length?"0"===a[0].id?"projectTypeText=&projectChildTypeText=":"projectTypeText="+a[0].value+"&projectChildTypeText=":"0"===a[1].id?"projectTypeText="+a[0].value+"&projectChildTypeText=":"projectTypeText="+a[0].value+"&projectChildTypeText="+a[1].value,o(t+"&"+n)}}),new MobileSelect({trigger:"#projectTwo",title:"选择项目类型",wheels:a,callback:function(e,a){var t="",n="",r="",i=JSON.parse($("#source").attr("data-self")),o=JSON.parse($("#zhen").attr("data-self"));switch($("#projectTwo").attr("data-self",JSON.stringify(a)),i[0]){case"行业部门资金":t="ziduan=hangyeMoney";break;case"其他资金":t="ziduan=otherMoney";break;case"社会自筹资金":t="ziduan=shehuiMoney";break;case"省级专项资金":t="ziduan=shenjiMoney";break;case"市级专项资金":t="ziduan=shijiMoney";break;case"县级专项资金":t="ziduan=xianjiMoney";break;case"信贷资金":t="ziduan=xindaiMoney";break;case"中央专项资金":t="ziduan=zhongyangMoney"}n=1===a.length?"0"===a[0].id?"projectTypeText=&projectChildTypeText=":"projectTypeText="+a[0].value+"&projectChildTypeText=":"0"===a[1].id?"projectTypeText="+a[0].value+"&projectChildTypeText=":"projectTypeText="+a[0].value+"&projectChildTypeText="+a[1].value,1===o.length?r="town=&country=":"0"===o[1].id?r="town="+o[0].value+"&country=":n="town="+o[0].value+"&country="+o[1].value,p(t+"&"+r+"&"+n)}}),new MobileSelect({trigger:"#projectThree",title:"选择项目类型",wheels:a,callback:function(e,a){var t="",n="",r="",i=JSON.parse($("#sourceTwo").attr("data-self")),o=JSON.parse($("#zhenTwo").attr("data-self"));switch($("#projectThree").attr("data-self",JSON.stringify(a)),i[0]){case"行业部门资金":t="ziduan=hangyeMoney";break;case"其他资金":t="ziduan=otherMoney";break;case"社会自筹资金":t="ziduan=shehuiMoney";break;case"省级专项资金":t="ziduan=shenjiMoney";break;case"市级专项资金":t="ziduan=shijiMoney";break;case"县级专项资金":t="ziduan=xianjiMoney";break;case"信贷资金":t="ziduan=xindaiMoney";break;case"中央专项资金":t="ziduan=zhongyangMoney"}n=1===a.length?"0"===a[0].id?"projectTypeText=&projectChildTypeText=":"projectTypeText="+a[0].value+"&projectChildTypeText=":"0"===a[1].id?"projectTypeText="+a[0].value+"&projectChildTypeText=":"projectTypeText="+a[0].value+"&projectChildTypeText="+a[1].value,1===o.length?r="town=&country=":"0"===o[1].id?r="town="+o[0].value+"&country=":n="town="+o[0].value+"&country="+o[1].value,l(t+"&"+r+"&"+n)}})}}),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/zijinyear",type:"get",success:function(e){for(var a=[],n=0;n<JSON.parse(e).data.length;n++)a[n]=JSON.parse(e).data[n].moneyyear;new MobileSelect({trigger:"#year",title:"选择年份",wheels:[{data:a}],callback:function(e,a){var n="year="+a[0];t(n)}}),new MobileSelect({trigger:"#yearTwo",title:"选择年份",wheels:[{data:a}],callback:function(e,a){var t="year="+a[0];r(t)}}),new MobileSelect({trigger:"#yearThree",title:"选择年份",wheels:[{data:a}],callback:function(e,a){var t="year="+a[0],n="",r=JSON.parse($("#project").attr("data-self"));$("#yearThree").attr("data-self",JSON.stringify(a)),n=1===r.length?"0"===r[0].id?"projectTypeText=&projectChildTypeText=":"projectTypeText="+r[0].value+"&projectChildTypeText=":"0"===r[1].id?"projectTypeText="+r[0].value+"&projectChildTypeText=":"projectTypeText="+r[0].value+"&projectChildTypeText="+r[1].value,o(t+"&"+n)}}),new MobileSelect({trigger:"#yearFour",title:"选择年份",wheels:[{data:a}],callback:function(e,a){var t="year="+a[0];d(t)}})}}),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/laiyuan",type:"get",success:function(e){var a=["不限"];for(var t in JSON.parse(e).data)a.push(JSON.parse(e).data[t]);new MobileSelect({trigger:"#source",title:"选择资金来源",wheels:[{data:a}],callback:function(e,a){var t="",n="",r="",i=JSON.parse($("#projectTwo").attr("data-self")),o=JSON.parse($("#zhen").attr("data-self"));switch($("#source").attr("data-self",JSON.stringify(a)),a[0]){case"行业部门资金":t="ziduan=hangyeMoney";break;case"其他资金":t="ziduan=otherMoney";break;case"社会自筹资金":t="ziduan=shehuiMoney";break;case"省级专项资金":t="ziduan=shenjiMoney";break;case"市级专项资金":t="ziduan=shijiMoney";break;case"县级专项资金":t="ziduan=xianjiMoney";break;case"信贷资金":t="ziduan=xindaiMoney";break;case"中央专项资金":t="ziduan=zhongyangMoney"}n=1===i.length?"0"===i[0].id?"projectTypeText=&projectChildTypeText=":"projectTypeText="+i[0].value+"&projectChildTypeText=":"0"===i[1].id?"projectTypeText="+i[0].value+"&projectChildTypeText=":"projectTypeText="+i[0].value+"&projectChildTypeText="+i[1].value,1===o.length?r="town=&country=":"0"===o[1].id?r="town="+o[0].value+"&country=":n="town="+o[0].value+"&country="+o[1].value,p(t+"&"+r+"&"+n)}}),new MobileSelect({trigger:"#sourceTwo",title:"选择资金来源",wheels:[{data:a}],callback:function(e,a){var t="",n="",r="",i=JSON.parse($("#projectThree").attr("data-self")),o=JSON.parse($("#zhenTwo").attr("data-self"));switch($("#sourceTwo").attr("data-self",JSON.stringify(a)),a[0]){case"行业部门资金":t="ziduan=hangyeMoney";break;case"其他资金":t="ziduan=otherMoney";break;case"社会自筹资金":t="ziduan=shehuiMoney";break;case"省级专项资金":t="ziduan=shenjiMoney";break;case"市级专项资金":t="ziduan=shijiMoney";break;case"县级专项资金":t="ziduan=xianjiMoney";break;case"信贷资金":t="ziduan=xindaiMoney";break;case"中央专项资金":t="ziduan=zhongyangMoney"}n=1===i.length?"0"===i[0].id?"projectTypeText=&projectChildTypeText=":"projectTypeText="+i[0].value+"&projectChildTypeText=":"0"===i[1].id?"projectTypeText="+i[0].value+"&projectChildTypeText=":"projectTypeText="+i[0].value+"&projectChildTypeText="+i[1].value,1===o.length?r="town=&country=":"0"===o[1].id?r="town="+o[0].value+"&country=":n="town="+o[0].value+"&country="+o[1].value,l(t+"&"+r+"&"+n)}})}}),$.ajax({url:"http://test.360guanggu.com/yuanan_fupin/api.php/Changepoor/searchtown",type:"get",success:function(e){for(var a=[{data:[{id:"0",value:"不限"}]}],t={},n={},r=0;r<JSON.parse(e).data.length;r++){if(t.id=JSON.parse(e).data[r].id,t.value=JSON.parse(e).data[r].text,JSON.parse(e).data[r].data.length){t.childs=[{id:"0",value:"不限"}];for(var i=0;i<JSON.parse(e).data[r].data.length;i++)n.id=JSON.parse(e).data[r].data[i].id,n.value=JSON.parse(e).data[r].data[i].text,t.childs.push(n),n={}}a[0].data.push(t),t={}}new MobileSelect({trigger:"#zhen",title:"选择镇",wheels:a,callback:function(e,a){var t="",n="",r="",i=JSON.parse($("#projectTwo").attr("data-self")),o=JSON.parse($("#source").attr("data-self"));switch($("#zhen").attr("data-self",JSON.stringify(a)),o[0]){case"行业部门资金":t="ziduan=hangyeMoney";break;case"其他资金":t="ziduan=otherMoney";break;case"社会自筹资金":t="ziduan=shehuiMoney";break;case"省级专项资金":t="ziduan=shenjiMoney";break;case"市级专项资金":t="ziduan=shijiMoney";break;case"县级专项资金":t="ziduan=xianjiMoney";break;case"信贷资金":t="ziduan=xindaiMoney";break;case"中央专项资金":t="ziduan=zhongyangMoney"}r=1===a.length?"town=&country=":"0"===a[1].id?"town="+a[0].value+"&country=":"town="+a[0].value+"&country="+a[1].value,n=1===i.length?"0"===i[0].id?"projectTypeText=&projectChildTypeText=":"projectTypeText="+i[0].value+"&projectChildTypeText=":"0"===i[1].id?"projectTypeText="+i[0].value+"&projectChildTypeText=":"projectTypeText="+i[0].value+"&projectChildTypeText="+i[1].value,p(t+"&"+r+"&"+n)}}),new MobileSelect({trigger:"#zhenTwo",title:"选择镇",wheels:a,callback:function(e,a){var t="",n="",r="",i=JSON.parse($("#projectThree").attr("data-self")),o=JSON.parse($("#sourceTwo").attr("data-self"));switch($("#zhenTwo").attr("data-self",JSON.stringify(a)),o[0]){case"行业部门资金":t="ziduan=hangyeMoney";break;case"其他资金":t="ziduan=otherMoney";break;case"社会自筹资金":t="ziduan=shehuiMoney";break;case"省级专项资金":t="ziduan=shenjiMoney";break;case"市级专项资金":t="ziduan=shijiMoney";break;case"县级专项资金":t="ziduan=xianjiMoney";break;case"信贷资金":t="ziduan=xindaiMoney";break;case"中央专项资金":t="ziduan=zhongyangMoney"}r=1===a.length?"town=&country=":"0"===a[1].id?"town="+a[0].value+"&country=":"town="+a[0].value+"&country="+a[1].value,n=1===i.length?"0"===i[0].id?"projectTypeText=&projectChildTypeText=":"projectTypeText="+i[0].value+"&projectChildTypeText=":"0"===i[1].id?"projectTypeText="+i[0].value+"&projectChildTypeText=":"projectTypeText="+i[0].value+"&projectChildTypeText="+i[1].value,l(t+"&"+r+"&"+n)}})}})});