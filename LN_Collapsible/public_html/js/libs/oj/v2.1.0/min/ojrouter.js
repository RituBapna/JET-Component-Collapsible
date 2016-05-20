/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","signals","promise"],function(b,f,a){(function(){function d(){var a=window.location.href.split("#")[0];return a.substring(0,a.lastIndexOf("/"))}function c(a){var b={},c=[],d,e;if(a)for(d in c=a.split("\x26"),c)e=c[d].split(/\=(.+)?/),a=e[0],a.length&&(b[a]||(b[a]=[]),e=e[1]&&decodeURIComponent(e[1].replace(/\+/g," ")),b[a].push(e));return b}function e(a,c){var d;c&&a.vo&&(b.l.Fo(c),a.vo.every(function(a){return a.sj===c?(d=a,!1):!0}));return d}function g(){return window.location.href.split("#")[0].replace(z+
"/","")}function h(a){return a.$l?h(a.$l)+"."+a.Ef:a.Ef}function k(a){return a?k(a.$l)+a.fB().sj+"/":"/"}function l(a,b){var c;a.kg.every(function(a){return a.bm&&a.bm!==b?!0:(c=a,!1)});return c}function m(){return M[0]&&M[0].cancel}function n(a){var c=a.charAt(0);a=a.slice(1);if("0"===c)a=decodeURIComponent(a);else if("1"===c)a=b.gQ.Bna(a);else throw Error("Error retrieving bookmarkable data. Format is invalid");return JSON.parse(a)}function p(a,c){if(c&&0<Object.getOwnPropertyNames(c).length){var d;
d=-1===a.indexOf("?")?"?":"\x26";var e=a,f=JSON.stringify(c),g=encodeURIComponent(f),f=b.gQ.ena(f),h=!1,k="oj_Router\x3d";f.length<=g.length&&(h=!0);k=h?k+("1"+f):k+("0"+g);if(1024<k.length)throw Error("Size of bookmarkable data is too big.");a=e+(d+k)}return a}function r(a,b,c){var d;a.kg.every(function(a){return a.bm&&a.bm!==c||!a.Sj(b)?!0:(d=a,!1)});return d}function s(a,b){var c=[],d=[],e=a,f=b.split("/"),g,h,k;for(f.splice(0,1);e;)d.unshift(e),e=e.$l;for(;g=f.shift();){e=d.shift();if(!e){if(e=
r(h,g,k),!e){C=b;break}}else if(!e.Sj(g))throw Error('Invalid path "'+b+'". State id "'+g+'" does not exist on router "'+e.Ef+'".');c.push({Hc:e,Yu:g});h=e;k=g}e=!0;for(d=c.length-1;0<=d&&e;d--)c[d].Yu===c[d].Hc.uk?c[d].Yu=null:e=!1;return c}function q(a,c){var d=!0,e=Promise.resolve(!0),f=a.fB(),g,h;if(f){for(g=0;g<a.kg.length;g++)if(d=q(a.kg[g],c),!d)return!1;g=f.ZE&&f.ZE.canExit?f.ZE.canExit:f.mw;if("function"===typeof g){try{h=g()}catch(k){return b.r.error("Error when executing canExit callback: %s",
k.message),!1}h&&h.then?e=h:(h||b.r.info("canExit is false for state %s",f.sj),d=h)}}c.push(e);return d}function t(a){var c;if(!a)return Promise.resolve(!m());c=[];return q(a,c)?Promise.all(c).then(function(a){var c;for(c=0;c<a.length;c++)if(!a[c])return b.r.info("CanExit promise at position %s returned false.",String(c)),!1;return!m()}):Promise.resolve(!1)}function v(a,c){b.r.info("Start _canEnter.");var d=!0,e=Promise.resolve(!0),f=[];a.every(function(a){var c,g;if(c=a.Hc.Sj(a.value))if(a=c.lw,
"function"===typeof a){try{g=a()}catch(h){return b.r.error("Error when executing canEnter callback: %s",h.message),d=!1}if(g&&g.then)e=g;else if(d=g,!d)return b.r.info("canEnter is false for state: %s",c.sj),!1}f.push(e);return!0});return!d||m()?Promise.resolve({TD:[]}):Promise.all(f).then(function(d){var e;for(e=0;e<d.length;e++)if(!d[e])return b.r.info("CanEnter promise at position %s returned false.",String(e)),{TD:[]};return{TD:a,origin:c}})}function w(a,c){var d=a.Hc.Sj(a.Hc.Ff()),e=a.value?
a.Hc.Sj(a.value):void 0;return Promise.resolve().then(function(){b.r.info("Updating state of %s to %s.",h(a.Hc),a.value)}).then(d?d.Fw:void 0).then(function(){var b=a.Hc,d,e,f;if("popState"===c){e=b.Qt.length;for(d=e-1;0<=d;d--)if(b.Qt[d]===a.value){f=!0;b.Qt.splice(d,e-d);break}1===e-d&&(b.wx="back")}f||(delete b.wx,b.Qt.push(b.Ff()));b.Ff(a.value)}).then(e?e.Ew:void 0)}function u(a){var c;c=Promise.resolve().then(function(){b.r.info("Entering _updateAll.");b.Ya.JD=!0});a.TD.forEach(function(b){c=
c.then(function(){if(!m())return w(b,a.origin)})});return c.then(function(){var c=0<a.TD.length&&!m();b.Ya.JD=!1;b.r.info("_updateAll returns %s.",String(c));return{hasChanged:c}},function(a){b.Ya.JD=!1;return Promise.reject(a)})}function y(a){var c={},d,e=a.split("?")[1]||"";b.r.info("Parsing: %s",a);a=E.Ay(a);if(e=e.split("oj_Router\x3d")[1])e=e.split("\x26")[0],c=n(e);if(b.r.option("level")===b.r.Wr)for(d in b.r.info("Bookmarkable data: "),c)b.r.info("   { router: %s, value: %s }",d,c[d]);a=E.parse(a).filter(function(a){var b=
c[a.Hc.Ef];b&&(a.Hc.lj=b);return a.value!==a.Hc.Ff()});b.r.option("level")===b.r.Wr&&(b.r.info("Potential changes are: "),a.forEach(function(a){b.r.info("   { router: %s, value: %s }",h(a.Hc),a.value)}));return a}function x(a,b){var c;try{c=y(a)}catch(d){return Promise.reject(d)}return v(c,b).then(u)}function B(a){b.r.info("\x3e\x3e Executing: path\x3d%s, url\x3d%s, origin\x3d%s",a.path,a.url,a.origin);return"undefined"!==typeof a.url?"sync"===a.origin?x(a.url):t(a.Hc).then(function(b){return b?x(a.url,
a.origin):{hasChanged:!1}}):a.Hc.Gea(a.path||null,a.replace)}function O(){var a=M[0];b.r.info("\x3e\x3e Resolving: path\x3d%s, url\x3d%s",a.path,a.url);a.cancel?(b.r.info("\x3e\x3e Cancelled: path\x3d%s, url\x3d%s",a.path,a.url),a=Promise.resolve({hasChanged:!1})):a=B(a);return a.then(function(a){var c=M.shift();b.r.info("\x3e\x3e Done with: path\x3d%s, url\x3d%s",c.path,c.url);b.Ya.mu.dispatch(a);return a},function(a){M=[];b.Ya.mu.dispatch({hasChanged:!1});return Promise.reject(a)})}function J(a){var c;
c=M.push(a);b.r.info("\x3e\x3e Queue transition for path\x3d%s, url\x3d%s",a.path,a.url);1===c?G=O():(a=M[c-2],a.url||a.Dna||(b.r.info("\x3e\x3e Cancelling: path\x3d%s",a.path),a.cancel=!0),G=G.then(O));return G}function F(){var a,c,d=null;b.r.info("Handling popState event with URL: %s",window.location.href);for(a=0;a<I.kg.length;a++)if(c=I.kg[a],I.Ff()&&I.Ff()===c.bm){d=c;break}J({Hc:d,url:g(),origin:"popState"}).then(null,function(a){b.r.error("Error while changing state in handlePopState: %s",
a.message)})}function D(){L||(E||(E=new b.Ya.vP),z||(z=d()),window.addEventListener("popstate",F,!1),b.r.info("Initializing rootInstance."),b.r.info("Base URL is %s",z),b.r.info("This page is %s",A),b.r.info("Current URL is %s",window.location.href),L=!0)}var z,A=function(){var a="",b=window.location.pathname;-1!==b.indexOf(".html",b.length-5)&&(a=b.split("/").pop());return a}(),E,L=!1,C,M=[],G;b.Ya=function(a,b){var c=this;this.Ef=a;this.bm=b?b.Ff():void 0;this.$l=b;this.kg=[];this.lj=void 0;this.Ff=
f.observable();this.zla=f.pureComputed({read:function(){return this.Ff()},write:function(a){this.go(a).then(null,function(a){throw a;})},owner:c});this.vo=null;this.uk=void 0;this.fB=f.pureComputed(function(){return f.ignoreDependencies(c.Sj,c,[c.Ff()])});this.Oba=f.pureComputed(function(){var a,b=f.ignoreDependencies(c.Sj,c,[c.Ff()]);b&&(a=b.value);return a});this.wx=void 0;this.Qt=[];this.Vha=Object.create(null,{name:{value:f.pureComputed(function(){var a,b;b=this.Ff()||this.uk||this.vo[0];if(b=
this.Sj(b))a=b.value,a&&"string"===typeof a||(a=b.sj);return a},c),enumerable:!0},params:{value:Object.create(null,{ojRouter:{value:new function(){Object.defineProperties(this,{parentRouter:{value:c,enumerable:!0},direction:{get:function(){return c.wx},enumerable:!0}})},enumerable:!0}}),enumerable:!0},lifecycleListener:{value:Object.create(null,{attached:{value:function(a){var b=a.valueAccessor().params.ojRouter.parentRouter.fB();b&&(b.ZE=a.viewModel)}}}),enumerable:!0}});Object.defineProperties(this,
{parent:{value:this.$l,enumerable:!0},name:{value:this.Ef,enumerable:!0}})};o_("Router",b.Ya,b);Object.defineProperties(b.Ya.prototype,{states:{get:function(){return this.vo},enumerable:!0},stateId:{get:function(){return this.zla},enumerable:!0},currentState:{get:function(){return this.fB},enumerable:!0},currentValue:{get:function(){return this.Oba},enumerable:!0},defaultStateId:{get:function(){return this.uk},set:function(a){this.uk=a},enumerable:!0},moduleConfig:{get:function(){return this.Vha},
enumerable:!0}});var I=new b.Ya("root",void 0);b.Ya.prototype.L2=function(a){var b;a&&"string"===typeof a&&(a=a.trim(),0<a.length&&this.kg.every(function(c){return c.Ef===a?(b=c,!1):!0}));return b};b.b.g("Router.prototype.getChildRouter",{L2:b.Ya.prototype.L2});b.Ya.prototype.g2=function(a){var c,d;b.l.Fo(a);a=a.trim();for(c=0;c<this.kg.length;c++){d=this.kg[c];if(d.Ef===a)throw Error('Invalid router name "'+a+'", it already exists.');if(d.bm===this.Ff())throw Error('Cannot create more than one child router for parent state id "'+
d.bm+'".');}a=new b.Ya(a,this);this.kg.push(a);return a};b.b.g("Router.prototype.createChildRouter",{g2:b.Ya.prototype.g2});b.Ya.prototype.Sj=function(a){return e(this,a)};b.Ya.prototype.a2=function(a){this.Ff(void 0);delete this.uk;this.wx=void 0;this.Qt=[];"function"===typeof a?(this.vo=null,this.Sj=a):(this.vo=[],delete this.Sj,Object.keys(a).forEach(function(c){var d=a[c];this.vo.push(new b.bs(c,d,this));"boolean"===typeof d.isDefault&&d.isDefault&&(this.uk=c)},this));return this};b.b.g("Router.prototype.configure",
{a2:b.Ya.prototype.a2});b.Ya.prototype.q3=function(a){return this.Sj(a)};b.b.g("Router.prototype.getState",{q3:b.Ya.prototype.q3});b.Ya.prototype.go=function(a){D();return J({Hc:this,path:a,origin:"go"})};b.b.g("Router.prototype.go",{go:b.Ya.prototype.go});b.Ya.prototype.Gea=function(a,c){function d(a){return a?x(f.replace(/^\//,"")).then(function(a){if(a.hasChanged){var d=z+f;b.r.info("%s URL to %s",c?"Replacing":"Pushing",d);window.history[c?"replaceState":"pushState"](null,"",d)}return a}):{hasChanged:!1}}
var e,f,q;e=!0;if(a)if("string"===typeof a)0<a.length&&(e=!1);else return Promise.reject(Error("Invalid object type for state id."));if(e&&(a=this.uk||null,!a))return b.r.option("level")===b.r.Wr&&b.r.info("Undefined state id with no default id on router %s",h(this)),Promise.resolve({hasChanged:!1});e="/"===a.charAt(0)?a:k(this.$l)+a;b.r.info("Destination path: %s",e);try{q=s(this,e)}catch(l){return Promise.reject(l)}f=E.P1(q);b.r.option("level")===b.r.Wr&&b.r.info("Going to URL %s on router %s",
f,h(this));q="/"+E.Ay(g()).replace(A,"");return E.Ay(f)!==q?(b.r.info("New URL is different."),t(this).then(d)):Promise.resolve({hasChanged:!1})};b.Ya.prototype.A5=function(a){this.lj=a;a={};for(var b=this;b;)b.lj&&(a[b.Ef]=b.lj),b=b.$l;for(var b=this,c,d,e;b;){for(d=0;d<b.kg.length;d++)if(e=b.kg[d],b.Ff()&&b.Ff()===e.bm){e.lj&&(a[e.Ef]=e.lj);c=e;break}b=c;c=void 0}c=z+"/"+E.Ay(g());c=p(c,a);window.history.replaceState(null,"",c)};b.b.g("Router.prototype.store",{A5:b.Ya.prototype.A5});b.Ya.prototype.d5=
function(){return this.lj};b.b.g("Router.prototype.retrieve",{d5:b.Ya.prototype.d5});b.Ya.prototype.Bu=function(){for(var a,c;0<this.kg.length;)this.kg[0].Bu();if(this.$l){a=this.$l.kg;for(c=0;c<a.length;c++)if(a[c].Ef===this.Ef){a.splice(c,1);break}delete this.bm}else z="",E={},window.removeEventListener("popstate",F),b.Ya.mu.removeAll(),L=!1;delete this.wx;this.Qt=[];this.vo=null;delete this.uk;delete this.lj};b.b.g("Router.prototype.dispose",{Bu:b.Ya.prototype.Bu});b.Ya.mu=new a.Signal;b.Ya.JD=
!1;Object.defineProperties(b.Ya,{rootInstance:{value:I,enumerable:!0},transitionedToState:{value:b.Ya.mu,enumerable:!0}});b.Ya.Gc={};o_("Router.defaults",b.Ya.Gc,b);Object.defineProperties(b.Ya.Gc,{urlAdapter:{get:function(){E||(E=new b.Ya.vP);return E},set:function(a){if(L)throw Error("Incorrect operation. Cannot change URL adapter after calling sync() or go().");E=a},enumerable:!0,VO:!1},baseUrl:{get:function(){z||(z=d());return z},set:function(a){if(L)throw Error("Incorrect operation. Cannot change base URL after calling sync() or go().");
z=a.replace(/\/$/,"")},enumerable:!0,VO:!1}});b.Ya.oP=function(){var a;D();b.r.info("Entering sync.");if(C)return a={Hc:I,path:C,Dna:!0,replace:!0},C=void 0,J(a);if(b.Ya.JD)return b.r.info("Sync called while updating, waiting for updates to end."),new Promise(function(a){b.Ya.mu.addOnce(function(c){b.r.info("Sync updates done.");a(c)})});a={Hc:I,url:g(),origin:"sync"};return J(a)};o_("Router.sync",b.Ya.oP,b);b.Ya.vP=function(){this.parse=function(a){var b=I;a=a.split("/");var c=[],d;do(d=a.shift())&&
(0===d.length||/\.html$/i.test(d))&&(d=void 0),d=d||b.uk,c.push({value:d,Hc:b}),b=l(b,d);while(b);return c};this.P1=function(a){var c="",d={};a.forEach(function(a){a.Yu&&(c+="/"+a.Yu);a.Hc.Wra&&(d[a.Hc.Ef]=a.Hc.lj)});""===c&&(c="/"+A);try{c=p(c,d)}catch(e){b.r.error("Error while building URL: %s",e)}return c};this.Ay=function(a){return a.split("?")[0]};this.h3=function(a){var b=a.indexOf("?"),d=null;-1!==b&&(d=a.substr(b+1));return c(d)}};o_("Router.urlPathAdapter",b.Ya.vP,b);b.Ya.yqa=function(){this.parse=
function(a){a=this.h3(a);var b=I,c=[],d;do{if(d=a[b.Ef])d=d[0],delete a[b.Ef];d=d||b.uk;c.push({value:d,Hc:b});b=l(b,d)}while(b);return c};this.P1=function(a){var c="/"+A,d={},e="?";a.forEach(function(a){a.Yu&&(c+=e+a.Hc.Ef+"\x3d"+a.Yu,e="\x26");a.Hc.lj&&(d[a.Hc.Ef]=a.Hc.lj)});try{c=p(c,d)}catch(f){b.r.error("Error while building URL: %s",f)}return c};this.Ay=function(a){var b=a.indexOf("oj_Router\x3d");return-1!==b?a.substr(0,b-1):a};this.h3=function(a){var b=a.indexOf("?"),d=null,d={};-1!==b&&(d=
a.substr(b+1),d=c(d));return d}};o_("Router.urlParamAdapter",b.Ya.yqa,b);return I})();(function(){b.bs=function(a,c,e){c=c||{};b.l.Fo(a);this.sj=encodeURIComponent(a.trim());(this.lw=c.canEnter)&&b.l.tu(this.lw);(this.Ew=c.enter)&&b.l.tu(this.Ew);(this.mw=c.canExit)&&b.l.tu(this.mw);(this.Fw=c.exit)&&b.l.tu(this.Fw);this.x1=c.value;this.MY=c.label;this.aD=e;this.ZE=void 0;Object.defineProperties(this,{id:{value:this.sj,enumerable:!0},value:{get:function(){return this.x1},set:function(a){this.x1=a},
enumerable:!0},label:{get:function(){return this.MY},set:function(a){this.MY=a},enumerable:!0},canEnter:{get:function(){return this.lw},set:function(a){this.lw=a},enumerable:!0},enter:{get:function(){return this.Ew},set:function(a){this.Ew=a},enumerable:!0},canExit:{get:function(){return this.mw},set:function(a){this.mw=a},enumerable:!0},exit:{get:function(){return this.Fw},set:function(a){this.Fw=a},enumerable:!0}})};o_("RouterState",b.bs,b);b.bs.prototype.go=function(){return this.aD?this.aD.go(this.sj):
(b.Ya.mu.dispatch({hasChanged:!1}),Promise.reject(Error("Router is not defined for this RouterState object.")))};b.b.g("RouterState.prototype.go",{go:b.bs.prototype.go});b.bs.prototype.U3=function(){if(!this.aD)throw Error("Router is not defined for this RouterState object.");return this.aD.Ff()===this.sj};b.b.g("RouterState.prototype.isCurrent",{U3:b.bs.prototype.U3})})();(function(){function a(b,c){if(null===b)return"";var d,e,f={},g={},h="",q=2,t=3,v=2,w="",u=0,y=0,x,B,O,J=b.length;for(O=0;O<J;O++)if(x=
b[O],Object.prototype.hasOwnProperty.call(f,x)||(f[x]=t++,g[x]=!0),B=h+x,Object.prototype.hasOwnProperty.call(f,B))h=B;else{if(Object.prototype.hasOwnProperty.call(g,h)){if(256>h.charCodeAt(0)){for(d=v;d--;)u<<=1,5==y?(y=0,w+=c(u),u=0):y++;e=h.charCodeAt(0);d=8}else{e=1;for(d=v;d--;)u=u<<1|e,5==y?(y=0,w+=c(u),u=0):y++,e=0;e=h.charCodeAt(0);d=16}for(;d--;)u=u<<1|e&1,5==y?(y=0,w+=c(u),u=0):y++,e>>=1;q--;0==q&&(q=Math.pow(2,v),v++);delete g[h]}else for(e=f[h],d=v;d--;)u=u<<1|e&1,5==y?(y=0,w+=c(u),u=
0):y++,e>>=1;q--;0==q&&(q=Math.pow(2,v),v++);f[B]=t++;h=String(x)}if(""!==h){if(Object.prototype.hasOwnProperty.call(g,h)){if(256>h.charCodeAt(0)){for(d=v;d--;)u<<=1,5==y?(y=0,w+=c(u),u=0):y++;e=h.charCodeAt(0);d=8}else{e=1;for(d=v;d--;)u=u<<1|e,5==y?(y=0,w+=c(u),u=0):y++,e=0;e=h.charCodeAt(0);d=16}for(;d--;)u=u<<1|e&1,5==y?(y=0,w+=c(u),u=0):y++,e>>=1;q--;0==q&&(q=Math.pow(2,v),v++);delete g[h]}else for(e=f[h],d=v;d--;)u=u<<1|e&1,5==y?(y=0,w+=c(u),u=0):y++,e>>=1;q--;0==q&&v++}e=2;for(d=v;d--;)u=u<<
1|e&1,5==y?(y=0,w+=c(u),u=0):y++,e>>=1;for(;;)if(u<<=1,5==y){w+=c(u);break}else y++;return w}function c(a,b){for(var c=[],d=4,f=4,g=3,h="",q="",t,v,w,u,y,x={val:b(0),position:32,index:1},q=0;3>q;q+=1)c[q]=q;h=0;w=Math.pow(2,2);for(u=1;u!=w;)v=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),h|=(0<v?1:0)*u,u<<=1;switch(h){case 0:h=0;w=Math.pow(2,8);for(u=1;u!=w;)v=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),h|=(0<v?1:0)*u,u<<=1;
y=e(h);break;case 1:h=0;w=Math.pow(2,16);for(u=1;u!=w;)v=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),h|=(0<v?1:0)*u,u<<=1;y=e(h);break;case 2:return""}for(t=q=c[3]=y;;){if(x.index>a)return"";h=0;w=Math.pow(2,g);for(u=1;u!=w;)v=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),h|=(0<v?1:0)*u,u<<=1;switch(y=h){case 0:h=0;w=Math.pow(2,8);for(u=1;u!=w;)v=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),
h|=(0<v?1:0)*u,u<<=1;c[f++]=e(h);y=f-1;d--;break;case 1:h=0;w=Math.pow(2,16);for(u=1;u!=w;)v=x.val&x.position,x.position>>=1,0==x.position&&(x.position=32,x.val=b(x.index++)),h|=(0<v?1:0)*u,u<<=1;c[f++]=e(h);y=f-1;d--;break;case 2:return q}0==d&&(d=Math.pow(2,g),g++);if(c[y])h=c[y];else if(y===f)h=t+t[0];else return null;q+=h;c[f++]=t+h[0];d--;t=h;0==d&&(d=Math.pow(2,g),g++)}}b.gQ={ena:function(b){return null===b?"":a(b,function(a){return f.charAt(a)})},Bna:function(a){return null===a?"":""===a?null:
c(a.length,function(b){var c=f;b=a.charAt(b);var d;h||(h={});if(!h[c])for(h[c]={},d=0;d<c.length;d++)h[c][c[d]]=d;return h[c][b]})}};var e=String.fromCharCode,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",h})()});