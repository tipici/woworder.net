<<<<<<< HEAD:_nuxt/31e006ca01150e43c7e3.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{251:function(t,e,n){"use strict";var r=n(11),o=n(158)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(111)("find")},254:function(t,e,n){var content=n(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("f2d567d0",content,!0,{sourceMap:!1})},255:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},256:function(t,e,n){var content=n(319);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("95120d4a",content,!0,{sourceMap:!1})},267:function(t,e,n){var r=n(310),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},268:function(t,e,n){var r=n(267).Symbol;t.exports=r},304:function(t,e,n){n(9),n(4),n(5),n(3),n(7);var r=n(16),o=n(17);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,d=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,m=data.attrs,x=void 0===m?{}:m,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},x)},y),f.concat([n("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),n("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),n("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),n("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),n("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),n("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})]))}}},305:function(t,e,n){"use strict";var r=n(254);n.n(r).a},306:function(t,e,n){(e=n(35)(!1)).push([t.i,".header_mobile_aside[data-v-17f7f7b0]{top:4rem;bottom:4rem;transform:translateX(calc(-100% - 1px));transition-property:transform;transition-duration:.35s;transition-timing-function:cubic-bezier(.4,0,.6,1)}@media (min-width:1024px){.header_mobile_aside[data-v-17f7f7b0]{top:6rem}}.header_mobile_aside--open[data-v-17f7f7b0]{transform:translateX(0);transition-delay:0s}.header_mobile_aside--open .header_mobile_aside_group[data-v-17f7f7b0]{transform:translateX(0)}.content-wrapper[data-v-17f7f7b0]{margin-left:auto;padding-left:1rem}@media (min-width:640px){.content-wrapper[data-v-17f7f7b0]{max-width:320px}}@media (min-width:768px){.content-wrapper[data-v-17f7f7b0]{max-width:384px}}button[data-v-17f7f7b0]{outline:none}.bookmark-button[data-v-17f7f7b0]{right:0;transform:translateX(100%);border-radius:0 9999px 9999px 0}.bookmark-button[data-v-17f7f7b0],.inner-button[data-v-17f7f7b0]{top:1rem;box-shadow:4px 2px 4px rgba(0,0,0,.101562)}.inner-button[data-v-17f7f7b0]{right:1rem;border-radius:100%}",""]),t.exports=e},307:function(t,e,n){var r=n(308),o=n(255);t.exports=function(t,e,n){var c=!0,l=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(c="leading"in n?!!n.leading:c,l="trailing"in n?!!n.trailing:l),r(t,e,{leading:c,maxWait:e,trailing:l})}},308:function(t,e,n){var r=n(255),o=n(309),c=n(311),l=Math.max,f=Math.min;t.exports=function(t,e,n){var d,h,v,m,x,y,w=0,k=!1,_=!1,O=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function C(time){var e=d,n=h;return d=h=void 0,w=time,m=t.apply(n,e)}function j(time){return w=time,x=setTimeout(T,e),k?C(time):m}function $(time){var t=time-y;return void 0===y||t>=e||t<0||_&&time-w>=v}function T(){var time=o();if($(time))return S(time);x=setTimeout(T,function(time){var t=e-(time-y);return _?f(t,v-(time-w)):t}(time))}function S(time){return x=void 0,O&&d?C(time):(d=h=void 0,m)}function P(){var time=o(),t=$(time);if(d=arguments,h=this,y=time,t){if(void 0===x)return j(y);if(_)return clearTimeout(x),x=setTimeout(T,e),C(y)}return void 0===x&&(x=setTimeout(T,e)),m}return e=c(e)||0,r(n)&&(k=!!n.leading,v=(_="maxWait"in n)?l(c(n.maxWait)||0,e):v,O="trailing"in n?!!n.trailing:O),P.cancel=function(){void 0!==x&&clearTimeout(x),w=0,d=y=h=x=void 0},P.flush=function(){return void 0===x?m:S(o())},P}},309:function(t,e,n){var r=n(267);t.exports=function(){return r.Date.now()}},310:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(27))},311:function(t,e,n){var r=n(255),o=n(312),c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=f.test(t);return n||d.test(t)?h(t.slice(2),n?2:8):l.test(t)?NaN:+t}},312:function(t,e,n){var r=n(313),o=n(316);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},313:function(t,e,n){var r=n(268),o=n(314),c=n(315),l=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?o(t):c(t)}},314:function(t,e,n){var r=n(268),o=Object.prototype,c=o.hasOwnProperty,l=o.toString,f=r?r.toStringTag:void 0;t.exports=function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(t){}var o=l.call(t);return r&&(e?t[f]=n:delete t[f]),o}},315:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},316:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},317:function(t,e,n){n(9),n(4),n(5),n(3),n(7);var r=n(16),o=n(17);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,d=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,m=data.attrs,x=void 0===m?{}:m,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["fill-current",d,h],style:[style,v],attrs:Object.assign({width:"14",height:"8",xmlns:"http://www.w3.org/2000/svg"},x)},y),f.concat([n("path",{attrs:{d:"M6.35416667 7.825L.1875 1.70833333C-.00833333 1.5125-.00833333 1.19583333.1875 1l.825-.825c.19583333-.19583333.5125-.19583333.70833333 0l4.9875 4.9375L11.6958333.175c.1958334-.19583333.5125-.19583333.7083334 0l.825.825c.1958333.19583333.1958333.5125 0 .70833333L7.0625 7.825c-.19583333.19583333-.5125.19583333-.70833333 0z","fill-rule":"evenodd"}})]))}}},318:function(t,e,n){"use strict";var r=n(256);n.n(r).a},319:function(t,e,n){(e=n(35)(!1)).push([t.i,".current-link[data-v-087664c7]{color:#00c58e}",""]),t.exports=e},342:function(t,e,n){"use strict";n.r(e);var r=n(304),o=n.n(r),c=n(112),l=n.n(c),f={components:{ListIcon:o.a,TimesIcon:l.a},data:function(){return{show:!1}},computed:{path:function(){return"/"===this.$route.path.slice(-1)?this.$route.path.slice(0,-1):this.$route.path},locale:function(){return"/"+this.$route.params.section},sublinks:function(){return this.$store.state.menu[this.$route.params.section]||[]}},methods:{clickOutsideHandler:function(){this.show&&(this.show=!1)}}},d=(n(305),n(6)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickOutsideHandler,expression:"clickOutsideHandler"}],staticClass:"header_mobile_aside shadow-nuxt block lg:hidden fixed left-0 z-20 w-full sm:w-1/2",class:{"header_mobile_aside--open":t.show}},[n("div",{staticClass:"mx-auto h-full light:bg-light-surface dark:bg-dark-surface transition-colors duration-300 ease-linear"},[n("div",{staticClass:"content-wrapper h-full relative"},[n("div",{staticClass:"overflow-y-auto h-full pt-4"},t._l(t.sublinks,(function(e,r){return n("transition-group",{key:r,staticClass:"header_mobile_aside_group",attrs:{tag:"div",name:"list"}},[n("h3",{key:"title-"+r,staticClass:"uppercase text-gray-500 pb-2"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("ul",{key:"list-"+r,staticClass:"pb-6"},t._l(e.links,(function(e){return n("li",{key:e.to,staticClass:"py-2"},[n("NuxtLink",{staticClass:"block dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear",class:{"text-nuxt-lightgreen":t.path===t.locale+e.to},attrs:{to:t.locale+e.to,exact:""},nativeOn:{click:function(e){t.show=!1}}},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)})),0)])})),1),t._v(" "),n("button",{staticClass:"inner-button sm:hidden absolute h-10 w-10 flex items-center justify-center text-nuxt-gray bg-gray-200 dark:bg-dark-elevatedSurface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear",on:{click:function(e){t.show=!1}}},[n("TimesIcon",{staticClass:"block h-5 fill-current transition-colors duration-300 ease-linear"})],1)]),t._v(" "),n("button",{staticClass:"bookmark-button absolute h-10 w-10 flex items-center justify-center text-nuxt-gray bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear",on:{click:function(e){t.show=!t.show}}},[t.show?n("TimesIcon",{staticClass:"block h-5 fill-current transition-colors duration-300 ease-linear"}):n("ListIcon",{staticClass:"block text-nuxt-gray dark:text-dark-onSurfaceSecondary stroke-current transition-colors duration-300 ease-linear"})],1)])])}),[],!1,null,"17f7f7b0",null);e.default=component.exports},343:function(t,e,n){"use strict";n.r(e);n(110),n(251),n(26);var r=n(307),o=n.n(r),c=n(112),l=n.n(c),f=n(317),d={components:{CaretDownIcon:n.n(f).a,TimesIcon:l.a},data:function(){return{current:0,setInter:null,showNav:!1}},computed:{list:function(){return this.$store.state.menu[this.$route.params.section]||[]},visible:function(){return this.$store.state.visibleAffix},path:function(){return"/"===this.$route.path.slice(-1)?this.$route.path.slice(0,-1):this.$route.path},menu:function(){return"/"+this.$route.params.section},breadcrumb:function(){var t=this,e=null;return this.list.forEach((function(n){n.links.forEach((function(link){(t.$route.params.slug&&link.to==="/"+t.$route.params.slug||!t.$route.params.slug&&(""===link.to||"/"===link.to))&&(e={group:n.title,title:link.name})}))})),e},contents:function(){var t=this,e=[];return this.list.forEach((function(n){if(Array.isArray(n.links)&&!e.length){var r=n.links.find((function(link){return t.path===t.menu+link.to}));r&&r.contents&&r.contents.forEach((function(content){var t=document.getElementById(content.to.slice(1));t&&e.push(t.offsetTop)}))}})),e}},watch:{"$route.fullPath":"hashChanged"},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("scroll",o()((function(){return t.scrolled()}),100)),t.$route.hash.length&&t.scrollTo(t.$route.hash),t.scrolled()}))},methods:{hashChanged:function(t,e){var n=this;this.showNav=!1,t=t.split("#"),e=e.split("#"),this.$nextTick((function(){return n.scrollTo(n.$route.hash)}))},toggle:function(){this.$store.commit("toggle","visibleAffix")},scrolled:function(){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,e=document.documentElement,n=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),r=this.contents.find((function(e){return e>n+t/2}));this.current=(r?this.contents.indexOf(r):this.contents.length)-1},scrollTo:function(t){var e=this;this._scrolling||(this._scrolling=!0,this.$store.state.visibleAffix&&this.toggle(),t!==this.$route.hash&&this.$router.push(this.$route.fullPath.split("#")[0]+t),this.$nextTick((function(){var n=document.getElementById(t.slice(1));if(n){var r=n.offsetTop-(window.outerWidth<1024?90:120),o=document.documentElement,c=(window.pageYOffset||o.scrollTop)-(o.clientTop||0),l=(r>c?r-c:c-r)/25,i=0;window.clearInterval(e.setInter),e.setInter=window.setInterval((function(){c=r>c?c+l:c-l,window.scrollTo(0,c),25===++i&&(e._scrolling=!1,window.clearInterval(e.setInter))}),10)}else e._scrolling=!1})))}}},h=(n(318),n(6)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block",class:{"opacity-25":t.$store.state.focusMode}},[n("div",{staticClass:"h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"},[t.breadcrumb?n("a",{staticClass:"block text-left p-4 lg:hidden",attrs:{href:"#nav"},on:{click:function(e){e.preventDefault(),t.showNav=!t.showNav}}},[t.showNav?n("TimesIcon",{staticClass:"float-right mt-1 mr-1 h-5"}):n("CaretDownIcon",{staticClass:"float-right mt-2 mr-1"}),t._v(" "),n("span",{staticClass:"uppercase text-gray-500 ml-1"},[t._v(t._s(t.breadcrumb.group)+" :")]),t._v(" "+t._s(t.breadcrumb.title)+"\n    ")],1):t._e(),t._v(" "),n("nav",{staticClass:"pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)",class:{hidden:!t.showNav}},[n("p",{staticClass:"uppercase font-bold pb-6"},[t._v("\n        "+t._s(t.$store.state.lang.text.version)+" "),n("span",{staticClass:"text-nuxt-lightgreen"},[t._v(t._s(t.$store.state.docVersion))])]),t._v(" "),t._l(t.list,(function(e,r){return[n("h3",{key:"title-"+r,staticClass:"uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("ul",{key:"list-"+r,staticClass:"pb-8"},t._l(e.links,(function(link){return n("li",{key:link.to,staticClass:"py-2"},[n("NuxtLink",{staticClass:"text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear",class:{"current-link":t.path===t.menu+link.to},attrs:{to:t.menu+link.to,exact:""}},[t._v("\n              "+t._s(link.name)+"\n            ")]),t._v(" "),t.path===t.menu+link.to&&link.contents?n("ul",{staticClass:"pl-2 py-1"},t._l(link.contents,(function(content,i){return n("li",{key:content.to,staticClass:"py-1 text-sm"},[n("a",{staticClass:"text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear",class:{"current-link":t.current===i},attrs:{href:t.menu+link.to+content.to},on:{click:function(e){return e.preventDefault(),t.scrollTo(content.to)}}},[t._v("\n                  "+t._s(content.name)+"\n                ")])])})),0):t._e()],1)})),0)]}))],2)])])}),[],!1,null,"087664c7",null);e.default=component.exports},359:function(t,e,n){"use strict";n.r(e);var r={validate:function(t){var e=t.store,n=t.params;return void 0!==e.state.menu[n.section]}},o=n(6),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shadow-nuxt"},[e("div",{staticClass:"container mx-auto px-4 lg:flex pb-12"},[e("TheMobileAsideNav"),this._v(" "),e("TheAsideNav",{staticClass:"hidden lg:block"}),this._v(" "),e("div",{staticClass:"min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"},[e("nuxt-child")],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheMobileAsideNav:n(342).default,TheAsideNav:n(343).default})}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{253:function(t,e,n){"use strict";var r=n(11),o=n(160)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(112)("find")},256:function(t,e,n){var content=n(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("3f821185",content,!0,{sourceMap:!1})},257:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},258:function(t,e,n){var content=n(319);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("00410560",content,!0,{sourceMap:!1})},269:function(t,e,n){var r=n(310),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},270:function(t,e,n){var r=n(269).Symbol;t.exports=r},304:function(t,e,n){n(9),n(5),n(6),n(3),n(7);var r=n(16),o=n(17);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,d=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,m=data.attrs,x=void 0===m?{}:m,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},x)},y),f.concat([n("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),n("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),n("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),n("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),n("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),n("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})]))}}},305:function(t,e,n){"use strict";var r=n(256);n.n(r).a},306:function(t,e,n){(e=n(30)(!1)).push([t.i,".header_mobile_aside[data-v-4979fc10]{top:4rem;bottom:4rem;transform:translateX(calc(-100% - 1px));transition-property:transform;transition-duration:.35s;transition-timing-function:cubic-bezier(.4,0,.6,1)}@media (min-width:1024px){.header_mobile_aside[data-v-4979fc10]{top:6rem}}.header_mobile_aside--open[data-v-4979fc10]{transform:translateX(0);transition-delay:0s}.header_mobile_aside--open .header_mobile_aside_group[data-v-4979fc10]{transform:translateX(0)}.content-wrapper[data-v-4979fc10]{margin-left:auto;padding-left:1rem}@media (min-width:640px){.content-wrapper[data-v-4979fc10]{max-width:320px}}@media (min-width:768px){.content-wrapper[data-v-4979fc10]{max-width:384px}}button[data-v-4979fc10]{outline:none}.bookmark-button[data-v-4979fc10]{right:0;transform:translateX(100%);border-radius:0 9999px 9999px 0}.bookmark-button[data-v-4979fc10],.inner-button[data-v-4979fc10]{top:1rem;box-shadow:4px 2px 4px rgba(0,0,0,.101562)}.inner-button[data-v-4979fc10]{right:1rem;border-radius:100%}",""]),t.exports=e},307:function(t,e,n){var r=n(308),o=n(257);t.exports=function(t,e,n){var c=!0,l=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(c="leading"in n?!!n.leading:c,l="trailing"in n?!!n.trailing:l),r(t,e,{leading:c,maxWait:e,trailing:l})}},308:function(t,e,n){var r=n(257),o=n(309),c=n(311),l=Math.max,f=Math.min;t.exports=function(t,e,n){var d,h,v,m,x,y,w=0,k=!1,_=!1,O=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function C(time){var e=d,n=h;return d=h=void 0,w=time,m=t.apply(n,e)}function j(time){return w=time,x=setTimeout(T,e),k?C(time):m}function $(time){var t=time-y;return void 0===y||t>=e||t<0||_&&time-w>=v}function T(){var time=o();if($(time))return S(time);x=setTimeout(T,function(time){var t=e-(time-y);return _?f(t,v-(time-w)):t}(time))}function S(time){return x=void 0,O&&d?C(time):(d=h=void 0,m)}function P(){var time=o(),t=$(time);if(d=arguments,h=this,y=time,t){if(void 0===x)return j(y);if(_)return clearTimeout(x),x=setTimeout(T,e),C(y)}return void 0===x&&(x=setTimeout(T,e)),m}return e=c(e)||0,r(n)&&(k=!!n.leading,v=(_="maxWait"in n)?l(c(n.maxWait)||0,e):v,O="trailing"in n?!!n.trailing:O),P.cancel=function(){void 0!==x&&clearTimeout(x),w=0,d=y=h=x=void 0},P.flush=function(){return void 0===x?m:S(o())},P}},309:function(t,e,n){var r=n(269);t.exports=function(){return r.Date.now()}},310:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(27))},311:function(t,e,n){var r=n(257),o=n(312),c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=f.test(t);return n||d.test(t)?h(t.slice(2),n?2:8):l.test(t)?NaN:+t}},312:function(t,e,n){var r=n(313),o=n(316);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},313:function(t,e,n){var r=n(270),o=n(314),c=n(315),l=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?o(t):c(t)}},314:function(t,e,n){var r=n(270),o=Object.prototype,c=o.hasOwnProperty,l=o.toString,f=r?r.toStringTag:void 0;t.exports=function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var r=!0}catch(t){}var o=l.call(t);return r&&(e?t[f]=n:delete t[f]),o}},315:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},316:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},317:function(t,e,n){n(9),n(5),n(6),n(3),n(7);var r=n(16),o=n(17);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,d=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,m=data.attrs,x=void 0===m?{}:m,y=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["fill-current",d,h],style:[style,v],attrs:Object.assign({width:"14",height:"8",xmlns:"http://www.w3.org/2000/svg"},x)},y),f.concat([n("path",{attrs:{d:"M6.35416667 7.825L.1875 1.70833333C-.00833333 1.5125-.00833333 1.19583333.1875 1l.825-.825c.19583333-.19583333.5125-.19583333.70833333 0l4.9875 4.9375L11.6958333.175c.1958334-.19583333.5125-.19583333.7083334 0l.825.825c.1958333.19583333.1958333.5125 0 .70833333L7.0625 7.825c-.19583333.19583333-.5125.19583333-.70833333 0z","fill-rule":"evenodd"}})]))}}},318:function(t,e,n){"use strict";var r=n(258);n.n(r).a},319:function(t,e,n){(e=n(30)(!1)).push([t.i,".current-link[data-v-81f87d28]{color:#00c58e}",""]),t.exports=e},342:function(t,e,n){"use strict";n.r(e);var r=n(304),o=n.n(r),c=n(113),l=n.n(c),f={components:{ListIcon:o.a,TimesIcon:l.a},data:function(){return{show:!1}},computed:{path:function(){return"/"===this.$route.path.slice(-1)?this.$route.path.slice(0,-1):this.$route.path},locale:function(){return"/"+this.$route.params.section},sublinks:function(){return this.$store.state.menu[this.$route.params.section]||[]}},methods:{clickOutsideHandler:function(){this.show&&(this.show=!1)}}},d=(n(305),n(4)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickOutsideHandler,expression:"clickOutsideHandler"}],staticClass:"header_mobile_aside shadow-nuxt block lg:hidden fixed left-0 z-20 w-full sm:w-1/2",class:{"header_mobile_aside--open":t.show}},[n("div",{staticClass:"mx-auto h-full light:bg-light-surface dark:bg-dark-surface transition-colors duration-300 ease-linear"},[n("div",{staticClass:"content-wrapper h-full relative"},[n("div",{staticClass:"overflow-y-auto h-full pt-4"},t._l(t.sublinks,(function(e,r){return n("transition-group",{key:r,staticClass:"header_mobile_aside_group",attrs:{tag:"div",name:"list"}},[n("h3",{key:"title-"+r,staticClass:"uppercase text-gray-500 pb-2"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("ul",{key:"list-"+r,staticClass:"pb-6"},t._l(e.links,(function(e){return n("li",{key:e.to,staticClass:"py-2"},[n("NuxtLink",{staticClass:"block dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear",class:{"text-nuxt-lightgreen":t.path===t.locale+e.to},attrs:{to:t.locale+e.to,exact:""},nativeOn:{click:function(e){t.show=!1}}},[t._v("\n                "+t._s(e.name)+"\n              ")])],1)})),0)])})),1),t._v(" "),n("button",{staticClass:"inner-button sm:hidden absolute h-10 w-10 flex items-center justify-center text-nuxt-gray bg-gray-200 dark:bg-dark-elevatedSurface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear",on:{click:function(e){t.show=!1}}},[n("TimesIcon",{staticClass:"block h-5 fill-current transition-colors duration-300 ease-linear"})],1)]),t._v(" "),n("button",{staticClass:"bookmark-button absolute h-10 w-10 flex items-center justify-center text-nuxt-gray bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear",on:{click:function(e){t.show=!t.show}}},[t.show?n("TimesIcon",{staticClass:"block h-5 fill-current transition-colors duration-300 ease-linear"}):n("ListIcon",{staticClass:"block text-nuxt-gray dark:text-dark-onSurfaceSecondary stroke-current transition-colors duration-300 ease-linear"})],1)])])}),[],!1,null,"4979fc10",null);e.default=component.exports},343:function(t,e,n){"use strict";n.r(e);n(111),n(253),n(26);var r=n(307),o=n.n(r),c=n(113),l=n.n(c),f=n(317),d={components:{CaretDownIcon:n.n(f).a,TimesIcon:l.a},data:function(){return{current:0,setInter:null,showNav:!1}},computed:{list:function(){return this.$store.state.menu[this.$route.params.section]||[]},visible:function(){return this.$store.state.visibleAffix},path:function(){return"/"===this.$route.path.slice(-1)?this.$route.path.slice(0,-1):this.$route.path},menu:function(){return"/"+this.$route.params.section},breadcrumb:function(){var t=this,e=null;return this.list.forEach((function(n){n.links.forEach((function(link){(t.$route.params.slug&&link.to==="/"+t.$route.params.slug||!t.$route.params.slug&&(""===link.to||"/"===link.to))&&(e={group:n.title,title:link.name})}))})),e},contents:function(){var t=this,e=[];return this.list.forEach((function(n){if(Array.isArray(n.links)&&!e.length){var r=n.links.find((function(link){return t.path===t.menu+link.to}));r&&r.contents&&r.contents.forEach((function(content){var t=document.getElementById(content.to.slice(1));t&&e.push(t.offsetTop)}))}})),e}},watch:{"$route.fullPath":"hashChanged"},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("scroll",o()((function(){return t.scrolled()}),100)),t.$route.hash.length&&t.scrollTo(t.$route.hash),t.scrolled()}))},methods:{hashChanged:function(t,e){var n=this;this.showNav=!1,t=t.split("#"),e=e.split("#"),this.$nextTick((function(){return n.scrollTo(n.$route.hash)}))},toggle:function(){this.$store.commit("toggle","visibleAffix")},scrolled:function(){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,e=document.documentElement,n=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),r=this.contents.find((function(e){return e>n+t/2}));this.current=(r?this.contents.indexOf(r):this.contents.length)-1},scrollTo:function(t){var e=this;this._scrolling||(this._scrolling=!0,this.$store.state.visibleAffix&&this.toggle(),t!==this.$route.hash&&this.$router.push(this.$route.fullPath.split("#")[0]+t),this.$nextTick((function(){var n=document.getElementById(t.slice(1));if(n){var r=n.offsetTop-(window.outerWidth<1024?90:120),o=document.documentElement,c=(window.pageYOffset||o.scrollTop)-(o.clientTop||0),l=(r>c?r-c:c-r)/25,i=0;window.clearInterval(e.setInter),e.setInter=window.setInterval((function(){c=r>c?c+l:c-l,window.scrollTo(0,c),25===++i&&(e._scrolling=!1,window.clearInterval(e.setInter))}),10)}else e._scrolling=!1})))}}},h=(n(318),n(4)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block",class:{"opacity-25":t.$store.state.focusMode}},[n("div",{staticClass:"h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"},[t.breadcrumb?n("a",{staticClass:"block text-left p-4 lg:hidden",attrs:{href:"#nav"},on:{click:function(e){e.preventDefault(),t.showNav=!t.showNav}}},[t.showNav?n("TimesIcon",{staticClass:"float-right mt-1 mr-1 h-5"}):n("CaretDownIcon",{staticClass:"float-right mt-2 mr-1"}),t._v(" "),n("span",{staticClass:"uppercase text-gray-500 ml-1"},[t._v(t._s(t.breadcrumb.group)+" :")]),t._v(" "+t._s(t.breadcrumb.title)+"\n    ")],1):t._e(),t._v(" "),n("nav",{staticClass:"pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)",class:{hidden:!t.showNav}},[n("p",{staticClass:"uppercase font-bold pb-6"},[t._v("\n        "+t._s(t.$store.state.lang.text.version)+" "),n("span",{staticClass:"text-nuxt-lightgreen"},[t._v(t._s(t.$store.state.docVersion))])]),t._v(" "),t._l(t.list,(function(e,r){return[n("h3",{key:"title-"+r,staticClass:"uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("ul",{key:"list-"+r,staticClass:"pb-8"},t._l(e.links,(function(link){return n("li",{key:link.to,staticClass:"py-2"},[n("NuxtLink",{staticClass:"text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear",class:{"current-link":t.path===t.menu+link.to},attrs:{to:t.menu+link.to,exact:""}},[t._v("\n              "+t._s(link.name)+"\n            ")]),t._v(" "),t.path===t.menu+link.to&&link.contents?n("ul",{staticClass:"pl-2 py-1"},t._l(link.contents,(function(content,i){return n("li",{key:content.to,staticClass:"py-1 text-sm"},[n("a",{staticClass:"text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear",class:{"current-link":t.current===i},attrs:{href:t.menu+link.to+content.to},on:{click:function(e){return e.preventDefault(),t.scrollTo(content.to)}}},[t._v("\n                  "+t._s(content.name)+"\n                ")])])})),0):t._e()],1)})),0)]}))],2)])])}),[],!1,null,"81f87d28",null);e.default=component.exports},360:function(t,e,n){"use strict";n.r(e);var r={validate:function(t){var e=t.store,n=t.params;return void 0!==e.state.menu[n.section]}},o=n(4),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shadow-nuxt"},[e("div",{staticClass:"container mx-auto px-4 lg:flex pb-12"},[e("TheMobileAsideNav"),this._v(" "),e("TheAsideNav",{staticClass:"hidden lg:block"}),this._v(" "),e("div",{staticClass:"min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"},[e("nuxt-child")],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheMobileAsideNav:n(342).default,TheAsideNav:n(343).default})}}]);
>>>>>>> b4926d4078a0e9d90a1bc528efa9cf8a58de5826:_nuxt/2ce70a466c9cb2c57793.js
