/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","ojs/ojknockout","ojs/ojmessaging"],function(b,f,a){b.Cb=function(){};b.Cb.Ev="invalidComponentTracker";b.Cb.oR="ojoptionchange";b.Cb.zl="messagesShown";b.Cb.wn="messagesHidden";b.Cb.vn="disabled";b.Cb.Nv="readOnly";b.Cb.xo=function(d,c,e,g,f){e={};f=f.call()[b.Cb.Ev];var k;if(d===b.Cb.vn||d===b.Cb.Nv)return k=f&&f.peek()||null,null!==k&&a.isWriteableObservable(f)&&k.xo.call(k,g,d,c)&&f.valueHasMutated(),e[d]=c,e};b.Cb._init=function(a,b){var e={};e[a]=b;return e};
b.Cb.q$=function(a,c,e,g){g=g.call();var f;a===b.Cb.Ev&&(f=g[a]?!0:!1)&&b.Cb.tja(a,g,c,e);return{}};b.Cb.Q$=function(d,c,e,g){c=f(c);g=g.call()[d];d===b.Cb.Ev&&c&&(c.off(b.Cb.oR,b.Cb.p1),g&&a.isWriteableObservable(g)&&(d=g.peek(),d.tL.call(d,e)&&g.valueHasMutated()))};b.Cb.p1=function(d,c){var e=d.data.rP,g,f=d.data.Q,k=c.option,l=c.value;(k===b.Cb.zl||k===b.Cb.wn)&&e&&a.isWriteableObservable(e)&&(g=e.peek())&&g.xo.call(g,f,k,l)&&e.valueHasMutated()};b.Cb.tja=function(d,c,e,g){d=c[d];var h,k;e=f(e);
if(a.isObservable(d))k=d.peek(),null==k&&(k=new b.Jb,d(k));else throw Error("Binding attribute "+b.Cb.Ev+" should be bound to a ko observable.");null!==k&&(a.isWriteableObservable(d)&&(c=g.call(g,"option",b.Cb.zl),h=g.call(g,"option",b.Cb.wn),k.xo.call(k,g,b.Cb.zl,c),k.xo.call(k,g,b.Cb.wn,h),d.valueHasMutated()),g={rP:d,Q:g},e.on(b.Cb.oR,g,b.Cb.p1))};b.ia.oh().sh({"for":"editableValue",attributes:[b.Cb.Ev,b.Cb.vn,b.Cb.Nv],init:b.Cb._init,update:b.Cb.xo,afterCreate:b.Cb.q$,beforeDestroy:b.Cb.Q$});
b.Jb=function(){this.Init()};o_("InvalidComponentTracker",b.Jb,b);b.b.ga(b.Jb,b.b,"oj.InvalidComponentTracker");b.Jb.zl="messagesShown";b.Jb.wn="messagesHidden";b.Jb.vn="disabled";b.Jb.Nv="readOnly";b.Jb.prototype.Init=function(){b.Jb.q.Init.call(this);this.ku=[];this.ao=[];this.Dt=[];this.invalidHidden=this.invalidShown=!1};b.Jb.prototype.B2=function(){var a=null,b=this,e=this.ED;this.invalidShown&&(a=this.cJ());setTimeout(function(){(a=e===b.ED?a||b.cJ():b.cJ())&&a.call(a,"Focus")},1);return a?
!0:!1};b.b.g("InvalidComponentTracker.prototype.focusOnFirstInvalid",{B2:b.Jb.prototype.B2});b.Jb.prototype.showMessages=function(){var a,b,e;if(this.invalidHidden)for(b=this.Dt.length,e=0;e<b;e++)this.Dt[e]&&(a=this.ku[e].call(a,"showMessages"))};b.b.g("InvalidComponentTracker.prototype.showMessages",{showMessages:b.Jb.prototype.showMessages});b.Jb.prototype.cJ=function(){for(var a,b=0,e=this.ao.length,b=0;b<e;b++)if(a=this.ao[b])return this.ku[b];return null};b.Jb.prototype.tL=function(a){var b=
-1,e=!1;f.each(this.ku,function(e,f){0>b&&f===a&&(b=e)});0<=b&&(this.ku.splice(b,1),this.ao.splice(b,1),this.Dt.splice(b,1),this.QM(),e=!0);return e};b.Jb.prototype.xo=function(a,c,e){var g=a.call(a,"isValid"),h=-1,k=!0,l;f.each(this.ku,function(b,c){0>h&&c===a&&(h=b)});switch(c){case b.Jb.zl:case b.Jb.wn:l=!1;e&&(0>h&&(h=this.ku.push(a)-1,this.Hga(h,l)),!g&&b.Jb.iK(e)&&(l=!0,c===b.Jb.zl&&(e=a.call(a,"option",b.Jb.vn),g=a.call(a,"option",b.Jb.Nv),l=e||g?!1:!0)),k=this.ny(c,h||0,l),this.QM(),k&&(void 0===
this.ED&&(this.ED=0),this.ED++));break;case b.Jb.vn:case b.Jb.Nv:k=!1,e&&(k=this.ny(b.Jb.zl,h||0,!1),k=this.ny(b.Jb.wn,h||0,!1)||k,this.QM())}return k};b.Jb.prototype.Hga=function(a,c){void 0===this.ao[a]&&this.ny(b.Jb.zl,a,c);void 0===this.Dt[a]&&this.ny(b.Jb.wn,a,c)};b.Jb.prototype.QM=function(){this.invalidShown=0<=this.ao.indexOf(!0);this.invalidHidden=0<=this.Dt.indexOf(!0)};b.Jb.prototype.ny=function(a,c,e){var g=!1;a=a===b.Jb.zl?this.ao:a===b.Jb.wn?this.Dt:[];0<=c&&void 0!==a[c]?(g=a[c]!==
e?!0:!1)&&a.splice(c,1,e):(a.push(e),g=!0);return g};b.Jb.iK=function(a){return!b.X.isValid(a)}});