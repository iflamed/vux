!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxXImg=e():t.vuxXImg=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(6)},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(3),r=n(s),i=o(7),a=n(i),c=o(2),l=n(c);e["default"]={mixins:[l["default"]],compiled:function(){(0,a["default"])()&&this.src&&this.webpSrc&&(this.src=this.webpSrc)},ready:function(){var t=this,e="vux-ximg-"+this.uuid;this.$el.setAttribute("id",e),this.$el.setAttribute("data-src",this.src),this.blazy=new r["default"]({selector:"#"+e,offset:t.offset,errorClass:t.errorClass,successClass:t.successClass,success:function(e){t.$dispatch("success",t.src,e)},error:function(e,o){t.$dispatch("error",t.src,e,o)}})},props:{src:{type:String},webpSrc:{type:String},defaultSrc:{type:String,"default":"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},errorClass:String,successClass:String,offset:{type:Number,defaut:100},"class":{type:String}},beforeDestroy:function(){this.blazy&&this.blazy.destroy()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{required:{type:Boolean,"default":!0}},created:function(){this.uuid=Math.random().toString(36).substring(3,8),this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$dispatch("change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(t,e,o){var n,s;!function(r,i){n=i,s="function"==typeof n?n.call(e,o,e,t):n,!(void 0!==s&&(t.exports=s))}(this,function(){"use strict";function t(t){var o=t._util;o.elements=u(t.options.selector),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,t.options.container&&A(t.options.container,function(t){d(t,"scroll",o.validateT)}),d(window,"resize",o.saveViewportOffsetT),d(window,"resize",o.validateT),d(window,"scroll",o.validateT)),e(t)}function e(t){for(var e=t._util,n=0;n<e.count;n++){var s=e.elements[n];(o(s)||c(s,t.options.successClass))&&(t.load(s),e.elements.splice(n,1),e.count--,n--)}0===e.count&&t.destroy()}function o(t){var e=t.getBoundingClientRect();return e.right>=g.left&&e.bottom>=g.top&&e.left<=g.right&&e.top<=g.bottom}function n(t,e,o){if(!c(t,o.successClass)&&(e||o.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0)){var n=t.getAttribute(h)||t.getAttribute(o.src);if(n){var u=n.split(o.separator),f=u[m&&u.length>1?1:0],v=a(t,"img");if(v||void 0===t.src){var g=new Image,w=function(){o.error&&o.error(t,"invalid"),l(t,o.errorClass),p(g,"error",w),p(g,"load",x)},x=function(){if(v){r(t,f),i(t,y,o.srcset);var e=t.parentNode;e&&a(e,"picture")&&A(e.getElementsByTagName("source"),function(t){i(t,y,o.srcset)})}else t.style.backgroundImage='url("'+f+'")';s(t,o),p(g,"load",x),p(g,"error",w)};d(g,"error",w),d(g,"load",x),r(g,f)}else r(t,f),s(t,o)}else a(t,"video")?(A(t.getElementsByTagName("source"),function(t){i(t,b,o.src)}),t.load(),s(t,o)):(o.error&&o.error(t,"missing"),l(t,o.errorClass))}}function s(t,e){l(t,e.successClass),e.success&&e.success(t),t.removeAttribute(e.src),A(e.breakpoints,function(e){t.removeAttribute(e.src)})}function r(t,e){t[b]=e}function i(t,e,o){var n=t.getAttribute(o);n&&(t[e]=n,t.removeAttribute(o))}function a(t,e){return t.nodeName.toLowerCase()===e}function c(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")!==-1}function l(t,e){c(t,e)||(t.className+=" "+e)}function u(t){for(var e=[],o=document.querySelectorAll(t),n=o.length;n--;e.unshift(o[n]));return e}function f(t){g.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,g.right=(window.innerWidth||document.documentElement.clientWidth)+t}function d(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,!1)}function p(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,!1)}function A(t,e){if(t&&e)for(var o=t.length,n=0;n<o&&e(t[n],n)!==!1;n++);}function v(t,e,o){var n=0;return function(){var s=+new Date;s-n<e||(n=s,t.apply(o,arguments))}}var h,g,m,b="src",y="srcset";return function(o){if(!document.querySelectorAll){var s=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,r){for(r=document.all,e=[],t=t.replace(/\[for\b/gi,"[htmlFor").split(","),o=t.length;o--;){for(s.addRule(t[o],"k:v"),n=r.length;n--;)r[n].currentStyle.k&&e.push(r[n]);s.removeRule(0)}return e}}var r=this,i=r._util={};i.elements=[],i.destroyed=!0,r.options=o||{},r.options.error=r.options.error||!1,r.options.offset=r.options.offset||100,r.options.success=r.options.success||!1,r.options.selector=r.options.selector||".b-lazy",r.options.separator=r.options.separator||"|",r.options.container=!!r.options.container&&document.querySelectorAll(r.options.container),r.options.errorClass=r.options.errorClass||"b-error",r.options.breakpoints=r.options.breakpoints||!1,r.options.loadInvisible=r.options.loadInvisible||!1,r.options.successClass=r.options.successClass||"b-loaded",r.options.validateDelay=r.options.validateDelay||25,r.options.saveViewportOffsetDelay=r.options.saveViewportOffsetDelay||50,r.options.srcset=r.options.srcset||"data-srcset",r.options.src=h=r.options.src||"data-src",m=window.devicePixelRatio>1,g={},g.top=0-r.options.offset,g.left=0-r.options.offset,r.revalidate=function(){t(this)},r.load=function(t,e){var o=this.options;void 0===t.length?n(t,e,o):A(t,function(t){n(t,e,o)})},r.destroy=function(){var t=this,e=t._util;t.options.container&&A(t.options.container,function(t){p(t,"scroll",e.validateT)}),p(window,"scroll",e.validateT),p(window,"resize",e.validateT),p(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},i.validateT=v(function(){e(r)},r.options.validateDelay,r),i.saveViewportOffsetT=v(function(){f(r.options.offset)},r.options.saveViewportOffsetDelay,r),f(r.options.offset),A(r.options.breakpoints,function(t){if(t.width>=window.screen.width)return h=t.src,!1}),setTimeout(function(){t(r)})}})},function(t,e){},function(t,e){t.exports=" <img :src=defaultSrc :class=class /> "},function(t,e,o){var n,s;o(4),n=o(1),s=o(5),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e){function o(){if(window.localStorage&&"object"==typeof localStorage&&(!localStorage.getItem(n)||"available"!==localStorage.getItem(n)&&"disable"!==localStorage.getItem(n))){var t=document.createElement("img");t.onload=function(){try{localStorage.setItem(n,"available")}catch(t){}},t.onerror=function(){try{localStorage.setItem(n,"disable")}catch(t){}},t.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA=="}}var n="can_use_webp";o(),t.exports=function(){return!!window.localStorage&&"available"===window.localStorage.getItem(n)}}])});