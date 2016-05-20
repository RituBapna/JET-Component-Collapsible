/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtChart"],function(a,f){a.Ph=function(a){this.f=a};o_("ChartAxis",a.Ph,a);a.Ph.prototype.getTitle=function(){return this.f?this.f.title:null};a.b.g("ChartAxis.prototype.getTitle",{getTitle:a.Ph.prototype.getTitle});a.Ph.prototype.Di=function(){return this.f?this.f.bounds:null};a.b.g("ChartAxis.prototype.getBounds",{Di:a.Ph.prototype.Di});a.Xe=function(a){this.f=a};o_("SparkChartDataItem",a.Xe,a);a.Xe.prototype.ro=
function(){return this.f?this.f.borderColor:null};a.b.g("SparkChartDataItem.prototype.getBorderColor",{ro:a.Xe.prototype.ro});a.Xe.prototype.qd=function(){return this.f?this.f.color:null};a.b.g("SparkChartDataItem.prototype.getColor",{qd:a.Xe.prototype.qd});a.Xe.prototype.getDate=function(){return this.f?this.f.date:null};a.b.g("SparkChartDataItem.prototype.getDate",{getDate:a.Xe.prototype.getDate});a.Xe.prototype.getFloatValue=function(){return this.f?this.f.floatValue:null};a.b.g("SparkChartDataItem.prototype.getFloatValue",
{getFloatValue:a.Xe.prototype.getFloatValue});a.Xe.prototype.Bg=function(){return this.f?this.f.value:null};a.b.g("SparkChartDataItem.prototype.getValue",{Bg:a.Xe.prototype.Bg});a.La("oj.ojChart",f.oj.dvtBaseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{categoryFilter:null,categoryHighlight:null,optionChange:null,selectInput:null,viewportChange:null,viewportChangeInput:null},Af:function(a,b,d){return DvtChart.newInstance(a,b,d)},kA:function(){this._super();this.options.styleDefaults||
(this.options.styleDefaults={});if(!this.options.styleDefaults.colors){var c=new a.Rg;this.options.styleDefaults.colors=c.Nl()}},$e:function(){var a=this._super();a.push("oj-chart");return a},Zi:function(){var a=this._super();a["oj-chart-footnote"]={path:"footnote/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-slice-label"]={path:"styleDefaults/sliceLabelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-subtitle"]={path:"subtitle/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-title"]={path:"title/style",
property:"CSS_TEXT_PROPERTIES"};a["oj-chart-xaxis-tick-label"]={path:"xAxis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-xaxis-title"]={path:"xAxis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-yaxis-tick-label"]={path:"yAxis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-yaxis-title"]={path:"yAxis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-y2axis-tick-label"]={path:"y2Axis/tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-y2axis-title"]=
{path:"y2Axis/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend"]={path:"legend/textStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-legend-title"]={path:"legend/titleStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-chart-pan-icon"]={path:"_resources/panUp",property:"CSS_URL"};a["oj-chart-pan-icon oj-active"]={path:"_resources/panDown",property:"CSS_URL"};a["oj-chart-select-icon"]={path:"_resources/selectUp",property:"CSS_URL"};a["oj-chart-select-icon oj-active"]={path:"_resources/selectDown",property:"CSS_URL"};
a["oj-chart-zoom-icon"]={path:"_resources/zoomUp",property:"CSS_URL"};a["oj-chart-zoom-icon oj-active"]={path:"_resources/zoomDown",property:"CSS_URL"};return a},$i:function(){return"categoryFilter categoryHighlight optionChange selectInput viewportChange viewportChangeInput".split(" ")},zm:function(){var a=this._super();a["DvtChartBundle.DEFAULT_GROUP_NAME"]=this.qc("labelDefaultGroupName",["groupName"]);a["DvtChartBundle.EMPTY_TEXT"]=this.qc("msgNoData");a["DvtChartBundle.INVALID_DATA"]=this.qc("msgInvalidData");
a["DvtChartBundle.LABEL_SERIES"]=this.qc("labelSeries",["seriesName"]);a["DvtChartBundle.LABEL_GROUP"]=this.qc("labelGroup",["groupName"]);a["DvtChartBundle.LABEL_VALUE"]=this.qc("labelValue",["value"]);a["DvtChartBundle.LABEL_TARGET_VALUE"]=this.qc("labelTargetValue",["targetValue"]);a["DvtChartBundle.LABEL_X"]=this.qc("labelX",["x"]);a["DvtChartBundle.LABEL_Y"]=this.qc("labelY",["y"]);a["DvtChartBundle.LABEL_Z"]=this.qc("labelZ",["z"]);a["DvtChartBundle.LABEL_LOW"]=this.qc("labelLow",["low"]);a["DvtChartBundle.LABEL_HIGH"]=
this.qc("labelHigh",["high"]);a["DvtChartBundle.LABEL_OTHER"]=this.qc("labelOther");a["DvtChartBundle.PAN"]=this.qc("tooltipPan");a["DvtChartBundle.MARQUEE_SELECT"]=this.qc("tooltipSelect");a["DvtChartBundle.MARQUEE_ZOOM"]=this.qc("tooltipZoom");return a},aj:function(a){var b=a&&a.getType?a.getType():null;if(b===DvtSelectionEvent.TYPE||b===DvtSelectionEvent.TYPE_INPUT){var d=a.getSelection();if(d){for(var e=[],f=0;f<d.length;f++){var h={id:d[f].getId(),series:d[f].getSeries(),group:d[f].getGroup()};
e.push(h)}a={endGroup:a.getEndGroup(),startGroup:a.getStartGroup(),xMax:a.getXMax(),xMin:a.getXMin(),yMax:a.getYMax(),yMin:a.getYMin()};b===DvtSelectionEvent.TYPE?this.ig("selection",e,a):(a.items=e,this._trigger("selectInput",null,a))}}else if(b===DvtCategoryHideShowEvent.TYPE_HIDE||b===DvtCategoryHideShowEvent.TYPE_SHOW){e=b===DvtCategoryHideShowEvent.TYPE_HIDE?"out":"in";d=this.options.series;for(f=0;f<d.length;f++)d[f].name==a.getCategory()&&(d[f].visibility=b===DvtCategoryHideShowEvent.TYPE_HIDE?
"hidden":"visible");this._trigger("categoryFilter",null,{category:a.getCategory(),type:e})}else b===DvtCategoryRolloverEvent.TYPE_OVER||b===DvtCategoryRolloverEvent.TYPE_OUT?(b=b===DvtCategoryRolloverEvent.TYPE_OVER?"on":"off",this._trigger("categoryHighlight",null,{categories:[a.getCategory()],type:b})):b===DvtChartViewportChangeEvent.TYPE||b===DvtChartViewportChangeEvent.TYPE_INPUT?(a={endGroup:a.getEndGroup(),startGroup:a.getStartGroup(),xMax:a.getXMax(),xMin:a.getXMin(),yMax:a.getYMax(),yMin:a.getYMin()},
this._trigger(b===DvtChartViewportChangeEvent.TYPE?"viewportChange":"viewportChangeInput",null,a)):this._super(a)},rt:function(){null==this.options._resources&&(this.options._resources={});var c=this.options._resources;c.overviewGrippy=a.ja.ib("resources/internal-deps/dvt/chart/drag_horizontal.png");c.panCursorDown=a.ja.ib("resources/internal-deps/dvt/chart/hand-closed.cur");c.panCursorUp=a.ja.ib("resources/internal-deps/dvt/chart/hand-open.cur")},bj:function(a){return"selection"==a},getNodeBySubId:function(a){return this._super(a)},
getSubIdByNode:function(a){return this._super(a)},getTitle:function(){return this.Sa.getAutomation().getTitle()},getGroup:function(a){return this.Sa.getAutomation().getGroup(a)},getSeries:function(a){return this.Sa.getAutomation().getSeries(a)},getGroupCount:function(){return this.Sa.getAutomation().getGroupCount()},getSeriesCount:function(){return this.Sa.getAutomation().getSeriesCount()},getDataItem:function(c,b){var d=this.Sa.getAutomation();return new a.Jb(d.getDataItem(c,b))},getLegend:function(){var c=
this.Sa.getAutomation();return new a.jk(c.getLegend())},getPlotArea:function(){var c=this.Sa.getAutomation();return new a.gp(c.getPlotArea())},getXAxis:function(){var c=this.Sa.getAutomation();return new a.Ph(c.getXAxis())},getYAxis:function(){var c=this.Sa.getAutomation();return new a.Ph(c.getYAxis())},getY2Axis:function(){var c=this.Sa.getAutomation();return new a.Ph(c.getY2Axis())}});a.gp=function(a){this.f=a};o_("ChartPlotArea",a.gp,a);a.gp.prototype.Di=function(){return this.f?this.f.bounds:
null};a.b.g("ChartPlotArea.prototype.getBounds",{Di:a.gp.prototype.Di});a.jk=function(a){this.f=a};o_("ChartLegend",a.jk,a);a.jk.prototype.getTitle=function(){return this.f?this.f.title:null};a.b.g("ChartLegend.prototype.getTitle",{getTitle:a.jk.prototype.getTitle});a.jk.prototype.Di=function(){return this.f?this.f.bounds:null};a.b.g("ChartLegend.prototype.getBounds",{Di:a.jk.prototype.Di});a.La("oj.ojSparkChart",f.oj.dvtBaseComponent,{version:"1.0.0",widgetEventPrefix:"oj",Af:function(a,b,d){return DvtSparkChart.newInstance(a,
b,d)},$e:function(){var a=this._super();a.push("oj-sparkchart");return a},gg:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getNodeBySubId:function(a){return this._super(a)},getSubIdByNode:function(a){return this._super(a)},getDataItem:function(c){var b=this.Sa.getAutomation();
return new a.Xe(b.getDataItem(c))}});a.Jb=function(a){this.f=a};o_("ChartDataItem",a.Jb,a);a.Jb.prototype.getGroup=function(){return this.f?this.f.group:null};a.b.g("ChartDataItem.prototype.getGroup",{getGroup:a.Jb.prototype.getGroup});a.Jb.prototype.getSeries=function(){return this.f?this.f.series:null};a.b.g("ChartDataItem.prototype.getSeries",{getSeries:a.Jb.prototype.getSeries});a.Jb.prototype.ro=function(){return this.f?this.f.borderColor:null};a.b.g("ChartDataItem.prototype.getBorderColor",
{ro:a.Jb.prototype.ro});a.Jb.prototype.qd=function(){return this.f?this.f.color:null};a.b.g("ChartDataItem.prototype.getColor",{qd:a.Jb.prototype.qd});a.Jb.prototype.qe=function(){return this.f?this.f.label:null};a.b.g("ChartDataItem.prototype.getLabel",{qe:a.Jb.prototype.qe});a.Jb.prototype.Bg=function(){return this.f?this.f.value:null};a.b.g("ChartDataItem.prototype.getValue",{Bg:a.Jb.prototype.Bg});a.Jb.prototype.kI=function(){return this.f?this.f.targetValue:null};a.b.g("ChartDataItem.prototype.getTargetValue",
{kI:a.Jb.prototype.kI});a.Jb.prototype.ue=function(){return this.f?this.f.tooltip:null};a.b.g("ChartDataItem.prototype.getTooltip",{ue:a.Jb.prototype.ue});a.Jb.prototype.nI=function(){return this.f?this.f.x:null};a.b.g("ChartDataItem.prototype.getX",{nI:a.Jb.prototype.nI});a.Jb.prototype.oI=function(){return this.f?this.f.y:null};a.b.g("ChartDataItem.prototype.getY",{oI:a.Jb.prototype.oI});a.Jb.prototype.pI=function(){return this.f?this.f.z:null};a.b.g("ChartDataItem.prototype.getZ",{pI:a.Jb.prototype.pI});
a.Jb.prototype.isSelected=function(){return this.f?this.f.selected:!1};a.b.g("ChartDataItem.prototype.isSelected",{isSelected:a.Jb.prototype.isSelected})});
//# sourceMappingURL=oj-modular.map