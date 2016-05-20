/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define("ojs/ojcore jquery ojs/internal-deps/datagrid/DvtDataGrid ojs/ojcomponentcore ojs/ojdatacollection-common ojs/ojinputnumber ojs/ojmenu ojs/ojdialog ojs/ojpagingcontrol".split(" "),function(a,f,c){a.bb=function(b,c){null!=c&&(this.ek=c.rowHeader);a.bb.t.constructor.call(this,b)};o_("ArrayDataGridDataSource",a.bb,a);a.b.ra(a.bb,a.Kb,"oj.ArrayDataGridDataSource");a.bb.prototype.Init=function(){this.columns=this.gP(this.data);this.lR();a.bb.t.Init.call(this)};a.b.g("ArrayDataGridDataSource.prototype.Init",
{Init:a.bb.prototype.Init});a.bb.prototype.lR=function(){var a;this.ae=[];for(a=0;a<this.data.length;a+=1)this.ae[a]=a.toString()};a.bb.prototype.gP=function(a){var c,e;if("number"!==typeof a.length||0===a.length)return[];e=[];for(c in a[0])a[0].hasOwnProperty(c)&&(void 0!=this.ek&&c==this.ek||e.push(c));return e};a.bb.prototype.Z=function(a){return"row"===a?this.data.length:"column"===a?this.columns.length:0};a.b.g("ArrayDataGridDataSource.prototype.getCount",{Z:a.bb.prototype.Z});a.bb.prototype.ZH=
function(a,c){if("row"===a)return void 0!=this.ek?this.data[c][this.ek]:0<this.data.length&&this.data[0]instanceof Array?void 0===this.ae[c]?c.toString():this.ae[c]:null;if("column"===a)return this.columns[c]};a.bb.prototype.$V=function(a,c){return"row"===a&&void 0!=this.ek?{key:c.toString()}:{key:this.ZH(a,c)}};a.bb.prototype.Xd=function(b,c,e){var f,h,k;f=b.axis;h=b.start;k=b.count;a.i.assert("row"===f||"column"===f);a.i.assert(h<this.Z(f));a.i.assert(0<k);h=Math.max(0,h);k="column"===f?Math.min(this.columns.length,
h+k):void 0!==this.ek||0<this.data.length&&this.data[0]instanceof Array?Math.min(this.data.length,h+k):h;f=new a.ye(h,k,f,this);null!=c&&null!=c.success&&(null==e&&(e={}),c.success.call(e.success,f,b))};a.b.g("ArrayDataGridDataSource.prototype.fetchHeaders",{Xd:a.bb.prototype.Xd});a.bb.prototype.UV=function(a,c){return this.data[a][this.columns[c]]};a.bb.prototype.VV=function(a,c){return{keys:{row:this.ae[a],column:this.columns[c]}}};a.bb.prototype.Vd=function(b,c,e){var f,h,k,l,m,n;for(f=0;f<b.length;f+=
1)h=b[f],a.i.assert("row"===h.axis||"column"===h.axis),a.i.assert(h.start<this.Z(h.axis)),a.i.assert(0<h.count),"row"===h.axis?(k=h.start,l=Math.min(this.data.length,k+h.count)):"column"===h.axis&&(m=h.start,n=Math.min(this.columns.length,m+h.count));void 0===l||void 0===n?null!=c&&null!=c.error&&(null==e&&(e={}),c.error.call(e.error)):(f=new a.ee(k,l,m,n,this),null!=c&&null!=c.success&&(null==e&&(e={}),c.success.call(e.success,f,b)))};a.b.g("ArrayDataGridDataSource.prototype.fetchCells",{Vd:a.bb.prototype.Vd});
a.bb.prototype.keys=function(a){return{row:this.ae[a.row],column:this.columns[a.column]}};a.b.g("ArrayDataGridDataSource.prototype.keys",{keys:a.bb.prototype.keys});a.bb.prototype.Zd=function(a){var c=a.column;return{row:this.ae.indexOf(a.row),column:this.columns.indexOf(c)}};a.b.g("ArrayDataGridDataSource.prototype.indexes",{Zd:a.bb.prototype.Zd});a.bb.prototype.sort=function(a,c,e){var f=[],h=[],k=[],l=[],m=[],n,q;n=a.axis;q=a.key;a=a.direction;null!=c&&null==e&&(e={});if("column"===n){q=this.columns.indexOf(q);
for(n=0;n<this.data.length;n+=1)f[n]=this.data[n][this.columns[q]],h[n]=n;h.sort(this.wE(f,a));for(n=0;n<this.data.length;n+=1)k[n]=this.data[h[n]],m[n]=this.ae[h[n]];this.data=k;this.ae=m;null!=c&&null!=c.success&&c.success.call(e.success)}else if("row"===n){q=this.ae.indexOf(q);for(n=0;n<this.columns.length;n+=1)f[n]=this.data[q][this.columns[n]],h[n]=n;h.sort(this.wE(f,a));for(n=0;n<this.columns.length;n+=1)l[n]=this.columns[h[n]];this.columns=l;null!==c&&null!=c.success&&c.success.call(e.success)}else null!==
c&&null!=c.error&&c.error.call(e.error,"Invalid axis value")};a.b.g("ArrayDataGridDataSource.prototype.sort",{sort:a.bb.prototype.sort});a.bb.prototype.getCapability=function(a){return"sort"===a?"column":"move"===a?"row":null};a.b.g("ArrayDataGridDataSource.prototype.getCapability",{getCapability:a.bb.prototype.getCapability});a.bb.prototype.wE=function(a,c){if("ascending"===c)return function(c,d){var f,k;c=a[c];d=a[d];f=isNaN(c);k=isNaN(d);c instanceof Date&&(c=c.toISOString(),f=!0);d instanceof
Date&&(d=d.toISOString(),k=!0);return f&&k?c<d?-1:c===d?0:1:f?1:k?-1:c-d};if("descending"===c)return function(c,d){var f,k;c=a[c];d=a[d];f=isNaN(c);k=isNaN(d);c instanceof Date&&(c=c.toISOString(),f=!0);d instanceof Date&&(d=d.toISOString(),k=!0);return f&&k?c>d?-1:c===d?0:1:f?-1:k?1:d-c}};a.bb.prototype.move=function(a,c){var e,f;e=this.ae.indexOf(a);this.ae.splice(e,1);e=this.data.splice(e,1)[0];f={source:this,operation:"delete",keys:{row:a,column:null}};this.handleEvent("change",f);null===c?(this.ae.push(a),
this.data.push(e)):(f=this.ae.indexOf(c),this.ae.splice(f,0,a),this.data.splice(f,0,e));f={source:this,operation:"insert",keys:{row:a,column:null}};this.handleEvent("change",f)};a.b.g("ArrayDataGridDataSource.prototype.move",{move:a.bb.prototype.move});a.bb.prototype.bI=function(){return this.ek};a.b.g("ArrayDataGridDataSource.prototype.getRowHeaderKey",{bI:a.bb.prototype.bI});a.bb.prototype.Ei=function(){return this.columns};a.b.g("ArrayDataGridDataSource.prototype.getColumns",{Ei:a.bb.prototype.Ei});
a.bb.prototype.cI=function(){return this.ae};a.b.g("ArrayDataGridDataSource.prototype.getRowKeys",{cI:a.bb.prototype.cI});a.bb.prototype.getData=function(){return this.data};a.b.g("ArrayDataGridDataSource.prototype.getData",{getData:a.bb.prototype.getData});a.Se=function(b,c){this.aX=b;this.vX=c;this.Ea={};this.Ea.datagrid="oj-datagrid";this.Ea.cell="oj-datagrid-cell";this.Ea.cellcontent="oj-datagrid-cell-content";this.Ea.celltext="oj-datagrid-cell-text";this.Ea.banded="oj-datagrid-banded";this.Ea.row=
"oj-datagrid-row";this.Ea.databody="oj-datagrid-databody";this.Ea.topcorner="oj-datagrid-top-corner";this.Ea.bottomcorner="oj-datagrid-bottom-corner";this.Ea.rowheaderspacer="oj-datagrid-row-header-spacer";this.Ea.colheaderspacer="oj-datagrid-column-header-spacer";this.Ea.status="oj-datagrid-status";this.Ea.emptytext="oj-datagrid-empty-text";this.Ea.header="oj-datagrid-header";this.Ea.headercell="oj-datagrid-header-cell";this.Ea.headercelltext="oj-datagrid-header-cell-text";this.Ea.headercellcontent=
"oj-datagrid-header-cell-content";this.Ea.rowheader="oj-datagrid-row-header";this.Ea.colheader="oj-datagrid-column-header";this.Ea.colheadercell="oj-datagrid-column-header-cell";this.Ea.rowheadercell="oj-datagrid-row-header-cell";this.Ea["scroller-mobile"]="oj-datagrid-scroller-touch";this.Ea.scroller="oj-datagrid-scroller";this.Ea.scrollers="oj-datagrid-scrollers";this.Ea.focus="oj-focus";this.Ea.hover="oj-hover";this.Ea.active="oj-active";this.Ea.selected="oj-selected";this.Ea.disabled="oj-disabled";
this.Ea.enabled="oj-enabled";this.Ea["default"]="oj-default";this.Ea.sortcontainer="oj-datagrid-sort-icon-container";this.Ea.sortascending="oj-datagrid-sort-ascending-icon";this.Ea.sortdescending="oj-datagrid-sort-descending-icon";this.Ea.icon="oj-component-icon";this.Ea.clickableicon="oj-clickable-icon-nocontext";this.Ea.info="oj-helper-hidden-accessible";this.Ea.rowexpander="oj-rowexpander";this.Ea.cut="oj-datagrid-cut";this.Ea.selectaffordancetop="oj-datagrid-touch-selection-affordance-top";this.Ea.selectaffordancebottom=
"oj-datagrid-touch-selection-affordance-bottom";this.Ea.toucharea="oj-datagrid-touch-area";this.Ea.draggable="oj-draggable";this.Ea.drag="oj-drag";this.Ea.drop="oj-drop";this.Ea.activedrop="oj-active-drop";this.Ea.validdrop="oj-valid-drop";this.Ea.invaliddrop="oj-invalid-drop";this.Je={};this.Je.sortCol="oj-datagrid-sortCol";this.Je.sortColAsc="oj-datagrid-sortColAsc";this.Je.sortColDsc="oj-datagrid-sortColDsc";this.Je.sortRow="oj-datagrid-sortRow";this.Je.sortRowAsc="oj-datagrid-sortRowAsc";this.Je.sortRowDsc=
"oj-datagrid-sortRowDsc";this.Je.resize="oj-datagrid-resize";this.Je.resizeWidth="oj-datagrid-resizeWidth";this.Je.resizeHeight="oj-datagrid-resizeHeight";this.Je.cut="oj-datagrid-cut";this.Je.paste="oj-datagrid-paste";this.attributes={};this.attributes.key="data-oj-key";this.attributes.resizable="data-oj-resizable";this.attributes.sortable="data-oj-sortable";this.attributes.sortDir="data-oj-sortdir";this.attributes.expander="data-oj-expander";this.attributes.expanderIndex="data-oj-expander-index";
this.attributes.container=a.Components.Cp};o_("DataGridResources",a.Se,a);a.Se.prototype.EI=function(){return"rtl"===this.aX?!0:!1};a.b.g("DataGridResources.prototype.isRTLMode",{EI:a.Se.prototype.EI});a.Se.prototype.lI=function(a,c){return this.vX(a,c)};a.b.g("DataGridResources.prototype.getTranslatedText",{lI:a.Se.prototype.lI});a.Se.prototype.Ox=function(a){return null!=a?this.Ea[a]:null};a.b.g("DataGridResources.prototype.getMappedStyle",{Ox:a.Se.prototype.Ox});a.Se.prototype.rs=function(a){return null!=
a?this.Je[a]:null};a.b.g("DataGridResources.prototype.getMappedCommand",{rs:a.Se.prototype.rs});a.Se.prototype.Nx=function(a){return null!=a?this.attributes[a]:null};a.b.g("DataGridResources.prototype.getMappedAttribute",{Nx:a.Se.prototype.Nx});a.La("oj.ojDataGrid",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{bandingInterval:{row:0,column:0},data:null,emptyText:null,gridlines:{horizontal:"visible",vertical:"visible"},scrollPosition:null,selectionMode:null,dnd:{Zl:{row:"disable"}},scrollPolicy:"auto",
selection:[],header:{row:{className:null,renderer:null,resizable:{width:"disable",height:"disable"},sortable:"auto",style:null},column:{className:null,renderer:null,resizable:{width:"disable",height:"disable"},sortable:"auto",style:null}},cell:{className:null,renderer:null,style:null},resize:null,sort:null},_create:function(){f(this.root).addClass("oj-component");this._super();this.root=this.element[0];this.Re=this.root.getAttribute("id");this.grid=new c;this.vy={data:"all",header:["className","renderer",
"style","template"]}},_init:function(){var b=this;null==this.dc&&(this.gx(this.root),f(this.root).empty(),this._super(),this.dk=new a.Se(this.Ic(),this.hD.bind(b)),this.ZF(),this.Wn(),this.oM(),null!=this.dc&&this.grid.SetDataSource(this.dc),this.grid.SetOptions(this.options),this.grid.SetResources(this.dk),this.grid.SetCreateContextCallback(this.cS.bind(b)),this.grid.addListener("resize",function(a){b._trigger("resize",a.event,a.ui)}),this.grid.addListener("select",function(a){b.Cc("selection",a.ui.previousSelection,
a.ui.selection,a.event)}),this.grid.addListener("sort",function(a){b._trigger("sort",a.event,a.ui)}),this.grid.addListener("keydown",function(a){b._trigger("keydown",a.event,a.ui)}),this.grid.addListener("active",function(a){b._trigger("active",a.event,a.ui)}),this.grid.render(this.root),null!=this.dc&&this.kl(this.root))},refresh:function(){this._super();this.gx(this.root);f(this.root).empty();this.ZF();null!=this.dc&&this.grid.SetDataSource(this.dc);this.grid.SetOptions(this.options);this.grid.SetResources(this.dk);
this.grid.refresh(this.root);null!=this.dc&&this.kl(this.root)},_destroy:function(){this.grid.destroy();this.gx(this.root);f(this.root).empty()},Cc:function(a,c,e,f){this._trigger("optionChange",f,{option:a,previousValue:c,value:e,optionMetadata:{writeback:f?"shouldWrite":"shouldNotWrite"}})},_setOptions:function(a,c){var e;if(this.dc)this.eU(a,c);else{for(e in a)this._setOption(e,a[e],c);null!=a.data&&this.refresh()}},eU:function(b,c){var e,f,h,k,l,m;h=!1;for(f in b)if(f in this.vy)if("data"===f){h=
!0;break}else if("header"==f)for(k in b.header){if("column"==k||"row"==k||"cell"==k)for(l in b.header[k]){for(e=0;e<this.vy.header.length;e++)if(l==this.vy.header[e])for(m in this.options.header[k])if(m==l&&b.header[k][l]!=this.options.header[k][l]){h=!0;break}if(h)break}if(h)break}else for(m in this.options)if(m==f&&!a.b.Ch(b[f],this.options[m])){h=!0;break}for(f in b)this._setOption(f,b[f],c);h?this.refresh():this.grid.UpdateOptions(b)},_setOption:function(a,c,e){this._super(a,c,e)},$k:function(a,
c){return"disable"!==this.options.header[a].resizable[c]},WD:function(a){return"disable"!==this.options.header[a].sortable},oM:function(){var a,c,e=null,g=null,h=null,k;a=this;if(null==this.options.contextMenu){if(null!=this.dc){c=f("\x3cul\x3e");c.css("display","none").attr("id",this.Re+"contextmenu");f(this.root).append(c);if(this.$k("column","width")||this.$k("column","height")||this.$k("row","width")||this.$k("row","height"))e=this.dh("resize");k=this.dc.getCapability("sort");!this.WD("column")||
"column"!==k&&"full"!==k||(g=this.dh("sortCol"));!this.WD("row")||"row"!==k&&"full"!==k||(g=null!=g?g.add(this.dh("sortRow")):this.dh("sortRow"));if("enable"===this.options.dnd.reorder)switch(this.dc.getCapability("move")){case "none":break;default:h=f(this.ie("cut")).add(f(this.ie("paste")))}c.append(e).append(g).append(h);c.ojMenu();this._setOption("contextMenu","#"+c.attr("id"));c.on("ojbeforeopen",this.th.bind(this));c.on("ojselect",this.uh.bind(this))}}else c=f(this.options.contextMenu),e=c.find("[data-oj-command]"),
e.each(function(){var c;0===f(this).children("a").length&&(c=f(this).attr("data-oj-command").split("-"),f(this).replaceWith(a.dh(c[c.length-1])))}),c.ojMenu("refresh"),c.on("ojbeforeopen",this.th.bind(this)),c.on("ojselect",this.uh.bind(this))},dh:function(a){if("resize"===a)return f(this.ie("resize")).append(f("\x3cul\x3e\x3c/ul\x3e").append(f(this.ie("resizeWidth"))).append(f(this.ie("resizeHeight"))));if("sortCol"===a)return f(this.ie("sortCol")).append(f("\x3cul\x3e\x3c/ul\x3e").append(f(this.ie("sortColAsc"))).append(f(this.ie("sortColDsc"))));
if("sortRow"===a)return f(this.ie("sortRow")).append(f("\x3cul\x3e\x3c/ul\x3e").append(f(this.ie("sortRowAsc"))).append(f(this.ie("sortRowDsc"))));if(-1!=Object.keys(this.dk.Je).indexOf(a))return f(this.ie(a))},ie:function(a){return"\x3cli data-oj-command\x3d"+this.oh(a)+"\x3e"+this.St(a)+"\x3c/li\x3e"},St:function(a){a="label"+a.charAt(0).toUpperCase()+a.slice(1);return'\x3ca href\x3d"#"\x3e'+this.hD(a)+"\x3c/a\x3e"},Wu:function(){return f(this.options.contextMenu).get(0)},hD:function(a,c){return this.J(a,
c)},JQ:function(){var a=f("#"+this.Re+"spinner").ojInputNumber("option","value");f("#"+this.Re+"dialog").remove();this.grid.handleContextMenuReturn(this.xg,this.Hg,a);this.xg.target.focus()},ZM:function(a,c){var e,g,h,k,l;e=f("#"+this.Re+"dialog");h=f("#"+this.Re+"spinner");if(0===e.length||0===h.length)e=f("\x3cdiv\x3e"),e.attr("id",this.Re+"dialog"),e.attr("title",a),g=f('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'),k=f('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'),e.append(g).append(k),
h=f('\x3cinput id\x3d"'+this.Re+'spinner"/\x3e'),l=f("\x3cbutton\x3e"),g.append(h),k.append(l),f(this.root).append(e),l.ojButton({va:"ojButton",label:"OK"}),l.on("click",this.JQ.bind(this));h.ojInputNumber({va:"ojInputNumber",max:1E3,min:20,step:1,value:c});e.ojDialog({initialVisibility:"show",position:{my:"center center",at:"center center",collision:"none",of:f(this.root)}})},uh:function(a,c){var e;this.Hg=c.item.attr("data-oj-command");if(this.Hg===this.oh("sortColAsc")||this.Hg===this.oh("sortColDsc")||
this.Hg===this.oh("cut")||this.Hg===this.oh("paste"))this.grid.handleContextMenuReturn(this.xg,this.Hg,null);else if(this.Hg===this.oh("resizeWidth")||this.Hg===this.oh("resizeHeight"))e=this.Ou(f(this.xg.target),"oj-datagrid-headercell"),e=null!=e?this.Hg===this.oh("resizeWidth")?e.outerWidth():e.outerHeight():this.Hg===this.oh("resizeWidth")?f(this.xg.target).outerWidth():f(this.xg.target).outerHeight(),this.ZM(c.item.text(),e)},th:function(a,c){var e;f(this.Wu());this.xg=a.originalEvent.originalEvent;
c.openOptions.position="keydown"===this.xg.type?{my:"start top",at:"start bottom",of:this.xg.target}:{my:"start top",at:"start bottom"};e=this.Ou(f(this.xg.target).eq(0),this.sj("cell"));null!=e?e=this.bP(e):(e=this.Ou(f(this.xg.target).eq(0),this.sj("headercell")),e=this.sP(e));this.UR(e)},pM:function(a){var c;c=f(this.Wu());c.find("[data-oj-command\x3d"+a+"]").hasClass("oj-disabled")||c.find("[data-oj-command\x3d"+a+"]").addClass("oj-disabled")},jT:function(a){f(this.Wu()).find("[data-oj-command\x3d"+
a+"]").removeClass("oj-disabled")},UR:function(a){var c,e;for(c in a)a.hasOwnProperty(c)&&(e=this.dk.rs(c),"disable"===a[c]?this.pM(e):this.jT(e))},Ou:function(a,c){var e;if(a.hasClass(c))return a;e=a.parents("."+c);return 0!=e.length?e.eq(0):null},PO:function(a){var c;c=a.parent();a=c.children().index(a);return{rowIndex:c.parent().children().index(c)-1,columnIndex:a}},RO:function(a){var c;c=this.QP().children().eq(0).children().eq(a.rowIndex+1);a=this.fP().children().eq(0).children().eq(a.columnIndex);
return{rowHeader:c,columnHeader:a}},UX:function(){return f(this.root)},fP:function(){return f("#"+this.Re+"\\:columnHeader")},QP:function(){return f("#"+this.Re+"\\:rowHeader")},TX:function(){return f("#"+this.Re+"\\:databody")},jP:function(){return f("#"+this.Re+"\\:databody ."+this.sj("row"))},bP:function(a){var c,e;a=this.PO(a);c=this.RO(a);a={XW:"disable",WW:"disable",kX:"disable",jX:"disable"};e=c.rowHeader;c=c.columnHeader;0!==c.length&&("true"===c.attr(this.ci("resizable"))&&(a.resizeWidth=
"enable"),"true"===c.attr(this.ci("sortable"))&&(a.sortCol="enable"));0!==e.length&&("true"===e.attr(this.ci("resizable"))&&(a.resizeHeight="enable"),"true"===e.attr(this.ci("sortable"))&&(a.sortRow="enable"));return a},sP:function(a){var c;c={XW:"disable",WW:"disable",kX:"disable",jX:"disable"};null!==a&&(a.hasClass(this.sj("colheadercell"))?("true"===a.attr(this.ci("resizable"))&&(c.resizeWidth="enable"),c.resizeHeight=this.$k("column","height")?"enable":"disable","true"===a.attr(this.ci("sortable"))&&
(c.sortCol="enable")):("true"===a.attr(this.ci("resizable"))&&(c.resizeHeight="enable"),c.resizeWidth=this.$k("row","width")?"enable":"disable","true"===a.attr(this.ci("sortable"))&&(c.sortRow="enable")));return c},ZF:function(){this.dc=null!=this.options.data?this.options.data:null},Wn:function(){var a=this.options.selection;null!=a&&this.grid.SetSelection(a)},cS:function(a){a.component=this},Er:function(a){this.grid.SetAccessibleContext(a)},gx:function(b){b&&this.Fe&&a.da.ck(b,this.Fe)},kl:function(b){b&&
(null==this.Fe&&(this.Fe=this.vh.bind(this)),a.da.Bh(b,this.Fe))},vh:function(a,c){0<a&&0<c&&this.grid.HandleResize(a,c)},getNodeBySubId:function(a){var c,e,g;if(null==a)return this.element?this.element[0]:null;c=a.subId;return"oj-datagrid-cell"===c?(c=a.rowIndex-this.grid.getStartRow(),a=a.columnIndex-this.grid.getStartColumn(),this.jP().eq(c).children().eq(a).get(0)):"oj-datagrid-sort-icon"===c||"oj-datagrid-header"===c?(g=a.axis,a=a.index,"column"===g?e=f("#"+this.Re+"\\:columnHeader ."+this.sj("headercell")).eq(a-
this.grid.getStartColumnHeader()):"row"===g&&(e=f("#"+this.Re+"\\:rowHeader ."+this.sj("headercell")).eq(a-this.grid.getStartRowHeader())),"oj-datagrid-sort-icon"===c?e.children("."+this.sj("sortcontainer")).children().get(0):e.get(0)):null},sj:function(a){return this.dk.Ox(a)},ci:function(a){return this.dk.Nx(a)},oh:function(a){return this.dk.rs(a)}});a.Te=function(b,c,e,f,h,k){a.i.fc(b,null);a.i.fc(c,null);a.i.fc(e,null);a.i.fc(f,null);a.i.jo(k);this.sf=b;this.Zj=c;this.Gg=e;this.Yj=f;this.jb=h;
this.Mc=k};o_("FlattenedTreeCellSet",a.Te,a);a.Te.prototype.getData=function(b){var c;c=this.UC(b);if(null==c)return null;b=c[0];c=c[1];a.i.assert(b<this.jb.Ia()+this.jb.Z()&&c<this.Mc.length);c=this.Mc[c];b=this.jb.getData(b);return null!=b?b.get?b.get(c):b[c]:null};a.b.g("FlattenedTreeCellSet.prototype.getData",{getData:a.Te.prototype.getData});a.Te.prototype.getMetadata=function(b){var c;c=this.UC(b);if(null==c)return null;b=c[0];c=c[1];a.i.assert(b<this.jb.Ia()+this.jb.Z()&&c<this.Mc.length);
c=this.Mc[c];b=this.jb.getMetadata(b);b.keys={row:b.key,column:c};return b};a.b.g("FlattenedTreeCellSet.prototype.getMetadata",{getMetadata:a.Te.prototype.getMetadata});a.Te.prototype.UC=function(b){var c;a.i.oe(b);if(null==this.jb||0==this.jb.length)return null;c=b.row-this.sf+this.jb.Ia();b=b.column;a.i.fc(c,null);a.i.fc(b,null);a.i.assert(0<=c&&0<=b);return[c,b]};a.Te.prototype.Ia=function(a){return"row"===a?this.sf:"column"===a?this.Gg:0};a.b.g("FlattenedTreeCellSet.prototype.getStart",{Ia:a.Te.prototype.Ia});
a.Te.prototype.Z=function(a){return"row"===a?Math.min(this.Zj-this.sf,this.jb.Z()):"column"===a?this.Yj-this.Gg:0};a.b.g("FlattenedTreeCellSet.prototype.getCount",{Z:a.Te.prototype.Z});a.Sg=function(b,c,e,f,h){a.i.fc(b,null);a.i.fc(c,null);a.i.jo(e);this.xc=b;this.Qf=c;this.Cs=e;this.jb=f;this.rf=h};o_("FlattenedTreeHeaderSet",a.Sg,a);a.Sg.prototype.getData=function(b){a.i.assert(b<=this.Qf&&b>=this.xc);return null!=this.rf&&null!=this.jb?(b=this.jb.getData(b),null!=b?b.get(this.rf):null):this.Cs[b]};
a.b.g("FlattenedTreeHeaderSet.prototype.getData",{getData:a.Sg.prototype.getData});a.Sg.prototype.getMetadata=function(a){return null!=this.rf&&null!=this.jb?this.jb.getMetadata(a):{key:this.getData(a)}};a.b.g("FlattenedTreeHeaderSet.prototype.getMetadata",{getMetadata:a.Sg.prototype.getMetadata});a.Sg.prototype.Z=function(){return null!=this.rf&&null!=this.jb?Math.min(this.jb.Z(),this.Qf-this.xc):Math.max(0,this.Qf-this.xc)};a.b.g("FlattenedTreeHeaderSet.prototype.getCount",{Z:a.Sg.prototype.Z});
a.ee=function(b,c,e,f,h){a.i.fc(b,null);a.i.fc(c,null);a.i.fc(e,null);a.i.fc(f,null);this.sf=b;this.Zj=c;this.Gg=e;this.Yj=f;this.Pf=h};o_("ArrayCellSet",a.ee,a);a.ee.prototype.getData=function(a){return this.Pf.UV(a.row,a.column)};a.b.g("ArrayCellSet.prototype.getData",{getData:a.ee.prototype.getData});a.ee.prototype.getMetadata=function(a){return this.Pf.VV(a.row,a.column)};a.b.g("ArrayCellSet.prototype.getMetadata",{getMetadata:a.ee.prototype.getMetadata});a.ee.prototype.Ia=function(a){return"row"==
a?this.sf:"column"==a?this.Gg:-1};a.b.g("ArrayCellSet.prototype.getStart",{Ia:a.ee.prototype.Ia});a.ee.prototype.Z=function(a){return"row"===a?Math.max(0,this.Zj-this.sf):"column"===a?Math.max(0,this.Yj-this.Gg):0};a.b.g("ArrayCellSet.prototype.getCount",{Z:a.ee.prototype.Z});a.ee.prototype.getStartRow=function(){return this.sf};a.b.g("ArrayCellSet.prototype.getStartRow",{getStartRow:a.ee.prototype.getStartRow});a.ee.prototype.getStartColumn=function(){return this.Gg};a.b.g("ArrayCellSet.prototype.getStartColumn",
{getStartColumn:a.ee.prototype.getStartColumn});a.Na=function(b,c){a.Na.t.constructor.call(this,b,c)};o_("FlattenedTreeDataGridDataSource",a.Na,a);a.b.ra(a.Na,a.ha,"oj.FlattenedTreeDataGridDataSource");a.Na.prototype.Init=function(){a.Na.t.Init.call(this);this.Mc=a.Na.t.to.call(this,"columns");this.rf=a.Na.t.to.call(this,"rowHeader")};a.b.g("FlattenedTreeDataGridDataSource.prototype.Init",{Init:a.Na.prototype.Init});a.Na.prototype.lf=function(a){return"row"===a?"estimate":"actual"};a.b.g("FlattenedTreeDataGridDataSource.prototype.getCountPrecision",
{lf:a.Na.prototype.lf});a.Na.prototype.Z=function(a){return"row"===a?-1:"column"===a?this.Mc.length:0};a.b.g("FlattenedTreeDataGridDataSource.prototype.getCount",{Z:a.Na.prototype.Z});a.Na.prototype.Xd=function(b,c,e){var f,h;f=b.axis;if("column"===f)h=new a.Sg(b.start,b.start+b.count,this.Mc);else if("row"===f){if(null!=this.rf){this.Fg={range:b,callbacks:c,callbackObjects:e};return}h=new a.ye(b.start,b.start,f,null)}null!=h&&null!=c&&null!=c.success&&(null==e&&(e={}),c.success.call(e.success,h,
b))};a.b.g("FlattenedTreeDataGridDataSource.prototype.fetchHeaders",{Xd:a.Na.prototype.Xd});a.Na.prototype.Vd=function(b,c,e){var f,h,k,l;for(f=0;f<b.length;f++)if(h=b[f],"row"==h.axis){k=h.start;l=h.count;break}a.Na.t.EH.call(this,{start:k,count:l},{success:function(a){this.Mv(a,b,c,e,0)}.bind(this),error:function(a){this.qQ(a,{start:k,count:l},c,e)}.bind(this)})};a.b.g("FlattenedTreeDataGridDataSource.prototype.fetchCells",{Vd:a.Na.prototype.Vd});a.Na.prototype.keys=function(b){var c;c=b.row;b=
b.column;return c>a.Na.t.ZV.call(this).end||b>this.Mc.length?null:{row:a.Na.t.getKey.call(this,c),column:this.Mc[b]}};a.b.g("FlattenedTreeDataGridDataSource.prototype.keys",{keys:a.Na.prototype.keys});a.Na.prototype.Zd=function(b){var c,e,f;c=b.row;b=b.column;c=a.Na.t.Gl.call(this,c);for(f=0;f<this.Mc.length;f++)if(this.Mc[f]===b){e=f;break}return 0<=c&&0<=e?{row:c,column:e}:null};a.b.g("FlattenedTreeDataGridDataSource.prototype.indexes",{Zd:a.Na.prototype.Zd});a.Na.prototype.sort=function(b,c,e){return a.Na.t.getWrappedDataSource.call(this).sort(b,
{success:function(){this.MQ(c,e)}.bind(this),error:c.error})};a.b.g("FlattenedTreeDataGridDataSource.prototype.sort",{sort:a.Na.prototype.sort});a.Na.prototype.MQ=function(a,c){this.refresh();a.success&&(null==c&&(c={}),a.success.call(c.success))};a.Na.prototype.move=function(b,c,e,f){a.Na.t.getWrappedDataSource.call(this).move(b,c,e,f)};a.b.g("FlattenedTreeDataGridDataSource.prototype.move",{move:a.Na.prototype.move});a.Na.prototype.getCapability=function(b){return"default"===a.Na.t.getWrappedDataSource.call(this).getCapability(b)?
"column":"none"};a.b.g("FlattenedTreeDataGridDataSource.prototype.getCapability",{getCapability:a.Na.prototype.getCapability});a.Na.prototype.Co=function(b,c){a.Na.t.Co.call(this,b,c)};a.Na.prototype.Mv=function(b,c,e,f){var h,k,l,m,n,q;for(h=0;h<c.length;h++)k=c[h],"row"==k.axis?(l=k.start,m=k.count):"column"==k.axis&&(n=k.start,q=k.count);this.Fg&&(h=this.Fg.range,h.start==l&&h.count==m&&this.KQ(b,h,this.Fg.callbacks,this.Fg.callbackObjects),this.Fg=null);b=new a.Te(l,l+m,n,n+q,b,this.Mc);e.success&&
(null==f&&(f={}),e.success.call(f.success,b,c))};a.Na.prototype.qQ=function(a,c,e,f){var h;this.Fg&&(h=this.Fg.range,h.start==c.start&&h.count==c.count&&(c=this.Fg.callbacks,h=this.Fg.callbackObjects,c.error&&(null==h&&(h={}),c.error.call(h.error,a))),this.Fg=null);e.error&&(null==f&&(f={}),e.success.call(f.error,a))};a.Na.prototype.KQ=function(b,c,e,f){b=new a.Sg(c.start,c.start+c.count,this.Mc,b,this.rf);e.success&&(null==f&&(f={}),e.success.call(f.success,b,c))};a.Na.prototype.ys=function(b,c,
e){b=new a.Te(b,b+e.Z(),0,this.Mc.length,e,this.Mc);e={source:this,operation:"insert"};e.result=b;e.keys={row:c};a.Na.t.handleEvent.call(this,"change",e)};a.Na.prototype.Ms=function(b){var c,e;c=[];for(e=0;e<b.length;e++)c.push({row:b[e].key});b={source:this,operation:"delete"};b.keys=c;a.Na.t.handleEvent.call(this,"change",b)};a.Na.prototype.Ux=function(b,c){c.success.call(null,new a.$c(null,b.start))};a.Ra=function(b){if(!(b instanceof a.ia))throw new a.U("Not a datagridatasource","Not a datagridatasource",
a.U.Lb.ERROR);this.Oa=b;this.O=0;this.Init()};o_("PagingDataGridDataSource",a.Ra,a);a.b.ra(a.Ra,a.kb,"oj.PagingDataGridDataSource");a.Ra.prototype.Init=function(){a.Ra.t.Init.call(this)};a.b.g("PagingDataGridDataSource.prototype.Init",{Init:a.Ra.prototype.Init});a.Ra.prototype.fetch=function(b){this.O=b.startIndex;this.Oa.setPageSize(this.jd);var c=this;return a.b.la(function(a){c.Oa.fetch(b);a()})};a.b.g("PagingDataGridDataSource.prototype.fetch",{fetch:a.Ra.prototype.fetch});a.Ra.prototype.hasMore=
function(){return this.Oa.hasMore()};a.b.g("PagingDataGridDataSource.prototype.hasMore",{hasMore:a.Ra.prototype.hasMore});a.Ra.prototype.next=function(){return this.Oa.totalSize()>this.O?(this.jd+=this.Za,this.Oa.setPageSize(this.jd),this.fetch({startIndex:this.O})):a.b.la(function(a,c){c()})};a.b.g("PagingDataGridDataSource.prototype.next",{next:a.Ra.prototype.next});a.Ra.prototype.previous=function(){return 0!=this.O||-1!=this.O?(this.O-=this.Za,this.O=0>this.O?0:this.O,this.jd+=this.Za,this.Oa.setPageSize(this.jd),
this.fetch({startIndex:this.O})):a.b.la(function(a,c){c()})};a.b.g("PagingDataGridDataSource.prototype.previous",{previous:a.Ra.prototype.previous});a.Ra.prototype.setPageSize=function(a){this.Za=a;this.jd=this.O+a;this.Oa.setPageSize(this.jd)};a.Ra.prototype.startIndex=function(){return this.O};a.b.g("PagingDataGridDataSource.prototype.startIndex",{startIndex:a.Ra.prototype.startIndex});a.Ra.prototype.Z=function(a){return this.Oa.Z(a)};a.b.g("PagingDataGridDataSource.prototype.getCount",{Z:a.Ra.prototype.Z});
a.Ra.prototype.lf=function(a){return this.Oa.lf(a)};a.b.g("PagingDataGridDataSource.prototype.getCountPrecision",{lf:a.Ra.prototype.lf});a.Ra.prototype.Xd=function(a,c,e){this.Oa.Xd(a,c,e)};a.b.g("PagingDataGridDataSource.prototype.fetchHeaders",{Xd:a.Ra.prototype.Xd});a.Ra.prototype.Vd=function(a,c,e){this.Oa.Vd(a,c,e)};a.b.g("PagingDataGridDataSource.prototype.fetchCells",{Vd:a.Ra.prototype.Vd});a.Ra.prototype.keys=function(a){return this.Oa.keys(a)};a.b.g("PagingDataGridDataSource.prototype.keys",
{keys:a.Ra.prototype.keys});a.Ra.prototype.Zd=function(a){return this.Oa.Zd(a)};a.b.g("PagingDataGridDataSource.prototype.indexes",{Zd:a.Ra.prototype.Zd});a.Ra.prototype.on=function(a,c){this.Oa.on(a,c)};a.b.g("PagingDataGridDataSource.prototype.on",{on:a.Ra.prototype.on});a.Ra.prototype.off=function(a,c){this.Oa.off(a,c)};a.b.g("PagingDataGridDataSource.prototype.off",{off:a.Ra.prototype.off});a.Ra.prototype.getCapability=function(a){return this.Oa.getCapability(a)};a.b.g("PagingDataGridDataSource.prototype.getCapability",
{getCapability:a.Ra.prototype.getCapability});a.Ra.prototype.size=function(){return this.Oa.size()};a.b.g("PagingDataGridDataSource.prototype.size",{size:a.Ra.prototype.size});a.Ra.prototype.sort=function(a,c,e){this.Oa.sort(a,c,e)};a.b.g("PagingDataGridDataSource.prototype.sort",{sort:a.Ra.prototype.sort});a.Ra.prototype.totalSize=function(){return this.Oa.totalSize()};a.b.g("PagingDataGridDataSource.prototype.totalSize",{totalSize:a.Ra.prototype.totalSize});a.Ra.prototype.move=function(a,c){this.Oa.move(a,
c)};a.b.g("PagingDataGridDataSource.prototype.move",{move:a.Ra.prototype.move});a.ye=function(b,c,e,f){a.i.fc(b,null);a.i.fc(c,null);this.xc=b;this.Qf=c;this.II=e;this.Pf=f};o_("ArrayHeaderSet",a.ye,a);a.ye.prototype.getData=function(b){if(null==this.Pf)return null;a.i.assert(b<=this.Qf&&b>=this.xc);return this.Pf.ZH(this.II,b)};a.b.g("ArrayHeaderSet.prototype.getData",{getData:a.ye.prototype.getData});a.ye.prototype.getMetadata=function(b){if(null==this.Pf)return null;a.i.assert(b<=this.Qf&&b>=this.xc);
return this.Pf.$V(this.II,b)};a.b.g("ArrayHeaderSet.prototype.getMetadata",{getMetadata:a.ye.prototype.getMetadata});a.ye.prototype.Z=function(){return null==this.Pf?0:Math.max(0,this.Qf-this.xc)};a.b.g("ArrayHeaderSet.prototype.getCount",{Z:a.ye.prototype.Z});a.ye.prototype.Ia=function(){return this.xc};a.b.g("ArrayHeaderSet.prototype.getStart",{Ia:a.ye.prototype.Ia})});
//# sourceMappingURL=oj-modular.map