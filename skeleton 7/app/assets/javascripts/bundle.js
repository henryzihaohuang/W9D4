!function(e){var t={};function o(l){if(t[l])return t[l].exports;var n=t[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(l,n,function(t){return e[t]}.bind(null,n));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){const l=o(1);$(()=>{$("button.follow-toggle").each((e,t)=>new l(t))})},function(e,t){e.exports=class{constructor(e){this.$el=$(""+e),this.userId=this.$el.data("user-id"),this.followState=this.$el.data("initial-follow-state"),this.render()}render(){"unfollowed"===this.followState?this.$el.text("Follow!"):this.$el.text("Unfollow!")}handleClick(){this.$el.on("click",e=>(e.preventDefault(),"followed"===this.followState?$.ajax({method:"POST",url:`/users/${this.userId}/follow`,datatype:"json",success:()=>{this.$el.toggleClass(followed)}}):$.ajax({method:"DELETE",url:`/users/${this.userId}/follow`,datatype:"json",success:()=>{this.$el.toggleClass(unfollowed)}})))}}}]);
//# sourceMappingURL=bundle.js.map