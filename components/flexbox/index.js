!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxFlexbox=t():e.vuxFlexbox=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var l=o[r]={exports:{},id:r,loaded:!1};return e[r].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(5)},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(2),n=r(l);t["default"]={created:function(){this.supported=n["default"].flex},ready:function(){if(!this.supported){var e=this.$el.querySelectorAll(".vux-flexbox-item");this.$el.classList.remove("vux-flexbox"),this.$el.classList.add("vux-flexbox-unsupport");for(var t=e.length,o=100/t+"%",r=0;r<t;r++)e[r].style.width=o,e[r].style["box-sizing"]="border-box",e[r].style["margin-left"]=0,e[r].style["float"]="left"}},props:{marginLeft:{type:Number,"default":8}}}},function(e,t){"use strict";function o(e,t){var o=document.createElement("div");o.style.cssText=r(e),s[t]=!!o.style.length,l.className+=" "+(s[t]?"":"no-")+t}function r(e){for(var t="",o=0;o<n.length;o++)t+=n[o]+e;return t}Object.defineProperty(t,"__esModule",{value:!0});var l=document.documentElement,n=["-webkit-","-moz-","-ms-","-o-",""],s={};o("flex-basis: 1px;","flexbox"),o("box-direction: reverse;","flexboxlegacy"),o("flex-align: end;","flexboxtweener"),o("flex-wrap: wrap;","flexwrap"),s.flex=s.flexbox,s.legacy=s.flexboxlegacy,s.tweener=s.flexboxtweener,s.wrap=s.flexwrap,t["default"]=s},function(e,t){},function(e,t){e.exports=" <div class=vux-flexbox> <slot></slot> </div> "},function(e,t,o){var r,l;o(3),r=o(1),l=o(4),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)}])});