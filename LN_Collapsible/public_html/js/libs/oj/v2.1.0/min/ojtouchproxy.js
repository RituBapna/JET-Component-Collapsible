/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(["ojs/ojcore","jquery"],function(b,f){b.Ce=function(a){this._init(a)};b.Ce.prototype._init=function(a){this.sc=a;this.xD=this.ky=!1;this.zD=f.proxy(this.Xla,this);this.iy=f.proxy(this.Vla,this);this.oM=f.proxy(this.Wla,this);this.sc.on({touchstart:this.zD,touchend:this.iy,touchmove:this.oM,touchcancel:this.iy})};b.Ce.prototype._destroy=function(){this.sc&&this.zD&&(this.sc.off({touchstart:this.zD,touchmove:this.oM,touchend:this.iy,touchcancel:this.iy}),this.oM=this.iy=this.zD=void 0)};b.Ce.prototype.Vq=
function(a,b){if(!(1<a.originalEvent.touches.length)){"touchstart"!=a.type&&"touchend"!=a.type&&a.preventDefault();var c=a.originalEvent.changedTouches[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null);c.target.dispatchEvent(e)}};b.Ce.prototype.Xla=function(a){this.ky||(this.ky=!0,this.xD=!1,this.Vq(a,"mouseover"),this.Vq(a,"mousemove"),this.Vq(a,"mousedown"))};b.Ce.prototype.Wla=function(a){this.ky&&(this.xD=!0,this.Vq(a,
"mousemove"))};b.Ce.prototype.Vla=function(a){this.ky&&(this.Vq(a,"mouseup"),this.Vq(a,"mouseout"),this.xD||"touchend"!=a.type||this.Vq(a,"click"),this.ky=!1)};b.Ce.uA="_ojTouchProxy";b.Ce.D1=function(a){a=f(a);var d=a.data(b.Ce.uA);d||(d=new b.Ce(a),a.data(b.Ce.uA,d));return d};b.Ce.Z4=function(a){a=f(a);var d=a.data(b.Ce.uA);d&&(d._destroy(),a.removeData(b.Ce.uA))}});