(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],s[o]&&f.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/VueLandingPage/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"093e":function(t,e,a){"use strict";var i=a("c4ac"),s=a.n(i);s.a},"33df":function(t,e,a){t.exports=a.p+"img/personAlt.99878ccf.svg"},4003:function(t,e,a){t.exports=a.p+"img/illustration-mockups.88090ace.svg"},"417a":function(t,e,a){t.exports=a.p+"img/logo-alt.2d7275ed.svg"},"433e":function(t,e,a){},"45d9":function(t,e,a){t.exports=a.p+"img/branchAlt.1455c9cd.svg"},"4ffa":function(t,e,a){t.exports=a.p+"img/illustration-grow-together.bb27da81.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("home")],1)},n=[],o={methods:{updateUserAgent:function(){this.loadUserAgent(this.getUserAgent())},getUserAgent:function(){var t={};return t.width=window.screen.width,t.height=window.screen.height,t.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t}},created:function(){var t={};t.width=window.screen.width,t.height=window.screen.height,t.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.loadUserAgent(t),window.addEventListener("resize",this.updateUserAgent)}},r=o,c=(a("034f"),a("2877")),l=Object(c["a"])(r,s,n,!1,null,null,null),u=l.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("nav-bar"),a("hero-div"),a("features"),a("call-to-action"),a("footer-div")],1)},f=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{attrs:{id:"nav-color"}},[i("div",{attrs:{id:"nav-logo-div"}},[i("div",[i("img",{attrs:{id:"navLogo",alt:"Nav logo",src:a("e347")}})]),t._m(0)]),i("div",{staticClass:"nav-menu-absolute",attrs:{id:"nav-menu"}},[i("div",{staticClass:"nav-item"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("start with connections")])],1),i("div",{staticClass:"nav-item"},[i("img",{attrs:{id:"userIcon",alt:"you come first",src:a("ceb9")}}),i("router-link",{attrs:{to:"/learnmore"}},[t._v("what we do")])],1),i("div",{staticClass:"nav-item"},[i("img",{attrs:{id:"branchIcon",alt:"Colored Branch Icon",src:a("e412")}}),i("router-link",{attrs:{to:"/about"}},[t._v("contact us")])],1)])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"logo-text"}},[a("span",{staticClass:"logo-font",attrs:{id:"logoFont"}})])}],g={name:"WebNav",mounted:function(){window.onscroll=this.stickMenu},methods:{stickMenu:function(){var t=a("e412"),e=a("45d9"),i=a("ceb9"),s=a("33df"),n=a("e347"),o=a("417a"),r=document.getElementById("nav-menu"),c=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,l=c-r.offsetHeight,u=document.getElementById("userIcon"),d=document.getElementById("branchIcon"),f=document.getElementById("navLogo"),m=document.getElementById("logoFont");window.pageYOffset>=l?(r.classList.remove("nav-menu-absolute"),r.classList.add("sticky"),m.classList.add("sticky-logo"),u.src=s,d.src=e,f.src=o):(r.classList.add("nav-menu-absolute"),r.classList.remove("sticky"),u.src=i,d.src=t,f.src=n,m.classList.remove("sticky-logo"))}}},h=g,p=(a("b2a8"),Object(c["a"])(h,m,v,!1,null,"2d62374b",null)),b=p.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-div"},[i("div",{staticClass:"wrapper row"},[i("div",{staticClass:"col-left col-1-of-2"},[i("h1",{staticClass:"hero-title util-margin-bottom-small"},[t._v(" Build The Community "),i("br"),t._v("Your Fans Will Love ")]),i("p",{staticClass:"hero-sub-title heading-tertiary util-margin-bottom-small"},[t._v(" Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. ")]),i("button",{staticClass:"hero-btn"},[t._v("Get Started For Free")])]),i("div",{staticClass:"col-right col-1-of-2"},[i("img",{staticClass:"hero-image",attrs:{src:a("4003"),alt:""}})])])])}],C={name:"HeroDiv"},y=C,x=(a("9df4"),Object(c["a"])(y,w,_,!1,null,"1f168d65",null)),E=x.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"features-div container"},[i("div",{staticClass:"wrapper col"},[i("div",{staticClass:"row features-box"},[i("div",{staticClass:"col-1-of-2"},[i("h3",{staticClass:"features-box-heading-secondary heading-secondary util-margin-bottom-small"},[t._v(" Grow Together ")]),i("p",{staticClass:"features-box-heading-tertiary heading-tertiary"},[t._v(" Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ")])]),i("div",{staticClass:"col-1-of-2"},[i("img",{staticClass:"features-image-left",attrs:{src:a("4ffa"),alt:""}})])]),i("div",{staticClass:"row features-box"},[i("div",{staticClass:"col-1-of-2 left"},[i("h3",{staticClass:"features-box-heading-secondary heading-secondary util-margin-bottom-small"},[t._v(" Flowing Conversations ")]),i("p",{staticClass:"features-box-heading-tertiary heading-tertiary"},[t._v(" You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. ")])]),i("div",{staticClass:"col-1-of-2"},[i("img",{staticClass:"features-image-right",attrs:{src:a("b1eb"),alt:""}})])]),i("div",{staticClass:"row features-box"},[i("div",{staticClass:"col-1-of-2"},[i("h3",{staticClass:"features-box-heading-secondary heading-secondary util-margin-bottom-small"},[t._v(" Your Users ")]),i("p",{staticClass:"features-box-heading-tertiary heading-tertiary"},[t._v(" It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. ")])]),i("div",{staticClass:"col-1-of-2"},[i("img",{staticClass:"features-image-left",attrs:{src:a("d83a"),alt:""}})])])])])}],$={name:"Features"},j=$,H=(a("730a"),Object(c["a"])(j,k,O,!1,null,"1daeb17c",null)),F=H.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cta wrapper"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col cta-box"},[a("h3",{staticClass:"heading-secondary util-margin-bottom-small "},[t._v(" Ready To Build Your Community? ")]),a("a",{staticClass:"cta-btn",attrs:{href:"#"}},[t._v("Get Started For Free")])])])])}],A={name:"CallToAction"},I=A,B=(a("093e"),Object(c["a"])(I,L,W,!1,null,"2106eb16",null)),M=B.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-div"},[i("div",{staticClass:"col footer-col-1"},[i("div",{staticClass:"row"},[i("img",{staticClass:"footer-logo util-margin-small",attrs:{alt:"logo",src:a("9d64")}})]),t._m(0),t._m(1),t._m(2)]),t._m(3),t._m(4),t._m(5)])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row util-margin-small"},[a("p",{staticClass:"footer-location"},[a("i",{staticClass:"util-margin-right-small fas fa-map-marker-alt"}),t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos possimus aepe nesciunt ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("i",{staticClass:"util-margin-small fas fa-phone-volume"}),t._v("+1-543-123-4567 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("i",{staticClass:"util-margin-small far fa-envelope"}),t._v("info@huddle.com ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col footer-col-2"},[a("div",{staticClass:"row footer-row"},[t._v("About Us")]),a("div",{staticClass:"row footer-row"},[t._v("What We Do")]),a("div",{staticClass:"row footer-row"},[t._v("FAQ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col footer-col-3"},[a("div",{staticClass:"row footer-row"},[t._v("Career")]),a("div",{staticClass:"row footer-row"},[t._v("Blog")]),a("div",{staticClass:"row footer-row"},[t._v("Contact Us")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col footer-col-4"},[a("i",{staticClass:"footer-icon fab fa-facebook-square"}),a("i",{staticClass:"footer-icon fab fa-twitter-square"}),a("i",{staticClass:"footer-icon fab fa-instagram-square"}),a("div",{staticClass:"col footer-col-5"},[t._v(" © Copyright 2020 Huddle "),a("br"),t._v(" Made by CodeMeKathy "),a("br"),t._v("&& Designed by Frontend Mentors ")])])}],P={name:"Footer"},S=P,Y=(a("dd4f"),Object(c["a"])(S,T,U,!1,null,"41e69c98",null)),G=Y.exports,q={components:{"nav-bar":b,"hero-div":E,features:F,"call-to-action":M,"footer-div":G}},D=q,J=Object(c["a"])(D,d,f,!1,null,"d3125a02",null),N=J.exports;i["a"].component("home",N),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(u)}}).$mount("#app")},"730a":function(t,e,a){"use strict";var i=a("759a"),s=a.n(i);s.a},"759a":function(t,e,a){},"85ec":function(t,e,a){},"8fb1":function(t,e,a){},"93c5":function(t,e,a){},"9d64":function(t,e,a){t.exports=a.p+"img/logo.a27be289.png"},"9df4":function(t,e,a){"use strict";var i=a("8fb1"),s=a.n(i);s.a},b1eb:function(t,e,a){t.exports=a.p+"img/illustration-flowing-conversation.6641e825.svg"},b2a8:function(t,e,a){"use strict";var i=a("433e"),s=a.n(i);s.a},c4ac:function(t,e,a){},ceb9:function(t,e,a){t.exports=a.p+"img/person.15bb5932.svg"},d83a:function(t,e,a){t.exports=a.p+"img/illustration-your-users.8a5af995.svg"},dd4f:function(t,e,a){"use strict";var i=a("93c5"),s=a.n(i);s.a},e347:function(t,e,a){t.exports=a.p+"img/logo.3cb86730.svg"},e412:function(t,e,a){t.exports=a.p+"img/branch.39680b48.svg"}});
//# sourceMappingURL=app.573f6444.js.map