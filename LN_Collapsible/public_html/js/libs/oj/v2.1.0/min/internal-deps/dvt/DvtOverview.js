/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.bP={am:function(){return(0,D.Jf)()}};D.z.l(D.bP,D.z,"DvtTimeUtils");D.bP.fe=function(a,b,c,d){c=(c-a)*d;a=b-a;return 0==c||0==a?0:c/a};D.bP.rg=function(a,b,c,d){b=c*(b-a);return 0==b||0==d?a:b/d+a};
D.xo=function(a,b,c){this.Init(a,b,c)};(0,D.da)("DvtOverview",D.xo);D.z.l(D.xo,D.D,"DvtOverview");
D.xo.prototype.Init=function(a,b,c){D.xo.o.Init.call(this,a);this.lb=b;this.ra=c;this.xq=this.FH()?7:6;if(this.lb!=D.o||this.ra!=D.o)this.Ia=new D.aP(this),this.Ia.me(this),D.bP.am()?(this.la(D.kh,this.kU,D.p,this),this.la(D.VB,this.Afa,D.p,this),this.la(D.WB,this.jU,D.p,this),this.la(D.kk,this.uE,D.p,this)):(this.la(D.Yz,this.fU,D.p,this),this.la(D.Zz,this.eU,D.p,this),this.la(D.kk,this.uE,D.p,this),this.la(D.bj,this.DN,D.p,this),this.la(D.dj,this.q2,D.p,this));this.g7=0};
D.xo.prototype.Yl=function(a,b,c){c==D.o&&(c=this.Ga);a=this.fe(a);var d=this.fe(b);a<this.ot||d>(0,D.cP)(this)||(b=window.Math.max(d-a,(0,D.dP)(this)),0<b&&(0<=a&&d<=c)&&(d=this.ha(1),(0,D.eP)(this)?(0,D.fP)(this,d,c-(a+b)):(0,D.fP)(this,d,a),(0,D.gP)(this,d,b),(0,D.hP)(this)))};D.iP=function(a){return a.DW==D.o?D.p:-1!=D.H.wa(a.DW,"zoom")};
D.xo.prototype.P=function(a,b,c){if(a==D.o){var d=this.ob,e=this.Xb,f=this.ha(1),g=(0,D.jP)(this,f);f!=D.o&&0!=g&&(this.zoa=D.bP.rg(d,e,g,this.Ga));this.Cj()}b!=D.o&&c!=D.o&&(this.Ga=b,this.Ta=c);a&&(a=this.AE(a),this.Ku(a));a=this.lb!=D.o||this.ra!=D.o;this.eqa(b,c);if(a){e=(d=this.Sa())?new D.Te(this.j(),0,0,b,0,"window"):new D.Te(this.j(),0,0,0,c,"window");e.pa(this.mZ,this.NGa);(0,D.Ei)(e);if(!(0,D.iP)(this)){var h=(0,D.kP)(),j=(0,D.lP)();if(d){var l=(b-36)/2,m=D.K.moveTo(l,0)+D.K.Uc(l+3,6,l+
8,8)+D.K.lineTo(l+28,8)+D.K.Uc(l+33,6,l+36,0);D.K.closePath();g=D.K.moveTo(l,0)+D.K.Uc(l+3,-6,l+8,-8)+D.K.lineTo(l+28,-8)+D.K.Uc(l+33,-6,l+36,0);D.K.closePath();var f=new D.Te(this.j(),0,0,b,h,"lhb"),h=new D.Te(this.j(),0,0,b,h,"rhb"),n="row-resize";if(this.P6)var q=(0,D.mP)(this,b,10),l=(0,D.mP)(this,b,10);else q=(0,D.nP)(this,l),l=(0,D.nP)(this,l)}else l=(c-36)/2,m=D.K.moveTo(0,l)+D.K.Uc(6,l+3,8,l+8)+D.K.lineTo(8,l+28)+D.K.Uc(6,l+33,0,l+36),D.K.closePath(),g=D.K.moveTo(0,l)+D.K.Uc(-6,l+3,-8,l+8)+
D.K.lineTo(-8,l+28)+D.K.Uc(-6,l+33,0,l+36),D.K.closePath(),f=new D.Te(this.j(),0-j,0,h,c,"lhb"),h=new D.Te(this.j(),j,0,h,c,"rhb"),n="col-resize",this.P6?(q=(0,D.mP)(this,10,c),l=(0,D.mP)(this,10,c)):(q=(0,D.nP)(this,l),l=(0,D.nP)(this,l));f.pa(this.mZ,0);h.pa(this.mZ,0);(0,D.Ei)(f);(0,D.Ei)(h);m=new D.Jh(this.j(),m,"lh");g=new D.Jh(this.j(),g,"rh");m.pa(this.AP);m.Ra(this.AP);g.pa(this.AP);g.Ra(this.AP);this.mZ==this.AP&&((0,D.Ei)(m),(0,D.Ei)(g));f.setCursor(n);h.setCursor(n);m.setCursor(n);g.setCursor(n);
q.setCursor(n);l.setCursor(n);e.k(f);e.k(m);e.k(q);e.k(h);e.k(g);e.k(l)}e.setCursor("move");this.k(e);e=d?this.nh()?new D.Di(this.j(),this.zH(),0,this.zH(),c,"tab"):new D.Di(this.j(),b-this.zH(),0,b-this.zH(),c,"tab"):"above"==this.$X?new D.Di(this.j(),0,(0,D.oP)(this),b,(0,D.oP)(this),"tab"):new D.Di(this.j(),0,c-(0,D.oP)(this),b,c-(0,D.oP)(this),"tab");e.Ra(this.xGa,this.yGa);(0,D.Ei)(e);this.jpa=e;this.k(e);this.ku()&&(d?(e=new D.Te(this.j(),0,0,b,0,"lbg"),f=new D.Te(this.j(),0,0,b,0,"rbg")):(e=
new D.Te(this.j(),0,0,0,c,"lbg"),f=new D.Te(this.j(),0,0,0,c,"rbg")),e.pa(this.dma,this.ADa),this.k(e),f.pa(this.Eoa,this.WFa),this.k(f),D.bP.am()&&j!=D.i&&((0,D.lP)(),d?(d=new D.Te(this.j(),0,0,b,j,"lbgrh"),j=new D.Te(this.j(),0,0,b,j,"rbgrh")):(d=new D.Te(this.j(),0,0,j,c,"lbgrh"),j=new D.Te(this.j(),0,0,j,c,"rbgrh")),d.pa(this.dma,0),this.k(d),j.pa(this.Eoa,0),this.k(j)))}if(this.iR!=D.o){j=this.Sa();d=(0,D.pP)(this);for(e=0;e<this.iR.length;e++)g=this.iR[e],f=(0,window.parseInt)(g.v("time"),10),
f=this.fe(f),g=g.v("label"),h=0,e+1<this.iR.length?(h=(0,window.parseInt)(this.iR[e+1].v("time"),10),h=this.fe(h)-f):h=d-f,(0,D.eP)(this)&&(f=d-f),j&&(h=this.Ga),h-=10,this.NL(f,b,c,"tick"+e),this.kD(f,g,b,c,h,"label"+e)}if(this.s6!=D.o)for(j=0;j<this.s6.length;j++)f=this.s6[j],d=b,e=c,n=(0,window.parseInt)(f.v("rs"),10),g=(0,window.parseInt)(f.v("re"),10),f=f.v("c"),n!=D.o&&g!=D.o&&(h=(0,D.pP)(this),n=this.fe(n),g=this.fe(g)-n,(0,D.eP)(this)&&(n=h-n-g),d=this.Sa()?new D.Te(this.j(),0,n,d-this.zH(),
g,"ftr"):new D.Te(this.j(),n,"above"==this.$X?(0,D.oP)(this):0,g,e-(0,D.oP)(this),"ftr"),f!=D.o&&d.pa(f,0.4),d.setCursor("move"),(0,D.Ei)(d),this.k(d));this.F5==D.o||(0,window.isNaN)(this.F5)||(j=this.fe(this.F5),this.Sa()?j=new D.Di(this.j(),0,j,b,j,"ocd"):(this.nh()&&(j=b-j),j=new D.Di(this.j(),j,0,j,c,"ocd")),j.Ra(this.lBa),(0,D.Ei)(j),this.k(j));this.Eca(b,c);a&&(g=this.ha(1),this.Sa()?(a=g.na(),j=a+0.5,d=a+g.getHeight(),q=d-0.5,e=0,f=0.5,m=b-0.5,g=new D.Di(this.j(),e,j,b,j,"lh"),h=new D.Di(this.j(),
e,q,b,q,"rh"),n=new D.Di(this.j(),f,0,f,a,"ltb"),b=new D.Di(this.j(),f,d,f,c,"rtb"),q=new D.Di(this.j(),m,a,m,d,"bb"),c=new D.Di(this.j(),f,a,f,d,"tb")):(a=0,j=a+0.5,d=c,q=d-0.5,e=g.ja(),f=e+0.5,c=e+g.getWidth(),m=c-0.5,g=new D.Di(this.j(),f,a,f,d,"lh"),h=new D.Di(this.j(),m,a,m,d,"rh"),n=new D.Di(this.j(),0,j,e+1,j,"ltb"),b=new D.Di(this.j(),c-1,j,b,j,"rtb"),q=new D.Di(this.j(),e,q,c,q,"bb"),c=new D.Di(this.j(),e,j,c,j,"tb")),(0,D.Ei)(g),(0,D.Ei)(h),(0,D.Ei)(n),(0,D.Ei)(b),(0,D.Ei)(q),(0,D.Ei)(c),
"none"!=this.RGa&&g.Ra(this.QGa),this.k(g),"none"!=this.TGa&&h.Ra(this.SGa),this.k(h),"none"!=this.BAa&&this.M4&&(n.Ra(this.M4),b.Ra(this.M4)),this.k(n),this.k(b),"none"!=this.PGa&&q.Ra(this.OGa),this.k(q),"none"!=this.VGa&&c.Ra(this.UGa),this.k(c),this.FH()&&(b=this.Sa()?D.K.moveTo(6,0)+D.K.lineTo(0,5)+D.K.lineTo(5,5)+D.K.lineTo(5,17)+D.K.lineTo(0,17)+D.K.lineTo(6,22)+D.K.lineTo(12,17)+D.K.lineTo(7,17)+D.K.lineTo(7,5)+D.K.lineTo(12,5)+D.K.closePath():D.K.moveTo(5,0)+D.K.lineTo(0,6)+D.K.lineTo(5,
12)+D.K.lineTo(5,7)+D.K.lineTo(17,7)+D.K.lineTo(17,12)+D.K.lineTo(22,6)+D.K.lineTo(17,0)+D.K.lineTo(17,4)+D.K.lineTo(5,4)+D.K.lineTo(5,0)+D.K.closePath(),b=new D.Jh(this.j(),b,"arr"),b.pa("#ffffff"),b.Ra("#000000"),b.kb(D.p),this.k(b),this.aL=b),a=this.Sa(),c=this.ha(1),b=(0,D.pP)(this),j=a?this.Ta:this.Ga,e=this.Ba,f=this.ob,g=this.Xb,a=this.zoa,d=D.bP.rg(f,g,0,e),e=D.bP.rg(f,g,j,e),d=this.fe(d),j=window.Math.min(j,this.fe(e)),a=this.fe(a),j-=d,(0,D.eP)(this)?(0,D.fP)(this,c,b-a-j):(0,D.fP)(this,
c,a),(0,D.gP)(this,c,j),(0,D.hP)(this),c=this.Ba,a=this.ob,j=this.Xb,d=D.bP.rg(a,j,1,b),b=D.bP.rg(a,j,2,b),d=D.bP.fe(a,j,d,c),this.iK=D.bP.fe(a,j,b,c)-d);this.ula!=D.o&&(this.g7=window.Math.max(0,D.bP.fe(this.ob,this.Xb,this.ula,this.Ba)));0<this.g7&&(b=this.g7/this.iK,(0,D.eP)(this)&&(b=0-b),(0,D.qP)(this,b))};D.xo.prototype.render=D.xo.prototype.P;D.x=D.xo.prototype;D.x.Nra=function(){return new D.rP(this)};D.x.AE=function(a){return this.Nra(a).parse(a)};
D.x.Ku=function(a){this.ob=a.start;this.Xb=a.end;this.Ba=a.width;this.zoa=a.Zca;this.F5=a.currentTime;this.ula=a.$La;this.Qza=a.Npa;this.ot=window.Math.max(0,a.IMa);this.bL=window.Math.max(0,a.DNa);(0,window.isNaN)(this.ot)&&(this.ot=0);(0,window.isNaN)(this.bL)&&(this.bL=0);this.mG=a.orientation;this.$X=a.sta;this.pDa=a.dca;a.zqa!=D.o&&(this.DW=a.zqa.split(" "));a.vca!=D.o&&0<a.vca&&(this.Gma=a.vca);this.AAa=a.jHa;this.jR=a.Zta;a.Zta!=D.o&&(this.iR=this.jR.cOa);this.s6=a.oIa;this.BAa=a.borderTopStyle;
this.M4=a.borderTopColor;this.mZ=a.Bda;this.NGa=a.eua;this.VGa=a.Jda;this.TGa=a.Hda;this.PGa=a.Dda;this.RGa=a.Fda;this.UGa=a.Ida;this.SGa=a.Gda;this.OGa=a.Cda;this.QGa=a.Eda;this.SCa=a.Oba;this.AP=a.Mba;this.P6=a.csa;this.dla=a.osa;this.cla=a.lsa;this.yEa=a.Cca;this.lBa=a.iaa;this.zGa=a.uda;this.xGa=a.Xta;this.yGa=a.Yta;this.dma=a.Psa;this.ADa=a.Osa;this.Eoa=a.Jta;this.WFa=a.Ita};D.x.fe=function(a){return window.Math.max(0,D.bP.fe(this.ob,this.Xb,a,(0,D.pP)(this)))+this.ot};
D.x.rg=function(a){return D.bP.rg(this.ob,this.Xb,window.Math.max(0,a-this.ot),(0,D.pP)(this))};D.x.nh=function(){return"true"==this.pDa};D.eP=function(a){return a.nh()&&!a.Sa()};D.xo.prototype.Sa=function(){return"vertical"==this.mG};D.pP=function(a){return a.Sa()?a.Ta-a.ot-a.bL:a.Ga-a.ot-a.bL};D.cP=function(a){return a.Sa()?a.Ta-a.bL:a.Ga-a.bL};D.dP=function(a){return a.m8!=D.o?a.m8:a.Gma!=D.o?(a.m8=D.bP.fe(a.ob,a.Xb,a.ob+a.Gma,(0,D.pP)(a)),a.m8):10};
D.lP=function(){return D.bP.am()?(0,D.kP)()/2:0};D.kP=function(){return D.bP.am()?30:10};D.sP=function(a){var b=a.getId();return"lh"==b||"rh"==b||"lhb"==b||"rhb"==b||"grpy"==b||"lbgrh"==b||"rbgrh"==b||a.getParent()!=D.o&&"grpy"==a.getParent().getId()};D.xo.prototype.zH=function(){if(this.jR==D.o)return 0;if(this.kR==D.o){var a=(0,window.parseInt)(this.jR.width,10);this.kR=!(0,window.isNaN)(a)&&a<this.Ga?a:40}return this.kR};
D.oP=function(a){if(a.jR==D.o)return 0;if(a.ipa==D.o){var b=(0,window.parseInt)(a.jR.height,10);a.ipa=!(0,window.isNaN)(b)&&b<a.Ta?b:20}return a.ipa};D.tP=function(a){return D.bP.am()&&a.targetTouches!=D.o?0<a.targetTouches.length?a.targetTouches[0].pageX:D.o:a.pageX};D.uP=function(a){return D.bP.am()&&a.targetTouches!=D.o?0<a.targetTouches.length?a.targetTouches[0].pageY:D.o:a.pageY};D.xo.prototype.ku=(0,D.ca)(D.p);D.vP=function(a){return a.ku()?a.ha(3):D.o};
D.wP=function(a){return a.ku()?a.ha(4):D.o};D.xP=function(a){return a.ku()&&!(0,D.iP)(a)?a.ha(6):D.o};D.yP=function(a){return a.ha(a.Ja()-(a.xq-1))};D.zP=function(a,b,c,d){a.Sa()?(-1!=c&&b.ol(c),-1!=d&&b.$l(d)):(-1!=c&&b.nl(c),-1!=d&&b.Zl(d))};D.AP=function(a,b){return a.Sa()?b.Fp():b.Bo()};D.xo.prototype.XJ=function(a){a=a.target;if(a!=D.o){var b=a.getId();if(b==D.o)return D.o;if("_border"==b.substr(b.length-7))return this.Kaa(a);if("tick"!=b.substr(0,4)&&"ltb"!=b&&"rtb"!=b&&"bb"!=b&&"tab"!=b)return a}return D.o};
D.BP=function(a){return"window"==a.getId()||"ftr"==a.getId()||"sta"==a.getId()||(0,D.sP)(a)?D.k:D.p};D.xo.prototype.FH=function(){return window&&window.FH};D.xo.prototype.eqa=function(a,b){var c=new D.Te(this.j(),0,0,a,b,"bg");c.pa(this.yEa);(0,D.Ei)(c);this.k(c);return c};D.mP=function(a,b,c){a=new D.Ue(a.j(),a.P6,(b-a.dla)/2,(c-a.cla)/2,a.dla,a.cla,"grpy");a.qa(D.p);return a};
D.nP=function(a,b){var c=new D.D(a.j(),"grpy"),d=a.SCa;if(a.Sa()){for(var e=8+b,f=3,g=0;9>g;g++){var h=new D.Di(a.j(),e+2*g,f,e+2*g+1,f,"dot1"+g);h.Ra(d);c.k(h);f+=2;h=new D.Di(a.j(),e+1+2*g,f,e+1+2*g+1,f,"dot2"+g);h.Ra(d);c.k(h);f+=2;h=new D.Di(a.j(),e+2*g,f,e+2*g+1,f,"dot3"+g);h.Ra(d);c.k(h);f=3}h=new D.Di(a.j(),e+18,f,e+18+1,f,"dot4");h.Ra(d);c.k(h);f+=4;h=new D.Di(a.j(),e+18,f,e+18+1,f,"dot5")}else{e=3;f=8+b;for(g=0;9>g;g++)h=new D.Di(a.j(),e,f+2*g,e,f+2*g+1,"dot1"+g),h.Ra(d),c.k(h),e+=2,h=new D.Di(a.j(),
e,f+1+2*g,e,f+1+2*g+1,"dot2"+g),h.Ra(d),c.k(h),e+=2,h=new D.Di(a.j(),e,f+2*g,e,f+2*g+1,"dot3"+g),h.Ra(d),c.k(h),e=3;h=new D.Di(a.j(),e,f+18,e,f+18+1,"dot4");h.Ra(d);c.k(h);e+=4;h=new D.Di(a.j(),e,f+18,e,f+18+1,"dot5")}h.Ra(d);c.k(h);(0,D.Ei)(c);return c};D.CP=function(a,b){return a.Sa()?b.getHeight():b.getWidth()};D.jP=function(a,b){return a.Sa()?b.M():b.N()};
D.fP=function(a,b,c){c=window.Math.max(0,c);a.Sa()?b.O(c):b.I(c);if(a.ku()){(0,D.vP)(a).ma(c);b=c+(0,D.CP)(a,b);var d=(0,D.wP)(a);d.ca(b);d.ma(window.Math.max(0,a.Ga-b));D.bP.am()&&!(0,D.iP)(a)&&(d=(0,D.lP)(),(a.ku()&&!(0,D.iP)(a)?a.ha(5):D.o).ca(c-d),(0,D.xP)(a).ca(b))}};
D.gP=function(a,b,c){c=window.Math.max((0,D.dP)(a),c);var d=c=window.Math.min(a.Sa()?a.Ta:a.Ga,c);a.Sa()?b.Ea(d):b.ma(d);if(a.ku()){var d=(0,D.jP)(a,b)+c,e=(0,D.wP)(a);e.ca(d);e.ma(window.Math.max(0,a.Ga-d));D.bP.am()&&!(0,D.iP)(a)&&(0,D.xP)(a).ca(d)}(0,D.iP)(a)||(d=b.ha(3),e=b.ha(4),b=b.ha(5),a.Sa()?(e.O(c),d.O(c-(0,D.kP)()),b.O(c-10)):(e.I(c),d.I(c-(0,D.kP)()),b.I(c-10)))};
D.xo.prototype.NL=function(a,b,c,d){a=this.Sa()?new D.Di(this.j(),0,a,b,a,d):new D.Di(this.j(),a,0,a,c,d);b=new D.hg(this.zGa);b.W(1,3);a.V(b);(0,D.Ei)(a);this.k(a)};
D.xo.prototype.kD=function(a,b,c,d,e,f,g){g=g||new D.G("font-weight:bold");this.Sa()?(b=new D.Kf(this.j(),b,4,a,f),b.Ha(g),this.nh()&&(this.k(b),g=b.F(),this.removeChild(b),b.ca(window.Math.max(4,this.Ga-g.e-4)))):(c="above"==this.$X?2:d-(0,D.oP)(this)+2,b=new D.Kf(this.j(),b,a+5,c,f),b.Ha(g),(0,D.eP)(this)&&(this.k(b),g=b.F(),this.removeChild(b),b.ca(a-window.Math.min(g.e,e)-5)));D.$e.Qb(b,e,window.Infinity,this);b.VEa=b.Ao()};D.xo.prototype.Eca=(0,D.t)();
D.qP=function(a,b){var c=a.ha(1);c.ha(3);c.ha(4);c.ha(5);if(b!=(0,D.jP)(a,c)){var d=a.ha(a.Ja()-a.xq),e=(0,D.yP)(a),f=a.ha(a.Ja()-(a.xq-2)),g=a.ha(a.Ja()-(a.xq-3)),h=a.ha(a.Ja()-(a.xq-4)),j=a.ha(a.Ja()-(a.xq-5));if(a.Sa())var l=c.M,m=c.O,n=d.Fp,q=d.ol,r=d.ns,s=d.$l,u=e.Fp,w=e.ol,y=e.ns,C=e.$l,O=f.ns,M=f.$l,J=g.Fp,R=g.ol,N=h.Fp,Y=h.ol,ha=h.ns,ta=h.$l,xa=j.Fp,Ea=j.ol,ob=j.ns,La=j.$l;else l=c.N,m=c.I,n=d.Bo,q=d.nl,r=d.Zq,s=d.Zl,u=e.Bo,w=e.nl,y=e.Zq,C=e.Zl,O=f.Zq,M=f.Zl,J=g.Bo,R=g.nl,N=h.Bo,Y=h.nl,ha=
h.Zq,ta=h.Zl,xa=j.Bo,Ea=j.nl,ob=j.Zq,La=j.Zl;var kb=a.ot,Dc=(0,D.cP)(a),Rb=(0,D.CP)(a,c);b=window.Math.max(kb,window.Math.min(Dc-Rb,b));kb="off"!==a.Qza?new D.lr(a.j(),0.5,0,D.MD):D.o;(0,D.DP)(kb,c,l,m,b);(0,D.DP)(kb,d,n,q,b);(0,D.DP)(kb,d,r,s,b);(0,D.DP)(kb,e,u,w,b+Rb);(0,D.DP)(kb,e,y,C,b+Rb);(0,D.DP)(kb,f,O,M,b+1);(0,D.DP)(kb,g,J,R,b+Rb-1);(0,D.DP)(kb,h,N,Y,b);(0,D.DP)(kb,j,xa,Ea,b);(0,D.DP)(kb,h,ha,ta,b+Rb);(0,D.DP)(kb,j,ob,La,b+Rb);a.ku()&&(c=(0,D.vP)(a),(0,D.DP)(kb,c,c.getWidth,c.ma,b),Rb=b+
Rb,c=(0,D.wP)(a),d=c.getWidth,e=c.ma,f=c.ja,g=c.ca,h=a.Sa()?a.Ta:a.Ga,(0,D.DP)(kb,c,d,e,h-Rb),(0,D.DP)(kb,c,f,g,Rb),D.bP.am()&&!(0,D.iP)(a)&&(c=(0,D.lP)(),d=a.ku()&&!(0,D.iP)(a)?a.ha(5):D.o,e=d.ja,f=d.ca,g=(0,D.xP)(a),h=g.ja,j=g.ca,(0,D.DP)(kb,d,e,f,b-c),(0,D.DP)(kb,g,h,j,Rb)));kb!=D.o&&kb.play()}};D.DP=function(a,b,c,d,e){a!=D.o?(0,D.T)(a,"typeNumber",b,c,d,e):d.call(b,e)};D.x=D.xo.prototype;
D.x.fU=function(a){var b=this.XJ(a);if(b&&!("bg"==b.getId()||"ocd"==b.getId()))if("label"==b.getId().substr(0,5)&&(b instanceof D.Kf||b instanceof D.Zj))b.il()&&this.j().ge().dN(a.pageX,a.pageY,b.VEa,"#000000");else if(this.aL!=D.o&&(0,D.sP)(b)&&(a=(0,D.Pu)(this.j(),a.pageX,a.pageY),a=this.ic(a),this.Sa()?(0,D.pk)(this.aL,a.x+6,a.y-10):(0,D.pk)(this.aL,a.x-6,a.y-20),this.aL.kb(D.k)),"window"==b.getId()||"ftr"==b.getId()||"arr"==b.getId()||(0,D.sP)(b))this.FH()&&this.setCursor("move");else return b};
D.x.eU=function(a){this.$o==D.o&&this.setCursor("default");a=this.XJ(a);if(a!=D.o)return(0,D.sP)(a)&&this.aL!=D.o&&this.aL.kb(D.p),a};
D.x.uE=function(a,b,c){a.stopPropagation();var d=this.XJ(a);if(d&&!("window"==d.getId()||(0,D.sP)(d)))if("bg"==d.getId()||"label"==d.getId().substr(0,5)||"ocd"==d.getId()||"lbg"==d.getId()||"rbg"==d.getId()){b==D.i&&(b=a.pageX);c==D.i&&(c=a.pageY);a=(0,D.Pu)(this.j(),b,c);a=this.ic(a);this.Sa()?(c=a.y,d=this.Ta):(c=a.x,d=this.Ga);a=this.ha(1);b=c-(0,D.CP)(this,a)/2;(0,D.qP)(this,b);(0,D.eP)(this)&&(c=this.Ga-c);var e=this.rg(c);c=new D.EP("scrollTime");c.setTime(e);b=window.Math.max(0,window.Math.min(b,
d-(0,D.CP)(this,a)));(0,D.eP)(this)?(d=this.rg(this.Ga-(b+(0,D.CP)(this,a))),a=this.rg(this.Ga-b)):(d=this.rg(b),a=this.rg(b+(0,D.CP)(this,a)));(0,D.FP)(c,d);(0,D.GP)(c,a);this.dispatchEvent(c)}else return d};
D.x.zR=function(a,b,c){a=this.XJ(a);if(a!=D.o&&(0,D.BP)(a)){if("ftr"==a.getId()||"sta"==a.getId())a=this.ha(1);this.bX=b;this.rla=c;if((0,D.sP)(a)){b=this.ha(1);(0,D.eP)(this)?(this.w8=this.Ga-b.ja(),this.F8=this.w8-b.getWidth()):(this.F8=b.ja(),this.w8=this.F8+b.getWidth());"grpy"==a.getParent().getId()&&(a=a.getParent());c=a.getId();"grpy"==c&&(a=b.RR(a),c=a.getId());if("lh"==c||"rh"==c)a=b.RR(a),c=a.getId();"lbgrh"==c&&(a=b.ha(0));"rbgrh"==c&&(a=b.ha(b.Ja()-3));D.bP.am()||(this.Sa()?(a.va(-20),
a.Ea(2*(a.getHeight()+20))):(a.ca(-20),a.ma(2*(a.getWidth()+20))));b=a.getCursor();c=this.ha(1);c!=D.o&&c.setCursor(b);if(this.ku()){c=(0,D.vP)(this);var d=(0,D.wP)(this);c!=D.o&&d!=D.o&&(c.setCursor(b),d.setCursor(b))}}this.$o=a;a=new D.EP("dropCallback");this.dispatchEvent(a);return D.k}return D.p};
D.x.UL=function(){if(this.$o!=D.o){if("window"==this.$o.getId())this.Cqa(0,0);else if((0,D.sP)(this.$o)){this.raa();D.bP.am()||(this.Sa()?(this.$o.va(0),this.$o.Ea((0,D.kP)())):(this.$o.ca(0),this.$o.ma((0,D.kP)())));var a=this.ha(1);a!=D.o&&a.setCursor("move");if(this.ku()){var a=(0,D.vP)(this),b=(0,D.wP)(this);a!=D.o&&b!=D.o&&(a.setCursor("default"),b.setCursor("default"))}}this.$o=D.o;this.bX=-1}};
D.x.BR=function(a,b,c){if(this.$o!=D.o&&-1!=this.bX){var d=b-this.bX,e=c-this.rla;this.bX=b;this.rla=c;"window"==this.$o.getId()?this.psa(0,d,e):"lh"==this.$o.getId()||"lhb"==this.$o.getId()?(0,D.HP)(this,a,d,e,D.k):("rh"==this.$o.getId()||"rhb"==this.$o.getId())&&this.Nba(a,d,e)}};
D.x.kU=function(a){var b=a.touches;this.CL=b[0].pageX;this.PG=b[0].pageY;2==b.length&&(a.preventDefault(),this.DL=b[1].pageX,this.rR=b[1].pageY,20>window.Math.abs(this.PG-this.rR)?this.UO=0:this.rR=this.DL=this.PG=this.CL=D.o)};
D.x.Afa=function(a){a.preventDefault();a=a.touches;if(this.DL!=D.o&&this.rR!=D.o)50>this.UO?this.UO++:(this.Nba(D.o,a[1].pageX-this.DL,0),this.DL=a[1].pageX,this.UO=0);else{var b=window.Math.abs(this.PG-a[0].pageY);if(3<window.Math.abs(this.CL-a[0].pageX)||3<b)this.PG=this.CL=D.o}};D.x.jU=function(a){this.DL!=D.o&&this.rR!=D.o?this.raa():this.CL!=D.o&&this.PG!=D.o&&this.uE(a,this.CL,this.PG);this.rR=this.DL=this.PG=this.CL=D.o};
D.x.DN=function(a){var b=a.keyCode;if(37===b||39===b)b=37===b?-1:1,(a.shiftKey?this.Nba:this.psa).call(this,a,b,b)};D.x.q2=function(a){var b=a.keyCode;if(37===b||39===b)b=37===b?-1:1,(a.shiftKey?this.raa:this.Cqa).call(this,b,b)};D.x.psa=function(a,b,c){(0,D.IP)(this,"scrollPos",b,c)};D.x.Cqa=function(a,b){(0,D.IP)(this,"scrollEnd",a,b)};
D.IP=function(a,b,c,d){var e=a.ha(1),f=(0,D.jP)(a,e),g=(0,D.CP)(a,e),h=a.ot,j=(0,D.cP)(a);c=a.Sa()?d:c;f+c<=h?((0,D.fP)(a,e,h),g=(0,D.eP)(a)?-2:-1):f+g+c>=j?((0,D.fP)(a,e,j-g),g=(0,D.eP)(a)?-1:-2):((0,D.fP)(a,e,f+c),g=(0,D.eP)(a)?(j-g-f-a.ot)*a.iK:(f-a.ot)*a.iK);(0,D.hP)(a);b=new D.EP(b);b.Ej(g);(0,D.eP)(a)?(g=a.rg(a.Ga-(f+(0,D.CP)(a,e))),e=a.rg(a.Ga-f)):(g=a.rg(f),e=a.rg(f+(0,D.CP)(a,e)));(0,D.FP)(b,g);(0,D.GP)(b,e);a.dispatchEvent(b)};D.xo.prototype.Nba=function(a,b,c){(0,D.HP)(this,a,b,c,D.p)};
D.HP=function(a,b,c,d,e){var f=(0,D.pP)(a);d=a.Sa()?d:c;if(0!=d){c=a.ha(1);var g=(0,D.jP)(a,c),h=(0,D.CP)(a,c);if(e){if(h-d<=(0,D.dP)(a)||g+d<=a.ot)return;b=a.Sa()?(0,D.Pu)(a.j(),(0,D.tP)(b),(0,D.uP)(b)).y:(0,D.Pu)(a.j(),(0,D.tP)(b),(0,D.uP)(b)).x;b=a.ic(b);if(0<d&&b<=g||0>d&&b>=g)return;(0,D.fP)(a,c,g+d);(0,D.gP)(a,c,h-d)}else{if(h+d<=(0,D.dP)(a)||g+h+d>=(0,D.cP)(a))return;b=a.Sa()?(0,D.Pu)(a.j(),(0,D.tP)(b),(0,D.uP)(b)).y:(0,D.Pu)(a.j(),(0,D.tP)(b),(0,D.uP)(b)).x;b=a.ic(b);if(0<d&&b<=g+h||0>d&&
b>=g+h)return;(0,D.gP)(a,c,h+d)}(0,D.hP)(a);b=a.rg((0,D.CP)(a,c));b=f*(a.Xb-a.ob)/(b-a.ob);f=new D.EP("rangeChanging");(0,D.El)(f,"newSize",b);b=(0,D.eP)(a)?e:!e;(0,D.El)(f,"endHandle",b);e?(0,D.El)(f,"expand",0>d):(0,D.El)(f,"expand",0<d);(0,D.eP)(a)?(e=a.rg(a.Ga-((0,D.jP)(a,c)+(0,D.CP)(a,c))),c=a.rg(a.Ga-(0,D.jP)(a,c))):(e=a.rg((0,D.jP)(a,c)),c=a.rg((0,D.jP)(a,c)+(0,D.CP)(a,c)));(0,D.FP)(f,e);(0,D.GP)(f,c);a.dispatchEvent(f)}};
D.xo.prototype.raa=function(){var a=this.ob,b=this.Xb,c=this.Ba,d=(0,D.pP)(this),e=this.ha(1),f=this.rg((0,D.CP)(this,e)),a=d*(b-a)/(f-a),b=this.rg(this.F8),d=this.rg(this.w8);(0,D.eP)(this)?(f=this.rg(this.Ga-((0,D.jP)(this,e)+(0,D.CP)(this,e))),e=this.rg(this.Ga-(0,D.jP)(this,e))):(f=this.rg((0,D.jP)(this,e)),e=this.rg((0,D.jP)(this,e)+(0,D.CP)(this,e)));var g=new D.EP("rangeChange");(0,D.El)(g,"oldSize",c);(0,D.El)(g,"newSize",a);(0,D.El)(g,"oldStartTime",b);(0,D.El)(g,"oldEndTime",d);(0,D.FP)(g,
f);(0,D.GP)(g,e);this.dispatchEvent(g)};D.hP=function(a){var b=a.ha(1),c=(0,D.jP)(a,b),d=c+0.5,b=c+(0,D.CP)(a,b)-0.5,e=a.ha(a.Ja()-a.xq),f=(0,D.yP)(a),g=a.ha(a.Ja()-(a.xq-2)),h=a.ha(a.Ja()-(a.xq-3)),j=a.ha(a.Ja()-(a.xq-4)),l=a.ha(a.Ja()-(a.xq-5));(0,D.zP)(a,e,d,d);(0,D.zP)(a,f,b,b);(0,D.zP)(a,g,-1,c);(0,D.zP)(a,h,(0,D.AP)(a,f),-1);(0,D.zP)(a,j,(0,D.AP)(a,e),(0,D.AP)(a,f));(0,D.zP)(a,l,(0,D.AP)(a,e),(0,D.AP)(a,f))};D.xo.prototype.dispatchEvent=function(a){D.QC.dispatchEvent(this.lb,this.ra,this,a)};
D.xo.prototype.Q=function(){this.Ia&&(this.Ia.gi(this),this.Ia.Q(),this.Ia=D.o);D.bP.am()?(this.Ya(D.kh,this.kU,D.p,this),this.Ya(D.VB,this.Afa,D.p,this),this.Ya(D.WB,this.jU,D.p,this),this.Ya(D.kk,this.uE,D.p,this)):(this.Ya(D.Yz,this.fU,D.p,this),this.Ya(D.Zz,this.eU,D.p,this),this.Ya(D.kk,this.uE,D.p,this),this.Ya(D.bj,this.DN,D.p,this),this.Ya(D.dj,this.q2,D.p,this));D.xo.o.Q.call(this)};
D.rP=function(a){this.Init(a)};D.z.l(D.rP,D.z,"DvtOverviewParser");D.rP.prototype.Init=(0,D.ba)("H");D.rP.prototype.parse=function(a){return this.DE(a)};
D.rP.prototype.DE=function(a){var b={};b.Npa=a.animationOnClick;a.startTime!=D.o&&(b.start=a.startTime);a.endTime!=D.o&&(b.end=a.endTime);b.start==D.o&&(b.start=(new window.Date).getTime());if(b.end==D.o||b.end<=b.start)b.end=b.start+864E5;a.currentTime!=D.o&&(b.currentTime=a.currentTime);a.initialFocusTime!=D.o&&(b.$La=a.initialFocusTime);b.orientation="horizontal";a.orientation!=D.o&&(b.orientation=a.orientation);b.zqa=a.featuresOff;b.vca=a.minimumWindowSize;b.IMa=a.leftMargin;b.DNa=a.rightMargin;
if(a.viewportEndTime!=D.o){var c=a.viewportEndTime,d=b.start;a.viewportStartTime!=D.o&&a.viewportStartTime<c&&(d=a.viewportStartTime);b.width=a.viewportEndPos!=D.o?(0,D.JP)(b.start,b.end,d,c,a.viewportEndPos):(0,D.JP)(b.start,b.end,d,c,this.H.Ga);b.Zca=d}else b.Zca=b.start;0==b.width&&(b.width=1E3);b.sta="below";b.gT="none";b.dca=(0,D.E)(this.H.j()).toString();a.rtl!=D.o&&(b.dca=a.rtl.toString());b.Mba="#FFFFFF";b.Oba="#B3C6DB";b.Bda="#FFFFFF";b.eua=1;b.Jda="solid";b.Hda="solid";b.Dda="solid";b.Fda=
"solid";b.Ida="#4F4F4F";b.Gda="#4F4F4F";b.Cda="#4F4F4F";b.Eda="#4F4F4F";b.Cca="#E6ECF3";b.iaa="#C000D1";b.uda="#BCC7D2";b.Xta="#e5e5e5";b.Yta=1;b.Psa="#FFFFFF";b.Osa=0.7;b.Jta="#FFFFFF";b.Ita=0.7;a.style!=D.o&&(a.style.handleFillColor!=D.o&&(b.Mba=a.style.handleFillColor),a.style.handleTextureColor!=D.o&&(b.Oba=a.style.handleTextureColor),a.style.handleBackgroundImage!=D.o&&(b.csa=a.style.handleBackgroundImage),a.style.handleWidth!=D.o&&(b.osa=a.style.handleWidth),a.style.handleHeight!=D.o&&(b.lsa=
a.style.handleHeight),a.style.windowBackgroundColor!=D.o&&(b.Bda=a.style.windowBackgroundColor),a.style.windowBackgroundAlpha!=D.o&&(b.eua=a.style.windowBackgroundAlpha),a.style.windowBorderTopStyle!=D.o&&(b.Jda=a.style.windowBorderTopStyle),a.style.windowBorderRightStyle!=D.o&&(b.Hda=a.style.windowBorderRightStyle),a.style.windowBorderBottomStyle!=D.o&&(b.Dda=a.style.windowBorderBottomStyle),a.style.windowBorderLeftStyle!=D.o&&(b.Fda=a.style.windowBorderLeftStyle),a.style.windowBorderTopColor!=D.o&&
(b.Ida=a.style.windowBorderTopColor),a.style.windowBorderRightColor!=D.o&&(b.Gda=a.style.windowBorderRightColor),a.style.windowBorderBottomColor!=D.o&&(b.Cda=a.style.windowBorderBottomColor),a.style.windowBorderLeftColor!=D.o&&(b.Eda=a.style.windowBorderLeftColor),a.style.overviewBackgroundColor!=D.o&&(b.Cca=a.style.overviewBackgroundColor),a.style.currentTimeIndicatorColor!=D.o&&(b.iaa=a.style.currentTimeIndicatorColor),a.style.timeIndicatorColor!=D.o&&(b.uda=a.style.timeIndicatorColor),a.style.leftFilterPanelColor!=
D.o&&(b.Psa=a.style.leftFilterPanelColor),a.style.leftFilterPanelAlpha!=D.o&&(b.Osa=a.style.leftFilterPanelAlpha),a.style.rightFilterPanelColor!=D.o&&(b.Jta=a.style.rightFilterPanelColor),a.style.rightFilterPanelAlpha!=D.o&&(b.Ita=a.style.rightFilterPanelAlpha));return b};D.JP=function(a,b,c,d,e){a=e*(b-a);c=d-c;return 0==a||0==c?0:a/c};
D.EP=function(a){this.Init("overview");this.Am=a};D.z.l(D.EP,D.Li,"DvtOverviewEvent");D.EP.prototype.xj=(0,D.v)("Am");D.EP.prototype.setTime=function(a){(0,D.El)(this,"time",a)};D.EP.prototype.getTime=function(){return this.Yi("time")};D.FP=function(a,b){(0,D.El)(a,"newStartTime",b)};D.GP=function(a,b){(0,D.El)(a,"newEndTime",b)};D.EP.prototype.Ej=function(a){(0,D.El)(this,"pos",a)};D.EP.prototype.bg=function(){return this.Yi("pos")};
D.aP=function(a){this.Init(a.j(),a.Pd,a);this.lc=a};D.z.l(D.aP,D.Pj,"DvtOverviewEventManager");D.x=D.aP.prototype;D.x.me=function(a){D.aP.o.me.call(this,a);D.nm.xR(this.lc,this.lG,this.kG,this.jG,this)};D.x.lG=function(a){return(0,D.Jf)()?this.yQ(a):this.vQ(a)};D.x.kG=function(a){return(0,D.Jf)()?this.xQ(a):this.uQ(a)};D.x.jG=function(a){return(0,D.Jf)()?this.wQ(a):this.tQ(a)};D.x.xg=function(a,b){this.qi||(this.qi=(0,D.pm)(this.U));return new D.F(a-this.qi.x,b-this.qi.y)};
D.x.vQ=function(a){if(2!=a.button){var b=this.xg(a.pageX,a.pageY);(0,D.hi)(a);this.j().Kc.Vy.parentNode.focus();return this.lc.zR(a,b.x,b.y)}return D.p};D.x.uQ=function(a){var b=this.xg(a.pageX,a.pageY);a.stopPropagation();this.lc.BR(a,b.x,b.y);return D.k};D.x.tQ=function(a){a.stopPropagation();this.lc.UL();this.qi=D.o};D.x.yQ=function(a){var b=a.touches;a.stopPropagation();return 1==b.length?(b=this.xg(b[0].pageX,b[0].pageY),a.preventDefault(),this.lc.zR(a,b.x,b.y)):D.p};
D.x.xQ=function(a){var b=a.touches;1==b.length&&(b=this.xg(b[0].pageX,b[0].pageY),this.lc.BR(a,b.x,b.y),a.preventDefault());a.stopPropagation()};D.x.wQ=function(a){this.lc.UL();(0,D.hi)(a);this.qi=D.o};

  return D;
});