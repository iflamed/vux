!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxGroup=e():t.vuxGroup=e()}(this,function(){return function(t){function e(s){if(o[s])return o[s].exports;var r=o[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(6)},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(5),i=s(r);e["default"]={components:{GroupTitle:i["default"]},props:{title:String,titleColor:String},events:{"group.class.add":function(t){this.$el.querySelector(".weui_cells").classList.add(t)}}}},function(t,e){},function(t,e){t.exports=" <div class=weui_cells_title> <slot></slot> </div> "},function(t,e){t.exports=" <div> <div class=weui_cells_title v-if=title :style={color:titleColor}>{{title}}</div> <div class=weui_cells :class=\"{'no_group_title':!title}\"> <slot></slot> </div> </div> "},function(t,e,o){var s,r;r=o(3),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(2),s=o(1),r=o(4),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});