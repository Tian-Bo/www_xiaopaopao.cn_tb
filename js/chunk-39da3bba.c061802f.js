(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39da3bba"],{"1e4b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Layout",[n("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-container"},[n("el-container",{staticClass:"content-body"},[n("div",{staticClass:"navbar"},[n("div",{staticStyle:{"overflow-y":"auto",height:"100%"}},[n("el-menu",{staticClass:"navbar-el-menu",attrs:{collapse:t.isCollapse,"background-color":"#304156","text-color":"#BFCBD9","active-text-color":"#409EFF"}},[n("h1",{staticClass:"navbar-logo"},[t._v(t._s(t.isCollapse?"泡":"小泡泡"))]),t._l(t.list,function(e,a){return e.show?n("el-submenu",{key:a,attrs:{index:a.toString()}},[n("template",{slot:"title"},[n("router-link",{attrs:{tag:"div",to:e.path},nativeOn:{click:function(n){return t.Navigation(e.name)}}},[n("i",{staticClass:"el-icon-location"}),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isCollapse,expression:"!isCollapse"}]},[t._v(t._s(e.name))])])],1),t._l(e.children,function(a,s){return a.show?n("router-link",{key:s.toString(),attrs:{tag:"el-menu-item",to:a.path,index:s},nativeOn:{click:function(n){return t.NavigationMenu(e.name,a.name)}}},[t._v(t._s(a.name))]):t._e()})],2):t._e()})],2)],1)]),n("el-container",[n("el-header",[n("div",{staticClass:"header-left"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.isCollapse,expression:"isCollapse"}],on:{click:function(e){t.isCollapse=!1}}},[n("i",{staticClass:"el-icon-s-fold"})]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isCollapse,expression:"!isCollapse"}],on:{click:function(e){t.isCollapse=!0}}},[n("i",{staticClass:"el-icon-s-unfold"})]),n("span",[t._v(t._s(t.menuText))])]),n("div",{staticClass:"header-right"},[n("el-dropdown",{attrs:{placement:"bottom"}},[n("i",{staticClass:"el-icon-setting"}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{attrs:{to:"/account_home"}},[t._v("个人中心")])],1),n("el-dropdown-item",[t._v("切换用户")]),n("el-dropdown-item",{nativeOn:{click:function(e){return t.withdrawLogin(e)}}},[t._v("退出登陆")])],1)],1),n("span",[t._v(t._s(t.data.username))])],1)]),n("el-main",[t._t("default")],2)],1)],1)],1)},i=[],l=n("2934"),r={data:function(){return{isCollapse:!1,list:[],data:[],menuText:"概况"}},methods:{getUserInfo:function(){var t=this;Object(l["a"])().then(function(e){0===e.status&&(t.data=e.data)})},withdrawLogin:function(){window.localStorage.removeItem("token"),this.$router.push({path:"/login"})},Navigation:function(t){this.menuText=t},NavigationMenu:function(t,e){this.menuText=t+"/"+e}},created:function(){this.list=this.$router.options.routes,this.getUserInfo()}},c=r,u=(n("cd0e"),n("6691")),d=Object(u["a"])(c,o,i,!1,null,"b80c56a6",null),p=d.exports,v={name:"App",components:{Layout:p}},m=v,h=Object(u["a"])(m,a,s,!1,null,null,null);e["default"]=h.exports},"6a07":function(t,e,n){},cd0e:function(t,e,n){"use strict";var a=n("6a07"),s=n.n(a);s.a}}]);