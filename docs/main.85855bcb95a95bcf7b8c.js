!function(e){function t(t){for(var r,l,c=t[0],a=t[1],s=t[2],d=0,f=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=function(e){return l.p+""+({1:"modal"}[e]||e)+"."+{1:"4bffc070ed78a36fe60f"}[e]+".js"}(e);var a=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",a.name="ChunkLoadError",a.type=r,a.request=i,n[1](a)}o[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=a;i.push([16,2]),n()}({16:function(e,t,n){"use strict";n.r(t);n(4),n(5);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.MenuIcon=document.querySelector(".site-header__menu-btn"),this.MenuContent=document.querySelector(".site-header__menu-section"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.MenuIcon.addEventListener("click",(function(){return e.toggleMenuIcon()}))}},{key:"toggleMenuIcon",value:function(){this.MenuContent.classList.toggle("site-header__menu-section--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.MenuIcon.classList.toggle("site-header__menu-btn--close-x")}}])&&r(t.prototype,n),o&&r(t,o),e}(),i=n(0),l=n.n(i);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a,s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.percent=n,this.itemToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=l()(this.calcCaller,200).bind(this),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){window.addEventListener("scroll",this.scrollThrottle)}},{key:"calcCaller",value:function(){var e=this;console.log("scroll dey run"),this.itemToReveal.forEach((function(t){0==t.isRevealed&&e.calculateScroll(t)}))}},{key:"calculateScroll",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&(console.log("Element is being calculated"),e.getBoundingClientRect().y/this.browserHeight*100<this.percent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle)))}},{key:"hideInitially",value:function(){this.itemToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemToReveal[this.itemToReveal.length-1].isLastItem=!0}}])&&c(t.prototype,n),r&&c(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.SiteHeader=document.querySelector(".site-header"),this.pageSection=document.querySelectorAll(".padding-section"),this.browserHeight=window.innerHeight,this.prevScrollY=window.scrollY,this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",l()((function(){return e.changeBackground()}),200))}},{key:"changeBackground",value:function(){var e=this;this.detScrolldir(),window.scrollY>60?this.SiteHeader.classList.add("site-header--dark-bg"):this.SiteHeader.classList.remove("site-header--dark-bg"),this.pageSection.forEach((function(t){return e.CalcSection(t)}))}},{key:"detScrolldir",value:function(){window.scrollY>this.prevScrollY?this.scrolldir="down":this.scrolldir="up",this.prevScrollY=window.scrollY}},{key:"CalcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrolldir||t<33&&"up"==this.scrolldir){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&u(t.prototype,n),r&&u(t,r),e}()),new s(document.querySelectorAll(".feature-item"),75),new s(document.querySelectorAll(".testimonial"),60),new o,document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===a?n.e(1).then(n.bind(null,17)).then((function(e){a=new e.default,setTimeout((function(){return a.open()}),20)})).catch((function(){return console.log("there was a problem")})):a.open()}))}))},4:function(e,t,n){}});