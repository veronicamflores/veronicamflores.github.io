(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)n=i[u],o[n]&&f.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d720c4a0","chunk-edf24e9a":"4f8a0bf4"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-edf24e9a":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-edf24e9a":"9c8ea110"}[t]+".css",n=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===n))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){i=u[s],l=i.getAttribute("data-href");if(l===r||l===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,a(o)},f.href=n;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){n[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,a){r=o[t]=[e,a]});e.push(r[2]=s);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(t),l=function(e){f.onerror=f.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");s.type=r,s.request=n,a[1](s)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2856:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"color2 container-fluid",attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-expand-md color2"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v("    \n          "),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v("   \n          "),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/work"}},[t._v("Work")])],1),t._v("   \n        ")])])])]),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-brand pr-3",attrs:{href:"/#/"}},[r("img",{staticClass:"img-round",attrs:{src:a("bb7c"),width:"150",height:"150",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler btn",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"p-2"},[a("i",{staticClass:"fas fa-terminal"})])])}],s=(a("db0f"),{name:"App"}),i=s,c=(a("5c0b"),a("2877")),l=Object(c["a"])(i,n,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,f=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container mt-3"},[a("div",{staticClass:"row body"},[t._m(0),a("div",{staticClass:"col-xs-12 col-md-8"},[a("div",{staticClass:"row d-flex justify-content-around"},[a("div",{staticClass:"col-md-6 col-xs-12 img-about size border-r mt-1 mb-2 d-flex align-items-end justify-content-end"},[a("h1",[a("router-link",{staticClass:"colorFont",attrs:{to:{name:"about"}}},[a("i",{staticClass:"fas fa-chevron-circle-right"})])],1)]),a("div",{staticClass:"col-md-5 col-xs-12 color3 border-r mt-1 mb-2"}),a("div",{staticClass:"col-md-5 col-xs-12  color4 border-r mt-3"}),a("div",{staticClass:"col-md-6 col-xs-12 size img-work border-r mt-3"},[a("h3",{staticClass:"colorFont"},[t._v("To See My Work "),a("router-link",{staticClass:"colorFont",attrs:{to:{name:"work"}}},[t._v("CLICK HERE")])],1)])])])])]),a("div",{staticClass:"container mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 d-flex justify-content-center align-items-center"},[a("p",[a("router-link",{staticClass:"hover",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t._v(" \n          "),a("p",[a("router-link",{staticClass:"hover",attrs:{to:{name:"about"}}},[t._v("About")])],1),t._v(" \n          "),a("p",[a("router-link",{staticClass:"hover",attrs:{to:{name:"work"}}},[t._v("Work")])],1),t._v(" \n      ")]),t._m(1),t._m(2)])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-12 col-md-4 img-bg border-r mt-1 mb-2"},[a("h1",{staticClass:"mt-5"},[t._v("VERONICA FLORES")]),a("h3",[t._v("FULLSTACK DEVELOPER")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-flex justify-content-center align-items-center"},[a("a",{staticClass:"font-size",attrs:{href:"https://github.com/veronicamflores",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),t._v(" "),a("a",{staticClass:"font-size",attrs:{href:"https://www.linkedin.com/in/veronicamarieflores",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})]),t._v(" "),a("a",{staticClass:"font-size",attrs:{href:""}},[a("i",{staticClass:"fab fa-facebook-square",attrs:{target:"_blank"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 d-flex justify-content-center align-items-center"},[a("p",[t._v("© 2018 Veronica Flores")])])}],m={name:"home",components:{}},p=m,b=(a("cccb"),Object(c["a"])(p,d,v,!1,null,null,null));b.options.__file="Home.vue";var h=b.exports;r["a"].use(f["a"]);var g=new f["a"]({routes:[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/work",name:"work",component:function(){return a.e("chunk-edf24e9a").then(a.bind(null,"f126"))}}]}),C=a("2f62");r["a"].use(C["a"]);var _=new C["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:g,store:_,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("2856"),n=a.n(r);n.a},"8f59":function(t,e,a){},bb7c:function(t,e,a){t.exports=a.p+"img/glamour1.8bc68bcd.png"},cccb:function(t,e,a){"use strict";var r=a("8f59"),n=a.n(r);n.a}});
//# sourceMappingURL=app.df71674b.js.map