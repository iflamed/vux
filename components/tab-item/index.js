!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxTabItem=t():e.vuxTabItem=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(3)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{selected:{type:Boolean,required:!1,"default":!1}},methods:{tabClick:function(){this.$dispatch("index:change",this.$el.getAttribute("data-index"))}}}},function(e,t){e.exports=" <div class=vux-tab-item :class=\"{'vux-tab-selected':selected}\" :style=\"{borderWidth:$parent.lineWidth+'px',borderColor:$parent.activeColor,color:selected ? $parent.activeColor : $parent.defaultColor, 'border': $parent.animate ? 'none' : 'auto'}\" @click=tabClick()> <slot></slot> </div> "},function(e,t,o){var r,n;r=o(1),n=o(2),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});