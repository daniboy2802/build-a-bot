window.AnalyticsFacade=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){t.exports=r(3)},function(t,e,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,c,u=a(t),s=1;s<arguments.length;s++){for(var p in r=Object(arguments[s]))o.call(r,p)&&(u[p]=r[p]);if(n){c=n(r);for(var f=0;f<c.length;f++)i.call(r,c[f])&&(u[c[f]]=r[c[f]])}}return u}},function(t,e,r){t.exports=r(5)},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=g(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var p=u(t,e,r);if("normal"===p.type){if(n=r.done?"completed":"suspendedYield",p.arg===s)continue;return{value:p.arg,done:r.done}}"throw"===p.type&&(n="completed",r.method="throw",r.arg=p.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function p(){}function f(){}function l(){}var h={};h[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(j([])));y&&y!==e&&r.call(y,o)&&(h=y);var v=l.prototype=p.prototype=Object.create(h);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var p=s.arg,f=p.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){p.value=t,a(p)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function g(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=v.constructor=l,l.constructor=f,l[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},w(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new m(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){!function(){if("function"==typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),r}t.prototype=window.Event.prototype,window.CustomEvent=t}()},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);r(4);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return null!=t&&"object"===i(t)&&!1===Array.isArray(t)}function c(t){return"string"==typeof t}var u=r(1),s=r.n(u),p=["app-stage","compass-staging","stage","levelup-staging","flow-staging"],f=["app","compass","www","levelup","flow"];function l(t,e){t=t||[],e=e||{};var r={};return Object.keys(e).forEach((function(n){t.indexOf(n)>-1&&(r[n]=e[n])})),r}var h=d;function d(t,e){this.debug=e,this.name="ps_analytics";var r=l(this.persistantKeys,window[this.name]);window[this.name]=s()({},r)}d.prototype.persistantKeys=["user","page","eventData"],d.prototype.update=function(t){t=t||{};var e=l(this.persistantKeys,window[this.name]);window[this.name]=s()({},e,t)},d.prototype.identify=function(t,e){this.update({user:s()({id:t},e)}),this.debug("identify",window[this.name])},d.prototype.page=function(t){this.update({page:s()({},t)}),this.debug("pageview",window[this.name])},d.prototype.track=function(t,e){this.update({eventData:s()({},e)}),this.debug(t,window[this.name])};var y,v=w;function w(){}function m(t,e){window.localStorage.setItem(t,e)}function g(t){return window.localStorage.getItem(t)}function b(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function x(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){b(i,n,o,a,c,"next",t)}function c(t){b(i,n,o,a,c,"throw",t)}a(void 0)}))}}function O(t,e){return j.apply(this,arguments)}function j(){return(j=x(o.a.mark((function t(e,r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.fetch(e,r));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function S(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function A(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){S(i,n,o,a,c,"next",t)}function c(t){S(i,n,o,a,c,"throw",t)}a(void 0)}))}}w.prototype.identify=function(){this.track("identify")},w.prototype.page=function(){this.track("pageview")},w.prototype.resetSCode=function(){if(window._satellite&&window._satellite.getToolsByType){var t=window._satellite.getToolsByType("sc");if(Array.isArray(t)&&!(t.length<1)){var e=t[0].getS();e&&e.clearVars&&e.clearVars()}}},w.prototype.track=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.startsWith("experiments:");if(this.resetSCode(),!window._satellite||r){var n=document.createEvent("CustomEvent");n.initCustomEvent(t,!0,!1,e),document.body.dispatchEvent(n)}else window._satellite.track(t)};var N=L;function L(t){var e=t.contextName,r=t.dvsUrl;if(!c(e))throw new Error("contextName is required");this.debug="true"===g("ps_debug"),this.contextName=e,this.dvsUrl=function(t){var e=window.location.host.split(".")[0];if(c(t))return t;if(p.includes(e))return"https://app-stage.pluralsight.com/web-analytics/api/v1/dvs";if(f.includes(e))return"https://app.pluralsight.com/web-analytics/api/v1/dvs"}(r)}function C(t){var e,r=navigator.userAgent,n=document.location,o=n.href,i=n.pathname,a=n.search,c=document,u=c.referrer,s=c.title,p=(e=function(t){if(y&&y[t])return y[t];var e=document.cookie.split(" ");return y={},e.forEach((function(t){var e=t.split("=");y[e[0]]=e[1]})),y[t]}("AMCV_70D658CC558978FF7F000101%40AdobeOrg"),decodeURI(e).split("|")[4]);return Object.assign({},t,{adobeVisitorId:p,timestamp:new Date,path:i,referrer:u,search:a,title:s,url:o,userAgent:r})}function I(t){return function(t){if(Array.isArray(t))return F(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function D(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function T(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){D(i,n,o,a,c,"next",t)}function c(t){D(i,n,o,a,c,"throw",t)}a(void 0)}))}}L.prototype.log=function(t,e){this.debug&&console.log("DVS:",t,e)},L.prototype.post=function(){var t=A(o.a.mark((function t(e,r,n){var i,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.dvsUrl){t.next=2;break}return t.abrupt("return");case 2:return i=this.contextName,a=this.dvsUrl,c=C(r),t.next=6,O("".concat(a,"/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P(P({},c),{},{context:i,eventName:n})),credentials:"include"});case 6:this.debug&&this.log(e,c);case 7:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}(),L.prototype.identify=function(){var t=A(o.a.mark((function t(e,r){var n,i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.created_at,i=k(r,["created_at"]),a=P(P({type:"identify"},i),{},{createdAt:n}),t.abrupt("return",this.post("identify",a));case 3:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}(),L.prototype.page=A(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={type:"page"},t.abrupt("return",this.post("page",e));case 2:case"end":return t.stop()}}),t,this)}))),L.prototype.track=function(){var t=A(o.a.mark((function t(e,r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=P({eventName:e,type:"track"},r),t.abrupt("return",this.post("track",n,e));case 2:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}();var q=U;function U(){}U.prototype.identify=T(o.a.mark((function t(){var e=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.analytics){t.next=2;break}return t.abrupt("return");case 2:return m("ajs_user_traits",JSON.stringify({})),t.abrupt("return",new Promise((function(t){window.analytics.identify.apply(null,[].concat(I(e),[t]))})));case 4:case"end":return t.stop()}}),t)}))),U.prototype.page=T(o.a.mark((function t(){var e=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.analytics){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",new Promise((function(t){window.analytics.page.apply(null,[].concat(I(e),[t]))})));case 3:case"end":return t.stop()}}),t)}))),U.prototype.track=function(){var t=T(o.a.mark((function t(e){var r,n,i,a=arguments,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=c.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=c[i];if(window.analytics){t.next=3;break}return t.abrupt("return");case 3:return t.abrupt("return",new Promise((function(t){window.analytics.track.apply(null,[].concat(I(a),[t]))})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var G=function(t){var e=Math.round(20);return new Promise((function(r,n){var o=0,i=setInterval((function(){o++,a(window[t])?c():o>e&&u()}),100),c=function(){clearInterval(i),r(window[t])},u=function(){clearInterval(i),n(new Error("window.".concat(t," unavailable within ").concat(2e3,"ms")))}}))};function M(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function Q(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){M(i,n,o,a,c,"next",t)}function c(t){M(i,n,o,a,c,"throw",t)}a(void 0)}))}}var R=function(t,e){return V.apply(this,arguments)};function V(){return(V=Q(o.a.mark((function t(e,r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.track,t.prev=1,t.next=4,G("Appcues");case 4:t.sent.on("all",(function(t,e){n("generic_click",e,{contextName:"appcues"})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r(t.t0,{},"warn");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}var J=function(t){return"true"===t},B=function(){},K=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log";return console[r]("[DEBUG]",t,e)};function $(){var t=J(g("ps_debug"));return window.location.href.indexOf("ps_debug")>-1&&(t=J(function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}("ps_debug")),m("ps_debug",t)),t?K:B}function Y(){var t=window.location.host.split(".")[0];return!!f.includes(t)||!p.includes(t)&&void 0}function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){H(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function H(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function X(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function Z(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){X(i,n,o,a,c,"next",t)}function c(t){X(i,n,o,a,c,"throw",t)}a(void 0)}))}}e.default=et;var tt=function(t){return"web-analytics-user-".concat(t)};function et(t){var e=$();if(!c(t.contextName))throw new Error("AnalyticsFacade: contextName is required");if(this.context=t.contextName,this.dvsUrl=t.dvsUrl,this.queue=[],this.identifyCompleted=!1,this.waitForIdentify=t.waitForIdentify||!1,this.integrations=[new h({},e),new q,new v,new N(t)],this.bootstrap(),!function(){var t=!1;try{t=void 0!==window.ps_appcues_bootstrapped}catch(t){console.warn(t)}return t}())try{window.ps_appcues_bootstrapped=!0;var r={track:this.track.bind(this)};R(r,e)}catch(t){console.warn(t)}}function rt(t){return nt.apply(this,arguments)}function nt(){return(nt=Z(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=ot(e))){t.next=3;break}return t.abrupt("return",r);case 3:return t.prev=3,t.next=6,it();case 6:return n=t.sent,ct(e,n),t.abrupt("return",n);case 11:return t.prev=11,t.t0=t.catch(3),console.warn(t.t0),t.abrupt("return",{});case 15:case"end":return t.stop()}}),t,null,[[3,11]])})))).apply(this,arguments)}function ot(t){try{var e=JSON.parse(g(tt(t)));return e&&new Date(e.ttl)>new Date?e.data:null}catch(t){return null}}function it(t){return at.apply(this,arguments)}function at(){return(at=Z(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Y()?"".concat("https://app.pluralsight.com","/web-analytics/api/v1/users/current"):"".concat("https://app-stage.pluralsight.com","/web-analytics/api/v1/users/current"),t.next=3,O(r,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:if((n=t.sent).ok){t.next=6;break}throw new Error("Unable to fetch identity information. Error with status ".concat(n.status));case 6:return t.abrupt("return",n.json());case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ct(t,e){var r=new Date((new Date).setMinutes((new Date).getMinutes()+15));try{m(tt(t),JSON.stringify({data:e,ttl:r}))}catch(t){}}et.VERSION="4.7.11",et.prototype.bootstrap=Z(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.integrations.filter((function(t){return"function"==typeof t.bootstrap})).map((function(t){return t.bootstrap()})),t.next=3,Promise.all(e);case 3:case"end":return t.stop()}}),t,this)}))),et.prototype.identify=function(){var t=Z(o.a.mark((function t(e,r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=r||{},c(e)){t.next=3;break}throw new Error("AnalyticsFacade identify: id is required");case 3:if(a(r)){t.next=5;break}throw new Error("AnalyticsFacade identify: traits should be an object");case 5:return t.next=7,rt(e);case 7:return n=t.sent,t.next=10,this._callIntegrationsIdentify(e,r,n);case 10:return t.next=12,this._processQueue();case 12:this.identifyCompleted=!0;case 13:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}(),et.prototype.page=function(t){if(t&&!a(t))throw new Error("AnalyticsFacade page: properties should be an object");this.waitForIdentify&&!this.identifyCompleted?this.queue.push({type:"page",properties:t}):this.integrations.forEach((function(e){e.page(t)}))},et.prototype.track=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!c(t))throw new Error("AnalyticsFacade track: event name is required");if(!a(e))throw new Error("AnalyticsFacade track: properties should be an object");var n=r.contextName||this.context,o=n+":"+t;this.waitForIdentify&&!this.identifyCompleted?this.queue.push({type:"track",fullEventName:o,properties:e}):this.integrations.forEach((function(t){t.track(o,e)}))},et.prototype.trackExperiment=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!c(t))throw new Error("AnalyticsFacade trackExperiment: name is required");if(void 0===e)throw new Error("AnalyticsFacade trackExperiment: variation is required");var n=z(z({},r),{},{experiment_name:t,experiment_variation:e,context:this.context});this.track("track_experiment",n,{contextName:"experiments"})},et.prototype._callIntegrationsIdentify=function(t,e,r){var n=z(z({},e),r);return Promise.all(this.integrations.map((function(e){return e.identify(t,n)})))},et.prototype._processQueue=function(){var t=Z(o.a.mark((function t(e,r,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._processQueuePageCalls();case 2:return t.next=4,this._processQueueTrackCalls();case 4:this.queue=[];case 5:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}(),et.prototype._processQueuePageCalls=function(){var t=this.queue.filter((function(t){return"page"===t.type}));return Promise.all(this.integrations.map((function(e){return Promise.all(t.map((function(t){return e.page(t.properties)})))})))},et.prototype._processQueueTrackCalls=function(){var t=this.queue.filter((function(t){return"track"===t.type}));return Promise.all(this.integrations.map((function(e){return Promise.all(t.map((function(t){return e.track(t.fullEventName,t.properties)})))})))}}]).default;