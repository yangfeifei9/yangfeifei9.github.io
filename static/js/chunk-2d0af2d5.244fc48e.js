(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af2d5"],{"0ce1":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"fillcontain"},[e("div",{ref:"fillcontainer",staticClass:"fillcontainer"},[e("div",{staticClass:"echartsPosition",attrs:{id:"fundPosition"}})])])},i=[],o=e("164e"),m=e.n(o),s=(e("3139"),e("7799"),{data:function(){return{chart:null}},methods:{randomData:function(){return Math.round(1e6*Math.random())},drawMap:function(a){this.chart&&this.chart.dispose&&this.chart.dispose(),this.chart=m.a.init(document.getElementById(a),"roma"),this.chart.setOption({title:{text:"2022年全国各省份投资情况",subtext:"单位/万元",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left",data:["总投资额"]},visualMap:{min:0,max:12e5,left:"left",top:"bottom",text:["高","低"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},series:[{name:"总投资额",type:"map",mapType:"china",roam:!1,label:{normal:{show:!0},emphasis:{show:!0}},data:[{name:"北京",value:this.randomData()},{name:"天津",value:this.randomData()},{name:"上海",value:this.randomData()},{name:"重庆",value:this.randomData()},{name:"河北",value:this.randomData()},{name:"河南",value:this.randomData()},{name:"云南",value:this.randomData()},{name:"辽宁",value:this.randomData()},{name:"黑龙江",value:this.randomData()},{name:"湖南",value:this.randomData()},{name:"安徽",value:this.randomData()},{name:"山东",value:this.randomData()},{name:"新疆",value:this.randomData()},{name:"江苏",value:this.randomData()},{name:"浙江",value:this.randomData()},{name:"江西",value:this.randomData()},{name:"湖北",value:this.randomData()},{name:"广西",value:this.randomData()},{name:"甘肃",value:this.randomData()},{name:"山西",value:this.randomData()},{name:"内蒙古",value:this.randomData()},{name:"陕西",value:this.randomData()},{name:"吉林",value:this.randomData()},{name:"福建",value:this.randomData()},{name:"贵州",value:this.randomData()},{name:"广东",value:this.randomData()},{name:"青海",value:this.randomData()},{name:"西藏",value:this.randomData()},{name:"四川",value:this.randomData()},{name:"宁夏",value:this.randomData()},{name:"海南",value:this.randomData()},{name:"台湾",value:this.randomData()},{name:"香港",value:this.randomData()},{name:"澳门",value:this.randomData()}]}]})}},mounted:function(){this.$nextTick(function(){this.$refs.fillcontainer.style.height=document.body.clientHeight-160+"px",this.drawMap("fundPosition");var a=this,t=null;window.onresize=function(){t&&clearTimeout(t),t=setTimeout(function(){a.$refs.fillcontainer.style.height=document.body.clientHeight-160+"px",a.drawMap("fundPosition")},100)}})}}),r=s,l=e("2877"),d=Object(l["a"])(r,n,i,!1,null,"396cb74c",null);t["default"]=d.exports}}]);