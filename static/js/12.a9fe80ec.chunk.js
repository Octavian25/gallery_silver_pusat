(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1195:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(t,e,i){for(var n=!0;n;){var o=t,r=e,a=i;n=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,r);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return;t=u,e=r,i=a,n=!0,s=u=void 0}};function r(t){return t&&t.__esModule?t:{default:t}}var a=i(1),s=r(a),l=r(i(1196)),u=r(i(2)),c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this.serverSide="undefined"===typeof window,this.listener=(0,l.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),n(e,[{key:"getElementTop",value:function(t){for(var e=0;t&&void 0!==t.offsetTop&&void 0!==t.clientTop;)e+=t.offsetTop+t.clientTop,t=t.offsetParent;return e}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(t){return t>=this.getViewportTop()&&t<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(t){return t<this.getViewportTop()}},{key:"isBelowViewport",value:function(t){return t>this.getViewportBottom()}},{key:"inViewport",value:function(t,e){return this.isInViewport(t)||this.isInViewport(e)||this.isAboveViewport(t)&&this.isBelowViewport(e)}},{key:"onScreen",value:function(t,e){return!this.isAboveScreen(e)&&!this.isBelowScreen(t)}},{key:"isAboveScreen",value:function(t){return t<this.getScrollPos()}},{key:"isBelowScreen",value:function(t){return t>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var t=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),e=t+this.node.clientHeight;return{inViewport:this.inViewport(t,e),onScreen:this.onScreen(t,e)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var t=this.props.scrollableParentSelector;this.scrollableParent=t?document.querySelector(t):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(t,e){return t.inViewport!==e.inViewport||t.onScreen!==e.onScreen}},{key:"animate",value:function(t,e){var i=this;this.delayedAnimationTimeout=setTimeout(function(){i.animating=!0,i.setState({classes:"animated "+t,style:{animationDuration:i.props.duration+"s"}}),i.callbackTimeout=setTimeout(e,1e3*i.props.duration)},this.props.delay)}},{key:"animateIn",value:function(t){var e=this;this.animate(this.props.animateIn,function(){e.props.animateOnce||(e.setState({style:{animationDuration:e.props.duration+"s",opacity:1}}),e.animating=!1);var i=e.getVisibility();t&&t(i)})}},{key:"animateOut",value:function(t){var e=this;this.animate(this.props.animateOut,function(){e.setState({classes:"animated",style:{animationDuration:e.props.duration+"s",opacity:0}});var i=e.getVisibility();i.inViewport&&e.props.animateIn?e.animateIn(e.props.afterAnimatedIn):e.animating=!1,t&&t(i)})}},{key:"handleScroll",value:function(){if(!this.animating){var t=this.getVisibility();this.visibilityHasChanged(this.visibility,t)&&(clearTimeout(this.delayedAnimationTimeout),t.onScreen?t.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):t.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=t)}}},{key:"render",value:function(){var t=this,e=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return s.default.createElement("div",{ref:function(e){t.node=e},className:e,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),e}();e.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:u.default.string,animateOut:u.default.string,offset:u.default.number,duration:u.default.number,delay:u.default.number,initiallyVisible:u.default.bool,animateOnce:u.default.bool,style:u.default.object,scrollableParentSelector:u.default.string,className:u.default.string,animatePreScroll:u.default.bool},t.exports=e.default},1196:function(t,e,i){(function(e){var i="Expected a function",n=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,p=c||f||Function("return this")(),h=Object.prototype.toString,d=Math.max,v=Math.min,y=function(){return p.Date.now()};function m(t,e,n){var o,r,a,s,l,u,c=0,f=!1,p=!1,h=!0;if("function"!=typeof t)throw new TypeError(i);function m(e){var i=o,n=r;return o=r=void 0,c=e,s=t.apply(n,i)}function w(t){var i=t-u;return void 0===u||i>=e||i<0||p&&t-c>=a}function S(){var t=y();if(w(t))return P(t);l=setTimeout(S,function(t){var i=e-(t-u);return p?v(i,a-(t-c)):i}(t))}function P(t){return l=void 0,h&&o?m(t):(o=r=void 0,s)}function O(){var t=y(),i=w(t);if(o=arguments,r=this,u=t,i){if(void 0===l)return function(t){return c=t,l=setTimeout(S,e),f?m(t):s}(u);if(p)return l=setTimeout(S,e),m(u)}return void 0===l&&(l=setTimeout(S,e)),s}return e=g(e)||0,b(n)&&(f=!!n.leading,a=(p="maxWait"in n)?d(g(n.maxWait)||0,e):a,h="trailing"in n?!!n.trailing:h),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=u=r=l=void 0},O.flush=function(){return void 0===l?s:P(y())},O}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&h.call(t)==o}(t))return n;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=s.test(t);return i||l.test(t)?u(t.slice(2),i?2:8):a.test(t)?n:+t}t.exports=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(t,e,{leading:o,maxWait:e,trailing:r})}}).call(this,i(54))},1197:function(t,e,i){}}]);
//# sourceMappingURL=12.a9fe80ec.chunk.js.map