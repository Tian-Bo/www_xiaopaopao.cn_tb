(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"20d6":function(t,e,i){"use strict";var n=i("5ca1"),a=i("0a49")(6),s="findIndex",r=!0;s in[]&&Array(1)[s](function(){r=!1}),n(n.P+n.F*r,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")(s)},"2b80":function(t,e,i){"use strict";var n=i("bf1f"),a=i.n(n);a.a},"3d43":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.content[data-v-1573a368],uni-page-body[data-v-1573a368]{height:100%;background-color:#f8f8f8}.content[data-v-1573a368]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.left-aside[data-v-1573a368]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?200?%;height:100%;background-color:#fff}.f-item[data-v-1573a368]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#606266;position:relative}.f-item.active[data-v-1573a368]{color:#fa436a;background:#f8f8f8}.f-item.active[data-v-1573a368]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);height:%?36?%;width:%?8?%;background-color:#fa436a;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-1573a368]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-1573a368]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?70?%;padding-top:%?8?%;font-size:%?28?%;color:#303133}.t-list[data-v-1573a368]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-1573a368]:after{content:"";-webkit-box-flex:99;-webkit-flex:99;-ms-flex:99;flex:99;height:0}.t-item[data-v-1573a368]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:%?176?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.t-item uni-image[data-v-1573a368]{width:%?140?%;height:%?140?%}body.?%PAGE?%[data-v-1573a368]{background-color:#f8f8f8}',""])},"45b0":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":""}},t._l(t.flist,function(e){return i("v-uni-view",{key:e.id,staticClass:"f-item b-b",class:{active:e.id===t.currentId},on:{click:function(i){i=t.$handleEvent(i),t.tabtap(e)}}},[t._v(t._s(e.name))])}),1),i("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":"","scroll-y":"","scroll-top":t.tabScrollTop},on:{scroll:function(e){e=t.$handleEvent(e),t.asideScroll(e)}}},t._l(t.slist,function(e){return i("v-uni-view",{key:e.id,staticClass:"s-list",attrs:{id:"main-"+e.id}},[i("v-uni-text",{staticClass:"s-item"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"t-list"},t._l(t.tlist,function(n){return n.pid===e.id?i("v-uni-view",{key:n.id,staticClass:"t-item",on:{click:function(i){i=t.$handleEvent(i),t.navToList(e.id,n.id)}}},[i("v-uni-image",{attrs:{src:n.picture}}),i("v-uni-text",[t._v(t._s(n.name))])],1):t._e()}),1)],1)}),1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"53df":function(t,e,i){"use strict";i.r(e);var n=i("fe12"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},bf1f:function(t,e,i){var n=i("3d43");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("706cf750",n,!0,{sourceMap:!1,shadowMode:!1})},ce01:function(t,e,i){"use strict";i.r(e);var n=i("45b0"),a=i("53df");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("2b80");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"1573a368",null);e["default"]=l.exports},fe12:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("20d6"),i("ac6a"),i("96cf");var a=n(i("3b8d")),s={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:e=t.sent,e.forEach(function(t){t.pid?t.picture?i.tlist.push(t):i.slist.push(t):i.flist.push(t)});case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),tabtap:function(t){this.sizeCalcState||this.calcSize(),this.currentId=t.id;var e=this.slist.findIndex(function(e){return e.pid===t.id});this.tabScrollTop=this.slist[e].top},asideScroll:function(t){this.sizeCalcState||this.calcSize();var e=t.detail.scrollTop,i=this.slist.filter(function(t){return t.top<=e}).reverse();i.length>0&&(this.currentId=i[0].pid)},calcSize:function(){var t=0;this.slist.forEach(function(e){var i=uni.createSelectorQuery().select("#main-"+e.id);i.fields({size:!0},function(i){e.top=t,t+=i.height,e.bottom=t}).exec()}),this.sizeCalcState=!0},navToList:function(t,e){uni.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(t,"&tid=").concat(e)})}}};e.default=s}}]);