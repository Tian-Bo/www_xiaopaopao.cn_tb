(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"03be":function(t,e,i){"use strict";i.r(e);var n=i("4a38"),a=i("0b8a");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("0fe4");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"8d7be096",null);e["default"]=r.exports},"0594":function(t,e,i){var n=i("76e7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2f438efd",n,!0,{sourceMap:!1,shadowMode:!1})},"0b8a":function(t,e,i){"use strict";i.r(e);var n=i("2960"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"0fe4":function(t,e,i){"use strict";var n=i("8c18"),a=i.n(n);a.a},2960:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n={data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{}}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1},shareList:{type:Array,default:function(){return[]}}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{toggleMask:function(){var t=this;if(1!=this.timer){if(this.timer=1,setTimeout(function(){t.timer=0},500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout(function(){t.show=!1,t.hasTabbar&&uni.showTabBar()},200);this.show=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout(function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"},10)}}):setTimeout(function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"},10)}},stopPrevent:function(){},shareToFriend:function(t){this.$api.msg("分享给".concat(t)),this.toggleMask()}}};e.default=n},3878:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":"true",circular:"true",interval:"3000",duration:"700"}},t._l(t.data.imgList,function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{class:e.loaded,attrs:{src:e.src,mode:"aspectFill"},on:{load:function(e){e=t.$handleEvent(e),t.imageOnLoad("imgList",n)}}})],1)],1)}),1),i("v-uni-view",{staticClass:"scroll-view-wrapper"},[i("v-uni-scroll-view",{staticClass:"episode-panel",class:{Skeleton:!t.loaded},attrs:{"scroll-x":""}},t._l(t.data.episodeList,function(e,n){return i("v-uni-view",{key:n,class:{current:t.currentEpd===e},on:{click:function(e){e=t.$handleEvent(e),t.changeEpd(n)}}},[t._v(t._s(e))])}),1)],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",{class:{Skeleton:!t.loaded}},[t._v(t._s(t.data.title))]),i("v-uni-text",{class:{Skeleton:!t.loaded}},[t._v(t._s(t.data.title2))])],1),i("v-uni-text",{staticClass:"yticon icon-xia"})],1),i("v-uni-view",{staticClass:"actions"},[i("v-uni-text",{staticClass:"yticon icon-fenxiang2",on:{click:function(e){e=t.$handleEvent(e),t.share(e)}}}),i("v-uni-text",{staticClass:"yticon icon-Group-"}),i("v-uni-text",{staticClass:"yticon icon-shoucang",class:{active:t.data.favorite},on:{click:function(e){e=t.$handleEvent(e),t.favorite(e)}}})],1),i("v-uni-view",{staticClass:"guess"},[i("v-uni-view",{staticClass:"section-tit"},[t._v("猜你喜欢")]),i("v-uni-view",{staticClass:"guess-list"},t._l(t.data.guessList,function(e,n){return i("v-uni-view",{key:n,staticClass:"guess-item"},[i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{class:e.loaded,attrs:{src:e.src,mode:"aspectFill"},on:{load:function(e){e=t.$handleEvent(e),t.imageOnLoad("guessList",n)}}})],1),i("v-uni-text",{staticClass:"title clamp",class:{Skeleton:!t.loaded}},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"clamp",class:{Skeleton:!t.loaded}},[t._v(t._s(e.title2))])],1)}),1)],1),i("v-uni-view",{staticClass:"evalution"},[i("v-uni-view",{staticClass:"section-tit"},[t._v("评论")]),i("v-uni-view",{staticClass:"eva-list",class:{Skeleton:!t.loaded}},t._l(t.data.evaList,function(e,n){return i("v-uni-view",{key:n,staticClass:"eva-item"},[i("v-uni-image",{attrs:{src:e.src,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"eva-right"},[i("v-uni-text",[t._v(t._s(e.nickname))]),i("v-uni-text",[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"zan-box"},[i("v-uni-text",[t._v(t._s(e.zan))]),i("v-uni-text",{staticClass:"yticon icon-shoucang"})],1),i("v-uni-text",{staticClass:"content"},[t._v(t._s(e.content))])],1)],1)}),1)],1),i("share",{ref:"share",attrs:{contentHeight:580,shareList:t.shareList}})],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"4a38":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(e){e=t.$handleEvent(e),t.toggleMask(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[i("v-uni-view",{staticClass:"mask-content",style:[{height:t.config.height,transform:t.transform}],on:{click:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[i("v-uni-scroll-view",{staticClass:"view-content",attrs:{"scroll-y":""}},[i("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),i("v-uni-view",{staticClass:"share-list"},t._l(t.shareList,function(e,n){return i("v-uni-view",{key:n,staticClass:"share-item",on:{click:function(i){i=t.$handleEvent(i),t.shareToFriend(e.text)}}},[i("v-uni-image",{attrs:{src:e.icon,mode:""}}),i("v-uni-text",[t._v(t._s(e.text))])],1)}),1)],1),i("v-uni-view",{staticClass:"bottom b-t",on:{click:function(e){e=t.$handleEvent(e),t.toggleMask(e)}}},[t._v("取消")])],1)],1):t._e()},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"76e7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-0041f10b]{background:#f8f8f8}.carousel[data-v-0041f10b]{height:200px}.carousel .image-wrapper[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;width:100%;height:100%;overflow:hidden}.carousel .image-wrapper uni-image[data-v-0041f10b]{width:100%;height:100%}.scroll-view-wrapper[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?90?%;padding:%?20?% 0 %?20?% %?40?%;background:#fff}.episode-panel[data-v-0041f10b]{white-space:nowrap;width:100%}.episode-panel uni-view[data-v-0041f10b]{display:inline-block;margin-right:%?30?%;width:%?56?%;font-size:%?32?%;color:#606266}.episode-panel uni-view.current[data-v-0041f10b]{color:#07a7a7}.info[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?10?% %?40?%;background:#fff}.info .title[data-v-0041f10b]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:%?36?%;color:#303133}.info .title uni-text[data-v-0041f10b]:last-child{font-size:%?24?%;color:#909399;margin-top:%?4?%}.info .title uni-text:last-child.Skeleton[data-v-0041f10b]{width:%?220?%}.info .yticon[data-v-0041f10b]{font-size:%?44?%;color:#606266;margin:0 %?10?% 0 %?30?%}.actions[data-v-0041f10b]{padding:%?10?% %?28?%;background:#fff}.actions .yticon[data-v-0041f10b]{font-size:%?46?%;color:#606266;padding:%?10?% %?12?%}.actions .yticon.active[data-v-0041f10b]{color:#ff4443}.actions .yticon[data-v-0041f10b]:nth-child(2){font-size:%?50?%}.section-tit[data-v-0041f10b]{font-size:%?30?%;color:#303133;margin-bottom:%?30?%;text-align:center}.guess[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?30?% %?40?% %?10?%;margin-top:%?16?%;background:#fff}.guess-list[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.guess-item[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;min-width:40%;margin-right:%?26?%;padding-bottom:%?40?%}.guess-item[data-v-0041f10b]:nth-child(2n){margin-right:0}.guess-item uni-image[data-v-0041f10b]{width:100%;height:%?200?%;border-radius:%?10?%}.guess-item uni-text[data-v-0041f10b]{font-size:%?24?%;color:#909399}.guess-item uni-text.Skeleton[data-v-0041f10b]{width:%?180?%}.guess-item uni-text.Skeleton.title[data-v-0041f10b]{width:%?140?%}.guess-item uni-text.title[data-v-0041f10b]{font-size:%?30?%;color:#303133;margin-top:%?16?%;margin-bottom:%?8?%}.evalution[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#fff;margin-top:%?16?%;padding:%?40?% 0}.eva-item[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% %?40?%}.eva-item uni-image[data-v-0041f10b]{width:%?60?%;height:%?60?%;border-radius:50px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:%?24?%}.eva-right[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?26?%;color:#909399;position:relative}.eva-right .zan-box[data-v-0041f10b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:base-line;-webkit-align-items:base-line;-ms-flex-align:base-line;align-items:base-line;position:absolute;top:%?10?%;right:%?10?%}.eva-right .zan-box .yticon[data-v-0041f10b]{margin-left:%?8?%}.eva-right .content[data-v-0041f10b]{font-size:%?28?%;color:#333;padding-top:%?20?%}body.?%PAGE?%[data-v-0041f10b]{background:#f8f8f8}',""])},"77f6":function(t,e,i){"use strict";i.r(e);var n=i("3878"),a=i("b094");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("c060");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"0041f10b",null);e["default"]=r.exports},"8c18":function(t,e,i){var n=i("d44e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("c9f8743c",n,!0,{sourceMap:!1,shadowMode:!1})},b094:function(t,e,i){"use strict";i.r(e);var n=i("c9db"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},c060:function(t,e,i){"use strict";var n=i("0594"),a=i.n(n);a.a},c9db:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("3b8d")),s=n(i("03be")),o={components:{share:s.default},data:function(){return{loaded:!1,currentEpd:1,data:{guessList:[{},{},{},{}]},shareList:[]}},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("detailData");case 2:return e=t.sent,t.next=5,this.$api.json("shareList");case 5:i=t.sent,this.loaded=!0,this.data=e,this.shareList=i,uni.setNavigationBarTitle({title:e.title});case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{imageOnLoad:function(t,e){this.$set(this.data[t][e],"loaded","loaded")},changeEpd:function(t){var e=this.data.episodeList,i=e[t];this.$api.msg("切换到第".concat(i,"项")),this.currentEpd=i},share:function(){this.$refs.share.toggleMask()},favorite:function(){this.data.favorite=!this.data.favorite}},onBackPress:function(){if(this.$refs.share.show)return this.$refs.share.toggleMask(),!0}};e.default=o},d44e:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.mask[data-v-8d7be096]{position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;z-index:998;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.mask .bottom[data-v-8d7be096]{position:absolute;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;height:%?90?%;background:#fff;z-index:9;font-size:%?30?%;color:#303133}.mask-content[data-v-8d7be096]{width:100%;height:%?580?%;-webkit-transition:.3s;-o-transition:.3s;transition:.3s;background:#fff}.mask-content.has-bottom[data-v-8d7be096]{padding-bottom:%?90?%}.mask-content .view-content[data-v-8d7be096]{height:100%}.share-header[data-v-8d7be096]{height:%?110?%;font-size:%?30?%;color:font-color-dark;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:%?10?%}.share-header[data-v-8d7be096]:after,.share-header[data-v-8d7be096]:before{content:"";width:%?240?%;heighg:0;border-top:1px solid #e4e7ed;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);margin-right:%?30?%}.share-header[data-v-8d7be096]:after{margin-left:%?30?%;margin-right:0}.share-list[data-v-8d7be096]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.share-item[data-v-8d7be096]{min-width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?180?%}.share-item uni-image[data-v-8d7be096]{width:%?80?%;height:%?80?%;margin-bottom:%?16?%}.share-item uni-text[data-v-8d7be096]{font-size:%?28?%;color:#606266}',""])}}]);