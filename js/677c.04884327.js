(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["677c"],{"677c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.ajax}},[a("d2-icon",{attrs:{name:"paper-plane"}}),t._v("\n      发送请求\n    ")],1)],1),a("el-table",t._b({staticStyle:{width:"100%"}},"el-table",t.table,!1),t._l(t.table.columns,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})}))],1)},l=[],o=(a("ac6a"),a("456d"),a("cadf"),a("551c"),a("097d"),a("9bd2"));function c(){return Object(o["a"])({url:"/demo/plugins/mock/ajax",method:"get"})}var r={name:"demo-plugins-mock-ajax",data:function(){return{table:{columns:[],data:[],size:"mini",stripe:!0,border:!0}}},methods:{ajax:function(){var t=this;c().then(function(e){t.table.columns=Object.keys(e.list[0]).map(function(t){return{label:t,prop:t}}),t.table.data=e.list}).catch(function(){})}}},i=r,s=a("2877"),u=Object(s["a"])(i,n,l,!1,null,null,null);u.options.__file="ajax.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=677c.04884327.js.map