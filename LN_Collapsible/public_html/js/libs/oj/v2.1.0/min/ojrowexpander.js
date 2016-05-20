/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdatasource-common"],function(b,f){b.Pe=function(a,b){this.lpa=a;this.ac=b};o_("EmptyNodeSet",b.Pe,b);b.Pe.prototype.getParent=function(){return this.lpa};b.b.g("EmptyNodeSet.prototype.getParent",{getParent:b.Pe.prototype.getParent});b.Pe.prototype.ta=function(){return this.ac};b.b.g("EmptyNodeSet.prototype.getStart",{ta:b.Pe.prototype.ta});b.Pe.prototype.R=function(){return 0};b.b.g("EmptyNodeSet.prototype.getCount",{R:b.Pe.prototype.R});
b.Pe.prototype.getData=function(){return null};b.b.g("EmptyNodeSet.prototype.getData",{getData:b.Pe.prototype.getData});b.Pe.prototype.getMetadata=function(){return null};b.b.g("EmptyNodeSet.prototype.getMetadata",{getMetadata:b.Pe.prototype.getMetadata});b.Qe=function(a,b){this.zb=a;this.ac=b};o_("FlattenedNodeSet",b.Qe,b);b.Qe.prototype.getParent=function(){return this.zb.getParent()};b.b.g("FlattenedNodeSet.prototype.getParent",{getParent:b.Qe.prototype.getParent});b.Qe.prototype.ta=function(){return void 0!=
this.ac?this.ac:this.zb.ta()};b.b.g("FlattenedNodeSet.prototype.getStart",{ta:b.Qe.prototype.ta});b.Qe.prototype.R=function(){void 0===this.AE&&(this.AE=this.$V(this.zb,0),void 0!=this.ac&&(this.AE-=this.ac));return this.AE};b.b.g("FlattenedNodeSet.prototype.getCount",{R:b.Qe.prototype.R});b.Qe.prototype.$V=function(a,b){var c,e,f,h;c=a.ta();e=a.R();b+=e;if(a.Mf)for(f=0;f<e;f++)h=a.Mf(f+c),null!=h&&(b=this.$V(h,b));return b};b.Qe.prototype.getData=function(a){return this.YI(this.zb,a,{index:this.zb.ta()},
this.eb)};b.b.g("FlattenedNodeSet.prototype.getData",{getData:b.Qe.prototype.getData});b.Qe.prototype.getMetadata=function(a){return this.YI(this.zb,a,{index:this.zb.ta()},this.oJ)};b.b.g("FlattenedNodeSet.prototype.getMetadata",{getMetadata:b.Qe.prototype.getMetadata});b.Qe.prototype.oJ=function(a,b){return a.getMetadata(b)};b.Qe.prototype.eb=function(a,b){return a.getData(b)};b.Qe.prototype.YI=function(a,b,c,e){var f,h,k,l;f=a.ta();h=a.R();for(k=0;k<h;k++){l=c.index;if(l===b)return e.call(this,
a,k+f);c.index=l+1;if(a.Mf&&(l=a.Mf(k+f),null!=l&&(l=this.YI(l,b,c,e),null!=l)))return l}return null};b.Qg=function(a,b,c){this.To=a;this.EO=b;this.DO=this.Rca(c)};o_("MergedNodeSet",b.Qg,b);b.Qg.prototype.Rca=function(a){var b,c,e;b=this.To.ta();for(c=b+this.To.R();b<c;b++)if(e=this.To.getMetadata(b).key,a===e)return b;return c-1};b.Qg.prototype.getParent=function(){return this.To.getParent()};b.b.g("MergedNodeSet.prototype.getParent",{getParent:b.Qg.prototype.getParent});b.Qg.prototype.ta=function(){return this.To.ta()};
b.b.g("MergedNodeSet.prototype.getStart",{ta:b.Qg.prototype.ta});b.Qg.prototype.R=function(){return this.To.R()+this.EO.R()};b.b.g("MergedNodeSet.prototype.getCount",{R:b.Qg.prototype.R});b.Qg.prototype.getData=function(a){a=this.NW(a);return a.set.getData(a.index)};b.b.g("MergedNodeSet.prototype.getData",{getData:b.Qg.prototype.getData});b.Qg.prototype.getMetadata=function(a){a=this.NW(a);return a.set.getMetadata(a.index)};b.b.g("MergedNodeSet.prototype.getMetadata",{getMetadata:b.Qg.prototype.getMetadata});
b.Qg.prototype.NW=function(a){if(a<=this.DO)return{set:this.To,index:a};var b=this.EO.R();return a>this.DO+b?{set:this.To,index:a-b}:{set:this.EO,index:a-(this.DO+1)}};b.Te=function(a,b,c,e){this.zb=a;this.Nj=b;this.Pu=c;this.Li=e};o_("NodeSetWrapper",b.Te,b);b.Te.prototype.getParent=function(){return this.zb.getParent()};b.b.g("NodeSetWrapper.prototype.getParent",{getParent:b.Te.prototype.getParent});b.Te.prototype.ta=function(){return null!=this.Pu?this.Pu.start:this.zb.ta()};b.b.g("NodeSetWrapper.prototype.getStart",
{ta:b.Te.prototype.ta});b.Te.prototype.R=function(){var a,b;a=this.zb.ta();b=this.zb.R();null!=this.Pu&&(this.Pu.start>a?b=Math.min(0,b-(this.Pu.start-a)):this.Pu.start<a&&(b=0));return b};b.b.g("NodeSetWrapper.prototype.getCount",{R:b.Te.prototype.R});b.Te.prototype.getData=function(a){return this.zb.getData(a)};b.b.g("NodeSetWrapper.prototype.getData",{getData:b.Te.prototype.getData});b.Te.prototype.getMetadata=function(a){var b;b=this.zb.getMetadata(a);b.index=a;b.parentKey=this.getParent();this.Nj.call(null,
b.key,b);return b};b.b.g("NodeSetWrapper.prototype.getMetadata",{getMetadata:b.Te.prototype.getMetadata});b.Te.prototype.Mf=function(a){return null!=this.Li&&-1!=this.Li.indexOf(this.zb.getMetadata(a).key)||!this.zb.Mf||(a=this.zb.Mf(a),null==a)?null:new b.Te(a,this.Nj,null,this.Li)};b.b.g("NodeSetWrapper.prototype.getChildNodeSet",{Mf:b.Te.prototype.Mf});b.ca=function(a,d){this.Dd=a;this.hz=d||{};b.ca.q.constructor.call(this)};o_("FlattenedTreeDataSource",b.ca,b);b.b.ga(b.ca,b.Ti,"oj.FlattenedTreeDataSource");
b.ca.prototype.Init=function(){var a;b.ca.q.Init.call(this);this.Dd.on("change",this.Efa.bind(this));this.yO=parseInt(this.hz.fetchSize,10);isNaN(this.yO)&&(this.yO=25);this.ur=parseInt(this.hz.maxCount,10);isNaN(this.ur)&&(this.ur=500);a=this.hz.expanded;Array.isArray(a)?this.Cm=a:("all"===a&&(this.Li=[]),this.Cm=[]);this.Bm=[]};b.b.g("FlattenedTreeDataSource.prototype.Init",{Init:b.ca.prototype.Init});b.ca.prototype.handleEvent=function(a,d){return b.ca.q.handleEvent.call(this,a,d)};b.b.g("FlattenedTreeDataSource.prototype.handleEvent",
{handleEvent:b.ca.prototype.handleEvent});b.ca.prototype.Oe=function(){delete this.Bm;delete this.Cm;delete this.Li;this.Dd.off("change");this.Dd.Oe&&this.Dd.Oe()};b.b.g("FlattenedTreeDataSource.prototype.Destroy",{Oe:b.ca.prototype.Oe});b.ca.prototype.KN=function(){return this.yO};b.ca.prototype.V2=function(){return this.Cm};b.b.g("FlattenedTreeDataSource.prototype.getExpandedKeys",{V2:b.ca.prototype.V2});b.ca.prototype.Ly=function(a){return null!=this.hz?this.hz[a]:null};b.b.g("FlattenedTreeDataSource.prototype.getOption",
{Ly:b.ca.prototype.Ly});b.ca.prototype.getWrappedDataSource=function(){return this.Dd};b.b.g("FlattenedTreeDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:b.ca.prototype.getWrappedDataSource});b.ca.prototype.bJ=function(a){var b,c;b=this.KN();c=this.ur;return-1===b?-1===a?c:a:-1===a?Math.min(b,a):b};b.ca.prototype.Vk=function(a,b){this.Gt()?this.Mca(a,b):this.Lca(a,b)};b.ca.prototype.Lca=function(a,d){var c,e,f,h,k,l;if(a.start>this.Ee()){c=this.mJ();if(0>this.Ee()){a.count=Math.min(c,
a.count);this.Dd.Jf(null,a,{success:function(b){this.Yn(b,null,0,a,0,d)}.bind(this),error:function(a){this.Vl(a,d)}.bind(this)});return}if(0<c){e=this.tW();f=e.parent;h=this.Dd.af(f);k=e.index;l=e.depth;-1===h||k<h-1?(e=this.bJ(h),a.start=k+1,a.count=-1===h?Math.min(e,a.count):Math.min(c,Math.min(Math.min(e,a.count),h-a.start)),this.Dd.Jf(f,a,{success:function(b){this.Yn(b,f,l,a,h,d)}.bind(this),error:function(a){this.Vl(a,d)}.bind(this)})):k===h-1?(c=new b.Pe(null,a.start),null!=d&&null!=d.success&&
d.success.call(null,c)):(c=this.xV(f,l,d,c),c||(c=new b.Pe(null,a.start),null!=d&&null!=d.success&&d.success.call(null,c)));return}}this.XN(a,d)};b.ca.prototype.qd=function(a,b,c){return this.Dd.qd(a,b,c)};b.b.g("FlattenedTreeDataSource.prototype.moveOK",{qd:b.ca.prototype.qd});b.ca.prototype.move=function(a,b,c,e){this.Dd.move(a,b,c,e)};b.b.g("FlattenedTreeDataSource.prototype.move",{move:b.ca.prototype.move});b.ca.prototype.mJ=function(){return this.ur-(this.Ee()+1)};b.ca.prototype.Vl=function(a,
b){null!=b&&null!=b.error&&b.error.call(null,a)};b.ca.prototype.Yn=function(a,d,c,e,f,h){var k;k=[];a=new b.Te(a,this.Sy.bind(this),e);this.Ria(a,d,c,k);-1===f&&0===a.R()&&null!=d&&0<c?(k=this.xV(d,c,h))||null!=h&&null!=h.success&&h.success.call(null,a):0===k.length?null!=h&&null!=h.success&&h.success.call(null,a):(d=[],d.push(k),k={},k.callbacks=h,k.nodeSet=a,k.keys=[],this.T0(d,k))};b.ca.prototype.af=function(a){return this.Dd.af(a)};b.b.g("FlattenedTreeDataSource.prototype.getChildCount",{af:b.ca.prototype.af});
b.ca.prototype.xV=function(a,b,c,e){var f,h,k,l,m,n,p,r,s;void 0===e&&(e=this.mJ());this.Rga()&&(f={queueOnly:!0});h=s=this.bJ(-1);for(k=this.Ee()-1;0<=k;k--)if(l=this.ah(k),m=l.depth,m<b&&(a=l.parent,n=this.Dd.af(a),l=l.index,(p=-1===n)||l<n-1)){r={};r.start=l+1;p?(r.count=Math.min(e,Math.max(0,h)),f=void 0):r.count=Math.min(e,Math.min(h,n-r.start));if(0==r.count)break;this.Dd.Jf(a,r,{success:function(b){this.Yn(b,a,m,r,n,c)}.bind(this),error:function(a){this.Vl(a,c)}.bind(this)},f);b=m;h=Math.max(0,
h-r.count);if(p||0===m||0===h)break}void 0!=f&&this.Dd.Jf(a,{start:r.count,count:0},{success:function(b){this.Yn(b,a,m,r,n,c)}.bind(this),error:function(a){this.Vl(a,c)}.bind(this)});return h!=s};b.ca.prototype.Ria=function(a,b,c,e){var f,h,k,l;f=a.ta();h=a.R();for(k=0;k<h;k++)l=a.getMetadata(f+k),l=l.key,this.DA(l,c,f+k,b),this.gx(l)&&e.push(l)};b.ca.prototype.Sy=function(a,b){this.gx(a)&&!b.leaf?b.state="expanded":b.state=b.leaf?"leaf":"collapsed"};b.ca.prototype.Mca=function(a,b){var c={maxCount:this.ur};
0<=this.Ee()&&(c.start=this.ah(this.Ee()).key);this.Dd.Cu(null,{success:function(c){this.mfa(c,a,b)}.bind(this),error:function(a){this.Vl(a,b)}.bind(this)},c)};b.ca.prototype.vm=function(){return this.Dd.vm()};b.b.g("FlattenedTreeDataSource.prototype.getSortCriteria",{vm:b.ca.prototype.vm});b.ca.prototype.mfa=function(a,d,c){var e,f,h;d.start>this.Ee()?(e=this.mJ(),f=Math.min(e,d.count),a=new b.Te(a,this.Sy.bind(this),null,this.Li),0<=this.Ee()?(h=this.tW(),e={index:0,found:!1,count:0},this.hL(a,
null,0,h,f,e),f=e.index+1):(e={count:0},this.hL(a,null,0,null,f,e),f=0),null!=c&&null!=c.success&&(a=null!=e?0===e.count?new b.Pe(null,d.start):new b.Qe(a,f):new b.Qe(a),c.success.call(null,a))):this.XN(d,c)};b.ca.prototype.hL=function(a,b,c,e,f,h){var k,l,m,n,p;k=a.ta();l=a.R();for(m=0;m<l&&h.count!=f;m++){n=a.getMetadata(k+m);p=n.key;h.checkDepth&&e.depth===c&&(h.found=!0,h.checkDepth=!1);if(null==e||h.found)this.DA(p,c,k+m,b),h.count+=1,n.state=n.leaf?"leaf":"expanded";null==e||h.found||(p===e.key?
n.leaf||this.gx(p)?h.found=!0:h.checkDepth=!0:h.index+=1);a.Mf&&this.gx(p)&&(n=a.Mf(m),null!=n&&this.hL(n,p,c+1,e,f,h))}};b.ca.prototype.expand=function(a){this.ae(a)};b.b.g("FlattenedTreeDataSource.prototype.expand",{expand:b.ca.prototype.expand});b.ca.prototype.ae=function(a,d){var c,e,f,h;c=this.Dd.af(a);e=this.bJ(c);f=this.ur;if(this.Ee()+1===f&&(h=this.Ii(a),h==f-1)){this.WN(a,new b.Pe(a,0),0,d);return}0==e?this.WN(a,new b.Pe(a,0),0,d):this.Dd.Jf(a,{start:0,count:e},{success:function(b){this.WN(a,
b,c,d)}.bind(this),error:function(){this.xoa(a)}.bind(this)})};b.ca.prototype.collapse=function(a){var b,c,e,f,h;b=this.Ii(a)+1;c=this.ah(b-1);e=0;c=c.depth;f=this.Ee();for(h=b;h<f+1;h++){var k=this.ah(h).depth;if(k>c)e+=1;else if(k==c)break}if(0!=e){this.Gt()?this.Li.push(a):this.Fja(a);f=[];for(c=0;c<e;c++)f.push({key:this.ah(b+c).key,index:b+c});this.l_(b,e);this.SE(f)}this.handleEvent("collapse",{rowKey:a})};b.b.g("FlattenedTreeDataSource.prototype.collapse",{collapse:b.ca.prototype.collapse});
b.ca.prototype.gx=function(a){return this.Gt()?this.Li&&0<this.Li.length?-1===this.SV(a):!0:this.Cm&&0<this.Cm.length?-1<this.fW(a):!1};b.ca.prototype.SV=function(a){return this.rW(this.Li,a)};b.ca.prototype.fW=function(a){return this.rW(this.Cm,a)};b.ca.prototype.rW=function(a,b){var c,e;e=-1;for(c=0;c<a.length;c++)a[c]===b&&(e=c);return e};b.ca.prototype.Fja=function(a){a=this.fW(a);-1<a&&this.Cm.splice(a,1)};b.ca.prototype.zja=function(a){a=this.SV(a);-1<a&&this.Li.splice(a,1)};b.ca.prototype.xoa=
function(a){this.handleEvent("expand",{rowKey:a})};b.ca.prototype.WN=function(a,d,c,e){var f,h,k,l,m,n,p,r,s,q,t;d=new b.Te(d,this.Sy.bind(this));h=f=this.Ii(a)+1;k=d.ta();l=d.R();m=this.ah(f-1);n=m.depth+1;r=[];for(s=k;s<l;s++)k=d.getMetadata(s),p=k.key,this.gx(p)&&r.push(p),this.hY(f,k,m.key,s,n),f++;this.Gt()?this.zja(a):-1===this.Cm.indexOf(a)&&this.Cm.push(a);void 0!=e&&(q=e.queue,t=e.prevNodeSetInfo);void 0!=t&&(d=new b.Qg(t.nodeSet,d,a));if(0!=r.length||void 0!==q&&0!=q.length)void 0===q&&
(q=[]),0<r.length&&q.push(r),void 0===t&&(t={},t.firstIndex=h,t.firstKey=a,t.keys=[]),t.nodeSet=d,t.keys.push(a),this.T0(q,t);else{if(void 0!=t){e=t.callbacks;if(null!=e){e.success.call(null,d);return}this.uE(t.firstIndex,t.firstKey,d)}else this.uE(h,a,d);d=this.ur;-1===c&&l===this.KN()||c>l||f==d?this.lI(f):this.Ee()>=d&&this.lI(d);if(void 0!=t)for(c=0;c<t.keys.length;c++)this.handleEvent("expand",{rowKey:t.keys[c]});this.handleEvent("expand",{rowKey:a})}};b.ca.prototype.T0=function(a,b){var c,e;
c=a[a.length-1];e=c.shift();0===c.length&&a.pop();this.ae(e,{prevNodeSetInfo:b,queue:a})};b.ca.prototype.hY=function(a,b,c,e,f){b=b.key;a<=this.Ee()?this.DA(b,f,e,c,a):this.DA(b,f,e,c)};b.ca.prototype.lI=function(a,b){var c;void 0==b&&(b=this.Ee()+1-a);c=[];for(var e=0;e<b;e++)c.push({row:this.ah(a+e).key,index:a+e});this.l_(a,b);this.SE(c)};b.ca.prototype.Efa=function(a){var b,c,e;b=a.operation;c=a.parent;c=Array.isArray(c)?c[c.length-1]:c;e=a.index;"insert"===b?this.rfa(c,e,a.data):"delete"===b?
this.afa(c,e):"refresh"===b&&this.Mfa(c)};b.ca.prototype.rfa=function(a,b,c){var e,f;e=this.Ii(a);f=this.ah(e).depth+1;e=e+b+1;c=c.getMetadata(c.ta());this.hY(e,c,a,b,f)};b.ca.prototype.afa=function(a,d){var c,e,f,h,k;c=this.Ii(a);e=this.ah(c);c+=d;f=this.ah(c);b.l.assert(f.parent===e&&f.depth===e.depth+1);e=c+1;for(h=this.Ee();e<=h;){k=this.ah(e);if(k.depth!=f.depth)break;e++}this.lI(c,1)};b.ca.prototype.Mfa=function(a){null==a&&this.refresh()};b.ca.prototype.Gt=function(){var a=this.Dd.getCapability("fetchDescendants");
return void 0!=this.Li&&null!=a&&"disable"!=a};b.ca.prototype.Rga=function(){return"enable"===this.Dd.getCapability("batchFetch")};b.ca.prototype.refresh=function(){this.vaa()};b.ca.prototype.Ii=function(a){var b,c,e;b=this.Ee();for(c=0;c<=b;c++)if(e=this.ah(c),e.key==a)return c;return-1};b.ca.prototype.getKey=function(a){return 0>a||a>this.Ee()?null:this.ah(a).key};b.ca.prototype.$na=function(){return{start:0,end:this.Ee()+1}};b.ca.prototype.Vna=function(a){var b;b=[];a=this.Ii(a);for(a=this.qj(a);null!=
a;)b.push(a),a=this.Ii(a),a=this.qj(a);return b.reverse()};b.ca.prototype.XN=function(a,b){null!=b&&null!=b.error&&b.error.call(null)};b.ca.prototype.uE=function(){b.l.Zb()};b.ca.prototype.SE=function(){b.l.Zb()};b.ca.prototype.Ee=function(){return this.Bm.length-1};b.ca.prototype.tW=function(){return this.Bm[this.Ee()]};b.ca.prototype.ah=function(a){return this.Bm[a]};b.ca.prototype.qj=function(a){a=this.Bm[a];return null!=a?a.parent:null};b.ca.prototype.DA=function(a,b,c,e,f){var h={};h.key=a;h.depth=
b;h.index=c;h.parent=e;void 0===f?this.Bm.push(h):this.Bm.splice(f,0,h)};b.ca.prototype.l_=function(a,b){this.Bm.splice(a,b)};b.ca.prototype.vaa=function(){this.Bm.length=0};b.ca.prototype.getCapability=function(a){return this.Dd.getCapability(a)};b.b.g("FlattenedTreeDataSource.prototype.getCapability",{getCapability:b.ca.prototype.getCapability});b.ya("oj.ojRowExpander",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{context:null,expand:null,collapse:null},Rk:{root:"oj-rowexpander",
icon:"oj-component-icon",clickable:"oj-clickable-icon-nocontext",expand:"oj-rowexpander-expand-icon",collapse:"oj-rowexpander-collapse-icon",leaf:"oj-rowexpander-leaf-icon",lazyload:"oj-rowexpander-lazyload-icon",toucharea:"oj-rowexpander-touch-area",indent:"oj-rowexpander-indent",iconspacer:"oj-rowexpander-icon-spacer",depth0:"oj-rowexpander-depth-0",depth1:"oj-rowexpander-depth-1",depth2:"oj-rowexpander-depth-2",depth3:"oj-rowexpander-depth-3",depth4:"oj-rowexpander-depth-4",depth5:"oj-rowexpander-depth-5",
depth6:"oj-rowexpander-depth-6",depth7:"oj-rowexpander-depth-7"},xu:{qv:7,Q6:53},_ComponentCreate:function(){this._super();this.element.addClass(this.Rk.root);this.VX()},VX:function(){var a=this,b;b=this.options.context;this.Q="function"===typeof b.component?b.component("instance"):b.component;this.mc=b.datasource;this.depth=b.depth;this.Rh=b.state;this.Mm=b.key;this.index=b.index;this.KE=b.parentKey;this.e$();this.d$();this.gD();"expanded"===this.Rh||"collapsed"===this.Rh?(f(this.qP).on("touchend",
function(b){b.preventDefault();a.OI()}),f(this.qP).on("click",function(b){b.preventDefault();a.OI()}),f(this.element).on("keypress",function(b){var d=b.keyCode||b.which;if(d===f.ui.keyCode.ENTER||d===f.ui.keyCode.SPACE)a.OI(),b.preventDefault(),b.target.focus()}),this.sE=this.sX.bind(this),f(this.Q.element).on("ojkeydown",this.sE),this.F3=this.kfa.bind(this),this.E3=this.Sea.bind(this),this.mc.on("expand",this.F3,this),this.mc.on("collapse",this.E3,this)):"leaf"===this.Rh&&(this.sE=this.sX.bind(this),
f(this.Q.element).on("ojkeydown",this.sE),f(this.icon).attr("tabindex",-1));this.D3=this.Iea.bind(this);f(this.Q.element).on("ojbeforecurrentcell",this.D3)},refresh:function(){this.element.empty();this.VX()},_destroy:function(){f(this.Q.element).off("ojkeydown",this.sE);f(this.Q.element).off("ojbeforecurrentcell",this.D3);this.mc.off("expand",this.F3,this);this.mc.off("collapse",this.E3,this);this.element.removeClass(this.Rk.root);this.element.empty()},_setOption:function(a,b,c){this._super(a,b,c);
"context"==a&&this.refresh()},e$:function(){var a,b;b=this.depth-1;if(b<this.xu.qv)this.dH(b);else{for(a=1;a<=b/this.xu.qv;a++)this.dH(this.xu.qv);a=b%this.xu.qv;a<this.xu.qv&&this.dH(a)}},dH:function(a){a=f(document.createElement("span")).addClass(this.Rk.indent).addClass(this.Rk["depth"+a]);this.element.append(a)},d$:function(){var a=f(document.createElement("div")).addClass(this.Rk.iconspacer);this.qP=f(document.createElement("div")).addClass(this.Rk.toucharea);this.icon=f(document.createElement("a")).attr("href",
"#").attr("aria-labelledby",this.sW()).addClass(this.Rk.icon).addClass(this.Rk.clickable);this.element.append(a.append(this.qP.append(this.icon)))},Rp:function(a){this.icon.addClass(this.Rk[a])},Mq:function(a){this.icon.removeClass(this.Rk[a])},gD:function(){switch(this.Rh){case "leaf":this.Mq("icon");this.Mq("clickable");this.Rp("leaf");break;case "collapsed":this.Rp("expand");this.JA(!1);break;case "expanded":this.Rp("collapse");this.JA(!0);break;case "loading":this.Mq("clickable"),this.Rp("lazyload")}},
uL:function(){switch(this.Rh){case "leaf":this.Mq("leaf");this.Rp("icon");this.Rp("clickable");break;case "collapsed":this.Mq("expand");break;case "expanded":this.Mq("collapse");break;case "loading":this.Mq("lazyload"),this.Rp("clickable")}},Iea:function(a,b){var c,e;null!=b.currentCell&&(c="cell"==b.currentCell.type?b.currentCell.keys.row:b.currentCell.key,null!=b.previousValue&&(e="cell"==b.previousCurrentCell.type?b.previousCurrentCell.keys.row:b.previousCurrentCell.key),this.Mm===c&&e!=c&&this.Q.cD&&
(c=this.A("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.mc.getWrappedDataSource().af(this.KE)}),e="collapsed"===this.Rh?this.A("accessibleStateCollapsed"):"expanded"===this.Rh?this.A("accessibleStateExpanded"):"",this.Q.cD({context:c,state:e})))},sX:function(a,d){var c,e,g;if(this.Mm===d.rowKey&&(a=a.originalEvent,c=a.keyCode||a.which,b.v.Am(a)))if(c==f.ui.keyCode.RIGHT&&"collapsed"===this.Rh)this.LK(),this.mc.expand(this.Mm),a.preventDefault();else if(c==f.ui.keyCode.LEFT&&
"expanded"===this.Rh)this.LK(),this.mc.collapse(this.Mm),a.preventDefault();else if(a.altKey&&c==this.xu.Q6&&this.Q.cD){c=this.mc.Vna(this.Mm);if(null!=c&&0<c.length)for(e=[],g=0;g<c.length;g++)e.push({key:c[g],label:this.A("accessibleLevelDescription",{level:g+1})});c=this.A("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.mc.getWrappedDataSource().af(this.KE)});this.Q.cD({context:c,state:"",ancestors:e});a.preventDefault()}},LK:function(){this.uL();this.Rh="loading";this.gD()},
kfa:function(a){a=a.rowKey;a===this.Mm&&(this.uL(),this.Rh="expanded",this.gD(),this.JA(!0),this._trigger("expand",null,{rowKey:a}))},Sea:function(a){a=a.rowKey;a===this.Mm&&(this.uL(),this.Rh="collapsed",this.gD(),this.JA(!1),this._trigger("collapse",null,{rowKey:a}))},OI:function(){var a=this.Rh;this.LK();"collapsed"===a?this.mc.expand(this.Mm):"expanded"===a&&this.mc.collapse(this.Mm)},JA:function(a){this.icon.attr("aria-expanded",a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:
null;a=a.subId;return"oj-rowexpander-disclosure"!==a&&"oj-rowexpander-icon"!==a||null==this.icon?null:this.icon.get(0)},getSubIdByNode:function(a){return a===this.icon.get(0)?{rsa:"oj-rowexpander-disclosure"}:null},sn:function(){this._super();this.icon.attr("aria-labelledby",this.sW())},sW:function(){return this.element.parent().closest("[id]").attr("id")}})});