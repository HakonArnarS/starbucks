(function(e){function n(n){for(var r,i,u=n[0],c=n[1],s=n[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,i=1;i<t.length;i++){var c=t[i];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({fastclick:"fastclick"}[e]||e)+"."+{a04e089a:"e03ec149","280aa2ca":"23cb811a","2d0ac1df":"2091332b","2d0b1f69":"58e1bac1","2d0ccf5d":"5aba0d47","830425fa":"4c2d24f4","832c488c":"d1d4033d",f766676e:"bcac86ee",fastclick:"5251028d"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(n){c.onerror=c.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var l=s;a.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("967e"),o=t.n(r),a=(t("a481"),t("96cf"),t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("2b0e")),i=t("b05d");a["a"].use(i["a"],{config:{}});var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},c=[],s={data:function(){return{name:"App"}},beforeMount:function(){navigator&&"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js")}))}},f=s,l=t("2877"),d=Object(l["a"])(f,u,c,!1,null,null,null),p=d.exports,b=t("2f62");a["a"].use(b["a"]);var v=function(){var e=new b["a"].Store({modules:{},strict:!1});return e},h=t("8c4f"),w=[{path:"/",component:function(){return Promise.all([t.e("a04e089a"),t.e("2d0b1f69")]).then(t.bind(null,"21a5"))},children:[{path:"",component:function(){return Promise.all([t.e("a04e089a"),t.e("f766676e")]).then(t.bind(null,"8b24"))}},{path:"/test",component:function(){return Promise.all([t.e("a04e089a"),t.e("830425fa")]).then(t.bind(null,"c961"))}},{path:"/signin",component:function(){return Promise.all([t.e("a04e089a"),t.e("2d0ccf5d")]).then(t.bind(null,"4fc8"))}},{path:"/drinks/hot-coffees",component:function(){return Promise.all([t.e("a04e089a"),t.e("280aa2ca")]).then(t.bind(null,"0d82"))}},{path:"/menu",component:function(){return Promise.all([t.e("a04e089a"),t.e("832c488c")]).then(t.bind(null,"73d0"))}},{path:"/product",component:function(){return Promise.all([t.e("a04e089a"),t.e("2d0ac1df")]).then(t.bind(null,"17be"))}}]}];var m=w;a["a"].use(h["a"]);var g=function(){var e=new h["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:m,mode:"history",base:"/"});return e},y=function(e){var n="function"===typeof v?v({Vue:a["a"],ssrContext:e}):v,t="function"===typeof g?g({Vue:a["a"],ssrContext:e,store:n}):g;n.$router=t;var r={router:t,store:n,render:function(e){return e(p)}};return i["a"].ssrUpdate({app:r,ssr:e}),{app:r,store:n,router:t}},x=t("9483");Object(x["a"])("/service-worker.js",{registrationOptions:{scope:"./"},ready:function(){0},registered:function(){0},cached:function(){0},updatefound:function(){0},updated:function(){0},offline:function(){0},error:function(){0}});var P=t("bc3a"),k=t.n(P);a["a"].prototype.$axios=k.a;var _=y(),j=_.app,O=_.store,S=_.router;function T(){var e,n,t,r,i,u;return o.a.async((function(c){while(1)switch(c.prev=c.next){case 0:e=!0,n=function(n){e=!1,window.location.href=n},t=window.location.href.replace(window.location.origin,""),r=[void 0],i=0;case 5:if(!(!0===e&&i<r.length)){c.next=23;break}if("function"===typeof r[i]){c.next=8;break}return c.abrupt("continue",20);case 8:return c.prev=8,c.next=11,o.a.awrap(r[i]({app:j,router:S,store:O,Vue:a["a"],ssrContext:null,redirect:n,urlPath:t}));case 11:c.next=20;break;case 13:if(c.prev=13,c.t0=c["catch"](8),!c.t0||!c.t0.url){c.next=18;break}return window.location.href=c.t0.url,c.abrupt("return");case 18:return console.error("[Quasar] boot error:",c.t0),c.abrupt("return");case 20:i++,c.next=5;break;case 23:if(!1!==e){c.next=25;break}return c.abrupt("return");case 25:window.__INITIAL_STATE__&&O.replaceState(window.__INITIAL_STATE__),u=new a["a"](j),S.onReady((function(){u.$mount("#q-app")}));case 28:case"end":return c.stop()}}),null,null,[[8,13]])}/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e("fastclick").then(t.t.bind(null,"a0db",7)),T()},"31cd":function(e,n,t){}});