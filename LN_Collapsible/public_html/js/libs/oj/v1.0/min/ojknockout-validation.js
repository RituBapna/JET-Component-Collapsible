/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define("ojs/ojcore jquery knockout jqueryui ojs/ojknockout ojs/ojmessaging".split(" "),function(a,f,c){a.Nd=function(){this.Init()};o_("InvalidComponentTracker",a.Nd,a);a.b.ra(a.Nd,a.b,"oj.InvalidComponentTracker");a.Nd.prototype.Init=function(){a.Nd.t.Init.call(this);this.Sr=[];this.Bj=[];this.zn=[];this.invalidHidden=this.invalidShown=!1};a.Nd.prototype.IH=function(){var a=null,c=this,e=this.Ur;this.invalidShown&&(a=this.dv());setTimeout(function(){(a=e===c.Ur?a||c.dv():c.dv())&&a.call(a,"Focus")},
1);return a?!0:!1};a.b.g("InvalidComponentTracker.prototype.focusOnFirstInvalid",{IH:a.Nd.prototype.IH});a.Nd.prototype.showMessages=function(){var a,c,e;if(this.invalidHidden)for(c=this.zn.length,e=0;e<c;e++)this.zn[e]&&(a=this.Sr[e].call(a,"showMessages"))};a.b.g("InvalidComponentTracker.prototype.showMessages",{showMessages:a.Nd.prototype.showMessages});a.Nd.prototype.dv=function(){for(var a,c=0,e=this.Bj.length,c=0;c<e;c++)if(a=this.Bj[c])return this.Sr[c];return null};a.Nd.prototype.co=function(b,
c,e){var g=b.call(b,"isValid"),h=-1;f.each(this.Sr,function(a,c){0>h&&c===b&&(h=a)});if(e){0>h&&(h=this.Sr.push(b)-1);this.Wr(this.Bj,h,!1);this.Wr(this.zn,h,!1);if(!g)switch(c){case "messagesShown":a.Nd.Uq(e)&&this.Wr(this.Bj,h||0,!0);break;case "messagesHidden":a.Nd.Uq(e)&&this.Wr(this.zn,h||0,!0)}this.invalidShown=0<=this.Bj.indexOf(!0);this.invalidHidden=0<=this.zn.indexOf(!0);void 0===this.Ur&&(this.Ur=0);this.Ur++}return!0};a.Nd.prototype.Wr=function(a,c,e){0<=c?a.splice(c,1,e):a.push(e)};a.Nd.Uq=
function(b){return!a.U.isValid(b)};a.ec=function(){};a.ec.rz="invalidComponentTracker";a.ec.Fz="ojoptionchange";a.ec.ut="messagesShown";a.ec.tt="messagesHidden";a.ec.xM=function(b,c,e,f){f=f.call();f[b]&&a.ec.dT(b,f,c,e);return{}};a.ec.SG=function(b,d){var e=b.data.My,f=c.utils.unwrapObservable(e),h=b.data.va,k=d.option,l=d.value;(k===a.ec.ut||k===a.ec.tt)&&c.isWriteableObservable(e)&&f.co.call(f,h,k,l)&&e.valueHasMutated()};a.ec.TM=function(b){(b=f(b))&&b.off(a.ec.Fz,a.ec.SG)};a.ec.dT=function(b,
d,e,g){b=d[b];var h,k;d=c.utils.unwrapObservable(b);e=f(e);if(c.isObservable(b))null==d&&(d=new a.Nd,b(d));else throw Error("Binding attribute "+a.ec.rz+" should be bound to a ko observable.");null!==d&&(c.isWriteableObservable(b)&&(h=g.call(g,"option",a.ec.ut),k=g.call(g,"option",a.ec.tt),d.co.call(d,g,a.ec.ut,h),d.co.call(d,g,a.ec.tt,k),b.valueHasMutated()),g={My:b,va:g},e.on(a.ec.Fz,g,a.ec.SG))};a.ka.Eh().Mh({"for":"editableValue",attributes:[a.ec.rz],afterCreate:a.ec.xM,beforeDestroy:a.ec.TM})});
//# sourceMappingURL=oj-modular.map