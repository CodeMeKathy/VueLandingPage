(function(A){function t(t){for(var n,s,o=t[0],c=t[1],a=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(A[n]=c[n]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,a||[]),e()}function e(){for(var A,t=0;t<r.length;t++){for(var e=r[t],n=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(n=!1)}n&&(r.splice(t--,1),A=s(s.s=e[0]))}return A}var n={},i={app:0},r=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=A,s.c=n,s.d=function(A,t,e){s.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},s.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},s.t=function(A,t){if(1&t&&(A=s(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var n in A)s.d(e,n,function(t){return A[t]}.bind(null,n));return e},s.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return s.d(t,"a",t),t},s.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},s.p="/VueLandingPage/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var l=c;r.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"034f":function(A,t,e){"use strict";var n=e("85ec"),i=e.n(n);i.a},"0c17":function(A,t,e){"use strict";var n=e("e48b"),i=e.n(n);i.a},"0d46":function(A,t,e){},"13f7":function(A,t,e){},"33df":function(A,t,e){A.exports=e.p+"img/personAlt.99878ccf.svg"},"45d9":function(A,t,e){A.exports=e.p+"img/branchAlt.1455c9cd.svg"},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("home")],1)},r=[],s={methods:{updateUserAgent:function(){this.loadUserAgent(this.getUserAgent())},getUserAgent:function(){var A={};return A.width=window.screen.width,A.height=window.screen.height,A.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,A.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,A}},created:function(){var A={};A.width=window.screen.width,A.height=window.screen.height,A.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,A.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.loadUserAgent(A),window.addEventListener("resize",this.updateUserAgent)}},o=s,c=(e("034f"),e("2877")),a=Object(c["a"])(o,i,r,!1,null,null,null),l=a.exports,u=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"container"},[e("nav-bar"),e("hero-div"),e("business-div")],1)},d=[],f=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("nav",{attrs:{id:"nav-white"}},[n("div",{attrs:{id:"nav-logo"}},[n("div",[n("img",{attrs:{id:"luxLogo",alt:"Lux logo",src:e("cf05")}})]),A._m(0)]),n("div",{staticClass:"nav-menu-absolute",attrs:{id:"nav-menu"}},[n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/",exact:""}},[A._v("start with why")])],1),n("div",{staticClass:"nav-item"},[n("img",{attrs:{id:"userIcon",alt:"you come first",src:e("ceb9")}}),n("router-link",{attrs:{to:"/learnmore"}},[A._v("you come first")])],1),n("div",{staticClass:"nav-item"},[n("img",{attrs:{id:"branchIcon",alt:"catch the wave",src:e("e412")}}),n("router-link",{attrs:{to:"/about"}},[A._v("come visit us")])],1)])])},v=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"logo-text"}},[e("span",{staticClass:"logo-font",attrs:{id:"logoFont"}},[A._v("Lux")])])}],m={name:"WebNav",mounted:function(){window.onscroll=this.stickMenu},methods:{stickMenu:function(){var A=e("e412"),t=e("45d9"),n=e("ceb9"),i=e("33df"),r=e("cf05"),s=e("cf05"),o=document.getElementById("nav-menu"),c=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a=c-o.offsetHeight,l=document.getElementById("userIcon"),u=document.getElementById("branchIcon"),d=document.getElementById("luxLogo"),f=document.getElementById("logoFont");window.pageYOffset>=a?(o.classList.remove("nav-menu-absolute"),o.classList.add("sticky"),f.classList.add("sticky-logo"),l.src=i,u.src=t,d.src=s):(o.classList.add("nav-menu-absolute"),o.classList.remove("sticky"),l.src=n,u.src=A,d.src=r,f.classList.remove("sticky-logo"))}}},p=m,h=(e("cb07"),Object(c["a"])(p,f,v,!1,null,"98a22a88",null)),b=h.exports,W=function(){var A=this,t=A.$createElement;A._self._c;return A._m(0)},g=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"hero-div"},[e("div",{staticClass:"wrapper"},[e("h1",[A._v("PHANTOM III")]),e("button",[A._v("How it Works")])])])}],w={name:"HeroDiv"},y=w,x=(e("f724"),Object(c["a"])(y,W,g,!1,null,"93fff8da",null)),F=x.exports,I=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"business-div container"})},j=[],Y={name:"BusinessDiv"},S=Y,J=(e("0c17"),Object(c["a"])(S,I,j,!1,null,"276c56bf",null)),E=J.exports,K={components:{"nav-bar":b,"hero-div":F,"business-div":E}},L=K,V=Object(c["a"])(L,u,d,!1,null,"27dbd1a2",null),k=V.exports;n["a"].component("home",k),n["a"].config.productionTip=!1,new n["a"]({render:function(A){return A(l)}}).$mount("#app")},"85ec":function(A,t,e){},cb07:function(A,t,e){"use strict";var n=e("13f7"),i=e.n(n);i.a},ceb9:function(A,t,e){A.exports=e.p+"img/person.d6541cdf.svg"},cf05:function(A,t){A.exports="data:image/png;base64,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"},e412:function(A,t,e){A.exports=e.p+"img/branch.71e72bd5.svg"},e48b:function(A,t,e){},f724:function(A,t,e){"use strict";var n=e("0d46"),i=e.n(n);i.a}});
//# sourceMappingURL=app.53d435a4.js.map