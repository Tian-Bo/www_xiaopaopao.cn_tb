(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about",home:"home"}[e]||e)+"."+{about:"7e9a717e",home:"a5699d5d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={home:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about",home:"home"}[e]||e)+"."+{about:"31d6cfe0",home:"506e1b71"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e70":function(e,t,n){},2934:function(e,t,n){"use strict";var r=n("f753"),o=n.n(r),a=n("51be"),i=o.a.create({baseURL:a["a"].baseUrl,timeout:3e4,withCredentials:a["a"].credential});i.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),i.interceptors.response.use(function(e){return e.data},function(e){return e&&e.response&&console.log(e.response),Promise.reject(e)});var s={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.get(e,{params:t,headers:n})},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.post(e,t,{headers:n})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.put(e,t,{headers:n})},file:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.post(e,t,{headers:Object.assign({"Content-Type":"multipart/form-data"},n)})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i.delete(e,{param:t,headers:Object.assign({"Content-Type":"multipart/form-data"},n)})}};n.d(t,"a",function(){return u});var u=function(e){return s.get("/ranking/gender",e)}},"2b4f":function(e,t,n){"use strict";var r=n("1e70"),o=n.n(r);o.a},3673:function(e,t,n){},"3e54":function(e,t,n){"use strict";var r=n("4e0e"),o=n.n(r);o.a},"4e0e":function(e,t,n){},"51be":function(e,t,n){"use strict";n("2338"),n("f763"),n("fb37");var r=n("a506");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(r["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i={routerMode:"history",baseUrl:"".concat(location.origin),credential:!0},s=a({},i);t["a"]=s},"56d7":function(e,t,n){"use strict";n.r(t);n("fb37"),n("f763"),n("dac5"),n("6e26"),n("9604"),n("df67");var r=n("eaf6"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout",[n("router-view")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-container"},[n("el-container",{staticStyle:{position:"fixed",height:"100%",width:"100%"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse,"default-active":"2","background-color":"#304156","text-color":"#BFCBD9","active-text-color":"#409EFF"}},[n("h1",{staticClass:"logo"},[e._v(e._s(e.isCollapse?"泡":"小泡泡"))]),n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[e._v("导航一")])]),n("el-menu-item",{attrs:{index:"1-1"}},[e._v("选项1")]),n("el-menu-item",{attrs:{index:"1-2"}},[e._v("选项2")]),n("el-menu-item",{attrs:{index:"1-3"}},[e._v("选项3")])],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[e._v("导航一")])]),n("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),n("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),n("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[e._v("导航一")])]),n("el-menu-item",{attrs:{index:"3-1"}},[e._v("选项1")]),n("el-menu-item",{attrs:{index:"3-2"}},[e._v("选项2")]),n("el-menu-item",{attrs:{index:"3-3"}},[e._v("选项3")])],2)],1),n("el-container",[n("el-header",[n("div",{staticClass:"header-left"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.isCollapse,expression:"isCollapse"}],on:{click:function(t){e.isCollapse=!1}}},[n("i",{staticClass:"el-icon-s-fold"})]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}],on:{click:function(t){e.isCollapse=!0}}},[n("i",{staticClass:"el-icon-s-unfold"})]),n("span",[e._v("中国/日本/美国")])]),n("div",{staticClass:"header-right"},[n("el-dropdown",{attrs:{placement:"bottom"}},[n("i",{staticClass:"el-icon-setting"}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("查看怪兽")]),n("el-dropdown-item",[e._v("新增土豆")]),n("el-dropdown-item",[e._v("删除西红柿")])],1)],1),n("span",[e._v("18580557309")])],1)]),n("el-main",[e._t("default")],2)],1)],1)],1)},s=[],u={data:function(){return{isCollapse:!1}}},c=u,l=(n("2b4f"),n("6691")),f=Object(l["a"])(c,i,s,!1,null,null,null),p=f.exports,d={name:"App",components:{Layout:p}},m=d,h=(n("5c0b"),Object(l["a"])(m,o,a,!1,null,null,null)),v=h.exports,g=n("c478"),b=function(){return n.e("home").then(n.bind(null,"6511"))},y=function(){return n.e("about").then(n.bind(null,"754b"))};r["default"].use(g["a"]);var w="".concat("/"),O=new g["a"]({mode:"history",base:w,routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:y},{path:"*",redirect:"/"}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});O.beforeEach(function(e,t,n){n()});var j,_=O,x=(n("2338"),n("a506")),C=n("591a"),P="SET_USER_INFO",S="SET_RANK",E=Object(x["a"])({},P,function(e,t){e.userInfo=t}),k={changeUserInfo:function(e,t){var n=e.commit,r="this is ".concat(t);n(P,r)}},N=(n("63ff"),n("e71e")),D=n("2934"),M={namespaced:!0,state:{userInfo:"123",rank:{}},getters:{getUserInfo:function(e){var t=e.userInfo;return"".concat(t," 111")}},actions:{changeUserInfo:function(e,t){var n=e.commit,r="this is ".concat(t);n(P,r)},getRank:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Object(D["a"])(n);case 4:o=e.sent,o&&r(S,o),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}()},mutations:(j={},Object(x["a"])(j,P,function(e,t){e.userInfo=t}),Object(x["a"])(j,S,function(e,t){e.rank=t}),j)},T={user:M};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){Object(x["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}r["default"].use(C["a"]);var L=F({},T),U=new C["a"].Store({state:{groups:[1]},modules:L,actions:k,mutations:E,getters:{getGroups:function(e){return e.groups}}}),A=n("04ec"),Y={name:"我的名字是 {name}"},$={home:Y},B={name:"My name is {name}"},R={home:B},H={"en-US":R,"zh-CN":$};n("0eec"),n("34a3"),n("7c56"),n("3c6b"),n("0857"),n("7bc1"),n("55a0");r["default"].use(A["a"]);navigator.language||navigator.browserLanguage;var q=new A["a"]({locale:"zh-CN",messages:H}),z=q,J=n("9090"),K=(n("d4d5"),n("fce8")),G=n.n(K),Q=function(e){return e=e.toString(),e?13===e.length?G()(Number(e)).format("YYYY-MM-DD HH:mm:ss"):G.a.unix(Number(e)).format("YYYY-MM-DD HH:mm:ss"):"-"},V=function(e){return e=e.toString(),e.substr(0,3)+"****"+e.substr(7,11)},W=function(e){if(e)return e.toString().replace(/\s/g,"").replace(/(.{4})/g,"$1 ")},X=function(e){var t=(e||0).toString(),n="";while(t.length>3)n=","+t.slice(-3)+n,t=t.slice(0,t.length-3);return t&&(n=t+n),n},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=parseFloat(e);if(isNaN(n))return!1;n=Math.round(e*Math.pow(10,t))/Math.pow(10,t);var r=n.toString(),o=r.indexOf(".");o<0&&(o=r.length,r+=".");while(r.length<=o+t)r+="0";return r},ee=function(e){var t=Object(J["a"])(e);if("number"===t||"string"===t){e=parseInt(e);var n=Math.floor(e/3600);e-=3600*n;var r=Math.floor(e/60);return e-=60*r,n+":"+("0"+r).slice(-2)+":"+("0"+e).slice(-2)}return"0:00:00"},te={timeFilter:Q,formatPhone:V,formatBank:W,toThousands:X,formatFloat:Z,realFormatSecond:ee},ne=n("7893"),re=n.n(ne),oe=(n("610a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"m-toast"},["success"===e.type?n("span",[e._v("成功")]):e._e(),e._v("\n        "+e._s(e.message)+"\n    ")])])}),ae=[],ie={data:function(){return{show:!1,message:"",type:""}}},se=ie,ue=(n("3e54"),Object(l["a"])(se,oe,ae,!1,null,"41977aea",null)),ce=ue.exports,le={install:function(e){var t=e.extend(ce),n=new t;n.$mount(),document.body.appendChild(n.$el),e.prototype.$toast=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;n.message=e,n.type=t,n.show=!0,setTimeout(function(){n.show=!1},r)}}},fe=le;r["default"].use(re.a),r["default"].use(fe),r["default"].config.productionTip=!1,Object.keys(te).forEach(function(e){r["default"].filter(e,te[e])}),new r["default"]({router:_,store:U,i18n:z,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("3673"),o=n.n(r);o.a}});