!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxWechatEmotion=e():t.vuxWechatEmotion=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r),u=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极"];e["default"]={ready:function(){var t=this.$el.innerHTML;this.index=(0,i["default"])(u,t),this.backgroundPositionX=24*-this.index;var e="";e=this.isGif?this.$interpolate('<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/{{index}}.gif">'):this.$interpolate('<span class="static-emotion" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif) {{backgroundPositionX}}px 0;"></span>'),this.$el.innerHTML=e},props:{isGif:{type:Boolean,"default":!1}},data:function(){return{src:"",backgroundPositionX:0}}}},function(t,e){},function(t,e){function n(t,e,n,o){for(var r=t.length,i=n+(o?1:-1);o?i--:++i<r;)if(e(t[i],i,t))return i;return-1}function o(t,e,o){if(e!==e)return n(t,r,o);for(var i=o-1,u=t.length;++i<u;)if(t[i]===e)return i;return-1}function r(t){return t!==t}function i(t,e,n){var r=t?t.length:0;if(!r)return-1;var i=null==n?0:c(n);return i<0&&(i=M(r+i,0)),o(t,e,i)}function u(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function s(t){return!!t&&"object"==typeof t}function f(t){return"symbol"==typeof t||s(t)&&$.call(t)==m}function a(t){if(!t)return 0===t?t:0;if(t=p(t),t===l||t===-l){var e=t<0?-1:1;return e*d}return t===t?t:0}function c(t){var e=a(t),n=e%1;return e===e?n?e-n:e:0}function p(t){if("number"==typeof t)return t;if(f(t))return x;if(u(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=u(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=h.test(t);return n||b.test(t)?g(t.slice(2),n?2:8):y.test(t)?x:+t}var l=1/0,d=1.7976931348623157e308,x=NaN,m="[object Symbol]",v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt,j=Object.prototype,$=j.toString,M=Math.max;t.exports=i},function(t,e){t.exports=" <div class=vux-emotion><slot style=display:none></slot></div> "},function(t,e,n){var o,r;n(2),o=n(1),r=n(4),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});