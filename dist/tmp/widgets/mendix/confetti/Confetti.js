!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"));else if("function"==typeof define&&define.amd)define(["react"],e);else{var n="object"==typeof exports?e(require("react")):e(t.react);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=4)}([function(e,n){e.exports=t},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r},a=n(3);var u={position:"relative"},c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.setRef=n.setRef.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidUpdate",value:function(t){!t.active&&this.props.active&&(0,a.confetti)(this.container,this.props.config)}},{key:"setRef",value:function(t){this.container=t}},{key:"render",value:function(){return s.default.createElement("div",{className:this.props.className,style:u,ref:this.setRef})}}]),e}(i.Component);e.default=c},function(t,e,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&t.push(s)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.confetti=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},s,a(e)),u=n.elementCount,c=n.colors,l=n.width,p=n.height,f=n.perspective,g=n.angle,d=n.spread,y=n.startVelocity,h=n.decay,v=n.dragFriction,b=n.duration,m=n.stagger,_=n.random;t.style.perspective=f;var w=r(t,u,c,l,p),x=w.map((function(t){return{element:t,physics:o(g,d,y,_)}}));return i(t,x,v,h,b,m)};function r(t,e,n,r,o){return Array.from({length:e}).map((function(e,i){var s=document.createElement("div"),a=n[i%n.length];return s.style["background-color"]=a,s.style.width=r,s.style.height=o,s.style.position="absolute",s.style.willChange="transform, opacity",s.style.visibility="hidden",t.appendChild(s),s}))}function o(t,e,n,r){var o=t*(Math.PI/180),i=e*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*r(),wobbleSpeed:.1+.1*r(),velocity:.5*n+r()*n,angle2D:-o+(.5*i-r()*i),angle3D:-Math.PI/4+r()*(Math.PI/2),tiltAngle:r()*Math.PI,tiltAngleSpeed:.1+.3*r()}}function i(t,e,n,r,o,i){var s=void 0;return new Promise((function(a){requestAnimationFrame((function u(c){s||(s=c);var l=c-s,p=s===c?0:(c-s)/o;e.slice(0,Math.ceil(l/i)).forEach((function(t){!function(t,e,n,r){t.physics.x+=Math.cos(t.physics.angle2D)*t.physics.velocity,t.physics.y+=Math.sin(t.physics.angle2D)*t.physics.velocity,t.physics.z+=Math.sin(t.physics.angle3D)*t.physics.velocity,t.physics.wobble+=t.physics.wobbleSpeed,r?t.physics.velocity*=r:t.physics.velocity-=t.physics.velocity*n,t.physics.y+=3,t.physics.tiltAngle+=t.physics.tiltAngleSpeed;var o=t.physics,i=o.x,s=o.y,a=o.z,u=o.tiltAngle,c=o.wobble,l="translate3d("+(i+10*Math.cos(c))+"px, "+(s+10*Math.sin(c))+"px, "+a+"px) rotate3d(1, 1, 1, "+u+"rad)";t.element.style.visibility="visible",t.element.style.transform=l,t.element.style.opacity=1-e}(t,p,n,r)})),c-s<o?requestAnimationFrame(u):(e.forEach((function(e){if(e.element.parentNode===t)return t.removeChild(e.element)})),a())}))}))}var s={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"],duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function a(t){return!t.stagger&&t.delay&&(t.stagger=t.delay),t}},function(t,e,n){"use strict";n.r(e);var r,o=n(0),i=n(1),s=n.n(i),a=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){return Object(o.createElement)(s.a,{active:this.props.active,config:this.props.config})},e}(o.Component),c=n(2),l=n.n(c),p=(n(5),function(t){var e;return Object(o.createElement)("button",{className:l()("widget--button btn",t.className,(e={},e["btn-"+t.bootstrapStyle]=!!t.bootstrapStyle,e)),onClick:t.onClick,style:t.style},Object(o.createElement)("span",{className:"widget--button-text"},t.label),t.children)}),f=(n(10),function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),g=function(t){function e(e){var n=t.call(this,e)||this;return n.onClick=function(){n.setState({buttonCaption:n.props.TriggerButtonDelayMessage});var t=setTimeout((function(){return n.trigger()}),n.props.TriggerButtonDelay);return function(){return clearTimeout(t)}},n.trigger=function(){n.setState({config:n.getSettings(n.props),trigger:!0}),n.setState({buttonCaption:n.props.TriggerButtonCaption}),void 0!==n.props.onClickEvent&&(n.props.onClickEvent.isExecuting||n.props.onClickEvent.execute())},n.state={config:{},trigger:!1,buttonCaption:e.TriggerButtonCaption},n}return f(e,t),e.prototype.UNSAFE_componentWillReceiveProps=function(t){return void 0!==this.props.trigger&&("loading"!==this.props.trigger.status&&(this.props.trigger.value!==t.trigger.value&&(this.setState({config:this.getSettings(this.props),trigger:!0,buttonCaption:this.props.TriggerButtonCaption}),!0)))},e.prototype.componentDidUpdate=function(){this.state.trigger&&this.setState({trigger:!1})},e.prototype.render=function(){return this.props.triggerButton?this.buttonElement():this.confettiElement()},e.prototype.buttonElement=function(){return Object(o.createElement)(p,{bootstrapStyle:this.props.bootstrapStyle,className:this.props.class,label:this.state.buttonCaption,onClick:this.onClick,style:this.props.style},this.confettiElement())},e.prototype.confettiElement=function(){return Object(o.createElement)(u,{active:this.state.trigger,config:this.state.config})},e.prototype.getSettings=function(t){return this.props.useRuntimeSettings?this.getRuntimeSetting(t):this.getDesigntimeSettings(t)},e.prototype.getDefaultSettings=function(){var t={angle:45,startVelocity:40,elementCount:70,dragFriction:.12,duration:3e3,stagger:3,height:"10px",width:"10px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]};return t},e.prototype.getRuntimeSetting=function(t){var e,n,r,o,i,s;if("loading"===(null===(e=t.rt_settings)||void 0===e?void 0:e.status))return{};if(!(null===(n=t.rt_settings)||void 0===n?void 0:n.items))return{};if(0===(null===(r=t.rt_settings)||void 0===r?void 0:r.items.length))return{};if("loading"===(null===(o=t.rt_colors)||void 0===o?void 0:o.status))return{};for(var a=this.getDefaultSettings(),u=0,c=t.rt_settings.items;u<c.length;u++){var l=c[u];a.angle=Number(t.rt_angle(l).value),a.startVelocity=Number(t.rt_StartVelocity(l).value),a.elementCount=Number(t.rt_elementCount(l).value),a.dragFriction=Number(t.rt_dragFriction(l).value),a.duration=Number(t.rt_duration(l).value),a.stagger=Number(t.rt_stagger(l).value),a.height=t.rt_height(l).value+"px",a.width=t.rt_width(l).value+"px";break}if(!(null===(i=t.rt_settings)||void 0===i?void 0:i.items)||0===(null===(s=t.rt_settings)||void 0===s?void 0:s.items.length))return a;for(var p="",f=0,g=t.rt_colors.items;f<g.length;f++){l=g[f];p.length>0&&(p+=", "),p+=t.rt_color(l).displayValue}return a.colors=p.replace(/\s/g,"").split(","),a},e.prototype.getDesigntimeSettings=function(t){var e={};return e.angle=t.dt_angle,e.startVelocity=t.dt_startVelocity,e.elementCount=t.dt_elementCount,e.dragFriction=Number(t.dt_dragFriction),e.duration=t.dt_duration,e.stagger=t.dt_stagger,e.height=t.dt_height+"px",e.width=t.dt_width+"px",e.colors=t.dt_colors.replace(/\s/g,"").split(","),e},e}(o.Component);e.default=g},function(t,e){},,,,,function(t,e){}])}));