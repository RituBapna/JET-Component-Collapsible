define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  var D={};D.$JSCompiler_alias_VOID$$ = void 0;
D.$JSCompiler_alias_TRUE$$ = !0;
D.$JSCompiler_alias_NULL$$ = null;
D.$JSCompiler_alias_FALSE$$ = !1;
D.$JSCompiler_identityFn$$ = function() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
};
D.$JSCompiler_emptyFn$$ = function() {
  return function() {
  }
};
D.$JSCompiler_set$$ = function($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
};
D.$JSCompiler_get$$ = function($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
};
D.$JSCompiler_returnArg$$ = function($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
};
D.COMPILED = D.$JSCompiler_alias_TRUE$$;
D.$goog$global$$ = this == window ? this : window;
D.$goog$basePath$$ = "";
if(!D.COMPILED) {
  D.$goog$dependencies_$$ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  D.$goog$inHtmlDocument_$$ = function $$goog$inHtmlDocument_$$$() {
    var $doc$$4$$ = D.$goog$global$$.document;
    return"undefined" != typeof $doc$$4$$ && "write" in $doc$$4$$
  };
  D.$goog$writeScriptTag_$$ = function $$goog$writeScriptTag_$$$($src$$6$$) {
    return(0,D.$goog$inHtmlDocument_$$)() ? (D.$goog$global$$.document.write('\x3cscript type\x3d"text/javascript" src\x3d"' + $src$$6$$ + '"\x3e\x3c/script\x3e'), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
  };
  if(D.$goog$global$$.CLOSURE_BASE_PATH) {
    D.$goog$basePath$$ = D.$goog$global$$.CLOSURE_BASE_PATH
  }else {
    if((0,D.$goog$inHtmlDocument_$$)()) {
      for(D.$scripts$$inline_560$$ = D.$goog$global$$.document.getElementsByTagName("script"), D.$i$$inline_561$$ = D.$scripts$$inline_560$$.length - 1;0 <= D.$i$$inline_561$$;--D.$i$$inline_561$$) {
        D.$src$$inline_562$$ = D.$scripts$$inline_560$$[D.$i$$inline_561$$].src;
        D.$qmark$$inline_563$$ = D.$src$$inline_562$$.lastIndexOf("?");
        D.$l$$inline_564$$ = -1 == D.$qmark$$inline_563$$ ? D.$src$$inline_562$$.length : D.$qmark$$inline_563$$;
        if("base.js" == D.$src$$inline_562$$.substr(D.$l$$inline_564$$ - 7, 7)) {
          D.$goog$basePath$$ = D.$src$$inline_562$$.substr(0, D.$l$$inline_564$$ - 7);
          break
        }
      }
    }
  }
  if(!D.$goog$global$$.CLOSURE_NO_DEPS) {
    D.$src$$inline_566$$ = D.$goog$basePath$$ + "deps.js";
    D.$importScript$$inline_567$$ = D.$goog$global$$.CLOSURE_IMPORT_SCRIPT || D.$goog$writeScriptTag_$$;
    !D.$goog$dependencies_$$.written[D.$src$$inline_566$$] && (0,D.$importScript$$inline_567$$)(D.$src$$inline_566$$) && (D.$goog$dependencies_$$.written[D.$src$$inline_566$$] = D.$JSCompiler_alias_TRUE$$)
  }
}
window.Math.floor(2147483648 * window.Math.random()).toString(36);
D.$goog$exportSymbol$$ = function $$goog$exportSymbol$$$($publicPath$$1$$, $object$$6$$) {
  var $parts$$inline_572$$ = $publicPath$$1$$.split("."), $cur$$inline_573$$ = D.$goog$global$$;
  !($parts$$inline_572$$[0] in $cur$$inline_573$$) && $cur$$inline_573$$.execScript && $cur$$inline_573$$.execScript("var " + $parts$$inline_572$$[0]);
  for(var $part$$inline_574$$;$parts$$inline_572$$.length && ($part$$inline_574$$ = $parts$$inline_572$$.shift());) {
    !$parts$$inline_572$$.length && $object$$6$$ !== D.$JSCompiler_alias_VOID$$ ? $cur$$inline_573$$[$part$$inline_574$$] = $object$$6$$ : $cur$$inline_573$$ = $cur$$inline_573$$[$part$$inline_574$$] ? $cur$$inline_573$$[$part$$inline_574$$] : $cur$$inline_573$$[$part$$inline_574$$] = {}
  }
};
D.DVT_ADVANCED_CLOSURE = D.$JSCompiler_alias_TRUE$$;
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$DvtDataGridUtils$$ = function $$DvtDataGridUtils$$$($dataGrid_userAgent$$5$$) {
  this.$scrollbarSize$ = -1;
  this.$dataGrid$ = $dataGrid_userAgent$$5$$;
  $dataGrid_userAgent$$5$$ = window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : D.$JSCompiler_alias_NULL$$;
  this.$os$ = (0,D.$JSCompiler_StaticMethods__determineOS$$)($dataGrid_userAgent$$5$$);
  this.platform = (0,D.$JSCompiler_StaticMethods__determinePlatform$$)($dataGrid_userAgent$$5$$)
};
D.$JSCompiler_StaticMethods_getScrollbarSize$$ = function $$JSCompiler_StaticMethods_getScrollbarSize$$$($JSCompiler_StaticMethods_getScrollbarSize$self$$) {
  if(-1 == $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$) {
    var $scrollDiv$$inline_8281$$ = window.document.createElement("div");
    $scrollDiv$$inline_8281$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    window.document.body.appendChild($scrollDiv$$inline_8281$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_8281$$.offsetWidth - $scrollDiv$$inline_8281$$.clientWidth;
    window.document.body.removeChild($scrollDiv$$inline_8281$$)
  }
  return $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$
};
D.$JSCompiler_StaticMethods_isTouchDevice$$ = function $$JSCompiler_StaticMethods_isTouchDevice$$$($JSCompiler_StaticMethods_isTouchDevice$self$$) {
  if($JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ == D.$JSCompiler_alias_VOID$$) {
    var $agentName$$ = window.navigator.userAgent.toLowerCase();
    $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ = -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$
};
D.$JSCompiler_StaticMethods_addCSSClassName$$ = function $$JSCompiler_StaticMethods_addCSSClassName$$$($domElement$$2$$, $className$$7$$) {
  var $currentClassName$$, $classNameIndex$$;
  $className$$7$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$2$$ != D.$JSCompiler_alias_NULL$$ && ($currentClassName$$ = $domElement$$2$$.className, $classNameIndex$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($currentClassName$$, $className$$7$$), -1 == $classNameIndex$$ && ($domElement$$2$$.className = $currentClassName$$ ? $className$$7$$ + " " + $currentClassName$$ : $className$$7$$))
};
D.$JSCompiler_StaticMethods_removeCSSClassName$$ = function $$JSCompiler_StaticMethods_removeCSSClassName$$$($domElement$$3$$, $className$$8$$) {
  var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
  $className$$8$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$3$$ != D.$JSCompiler_alias_NULL$$ && ($afterstring_currentClassName$$1$$ = $domElement$$3$$.className, $beforestring_classNameIndex$$1$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($afterstring_currentClassName$$1$$, $className$$8$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$8$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? 
  D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring(0, $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$3$$.className = $beforestring_classNameIndex$$1$$ == D.$JSCompiler_alias_NULL$$ ? $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? "" : $afterstring_currentClassName$$1$$ : 
  $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + $afterstring_currentClassName$$1$$))
};
D.$JSCompiler_StaticMethods_containsCSSClassName$$ = function $$JSCompiler_StaticMethods_containsCSSClassName$$$($domElement$$4$$, $className$$9$$) {
  return $className$$9$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$4$$ != D.$JSCompiler_alias_NULL$$ ? -1 != (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($domElement$$4$$.className, $className$$9$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGridUtils$_getCSSClassNameIndex$$ = function $$DvtDataGridUtils$_getCSSClassNameIndex$$$($currentClassName$$2$$, $className$$10$$) {
  var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$6_hasEnd$$, $lastNameIndex$$;
  if(!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
    return-1
  }
  if($className$$10$$ === $currentClassName$$2$$) {
    return 0
  }
  $classNameLength$$ = $className$$10$$.length;
  $currentClassNameLength$$ = $currentClassName$$2$$.length;
  $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$10$$);
  if(0 <= $nameIndex$$) {
    $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
    $endIndex$$6_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
    $endIndex$$6_hasEnd$$ = $endIndex$$6_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$6_hasEnd$$);
    if($hasStart$$ && $endIndex$$6_hasEnd$$) {
      return $nameIndex$$
    }
    $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$10$$);
    if($lastNameIndex$$ != $nameIndex$$) {
      return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$6_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$6_hasEnd$$ = $endIndex$$6_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$6_hasEnd$$), $hasStart$$ && $endIndex$$6_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$10$$ + " ")
    }
  }
  return-1
};
D.$JSCompiler_StaticMethods_ctrlEquivalent$$ = function $$JSCompiler_StaticMethods_ctrlEquivalent$$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$677$$) {
  return"Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$677$$.metaKey : $event$$677$$.ctrlKey
};
D.$JSCompiler_StaticMethods_getElementScrollLeft$$ = function $$JSCompiler_StaticMethods_getElementScrollLeft$$$($JSCompiler_StaticMethods_getElementScrollLeft$self$$, $element$$17$$) {
  var $width$$160$$, $elemWidth$$;
  if($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$m_resources$.isRTLMode()) {
    if("gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform) {
      return window.Math.abs($element$$17$$.scrollLeft)
    }
    $width$$160$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$m_scroller$.firstChild);
    $elemWidth$$ = (0,window.parseInt)($element$$17$$.style.width, 10);
    return window.Math.max(0, $width$$160$$ - $elemWidth$$ - $element$$17$$.scrollLeft)
  }
  return $element$$17$$.scrollLeft
};
D.$JSCompiler_StaticMethods_setElementScrollLeft$$ = function $$JSCompiler_StaticMethods_setElementScrollLeft$$$($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$161$$, $element$$18$$, $scrollLeft$$1$$) {
  var $elemWidth$$1$$;
  $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$161$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$161$$.platform ? $element$$18$$.scrollLeft = 0 - $scrollLeft$$1$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$161$$.platform ? $element$$18$$.scrollLeft = $scrollLeft$$1$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$161$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$161$$.$dataGrid$.$m_scroller$.firstChild), 
  $elemWidth$$1$$ = (0,window.parseInt)($element$$18$$.style.width, 10), $element$$18$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$161$$ - $elemWidth$$1$$ - $scrollLeft$$1$$) : $element$$18$$.scrollLeft = $scrollLeft$$1$$
};
D.$JSCompiler_StaticMethods__determineOS$$ = function $$JSCompiler_StaticMethods__determineOS$$$($userAgent$$6$$) {
  if($userAgent$$6$$) {
    if(-1 != $userAgent$$6$$.indexOf("win")) {
      return"Windows"
    }
    if(-1 != $userAgent$$6$$.indexOf("mac")) {
      return"Mac"
    }
    if(-1 != $userAgent$$6$$.indexOf("sunos")) {
      return"Solaris"
    }
  }
  return"Unknown"
};
D.$JSCompiler_StaticMethods__determinePlatform$$ = function $$JSCompiler_StaticMethods__determinePlatform$$$($userAgent$$7$$) {
  if($userAgent$$7$$ && -1 == $userAgent$$7$$.indexOf("opera")) {
    if(-1 != $userAgent$$7$$.indexOf("trident") || -1 != $userAgent$$7$$.indexOf("msie")) {
      return"ie"
    }
    if(-1 != $userAgent$$7$$.indexOf("applewebkit") || -1 != $userAgent$$7$$.indexOf("safari")) {
      return"webkit"
    }
    if(-1 != $userAgent$$7$$.indexOf("gecko/")) {
      return"gecko"
    }
  }
  return"unknown"
};
D.$DvtDataGridOptions$$ = (0,D.$JSCompiler_set$$)("options");
D.$JSCompiler_StaticMethods_extract$$ = function $$JSCompiler_StaticMethods_extract$$$($JSCompiler_StaticMethods_extract$self_val1$$1$$, $arg1$$, $arg2_val2$$, $arg3$$) {
  return $arg1$$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_extract$self_val1$$1$$ = $JSCompiler_StaticMethods_extract$self_val1$$1$$.options[$arg1$$], $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_extract$self_val1$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($arg2_val2$$ = $JSCompiler_StaticMethods_extract$self_val1$$1$$[$arg2_val2$$], $arg3$$ != D.$JSCompiler_alias_NULL$$ && $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ ? $arg2_val2$$[$arg3$$] : $arg2_val2$$) : 
  $JSCompiler_StaticMethods_extract$self_val1$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$153$$, $obj$$369$$) {
  return"function" == typeof $value$$153$$ ? $value$$153$$.call(this, $obj$$369$$) : $value$$153$$
};
D.$JSCompiler_StaticMethods_getRawProperty$$ = function $$JSCompiler_StaticMethods_getRawProperty$$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$21$$, $axis$$64$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$64$$ || "column" == $axis$$64$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$64$$, $arg3$$1$$ = $prop$$21$$) : "cell" == $axis$$64$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$21$$);
  return(0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$)
};
D.$DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$22$$, $axis$$65$$, $obj$$370$$) {
  return this.evaluate((0,D.$JSCompiler_StaticMethods_getRawProperty$$)(this, $prop$$22$$, $axis$$65$$), $obj$$370$$)
};
D.$JSCompiler_StaticMethods_nullOrDefault$$ = function $$JSCompiler_StaticMethods_nullOrDefault$$$($value$$154$$) {
  return $value$$154$$ != D.$JSCompiler_alias_NULL$$ ? $value$$154$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_getRowBandingInterval$$ = function $$JSCompiler_StaticMethods_getRowBandingInterval$$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$) {
  $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$, "bandingInterval", "row");
  return $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ : 0
};
D.$JSCompiler_StaticMethods_getColumnBandingInterval$$ = function $$JSCompiler_StaticMethods_getColumnBandingInterval$$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$) {
  $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$, "bandingInterval", "column");
  return $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ : 0
};
D.$DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
  return(0,D.$JSCompiler_StaticMethods_extract$$)(this, "emptyText")
};
D.$JSCompiler_StaticMethods_getHorizontalGridlines$$ = function $$JSCompiler_StaticMethods_getHorizontalGridlines$$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$, "gridlines", "horizontal");
  return $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getVerticalGridlines$$ = function $$JSCompiler_StaticMethods_getVerticalGridlines$$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$, "gridlines", "vertical");
  return $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ : "visible"
};
D.$JSCompiler_StaticMethods_getSelectionCardinality$$ = function $$JSCompiler_StaticMethods_getSelectionCardinality$$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$127$$) {
  var $mode$$11_val$$84$$;
  $mode$$11_val$$84$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$127$$, "selectionMode");
  if($mode$$11_val$$84$$ == D.$JSCompiler_alias_VOID$$) {
    return"none"
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$127$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$127$$.$getSelectionMode$();
  $mode$$11_val$$84$$ = $mode$$11_val$$84$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$127$$];
  return $mode$$11_val$$84$$ != D.$JSCompiler_alias_NULL$$ ? $mode$$11_val$$84$$ : "none"
};
D.$DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
  var $cardinality_mode$$12$$;
  $cardinality_mode$$12$$ = (0,D.$JSCompiler_StaticMethods_extract$$)(this, "selectionMode");
  if($cardinality_mode$$12$$ == D.$JSCompiler_alias_VOID$$) {
    return"cell"
  }
  $cardinality_mode$$12$$ = $cardinality_mode$$12$$.row;
  return $cardinality_mode$$12$$ != D.$JSCompiler_alias_NULL$$ && "none" != $cardinality_mode$$12$$ ? "row" : "cell"
};
D.$DvtDataGridOptions$$.prototype.getSelection = function $$DvtDataGridOptions$$$$getSelection$() {
  return(0,D.$JSCompiler_StaticMethods_extract$$)(this, "selection")
};
D.$JSCompiler_StaticMethods_isResizable$$ = function $$JSCompiler_StaticMethods_isResizable$$$($JSCompiler_StaticMethods_isResizable$self$$, $axis$$67$$, $obj$$372$$) {
  return(0,D.$JSCompiler_StaticMethods_nullOrDefault$$)($JSCompiler_StaticMethods_isResizable$self$$.$getProperty$("resizable", $axis$$67$$, $obj$$372$$))
};
D.$DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$69$$, $obj$$373$$) {
  return this.$getProperty$("style", $axis$$69$$, $obj$$373$$)
};
D.$DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$70$$, $obj$$374$$) {
  return this.$getProperty$("className", $axis$$70$$, $obj$$374$$)
};
D.$JSCompiler_StaticMethods_getRenderer$$ = function $$JSCompiler_StaticMethods_getRenderer$$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$71$$) {
  return(0,D.$JSCompiler_StaticMethods_getRawProperty$$)($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$71$$)
};
D.$DvtDataGridSizingManager$$ = function $$DvtDataGridSizingManager$$$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$72$$, $headerKey$$, $size$$49$$) {
  this.$sizes$[$axis$$72$$][$headerKey$$] = $size$$49$$
};
D.$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$73$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$73$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$73$$][$headerKey$$1$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGrid$$ = function $$DvtDataGrid$$$() {
  this.TIMEOUT = 100;
  this.$MAX_COLUMN_THRESHOLD$ = 20;
  this.$MAX_ROW_THRESHOLD$ = 30;
  this.$m_utils$ = new D.$DvtDataGridUtils$$(this);
  this.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_sizingManager$ = new D.$DvtDataGridSizingManager$$;
  this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = D.$JSCompiler_alias_NULL$$;
  this.$m_styleClassDimensionMap$ = {};
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  this.$callbacks$ = {}
};
(0,D.$goog$exportSymbol$$)("DvtDataGrid", D.$DvtDataGrid$$);
D.$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$253$$) {
  this.$m_options$ = new D.$DvtDataGridOptions$$($options$$253$$)
};
D.$DvtDataGrid$$.prototype.SetOptions = D.$DvtDataGrid$$.prototype.$SetOptions$;
D.$DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$) {
  for(var $candidate$$ in $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$) {
    $candidate$$ in this.$m_options$.options && this.$m_options$.options[$candidate$$] != $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$[$candidate$$] && (this.$m_options$.options[$candidate$$] = $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$[$candidate$$])
  }
  for($candidate$$ in $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$) {
    a: {
      $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = D.$JSCompiler_alias_VOID$$;
      switch($candidate$$) {
        case "bandingInterval":
          var $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ = $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ = D.$JSCompiler_alias_VOID$$, $headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = D.$JSCompiler_alias_VOID$$, 
          $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ = D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = this.$m_databody$.firstChild.childNodes;
          $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ = this.getMappedStyle("banded");
          for($i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ = 1;$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ < $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$.length;$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$++) {
            (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$[$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$], $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$[$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$], 
            $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$);
            $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ = $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$[$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$].childNodes;
            for($headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = 0;$headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ < $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$.length;$headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$[$headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$], $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$[$headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$], 
              $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$)
            }
          }
          var $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ = $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ = $headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ = $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ = $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = 
          D.$JSCompiler_alias_VOID$$, $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$ = D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
          if(0 < $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$) {
            $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ = this.$m_databody$.firstChild.childNodes;
            $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ = this.getMappedStyle("banded");
            for($i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ = 1;$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ < $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$.length;$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ += 1) {
              $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$ = $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$[$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$].childNodes;
              for($j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ = 0;$j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ < $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$.length;$j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ += 1) {
                $headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = this.$m_startCol$ + $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$, 1 === window.Math.floor($headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ / $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$[$j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$], 
                $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$[$j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$], $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$[$j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$], 
                $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$[$j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$], $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$)
              }
            }
          }
          (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
          break;
        case "gridlines":
          var $dir$$inline_10970_opt$$inline_10982$$ = $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$ = $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ = $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ = $headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ = 
          $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ = $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$), $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ = 
          (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$), $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$ = this.$m_databody$.firstChild.childNodes, $headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$.length, $dir$$inline_10970_opt$$inline_10982$$ = this.$m_resources$.isRTLMode() ? "right" : 
          "left";
          for($JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = 1;$JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ < $headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$;$JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ += 
          1) {
            $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ = $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$[$JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$].childNodes;
            for($colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ = 0;$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ < $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$.length;$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ += 1) {
              "hidden" === $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)(this, $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ + this.$m_startCol$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)(this) + (0,D.$JSCompiler_StaticMethods_getElementDir$$)($i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$[$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$], 
              $dir$$inline_10970_opt$$inline_10982$$) + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)(this, $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$[$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$]) >= this.getWidth() ? "left" === $dir$$inline_10970_opt$$inline_10982$$ ? $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$[$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$].style.borderRightStyle = 
              "none" : $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$[$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$].style.borderLeftStyle = "none" : "left" === $dir$$inline_10970_opt$$inline_10982$$ ? $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$[$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$].style.borderRightStyle = "" : $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$[$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$].style.borderLeftStyle = 
              "", $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$[$colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$].style.borderBottomStyle = "hidden" === $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ || (0,D.$JSCompiler_StaticMethods__isLastRow$$)(this, $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ + 
              this.$m_startRow$ - 1) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)(this, $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$[$JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$], D.$JSCompiler_alias_NULL$$) >= this.getHeight() ? "none" : ""
            }
          }
          break;
        case "scrollPosition":
          (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this);
          break;
        case "selectionMode":
          break;
        case "emptyText":
          break;
        case "header":
          $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = this.$m_options$.options.header;
          $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ = $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ = $headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ = $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ = D.$JSCompiler_alias_VOID$$;
          this.$m_resources$.getMappedAttribute("key");
          $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ = D.$JSCompiler_alias_FALSE$$;
          for($bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ in $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$) {
            if("column" == $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ || "row" == $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$) {
              if($j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$) {
                break
              }
              "column" == $bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$ ? this.$m_colHeader$ && ($headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && 1 < this.$m_rowHeader$.firstChild.childElementCount && ($headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$ = this.$m_rowHeader$.firstChild.childNodes);
              if($headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$) {
                for($i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$ in $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$ = $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$[$bandingClass$$inline_10951_bandingClass$$inline_10958_element$$inline_10977_horizontalGridlines$$inline_10967$$], $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$) {
                  b: {
                    var $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$ = $headers$$inline_10976_index$$inline_10957_j$$inline_10950_rowCount$$inline_10966$$, $dir$$inline_10970_opt$$inline_10982$$ = $i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$, $value$$inline_10983$$ = $colObj$$inline_10974_j$$inline_10964_row$$inline_10948_rows$$inline_10955$$[$i$$inline_10949_i$$inline_10956_opt$$inline_10975_row$$inline_10965$$], $i$$inline_10984$$ = 
                    D.$JSCompiler_alias_VOID$$, $attribute$$inline_10985$$ = D.$JSCompiler_alias_VOID$$, $val$$inline_10986$$ = D.$JSCompiler_alias_VOID$$;
                    this.$m_resources$.getMappedAttribute("key");
                    $attribute$$inline_10985$$ = this.$m_resources$.getMappedAttribute($dir$$inline_10970_opt$$inline_10982$$);
                    $val$$inline_10986$$ = $value$$inline_10983$$;
                    $value$$inline_10983$$.width ? $val$$inline_10986$$ = $value$$inline_10983$$.width : $value$$inline_10983$$.height && ($val$$inline_10986$$ = $value$$inline_10983$$.height);
                    for($i$$inline_10984$$ = 0;$i$$inline_10984$$ < $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$.length;$i$$inline_10984$$++) {
                      if("disable" == $val$$inline_10986$$) {
                        $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$[$i$$inline_10984$$].setAttribute($attribute$$inline_10985$$, "false")
                      }else {
                        if("enable" == $val$$inline_10986$$) {
                          $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$[$i$$inline_10984$$].setAttribute($attribute$$inline_10985$$, "true")
                        }else {
                          $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$ = D.$JSCompiler_alias_FALSE$$;
                          break b
                        }
                      }
                    }
                    $JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$ = D.$JSCompiler_alias_TRUE$$
                  }
                  if(!$JSCompiler_inline_result$$inline_10979_headers$$inline_10981_row$$inline_10960_rows$$inline_10969$$) {
                    $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ = D.$JSCompiler_alias_TRUE$$;
                    break
                  }
                }
              }
            }
          }
          $j$$inline_10959_refresh$$inline_10978_verticalGridlines$$inline_10968$$ && this.refresh(this.$m_root$);
          break;
        case "selection":
          $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = this.$m_options$.getSelection();
          $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? ((0,D.$JSCompiler_StaticMethods__clearSelection$$)(this), this.$SetSelection$($JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$)) : 
          $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$.length = 0);
          break;
        default:
          $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = D.$JSCompiler_alias_FALSE$$;
          break a
      }
      $JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$ = D.$JSCompiler_alias_TRUE$$
    }
    if(!$JSCompiler_inline_result$$34_columnBandingInterval$$inline_10954_i$$inline_10963_obj$$inline_10973_obj$$inline_8391_options$$254_rows$$inline_10947_selection$$inline_10990$$) {
      this.refresh(this.$m_root$);
      break
    }
  }
};
D.$DvtDataGrid$$.prototype.UpdateOptions = D.$DvtDataGrid$$.prototype.$UpdateOptions$;
D.$DvtDataGrid$$.prototype.$SetResources$ = (0,D.$JSCompiler_set$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.SetResources = D.$DvtDataGrid$$.prototype.$SetResources$;
D.$DvtDataGrid$$.prototype.$getResources$ = (0,D.$JSCompiler_get$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.getResources = D.$DvtDataGrid$$.prototype.$getResources$;
D.$DvtDataGrid$$.prototype.$getStartRow$ = (0,D.$JSCompiler_get$$)("$m_startRow$");
D.$DvtDataGrid$$.prototype.getStartRow = D.$DvtDataGrid$$.prototype.$getStartRow$;
D.$DvtDataGrid$$.prototype.$getStartRowHeader$ = (0,D.$JSCompiler_get$$)("$m_startRowHeader$");
D.$DvtDataGrid$$.prototype.getStartRowHeader = D.$DvtDataGrid$$.prototype.$getStartRowHeader$;
D.$DvtDataGrid$$.prototype.$getStartColumn$ = (0,D.$JSCompiler_get$$)("$m_startCol$");
D.$DvtDataGrid$$.prototype.getStartColumn = D.$DvtDataGrid$$.prototype.$getStartColumn$;
D.$DvtDataGrid$$.prototype.$getStartColumnHeader$ = (0,D.$JSCompiler_get$$)("$m_startColHeader$");
D.$DvtDataGrid$$.prototype.getStartColumnHeader = D.$DvtDataGrid$$.prototype.$getStartColumnHeader$;
D.$DvtDataGrid$$.prototype.getMappedStyle = function $$DvtDataGrid$$$$getMappedStyle$($key$$113$$) {
  return this.$m_resources$.getMappedStyle($key$$113$$)
};
D.$DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
  $dataSource$$ != D.$JSCompiler_alias_NULL$$ && ($dataSource$$.on("change", this.$handleModelEvent$.bind(this), this), $dataSource$$.on("expand", this.$handleExpandEvent$.bind(this), this), $dataSource$$.on("collapse", this.$handleCollapseEvent$.bind(this), this));
  this.$m_dataSource$ = $dataSource$$
};
D.$DvtDataGrid$$.prototype.SetDataSource = D.$DvtDataGrid$$.prototype.$SetDataSource$;
D.$DvtDataGrid$$.prototype.$getDataSource$ = (0,D.$JSCompiler_get$$)("$m_dataSource$");
D.$DvtDataGrid$$.prototype.getDataSource = D.$DvtDataGrid$$.prototype.$getDataSource$;
D.$JSCompiler_StaticMethods__keys$$ = function $$JSCompiler_StaticMethods__keys$$$($JSCompiler_StaticMethods__keys$self$$, $indexes$$5$$, $callback$$151$$) {
  var $keys$$3$$;
  $keys$$3$$ = $JSCompiler_StaticMethods__keys$self$$.$m_dataSource$.keys($indexes$$5$$);
  "function" === typeof $keys$$3$$.then ? $keys$$3$$.then(function($keys$$3$$) {
    $callback$$151$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$3$$, $indexes$$5$$)
  }, function() {
    $callback$$151$$.call($JSCompiler_StaticMethods__keys$self$$, {row:D.$JSCompiler_alias_NULL$$, column:D.$JSCompiler_alias_NULL$$}, $indexes$$5$$)
  }) : $callback$$151$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$3$$, $indexes$$5$$)
};
D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$ = (0,D.$JSCompiler_set$$)("$m_createContextCallback$");
D.$DvtDataGrid$$.prototype.SetCreateContextCallback = D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$;
D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$ = function $$JSCompiler_StaticMethods__isHighWatermarkScrolling$$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_8442$$) {
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_8442$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_8442$$.$m_options$, "scrollPolicy");
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_8442$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_8442$$ = "auto");
  return"scroll" != $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_8442$$
};
D.$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  window.document.removeEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$);
  window.document.removeEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$);
  this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$ && (this.$m_dataSource$.off("change", this.$handleModelEvent$), this.$m_dataSource$.off("expand", this.$handleExpandEvent$), this.$m_dataSource$.off("collapse", this.$handleCollapseEvent$));
  this.$m_root$ != D.$JSCompiler_alias_NULL$$ && this.$m_handleDatabodyKeyDown$ && this.$m_root$.removeEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$);
  delete this.$m_styleClassDimensionMap$;
  this.$m_styleClassDimensionMap$ = {}
};
D.$DvtDataGrid$$.prototype.destroy = D.$DvtDataGrid$$.prototype.$destroy$;
D.$DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
  this.$m_width$ == D.$JSCompiler_alias_NULL$$ && (this.$m_width$ = this.$m_root$.clientWidth);
  return this.$m_width$
};
D.$DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
  this.$m_height$ == D.$JSCompiler_alias_NULL$$ && (this.$m_height$ = this.$m_root$.clientHeight);
  return this.$m_height$
};
D.$JSCompiler_StaticMethods_getViewportWidth$$ = function $$JSCompiler_StaticMethods_getViewportWidth$$$($JSCompiler_StaticMethods_getViewportWidth$self_width$$163$$) {
  $JSCompiler_StaticMethods_getViewportWidth$self_width$$163$$ = $JSCompiler_StaticMethods_getViewportWidth$self_width$$163$$.getWidth();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportWidth$self_width$$163$$)
};
D.$JSCompiler_StaticMethods_getViewportHeight$$ = function $$JSCompiler_StaticMethods_getViewportHeight$$$($JSCompiler_StaticMethods_getViewportHeight$self_height$$137$$) {
  $JSCompiler_StaticMethods_getViewportHeight$self_height$$137$$ = $JSCompiler_StaticMethods_getViewportHeight$self_height$$137$$.getHeight();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportHeight$self_height$$137$$)
};
D.$JSCompiler_StaticMethods_getFetchSize$$ = function $$JSCompiler_StaticMethods_getFetchSize$$$($JSCompiler_StaticMethods_getFetchSize$self$$, $axis$$45$$) {
  return"row" == $axis$$45$$ ? ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$) : "column" == $axis$$45$$ ? 
  ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$) : 0
};
D.$DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
  var $emptyText$$2_resources$$29$$;
  $emptyText$$2_resources$$29$$ = this.$m_options$.$getEmptyText$();
  $emptyText$$2_resources$$29$$ == D.$JSCompiler_alias_NULL$$ && ($emptyText$$2_resources$$29$$ = this.$m_resources$, $emptyText$$2_resources$$29$$ = $emptyText$$2_resources$$29$$.getTranslatedText("msgNoData"));
  return $emptyText$$2_resources$$29$$
};
D.$JSCompiler_StaticMethods_setDefaultDimensions$$ = function $$JSCompiler_StaticMethods_setDefaultDimensions$$$($JSCompiler_StaticMethods_setDefaultDimensions$self$$) {
  var $div$$1$$, $resources$$30$$;
  $div$$1$$ = window.document.createElement("div");
  $div$$1$$.style.visibilty = "hidden";
  $resources$$30$$ = $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_resources$;
  $div$$1$$.className = $resources$$30$$.getMappedStyle("colheader");
  window.document.body.appendChild($div$$1$$);
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultColumnHeaderHeight$ = $div$$1$$.offsetHeight;
  $div$$1$$.className = $resources$$30$$.getMappedStyle("colheadercell") + " " + $resources$$30$$.getMappedStyle("headercell");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultColumnWidth$ = $div$$1$$.offsetWidth;
  $div$$1$$.className = $resources$$30$$.getMappedStyle("rowheader");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultRowHeaderWidth$ = $div$$1$$.offsetWidth;
  $div$$1$$.className = $resources$$30$$.getMappedStyle("row");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultRowHeight$ = $div$$1$$.offsetHeight;
  window.document.body.removeChild($div$$1$$)
};
D.$JSCompiler_StaticMethods_getDefaultRowHeight$$ = function $$JSCompiler_StaticMethods_getDefaultRowHeight$$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$) {
  $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getDefaultRowHeight$self$$);
  return $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$
};
D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$ = function $$JSCompiler_StaticMethods_getDefaultColumnWidth$$$($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$) {
  $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$);
  return $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$
};
D.$JSCompiler_StaticMethods_getRowHeight$$ = function $$JSCompiler_StaticMethods_getRowHeight$$$($JSCompiler_StaticMethods_getRowHeight$self$$, $elem$$47$$, $key$$114$$) {
  var $rowHeight$$10$$, $className$$12$$;
  $rowHeight$$10$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$getSize$("row", $key$$114$$);
  if($rowHeight$$10$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_setElementHeight$$)($elem$$47$$, $rowHeight$$10$$), $rowHeight$$10$$
  }
  if("" != $elem$$47$$.style.height) {
    return $rowHeight$$10$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$47$$), $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$setSize$("row", $key$$114$$, $rowHeight$$10$$), $rowHeight$$10$$
  }
  $className$$12$$ = $elem$$47$$.className;
  $rowHeight$$10$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$className$$12$$];
  $rowHeight$$10$$ == D.$JSCompiler_alias_NULL$$ && ($elem$$47$$.style.visibility = "hidden", window.document.body.appendChild($elem$$47$$), $rowHeight$$10$$ = $elem$$47$$.offsetHeight, $elem$$47$$.style.visibility = "");
  $rowHeight$$10$$ != (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getRowHeight$self$$) && $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$setSize$("row", $key$$114$$, $rowHeight$$10$$);
  return $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$className$$12$$] = $rowHeight$$10$$
};
D.$JSCompiler_StaticMethods_getColumnWidth$$ = function $$JSCompiler_StaticMethods_getColumnWidth$$$($JSCompiler_StaticMethods_getColumnWidth$self$$, $elem$$48$$, $key$$115$$) {
  var $columnWidth$$1$$, $className$$13$$;
  $columnWidth$$1$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$getSize$("column", $key$$115$$);
  if($columnWidth$$1$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_setElementWidth$$)($elem$$48$$, $columnWidth$$1$$), $columnWidth$$1$$
  }
  if("" != $elem$$48$$.style.width) {
    return $columnWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$48$$), $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$setSize$("column", $key$$115$$, $columnWidth$$1$$), $columnWidth$$1$$
  }
  $className$$13$$ = $elem$$48$$.className;
  $columnWidth$$1$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$className$$13$$];
  $columnWidth$$1$$ == D.$JSCompiler_alias_NULL$$ && ($elem$$48$$.style.visibility = "hidden", window.document.body.appendChild($elem$$48$$), $columnWidth$$1$$ = $elem$$48$$.offsetWidth, $elem$$48$$.style.visibility = "");
  $columnWidth$$1$$ != (0,D.$JSCompiler_StaticMethods_getDefaultColumnWidth$$)($JSCompiler_StaticMethods_getColumnWidth$self$$) && $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$setSize$("column", $key$$115$$, $columnWidth$$1$$);
  return $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$className$$13$$] = $columnWidth$$1$$
};
D.$JSCompiler_StaticMethods_createSubId$$ = function $$JSCompiler_StaticMethods_createSubId$$$($JSCompiler_StaticMethods_createSubId$self$$, $subId$$24$$) {
  var $id$$294$$ = $JSCompiler_StaticMethods_createSubId$self$$.$m_root$.id;
  $id$$294$$ == D.$JSCompiler_alias_NULL$$ && ($id$$294$$ = "");
  return[$id$$294$$, $subId$$24$$].join(":")
};
D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$ = function $$JSCompiler_StaticMethods_isHeaderFetchComplete$$$($JSCompiler_StaticMethods_isHeaderFetchComplete$self$$) {
  return $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.row === D.$JSCompiler_alias_FALSE$$ && $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.column === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isFetchComplete$$ = function $$JSCompiler_StaticMethods_isFetchComplete$$$($JSCompiler_StaticMethods_isFetchComplete$self$$) {
  return(0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)($JSCompiler_StaticMethods_isFetchComplete$self$$) && $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.cells === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isLastRow$$ = function $$JSCompiler_StaticMethods__isLastRow$$$($JSCompiler_StaticMethods__isLastRow$self$$, $index$$157$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastRow$self$$, "row") ? $index$$157$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_endRow$ && $JSCompiler_StaticMethods__isLastRow$self$$.$m_stopRowFetch$ : $index$$157$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_dataSource$.getCount("row")
};
D.$JSCompiler_StaticMethods__isLastColumn$$ = function $$JSCompiler_StaticMethods__isLastColumn$$$($JSCompiler_StaticMethods__isLastColumn$self$$, $index$$158$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastColumn$self$$, "column") ? $index$$158$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_endCol$ && $JSCompiler_StaticMethods__isLastColumn$self$$.$m_stopColumnFetch$ : $index$$158$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_dataSource$.getCount("column")
};
D.$DvtDataGrid$$.prototype.empty = function $$DvtDataGrid$$$$empty$() {
  this.$m_empty$ && this.$m_root$.removeChild(this.$m_empty$);
  this.$m_corner$ && this.$m_root$.removeChild(this.$m_corner$);
  this.$m_bottomCorner$ && this.$m_root$.removeChild(this.$m_bottomCorner$);
  this.$m_columnHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_columnHeaderScrollbarSpacer$);
  this.$m_rowHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_rowHeaderScrollbarSpacer$);
  this.$m_root$.removeChild(this.$m_placeHolder$);
  this.$m_root$.removeChild(this.$m_status$);
  this.$m_root$.removeChild(this.$m_accSummary$);
  this.$m_root$.removeChild(this.$m_accInfo$);
  this.$m_root$.removeChild(this.$m_stateInfo$);
  this.$m_root$.removeChild(this.$m_contextInfo$);
  this.$m_root$.removeChild(this.$m_colHeader$);
  this.$m_root$.removeChild(this.$m_rowHeader$);
  this.$m_root$.removeChild(this.$m_databody$);
  this.$m_root$.removeChild(this.$m_scroller$)
};
D.$DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$23$$) {
  this.$destroy$();
  (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this);
  this.$render$($root$$23$$)
};
D.$DvtDataGrid$$.prototype.refresh = D.$DvtDataGrid$$.prototype.refresh;
D.$JSCompiler_StaticMethods_resetInternal$$ = function $$JSCompiler_StaticMethods_resetInternal$$$($JSCompiler_StaticMethods_resetInternal$self$$) {
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sizingManager$.clear();
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgColWidth$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databody$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scroller$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_empty$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateColumnCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultColumnHeaderHeight$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultColumnWidth$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultRowHeaderWidth$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultRowHeight$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_active$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_prevActive$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_prevActiveHeader$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($empty$$inline_8463_i$$inline_8465_root$$24$$) {
  this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (this.$destroy$(), (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this));
  this.$m_timingStart$ = new window.Date;
  this.$m_fetching$ = {};
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endColHeader$ = this.$m_endRowHeader$ = this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = this.$m_endCol$ = this.$m_endRow$ = this.$m_startCol$ = this.$m_startRow$ = 0;
  var $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$, $colHeader$$inline_8459$$, $rowHeader$$inline_8460$$, $emptyText$$inline_8464_root$$inline_10993$$;
  this.$m_root$ = $empty$$inline_8463_i$$inline_8465_root$$24$$;
  this.$m_root$.className = this.getMappedStyle("datagrid");
  this.$m_root$.setAttribute("role", "application");
  this.$m_root$.setAttribute("aria-describedby", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary"));
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  $empty$$inline_8463_i$$inline_8465_root$$24$$.tabIndex = 0;
  $emptyText$$inline_8464_root$$inline_10993$$ = window.document.createElement("div");
  $emptyText$$inline_8464_root$$inline_10993$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "status");
  $emptyText$$inline_8464_root$$inline_10993$$.className = this.getMappedStyle("status");
  $emptyText$$inline_8464_root$$inline_10993$$.setAttribute("role", "status");
  $empty$$inline_8463_i$$inline_8465_root$$24$$.appendChild($emptyText$$inline_8464_root$$inline_10993$$);
  this.$m_status$ = $emptyText$$inline_8464_root$$inline_10993$$;
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$ = window.document.createElement("div");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.className = this.getMappedStyle("info");
  $empty$$inline_8463_i$$inline_8465_root$$24$$.appendChild($root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$);
  this.$m_accSummary$ = $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$;
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$ = window.document.createElement("div");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "info");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.className = this.getMappedStyle("info");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.setAttribute("role", "status");
  $empty$$inline_8463_i$$inline_8465_root$$24$$.appendChild($root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$);
  this.$m_accInfo$ = $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$;
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$ = window.document.createElement("div");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "state");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.className = this.getMappedStyle("info");
  $empty$$inline_8463_i$$inline_8465_root$$24$$.appendChild($root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$);
  this.$m_stateInfo$ = $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$;
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$ = window.document.createElement("div");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "context");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.className = this.getMappedStyle("info");
  $empty$$inline_8463_i$$inline_8465_root$$24$$.appendChild($root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$);
  this.$m_contextInfo$ = $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$;
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$ = window.document.createElement("div");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "placeHolder");
  $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$.className = this.getMappedStyle("info");
  $empty$$inline_8463_i$$inline_8465_root$$24$$.appendChild($root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$);
  this.$m_placeHolder$ = $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$;
  if(this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$) {
    this.$m_empty$ = D.$JSCompiler_alias_NULL$$;
    $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$ = this.$m_resources$.isRTLMode();
    $colHeader$$inline_8459$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "column", this.getMappedStyle("colheader"));
    $rowHeader$$inline_8460$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "row", this.getMappedStyle("rowheader"));
    var $root$$inline_11011$$ = window.document.createElement("div");
    $root$$inline_11011$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "scroller");
    $root$$inline_11011$$.className = this.getMappedStyle("scrollers");
    $root$$inline_11011$$.tabIndex = "-1";
    $root$$inline_11011$$.addEventListener ? $root$$inline_11011$$.addEventListener("scroll", this.$handleScroll$.bind(this), D.$JSCompiler_alias_FALSE$$) : $root$$inline_11011$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    var $root$$inline_11015$$ = window.document.createElement("div");
    $root$$inline_11015$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "databody");
    $root$$inline_11015$$.className = this.getMappedStyle("databody");
    this.fetchCells($root$$inline_11015$$, $root$$inline_11011$$, 0, 0);
    $root$$inline_10996_root$$inline_10999_root$$inline_11002_root$$inline_11005_root$$inline_11008_rtl$$inline_8458$$ && ($colHeader$$inline_8459$$.style.direction = "rtl", $root$$inline_11015$$.style.direction = "rtl", $root$$inline_11011$$.style.direction = "rtl");
    $empty$$inline_8463_i$$inline_8465_root$$24$$.insertBefore($colHeader$$inline_8459$$, $emptyText$$inline_8464_root$$inline_10993$$);
    $empty$$inline_8463_i$$inline_8465_root$$24$$.insertBefore($rowHeader$$inline_8460$$, $emptyText$$inline_8464_root$$inline_10993$$);
    $empty$$inline_8463_i$$inline_8465_root$$24$$.insertBefore($root$$inline_11011$$, $emptyText$$inline_8464_root$$inline_10993$$);
    $empty$$inline_8463_i$$inline_8465_root$$24$$.insertBefore($root$$inline_11015$$, $emptyText$$inline_8464_root$$inline_10993$$);
    this.$m_colHeader$ = $colHeader$$inline_8459$$;
    this.$m_rowHeader$ = $rowHeader$$inline_8460$$;
    this.$m_databody$ = $root$$inline_11015$$;
    this.$m_scroller$ = $root$$inline_11011$$;
    this.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$;
    this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this);
    this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this);
    this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this);
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? ($root$$inline_11015$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11015$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11015$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11015$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_8459$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_8459$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_8459$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_8459$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $empty$$inline_8463_i$$inline_8465_root$$24$$.addEventListener("focus", this.$handleRootFocus$.bind(this), D.$JSCompiler_alias_TRUE$$), $empty$$inline_8463_i$$inline_8465_root$$24$$.addEventListener("blur", this.$handleRootBlur$.bind(this), D.$JSCompiler_alias_TRUE$$)) : (window.document.addEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$), window.document.addEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$), 
    $empty$$inline_8463_i$$inline_8465_root$$24$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$), $empty$$inline_8463_i$$inline_8465_root$$24$$.addEventListener("focus", this.$handleRootFocus$.bind(this), D.$JSCompiler_alias_TRUE$$), $empty$$inline_8463_i$$inline_8465_root$$24$$.addEventListener("blur", this.$handleRootBlur$.bind(this), D.$JSCompiler_alias_TRUE$$), $root$$inline_11015$$.addEventListener("gecko" === this.$m_utils$.platform ? "DOMMouseScroll" : 
    "mousewheel", this.$handleDatabodyMouseWheel$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11015$$.addEventListener("mousedown", this.$handleDatabodyMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11015$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11015$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11015$$.addEventListener("mouseout", 
    this.$handleDatabodyMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11015$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_8459$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("mouseover", 
    this.$handleHeaderMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_8459$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("mouseout", 
    this.$handleHeaderMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_8459$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_8460$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_8459$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_11011$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $root$$inline_11011$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$));
    if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && !this.$m_initialized$) {
      if((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this), this.$m_modelEvents$ != D.$JSCompiler_alias_NULL$$) {
        for($empty$$inline_8463_i$$inline_8465_root$$24$$ = 0;$empty$$inline_8463_i$$inline_8465_root$$24$$ < this.$m_modelEvents$.length;$empty$$inline_8463_i$$inline_8465_root$$24$$++) {
          this.$handleModelEvent$(this.$m_modelEvents$[$empty$$inline_8463_i$$inline_8465_root$$24$$])
        }
        this.$m_modelEvents$.length = 0
      }
    }else {
      (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && !this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this)
    }
  }else {
    $emptyText$$inline_8464_root$$inline_10993$$ = this.$getEmptyText$(), $empty$$inline_8463_i$$inline_8465_root$$24$$ = window.document.createElement("div"), $empty$$inline_8463_i$$inline_8465_root$$24$$.className = this.getMappedStyle("emptytext"), $empty$$inline_8463_i$$inline_8465_root$$24$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "empty")), $empty$$inline_8463_i$$inline_8465_root$$24$$.innerHTML = $emptyText$$inline_8464_root$$inline_10993$$, this.$m_root$.appendChild($empty$$inline_8463_i$$inline_8465_root$$24$$), 
    this.$m_empty$ = $empty$$inline_8463_i$$inline_8465_root$$24$$
  }
};
D.$DvtDataGrid$$.prototype.render = D.$DvtDataGrid$$.prototype.$render$;
D.$JSCompiler_StaticMethods_resizeHeaders$$ = function $$JSCompiler_StaticMethods_resizeHeaders$$$($JSCompiler_StaticMethods_resizeHeaders$self$$) {
  var $width$$164$$, $height$$138$$, $colHeader$$3$$, $rowHeader$$2$$, $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $dir$$16$$;
  $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$ || ($width$$164$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getWidth(), $height$$138$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getHeight(), $colHeader$$3$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$, $rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$, 
  $colHeaderHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_resizeHeaders$self$$), $rowHeaderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeHeaders$self$$), $dir$$16$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$2$$, 0, $dir$$16$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$2$$, 
  $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$2$$, $height$$138$$ - $colHeaderHeight$$2$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$3$$, $rowHeaderWidth$$2$$, $dir$$16$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$3$$, $width$$164$$ - $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeHeaders$self$$.$m_utils$) || (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeHeaders$self$$))
};
D.$DvtDataGrid$$.prototype.$HandleResize$ = function $$DvtDataGrid$$$$$HandleResize$$($width$$165$$, $height$$139$$) {
  if($width$$165$$ != this.$m_width$ || $height$$139$$ != this.$m_height$) {
    this.$m_width$ = $width$$165$$, this.$m_height$ = $height$$139$$, this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$))
  }
};
D.$DvtDataGrid$$.prototype.HandleResize = D.$DvtDataGrid$$.prototype.$HandleResize$;
D.$JSCompiler_StaticMethods_resizeGrid$$ = function $$JSCompiler_StaticMethods_resizeGrid$$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth$$3_width$$166$$, $height$$140_scrollerHeight$$1$$, $borderStyle$$inline_8478_colHeader$$4_empty$$1$$, $emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$, $scroller$$2$$, $databody$$2$$, $colHeaderHeight$$3$$, $rowHeaderWidth$$3$$, $databodyContentWidth$$1$$, $databodyContentHeight$$1$$, $databodyHeight$$3$$, $dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$1$$, $scrollerWidth$$1$$;
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$.firstChild == D.$JSCompiler_alias_NULL$$ ? ($emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getEmptyText$(), $borderStyle$$inline_8478_colHeader$$4_empty$$1$$ = window.document.createElement("div"), $borderStyle$$inline_8478_colHeader$$4_empty$$1$$.className = $JSCompiler_StaticMethods_resizeGrid$self$$.getMappedStyle("emptytext"), 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderStyle$$inline_8478_colHeader$$4_empty$$1$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$), "top"), $borderStyle$$inline_8478_colHeader$$4_empty$$1$$.innerHTML = $emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($borderStyle$$inline_8478_colHeader$$4_empty$$1$$), 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_empty$ = $borderStyle$$inline_8478_colHeader$$4_empty$$1$$) : ($databodyWidth$$3_width$$166$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth(), $height$$140_scrollerHeight$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight(), $borderStyle$$inline_8478_colHeader$$4_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, 
  $scroller$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, $databody$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $colHeaderHeight$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $rowHeaderWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $databodyContentWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$.firstChild), 
  $databodyContentHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$2$$.firstChild), $height$$140_scrollerHeight$$1$$ -= $colHeaderHeight$$3$$, $scrollerWidth$$1$$ = $databodyWidth$$3_width$$166$$ - $rowHeaderWidth$$3$$, $databodyWidth$$3_width$$166$$ = window.Math.min($databodyContentWidth$$1$$, $scrollerWidth$$1$$), $databodyHeight$$3$$ = window.Math.min($databodyContentHeight$$1$$, $height$$140_scrollerHeight$$1$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), 
  $scrollbarSize$$1$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), ($dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$1$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$140_scrollerHeight$$1$$ - 
  $scrollbarSize$$1$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$140_scrollerHeight$$1$$)) && ($dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$1$$ - $scrollbarSize$$1$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = 
  $dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$, $dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$ && ($height$$140_scrollerHeight$$1$$ - $scrollbarSize$$1$$ >= $databodyHeight$$3$$ || ($databodyHeight$$3$$ = $height$$140_scrollerHeight$$1$$ - $scrollbarSize$$1$$)), $isDatabodyVerticalScrollbarRequired$$1$$ && ($scrollerWidth$$1$$ - $scrollbarSize$$1$$ >= $databodyWidth$$3_width$$166$$ || 
  ($databodyWidth$$3_width$$166$$ = $scrollerWidth$$1$$ - $scrollbarSize$$1$$)), $dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$, 0, $dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$, $colHeaderHeight$$3$$, 
  "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$, $databodyHeight$$3$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderStyle$$inline_8478_colHeader$$4_empty$$1$$, $rowHeaderWidth$$3$$, $dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($borderStyle$$inline_8478_colHeader$$4_empty$$1$$, $databodyWidth$$3_width$$166$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$2$$, 
  $colHeaderHeight$$3$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$2$$, $rowHeaderWidth$$3$$, $dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$2$$, $databodyWidth$$3_width$$166$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$2$$, $databodyHeight$$3$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$2$$, $colHeaderHeight$$3$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$2$$, 
  $rowHeaderWidth$$3$$, $dir$$17_isDatabodyHorizontalScrollbarRequired$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$2$$, $scrollerWidth$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$2$$, $height$$140_scrollerHeight$$1$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$1$$ - $databodyWidth$$3_width$$166$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = $databodyContentHeight$$1$$ - $databodyHeight$$3$$, 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && 0 < $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$ && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$) + $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeaderPixel$ >= $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() && ($borderStyle$$inline_8478_colHeader$$4_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? 
  "borderLeftStyle" : "borderRightStyle", $emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$.firstChild.lastChild, $emptyText$$4_lastHeader$$inline_8479_rowHeader$$3$$.style[$borderStyle$$inline_8478_colHeader$$4_empty$$1$$] = "none"), (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeGrid$self$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_buildCorners$$ = function $$JSCompiler_StaticMethods_buildCorners$$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $colHeaderHeight$$4$$, $rowHeaderWidth$$4$$, $bottomCorner$$, $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$18$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$2$$, $scrollerHeight$$2$$;
  (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $scrollerWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $scrollerHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $colHeaderHeight$$4$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$);
  $colHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$4$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$);
  $rowHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$18$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  0 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && 0 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("topcorner")), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$4$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $colHeaderHeight$$4$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ && $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$);
  0 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), 
  $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("rowheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$4$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  0, $dir$$18$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$4$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$2$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$));
  0 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), 
  $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("colheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$4$$ + $colHeaderWidth$$, $dir$$18$$), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, "top"), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$2$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$4$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ == 
  D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ ? $bottomCorner$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ : ($bottomCorner$$ = window.document.createElement("div"), $bottomCorner$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), 
  $bottomCorner$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("bottomcorner")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner$$, $rowHeaderHeight$$ + $colHeaderHeight$$4$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner$$, $rowHeaderWidth$$4$$ + $colHeaderWidth$$, $dir$$18$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner$$, $scrollerWidth$$2$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner$$, 
  $scrollerHeight$$2$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner$$));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ && $bottomCorner$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setInitialScrollPosition$$ = function $$JSCompiler_StaticMethods_setInitialScrollPosition$$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_8484_columnScrollPosition$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$;
  $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, "scrollPosition");
  $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$ = $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$ == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_NULL$$ : $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$.key != D.$JSCompiler_alias_VOID$$ ? "key" : $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$.index != D.$JSCompiler_alias_VOID$$ ? "index" : D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ != D.$JSCompiler_alias_VOID$$ && $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_8484_columnScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_8484_columnScrollPosition$$, "scrollPosition", "key", "column");
    $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_8484_columnScrollPosition$$ = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_8484_columnScrollPosition$$, 
    "scrollPosition", "index", "column");
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
    var $rowScrollPosition$$inline_8488$$;
    $rowScrollPosition$$inline_8488$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$, "scrollPosition", "key", "row");
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$ = $rowScrollPosition$$inline_8488$$ != D.$JSCompiler_alias_NULL$$ ? $rowScrollPosition$$inline_8488$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$, "scrollPosition", "index", "row");
    if("key" === $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$) {
      var $keys$$inline_8491$$ = {row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_8484_columnScrollPosition$$}, $callback$$inline_8492$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$;
      $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_dataSource$.indexes($keys$$inline_8491$$);
      "function" === typeof $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$.then ? $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$.then(function($indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$) {
        $callback$$inline_8492$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$, $keys$$inline_8491$$)
      }, function() {
        $callback$$inline_8492$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, {row:-1, column:-1}, $keys$$inline_8491$$)
      }) : $callback$$inline_8492$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $indexes$$inline_8494_scrollMode_scrollPosition$$inline_8482$$, $keys$$inline_8491$$)
    }else {
      $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$({row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_8487_columnScrollPosition$$inline_8485_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_8484_columnScrollPosition$$})
    }
  }
};
D.$DvtDataGrid$$.prototype.$_intialScrollPositionCallback$ = function $$DvtDataGrid$$$$$_intialScrollPositionCallback$$($indexes$$7_rowScrollPosition$$1$$) {
  var $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$ = 0;
  $columnScrollPosition$$1_initialScrollLeft$$ = -1 === $indexes$$7_rowScrollPosition$$1$$.column ? 0 : $indexes$$7_rowScrollPosition$$1$$.column;
  $indexes$$7_rowScrollPosition$$1$$ = -1 === $indexes$$7_rowScrollPosition$$1$$.row ? 0 : $indexes$$7_rowScrollPosition$$1$$.row;
  $columnScrollPosition$$1_initialScrollLeft$$ *= this.$m_avgColWidth$;
  $initialScrollTop$$ = $indexes$$7_rowScrollPosition$$1$$ * this.$m_avgRowHeight$;
  (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)(this.$m_utils$, this.$m_scroller$, $columnScrollPosition$$1_initialScrollLeft$$);
  this.$m_scroller$.scrollTop = $initialScrollTop$$
};
D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$, $expectedWidth$$) {
  var $databody$$3$$;
  $databody$$3$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$.$m_databody$;
  return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$3$$.firstChild) > ($expectedWidth$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$3$$) : $expectedWidth$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$, $expectedHeight$$) {
  var $databody$$4$$;
  $databody$$4$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$.$m_databody$;
  return(0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$4$$.firstChild) > ($expectedHeight$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$4$$) : $expectedHeight$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($context$$704$$) {
  $context$$704$$ != D.$JSCompiler_alias_NULL$$ && ($context$$704$$.context != D.$JSCompiler_alias_NULL$$ && (this.$m_accessibleContext$ = $context$$704$$.context), $context$$704$$.state != D.$JSCompiler_alias_NULL$$ && (this.$m_stateInfo$.innerHTML = $context$$704$$.state))
};
D.$DvtDataGrid$$.prototype.SetAccessibleContext = D.$DvtDataGrid$$.prototype.$SetAccessibleContext$;
D.$JSCompiler_StaticMethods__updateStateInfo$$ = function $$JSCompiler_StaticMethods__updateStateInfo$$$($JSCompiler_StaticMethods__updateStateInfo$self$$, $key$$116_text$$108$$, $args$$7$$) {
  $key$$116_text$$108$$ = $JSCompiler_StaticMethods__updateStateInfo$self$$.$m_resources$.getTranslatedText($key$$116_text$$108$$, $args$$7$$);
  $key$$116_text$$108$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__updateStateInfo$self$$.$m_stateInfo$.innerHTML = $key$$116_text$$108$$)
};
D.$JSCompiler_StaticMethods__updateContextInfo$$ = function $$JSCompiler_StaticMethods__updateContextInfo$$$($JSCompiler_StaticMethods__updateContextInfo$self$$, $column$$4_context$$705$$, $skip$$) {
  var $row$$10_text$$109$$, $info$$17$$;
  $row$$10_text$$109$$ = $column$$4_context$$705$$.row;
  $column$$4_context$$705$$ = $column$$4_context$$705$$.column;
  $info$$17$$ = "";
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ == D.$JSCompiler_alias_NULL$$ && (!(0,window.isNaN)($row$$10_text$$109$$) && "row" != $skip$$) && ($row$$10_text$$109$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleRowContext", {index:$row$$10_text$$109$$ + 1}), $row$$10_text$$109$$ != D.$JSCompiler_alias_NULL$$ && ($info$$17$$ = $row$$10_text$$109$$));
  !(0,window.isNaN)($column$$4_context$$705$$) && "column" != $skip$$ && ($row$$10_text$$109$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleColumnContext", {index:$column$$4_context$$705$$ + 1}), $row$$10_text$$109$$ != D.$JSCompiler_alias_NULL$$ && ($info$$17$$ = 0 === $info$$17$$.length ? $row$$10_text$$109$$ : $info$$17$$ + " " + $row$$10_text$$109$$));
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ != D.$JSCompiler_alias_NULL$$ && ($info$$17$$ = $info$$17$$ + ", " + $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$, $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ = D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_contextInfo$.innerHTML = $info$$17$$
};
D.$JSCompiler_StaticMethods__isCountUnknown$$ = function $$JSCompiler_StaticMethods__isCountUnknown$$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$46$$) {
  var $colCount_datasource_rowCount$$12$$, $colPrecision_rowPrecision$$;
  $colCount_datasource_rowCount$$12$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return"row" === $axis$$46$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$12$$.getCountPrecision("row"), $colCount_datasource_rowCount$$12$$ = $colCount_datasource_rowCount$$12$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$12$$ ? D.$JSCompiler_alias_TRUE$$ : 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$) : "column" === $axis$$46$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$12$$.getCountPrecision("column"), $colCount_datasource_rowCount$$12$$ = $colCount_datasource_rowCount$$12$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ = 
  "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$12$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$ = function $$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$47$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$47$$) || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$)
};
D.$JSCompiler_StaticMethods_buildHeaders$$ = function $$JSCompiler_StaticMethods_buildHeaders$$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$48$$, $styleClass$$6$$) {
  var $root$$32$$ = window.document.createElement("div");
  $root$$32$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$48$$ + "Header");
  $root$$32$$.className = $styleClass$$6$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.getMappedStyle("header");
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$48$$, 0, $root$$32$$);
  return $root$$32$$
};
D.$DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$49_headerRange$$1$$, $start$$41$$, $header$$16$$, $fetchSize$$2$$, $callbacks$$3_successCallback$$26$$) {
  var $axisStart_count$$29$$, $axisEnd$$;
  this.$m_fetching$[$axis$$49_headerRange$$1$$] || (this.$m_fetching$[$axis$$49_headerRange$$1$$] = {start:$start$$41$$}, $fetchSize$$2$$ == D.$JSCompiler_alias_VOID$$ && ($fetchSize$$2$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, $axis$$49_headerRange$$1$$), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, $axis$$49_headerRange$$1$$) || ($axisStart_count$$29$$ = "row" == $axis$$49_headerRange$$1$$ ? this.$m_startRow$ : this.$m_startCol$, $axisEnd$$ = "row" == $axis$$49_headerRange$$1$$ ? 
  this.$m_endRow$ : this.$m_endCol$, $start$$41$$ < $axisStart_count$$29$$ ? $fetchSize$$2$$ = window.Math.min($fetchSize$$2$$, $axisStart_count$$29$$) : ($axisStart_count$$29$$ = this.$m_dataSource$.getCount($axis$$49_headerRange$$1$$), 0 <= $axisStart_count$$29$$ && ($fetchSize$$2$$ = window.Math.min($fetchSize$$2$$, window.Math.max(0, $axisStart_count$$29$$ - $axisEnd$$)))))), $axis$$49_headerRange$$1$$ = {axis:$axis$$49_headerRange$$1$$, start:$start$$41$$, count:$fetchSize$$2$$, header:$header$$16$$}, 
  $callbacks$$3_successCallback$$26$$ = $callbacks$$3_successCallback$$26$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$3_successCallback$$26$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$3_successCallback$$26$$.success : this.$handleHeadersFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchHeaders($axis$$49_headerRange$$1$$, {success:$callbacks$$3_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($prev$$inline_8555_results$$5_rowHeader$$inline_11029$$, $adjustment$$inline_11030_headerRange$$3_start$$42$$, $rowInsert$$) {
  var $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$, $avgWidth$$inline_8525_root$$33$$, $count$$30_totalCount$$inline_8535$$;
  if($adjustment$$inline_11030_headerRange$$3_start$$42$$.start == this.$m_fetching$[$adjustment$$inline_11030_headerRange$$3_start$$42$$.axis].start) {
    $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$ = $adjustment$$inline_11030_headerRange$$3_start$$42$$.axis;
    this.$m_fetching$[$axis$$51_scroller$$inline_8506_scroller$$inline_8538$$] = D.$JSCompiler_alias_FALSE$$;
    $avgWidth$$inline_8525_root$$33$$ = $adjustment$$inline_11030_headerRange$$3_start$$42$$.header;
    $adjustment$$inline_11030_headerRange$$3_start$$42$$ = $adjustment$$inline_11030_headerRange$$3_start$$42$$.start;
    $count$$30_totalCount$$inline_8535$$ = this.$m_dataSource$.getCount($axis$$51_scroller$$inline_8506_scroller$$inline_8538$$);
    if("column" === $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$) {
      a: {
        var $renderer$$inline_8507_rowHeaderContent$$inline_8558$$, $referenceRow$$inline_8559_totalColWidth$$inline_8508$$, $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$, $headerCount$$inline_8510_headerCount$$inline_8537$$, $firstHeader$$inline_8511_resizer$$inline_8539$$, $headerClass$$inline_8512_renderer$$inline_8540$$, $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$, $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$, 
        $dir$$inline_8515_isAppend$$inline_8541$$, $i$$inline_8516_top$$inline_8542$$, $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$, $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$, $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$, $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$, 
        $col$$inline_8523_fragment$$inline_8544$$, $i$$inline_8546_sortableAttribute$$inline_8528$$, $resizableAttribute$$inline_8529_row$$inline_8550$$;
        $headerCount$$inline_8510_headerCount$$inline_8537$$ = $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.getCount();
        if($avgWidth$$inline_8525_root$$33$$.hasChildNodes()) {
          if(0 == $headerCount$$inline_8510_headerCount$$inline_8537$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
          $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$ = $avgWidth$$inline_8525_root$$33$$.firstChild;
          0 == this.$m_endColHeader$ && "" == $avgWidth$$inline_8525_root$$33$$.className && ($avgWidth$$inline_8525_root$$33$$.className = this.getMappedStyle("colheader") + " " + this.getMappedStyle("header"), $avgWidth$$inline_8525_root$$33$$.style.height = "", $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.style.height = "")
        }else {
          $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$ = window.document.createElement("div"), $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.className = this.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$inline_8510_headerCount$$inline_8537$$ && ($avgWidth$$inline_8525_root$$33$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_8525_root$$33$$, 
          0), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($axis$$51_scroller$$inline_8506_scroller$$inline_8538$$, 0), this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
        }
        $renderer$$inline_8507_rowHeaderContent$$inline_8558$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "column");
        $referenceRow$$inline_8559_totalColWidth$$inline_8508$$ = 0;
        $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$ = $adjustment$$inline_11030_headerRange$$3_start$$42$$ < this.$m_startColHeader$ ? this.$m_startColHeaderPixel$ : this.$m_endColHeaderPixel$;
        $firstHeader$$inline_8511_resizer$$inline_8539$$ = $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.firstChild;
        $headerClass$$inline_8512_renderer$$inline_8540$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");
        $dir$$inline_8515_isAppend$$inline_8541$$ = this.$m_resources$.isRTLMode() ? "right" : "left";
        $i$$inline_8546_sortableAttribute$$inline_8528$$ = this.$m_resources$.getMappedAttribute("sortable");
        $resizableAttribute$$inline_8529_row$$inline_8550$$ = this.$m_resources$.getMappedAttribute("resizable");
        for($i$$inline_8516_top$$inline_8542$$ = 0;$i$$inline_8516_top$$inline_8542$$ < $headerCount$$inline_8510_headerCount$$inline_8537$$;$i$$inline_8516_top$$inline_8542$$ += 1) {
          $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ = $adjustment$$inline_11030_headerRange$$3_start$$42$$ < this.$m_startColHeader$ ? $adjustment$$inline_11030_headerRange$$3_start$$42$$ + $headerCount$$inline_8510_headerCount$$inline_8537$$ - 1 - $i$$inline_8516_top$$inline_8542$$ : $adjustment$$inline_11030_headerRange$$3_start$$42$$ + $i$$inline_8516_top$$inline_8542$$;
          $col$$inline_8523_fragment$$inline_8544$$ = window.document.createElement("div");
          $col$$inline_8523_fragment$$inline_8544$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "c" + $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$);
          $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$ = window.document.createElement("div");
          $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.className = this.getMappedStyle("headercellcontent");
          $col$$inline_8523_fragment$$inline_8544$$.appendChild($content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$);
          $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.appendChild($col$$inline_8523_fragment$$inline_8544$$);
          $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.getData($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$);
          $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$ = $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.getMetadata($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$);
          $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "column", $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$, $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$, $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$, 
          $col$$inline_8523_fragment$$inline_8544$$);
          $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$ = this.$m_options$.$getInlineStyle$("column", $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$);
          $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$ = this.$m_options$.$getStyleClass$("column", $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$);
          $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$ != D.$JSCompiler_alias_NULL$$ && ($col$$inline_8523_fragment$$inline_8544$$.style.cssText = $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$);
          $col$$inline_8523_fragment$$inline_8544$$.className = $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$ != D.$JSCompiler_alias_NULL$$ ? $headerClass$$inline_8512_renderer$$inline_8540$$ + " " + $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$ : $headerClass$$inline_8512_renderer$$inline_8540$$;
          this.$m_colHeaderHeight$ == D.$JSCompiler_alias_NULL$$ && "" != $col$$inline_8523_fragment$$inline_8544$$.style.height && (this.$m_colHeaderHeight$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($col$$inline_8523_fragment$$inline_8544$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_8525_root$$33$$, this.$m_colHeaderHeight$));
          "" != $col$$inline_8523_fragment$$inline_8544$$.style.height && ($col$$inline_8523_fragment$$inline_8544$$.style.height = "100%");
          $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)(this, $col$$inline_8523_fragment$$inline_8544$$, $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$.key);
          (0,D.$JSCompiler_StaticMethods__isLastColumn$$)(this, $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)(this) + $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$ + $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$ >= this.getWidth() && ("left" === $dir$$inline_8515_isAppend$$inline_8541$$ ? $col$$inline_8523_fragment$$inline_8544$$.style.borderRightStyle = 
          "none" : $col$$inline_8523_fragment$$inline_8544$$.style.borderLeftStyle = "none");
          $adjustment$$inline_11030_headerRange$$3_start$$42$$ < this.$m_startColHeader$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_8523_fragment$$inline_8544$$, $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$ - $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$, $dir$$inline_8515_isAppend$$inline_8541$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_8523_fragment$$inline_8544$$, $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$, 
          $dir$$inline_8515_isAppend$$inline_8541$$);
          (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "column", $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$) && $col$$inline_8523_fragment$$inline_8544$$.setAttribute($resizableAttribute$$inline_8529_row$$inline_8550$$, "true");
          $renderer$$inline_8507_rowHeaderContent$$inline_8558$$ != D.$JSCompiler_alias_NULL$$ ? ($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = $renderer$$inline_8507_rowHeaderContent$$inline_8558$$.call(this, $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$), $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ != 
          D.$JSCompiler_alias_NULL$$ && ($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.appendChild($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$) : 
          $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.parentNode == D.$JSCompiler_alias_NULL$$ && $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.toString && ($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ = window.document.createElement("span"), 
          $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.className = this.getMappedStyle("headercelltext"), $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.appendChild(window.document.createTextNode($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.toString())), $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.appendChild($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$)))) : 
          ($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ = window.document.createElement("span"), $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.className = this.getMappedStyle("headercelltext"), $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.appendChild(window.document.createTextNode($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.toString())), 
          $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.appendChild($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$));
          $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$ = $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$;
          $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ = $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = D.$JSCompiler_alias_VOID$$;
          $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = this.$m_dataSource$.getCapability("sort");
          $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ = (0,D.$JSCompiler_StaticMethods_nullOrDefault$$)(this.$m_options$.$getProperty$("sortable", "column", $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$));
          if(("enable" === $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ || "auto" === $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$) && ("full" === $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ || "column" === $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$)) {
            $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$ = $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ = $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$ = 
            D.$JSCompiler_alias_VOID$$, $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$ = window.document.createElement("div"), $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$.className = this.getMappedStyle("sortcontainer"), $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$ = window.document.createElement("div"), 
            $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = this.getMappedStyle("icon") + " " + this.getMappedStyle("clickableicon"), $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$.key === (this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.key : D.$JSCompiler_alias_NULL$$) ? ($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ = 
            this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.direction : D.$JSCompiler_alias_NULL$$, "ascending" === $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ ? $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.className = this.getMappedStyle("sortascending") + " " + $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ + 
            " " + this.getMappedStyle("default") : "descending" === $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ && ($content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.className = this.getMappedStyle("sortdescending") + " " + $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ + 
            " " + this.getMappedStyle("default"))) : ($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ += " " + this.getMappedStyle("disabled"), $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.className = this.getMappedStyle("sortascending") + " " + $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$), 
            $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$.appendChild($content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$), $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$ = $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$, $col$$inline_8523_fragment$$inline_8544$$.appendChild($headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$), 
            $col$$inline_8523_fragment$$inline_8544$$.setAttribute($i$$inline_8546_sortableAttribute$$inline_8528$$, "true")
          }
          $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$ = $adjustment$$inline_11030_headerRange$$3_start$$42$$ < this.$m_startColHeader$ ? $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$ - $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$ : $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$ + $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$;
          $referenceRow$$inline_8559_totalColWidth$$inline_8508$$ += $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$;
          $adjustment$$inline_11030_headerRange$$3_start$$42$$ < this.$m_startColHeader$ ? ($axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.insertBefore($col$$inline_8523_fragment$$inline_8544$$, $firstHeader$$inline_8511_resizer$$inline_8539$$), $firstHeader$$inline_8511_resizer$$inline_8539$$ = $col$$inline_8523_fragment$$inline_8544$$) : $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.appendChild($col$$inline_8523_fragment$$inline_8544$$)
        }
        $adjustment$$inline_11030_headerRange$$3_start$$42$$ < this.$m_startColHeader$ ? (this.$m_startColHeader$ -= $headerCount$$inline_8510_headerCount$$inline_8537$$, this.$m_startColHeaderPixel$ -= $referenceRow$$inline_8559_totalColWidth$$inline_8508$$) : (this.$m_endColHeader$ += $headerCount$$inline_8510_headerCount$$inline_8537$$, this.$m_endColHeaderPixel$ += $referenceRow$$inline_8559_totalColWidth$$inline_8508$$);
        $avgWidth$$inline_8525_root$$33$$.hasChildNodes() || $avgWidth$$inline_8525_root$$33$$.appendChild($axis$$51_scroller$$inline_8506_scroller$$inline_8538$$);
        if(0 < $headerCount$$inline_8510_headerCount$$inline_8537$$ && ($avgWidth$$inline_8525_root$$33$$ = $referenceRow$$inline_8559_totalColWidth$$inline_8508$$ / $headerCount$$inline_8510_headerCount$$inline_8537$$, 0 == this.$m_avgColHeaderWidth$ || $avgWidth$$inline_8525_root$$33$$ != this.$m_avgColHeaderWidth$)) {
          this.$m_avgColHeaderWidth$ = $avgWidth$$inline_8525_root$$33$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($axis$$51_scroller$$inline_8506_scroller$$inline_8538$$, $count$$30_totalCount$$inline_8535$$ * $avgWidth$$inline_8525_root$$33$$)
        }
        !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endColHeader$ >= $count$$30_totalCount$$inline_8535$$) && (this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
      }
    }else {
      if("row" === $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$) {
        a: {
          var $height$$inline_8552_inlineStyle$$inline_8551$$, $styleClass$$inline_8554$$;
          $headerCount$$inline_8510_headerCount$$inline_8537$$ = $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.getCount();
          if($avgWidth$$inline_8525_root$$33$$.hasChildNodes()) {
            if(0 == $headerCount$$inline_8510_headerCount$$inline_8537$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row")) {
              this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
              break a
            }
            $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$ = $avgWidth$$inline_8525_root$$33$$.firstChild;
            0 == this.$m_endRowHeader$ && "" == $avgWidth$$inline_8525_root$$33$$.className && ($avgWidth$$inline_8525_root$$33$$.className = this.getMappedStyle("rowheader") + " " + this.getMappedStyle("header"), $avgWidth$$inline_8525_root$$33$$.style.width = "", $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.style.width = "");
            $firstHeader$$inline_8511_resizer$$inline_8539$$ = $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.firstChild
          }else {
            $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$ = window.document.createElement("div"), $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.className = this.getMappedStyle("scroller") + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$inline_8510_headerCount$$inline_8537$$ && ($avgWidth$$inline_8525_root$$33$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_8525_root$$33$$, 
            0), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($axis$$51_scroller$$inline_8506_scroller$$inline_8538$$, 0), this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$), $firstHeader$$inline_8511_resizer$$inline_8539$$ = window.document.createElement("div"), $firstHeader$$inline_8511_resizer$$inline_8539$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($firstHeader$$inline_8511_resizer$$inline_8539$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_8511_resizer$$inline_8539$$, 
            0), $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.appendChild($firstHeader$$inline_8511_resizer$$inline_8539$$)
          }
          $headerClass$$inline_8512_renderer$$inline_8540$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "row");
          ($dir$$inline_8515_isAppend$$inline_8541$$ = $adjustment$$inline_11030_headerRange$$3_start$$42$$ >= this.$m_endRowHeader$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $i$$inline_8516_top$$inline_8542$$ = this.$m_endRowHeaderPixel$ : $rowInsert$$ ? ($renderer$$inline_8507_rowHeaderContent$$inline_8558$$ = $avgWidth$$inline_8525_root$$33$$.firstChild, $referenceRow$$inline_8559_totalColWidth$$inline_8508$$ = $renderer$$inline_8507_rowHeaderContent$$inline_8558$$.childNodes[$adjustment$$inline_11030_headerRange$$3_start$$42$$ - 
          this.$m_startRowHeader$ + 1], $i$$inline_8516_top$$inline_8542$$ = (0,window.parseInt)($referenceRow$$inline_8559_totalColWidth$$inline_8508$$.style.top)) : $i$$inline_8516_top$$inline_8542$$ = this.$m_startRowHeaderPixel$;
          -1 == $count$$30_totalCount$$inline_8535$$ && ($count$$30_totalCount$$inline_8535$$ = this.$m_endRowHeader$ + $headerCount$$inline_8510_headerCount$$inline_8537$$);
          $headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$ = this.$m_resources$.getMappedAttribute("resizable");
          $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$ = 0;
          $col$$inline_8523_fragment$$inline_8544$$ = window.document.createDocumentFragment();
          for($i$$inline_8546_sortableAttribute$$inline_8528$$ = 0;$i$$inline_8546_sortableAttribute$$inline_8528$$ < $headerCount$$inline_8510_headerCount$$inline_8537$$;$i$$inline_8546_sortableAttribute$$inline_8528$$ += 1) {
            $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = $dir$$inline_8515_isAppend$$inline_8541$$ ? $adjustment$$inline_11030_headerRange$$3_start$$42$$ + $i$$inline_8546_sortableAttribute$$inline_8528$$ : $adjustment$$inline_11030_headerRange$$3_start$$42$$ + ($headerCount$$inline_8510_headerCount$$inline_8537$$ - 1 - $i$$inline_8546_sortableAttribute$$inline_8528$$);
            $resizableAttribute$$inline_8529_row$$inline_8550$$ = window.document.createElement("div");
            $resizableAttribute$$inline_8529_row$$inline_8550$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "r" + $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$);
            $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$ = window.document.createElement("div");
            $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$ = window.document.createElement("div");
            $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$.className = this.getMappedStyle("headercellcontent");
            $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.appendChild($headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$);
            $resizableAttribute$$inline_8529_row$$inline_8550$$.appendChild($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$);
            $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$ = $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.getData($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$);
            $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$ = $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.getMetadata($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$);
            $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "row", $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$, $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$, $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$, 
            $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$);
            $height$$inline_8552_inlineStyle$$inline_8551$$ = this.$m_options$.$getInlineStyle$("row", $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$);
            $styleClass$$inline_8554$$ = this.$m_options$.$getStyleClass$("row", $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$);
            $height$$inline_8552_inlineStyle$$inline_8551$$ != D.$JSCompiler_alias_NULL$$ && ($resizableAttribute$$inline_8529_row$$inline_8550$$.style.cssText = $height$$inline_8552_inlineStyle$$inline_8551$$, $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.style.cssText = $height$$inline_8552_inlineStyle$$inline_8551$$);
            $resizableAttribute$$inline_8529_row$$inline_8550$$.className = this.getMappedStyle("row");
            $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.className = this.getMappedStyle("headercell") + " " + this.getMappedStyle("rowheadercell");
            $styleClass$$inline_8554$$ != D.$JSCompiler_alias_NULL$$ && ($resizableAttribute$$inline_8529_row$$inline_8550$$.className += " " + $styleClass$$inline_8554$$, $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.className += " " + $styleClass$$inline_8554$$);
            this.$m_rowHeaderWidth$ == D.$JSCompiler_alias_NULL$$ && "" != $resizableAttribute$$inline_8529_row$$inline_8550$$.style.width && (this.$m_rowHeaderWidth$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($resizableAttribute$$inline_8529_row$$inline_8550$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_8525_root$$33$$, this.$m_rowHeaderWidth$));
            "" != $resizableAttribute$$inline_8529_row$$inline_8550$$.style.width && ($resizableAttribute$$inline_8529_row$$inline_8550$$.style.width = "100%");
            if($styleClass$$inline_8554$$ != D.$JSCompiler_alias_NULL$$ || "" != $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.style.width || "" != $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.style.height) {
              $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.style.width = "100%", $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.style.height = "100%"
            }
            $height$$inline_8552_inlineStyle$$inline_8551$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)(this, $resizableAttribute$$inline_8529_row$$inline_8550$$, $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$.key);
            $dir$$inline_8515_isAppend$$inline_8541$$ || $rowInsert$$ ? ($resizableAttribute$$inline_8529_row$$inline_8550$$.style.top = $i$$inline_8516_top$$inline_8542$$ + "px", $i$$inline_8516_top$$inline_8542$$ += $height$$inline_8552_inlineStyle$$inline_8551$$) : ($i$$inline_8516_top$$inline_8542$$ -= $height$$inline_8552_inlineStyle$$inline_8551$$, $resizableAttribute$$inline_8529_row$$inline_8550$$.style.top = $i$$inline_8516_top$$inline_8542$$ + "px");
            (0,D.$JSCompiler_StaticMethods__isLastRow$$)(this, $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)(this, $resizableAttribute$$inline_8529_row$$inline_8550$$, $i$$inline_8516_top$$inline_8542$$) >= this.getHeight() && ($col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.style.borderBottomStyle = 
            "none");
            (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "row", $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$) && $col$$inline_8553_direction$$inline_11026_index$$inline_8517_sortable$$inline_11020_textWrapper$$inline_8513$$.setAttribute($headerMetadata$$inline_8519_inlineStyle$$inline_8521_resizableAttribute$$inline_8556_width$$inline_8524$$, "true");
            $headerClass$$inline_8512_renderer$$inline_8540$$ != D.$JSCompiler_alias_NULL$$ ? ($content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$ = $headerClass$$inline_8512_renderer$$inline_8540$$.call(this, $headerContext$$inline_8549_headerMetadata$$inline_8548_sortContainer$$inline_11027_styleClass$$inline_8522$$), $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$ != 
            D.$JSCompiler_alias_NULL$$ && ($content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$.appendChild($content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$) : $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.parentNode == 
            D.$JSCompiler_alias_NULL$$ && $content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.toString && ($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = window.document.createElement("span"), $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.className = 
            this.getMappedStyle("headercelltext"), $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.appendChild(window.document.createTextNode($content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.toString())), $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$.appendChild($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$)))) : 
            ($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$ = window.document.createElement("span"), $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.className = this.getMappedStyle("headercelltext"), $capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$.appendChild(window.document.createTextNode($content$$inline_8557_headerContent$$inline_8514_headerContext$$inline_11018_headerData$$inline_8547_sortIcon$$inline_11024$$.toString())), 
            $headerContent$$inline_8561_headerContext$$inline_11023_headerContext$$inline_8520_sortIcon$$inline_8526$$.appendChild($capability$$inline_11019_content$$inline_8527_headerData$$inline_8518_iconClassString$$inline_11025_index$$inline_8545_textWrapper$$inline_8560$$));
            $dir$$inline_8515_isAppend$$inline_8541$$ ? $col$$inline_8523_fragment$$inline_8544$$.appendChild($resizableAttribute$$inline_8529_row$$inline_8550$$) : $col$$inline_8523_fragment$$inline_8544$$.insertBefore($resizableAttribute$$inline_8529_row$$inline_8550$$, $col$$inline_8523_fragment$$inline_8544$$.firstChild);
            $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$ += $height$$inline_8552_inlineStyle$$inline_8551$$
          }
          if($dir$$inline_8515_isAppend$$inline_8541$$) {
            $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.appendChild($col$$inline_8523_fragment$$inline_8544$$), 0 != this.$m_endRowHeader$ && 0 != $headerCount$$inline_8510_headerCount$$inline_8537$$ && ($prev$$inline_8555_results$$5_rowHeader$$inline_11029$$ = $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.childNodes[this.$m_endRowHeader$], $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$ != D.$JSCompiler_alias_NULL$$ && ($prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.firstChild.style.borderBottomStyle = 
            "")), this.$m_endRowHeader$ += $headerCount$$inline_8510_headerCount$$inline_8537$$, this.$m_endRowHeaderPixel$ += $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$
          }else {
            if($rowInsert$$) {
              $renderer$$inline_8507_rowHeaderContent$$inline_8558$$.insertBefore($col$$inline_8523_fragment$$inline_8544$$, $referenceRow$$inline_8559_totalColWidth$$inline_8508$$);
              $adjustment$$inline_11030_headerRange$$3_start$$42$$ <= this.$m_startRow$ && (this.$m_startRowHeader$ = $adjustment$$inline_11030_headerRange$$3_start$$42$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_8511_resizer$$inline_8539$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($firstHeader$$inline_8511_resizer$$inline_8539$$) - 
              $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$)));
              this.$m_endRowHeader$ = this.$m_endRow$ + $headerCount$$inline_8510_headerCount$$inline_8537$$;
              this.$m_endRowHeaderPixel$ = window.Math.max(0, this.$m_endRowHeaderPixel$ + $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$);
              $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$ = $referenceRow$$inline_8559_totalColWidth$$inline_8508$$;
              for($adjustment$$inline_11030_headerRange$$3_start$$42$$ = $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$;$prev$$inline_8555_results$$5_rowHeader$$inline_11029$$;) {
                $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.style.top = (0,window.parseInt)($prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.style.top) + $adjustment$$inline_11030_headerRange$$3_start$$42$$ + "px", $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$ = $prev$$inline_8555_results$$5_rowHeader$$inline_11029$$.nextSibling
              }
            }else {
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_8511_resizer$$inline_8539$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($firstHeader$$inline_8511_resizer$$inline_8539$$) - $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$)), $axis$$51_scroller$$inline_8506_scroller$$inline_8538$$.insertBefore($col$$inline_8523_fragment$$inline_8544$$, $firstHeader$$inline_8511_resizer$$inline_8539$$.nextSibling), this.$m_startRowHeader$ -= $headerCount$$inline_8510_headerCount$$inline_8537$$, 
              this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $currentLeft$$inline_8509_totalRowHeight$$inline_8543$$)
            }
          }
          $rowInsert$$ || $avgWidth$$inline_8525_root$$33$$.appendChild($axis$$51_scroller$$inline_8506_scroller$$inline_8538$$);
          !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endRowHeader$ >= $count$$30_totalCount$$inline_8535$$) && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
        }
      }
    }
    (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) ? ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), !this.$m_initialized$ && !$rowInsert$$ && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this))) : (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && (this.$m_initialized$ || (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this));
    this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this)
  }
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$5$$, $headerRange$$4$$) {
  this.$m_fetching$[$headerRange$$4$$.axis] = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_createHeaderContext$$ = function $$JSCompiler_StaticMethods_createHeaderContext$$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$53$$, $index$$159_key$$117$$, $data$$97$$, $metadata$$, $elem$$49$$) {
  var $headerContext$$1$$ = {};
  $headerContext$$1$$.axis = $axis$$53$$;
  $headerContext$$1$$.index = $index$$159_key$$117$$;
  $headerContext$$1$$.data = $data$$97$$;
  $headerContext$$1$$.datagrid = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $elem$$49$$ != D.$JSCompiler_alias_NULL$$ && ($headerContext$$1$$.parentElement = $elem$$49$$.firstChild);
  $index$$159_key$$117$$ = $metadata$$.key;
  $index$$159_key$$117$$ != D.$JSCompiler_alias_NULL$$ && $elem$$49$$ != D.$JSCompiler_alias_NULL$$ && ("row" === $axis$$53$$ ? $elem$$49$$.parentNode.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$m_resources$.getMappedAttribute("key"), $index$$159_key$$117$$) : $elem$$49$$.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$m_resources$.getMappedAttribute("key"), $index$$159_key$$117$$));
  for(var $prop$$19$$ in $metadata$$) {
    $metadata$$.hasOwnProperty($prop$$19$$) && ($headerContext$$1$$[$prop$$19$$] = $metadata$$[$prop$$19$$])
  }
  $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$1$$);
  return $headerContext$$1$$
};
D.$DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange$$1_databody$$5$$, $scroller$$8$$, $rowRange$$1_rowStart$$1$$, $colStart$$, $rowCount$$13$$, $colCount$$1$$, $callbacks$$4_successCallback$$27$$) {
  var $count$$31$$;
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange$$1_rowStart$$1$$, column:$colStart$$}, $rowCount$$13$$ == D.$JSCompiler_alias_NULL$$ && ($rowCount$$13$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "row"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || ($rowRange$$1_rowStart$$1$$ < this.$m_startRow$ ? $rowCount$$13$$ = window.Math.min($rowCount$$13$$, this.$m_startRow$) : ($count$$31$$ = this.$m_dataSource$.getCount("row"), 0 <= $count$$31$$ && 
  ($rowCount$$13$$ = window.Math.min($rowCount$$13$$, window.Math.max(0, $count$$31$$ - this.$m_endRow$)))))), $colCount$$1$$ == D.$JSCompiler_alias_NULL$$ && ($colCount$$1$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "column"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || ($colStart$$ < this.$m_startCol$ ? $colCount$$1$$ = window.Math.min($colCount$$1$$, this.$m_startCol$) : ($count$$31$$ = this.$m_dataSource$.getCount("column"), 0 <= $count$$31$$ && ($colCount$$1$$ = 
  window.Math.min($colCount$$1$$, window.Math.max(0, $count$$31$$ - this.$m_endCol$)))))), $rowRange$$1_rowStart$$1$$ = {axis:"row", start:$rowRange$$1_rowStart$$1$$, count:$rowCount$$13$$}, $columnRange$$1_databody$$5$$ = {axis:"column", start:$colStart$$, count:$colCount$$1$$, databody:$columnRange$$1_databody$$5$$, scroller:$scroller$$8$$}, $callbacks$$4_successCallback$$27$$ = $callbacks$$4_successCallback$$27$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$4_successCallback$$27$$.success != D.$JSCompiler_alias_NULL$$ ? 
  $callbacks$$4_successCallback$$27$$.success : this.$handleCellsFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$rowRange$$1_rowStart$$1$$, $columnRange$$1_databody$$5$$], {success:$callbacks$$4_successCallback$$27$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$isDraggable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$, $cellRange$$4_databody$$6$$, $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$, $i$$840_obj$$366_row$$inline_8611_rows$$4$$) {
  var $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$, $scrollerContentHeight$$inline_8635_totalColumnCount$$, $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$, $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$, $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$, $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$, 
  $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$, $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_8580$$, $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$, $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$, $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$, $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$, 
  $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$, $avgWidth$$1_renderer$$inline_8623$$;
  $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerContentHeight$$inline_8635_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if($JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ === D.$JSCompiler_alias_VOID$$) {
    $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ = D.$JSCompiler_alias_FALSE$$;
    $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ = $cellRange$$4_databody$$6$$[0].start;
    $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ = $cellRange$$4_databody$$6$$[1].start;
    $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ = this.$m_fetching$.cells;
    $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ = $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$.row;
    $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ = $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$.column;
    if(!($columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ == $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ && $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ == $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$)) {
      return
    }
    if($JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      var $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$;
      (0,window.isNaN)(this.$m_avgRowHeight$) || (0,window.isNaN)(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ = D.$JSCompiler_alias_TRUE$$ : ($columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ = $cellRange$$4_databody$$6$$[0].start, $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ = 
      $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$.getCount("row"), $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ = $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ + $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$, $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$ = 
      $cellRange$$4_databody$$6$$[1].start, $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ = $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$.getCount("column"), $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ *= this.$m_avgRowHeight$, $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ *= this.$m_avgRowHeight$, 
      $columnRangeNeedsUpdate_columnStartPixel$$inline_8580$$ = this.$m_avgColWidth$ * $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$, $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$ + $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$), $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$ = this.$m_currentScrollTop$, 
      $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$ = this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ = this.$m_currentScrollLeft$, $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ = this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), 
      !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && (this.$m_dataSource$.getCount("row") == $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ && $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ < $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$) && ($columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ = 
      $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && (this.$m_dataSource$.getCount("column") == $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ && $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$ < $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$) && ($columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$ = 
      $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$), $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ = $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$ >= $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ && $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$ <= $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ && 
      $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ >= $columnRangeNeedsUpdate_columnStartPixel$$inline_8580$$ && $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ <= $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$);
      $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ = !$JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$
    }
    if($JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$) {
      this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
      this.$m_captureScrolling$ || (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ = $cellRange$$4_databody$$6$$[0];
  $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ = $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$.start;
  $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ = $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$.getCount("row");
  $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ = 0 < $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ && ($JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ >= this.$m_endRow$ || $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ + $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ <= 
  this.$m_startRow$);
  if(0 == $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && 0 < $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$.count || $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, 
  "row") && this.$m_endRow$ + $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ >= $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ || $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ < $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$.count) {
    this.$m_stopRowFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$ = $cellRange$$4_databody$$6$$[1];
  $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ = $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$.start;
  $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ = $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$.getCount("column");
  $columnRangeNeedsUpdate_columnStartPixel$$inline_8580$$ = 0 < $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ && ($columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ == this.$m_endCol$ || $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ + $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ == 
  this.$m_startCol$);
  if(0 == $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && 0 < $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$.count || $columnRangeNeedsUpdate_columnStartPixel$$inline_8580$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endCol$ + 
  $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ >= $scrollerContentHeight$$inline_8635_totalColumnCount$$ || $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ < $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$.count) {
    this.$m_stopColumnFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $cellRange$$4_databody$$6$$ = this.$m_databody$;
  $cellRange$$4_databody$$6$$ == D.$JSCompiler_alias_NULL$$ && ($cellRange$$4_databody$$6$$ = $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$.databody);
  $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$ = this.$m_scroller$;
  $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$ == D.$JSCompiler_alias_NULL$$ && ($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$ = $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$.scroller);
  $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.hasChildNodes() ? $columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$ = $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.firstChild : ($columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$ = window.document.createElement("div"), $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.appendChild($columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$));
  $cellRange$$4_databody$$6$$.hasChildNodes() ? ($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$ = $cellRange$$4_databody$$6$$.firstChild, $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$ = $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.firstChild) : ($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$ = window.document.createElement("div"), $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.className = this.getMappedStyle("scroller") + 
  ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$ = window.document.createElement("div"), $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$, 
  0), $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.appendChild($horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$));
  if($isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ || $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$) {
    if(($isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ = !$JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ && $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ >= this.$m_startRow$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ = 
    this.$m_endRowPixel$ : $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ ? ($columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$ = $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.childNodes[$JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ - this.$m_startRow$ + 1], $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ = (0,window.parseInt)($columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$.style.top)) : 
    $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ = this.$m_startRowPixel$, $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$ = window.document.createDocumentFragment(), $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$, $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ || 
    $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$, $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$, $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$, $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$, $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_8580$$, 
    $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$.totalRowHeight, $avgWidth$$1_renderer$$inline_8623$$ = $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$.avgWidth, $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ = 
    $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$ / $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$, $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$) {
      $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.appendChild($avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$);
      if(0 != this.$m_endRow$ && 0 != $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ && ($columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$ = $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.childNodes[this.$m_endRow$], $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$ != D.$JSCompiler_alias_NULL$$)) {
        $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$ = $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$.childNodes;
        for($i$$840_obj$$366_row$$inline_8611_rows$$4$$ = 0;$i$$840_obj$$366_row$$inline_8611_rows$$4$$ < $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$.length;$i$$840_obj$$366_row$$inline_8611_rows$$4$$ += 1) {
          $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$[$i$$840_obj$$366_row$$inline_8611_rows$$4$$].style.borderBottomStyle = ""
        }
      }
      this.$m_endRow$ += $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$;
      this.$m_endRowPixel$ += $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$;
      $cellRange$$4_databody$$6$$.hasChildNodes() || ($cellRange$$4_databody$$6$$.appendChild($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$), this.$isDraggable$() && ($adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$ = window.document.createElement("div"), window.bottomHotspot = window.document.createElement("div"), $cellRange$$4_databody$$6$$.appendChild($adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), $cellRange$$4_databody$$6$$.appendChild(window.bottomHotspot)))
    }else {
      if($JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$) {
        if($i$$840_obj$$366_row$$inline_8611_rows$$4$$ && $i$$840_obj$$366_row$$inline_8611_rows$$4$$ == D.$JSCompiler_alias_TRUE$$) {
          var $databodyContent$$inline_8590$$ = $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$, $referenceRow$$inline_8592$$ = $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$;
          $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ = $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$;
          var $i$$inline_8597$$, $j$$inline_8598$$, $shift$$inline_8600$$, $beforeCount$$inline_8602$$, $startRowIdx$$inline_8603$$, $transition_duration$$inline_8605$$, $z_index$$inline_8606$$, $transition_timing$$inline_8607$$, $transform$$inline_8608$$;
          $startRowIdx$$inline_8603$$ = $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ - this.$m_startRow$;
          $beforeCount$$inline_8602$$ = $startRowIdx$$inline_8603$$ + $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$.childNodes.length;
          $shift$$inline_8600$$ = $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ * $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$.childNodes.length;
          $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ = [];
          (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_8590$$.childNodes[$startRowIdx$$inline_8603$$], (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 1E3);
          for($j$$inline_8598$$ = 0;$j$$inline_8598$$ < $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$.childNodes.length;$j$$inline_8598$$++) {
            $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$.push($avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$.childNodes[$j$$inline_8598$$].style.top.split("px")[0] - ($startRowIdx$$inline_8603$$ - 1) * $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$)
          }
          for($avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ = 0;$avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ < $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$.childNodes.length;$avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$++) {
            (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$.childNodes[$avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$], 0, 0, "linear", "-" + $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$[$avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$])
          }
          $databodyContent$$inline_8590$$.insertBefore($avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$, $referenceRow$$inline_8592$$);
          (0,window.setTimeout)(function() {
            for($j$$inline_8598$$ = $startRowIdx$$inline_8603$$;$j$$inline_8598$$ <= $beforeCount$$inline_8602$$;$j$$inline_8598$$++) {
              (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($databodyContent$$inline_8590$$.childNodes[$j$$inline_8598$$], "500ms", 0, "ease-out", 0)
            }
            $databodyContent$$inline_8590$$.childNodes[$beforeCount$$inline_8602$$].addEventListener("transitionend", function() {
              $transition_duration$$inline_8605$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
              $z_index$$inline_8606$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index");
              $transition_timing$$inline_8607$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
              $transform$$inline_8608$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
              for($i$$inline_8597$$ = 1;$i$$inline_8597$$ < $databodyContent$$inline_8590$$.childElementCount;$i$$inline_8597$$++) {
                $databodyContent$$inline_8590$$.children[$i$$inline_8597$$].style[(0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform")] && ((0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_8590$$.childNodes[$startRowIdx$$inline_8603$$], $z_index$$inline_8606$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_8590$$.childNodes[$i$$inline_8597$$], $transition_duration$$inline_8605$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_8590$$.childNodes[$i$$inline_8597$$], 
                $transition_timing$$inline_8607$$, "linear", "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_8590$$.childNodes[$i$$inline_8597$$], $transform$$inline_8608$$, 0, "remove"), this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$))
              }
              (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_8592$$, $shift$$inline_8600$$)
            }, D.$JSCompiler_alias_FALSE$$)
          }, 0)
        }else {
          $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.insertBefore($avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$, $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$)
        }
        $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ < this.$m_startRow$ && (this.$m_startRow$ = $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$, 
        window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$) - $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$)));
        this.$m_endRow$ += $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$;
        this.$m_endRowPixel$ += $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$;
        if($i$$840_obj$$366_row$$inline_8611_rows$$4$$) {
          -1 != $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_databody$, $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$) : (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_databody$, this.$m_endRowPixel$);
          for($i$$840_obj$$366_row$$inline_8611_rows$$4$$ = $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$;$i$$840_obj$$366_row$$inline_8611_rows$$4$$;) {
            (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($i$$840_obj$$366_row$$inline_8611_rows$$4$$, "530ms", "0ms", "ease-out", $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), $i$$840_obj$$366_row$$inline_8611_rows$$4$$ = $i$$840_obj$$366_row$$inline_8611_rows$$4$$.nextSibling
          }
        }else {
          (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$)
        }
      }else {
        $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.insertBefore($avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$, $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$.nextSibling), this.$m_startRow$ -= $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$, 
        window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$) - $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$))
      }
    }
  }else {
    if($columnRangeNeedsUpdate_columnStartPixel$$inline_8580$$ && ($i$$840_obj$$366_row$$inline_8611_rows$$4$$ = $databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$.childNodes, $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ == $i$$840_obj$$366_row$$inline_8611_rows$$4$$.length - 1)) {
      $avgWidth$$1_renderer$$inline_8623$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
      $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
      $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$);
      $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$);
      for($avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ = 0;$avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ < $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$;$avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ += 1) {
        $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$ = $i$$840_obj$$366_row$$inline_8611_rows$$4$$[$avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ + 1], $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$, $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$, $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ + 
        $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$, $avgWidth$$1_renderer$$inline_8623$$, D.$JSCompiler_alias_FALSE$$, $columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$, $avgHeight$$inline_8594_i$$inline_8629_jk$$inline_8599_viewportRight$$inline_8585$$ == $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$ - 1, $columnBandingInterval$$inline_8624_prev$$1_referenceRow$$1$$, $horizontalGridlines$$inline_8625_resizer$$1_viewportBottom$$inline_8583$$, 
        $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_8601_verticalGridlines$$inline_8626_viewportLeft$$inline_8584$$)
      }
      $avgWidth$$1_renderer$$inline_8623$$ = $avgWidth$$inline_8628_fragment$$1_row$$inline_8627$$
    }
  }
  $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerContentHeight$$inline_8635_totalColumnCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerContentHeight$$inline_8635_totalColumnCount$$ * $avgWidth$$1_renderer$$inline_8623$$ : this.$m_endColPixel$;
  if($avgWidth$$1_renderer$$inline_8623$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgColWidth$ || this.$m_avgColWidth$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgColWidth$ = $avgWidth$$1_renderer$$inline_8623$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerContentHeight$$inline_8635_totalColumnCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ : this.$m_endRowPixel$;
  if($addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgRowHeight$ || this.$m_avgRowHeight$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$) || $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ != 
    (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$2_scroller$$9_viewportTop$$inline_8582$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_8581_columnRange$$4_columnStart$$inline_8576_inner$$5$$, $adjustment$$inline_8612_cellSet$$2_topHotspot$$1_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $columnRangeNeedsUpdate_columnStartPixel$$inline_8580$$ && ($columnStart$$2_requestRowStart$$inline_8568_rowRange$$4_rowStart$$inline_8574_rowStartPixel$$inline_8578$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$ : this.$m_endCol$ += $columnCount$$14_requestCellRanges$$inline_8567_requestColumnStart$$inline_8569_rowEnd$$inline_8575_rowEndPixel$$inline_8579$$);
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), this.$m_initialized$ ? (this.$m_scroller$ == D.$JSCompiler_alias_NULL$$ ? $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$), $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_scroller$), $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ = this.$m_scroller$.firstChild, $scrollerContentHeight$$inline_8635_totalColumnCount$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$), $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$), 
  $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ && $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ == $addResult_avgHeight_scrollerContent$$inline_8634_scrollerContentWidth$$inline_8636_top$$11$$ || this.$m_endColPixel$ > $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ && $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ == 
  $scrollerContentHeight$$inline_8635_totalColumnCount$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ && (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this)) : ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ || (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)), this.$m_scrollIndexAfterFetch$ != 
  D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, this.$m_scrollIndexAfterFetch$), this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ ? "row" === this.$m_activeHeader$.axis ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, this.$m_scrollIndexAfterFetch$.row) : "column" === this.$m_activeHeader$.axis && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, this.$m_scrollIndexAfterFetch$.column) : this.$m_scrollIndexAfterFetch$ == this.$m_active$ ? 
  this.$highlightActive$() : (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, this.$m_scrollIndexAfterFetch$), this.$m_scrollIndexAfterFetch$ = D.$JSCompiler_alias_NULL$$) : this.$highlightActive$(), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (this.$m_databody$ == D.$JSCompiler_alias_NULL$$ && (this.$m_databody$ = $cellRange$$4_databody$$6$$), (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$, 
  $JSCompiler_inline_result$$224_JSCompiler_temp$$223_responseRowStart$$inline_8565_rowCount$$inline_8586_rowStart$$3$$ + $columnCount$$inline_8587_responseColumnStart$$inline_8566_rowCount$$15$$)), $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ = this.$m_resources$.getTranslatedText("accessibleSummaryExact", {rownum:this.$m_endRow$, colnum:this.$m_endCol$}), this.$m_dataSource$.getExpandedKeys && ($scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$ = 
  this.$m_resources$.getTranslatedText("accessibleSummaryExpanded", {num:this.$m_dataSource$.getExpandedKeys().length}), $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ = $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ + ". " + $scrollerWidth$$inline_8633_summaryExpanded$$inline_8640_totalRowCount$$), $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ = $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$ + 
  ". " + this.$m_resources$.getTranslatedText("accessibleInitialFocus"), this.$m_accSummary$.innerHTML = $JSCompiler_inline_result$$58_rowInsert$$2_scrollerHeight$$inline_8632_summary$$inline_8639$$)
};
D.$JSCompiler_StaticMethods__addRows$$ = function $$JSCompiler_StaticMethods__addRows$$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$3$$, $isAppendOrInsert$$, $top$$12$$, $rowStart$$6$$, $rowCount$$17$$, $columnStart$$4$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$4$$) {
  var $renderer$$5$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $row$$14$$, $avgWidth$$3$$, $totalRowHeight$$2$$, $height$$142_index$$162$$, $i$$843$$, $shimHeaderContext_styleClass$$9$$, $inlineStyle$$16$$;
  $renderer$$5$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$2$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for($i$$843$$ = $totalRowHeight$$2$$ = 0;$i$$843$$ < $rowCount$$17$$;$i$$843$$ += 1) {
    $height$$142_index$$162$$ = $isAppendOrInsert$$ ? $rowStart$$6$$ + $i$$843$$ : $rowStart$$6$$ + ($rowCount$$17$$ - 1 - $i$$843$$), $row$$14$$ = window.document.createElement("div"), $avgWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$4$$, $row$$14$$, $height$$142_index$$162$$, $renderer$$5$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$4$$, $i$$843$$ == $rowCount$$17$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, 
    $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $top$$12$$ + (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$)), 0 == $JSCompiler_StaticMethods__addRows$self$$.$m_endRowHeader$ && ($shimHeaderContext_styleClass$$9$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods__addRows$self$$, "row", $height$$142_index$$162$$, D.$JSCompiler_alias_NULL$$, {key:$JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$14$$)}, 
    D.$JSCompiler_alias_NULL$$), $inlineStyle$$16$$ = $JSCompiler_StaticMethods__addRows$self$$.$m_options$.$getInlineStyle$("row", $shimHeaderContext_styleClass$$9$$), $shimHeaderContext_styleClass$$9$$ = $JSCompiler_StaticMethods__addRows$self$$.$m_options$.$getStyleClass$("row", $shimHeaderContext_styleClass$$9$$), $row$$14$$.style.cssText = $inlineStyle$$16$$, $row$$14$$.className = $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row") + " " + $shimHeaderContext_styleClass$$9$$, (0,D.$JSCompiler_StaticMethods_getRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$, 
    $row$$14$$, $JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$14$$)), $row$$14$$.style.cssText = "", $row$$14$$.className = ""), $row$$14$$.className = $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row"), 1 === window.Math.floor($height$$142_index$$162$$ / $rowBandingInterval$$) % 2 && ($row$$14$$.className += " " + $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("banded")), $height$$142_index$$162$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$, 
    $row$$14$$, $JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$14$$)), $totalRowHeight$$2$$ += $height$$142_index$$162$$, $isAppendOrInsert$$ ? ($row$$14$$.style.top = $top$$12$$ + "px", $top$$12$$ += $height$$142_index$$162$$, $fragment$$3$$.appendChild($row$$14$$)) : ($top$$12$$ -= $height$$142_index$$162$$, $row$$14$$.style.top = $top$$12$$ + "px", $fragment$$3$$.insertBefore($row$$14$$, $fragment$$3$$.firstChild))
  }
  return{avgWidth:$avgWidth$$3$$, totalRowHeight:$totalRowHeight$$2$$, top:$top$$12$$}
};
D.$JSCompiler_StaticMethods_pushRowsDown$$ = function $$JSCompiler_StaticMethods_pushRowsDown$$$($row$$15$$, $adjustment$$2$$) {
  for(;$row$$15$$;) {
    $row$$15$$.style.top = (0,window.parseInt)($row$$15$$.style.top) + $adjustment$$2$$ + "px", $row$$15$$ = $row$$15$$.nextSibling
  }
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_getRowHeaderWidth$$ = function $$JSCompiler_StaticMethods_getRowHeaderWidth$$$($JSCompiler_StaticMethods_getRowHeaderWidth$self$$) {
  if(0 === $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_endRowHeader$) {
    return 0
  }
  if($JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$ != D.$JSCompiler_alias_NULL$$) {
    return $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$
  }
  $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_defaultColumnHeaderCellHeight$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getRowHeaderWidth$self$$);
  return $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_defaultRowHeaderWidth$
};
D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$ = function $$JSCompiler_StaticMethods_getColumnHeaderHeight$$$($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$) {
  if(0 === $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_endColHeader$) {
    return 0
  }
  if($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_colHeaderHeight$ != D.$JSCompiler_alias_NULL$$) {
    return $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_colHeaderHeight$
  }
  $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_defaultColumnHeaderHeight$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setDefaultDimensions$$)($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$);
  return $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_defaultColumnHeaderHeight$
};
D.$JSCompiler_StaticMethods_getRowBottom$$ = function $$JSCompiler_StaticMethods_getRowBottom$$$($JSCompiler_StaticMethods_getRowBottom$self_height$$143$$, $row$$17$$, $bottom$$9_top$$15$$) {
  var $colHeaderHeight$$5$$;
  $colHeaderHeight$$5$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_height$$143$$);
  if($bottom$$9_top$$15$$ != D.$JSCompiler_alias_NULL$$) {
    return $colHeaderHeight$$5$$ + $bottom$$9_top$$15$$
  }
  $bottom$$9_top$$15$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$17$$, "top");
  $JSCompiler_StaticMethods_getRowBottom$self_height$$143$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_height$$143$$, $row$$17$$);
  return!(0,window.isNaN)($bottom$$9_top$$15$$) && !(0,window.isNaN)($JSCompiler_StaticMethods_getRowBottom$self_height$$143$$) ? $colHeaderHeight$$5$$ + $bottom$$9_top$$15$$ + $JSCompiler_StaticMethods_getRowBottom$self_height$$143$$ : $colHeaderHeight$$5$$
};
D.$JSCompiler_StaticMethods_addCellsToRow$$ = function $$JSCompiler_StaticMethods_addCellsToRow$$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$5$$, $row$$18$$, $rowIndex$$10$$, $renderer$$6$$, $isRowFetch$$, $columnStart$$5$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $bottom$$10$$) {
  var $isAppend$$2$$, $cellContent$$, $firstColumn$$, $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$, $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$, $currentLeft$$1$$, $dir$$20$$, $totalWidth$$5$$, $columnCount$$15$$, $cellData$$11_content$$9$$, $cellMetadata_metadata$$inline_8645$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$, $j$$119$$, $cell$$19$$, $columnIndex$$6_textWrapper$$2$$, $keyAttribute$$, 
  $selectionAffordanceAppend$$;
  $isAppend$$2$$ = $columnStart$$5$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$18$$.firstChild;
  $currentLeft$$1$$ = $isRowFetch$$ || !$isAppend$$2$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_addCellsToRow$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$18$$.lastChild, $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) && ($selectionAffordanceAppend$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$18$$.children[$row$$18$$.children.length - 2], $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) ? $row$$18$$.children[$row$$18$$.children.length - 
  2] : $row$$18$$.lastChild);
  $keyAttribute$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.getMappedAttribute("key");
  $dir$$20$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  $totalWidth$$5$$ = 0;
  $columnCount$$15$$ = $cellSet$$5$$.getCount("column");
  for($j$$119$$ = 0;$j$$119$$ < $columnCount$$15$$;$j$$119$$ += 1) {
    $columnIndex$$6_textWrapper$$2$$ = $isAppend$$2$$ || $isRowFetch$$ ? $columnStart$$5$$ + $j$$119$$ : $columnStart$$5$$ + ($columnCount$$15$$ - 1 - $j$$119$$);
    $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ = {row:$rowIndex$$10$$, column:$columnIndex$$6_textWrapper$$2$$};
    $cellData$$11_content$$9$$ = $cellSet$$5$$.getData($indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$);
    $cellMetadata_metadata$$inline_8645$$ = $cellSet$$5$$.getMetadata($indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$);
    $cell$$19$$ = window.document.createElement("div");
    $cell$$19$$.setAttribute("tabIndex", -1);
    $cellContent$$ = window.document.createElement("div");
    $cellContent$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cellcontent");
    $cell$$19$$.appendChild($cellContent$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$ = $cellData$$11_content$$9$$;
    var $cellContext$$inline_8647$$ = D.$JSCompiler_alias_VOID$$, $cellContext$$inline_8647$$ = {};
    $cellContext$$inline_8647$$.parentElement = $cell$$19$$.firstChild;
    $cellContext$$inline_8647$$.indexes = $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$;
    $cellContext$$inline_8647$$.data = $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$;
    $cellContext$$inline_8647$$.component = $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$;
    $cellContext$$inline_8647$$.datasource = $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$.$m_dataSource$;
    $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ = D.$JSCompiler_alias_VOID$$;
    for($indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ in $cellMetadata_metadata$$inline_8645$$) {
      $cellMetadata_metadata$$inline_8645$$.hasOwnProperty($indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$) && ($cellContext$$inline_8647$$[$indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$] = $cellMetadata_metadata$$inline_8645$$[$indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$])
    }
    $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$, $cellContext$$inline_8647$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$ = $cellContext$$inline_8647$$;
    $row$$18$$.hasAttribute($keyAttribute$$) || $row$$18$$.setAttribute($keyAttribute$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$.keys.row);
    0 == $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColHeader$ && (0 == $rowIndex$$10$$ && !$JSCompiler_StaticMethods_addCellsToRow$self$$.$m_initialized$) && ($cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, "column", $columnIndex$$6_textWrapper$$2$$, D.$JSCompiler_alias_NULL$$, {key:$JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$.keys.column}, 
    D.$JSCompiler_alias_NULL$$), $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("column", $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$), $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("column", $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$), 
    $cell$$19$$.style.cssText = $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$, $cell$$19$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("colheadercell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("headercell") + " " + $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$, (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $cell$$19$$, 
    $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$.keys.column), $cell$$19$$.style.cssText = "", $cell$$19$$.className = "");
    $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$);
    $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$19$$.style.cssText = $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$);
    "" != $cell$$19$$.style.height && ($cell$$19$$.style.height = "");
    "" != $cell$$19$$.style.width && ($cell$$19$$.style.width = "");
    $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$ = 1 === window.Math.floor($columnIndex$$6_textWrapper$$2$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell");
    $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$);
    $cell$$19$$.className = $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ != D.$JSCompiler_alias_NULL$$ ? $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$ + " " + $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ : $cellStyleClass_data$$inline_8644_shimHeaderContext$$1_styleClass$$10$$;
    $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $cell$$19$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$.keys.column);
    if("hidden" === $verticalGridlines$$3$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $columnIndex$$6_textWrapper$$2$$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$) + $currentLeft$$1$$ + $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getWidth()) {
      "left" === $dir$$20$$ ? $cell$$19$$.style.borderRightStyle = "none" : $cell$$19$$.style.borderLeftStyle = "none"
    }
    if("hidden" === $horizontalGridlines$$3$$ || (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $rowIndex$$10$$) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$18$$, $bottom$$10$$) >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getHeight()) {
      $cell$$19$$.style.borderBottomStyle = "none"
    }
    $isAppend$$2$$ || $isRowFetch$$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$19$$, $currentLeft$$1$$, $dir$$20$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$19$$, $currentLeft$$1$$ - $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$, $dir$$20$$);
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_root$.appendChild($cell$$19$$);
    $renderer$$6$$ != D.$JSCompiler_alias_NULL$$ ? ($cellData$$11_content$$9$$ = $renderer$$6$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_8642_cellContext$$1$$), $cellData$$11_content$$9$$ != D.$JSCompiler_alias_NULL$$ && ($cellData$$11_content$$9$$.parentNode === D.$JSCompiler_alias_NULL$$ || $cellData$$11_content$$9$$.parentNode instanceof window.DocumentFragment ? $cellContent$$.appendChild($cellData$$11_content$$9$$) : $cellData$$11_content$$9$$.parentNode == 
    D.$JSCompiler_alias_NULL$$ && $cellData$$11_content$$9$$.toString && ($columnIndex$$6_textWrapper$$2$$ = window.document.createElement("span"), $columnIndex$$6_textWrapper$$2$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex$$6_textWrapper$$2$$.appendChild(window.document.createTextNode($cellData$$11_content$$9$$.toString())), $cellContent$$.appendChild($columnIndex$$6_textWrapper$$2$$)))) : ($cellData$$11_content$$9$$ == D.$JSCompiler_alias_NULL$$ && 
    ($cellData$$11_content$$9$$ = ""), $columnIndex$$6_textWrapper$$2$$ = window.document.createElement("span"), $columnIndex$$6_textWrapper$$2$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex$$6_textWrapper$$2$$.appendChild(window.document.createTextNode($cellData$$11_content$$9$$.toString())), $cellContent$$.appendChild($columnIndex$$6_textWrapper$$2$$));
    $isAppend$$2$$ || $isRowFetch$$ ? ($selectionAffordanceAppend$$ ? $row$$18$$.insertBefore($cell$$19$$, $selectionAffordanceAppend$$) : $row$$18$$.appendChild($cell$$19$$), $currentLeft$$1$$ += $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$) : ($row$$18$$.insertBefore($cell$$19$$, $firstColumn$$), $firstColumn$$ = $cell$$19$$, $currentLeft$$1$$ -= $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$);
    $updateColumnRangeInfo$$ && ($isAppend$$2$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$, $totalWidth$$5$$ += $indexes$$9_indexes$$inline_8643_inlineStyle$$17_inlineStyleClass_prop$$inline_8648_width$$168$$)
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$15$$ ? $totalWidth$$5$$ / $columnCount$$15$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$() {
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_showStatusText$$ = function $$JSCompiler_StaticMethods_showStatusText$$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$13_msg$$2$$;
  $left$$13_msg$$2$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$m_resources$.getTranslatedText("msgFetchingData");
  "block" != $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display && ($JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.innerHTML = $left$$13_msg$$2$$, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display = "block", $left$$13_msg$$2$$ = $JSCompiler_StaticMethods_showStatusText$self$$.getWidth() / 2 - $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.offsetWidth / 2, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.left = $left$$13_msg$$2$$ + 
  "px")
};
D.$JSCompiler_StaticMethods_hideStatusText$$ = function $$JSCompiler_StaticMethods_hideStatusText$$$($JSCompiler_StaticMethods_hideStatusText$self$$) {
  $JSCompiler_StaticMethods_hideStatusText$self$$.$m_status$.style.display = "none"
};
D.$DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$690_scrollLeft$$2$$) {
  var $scroller$$10$$;
  $event$$690_scrollLeft$$2$$ || ($event$$690_scrollLeft$$2$$ = window.event);
  $scroller$$10$$ = $event$$690_scrollLeft$$2$$.target ? $event$$690_scrollLeft$$2$$.target : $event$$690_scrollLeft$$2$$.srcElement;
  $event$$690_scrollLeft$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementScrollLeft$$)(this.$m_utils$, $scroller$$10$$);
  this.scrollTo($event$$690_scrollLeft$$2$$, $scroller$$10$$.scrollTop)
};
D.$JSCompiler_StaticMethods_scrollDelta$$ = function $$JSCompiler_StaticMethods_scrollDelta$$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX$$22_diff$$8$$, $deltaY$$22$$) {
  var $scrollLeft$$3$$, $scrollTop$$2$$, $scrollerScrollLeft$$, $scrollerScrollTop$$;
  0 != $deltaX$$22_diff$$8$$ && 0 != $deltaY$$22$$ && ($deltaX$$22_diff$$8$$ > $deltaY$$22$$ ? $deltaY$$22$$ = 0 : $deltaX$$22_diff$$8$$ = 0);
  $scrollLeft$$3$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollLeft$ - $deltaX$$22_diff$$8$$;
  $scrollTop$$2$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollTop$ - $deltaY$$22$$;
  (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$, window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "column") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $scrollLeft$$3$$)));
  $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop = window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "row") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollHeight$, $scrollTop$$2$$));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$) && ($scrollerScrollTop$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop, $scrollerScrollLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$), 0 != $deltaY$$22$$ && $scrollTop$$2$$ != $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop ? 
  ($deltaX$$22_diff$$8$$ = $scrollTop$$2$$ - $scrollerScrollTop$$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverY$ = 0 < $deltaX$$22_diff$$8$$ ? window.Math.min(50, $deltaX$$22_diff$$8$$) : window.Math.max(-50, $deltaX$$22_diff$$8$$)) : 0 != $deltaX$$22_diff$$8$$ && $scrollLeft$$3$$ != $scrollerScrollLeft$$ && ($deltaX$$22_diff$$8$$ = $scrollLeft$$3$$ - $scrollerScrollLeft$$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverX$ = 0 < $deltaX$$22_diff$$8$$ ? window.Math.min(50, 
  $deltaX$$22_diff$$8$$) : window.Math.max(-50, $deltaX$$22_diff$$8$$)))
};
D.$DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$5$$, $scrollTop$$4$$) {
  this.$m_currentScrollLeft$ = $scrollLeft$$5$$;
  this.$m_currentScrollTop$ = $scrollTop$$4$$;
  $scrollLeft$$5$$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)(this) < this.$m_startColPixel$ || $scrollLeft$$5$$ > this.$m_endColPixel$ || $scrollTop$$4$$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)(this) < this.$m_startRowPixel$ || $scrollTop$$4$$ > this.$m_endRowPixel$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, $scrollLeft$$5$$, $scrollTop$$4$$) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, $scrollLeft$$5$$, $scrollTop$$4$$);
  var $scrollerContent$$inline_8656_viewportRight$$inline_8653$$;
  $scrollerContent$$inline_8656_viewportRight$$inline_8653$$ = $scrollLeft$$5$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$);
  if(this.$m_endRowPixel$ < $scrollTop$$4$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$) || this.$m_startRowPixel$ > $scrollTop$$4$$ || this.$m_endColPixel$ < $scrollerContent$$inline_8656_viewportRight$$inline_8653$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$5$$) {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_TRUE$$
  }else {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
    (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
    var $scrollerContentHeight$$inline_8657$$, $scrollerContentWidth$$inline_8658$$, $databodyContent$$inline_8659$$;
    $scrollerContent$$inline_8656_viewportRight$$inline_8653$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$inline_8657$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($scrollerContent$$inline_8656_viewportRight$$inline_8653$$);
    $scrollerContentWidth$$inline_8658$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scrollerContent$$inline_8656_viewportRight$$inline_8653$$);
    $databodyContent$$inline_8659$$ = this.$m_databody$.firstChild;
    if(this.$m_endRowPixel$ > $scrollerContentHeight$$inline_8657$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_8657$$) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_8656_viewportRight$$inline_8653$$, this.$m_endRowPixel$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_8659$$, this.$m_endRowPixel$)
    }
    if(this.$m_endColPixel$ > $scrollerContentWidth$$inline_8658$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_8658$$) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scrollerContent$$inline_8656_viewportRight$$inline_8653$$, this.$m_endColPixel$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$inline_8659$$, this.$m_endColPixel$)
    }
    this.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
  var $scrollLeft$$6$$, $scrollTop$$5$$, $databody$$7$$, $colHeader$$5$$, $rowHeader$$6$$;
  $scrollLeft$$6$$ = this.$m_currentScrollLeft$;
  $scrollTop$$5$$ = this.$m_currentScrollTop$;
  $databody$$7$$ = this.$m_databody$.firstChild;
  $colHeader$$5$$ = this.$m_colHeader$.firstChild;
  $rowHeader$$6$$ = this.$m_rowHeader$.firstChild;
  $databody$$7$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
  this.$m_resources$.isRTLMode() ? ($databody$$7$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$5$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, 0, 0)") : ($databody$$7$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$5$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, 0, 0)");
  $rowHeader$$6$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$5$$ + "px, 0)";
  this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__syncScroller$$ = function $$JSCompiler_StaticMethods__syncScroller$$$($JSCompiler_StaticMethods__syncScroller$self_dir$$22$$) {
  var $scrollLeft$$7$$, $scrollTop$$6$$, $databody$$8$$, $colHeader$$6$$, $rowHeader$$7$$;
  $scrollLeft$$7$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_currentScrollLeft$;
  $scrollTop$$6$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_currentScrollTop$;
  $databody$$8$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_databody$.firstChild;
  $colHeader$$6$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_colHeader$.firstChild;
  $rowHeader$$7$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_rowHeader$.firstChild;
  if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") && (new window.WebKitCSSMatrix).hasOwnProperty("m11")) {
    if($JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_extraScrollOverY$ != D.$JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ ? $scrollLeft$$7$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_extraScrollOverX$ : $scrollTop$$6$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_extraScrollOverY$, $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_bounceBack$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_bounceBack$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$_bounceBack$.bind($JSCompiler_StaticMethods__syncScroller$self_dir$$22$$)), 
      $databody$$8$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_bounceBack$)
    }
    $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_resources$.isRTLMode() ? ($databody$$8$$.style.webkitTransform = "translate3d(" + $scrollLeft$$7$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$6$$.style.webkitTransform = "translate3d(" + $scrollLeft$$7$$ + "px, 0, 0)") : ($databody$$8$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$7$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$6$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$7$$ + "px, 0, 0)");
    $rowHeader$$7$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$6$$ + "px, 0)"
  }else {
    $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$8$$, -$scrollLeft$$7$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$8$$, -$scrollTop$$6$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$6$$, -$scrollLeft$$7$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$22$$), 
    (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$7$$, -$scrollTop$$6$$, "top")
  }
};
D.$JSCompiler_StaticMethods_handleLongScroll$$ = function $$JSCompiler_StaticMethods_handleLongScroll$$$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$, $scrollTop$$7_startRow$$) {
  var $startRowPixel$$, $startColPixel$$;
  $scrollTop$$7_startRow$$ = window.Math.round(window.Math.max(0, $scrollTop$$7_startRow$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getHeight() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$);
  $scrollLeft$$8_startCol$$ = window.Math.round(window.Math.max(0, $scrollLeft$$8_startCol$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getWidth() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$);
  $startRowPixel$$ = $scrollTop$$7_startRow$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$;
  $startColPixel$$ = $scrollLeft$$8_startCol$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRow$ = $scrollTop$$7_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRow$ = $scrollTop$$7_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeader$ = $scrollTop$$7_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeader$ = $scrollTop$$7_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startCol$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endCol$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeader$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeader$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("row", $scrollTop$$7_startRow$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_rowHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$, $startRowPixel$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("column", $scrollLeft$$8_startCol$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    this.$m_colHeader$.firstChild.innerHTML = "";
    this.$handleHeadersFetchSuccess$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchCells($JSCompiler_StaticMethods_handleLongScroll$self$$.$m_databody$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_scroller$, $scrollTop$$7_startRow$$, $scrollLeft$$8_startCol$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$, $startRowPixel$$)
  }})
};
D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$, $headerSet$$4$$, $headerRange$$7$$, $startRowPixel$$1$$) {
  var $headerResizer$$, $headerContent$$4$$;
  $headerContent$$4$$ = $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_rowHeader$.firstChild;
  $headerContent$$4$$ != D.$JSCompiler_alias_NULL$$ && ($headerResizer$$ = $headerContent$$4$$.firstChild.cloneNode(), $headerContent$$4$$.innerHTML = "", $headerContent$$4$$.appendChild($headerResizer$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($headerResizer$$, $startRowPixel$$1$$));
  $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$4$$, $headerRange$$7$$)
};
D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$, $cellSet$$7$$, $cellRange$$7$$, $startRowPixel$$2$$) {
  var $databodyContent$$5$$, $databodyResizer$$;
  $databodyContent$$5$$ = $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_databody$.firstChild;
  $databodyContent$$5$$ != D.$JSCompiler_alias_NULL$$ && ($databodyResizer$$ = $databodyContent$$5$$.firstChild.cloneNode(), $databodyContent$$5$$.innerHTML = "", $databodyContent$$5$$.appendChild($databodyResizer$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyResizer$$, $startRowPixel$$2$$));
  $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$handleCellsFetchSuccess$($cellSet$$7$$, $cellRange$$7$$)
};
D.$JSCompiler_StaticMethods_fillViewport$$ = function $$JSCompiler_StaticMethods_fillViewport$$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$, $fetchSize$$inline_8723_scrollTop$$8$$) {
  var $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$, $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$, $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$;
  $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ = $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && 
  (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"))) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$, $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$, $i$$inline_8668_prevLeft$$inline_8689$$, $header$$inline_8670$$, $prevLeft$$inline_8671$$;
      $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild;
      $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.childNodes;
      for($i$$inline_8668_prevLeft$$inline_8689$$ = $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ = $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = 0;$i$$inline_8668_prevLeft$$inline_8689$$ < $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$.length;$i$$inline_8668_prevLeft$$inline_8689$$ += 
      1) {
        if($header$$inline_8670$$ = $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$[$i$$inline_8668_prevLeft$$inline_8689$$], $prevLeft$$inline_8671$$ = $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$, $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$inline_8670$$, 
        "left"), $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $i$$inline_8668_prevLeft$$inline_8689$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ = $prevLeft$$inline_8671$$;
          break
        }
      }
      for($column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = 0;$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ < $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$;$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ += 
      1) {
        $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.removeChild($colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.firstChild)
      }
    }
  }else {
    if($fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ && ($column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", 
    $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$)))) {
      $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.lastChild;
      for($column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ = $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ + $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ > $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$;) {
        $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.removeChild($column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ -= $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$, 
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ -= 1, $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.lastChild, $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ = 
        $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$.offsetWidth
      }
    }
  }
  if($columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "column") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = 
    $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ = 0, !(2 > $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$.length))) {
      $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$[1].childNodes;
      for($column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = 0;$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ < $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$.length;$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ += 
      1) {
        if($column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ = $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$[$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$], $i$$inline_8668_prevLeft$$inline_8689$$ = $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$, 
        $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$, "left"), $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ > 
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ = $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $i$$inline_8668_prevLeft$$inline_8689$$;
          break
        }
      }
      for($colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = 1;$colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ < $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$.length;$colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ += 
      1) {
        $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$[$colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$];
        for($column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = 0;$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ < $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$;$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ += 
        1) {
          $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$.removeChild($column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$.firstChild)
        }
      }
    }
  }else {
    if($fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ && ($column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$), 
    !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, 
    $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$)))) {
      $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ = $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$[1];
      $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$.lastChild;
      for($column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ + $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ > 
      $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$;) {
        for($column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = 1;$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ < $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.length;$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ += 
        1) {
          $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ = $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$[$column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$], $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$.removeChild($column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$.lastChild)
        }
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$;
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
        $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$.lastChild;
        $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$.offsetWidth
      }
    }
  }
  $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ = $fetchSize$$inline_8723_scrollTop$$8$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$ && ($fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row"))) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    ($columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$.firstChild, 
    $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$), !($column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ >= 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0))) {
      $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.nextSibling;
      for($column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ = $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$.offsetHeight;$column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ + $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ < 
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0;) {
        $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$.removeChild($column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$ += $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ += 
        1, $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ += $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$, $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$.nextSibling, 
        $column$$inline_8688_height$$inline_8711_left$$inline_8666_row$$inline_8702_width$$inline_8678$$ = $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$.offsetHeight
      }
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$, $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$)
    }
  }else {
    if(window.Math.max(0, $fetchSize$$inline_8723_scrollTop$$8$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return
      }
      $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$);
      if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && ($columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, 
      $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ <= $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$))) {
        $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$.lastChild;
        for($column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$.offsetHeight;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ + $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ > 
        $colHeaderContent$$inline_8663_colHeaderContent$$inline_8675_fetchSize$$3_j$$inline_8690_left$$inline_8684_resizer$$inline_8707_rows$$inline_8700_threshold$$inline_8716$$;) {
          $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$.removeChild($column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ -= $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$, 
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ -= 1, $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$ = $columns$$inline_8697_fetchStartRow_indexToRemove$$inline_8683_rowHeaderContent$$inline_8706_rowHeaderContent$$inline_8715_viewportRight$$2$$.lastChild, $column$$inline_8677_header$$inline_8710_headers$$inline_8664_height$$inline_8718_i$$inline_8687_j$$inline_8669_j$$inline_8701_k$$inline_8692$$ = 
          $column$$inline_8698_columns$$inline_8686_fetchStartCol_indexToRemove$$inline_8665_resizerHeight$$inline_8708_row$$inline_8691_row$$inline_8717_threshold$$inline_8676_width$$inline_8699$$.offsetHeight
        }
      }
    }
  }
  $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$ ? 
  ($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$)) : window.Math.max(0, $fetchSize$$inline_8723_scrollTop$$8$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$ && 0 != $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ && 
  ($fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row")), $fetchSize$$inline_8723_scrollTop$$8$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$), 
  $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_8724_rows$$inline_8682_scrollLeft$$9_threshold$$inline_8696_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_8723_scrollTop$$8$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), 
  !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$))
};
D.$JSCompiler_StaticMethods_removeRowsFromTop$$ = function $$JSCompiler_StaticMethods_removeRowsFromTop$$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$11$$) {
  var $databodyContent$$9$$, $resizer$$3$$, $resizerHeight$$1$$, $row$$21$$, $height$$145$$;
  $databodyContent$$9$$ = $databody$$11$$.firstChild;
  $resizer$$3$$ = $databodyContent$$9$$.firstChild;
  $resizerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($resizer$$3$$);
  if(!($resizerHeight$$1$$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $row$$21$$ = $resizer$$3$$.nextSibling;
    for($height$$145$$ = $row$$21$$.offsetHeight;$resizerHeight$$1$$ + $height$$145$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $databodyContent$$9$$.removeChild($row$$21$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$145$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $resizerHeight$$1$$ += $height$$145$$;
      $row$$21$$ = $resizer$$3$$.nextSibling;
      if($row$$21$$ == D.$JSCompiler_alias_NULL$$) {
        break
      }
      $height$$145$$ = $row$$21$$.offsetHeight
    }
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$3$$, $resizerHeight$$1$$)
  }
};
D.$JSCompiler_StaticMethods_removeRowsFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowsFromBottom$$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$12$$) {
  var $databodyContent$$10$$, $threshold$$11$$, $row$$23$$, $height$$147$$;
  $databodyContent$$10$$ = $databody$$12$$.firstChild;
  $threshold$$11$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ > $threshold$$11$$)) {
    $row$$23$$ = $databodyContent$$10$$.lastChild;
    for($height$$147$$ = $row$$23$$.offsetHeight;$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ + $height$$147$$ > $threshold$$11$$;) {
      $databodyContent$$10$$.removeChild($row$$23$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$147$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$23$$ = $databodyContent$$10$$.lastChild, $height$$147$$ = $row$$23$$.offsetHeight
    }
  }
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && this.$m_stopDatabodyScroll$ && (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($event$$693$$, $direction$$40_id$$295$$, $value$$152$$) {
  var $target$$119$$, $cell$$20$$;
  $target$$119$$ = $event$$693$$.target;
  $cell$$20$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $target$$119$$);
  $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("resizeHeight") ? (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$119$$ = $cell$$20$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$20$$, "row").firstChild : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$119$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$119$$, "resizeHeight", $value$$152$$)) : $direction$$40_id$$295$$ === 
  this.$m_resources$.getMappedCommand("resizeWidth") ? (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$119$$ = $cell$$20$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$20$$, "column") : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$119$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$119$$, "resizeWidth", $value$$152$$)) : $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("sortColAsc") || 
  $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("sortColDsc") ? ($direction$$40_id$$295$$ = $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", $cell$$20$$ != D.$JSCompiler_alias_NULL$$ ? ($target$$119$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$20$$, "column"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$119$$) && $target$$119$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, 
  $event$$693$$, $target$$119$$, $direction$$40_id$$295$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$119$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$693$$, $direction$$40_id$$295$$)) : $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("sortRowDsc") ? ($direction$$40_id$$295$$ = $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? 
  "ascending" : "descending", $cell$$20$$ != D.$JSCompiler_alias_NULL$$ ? ($target$$119$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$20$$, "row"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$119$$) && $target$$119$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$693$$, $target$$119$$, $direction$$40_id$$295$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$119$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, 
  $event$$693$$, $direction$$40_id$$295$$)) : $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("cut") ? (0,D.$JSCompiler_StaticMethods__handleCut$$)(this, $event$$693$$) : $direction$$40_id$$295$$ === this.$m_resources$.getMappedCommand("paste") && (0,D.$JSCompiler_StaticMethods__handlePaste$$)(this, $event$$693$$)
};
D.$DvtDataGrid$$.prototype.handleContextMenuReturn = D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$;
D.$JSCompiler_StaticMethods__isDOMElementSortable$$ = function $$JSCompiler_StaticMethods__isDOMElementSortable$$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$22$$) {
  var $header$$19$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$22$$);
  return $header$$19$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : "true" == $header$$19$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$m_resources$.getMappedAttribute("sortable"))
};
D.$JSCompiler_StaticMethods__isSelectionEnabled$$ = function $$JSCompiler_StaticMethods__isSelectionEnabled$$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return"none" != (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isMultipleSelection$$ = function $$JSCompiler_StaticMethods_isMultipleSelection$$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return"multiple" == (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isResizeEnabled$$ = function $$JSCompiler_StaticMethods_isResizeEnabled$$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$8$$) {
  var $row$$24$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$8$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$8$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$8$$.$m_options$, "column");
  return"disable" !== $row$$24$$.width || "disable" !== $row$$24$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$8$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$8$$.height
};
D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$ = function $$JSCompiler_StaticMethods__isHeaderResizeEnabled$$$($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $axis$$55$$, $headerContext$$5$$) {
  var $resizable$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$.$m_options$, $axis$$55$$, $headerContext$$5$$);
  return"column" == $axis$$55$$ ? "function" == typeof $resizable$$.width ? "enable" == $resizable$$.width.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $headerContext$$5$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "row" == $axis$$55$$ ? "function" == typeof $resizable$$.height ? "enable" == $resizable$$.height.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, 
  $headerContext$$5$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$694$$) {
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && this.$m_databodyDragState$ == D.$JSCompiler_alias_FALSE$$ && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$694$$)
};
D.$JSCompiler_prototypeAlias$$.$handleRowHeaderMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleRowHeaderMouseMove$$($event$$695$$) {
  this.$m_databodyMove$ && (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$695$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$696$$) {
  var $header$$inline_8746_row$$25$$;
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$696$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$696$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$696$$.target)) {
    $event$$696$$.preventDefault(), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$696$$.target, this.getMappedStyle("selected"))
  }else {
    (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$696$$);
    $header$$inline_8746_row$$25$$ = this.find($event$$696$$.target, "row");
    !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, $header$$inline_8746_row$$25$$) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$696$$.pageX, this.$m_currentY$ = $event$$696$$.pageY);
    if(!this.$m_isResizing$) {
      var $index$$inline_8745$$, $axis$$inline_8747$$;
      $header$$inline_8746_row$$25$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$696$$.target);
      $header$$inline_8746_row$$25$$ != D.$JSCompiler_alias_NULL$$ && ($index$$inline_8745$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$inline_8746_row$$25$$), $axis$$inline_8747$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$inline_8746_row$$25$$));
      $index$$inline_8745$$ != D.$JSCompiler_alias_NULL$$ && $index$$inline_8745$$ != D.$JSCompiler_alias_VOID$$ && ("row" === $axis$$inline_8747$$ ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $index$$inline_8745$$) : "column" === $axis$$inline_8747$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $index$$inline_8745$$))
    }
    this.$processed$ === D.$JSCompiler_alias_TRUE$$ && $event$$696$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($event$$697$$) {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$) : (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$697$$);
  this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$698$$) {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$698$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$698$$.target)) {
    var $header$$inline_8751$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$698$$.target);
    $header$$inline_8751$$ && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_8751$$, D.$JSCompiler_alias_FALSE$$);
    ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$698$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$698$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$698$$.target, this.getMappedStyle("hover"))
  }
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$699$$) {
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$699$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$699$$.target)) {
    var $header$$inline_8755$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$699$$.target);
    ($header$$inline_8755$$ == D.$JSCompiler_alias_NULL$$ || $event$$699$$.relatedTarget == D.$JSCompiler_alias_NULL$$ || $header$$inline_8755$$ !== (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$699$$.relatedTarget)) && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_8755$$, D.$JSCompiler_alias_TRUE$$);
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$699$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$699$$.target, this.getMappedStyle("sortdescending"))) {
      (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$699$$.target, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$699$$.target, this.getMappedStyle("selected"))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseUp$$() {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$701$$) {
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$701$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$701$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$701$$.target)) {
    (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$701$$), $event$$701$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($event$$702$$) {
  0 === $event$$702$$.button && ((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$702$$.target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$702$$.pageX, this.$m_currentY$ = $event$$702$$.pageY), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? ((0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$702$$), (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && (this.$m_databodyDragState$ = 
  D.$JSCompiler_alias_TRUE$$)) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$702$$))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$703$$) {
  var $row$$26$$, $selectionMode$$10$$;
  this.$m_databodyMove$ || ($selectionMode$$10$$ = this.$m_options$.$getSelectionMode$(), $row$$26$$ = this.find($event$$703$$.target, "row"), "cell" === $selectionMode$$10$$ ? (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$703$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$10$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($row$$26$$, this.getMappedStyle("hover")))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$704$$) {
  var $row$$27$$, $selectionMode$$11$$;
  this.$m_databodyMove$ || ($selectionMode$$11$$ = this.$m_options$.$getSelectionMode$(), $row$$27$$ = this.find($event$$704$$.target, "row"), "cell" === $selectionMode$$11$$ ? (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$704$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$11$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($row$$27$$, this.getMappedStyle("hover")))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$705$$) {
  this.$m_databodyMove$ ? (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$705$$) : this.$m_databodyDragState$ && (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $event$$705$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$() {
  this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($event$$707$$) {
  var $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$;
  if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ && this.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$) {
    9 === $event$$707$$.keyCode && ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = this.createIndex(0, 0), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$), 
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$) : this.$activeAndFocus$($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$), 
    $event$$707$$.preventDefault())
  }else {
    if(!(9 === $event$$707$$.keyCode && (!(0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) || "actionable" != this.$m_keyMode$))) {
      if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
        if(this.$m_activeHeader$.elem != window.document.activeElement) {
          return
        }
        var $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$;
        $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = D.$JSCompiler_alias_FALSE$$;
        if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
          if($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = $event$$707$$.keyCode, (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$)) {
            $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$;
            var $elem$$inline_11041_shiftKey$$inline_8775$$, $processed$$inline_11043$$ = D.$JSCompiler_alias_FALSE$$;
            if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this)) {
              this.$m_resources$.isRTLMode() && (37 == $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ ? $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
              39 : 39 == $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ && ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
              37));
              $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = this.$m_activeHeader$.axis;
              $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ = this.$m_activeHeader$.index;
              $elem$$inline_11041_shiftKey$$inline_8775$$ = this.$m_activeHeader$.elem;
              switch($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$) {
                case 37:
                  "column" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ && 0 < $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ - 1, $elem$$inline_11041_shiftKey$$inline_8775$$.previousSibling), 
                  (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_11043$$ = D.$JSCompiler_alias_TRUE$$);
                  break;
                case 39:
                  if("row" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = this.createIndex($JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$, 
                    0), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$, $event$$707$$) : this.$activeAndFocus$($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$, 
                    $event$$707$$), $processed$$inline_11043$$ = D.$JSCompiler_alias_TRUE$$
                  }else {
                    if(!($JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ + 1 >= this.$m_endColHeader$ && this.$m_stopColumnHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ < this.$m_dataSource$.getCount("column"))) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ + 1, $elem$$inline_11041_shiftKey$$inline_8775$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_11043$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
                  break;
                case 38:
                  "row" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ && 0 < $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ - 1, $elem$$inline_11041_shiftKey$$inline_8775$$.previousSibling), 
                  (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_11043$$ = D.$JSCompiler_alias_TRUE$$);
                  break;
                case 40:
                  if("column" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = this.createIndex(0, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$), 
                    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$, $event$$707$$) : this.$activeAndFocus$($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$, 
                    $event$$707$$), $processed$$inline_11043$$ = D.$JSCompiler_alias_TRUE$$
                  }else {
                    if(!($JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ + 1 >= this.$m_endRowHeader$ && this.$m_stopRowHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ + 1 < this.$m_dataSource$.getCount("row"))) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ + 1, $elem$$inline_11041_shiftKey$$inline_8775$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_11043$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
              }
              $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = $processed$$inline_11043$$
            }else {
              $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = D.$JSCompiler_alias_TRUE$$
            }
          }else {
            32 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ ? (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = 
            this.$m_activeHeader$.axis, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ = this.$m_activeHeader$.index, "row" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ ? ((0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$, 
            $event$$707$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowSelected", {row:$JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ + 1}), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
            D.$JSCompiler_alias_TRUE$$) : "column" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ && "cell" == this.$m_options$.$getSelectionMode$() && ((0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$, $event$$707$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, 
            "accessibleColumnSelected", {column:$JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ + 1}), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = D.$JSCompiler_alias_TRUE$$)) : 13 == 
            $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ ? ($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = this.$m_activeHeader$.elem, "true" == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$.getAttribute(this.$m_resources$.getMappedAttribute("sortable")) && 
            ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$, 
            $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$.getAttribute(this.$m_resources$.getMappedAttribute("sortDir")), 
            (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$707$$, $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$, $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ == 
            D.$JSCompiler_alias_NULL$$ || "descending" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ ? "ascending" : "descending"), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
            D.$JSCompiler_alias_TRUE$$)) : 33 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ ? ($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = this.$m_activeHeader$.elem, (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, 
            this.$m_startRowHeader$, $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$.parentNode.firstChild.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
            D.$JSCompiler_alias_TRUE$$) : 34 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ ? ($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = this.$m_activeHeader$.elem, (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, 
            this.$m_endRowHeader$ - 1, $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$.parentNode.lastChild), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
            D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$707$$)
          }
        }else {
          $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = D.$JSCompiler_alias_VOID$$
        }
      }else {
        $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_active$));
        if($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$[0] != 
        (0,D.$JSCompiler_StaticMethods_findCell$$)(this, window.document.activeElement)) {
          if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && this.$m_selectionFrontier$ != D.$JSCompiler_alias_NULL$$) {
            if($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_selectionFrontier$)), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ == 
            D.$JSCompiler_alias_NULL$$ || $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$[0] != (0,D.$JSCompiler_StaticMethods_findCell$$)(this, window.document.activeElement)) {
              return
            }
          }else {
            return
          }
        }
        $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$707$$.target);
        $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
        $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$.parentNode, $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
        this.$_getKey$($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$), this.fireEvent("keydown", {event:$event$$707$$, ui:{rowKey:$JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$}}));
        $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$707$$);
        if(!$JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$) {
          if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
            $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = D.$JSCompiler_alias_FALSE$$;
            $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = $event$$707$$.keyCode;
            if("actionable" == this.$m_keyMode$) {
              27 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ && ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), this.$highlightActive$(), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
              D.$JSCompiler_alias_TRUE$$);
              if($JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ = (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$)) {
                $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$707$$.target), $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ = !(0 < (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$).length)
              }
              if($JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$707$$), $elem$$inline_11041_shiftKey$$inline_8775$$ = $event$$707$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ || 
                ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$, 
                $elem$$inline_11041_shiftKey$$inline_8775$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this), $event$$707$$))
              }else {
                if(9 === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || 13 === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$) {
                  $elem$$inline_11041_shiftKey$$inline_8775$$ = $event$$707$$.shiftKey, $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = 9 === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ ? $elem$$inline_11041_shiftKey$$inline_8775$$ ? 
                  37 : 39 : $elem$$inline_11041_shiftKey$$inline_8775$$ ? 38 : 40, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, 
                  $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$, D.$JSCompiler_alias_FALSE$$, $event$$707$$)
                }
              }
            }else {
              if(113 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || 13 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_TRUE$$), $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$707$$.target), $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = 
                (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$), 0 < $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$.length && $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$[0].focus()
              }else {
                if(27 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$) {
                  this.$m_discontiguousSelection$ && (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, D.$JSCompiler_alias_FALSE$$)
                }else {
                  if((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$) || 36 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || 35 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || 
                  33 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || 34 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$) {
                    $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$707$$), $elem$$inline_11041_shiftKey$$inline_8775$$ = $event$$707$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ || ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
                    (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$, $elem$$inline_11041_shiftKey$$inline_8775$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)))
                  }else {
                    if($event$$707$$.shiftKey && 119 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$) {
                      (0,D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$)(this, !this.$m_discontiguousSelection$)
                    }else {
                      if(32 == $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ && ($JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$707$$), $elem$$inline_11041_shiftKey$$inline_8775$$ = $event$$707$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && 
                      (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($elem$$inline_11041_shiftKey$$inline_8775$$ && !$JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ || $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$))) {
                        $JSCompiler_temp$$9018_ctrlKey$$inline_8774_elem$$inline_11051_index$$inline_11040_index$$inline_8760$$ ? ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = this.$m_active$.column, (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, 
                        $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$, $event$$707$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleColumnSelected", {column:this.$m_active$.columnKey})) : ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
                        this.$m_active$.row, (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$, $event$$707$$), (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowSelected", 
                        {row:this.$m_active$.rowKey})), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = D.$JSCompiler_alias_TRUE$$
                      }
                    }
                  }
                }
              }
            }
            $event$$707$$.altKey && ((0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$707$$) && 53 === $event$$707$$.keyCode) && ((0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
            D.$JSCompiler_alias_TRUE$$)
          }else {
            $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = $event$$707$$.target, $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ = 
            $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$.tagName, "INPUT" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || 
            "TEXTAREA" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || "SELECT" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || "BUTTON" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || 
            "A" === $axis$$inline_11039_axis$$inline_8759_direction$$inline_11048_elem$$inline_11054_elem$$inline_8761_elems$$inline_11055_keyCode$$inline_8762_keyCode$$inline_8773_tagName$$inline_11059$$ || $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$.getAttribute("tabIndex") != 
            D.$JSCompiler_alias_NULL$$ && 0 <= (0,window.parseInt)($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$.getAttribute("tabIndex"), 10) && (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$) != 
            $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ ? $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
            D.$JSCompiler_alias_VOID$$ : ($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = $event$$707$$.keyCode, ((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$) || 
            36 == $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ || 35 == $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ || 
            33 == $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ || 34 == $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$) && 
            !(0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$707$$) ? $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$, 
            D.$JSCompiler_alias_FALSE$$, $event$$707$$) : ($event$$707$$.altKey && ((0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$707$$) && 53 === $event$$707$$.keyCode) && (0,D.$JSCompiler_StaticMethods_readCurrentContent$$)(this), $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ = 
            D.$JSCompiler_alias_FALSE$$))
          }
        }
      }
      $JSCompiler_temp$$312_cell$$21_cell$$inline_8767_column$$inline_8776_elem$$inline_11058_header$$inline_11046_keyCode$$inline_11037_keyCode$$inline_8782_newCellIndex_newCellIndex$$inline_11042_processed$$1_processed$$inline_8763_processed$$inline_8778_row$$inline_8768_row$$inline_8777_rowKey$$inline_8769$$ === D.$JSCompiler_alias_TRUE$$ && $event$$707$$.preventDefault()
    }
  }
};
D.$JSCompiler_StaticMethods_findPos$$ = function $$JSCompiler_StaticMethods_findPos$$$($JSCompiler_StaticMethods_findPos$self$$, $element$$23$$) {
  var $parentPos$$2$$, $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$;
  if($element$$23$$) {
    $parentPos$$2$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_findPos$self$$, $element$$23$$.offsetParent);
    $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$ = $element$$23$$.parentNode;
    var $matrixArray$$inline_8787_transformZ$$inline_8790$$, $transformY$$inline_8789$$;
    $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$ ? ($cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$ = window.document.defaultView.getComputedStyle($cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$, D.$JSCompiler_alias_NULL$$), $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$ = $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$.getPropertyValue("-moz-transform") || $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$.getPropertyValue("-ms-transform") || $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$.getPropertyValue("-o-transform") || $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$.getPropertyValue("transform"), 
    $matrixArray$$inline_8787_transformZ$$inline_8790$$ = $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$.substr(7, $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$.length - 8).split(", "), $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_8787_transformZ$$inline_8790$$[4], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_8787_transformZ$$inline_8790$$[4], 
    10), $transformY$$inline_8789$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_8787_transformZ$$inline_8790$$[5], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_8787_transformZ$$inline_8790$$[5], 10), $matrixArray$$inline_8787_transformZ$$inline_8790$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_8787_transformZ$$inline_8790$$[6], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_8787_transformZ$$inline_8790$$[6], 10), $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$ = 
    [$cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$, $transformY$$inline_8789$$, $matrixArray$$inline_8787_transformZ$$inline_8790$$]) : $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$ = [0, 0, 0];
    return[(0,window.parseInt)($parentPos$$2$$[0], 10) + (0,window.parseInt)($element$$23$$.offsetLeft, 10) + $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$[0], (0,window.parseInt)($parentPos$$2$$[1], 10) + (0,window.parseInt)($element$$23$$.offsetTop, 10) + $cs$$inline_8785_element$$inline_8784_transform$$3_transform$$inline_8786_transformX$$inline_8788$$[1]]
  }
  return[0, 0]
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseWheel$$($deltaY$$inline_8794_event$$709$$) {
  var $delta$$21_deltaX$$inline_8793$$;
  $deltaY$$inline_8794_event$$709$$.preventDefault();
  $deltaY$$inline_8794_event$$709$$.wheelDeltaX ? ($delta$$21_deltaX$$inline_8793$$ = $deltaY$$inline_8794_event$$709$$.wheelDeltaX, $deltaY$$inline_8794_event$$709$$ = $deltaY$$inline_8794_event$$709$$.wheelDeltaY) : ($delta$$21_deltaX$$inline_8793$$ = 0, $deltaY$$inline_8794_event$$709$$ = $deltaY$$inline_8794_event$$709$$.detail ? -40 * $deltaY$$inline_8794_event$$709$$.detail : $deltaY$$inline_8794_event$$709$$.wheelDelta);
  $delta$$21_deltaX$$inline_8793$$ = {deltaX:$delta$$21_deltaX$$inline_8793$$, deltaY:$deltaY$$inline_8794_event$$709$$};
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $delta$$21_deltaX$$inline_8793$$.deltaX, $delta$$21_deltaX$$inline_8793$$.deltaY)
};
D.$JSCompiler_prototypeAlias$$.$handleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleTouchStart$$($event$$710$$) {
  var $dir$$23_target$$120$$, $selection$$28$$;
  if(1 == $event$$710$$.touches.length) {
    this.$m_startX$ = $event$$710$$.touches[0].pageX;
    this.$m_startY$ = $event$$710$$.touches[0].pageY;
    this.$m_currentX$ = this.$m_startX$;
    this.$m_currentY$ = this.$m_startY$;
    this.$m_prevX$ = this.$m_startX$;
    this.$m_prevY$ = this.$m_startY$;
    this.$m_moveCount$ = 0;
    this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$;
    $dir$$23_target$$120$$ = $event$$710$$.touches[0].target;
    if((0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)) {
      if($dir$$23_target$$120$$.className === this.getMappedStyle("selectaffordancetop") || $dir$$23_target$$120$$.className === this.getMappedStyle("selectaffordancebottom")) {
        $dir$$23_target$$120$$ = $dir$$23_target$$120$$.parentNode
      }
      if($dir$$23_target$$120$$ = $dir$$23_target$$120$$ === this.$m_topSelectIconContainer$ ? "top" : $dir$$23_target$$120$$ === this.$m_bottomSelectIconContainer$ ? "bottom" : D.$JSCompiler_alias_NULL$$) {
        this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_TRUE$$, $selection$$28$$ = this.$GetSelection$(), this.$m_touchSelectAnchor$ = "top" === $dir$$23_target$$120$$ ? $selection$$28$$[$selection$$28$$.length - 1].endIndex : $selection$$28$$[$selection$$28$$.length - 1].startIndex
      }
    }
    !this.$m_touchMultipleSelect$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$710$$.touches[0].target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$handleTouchCancel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleTouchMove$$($deltaX$$inline_8797_event$$711$$) {
  var $diffX$$9$$, $diffY$$10$$;
  this.$m_touchActive$ ? ($deltaX$$inline_8797_event$$711$$.preventDefault(), this.$m_currentX$ = $deltaX$$inline_8797_event$$711$$.touches[0].pageX, this.$m_currentY$ = $deltaX$$inline_8797_event$$711$$.touches[0].pageY, $diffX$$9$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$10$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_touchMultipleSelect$ ? (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $deltaX$$inline_8797_event$$711$$) : this.$m_databodyMove$ ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), 
  (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $deltaX$$inline_8797_event$$711$$)) : 10 > window.Math.abs($diffX$$9$$) && 10 > window.Math.abs($diffY$$10$$) ? ($deltaX$$inline_8797_event$$711$$ = $diffX$$9$$, this.$m_resources$.isRTLMode() && ($deltaX$$inline_8797_event$$711$$ *= -1), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 1.5 * $deltaX$$inline_8797_event$$711$$, 1.5 * $diffY$$10$$), this.$m_moveCount$++) : this.$m_moveCount$ = 0, this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = 
  this.$m_currentY$) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleTouchEnd$$($event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$) {
  var $swipeLength$$;
  if(this.$m_touchActive$) {
    if(this.$m_touchMultipleSelect$) {
      $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$.preventDefault(), this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_FALSE$$
    }else {
      if(this.$m_databodyMove$) {
        $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$.preventDefault(), this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
      }else {
        if(this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$);
          return
        }
        if(1 < this.$m_moveCount$) {
          $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$.preventDefault();
          this.$handleTouchCancel$();
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this);
          return
        }
        $swipeLength$$ = window.Math.round(window.Math.sqrt(window.Math.pow(this.$m_currentX$ - this.$m_startX$, 2) + window.Math.pow(this.$m_currentY$ - this.$m_startY$, 2)));
        if(0 < $swipeLength$$) {
          $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$.preventDefault();
          $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ = window.Math.round(180 * window.Math.atan2(this.$m_currentY$ - this.$m_startY$, this.$m_startX$ - this.$m_currentX$) / window.Math.PI);
          0 > $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ && ($event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ = 360 - window.Math.abs($event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$));
          var $rtl$$inline_8805$$, $left$$inline_8806$$;
          $left$$inline_8806$$ = ($rtl$$inline_8805$$ = this.$m_resources$.isRTLMode()) ? "right" : "left";
          $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ = 45 >= $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ && 0 <= $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ ? $left$$inline_8806$$ : 360 >= $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ && 315 <= $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ ? $left$$inline_8806$$ : 135 <= $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ && 225 >= $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ ? 
          $rtl$$inline_8805$$ ? "left" : "right" : 45 < $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ && 135 > $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$ ? "down" : "up";
          this.$handleSwipe$($swipeLength$$, $event$$712_swipeAngle_swipeAngle$$inline_8801_swipeDir$$);
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this)
        }
      }
    }
  }
  this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleTouchCancel$$() {
  this.$m_databodyMove$ && ((0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$), this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$);
  this.$m_touchSelectAnchor$ = D.$JSCompiler_alias_NULL$$;
  this.$m_touchActive$ = this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$handleSwipe$ = function $$JSCompiler_prototypeAlias$$$$handleSwipe$$($swipeLength$$1$$, $swipeDirection$$) {
  $swipeLength$$1$$ *= 3.5;
  "down" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $swipeLength$$1$$) : "up" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, -$swipeLength$$1$$) : "left" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, -$swipeLength$$1$$, 0) : "right" == $swipeDirection$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $swipeLength$$1$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchStart$$($event$$714$$) {
  var $header$$20$$;
  this.$m_touchStart$ = (new window.Date).getTime();
  1 == $event$$714$$.touches.length ? (this.$m_startX$ = $event$$714$$.touches[0].pageX, this.$m_startY$ = $event$$714$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_moveCount$ = 0, this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$, $header$$20$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$714$$.target), (0,window.setTimeout)(function() {
    this.$m_touchActive$ && !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$20$$, this.getMappedStyle("focus"))
  }.bind(this), 500), (0,window.setTimeout)(function() {
    this.$m_touchActive$ && !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$20$$, this.getMappedStyle("focus"))
  }.bind(this), 1E3), (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ((0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$714$$), (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$714$$))) : this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchMove$$($event$$715$$) {
  this.$m_touchActive$ ? ($event$$715$$.preventDefault(), this.$m_currentX$ = $event$$715$$.touches[0].pageX, this.$m_currentY$ = $event$$715$$.touches[0].pageY, this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$, (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$715$$)) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchEnd$$($event$$716_headerIndex$$) {
  var $header$$21_headerAxis_touchLength$$;
  $header$$21_headerAxis_touchLength$$ = (new window.Date).getTime() - this.$m_touchStart$;
  this.$m_touchActive$ && ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) ? ($event$$716_headerIndex$$.preventDefault(), (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$716_headerIndex$$)) : 500 > $header$$21_headerAxis_touchLength$$ ? (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$716_headerIndex$$.target) && ($event$$716_headerIndex$$.preventDefault(), 
  (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$716_headerIndex$$)) : 1E3 > $header$$21_headerAxis_touchLength$$ && ($header$$21_headerAxis_touchLength$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$716_headerIndex$$.target), $event$$716_headerIndex$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$21_headerAxis_touchLength$$), $header$$21_headerAxis_touchLength$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$21_headerAxis_touchLength$$), 
  "row" === $header$$21_headerAxis_touchLength$$ ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $event$$716_headerIndex$$) : "column" === $header$$21_headerAxis_touchLength$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $event$$716_headerIndex$$)));
  this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchCancel$$() {
  this.$m_touchActive$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.fireEvent = function $$JSCompiler_prototypeAlias$$$fireEvent$($functionName$$, $details$$5$$) {
  var $callback$$153$$;
  $functionName$$ == D.$JSCompiler_alias_NULL$$ || $details$$5$$ == D.$JSCompiler_alias_NULL$$ || ($callback$$153$$ = this.$callbacks$[$functionName$$], $callback$$153$$ != D.$JSCompiler_alias_NULL$$ && $callback$$153$$($details$$5$$))
};
D.$JSCompiler_prototypeAlias$$.addListener = function $$JSCompiler_prototypeAlias$$$addListener$($functionName$$1$$, $handler$$56$$) {
  this.$callbacks$[$functionName$$1$$] = $handler$$56$$
};
D.$JSCompiler_StaticMethods_setElementHeight$$ = function $$JSCompiler_StaticMethods_setElementHeight$$$($elem$$51$$, $height$$148$$) {
  $elem$$51$$.style.height = $height$$148$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementHeight$$ = function $$JSCompiler_StaticMethods_getElementHeight$$$($elem$$52$$) {
  return(0,window.parseInt)($elem$$52$$.style.height, 10)
};
D.$JSCompiler_StaticMethods_setElementWidth$$ = function $$JSCompiler_StaticMethods_setElementWidth$$$($elem$$53$$, $width$$171$$) {
  $elem$$53$$.style.width = $width$$171$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementWidth$$ = function $$JSCompiler_StaticMethods_getElementWidth$$$($elem$$54$$) {
  return(0,window.parseInt)($elem$$54$$.style.width, 10)
};
D.$JSCompiler_StaticMethods_setElementDir$$ = function $$JSCompiler_StaticMethods_setElementDir$$$($elem$$55$$, $pix$$, $dir$$24$$) {
  $elem$$55$$.style[$dir$$24$$] = $pix$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementDir$$ = function $$JSCompiler_StaticMethods_getElementDir$$$($elem$$56$$, $dir$$25$$) {
  return(0,window.parseInt)($elem$$56$$.style[$dir$$25$$], 10)
};
D.$JSCompiler_StaticMethods__isInViewport$$ = function $$JSCompiler_StaticMethods__isInViewport$$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$10$$) {
  var $rowIndex$$11$$, $columnIndex$$7$$;
  $rowIndex$$11$$ = $indexes$$10$$.row;
  $columnIndex$$7$$ = $indexes$$10$$.column;
  return-1 === $rowIndex$$11$$ && -1 === $columnIndex$$7$$ ? -1 : -1 === $rowIndex$$11$$ ? $columnIndex$$7$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$7$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$7$$ ? $rowIndex$$11$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$11$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$7$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$7$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$11$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$11$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1
};
D.$DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$) {
  var $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$, $keys$$5$$, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$, $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$, $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$, 
  $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$;
  if(this.$m_initialized$) {
    if($key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ = $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$.operation, $keys$$5$$ = $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$.keys, $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ = $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$.fragment, 
    $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$.indices, $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ = $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$.source, $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$ = 
    $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$.indexes, "insert" === $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$) {
      $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$.result, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ != D.$JSCompiler_alias_NULL$$ ? 
      $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ && $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ instanceof window.oj.FlattenedTreeDataGridDataSource ? (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$, 
      D.$JSCompiler_alias_TRUE$$) : $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ ? (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$, $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$) : (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, 
      $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$) : 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$) ? $keys$$5$$.row != D.$JSCompiler_alias_NULL$$ && (this.fetchHeaders("row", $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.row, 
      this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.row, this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$, {success:this.$_handleCellInsertsFetchSuccess$})) : ($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = 
      $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.row * this.$m_avgRowHeight$, this.$m_scroller$.scrollTop = $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$)
    }else {
      if("update" === $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$) {
        3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$) && ($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = {axis:"row", start:$columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.row, 
        count:1}, $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$ = {axis:"column", start:this.$m_startCol$, count:this.$m_endCol$ - this.$m_startCol$}, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$, 
        $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$], {success:this.$_handleCellUpdatesFetchSuccess$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
      }else {
        if("delete" === $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$) {
          if($i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ && $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ instanceof window.oj.FlattenedTreeDataGridDataSource) {
            (0,D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$)(this, $keys$$5$$)
          }else {
            if($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$) {
              if($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$) {
                var $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$ = this, $j$$inline_11066$$, $k$$inline_11067$$, $row$$inline_11069$$, $totalHeight$$inline_11070$$, $height$$inline_11071$$, $databodyContent$$inline_11073$$, $lastTopRow$$inline_11075$$, $keyAttribute$$inline_11076$$, $start$$inline_11077$$, $firstRowCase$$inline_11078$$, $transition_duration$$inline_11080$$, $transition_delay$$inline_11081$$, $transition_timing_function$$inline_11082$$, $transform$$inline_11084$$;
                $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ = [];
                $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$ = [];
                for($i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ = 0;$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ < $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$.length - 1;$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$++) {
                  1 == $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$[$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ + 1] - $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$[$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$] ? 
                  $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$.push($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$[$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$]) : ($fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$.push($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$[$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$]), 
                  $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.push($fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$), $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ = [])
                }
                $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$.push($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$[$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$.length - 1]);
                $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.push($fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$);
                $row$$inline_11069$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$[$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$.length - 
                1]);
                $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ = $row$$inline_11069$$.nextSibling;
                $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ = 0;
                $transition_duration$$inline_11080$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
                $transition_delay$$inline_11081$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay");
                $transition_timing_function$$inline_11082$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
                $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("opacity");
                $transform$$inline_11084$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
                $firstRowCase$$inline_11078$$ = D.$JSCompiler_alias_TRUE$$;
                $databodyContent$$inline_11073$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_databody$.firstChild;
                $lastTopRow$$inline_11075$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$[0]);
                0 != $lastTopRow$$inline_11075$$.previousSibling.childElementCount && ($lastTopRow$$inline_11075$$ = $lastTopRow$$inline_11075$$.previousSibling, $firstRowCase$$inline_11078$$ = D.$JSCompiler_alias_FALSE$$);
                $keyAttribute$$inline_11076$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_resources$.getMappedAttribute("key");
                for($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = 0;$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ < $keys$$5$$.length;$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$++) {
                  $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ = $keys$$5$$[$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$], $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$.row && ($key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ = 
                  $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$.row, $row$$inline_11069$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$), $row$$inline_11069$$ != D.$JSCompiler_alias_NULL$$ ? ($height$$inline_11071$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, 
                  $row$$inline_11069$$), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, $transition_duration$$inline_11080$$, "400ms"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, $transition_delay$$inline_11081$$, "0ms"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, $transition_timing_function$$inline_11082$$, "Cubic-bezier(0.70,0.00,0.51,1.29)"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, 
                  $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, 0)) : $height$$inline_11071$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_avgRowHeight$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$), 
                  $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_11071$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$), $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ = 
                  $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$, 0 - $height$$inline_11071$$), $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$.parentNode.removeChild($key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$), 
                  $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$.style.display = "none", $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_endRowHeader$ -= 1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_endRowHeaderPixel$ -= $height$$inline_11071$$), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_endRow$ -= 1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_endRowPixel$ -= 
                  $height$$inline_11071$$, $totalHeight$$inline_11070$$ += $height$$inline_11071$$)
                }
                if(1 < $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.length) {
                  for($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = 0;$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ < $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.length - 
                  1;$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$++) {
                    $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ += $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$[$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$].length;
                    $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$ = $height$$inline_11071$$ * $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$;
                    for($j$$inline_11066$$ = $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$[$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$][$columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$[$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$].length - 
                    1] + 1;$j$$inline_11066$$ < $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$[$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ + 1][0];$j$$inline_11066$$++) {
                      $row$$inline_11069$$ = (0,D.$JSCompiler_StaticMethods__getRowByLocalPosition$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, $j$$inline_11066$$), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($row$$inline_11069$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", "-" + $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$)
                    }
                  }
                }
                $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$;
                for($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$ = $height$$inline_11071$$ * $keys$$5$$.length;$cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$;) {
                  $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$ = $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$.previousSibling, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$, 
                  "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", "-" + $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$), ($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$.nextSibling) || 
                  $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.addEventListener("transitionend", function() {
                    for($j$$inline_11066$$ = 0;$j$$inline_11066$$ < $keys$$5$$.length;$j$$inline_11066$$++) {
                      $keys$$5$$[$j$$inline_11066$$].row && ($row$$inline_11069$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, $keys$$5$$[$j$$inline_11066$$].row), $row$$inline_11069$$.parentNode.removeChild($row$$inline_11069$$), $row$$inline_11069$$.style.display = "none")
                    }
                    $start$$inline_11077$$ = -1;
                    for($k$$inline_11067$$ = 1;$k$$inline_11067$$ < $databodyContent$$inline_11073$$.childElementCount;$k$$inline_11067$$++) {
                      $row$$inline_11069$$ = $databodyContent$$inline_11073$$.childNodes[$k$$inline_11067$$], $lastTopRow$$inline_11075$$.attributes[$keyAttribute$$inline_11076$$] && $lastTopRow$$inline_11075$$.attributes[$keyAttribute$$inline_11076$$].value == $databodyContent$$inline_11073$$.childNodes[$k$$inline_11067$$].attributes[$keyAttribute$$inline_11076$$].value && ($start$$inline_11077$$ = $k$$inline_11067$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, 
                      (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, $transition_duration$$inline_11080$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, $transition_delay$$inline_11081$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, $transition_timing_function$$inline_11082$$, "linear", "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$inline_11069$$, 
                      $transform$$inline_11084$$, 0, "remove"), 0 < $start$$inline_11077$$ ? $databodyContent$$inline_11073$$.childNodes[$k$$inline_11067$$].style.top = $lastTopRow$$inline_11075$$.offsetTop + $height$$inline_11071$$ * ($k$$inline_11067$$ - $start$$inline_11077$$ + 1) + "px" : $firstRowCase$$inline_11078$$ && ($databodyContent$$inline_11073$$.childNodes[$k$$inline_11067$$].style.top = $lastTopRow$$inline_11075$$.offsetTop + $height$$inline_11071$$ * ($k$$inline_11067$$ - 1) + "px")
                    }
                    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_11073$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$inline_11073$$) - $totalHeight$$inline_11070$$);
                    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_scroller$.firstChild, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$inline_11073$$) - $totalHeight$$inline_11070$$);
                    (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$);
                    $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
                    (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$.$m_currentScrollTop$);
                    (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$inline_11061$$);
                    this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
                  }, D.$JSCompiler_alias_FALSE$$)
                }
              }else {
                (0,D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$)(this, $keys$$5$$)
              }
            }else {
              $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$ = $keys$$5$$;
              var $row$$inline_8832$$;
              window.Array.isArray($columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$) || ($columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$ = (0,window.Array)($columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$));
              for($i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ = $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = 0;$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ < $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$.length;$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$++) {
                $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ = $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$[$i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$], $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$.row != D.$JSCompiler_alias_NULL$$ && ($key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ = 
                $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$.row, $row$$inline_8832$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$), $row$$inline_8832$$ != D.$JSCompiler_alias_NULL$$ ? ($fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)(this, 
                $row$$inline_8832$$), $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$ = $row$$inline_8832$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, 0 - $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$), $row$$inline_8832$$.parentNode.removeChild($row$$inline_8832$$), $row$$inline_8832$$.style.display = "none") : 
                $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ = this.$m_avgRowHeight$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)(this, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$), $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ != 
                D.$JSCompiler_alias_NULL$$ && ($fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)(this, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$), $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$ = $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$.nextSibling, 
                (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, 0 - $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$), $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$.parentNode.removeChild($key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$), 
                $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$.style.display = "none", this.$m_endRowHeader$ -= 1, this.$m_endRowHeaderPixel$ -= $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$), this.$m_endRow$ -= 1, this.$m_endRowPixel$ -= $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ += 
                $fragment$$4_gap_size$$inline_11088_height$$inline_8834_idx$$inline_11454_key$$inline_8829$$)
              }
              $columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$ = this.$m_databody$.firstChild;
              $i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$ = this.$m_scroller$.firstChild;
              $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$) - $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$;
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnRange$$inline_8817_databodyContent$$inline_8836_idxs$$inline_11455_indexes$$11_keys$$inline_8828_rwp$$inline_11087$$, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$);
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($i$$inline_11453_i$$inline_8830_referenceRow$$inline_11072_scrollerContent$$inline_8837_source$$28$$, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$);
              (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this);
              this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
              (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
              (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
            }
          }
        }else {
          "refresh" === $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ ? (this.empty(), this.refresh(this.$m_root$)) : "sync" === $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$ && ($cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$ = 
          $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$.pageSize, this.$m_fetching$ = {}, this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = this.$m_endColHeader$ = this.$m_startColHeader$ = this.$m_endCol$ = this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = this.$m_endRowHeader$ = this.$m_startRowHeader$ = this.$m_endRow$ = 
          this.$m_startRow$ = 0, this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$, this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$, this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$, this.$m_prevActive$ = this.$m_active$ = this.$m_selection$ = D.$JSCompiler_alias_NULL$$, this.$m_initialized$ ? 
          (this.fetchHeaders("row", 0, this.$m_rowHeader$, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$, {success:function($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$) {
            (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$, 0)
          }}), this.fetchHeaders("column", 0, this.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$) {
            this.$m_colHeader$.firstChild.innerHTML = "";
            this.$handleHeadersFetchSuccess$($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$)
          }}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$, D.$JSCompiler_alias_NULL$$, {success:function($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$) {
            (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$, $key$$inline_11064_operation$$1_rowHeader$$inline_11074_rowHeader$$inline_8839_rowKey$$inline_11068_rowKey$$inline_8831$$, 0)
          }}), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)) : (this.fetchHeaders("column", 0, this.$m_colHeader$), this.fetchHeaders("row", 0, this.$m_rowHeader$, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $cellSet$$8_databodyContentHeight$$inline_8838_i$$inline_11065_indices$$7_pageSize$$inline_8845_rowRange$$inline_8816_rwn$$inline_11085_scrollTop$$inline_8812_totalHeight$$inline_8833$$)))
        }
      }
    }
  }else {
    this.$m_modelEvents$ == D.$JSCompiler_alias_VOID$$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($adjustment$$inline_11086_event$$718_opacity$$inline_11083_referenceRow$$inline_8835$$)
  }
};
D.$DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$9$$, $cellRanges$$1$$, $obj$$367$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleCellsFetchSuccess$($cellSet$$9$$, $cellRanges$$1$$, this.$m_endRow$ > $cellRanges$$1$$[0].start, $obj$$367$$);
  (0,D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$)(this, $cellRanges$$1$$[0].start);
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || (0,D.$JSCompiler_StaticMethods__cleanupViewport$$)(this);
  (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$6$$, $headerRanges$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRanges$$, this.$m_endRowHeader$ > $headerRanges$$.start);
  (0,D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$)(this, $headerRanges$$.start);
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || (0,D.$JSCompiler_StaticMethods__cleanupViewport$$)(this)
};
D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$ = function $$JSCompiler_StaticMethods__scrollRowIntoViewport$$$($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, $index$$163$$) {
  var $row$$29_rowTop$$, $diff$$9_viewportTop$$2$$, $viewportBottom$$3$$;
  $row$$29_rowTop$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_databody$.firstChild.childNodes[$index$$163$$ - $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_startRow$ + 1];
  $row$$29_rowTop$$ != D.$JSCompiler_alias_NULL$$ && ($diff$$9_viewportTop$$2$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_currentScrollTop$, $viewportBottom$$3$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_databody$), $row$$29_rowTop$$ = $row$$29_rowTop$$.offsetTop, $diff$$9_viewportTop$$2$$ -= $row$$29_rowTop$$, 0 < $diff$$9_viewportTop$$2$$ ? 
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, 0, $diff$$9_viewportTop$$2$$) : ($diff$$9_viewportTop$$2$$ = $viewportBottom$$3$$ - $row$$29_rowTop$$, 0 > $diff$$9_viewportTop$$2$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, 0, $diff$$9_viewportTop$$2$$)))
};
D.$JSCompiler_StaticMethods__cleanupViewport$$ = function $$JSCompiler_StaticMethods__cleanupViewport$$$($JSCompiler_StaticMethods__cleanupViewport$self$$) {
  var $viewportTop$$3$$, $viewportBottom$$4$$;
  $viewportTop$$3$$ = $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_currentScrollTop$;
  $viewportBottom$$4$$ = $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$);
  $viewportTop$$3$$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRowPixel$ ? $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods__cleanupViewport$self$$, $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$) : $viewportBottom$$4$$ < $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRowPixel$ && 
  $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods__cleanupViewport$self$$, $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$)
};
D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$ = function $$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $cellSet$$10$$, $obj$$368$$) {
  var $rowRange$$5$$, $columnRange$$5$$;
  $rowRange$$5$$ = {axis:"row", start:$cellSet$$10$$.getStart("row"), count:$cellSet$$10$$.getCount("row")};
  $columnRange$$5$$ = {axis:"column", start:$cellSet$$10$$.getStart("column"), count:$cellSet$$10$$.getCount("column")};
  $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$_handleCellInsertsFetchSuccess$($cellSet$$10$$, [$rowRange$$5$$, $columnRange$$5$$], $obj$$368$$)
};
D.$DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$11$$, $cellRange$$8$$) {
  var $rowStart$$9$$, $databodyContent$$12$$, $renderer$$7$$, $columnBandingInterval$$3$$, $rowIndex$$12$$;
  $rowStart$$9$$ = $cellRange$$8$$[0].start;
  $databodyContent$$12$$ = this.$m_databody$.firstChild;
  $renderer$$7$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
  $rowIndex$$12$$ = $rowStart$$9$$ - this.$m_startRow$;
  var $row$$inline_8855$$ = $databodyContent$$12$$.childNodes[$rowIndex$$12$$ + 1], $columnStart$$inline_8858$$ = this.$m_startCol$;
  $row$$inline_8855$$.style.left = this.getWidth() + "px";
  (0,window.setTimeout)(function() {
    $row$$inline_8855$$.innerHTML = "";
    (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$11$$, $row$$inline_8855$$, $rowIndex$$12$$, $renderer$$7$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$inline_8858$$, D.$JSCompiler_alias_FALSE$$, $columnBandingInterval$$3$$);
    (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
    (0,window.setTimeout)(function() {
      $row$$inline_8855$$.style.left = "0px"
    }, 250);
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this);
    this.$highlightActive$(D.$JSCompiler_alias_FALSE$$)
  }.bind(this), 250)
};
D.$JSCompiler_StaticMethods__getRowByLocalPosition$$ = function $$JSCompiler_StaticMethods__getRowByLocalPosition$$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $pos$$72$$) {
  var $indexes$$inline_8872$$ = {row:$pos$$72$$}, $keys$$inline_8873$$ = {row:D.$JSCompiler_alias_NULL$$, column:D.$JSCompiler_alias_NULL$$};
  $indexes$$inline_8872$$.row != D.$JSCompiler_alias_NULL$$ && ($keys$$inline_8873$$.row = $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$_getKey$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_databody$.firstChild.childNodes[$indexes$$inline_8872$$.row - $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_startRow$ + 1]));
  $indexes$$inline_8872$$.column != D.$JSCompiler_alias_NULL$$ && ($keys$$inline_8873$$.column = $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$_getKey$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_colHeader$.firstChild.childNodes[$indexes$$inline_8872$$.column - $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_startColHeader$]));
  return(0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $keys$$inline_8873$$.$row$)
};
D.$JSCompiler_StaticMethods__collapseRowsWithAnimation$$ = function $$JSCompiler_StaticMethods__collapseRowsWithAnimation$$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$11$$) {
  var $key$$120_rowHeader$$12_rowKey$$23$$, $i$$849_row$$inline_11101$$, $j$$124$$, $k$$14$$, $row$$34$$, $adjustment$$inline_11102_height$$151$$, $referenceRow$$5$$, $databodyContent$$15$$, $clickedRow$$, $keyAttribute$$2$$, $start$$46$$, $transition_duration$$2$$, $transition_delay$$1$$, $transition_timing$$1$$, $transform$$6$$;
  $transition_duration$$2$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
  $transition_delay$$1$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay");
  $transition_timing$$1$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
  $transform$$6$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
  $databodyContent$$15$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_databody$.firstChild;
  $clickedRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$11$$[0].row).previousSibling;
  $keyAttribute$$2$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_resources$.getMappedAttribute("key");
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)((0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$11$$[0].row).parentNode, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 1E4);
  for($i$$849_row$$inline_11101$$ = $keys$$11$$.length - 1;0 <= $i$$849_row$$inline_11101$$;$i$$849_row$$inline_11101$$--) {
    $key$$120_rowHeader$$12_rowKey$$23$$ = $keys$$11$$[$i$$849_row$$inline_11101$$], $key$$120_rowHeader$$12_rowKey$$23$$.row && ($key$$120_rowHeader$$12_rowKey$$23$$ = $key$$120_rowHeader$$12_rowKey$$23$$.row, $row$$34$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $key$$120_rowHeader$$12_rowKey$$23$$), $row$$34$$ != D.$JSCompiler_alias_NULL$$ ? ($adjustment$$inline_11102_height$$151$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, 
    $row$$34$$), $referenceRow$$5$$ = $row$$34$$.nextSibling, (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($row$$34$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), "-1" + ($i$$849_row$$inline_11101$$ + 1)), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($row$$34$$, "300ms", 0, "ease-out", "-" + $row$$34$$.offsetTop), $i$$849_row$$inline_11101$$ == $keys$$11$$.length - 1 && $row$$34$$.addEventListener("transitionend", function() {
      for($j$$124$$ = 0;$j$$124$$ < $keys$$11$$.length;$j$$124$$++) {
        $keys$$11$$[$j$$124$$].row && ($row$$34$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$11$$[$j$$124$$].row), $row$$34$$.parentNode.removeChild($row$$34$$), $row$$34$$.style.display = "none")
      }
      (0,window.setTimeout)(function() {
        $start$$46$$ = -1;
        for($k$$14$$ = 1;$k$$14$$ < $databodyContent$$15$$.childElementCount;$k$$14$$++) {
          $clickedRow$$.attributes[$keyAttribute$$2$$] && $clickedRow$$.attributes[$keyAttribute$$2$$].value == $databodyContent$$15$$.childNodes[$k$$14$$].attributes[$keyAttribute$$2$$].value && ($start$$46$$ = $k$$14$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$15$$.childNodes[$k$$14$$], (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove"), $databodyContent$$15$$.children[$k$$14$$].style[$transform$$6$$] && ((0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$15$$.childNodes[$k$$14$$], 
          $transition_duration$$2$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$15$$.childNodes[$k$$14$$], $transition_delay$$1$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$15$$.childNodes[$k$$14$$], $transition_timing$$1$$, "linear", "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$15$$.childNodes[$k$$14$$], $transform$$6$$, 0, "remove")), 0 < $start$$46$$ && ($databodyContent$$15$$.childNodes[$k$$14$$].style.top = 
          $clickedRow$$.offsetTop + (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$) * ($k$$14$$ - $start$$46$$ + 1) + "px")
        }
      }, 0);
      (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
      $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
      (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);
      (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
      this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
    }, D.$JSCompiler_alias_FALSE$$)) : $adjustment$$inline_11102_height$$151$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_avgRowHeight$, $key$$120_rowHeader$$12_rowKey$$23$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $key$$120_rowHeader$$12_rowKey$$23$$), $key$$120_rowHeader$$12_rowKey$$23$$ != D.$JSCompiler_alias_NULL$$ && ($adjustment$$inline_11102_height$$151$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, 
    $key$$120_rowHeader$$12_rowKey$$23$$), $referenceRow$$5$$ = $key$$120_rowHeader$$12_rowKey$$23$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$5$$, 0 - $adjustment$$inline_11102_height$$151$$), $key$$120_rowHeader$$12_rowKey$$23$$.parentNode.removeChild($key$$120_rowHeader$$12_rowKey$$23$$), $key$$120_rowHeader$$12_rowKey$$23$$.style.display = "none", $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeader$ -= 1, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeaderPixel$ -= 
    $adjustment$$inline_11102_height$$151$$), $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRow$ -= 1, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ -= $adjustment$$inline_11102_height$$151$$)
  }
  $i$$849_row$$inline_11101$$ = $referenceRow$$5$$;
  $adjustment$$inline_11102_height$$151$$ *= $keys$$11$$.length;
  var $i$$inline_11103$$, $databodyContent$$inline_11104$$, $scrollerContent$$inline_11105$$, $databodyContentHeight$$inline_11106$$;
  for($databodyContentHeight$$inline_11106$$ = 0;$i$$849_row$$inline_11101$$;) {
    (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($i$$849_row$$inline_11101$$, "300ms", "0ms", "linear", "-" + $adjustment$$inline_11102_height$$151$$), $i$$849_row$$inline_11101$$.nextSibling || $i$$849_row$$inline_11101$$.addEventListener("transitionend", function() {
      $databodyContent$$inline_11104$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_databody$.firstChild;
      $scrollerContent$$inline_11105$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_scroller$.firstChild;
      for($i$$inline_11103$$ = 1;$i$$inline_11103$$ < $databodyContent$$inline_11104$$.childElementCount;$i$$inline_11103$$++) {
        $databodyContentHeight$$inline_11106$$ += $databodyContent$$inline_11104$$.childNodes[$i$$inline_11103$$].clientHeight
      }
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_11104$$, $databodyContentHeight$$inline_11106$$);
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_11105$$, $databodyContentHeight$$inline_11106$$);
      (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
      $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
      (0,D.$JSCompiler_StaticMethods_fillViewport$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);
      (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$)
    }, D.$JSCompiler_alias_FALSE$$), $i$$849_row$$inline_11101$$ = $i$$849_row$$inline_11101$$.nextSibling
  }
};
D.$JSCompiler_StaticMethods__findRowByKey$$ = function $$JSCompiler_StaticMethods__findRowByKey$$$($JSCompiler_StaticMethods__findRowByKey$self$$, $key$$121$$) {
  var $rows$$8$$, $row$$36$$, $i$$851$$, $rowKey$$24$$, $keyAttribute$$3$$;
  if($JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$8$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild.childNodes;
  $keyAttribute$$3$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$851$$ = 1;$i$$851$$ < $rows$$8$$.length;$i$$851$$++) {
    if($row$$36$$ = $rows$$8$$[$i$$851$$], $rowKey$$24$$ = $row$$36$$.getAttribute($keyAttribute$$3$$), $rowKey$$24$$ == $key$$121$$) {
      return $row$$36$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findRowHeaderByKey$$ = function $$JSCompiler_StaticMethods__findRowHeaderByKey$$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $key$$122$$) {
  var $rows$$9$$, $row$$37$$, $i$$852$$, $rowKey$$25$$, $keyAttribute$$4$$;
  if($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$9$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$.firstChild.childNodes;
  $keyAttribute$$4$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$852$$ = 1;$i$$852$$ < $rows$$9$$.length;$i$$852$$++) {
    if($row$$37$$ = $rows$$9$$[$i$$852$$], $rowKey$$25$$ = $row$$37$$.getAttribute($keyAttribute$$4$$), $rowKey$$25$$ == $key$$122$$) {
      return $row$$37$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$ = function $$JSCompiler_StaticMethods__findColumnHeaderByKey$$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $key$$123$$) {
  var $columns$$3$$, $column$$9$$, $i$$853$$, $columnKey$$, $keyAttribute$$5$$;
  if($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $columns$$3$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$.firstChild.childNodes;
  $keyAttribute$$5$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$853$$ = 0;$i$$853$$ < $columns$$3$$.length;$i$$853$$++) {
    if($column$$9$$ = $columns$$3$$[$i$$853$$], $columnKey$$ = $column$$9$$.getAttribute($keyAttribute$$5$$), $columnKey$$ == $key$$123$$) {
      return $column$$9$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.setActive = function $$DvtDataGrid$$$$setActive$($active$$2$$, $event$$720$$, $callback$$154$$) {
  $active$$2$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, {row:$active$$2$$.row, column:$active$$2$$.column}, this.$_setActiveCallback$.bind(this, $event$$720$$, $callback$$154$$)) : (this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $active$$2$$, (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this))
};
D.$DvtDataGrid$$.prototype.$_setActiveCallback$ = function $$DvtDataGrid$$$$$_setActiveCallback$$($event$$721$$, $callback$$155$$, $keys$$12$$, $indexes$$14$$) {
  if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ || $keys$$12$$.row != this.$m_active$.rowKey || $keys$$12$$.column != this.$m_active$.columnKey) {
    $indexes$$14$$.rowKey = $keys$$12$$.row, $indexes$$14$$.columnKey = $keys$$12$$.column, this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $indexes$$14$$, (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this), this.fireEvent("active", {event:$event$$721$$, ui:{previousActiveKey:this.$m_prevActive$, activeKey:this.$m_active$}})
  }
  $callback$$155$$.call(this)
};
D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickActive$$$($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$723$$) {
  var $cell$$23$$, $index$$164$$;
  $cell$$23$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$723$$.target);
  $cell$$23$$ != D.$JSCompiler_alias_NULL$$ && ($index$$164$$ = $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.createIndex($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$getRowIndex$($cell$$23$$.parentNode), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$getCellIndex$($cell$$23$$)));
  $index$$164$$ != D.$JSCompiler_alias_NULL$$ && $index$$164$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, -1), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $index$$164$$), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$activeAndFocus$($index$$164$$, 
  $event$$723$$))
};
D.$DvtDataGrid$$.prototype.$activeAndFocus$ = function $$DvtDataGrid$$$$$activeAndFocus$$($index$$165$$, $event$$724$$) {
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)(this);
  this.setActive($index$$165$$, $event$$724$$, this.$highlightActive$.bind(this, D.$JSCompiler_alias_VOID$$))
};
D.$DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$38$$) {
  for(var $index$$166$$ = this.$m_startRow$;$row$$38$$.previousSibling;) {
    $index$$166$$ += 1, $row$$38$$ = $row$$38$$.previousSibling
  }
  return $index$$166$$ - 1
};
D.$DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$24$$) {
  for(var $index$$167$$ = this.$m_startCol$;$cell$$24$$.previousSibling;) {
    $index$$167$$ += 1, $cell$$24$$ = $cell$$24$$.previousSibling
  }
  return $index$$167$$
};
D.$JSCompiler_StaticMethods_getHeaderCellIndex$$ = function $$JSCompiler_StaticMethods_getHeaderCellIndex$$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$22$$) {
  var $axis$$56$$, $index$$168$$;
  $axis$$56$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$22$$);
  "row" === $axis$$56$$ ? ($index$$168$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startRowHeader$ - 1, $header$$22$$ = $header$$22$$.parentNode) : "column" === $axis$$56$$ && ($index$$168$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startColHeader$);
  for(;$header$$22$$.previousSibling;) {
    $index$$168$$ += 1, $header$$22$$ = $header$$22$$.previousSibling
  }
  return $index$$168$$
};
D.$JSCompiler_StaticMethods_getHeaderCellAxis$$ = function $$JSCompiler_StaticMethods_getHeaderCellAxis$$$($JSCompiler_StaticMethods_getHeaderCellAxis$self$$, $header$$23$$) {
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$23$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("colheadercell")) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$23$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("rowheadercell")) ? "row" : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findCell$$ = function $$JSCompiler_StaticMethods_findCell$$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$57$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$57$$, "cell")
};
D.$DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$58$$, $key$$124$$, $className$$14$$) {
  if($elem$$58$$ == D.$JSCompiler_alias_NULL$$ || $elem$$58$$ == this.$m_root$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $className$$14$$ == D.$JSCompiler_alias_VOID$$ && ($className$$14$$ = this.getMappedStyle($key$$124$$));
  return $className$$14$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$58$$, $className$$14$$) ? $elem$$58$$ : this.find($elem$$58$$.parentNode, $key$$124$$, $className$$14$$)
};
D.$DvtDataGrid$$.prototype.$highlightActive$ = function $$DvtDataGrid$$$$$highlightActive$$($focus$$) {
  var $cell$$25$$, $skip$$1$$;
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($cell$$25$$ = (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, this.$m_active$, "focus"));
  $cell$$25$$ != D.$JSCompiler_alias_NULL$$ && (this.$m_prevActive$ != D.$JSCompiler_alias_NULL$$ && this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_prevActive$.row === this.$m_active$.row ? $skip$$1$$ = "row" : this.$m_prevActive$.column === this.$m_active$.column && ($skip$$1$$ = "column")), (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)(this, this.$m_active$, $skip$$1$$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)(this, $cell$$25$$, $focus$$ === D.$JSCompiler_alias_VOID$$ || 
  $focus$$ === D.$JSCompiler_alias_TRUE$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_VOID$$, $skip$$1$$))
};
D.$JSCompiler_StaticMethods_unhighlightActive$$ = function $$JSCompiler_StaticMethods_unhighlightActive$$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $selectActive$$) {
  var $cell$$26$$, $selectedClassName$$;
  $cell$$26$$ = (0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, D.$JSCompiler_alias_TRUE$$);
  $selectActive$$ && ($selectedClassName$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.getMappedStyle("selected"), $selectedClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, $selectedClassName$$));
  $cell$$26$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$26$$)
};
D.$JSCompiler_StaticMethods_highlightIndex$$ = function $$JSCompiler_StaticMethods_highlightIndex$$$($JSCompiler_StaticMethods_highlightIndex$self$$, $index$$169$$, $className$$15_style$$111$$) {
  var $cell$$27_range$$10_singleCell$$;
  $cell$$27_range$$10_singleCell$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.createRange($index$$169$$);
  $cell$$27_range$$10_singleCell$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$27_range$$10_singleCell$$);
  if(!($cell$$27_range$$10_singleCell$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$27_range$$10_singleCell$$.length)) {
    return $className$$15_style$$111$$ == D.$JSCompiler_alias_VOID$$ && ($className$$15_style$$111$$ = "selected"), $cell$$27_range$$10_singleCell$$ = $cell$$27_range$$10_singleCell$$[0], $className$$15_style$$111$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.getMappedStyle($className$$15_style$$111$$), $className$$15_style$$111$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($cell$$27_range$$10_singleCell$$, $className$$15_style$$111$$), $index$$169$$.row && 
    $index$$169$$.column && (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$27_range$$10_singleCell$$)), $cell$$27_range$$10_singleCell$$
  }
};
D.$JSCompiler_StaticMethods_unhighlightIndex$$ = function $$JSCompiler_StaticMethods_unhighlightIndex$$$($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$28_index$$170_range$$11_singleCell$$1$$, $activeOnly$$) {
  var $activeClassName$$;
  $cell$$28_index$$170_range$$11_singleCell$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.createRange($cell$$28_index$$170_range$$11_singleCell$$1$$);
  $cell$$28_index$$170_range$$11_singleCell$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$28_index$$170_range$$11_singleCell$$1$$);
  if(!($cell$$28_index$$170_range$$11_singleCell$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$28_index$$170_range$$11_singleCell$$1$$.length)) {
    $cell$$28_index$$170_range$$11_singleCell$$1$$ = $cell$$28_index$$170_range$$11_singleCell$$1$$[0];
    $activeClassName$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("focus");
    $activeClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$28_index$$170_range$$11_singleCell$$1$$, $activeClassName$$);
    if($activeOnly$$ == D.$JSCompiler_alias_VOID$$ || !$activeOnly$$) {
      $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("selected"), $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$28_index$$170_range$$11_singleCell$$1$$, $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$), (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$28_index$$170_range$$11_singleCell$$1$$))
    }
    return $cell$$28_index$$170_range$$11_singleCell$$1$$
  }
};
D.$JSCompiler_StaticMethods_setAriaProperties$$ = function $$JSCompiler_StaticMethods_setAriaProperties$$$($JSCompiler_StaticMethods_setAriaProperties$self$$, $cell$$29$$, $focus$$1$$, $colIndex$$inline_8893_skip$$2$$) {
  $cell$$29$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active"));
  $cell$$29$$.setAttribute("tabIndex", 0);
  var $label$$inline_8889$$, $columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$, $rows$$inline_8892$$;
  $label$$inline_8889$$ = "";
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && "row" != $colIndex$$inline_8893_skip$$2$$ && ($columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$ = $cell$$29$$.parentNode, $columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$), -1 < $columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$ && ($rows$$inline_8892$$ = 
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$.firstChild.childNodes, $columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$ < $rows$$inline_8892$$.length && ($label$$inline_8889$$ = $rows$$inline_8892$$[$columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$].id)));
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && "column" != $colIndex$$inline_8893_skip$$2$$ && ($colIndex$$inline_8893_skip$$2$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$29$$), -1 < $colIndex$$inline_8893_skip$$2$$ && ($columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$ = $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$.firstChild.childNodes, $colIndex$$inline_8893_skip$$2$$ < $columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$.length && 
  ($label$$inline_8889$$ = "" == $label$$inline_8889$$ ? $columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$[$colIndex$$inline_8893_skip$$2$$].id : [$label$$inline_8889$$, $columns$$inline_8894_row$$inline_8890_rowIndex$$inline_8891$$[$colIndex$$inline_8893_skip$$2$$].id].join(" "))));
  $label$$inline_8889$$ = "" == $label$$inline_8889$$ ? (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active") : [$label$$inline_8889$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active")].join(" ");
  $label$$inline_8889$$ = [(0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "context"), $label$$inline_8889$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "state")].join(" ");
  $cell$$29$$.setAttribute("aria-labelledby", $label$$inline_8889$$);
  $focus$$1$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ != $cell$$29$$) && $cell$$29$$.focus()
};
D.$JSCompiler_StaticMethods_unsetAriaProperties$$ = function $$JSCompiler_StaticMethods_unsetAriaProperties$$$($cell$$30$$) {
  $cell$$30$$.setAttribute("tabIndex", -1);
  $cell$$30$$.removeAttribute("id");
  $cell$$30$$.removeAttribute("aria-labelledby")
};
D.$JSCompiler_StaticMethods_getHeaderFromCell$$ = function $$JSCompiler_StaticMethods_getHeaderFromCell$$$($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$, $cell$$32_colIndex$$1_row$$40_rowIndex$$15$$, $axis$$57$$) {
  if("row" === $axis$$57$$) {
    if($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$32_colIndex$$1_row$$40_rowIndex$$15$$ = $cell$$32_colIndex$$1_row$$40_rowIndex$$15$$.parentNode, $cell$$32_colIndex$$1_row$$40_rowIndex$$15$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$32_colIndex$$1_row$$40_rowIndex$$15$$), -1 < $cell$$32_colIndex$$1_row$$40_rowIndex$$15$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$.$m_rowHeader$.firstChild.childNodes, 
    $cell$$32_colIndex$$1_row$$40_rowIndex$$15$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$[$cell$$32_colIndex$$1_row$$40_rowIndex$$15$$]
    }
  }else {
    if("column" === $axis$$57$$ && $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$32_colIndex$$1_row$$40_rowIndex$$15$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$32_colIndex$$1_row$$40_rowIndex$$15$$), -1 < $cell$$32_colIndex$$1_row$$40_rowIndex$$15$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$.$m_colHeader$.firstChild.childNodes, 
    $cell$$32_colIndex$$1_row$$40_rowIndex$$15$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$5_rows$$11$$[$cell$$32_colIndex$$1_row$$40_rowIndex$$15$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findIndexOf$$ = function $$JSCompiler_StaticMethods_findIndexOf$$$($elem$$59$$) {
  var $child$$89$$, $children$$32$$, $index$$171$$, $i$$854$$;
  $children$$32$$ = $elem$$59$$.parentNode.childNodes;
  $index$$171$$ = -1;
  for($i$$854$$ = 0;$i$$854$$ < $children$$32$$.length;$i$$854$$ += 1) {
    $child$$89$$ = $children$$32$$[$i$$854$$];
    if($child$$89$$ === $elem$$59$$) {
      return $index$$171$$ + 1
    }
    "DIV" == $child$$89$$.nodeName && $index$$171$$++
  }
  return $index$$171$$
};
D.$DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$5$$, $endColumn_endIndex$$7$$, $startKey$$, $endKey$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $startRowKey$$, $endRowKey$$, $startColumnKey$$, $endColumnKey$$;
  $endColumn_endIndex$$7$$ && ($startIndex$$5$$.row < $endColumn_endIndex$$7$$.row || -1 == $endColumn_endIndex$$7$$.row ? ($startRow$$3$$ = $startIndex$$5$$.row, $endRow$$ = $endColumn_endIndex$$7$$.row, $startKey$$ && ($startRowKey$$ = $startKey$$.row, $endRowKey$$ = $endKey$$.row)) : ($startRow$$3$$ = $endColumn_endIndex$$7$$.row, $endRow$$ = $startIndex$$5$$.row, $startKey$$ && ($startRowKey$$ = $endKey$$.row, $endRowKey$$ = $startKey$$.row)), !(0,window.isNaN)($startIndex$$5$$.column) && !(0,window.isNaN)($endColumn_endIndex$$7$$.column) ? 
  ($startIndex$$5$$.column < $endColumn_endIndex$$7$$.column || -1 == $endColumn_endIndex$$7$$.column ? ($startColumn$$ = $startIndex$$5$$.column, $endColumn_endIndex$$7$$ = $endColumn_endIndex$$7$$.column, $startKey$$ && ($startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column)) : ($startColumn$$ = $endColumn_endIndex$$7$$.column, $endColumn_endIndex$$7$$ = $startIndex$$5$$.column, $startKey$$ && ($startColumnKey$$ = $endKey$$.column, $endColumnKey$$ = $startKey$$.column)), $startIndex$$5$$ = 
  {row:$startRow$$3$$, column:$startColumn$$}, $endColumn_endIndex$$7$$ = {row:$endRow$$, column:$endColumn_endIndex$$7$$}) : ($startIndex$$5$$ = {row:$startRow$$3$$}, $endColumn_endIndex$$7$$ = {row:$endRow$$}), $startKey$$ && ($startKey$$ = {row:$startRowKey$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$, column:$endColumnKey$$}));
  return $startKey$$ ? {startIndex:$startIndex$$5$$, endIndex:$endColumn_endIndex$$7$$, startKey:$startKey$$, endKey:$endKey$$} : {startIndex:$startIndex$$5$$, endIndex:$endColumn_endIndex$$7$$}
};
D.$DvtDataGrid$$.prototype.$_createRangeStartKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeStartKeyCallback$$($endIndex$$9$$, $callback$$157$$, $startKey$$1$$, $startIndex$$7$$) {
  $endIndex$$9$$ === $startIndex$$7$$ ? this.$_createRangeEndKeyCallback$($startKey$$1$$, $startIndex$$7$$, $callback$$157$$, $startKey$$1$$, $startIndex$$7$$) : $endIndex$$9$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, $endIndex$$9$$, this.$_createRangeEndKeyCallback$.bind(this, $startKey$$1$$, $startIndex$$7$$, $callback$$157$$)) : $callback$$157$$.call(this, {startIndex:$startIndex$$7$$, endIndex:$startIndex$$7$$, startKey:$startKey$$1$$, endKey:$startKey$$1$$})
};
D.$DvtDataGrid$$.prototype.$_createRangeEndKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeEndKeyCallback$$($startKey$$2$$, $startIndex$$8$$, $callback$$158$$, $endKey$$1$$, $endIndex$$10$$) {
  $callback$$158$$.call(this, this.createRange($startIndex$$8$$, $endIndex$$10$$, $startKey$$2$$, $endKey$$1$$))
};
D.$JSCompiler_StaticMethods_getEndIndex$$ = function $$JSCompiler_StaticMethods_getEndIndex$$$($range$$12$$) {
  return $range$$12$$.endIndex == D.$JSCompiler_alias_NULL$$ ? $range$$12$$.startIndex : $range$$12$$.endIndex
};
D.$JSCompiler_StaticMethods_getElementsInRange$$ = function $$JSCompiler_StaticMethods_getElementsInRange$$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$, $range$$13_rangeEndRow$$1$$, $nodes$$17_startRow$$4$$, $endRow$$1_rows$$12$$) {
  var $j$$125_startIndex$$9$$, $cell$$33_endIndex$$11$$, $columns$$6_rangeStartRow$$1$$, $rangeStartColumn$$1_row$$41$$, $rangeEndColumn$$1$$;
  $nodes$$17_startRow$$4$$ == D.$JSCompiler_alias_VOID$$ && ($nodes$$17_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_startRow$);
  $endRow$$1_rows$$12$$ == D.$JSCompiler_alias_VOID$$ && ($endRow$$1_rows$$12$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_endRow$);
  $j$$125_startIndex$$9$$ = $range$$13_rangeEndRow$$1$$.startIndex;
  $cell$$33_endIndex$$11$$ = (0,D.$JSCompiler_StaticMethods_getEndIndex$$)($range$$13_rangeEndRow$$1$$);
  $columns$$6_rangeStartRow$$1$$ = $j$$125_startIndex$$9$$.row;
  $range$$13_rangeEndRow$$1$$ = $cell$$33_endIndex$$11$$.row;
  -1 == $range$$13_rangeEndRow$$1$$ && ($range$$13_rangeEndRow$$1$$ = window.Number.MAX_VALUE);
  if($endRow$$1_rows$$12$$ < $columns$$6_rangeStartRow$$1$$ || $range$$13_rangeEndRow$$1$$ < $nodes$$17_startRow$$4$$ || !(0,window.isNaN)($j$$125_startIndex$$9$$.column) && !(0,window.isNaN)($cell$$33_endIndex$$11$$.column) && ($rangeStartColumn$$1_row$$41$$ = $j$$125_startIndex$$9$$.column, $rangeEndColumn$$1$$ = $cell$$33_endIndex$$11$$.column, -1 == $rangeEndColumn$$1$$ && ($rangeEndColumn$$1$$ = window.Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_endCol$ < 
  $rangeStartColumn$$1_row$$41$$ || $rangeEndColumn$$1$$ < $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_startCol$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $nodes$$17_startRow$$4$$ = [];
  $endRow$$1_rows$$12$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_databody$.firstChild.childNodes;
  $columns$$6_rangeStartRow$$1$$ = window.Math.max(0, $columns$$6_rangeStartRow$$1$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_startRow$);
  $range$$13_rangeEndRow$$1$$ = window.Math.min($endRow$$1_rows$$12$$.length - 1, $range$$13_rangeEndRow$$1$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_startRow$ + 1);
  if(!(0,window.isNaN)($rangeStartColumn$$1_row$$41$$) && !(0,window.isNaN)($rangeEndColumn$$1$$)) {
    $rangeStartColumn$$1_row$$41$$ = window.Math.max(0, $rangeStartColumn$$1_row$$41$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_startCol$);
    $rangeEndColumn$$1$$ = $rangeEndColumn$$1$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$.$m_startCol$ + 1;
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$ = $columns$$6_rangeStartRow$$1$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$ < $range$$13_rangeEndRow$$1$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$ += 1) {
      $columns$$6_rangeStartRow$$1$$ = $endRow$$1_rows$$12$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$ + 1].childNodes;
      for($j$$125_startIndex$$9$$ = $rangeStartColumn$$1_row$$41$$;$j$$125_startIndex$$9$$ < window.Math.min($columns$$6_rangeStartRow$$1$$.length, $rangeEndColumn$$1$$);$j$$125_startIndex$$9$$ += 1) {
        $cell$$33_endIndex$$11$$ = $columns$$6_rangeStartRow$$1$$[$j$$125_startIndex$$9$$], $nodes$$17_startRow$$4$$.push($cell$$33_endIndex$$11$$)
      }
    }
  }else {
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$ = $columns$$6_rangeStartRow$$1$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$ < $range$$13_rangeEndRow$$1$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$ += 1) {
      $rangeStartColumn$$1_row$$41$$ = $endRow$$1_rows$$12$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$855$$ + 1], $nodes$$17_startRow$$4$$.push($rangeStartColumn$$1_row$$41$$)
    }
  }
  return $nodes$$17_startRow$$4$$
};
D.$JSCompiler_StaticMethods_readCurrentContent$$ = function $$JSCompiler_StaticMethods_readCurrentContent$$$($JSCompiler_StaticMethods_readCurrentContent$self$$) {
  var $current$$8_subid$$, $cell$$34_currentCell_range$$14$$, $needToModify$$, $labelledBy$$;
  $current$$8_subid$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$;
  (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_readCurrentContent$self$$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_readCurrentContent$self$$) && $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$ != D.$JSCompiler_alias_NULL$$ && ($current$$8_subid$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$);
  $current$$8_subid$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$34_currentCell_range$$14$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.createRange($current$$8_subid$$), $cell$$34_currentCell_range$$14$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$34_currentCell_range$$14$$), $cell$$34_currentCell_range$$14$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$34_currentCell_range$$14$$.length || ($cell$$34_currentCell_range$$14$$ = 
  $cell$$34_currentCell_range$$14$$[0], (0,D.$JSCompiler_StaticMethods__updateContextInfo$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $current$$8_subid$$), $current$$8_subid$$ = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, "placeHolder"), $needToModify$$ = D.$JSCompiler_alias_TRUE$$, $labelledBy$$ = $cell$$34_currentCell_range$$14$$.getAttribute("aria-labelledby"), $labelledBy$$ != D.$JSCompiler_alias_NULL$$ && -1 != $labelledBy$$.indexOf($current$$8_subid$$) && 
  ($needToModify$$ = D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$34_currentCell_range$$14$$, D.$JSCompiler_alias_FALSE$$), $needToModify$$ ? ($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$.innerHTML = "\x26nbsp", $labelledBy$$ = $cell$$34_currentCell_range$$14$$.getAttribute("aria-labelledby"), $cell$$34_currentCell_range$$14$$.setAttribute("aria-labelledby", $labelledBy$$ + " " + 
  $current$$8_subid$$)) : $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$.innerHTML = "", $cell$$34_currentCell_range$$14$$.focus()))
};
D.$JSCompiler_StaticMethods_isArrowKey$$ = function $$JSCompiler_StaticMethods_isArrowKey$$$($keyCode$$40$$) {
  return 38 == $keyCode$$40$$ || 40 == $keyCode$$40$$ || 37 == $keyCode$$40$$ || 39 == $keyCode$$40$$
};
D.$DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$42$$, $column$$10$$) {
  return $row$$42$$ != D.$JSCompiler_alias_NULL$$ ? $column$$10$$ != D.$JSCompiler_alias_NULL$$ ? {row:$row$$42$$, column:$column$$10$$} : {row:$row$$42$$} : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$ = function $$JSCompiler_StaticMethods_setHeaderAriaProperties$$$($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $header$$24$$) {
  var $labelledBy$$1$$, $key$$125$$, $direction$$41$$;
  $labelledBy$$1$$ = $header$$24$$.id;
  $direction$$41$$ = $header$$24$$.getAttribute($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_resources$.getMappedAttribute("sortDir"));
  "ascending" === $direction$$41$$ ? ($key$$125$$ = "accessibleSortAscending", $labelledBy$$1$$ = $labelledBy$$1$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, "state")) : "descending" === $direction$$41$$ && ($key$$125$$ = "accessibleSortDescending", $labelledBy$$1$$ = $labelledBy$$1$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, "state"));
  $key$$125$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $key$$125$$, {id:""});
  $header$$24$$.setAttribute("tabIndex", 0);
  $header$$24$$.setAttribute("aria-labelledby", $labelledBy$$1$$);
  $header$$24$$.focus()
};
D.$JSCompiler_StaticMethods__setActiveHeader$$ = function $$JSCompiler_StaticMethods__setActiveHeader$$$($JSCompiler_StaticMethods__setActiveHeader$self$$, $index$$174$$, $elem$$63$$, $axis$$60$$) {
  var $activeClassName$$1$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.getMappedStyle("focus");
  if($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem != D.$JSCompiler_alias_NULL$$) {
    "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$) : (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$);
    var $header$$inline_8896$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem;
    $header$$inline_8896$$.setAttribute("tabIndex", -1);
    $header$$inline_8896$$.removeAttribute("aria-labelledby")
  }
  $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.axis = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.index = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$.elem = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem);
  -1 != $index$$174$$ ? ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ = {}, $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ = {}), $axis$$60$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis = $axis$$60$$), $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index = $index$$174$$, 
  $elem$$63$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem = $elem$$63$$, "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$), (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)($JSCompiler_StaticMethods__setActiveHeader$self$$)) : 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$), (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($JSCompiler_StaticMethods__setActiveHeader$self$$, $elem$$63$$))) : $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_prevActiveHeader$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__scrollToActiveHeader$$ = function $$JSCompiler_StaticMethods__scrollToActiveHeader$$$($JSCompiler_StaticMethods__scrollToActiveHeader$self$$) {
  var $axis$$61$$, $index$$175$$, $elem$$64$$, $indexes$$15$$;
  $axis$$61$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.axis;
  $index$$175$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.index;
  $elem$$64$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.elem;
  "column" === $axis$$61$$ ? $indexes$$15$$ = {row:0, column:$index$$175$$} : "row" === $axis$$61$$ && ($indexes$$15$$ = {row:$index$$175$$, column:0});
  (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $indexes$$15$$);
  $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ ? ($elem$$64$$.setAttribute("tabIndex", 0), $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ = $elem$$64$$) : $elem$$64$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $elem$$64$$)
};
D.$JSCompiler_StaticMethods_handleCellArrowKeys$$ = function $$JSCompiler_StaticMethods_handleCellArrowKeys$$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $isExtend$$, $event$$729$$) {
  var $currentCellIndex$$, $row$$43$$, $column$$11$$, $processed$$4$$, $focusFunc$$;
  if(!(0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$)) {
    return D.$JSCompiler_alias_TRUE$$
  }
  $currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$;
  if($currentCellIndex$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_resources$.isRTLMode() && (37 == $keyCode$$43_newCellIndex$$2$$ ? $keyCode$$43_newCellIndex$$2$$ = 39 : 39 == $keyCode$$43_newCellIndex$$2$$ && ($keyCode$$43_newCellIndex$$2$$ = 37));
    $focusFunc$$ = (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $processed$$4$$ = D.$JSCompiler_alias_FALSE$$;
    $row$$43$$ = $currentCellIndex$$.row;
    $column$$11$$ = $currentCellIndex$$.column;
    switch($keyCode$$43_newCellIndex$$2$$) {
      case 37:
        0 < $column$$11$$ ? ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$43_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$11$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$43_newCellIndex$$2$$, 
        $event$$729$$)) : ($keyCode$$43_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$43$$, $column$$11$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $event$$729$$) : $focusFunc$$($keyCode$$43_newCellIndex$$2$$, 
        $event$$729$$), 0 === $column$$11$$ - 1 && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstColumn")), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$) : $isExtend$$ || ((0,D.$JSCompiler_StaticMethods__focusRowHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$43$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeader$.firstChild && 
        ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$));
        break;
      case 39:
        (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$11$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$729$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$11$$) || ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$)) : ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? 
        ($keyCode$$43_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$11$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$43_newCellIndex$$2$$, $event$$729$$)) : ($keyCode$$43_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$43$$, 
        $column$$11$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $event$$729$$) : $focusFunc$$($keyCode$$43_newCellIndex$$2$$, $event$$729$$), (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $column$$11$$ + 1) && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleLastColumn")), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 38:
        0 < $row$$43$$ ? ($keyCode$$43_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$43$$ - 1, $column$$11$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $event$$729$$) : $focusFunc$$($keyCode$$43_newCellIndex$$2$$, 
        $event$$729$$), 0 === $row$$43$$ - 1 && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstRow"), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$) : $isExtend$$ || ((0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$11$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 40:
        (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$43$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$729$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$43$$) || ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$)) : ($keyCode$$43_newCellIndex$$2$$ = 
        $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$43$$ + 1, $column$$11$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$, $event$$729$$) : $focusFunc$$($keyCode$$43_newCellIndex$$2$$, $event$$729$$), (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $row$$43$$ + 1) && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleLastRow"), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 36:
        $keyCode$$43_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$43$$, 0);
        $focusFunc$$($keyCode$$43_newCellIndex$$2$$, $event$$729$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 35:
        $keyCode$$43_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$43$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$ - 1)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$43$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 
        1));
        $focusFunc$$($keyCode$$43_newCellIndex$$2$$, $event$$729$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 33:
        $keyCode$$43_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(0, $column$$11$$);
        $focusFunc$$($keyCode$$43_newCellIndex$$2$$, $event$$729$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 34:
        $keyCode$$43_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endRow$ - 1), $column$$11$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") - 1), 
        $column$$11$$), $focusFunc$$($keyCode$$43_newCellIndex$$2$$, $event$$729$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$43_newCellIndex$$2$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$
    }
    return $processed$$4$$
  }
};
D.$JSCompiler_StaticMethods__focusColumnHeader$$ = function $$JSCompiler_StaticMethods__focusColumnHeader$$$($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$8$$) {
  var $column$$12_relIndex$$, $columns$$7$$;
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild && ($column$$12_relIndex$$ = $columnIndex$$8$$ - $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_startColHeader$, $columns$$7$$ = $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild.childNodes, $column$$12_relIndex$$ < $columns$$7$$.length && ($column$$12_relIndex$$ = $columns$$7$$[$column$$12_relIndex$$], 
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$)), 
  (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$8$$, $column$$12_relIndex$$, "column")))
};
D.$JSCompiler_StaticMethods__focusRowHeader$$ = function $$JSCompiler_StaticMethods__focusRowHeader$$$($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$16$$) {
  var $relIndex$$1_row$$44$$, $rows$$13$$;
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild && ($relIndex$$1_row$$44$$ = $rowIndex$$16$$ - $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_startRowHeader$ + 1, $rows$$13$$ = $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild.childNodes, $relIndex$$1_row$$44$$ < $rows$$13$$.length && ($relIndex$$1_row$$44$$ = $rows$$13$$[$relIndex$$1_row$$44$$], 
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusRowHeader$self$$), $JSCompiler_StaticMethods__focusRowHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusRowHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusRowHeader$self$$)), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusRowHeader$self$$, 
  $rowIndex$$16$$, $relIndex$$1_row$$44$$, "row")))
};
D.$JSCompiler_StaticMethods_scrollToIndex$$ = function $$JSCompiler_StaticMethods_scrollToIndex$$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $cellLeft_index$$177$$, $isExtend$$1$$) {
  var $cellWidth_row$$45$$, $column$$13_viewportLeft$$2$$, $deltaX$$25_scrollLeft$$10$$, $deltaY$$25_scrollTop$$10$$, $databodyContent$$19_viewportRight$$3_viewportTop$$4$$, $rowElem_rowHeight$$11$$, $viewportBottom$$5$$, $rowTop$$1$$, $cell$$35$$;
  $cellWidth_row$$45$$ = $cellLeft_index$$177$$.row;
  $column$$13_viewportLeft$$2$$ = $cellLeft_index$$177$$.column;
  $deltaY$$25_scrollTop$$10$$ = $deltaX$$25_scrollLeft$$10$$ = 0;
  $cellWidth_row$$45$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellWidth_row$$45$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$25_scrollTop$$10$$ = $cellWidth_row$$45$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellWidth_row$$45$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellWidth_row$$45$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$25_scrollTop$$10$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$25_scrollTop$$10$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$177$$) : ($databodyContent$$19_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$11$$ = $databodyContent$$19_viewportRight$$3_viewportTop$$4$$.childNodes[$cellWidth_row$$45$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 
  1], $databodyContent$$19_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = (0,window.parseInt)($rowElem_rowHeight$$11$$.style.top), $rowElem_rowHeight$$11$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, 
  $rowElem_rowHeight$$11$$), $rowTop$$1$$ + $rowElem_rowHeight$$11$$ > $viewportBottom$$5$$ ? $deltaY$$25_scrollTop$$10$$ = $viewportBottom$$5$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$11$$) : $rowTop$$1$$ < $databodyContent$$19_viewportRight$$3_viewportTop$$4$$ && ($deltaY$$25_scrollTop$$10$$ = $databodyContent$$19_viewportRight$$3_viewportTop$$4$$ - $rowTop$$1$$));
  !(0,window.isNaN)($column$$13_viewportLeft$$2$$) && $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ == D.$JSCompiler_alias_NULL$$ && ($column$$13_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $column$$13_viewportLeft$$2$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$25_scrollLeft$$10$$ = $column$$13_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * 
  $column$$13_viewportLeft$$2$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * ($column$$13_viewportLeft$$2$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$25_scrollLeft$$10$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$25_scrollLeft$$10$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$177$$) : ($databodyContent$$19_viewportRight$$3_viewportTop$$4$$ = 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$11$$ = $databodyContent$$19_viewportRight$$3_viewportTop$$4$$.childNodes[$cellWidth_row$$45$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 1], $cell$$35$$ = $rowElem_rowHeight$$11$$.childNodes[$column$$13_viewportLeft$$2$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_index$$177$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$35$$, "left"), $cellWidth_row$$45$$ = 
  $cell$$35$$.offsetWidth, $column$$13_viewportLeft$$2$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, $databodyContent$$19_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_index$$177$$ < $column$$13_viewportLeft$$2$$ ? $deltaX$$25_scrollLeft$$10$$ = $column$$13_viewportLeft$$2$$ - $cellLeft_index$$177$$ : 
  $cellLeft_index$$177$$ + $cellWidth_row$$45$$ > $databodyContent$$19_viewportRight$$3_viewportTop$$4$$ && ($deltaX$$25_scrollLeft$$10$$ = $databodyContent$$19_viewportRight$$3_viewportTop$$4$$ - ($cellLeft_index$$177$$ + $cellWidth_row$$45$$))));
  if(0 != $deltaX$$25_scrollLeft$$10$$ || 0 != $deltaY$$25_scrollTop$$10$$) {
    $cell$$35$$ != D.$JSCompiler_alias_NULL$$ && $isExtend$$1$$ !== D.$JSCompiler_alias_TRUE$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$35$$), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$25_scrollLeft$$10$$, $deltaY$$25_scrollTop$$10$$)
  }
};
D.$JSCompiler_StaticMethods_findHeader$$ = function $$JSCompiler_StaticMethods_findHeader$$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$65$$, $headerCellClassName$$) {
  $headerCellClassName$$ == D.$JSCompiler_alias_VOID$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.getMappedStyle("headercell"));
  if($headerCellClassName$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$65$$, $headerCellClassName$$)) {
      return $elem$$65$$
    }
    if($elem$$65$$.parentNode) {
      return(0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_findHeader$self$$, $elem$$65$$.parentNode, $headerCellClassName$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_updateRowBanding$$ = function $$JSCompiler_StaticMethods_updateRowBanding$$$($JSCompiler_StaticMethods_updateRowBanding$self$$) {
  var $rowBandingInterval$$3$$, $rows$$14$$, $i$$856$$, $index$$178$$, $bandingClass$$;
  $rowBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods_updateRowBanding$self$$.$m_options$);
  if(0 < $rowBandingInterval$$3$$) {
    $rows$$14$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_databody$.firstChild.childNodes;
    $bandingClass$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.getMappedStyle("banded");
    for($i$$856$$ = 1;$i$$856$$ < $rows$$14$$.length;$i$$856$$++) {
      $index$$178$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_startRow$ + $i$$856$$ - 1, 1 === window.Math.floor($index$$178$$ / $rowBandingInterval$$3$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$14$$[$i$$856$$], $bandingClass$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($rows$$14$$[$i$$856$$], $bandingClass$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$14$$[$i$$856$$], $bandingClass$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($rows$$14$$[$i$$856$$], 
      $bandingClass$$)
    }
  }
};
D.$JSCompiler_StaticMethods__setAccInfoText$$ = function $$JSCompiler_StaticMethods__setAccInfoText$$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$126_text$$110$$, $args$$8$$) {
  $key$$126_text$$110$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$m_resources$.getTranslatedText($key$$126_text$$110$$, $args$$8$$);
  $key$$126_text$$110$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.innerHTML = $key$$126_text$$110$$)
};
D.$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$731$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$731$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowExpanded")
};
D.$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$732$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$732$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowCollapsed")
};
D.$DvtDataGrid$$.prototype.$_getKey$ = function $$DvtDataGrid$$$$$_getKey$$($element$$25$$) {
  return $element$$25$$ != D.$JSCompiler_alias_NULL$$ ? $element$$25$$.getAttribute(this.$m_resources$.getMappedAttribute("key")) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getActiveRowKey$$ = function $$JSCompiler_StaticMethods__getActiveRowKey$$$($JSCompiler_StaticMethods__getActiveRowKey$self$$, $prev$$2$$) {
  if($prev$$2$$) {
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$.axis) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$_getKey$($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActiveHeader$.elem)
    }
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$ != D.$JSCompiler_alias_NULL$$) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.rowKey
    }
  }else {
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$.axis) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$_getKey$($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_activeHeader$.elem)
    }
    if($JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.rowKey
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$ = function $$JSCompiler_StaticMethods__handleCutPasteKeydown$$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$733$$) {
  if((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.find($event$$733$$.target, "row"))) {
    if(88 == $event$$733$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$733$$)) {
      return(0,D.$JSCompiler_StaticMethods__handleCut$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$733$$)
    }
    if(86 == $event$$733$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$733$$)) {
      return(0,D.$JSCompiler_StaticMethods__handlePaste$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$733$$)
    }
    if(27 == $event$$733$$.keyCode && $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$) {
      return(0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$, 
      $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ = D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleCut$$ = function $$JSCompiler_StaticMethods__handleCut$$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$734$$) {
  var $rowKey$$28$$;
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $rowKey$$28$$ = $JSCompiler_StaticMethods__handleCut$self$$.$_getKey$($JSCompiler_StaticMethods__handleCut$self$$.find($event$$734$$.target, "row"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$28$$);
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$28$$);
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__handlePaste$$ = function $$JSCompiler_StaticMethods__handlePaste$$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$735$$) {
  var $row$$50$$;
  return $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), 
  $row$$50$$ = $JSCompiler_StaticMethods__handlePaste$self$$.find($event$$735$$.target, "row"), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ !== $row$$50$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handlePaste$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$)), $JSCompiler_StaticMethods__handlePaste$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$), 
  $JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($row$$50$$))), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleMove$$ = function $$JSCompiler_StaticMethods__handleMove$$$($JSCompiler_StaticMethods__handleMove$self$$, $event$$736$$) {
  var $deltaY$$26_rowKey$$29$$, $height$$152$$;
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && ($deltaY$$26_rowKey$$29$$ = $JSCompiler_StaticMethods__handleMove$self$$.$_getKey$($JSCompiler_StaticMethods__handleMove$self$$.find($event$$736$$.target, "row")), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$26_rowKey$$29$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ = 
  (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$26_rowKey$$29$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.style.height != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), 
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_databody$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$), 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$.style.height != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_rowHeader$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$)));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_utils$) || ($JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$, $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ = $event$$736$$.pageY);
  $deltaY$$26_rowKey$$29$$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ - $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$;
  $height$$152$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $deltaY$$26_rowKey$$29$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, "top") + $deltaY$$26_rowKey$$29$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling, "top") < (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $height$$152$$ / 2 ? 
  (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, "nextSibling") : $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling, "top") > (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") - $height$$152$$ / 2 && (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  "previousSibling")
};
D.$JSCompiler_StaticMethods__moveDropRows$$ = function $$JSCompiler_StaticMethods__moveDropRows$$$($JSCompiler_StaticMethods__moveDropRows$self$$, $sibling$$) {
  var $newTop$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
  $databodyScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.parentNode;
  "nextSibling" == $sibling$$ ? ($newTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ + (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$) : ($newTop$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], 
  "top"), $newSiblingTop$$ = $newTop$$ + (0,D.$JSCompiler_StaticMethods_calculateRowHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$));
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTarget$, $newTop$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($headerScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$.parentNode, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTargetHeader$, $newTop$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ = $newTop$$;
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"));
  "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$][$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$][$sibling$$])) : 
  ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$]));
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"))
};
D.$JSCompiler_StaticMethods__handleMoveMouseUp$$ = function $$JSCompiler_StaticMethods__handleMoveMouseUp$$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $validUp$$) {
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.style.zIndex = "", $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$), 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$.style.zIndex = ""), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$)), 
  $validUp$$ == D.$JSCompiler_alias_TRUE$$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling)) : 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$)), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$ = function $$JSCompiler_StaticMethods__isMoveOnRowEnabled$$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$51$$) {
  var $JSCompiler_temp$$531_capability$$inline_8900$$;
  $row$$51$$ == D.$JSCompiler_alias_NULL$$ || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$51$$.parentNode, $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.getMappedStyle("colheader")) ? $JSCompiler_temp$$531_capability$$inline_8900$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_temp$$531_capability$$inline_8900$$ = $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_dataSource$.getCapability("move"), $JSCompiler_temp$$531_capability$$inline_8900$$ = "enable" === (0,D.$JSCompiler_StaticMethods_nullOrDefault$$)((0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_options$, 
  "dnd", "reorder", "row")) && ("full" === $JSCompiler_temp$$531_capability$$inline_8900$$ || "row" === $JSCompiler_temp$$531_capability$$inline_8900$$) && (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) === $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($row$$51$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$);
  return $JSCompiler_temp$$531_capability$$inline_8900$$
};
D.$JSCompiler_StaticMethods__manageMoveCursor$$ = function $$JSCompiler_StaticMethods__manageMoveCursor$$$($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$) {
  var $className$$16$$, $activeKey$$, $prevActiveKey_prevActiveRowHeader$$, $activeRow$$, $prevActiveRow$$;
  $className$$16$$ = $JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$.getMappedStyle("draggable");
  $activeKey$$ = (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$);
  $prevActiveKey_prevActiveRowHeader$$ = (0,D.$JSCompiler_StaticMethods__getActiveRowKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, D.$JSCompiler_alias_TRUE$$);
  $activeRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeKey$$);
  $prevActiveRow$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $prevActiveKey_prevActiveRowHeader$$);
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($prevActiveRow$$, $className$$16$$) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($prevActiveRow$$, $className$$16$$), $prevActiveKey_prevActiveRowHeader$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $prevActiveKey_prevActiveRowHeader$$), (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($prevActiveKey_prevActiveRowHeader$$, $className$$16$$) && 
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($prevActiveKey_prevActiveRowHeader$$, $className$$16$$));
  (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeRow$$) && ($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, $activeKey$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($activeRow$$, $className$$16$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__manageMoveCursor$self_activeRowHeader$$, 
  $className$$16$$))
};
D.$DvtDataGrid$$.prototype.$handleRootFocus$ = function $$DvtDataGrid$$$$$handleRootFocus$$() {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
D.$DvtDataGrid$$.prototype.$handleRootBlur$ = function $$DvtDataGrid$$$$$handleRootBlur$$() {
  this.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
D.$JSCompiler_StaticMethods_calculateRowHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeight$$$($JSCompiler_StaticMethods_calculateRowHeight$self$$, $row$$52$$) {
  return"" != $row$$52$$.style.height ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$52$$) : $row$$52$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$52$$.nextSibling, "top") - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$52$$, "top") : $JSCompiler_StaticMethods_calculateRowHeight$self$$.$m_endRowPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($row$$52$$, "top")
};
D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeaderHeight$$$($JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$, $rowHeader$$13$$) {
  return"" != $rowHeader$$13$$.style.height ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$13$$) : $rowHeader$$13$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$13$$.nextSibling, "top") - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$13$$, "top") : $JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$.$m_endRowHeaderPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeader$$13$$, "top")
};
D.$JSCompiler_StaticMethods_calculateColumnWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnWidth$$$($JSCompiler_StaticMethods_calculateColumnWidth$self$$, $cell$$36$$) {
  if("" != $cell$$36$$.style.width) {
    return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($cell$$36$$)
  }
  var $dir$$26$$ = $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return $cell$$36$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$36$$.nextSibling, $dir$$26$$) - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$36$$, $dir$$26$$) : $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_endColPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$36$$, $dir$$26$$)
};
D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$$($JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$, $columnHeader$$) {
  if("" != $columnHeader$$.style.width) {
    return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($columnHeader$$)
  }
  var $dir$$27$$ = $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return $columnHeader$$.nextSibling != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$.nextSibling, $dir$$27$$) - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$, $dir$$27$$) : $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_endColHeaderPixel$ - (0,D.$JSCompiler_StaticMethods_getElementDir$$)($columnHeader$$, $dir$$27$$)
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_unhighlightSelection$$ = function $$JSCompiler_StaticMethods_unhighlightSelection$$$($JSCompiler_StaticMethods_unhighlightSelection$self$$) {
  var $i$$859$$, $ranges$$1$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$.$GetSelection$();
  for($i$$859$$ = 0;$i$$859$$ < $ranges$$1$$.length;$i$$859$$ += 1) {
    var $JSCompiler_StaticMethods_unhighlightRange$self$$inline_8902$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$, $elems$$inline_8904$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_8902$$, $ranges$$1$$[$i$$859$$]);
    (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_8902$$, $elems$$inline_8904$$)
  }
  $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_unhighlightSelection$self$$)
};
D.$JSCompiler_StaticMethods_highlightRange$$ = function $$JSCompiler_StaticMethods_highlightRange$$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$4_range$$16_selection$$inline_8908$$, $JSCompiler_temp$$422_total$$inline_8907_updateAccInfo$$) {
  $elems$$4_range$$16_selection$$inline_8908$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$4_range$$16_selection$$inline_8908$$);
  (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$4_range$$16_selection$$inline_8908$$);
  if($JSCompiler_temp$$422_total$$inline_8907_updateAccInfo$$) {
    if(1 == $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$().length) {
      $JSCompiler_temp$$422_total$$inline_8907_updateAccInfo$$ = $elems$$4_range$$16_selection$$inline_8908$$.length
    }else {
      var $elems$$inline_8909$$, $i$$inline_8910$$;
      $JSCompiler_temp$$422_total$$inline_8907_updateAccInfo$$ = 0;
      $elems$$4_range$$16_selection$$inline_8908$$ = $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$();
      for($i$$inline_8910$$ = 0;$i$$inline_8910$$ < $elems$$4_range$$16_selection$$inline_8908$$.length;$i$$inline_8910$$++) {
        $elems$$inline_8909$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$4_range$$16_selection$$inline_8908$$[$i$$inline_8910$$]), $JSCompiler_temp$$422_total$$inline_8907_updateAccInfo$$ += $elems$$inline_8909$$.length
      }
    }
    (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_highlightRange$self$$, "accessibleMultiCellSelected", {num:$JSCompiler_temp$$422_total$$inline_8907_updateAccInfo$$})
  }
};
D.$JSCompiler_StaticMethods_unhighlightElems$$ = function $$JSCompiler_StaticMethods_unhighlightElems$$$($JSCompiler_StaticMethods_unhighlightElems$self$$, $elems$$6$$) {
  var $i$$861$$, $selectedClassName$$2$$, $activeClassName$$2$$, $elem$$67$$;
  if(!($elems$$6$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$6$$.length)) {
    if($selectedClassName$$2$$ = $JSCompiler_StaticMethods_unhighlightElems$self$$.getMappedStyle("selected"), $activeClassName$$2$$ = $JSCompiler_StaticMethods_unhighlightElems$self$$.getMappedStyle("focus"), $selectedClassName$$2$$ != D.$JSCompiler_alias_NULL$$ && $activeClassName$$2$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$861$$ = 0;$i$$861$$ < $elems$$6$$.length;$i$$861$$ += 1) {
        $elem$$67$$ = $elems$$6$$[$i$$861$$], (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$67$$, $activeClassName$$2$$), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$67$$, $selectedClassName$$2$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_highlightElems$$ = function $$JSCompiler_StaticMethods_highlightElems$$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$7$$) {
  var $selectedClassName$$3$$, $i$$862$$, $elem$$68$$;
  if(!($elems$$7$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$7$$.length)) {
    if($selectedClassName$$3$$ = $JSCompiler_StaticMethods_highlightElems$self$$.getMappedStyle("selected"), $selectedClassName$$3$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$862$$ = 0;$i$$862$$ < $elems$$7$$.length;$i$$862$$ += 1) {
        $elem$$68$$ = $elems$$7$$[$i$$862$$], (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($elem$$68$$, $selectedClassName$$3$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applySelection$$ = function $$JSCompiler_StaticMethods_applySelection$$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$863$$, $ranges$$2$$, $elems$$8$$;
  $ranges$$2$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for($i$$863$$ = 0;$i$$863$$ < $ranges$$2$$.length;$i$$863$$ += 1) {
    $elems$$8$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$2$$[$i$$863$$], $startRow$$5$$, $endRow$$2$$), (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_applySelection$self$$, $elems$$8$$)
  }
};
D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$ = function $$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$740$$) {
  var $cell$$37_index$$180$$;
  $cell$$37_index$$180$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$m_utils$) ? (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, window.document.elementFromPoint($event$$740$$.touches[0].clientX, $event$$740$$.touches[0].clientY)) : (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$740$$.target);
  $cell$$37_index$$180$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$37_index$$180$$ = {row:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getRowIndex$($cell$$37_index$$180$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getCellIndex$($cell$$37_index$$180$$)}, (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $cell$$37_index$$180$$, $event$$740$$))
};
D.$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$38$$) {
  var $selectedClassName$$4$$ = this.getMappedStyle("selected");
  return"row" == this.$m_options$.$getSelectionMode$() && $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)(this.find($cell$$38$$, "row"), $selectedClassName$$4$$) : $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($cell$$38$$, $selectedClassName$$4$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickSelection$$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$741$$) {
  var $index$$182$$, $cell$$39_ctrlKey$$11$$, $shiftKey$$7$$;
  $cell$$39_ctrlKey$$11$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$741$$.target);
  $cell$$39_ctrlKey$$11$$ != D.$JSCompiler_alias_NULL$$ && ($index$$182$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$39_ctrlKey$$11$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$39_ctrlKey$$11$$)});
  $index$$182$$ != D.$JSCompiler_alias_NULL$$ && $index$$182$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, -1), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$182$$), $cell$$39_ctrlKey$$11$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, 
  $event$$741$$), $shiftKey$$7$$ = $event$$741$$.shiftKey, (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) ? (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$) ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_active$ != 
  D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$182$$, $event$$741$$)) : !$cell$$39_ctrlKey$$11$$ && !$shiftKey$$7$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$182$$, $event$$741$$) : !$cell$$39_ctrlKey$$11$$ && $shiftKey$$7$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, 
  $index$$182$$, $event$$741$$) : (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$182$$, $event$$741$$) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$182$$, $event$$741$$))
};
D.$JSCompiler_StaticMethods__clearSelection$$ = function $$JSCompiler_StaticMethods__clearSelection$$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$().length = 0
};
D.$JSCompiler_StaticMethods_setActionableMode$$ = function $$JSCompiler_StaticMethods_setActionableMode$$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$6$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$6$$ ? "actionable" : "navigation";
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setActionableMode$self$$, "actionable" === $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ ? "accessibleActionableMode" : "accessibleNavigationMode")
};
D.$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$ = function $$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$$($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$7$$) {
  $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$.$m_discontiguousSelection$ = $flag$$7$$;
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$7$$ ? "accessibleRangeSelectModeOn" : "accessibleRangeSelectModeOff")
};
D.$JSCompiler_StaticMethods__selectEntireRow$$ = function $$JSCompiler_StaticMethods__selectEntireRow$$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_8914_row$$54$$, $callback$$inline_11111_event$$743$$) {
  var $startIndex$$11$$;
  $startIndex$$11$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_8914_row$$54$$, 0);
  $endIndex$$inline_8914_row$$54$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_8914_row$$54$$, -1);
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__selectEntireRow$self$$);
  $callback$$inline_11111_event$$743$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $callback$$inline_11111_event$$743$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireRow$self$$, $startIndex$$11$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_8914_row$$54$$, $callback$$inline_11111_event$$743$$))
};
D.$JSCompiler_StaticMethods__selectEntireColumn$$ = function $$JSCompiler_StaticMethods__selectEntireColumn$$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$15_endIndex$$inline_8919$$, $callback$$inline_11116_event$$744$$) {
  var $startIndex$$12$$;
  $startIndex$$12$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $column$$15_endIndex$$inline_8919$$);
  $column$$15_endIndex$$inline_8919$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $column$$15_endIndex$$inline_8919$$);
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$);
  $callback$$inline_11116_event$$744$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $callback$$inline_11116_event$$744$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$, $startIndex$$12$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$15_endIndex$$inline_8919$$, $callback$$inline_11116_event$$744$$))
};
D.$DvtDataGrid$$.prototype.$_selectRangeCallback$ = function $$DvtDataGrid$$$$$_selectRangeCallback$$($event$$746$$, $newRange$$) {
  var $selection$$31$$, $previous$$;
  $selection$$31$$ = this.$GetSelection$();
  $previous$$ = $selection$$31$$.slice(0);
  $selection$$31$$.push($newRange$$);
  (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$);
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_selectionFrontier$ = this.$m_active$, this.$highlightActive$());
  this.$fireSelectionEvent$($event$$746$$, $previous$$)
};
D.$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  this.$m_selection$ == D.$JSCompiler_alias_NULL$$ && (this.$m_selection$ = []);
  return this.$m_selection$
};
D.$DvtDataGrid$$.prototype.GetSelection = D.$DvtDataGrid$$.prototype.$GetSelection$;
D.$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$32$$) {
  var $previous$$1$$;
  $selection$$32$$ != D.$JSCompiler_alias_VOID$$ && ($selection$$32$$ == D.$JSCompiler_alias_NULL$$ && ($selection$$32$$ = []), $previous$$1$$ = this.$GetSelection$().splice(0), this.$m_selection$ = $selection$$32$$, this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, this.$m_startRow$, this.$m_endRow$), this.$fireSelectionEvent$(D.$JSCompiler_alias_NULL$$, $previous$$1$$))
};
D.$DvtDataGrid$$.prototype.SetSelection = D.$DvtDataGrid$$.prototype.$SetSelection$;
D.$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($event$$747$$, $previousSelection$$) {
  var $details$$7$$ = {event:$event$$747$$, ui:{selection:this.$GetSelection$(), previousSelection:$previousSelection$$}};
  this.fireEvent("select", $details$$7$$)
};
D.$JSCompiler_StaticMethods_extendSelection$$ = function $$JSCompiler_StaticMethods_extendSelection$$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$184$$, $callback$$inline_11121_event$$748$$) {
  var $anchor$$5$$;
  $anchor$$5$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_extendSelection$self$$.$m_utils$) ? $JSCompiler_StaticMethods_extendSelection$self$$.$m_touchSelectAnchor$ : $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$;
  $anchor$$5$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$)($JSCompiler_StaticMethods_extendSelection$self$$), $JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$184$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$184$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$184$$.row)), $callback$$inline_11121_event$$748$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$_extendSelectionCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, 
  $callback$$inline_11121_event$$748$$), (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods_extendSelection$self$$, $anchor$$5$$, $JSCompiler_StaticMethods_extendSelection$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $index$$184$$, $callback$$inline_11121_event$$748$$)))
};
D.$DvtDataGrid$$.prototype.$_extendSelectionCallback$ = function $$DvtDataGrid$$$$$_extendSelectionCallback$$($event$$749$$, $newRange$$1$$) {
  var $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$, $currentRange$$, $clone$$4_startIndexesMatch$$, $endIndexesMatch$$;
  $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$ = this.$GetSelection$();
  $currentRange$$ = $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$[$cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$.length - 1];
  $clone$$4_startIndexesMatch$$ = $currentRange$$.startIndex.row == $newRange$$1$$.startIndex.row;
  $currentRange$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && $newRange$$1$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && ($clone$$4_startIndexesMatch$$ = $clone$$4_startIndexesMatch$$ && $currentRange$$.startIndex.column == $newRange$$1$$.startIndex.column);
  $endIndexesMatch$$ = $currentRange$$.endIndex.row == $newRange$$1$$.endIndex.row;
  $currentRange$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && $newRange$$1$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && ($endIndexesMatch$$ = $endIndexesMatch$$ && $currentRange$$.endIndex.column == $newRange$$1$$.endIndex.column);
  if(!$clone$$4_startIndexesMatch$$ || !$endIndexesMatch$$) {
    $clone$$4_startIndexesMatch$$ = $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$.slice(0), $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$.pop(), $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$.push($newRange$$1$$), (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$749$$, $clone$$4_startIndexesMatch$$), $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, 
    $currentRange$$), (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)(this, $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$), (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$1$$, D.$JSCompiler_alias_TRUE$$), this.$highlightActive$(), this.$m_selectionFrontier$ == D.$JSCompiler_alias_NULL$$ || this.$m_active$ != D.$JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$.row == this.$m_active$.row && this.$m_selectionFrontier$.column == this.$m_active$.column || 
    (this.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$ = this.createRange(this.$m_active$), $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$), $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$ != D.$JSCompiler_alias_NULL$$ && 0 < $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$.length && 
    (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$[0])), $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$ = this.createRange(this.$m_selectionFrontier$), $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$), $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$ == 
    D.$JSCompiler_alias_NULL$$ || 0 == $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$.length || ((0,D.$JSCompiler_StaticMethods__updateContextInfo$$)(this, this.$m_selectionFrontier$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)(this, $cell$$inline_8936_elems$$inline_8932_range$$inline_8935_selection$$33$$[0], D.$JSCompiler_alias_TRUE$$))), this.$m_discontiguousSelection$ && (this.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$ = function $$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$$($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$) {
  var $range$$18$$;
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.$m_selectionFrontier$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.$m_selectionFrontier$.row == $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.$m_active$.row && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.$m_selectionFrontier$.column == 
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.$m_active$.column || ($range$$18$$ = $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.createRange($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.$m_selectionFrontier$), $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$, $range$$18$$), 
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$ != D.$JSCompiler_alias_NULL$$ && 0 < $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$.length && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$40$$[0]))
};
D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$ = function $$JSCompiler_StaticMethods_augmentSelectionAndFocus$$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$185$$, $event$$750$$) {
  0 < $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$GetSelection$().length && $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, !$JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_discontiguousSelection$);
  (0,D.$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$);
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.setActive($index$$185$$, $event$$750$$, $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$_augmentSelectionAndFocusActiveCallback$.bind($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$185$$, $event$$750$$))
};
D.$DvtDataGrid$$.prototype.$_augmentSelectionAndFocusActiveCallback$ = function $$DvtDataGrid$$$$$_augmentSelectionAndFocusActiveCallback$$($index$$186$$, $event$$751$$) {
  this.$m_selectionFrontier$ = $index$$186$$;
  "row" == this.$m_options$.$getSelectionMode$() && ($index$$186$$ = this.createIndex($index$$186$$.row));
  var $callback$$inline_11126$$ = this.$_augmentSelectionAndFocusRangeCallback$.bind(this, $index$$186$$, $event$$751$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)(this, $index$$186$$, this.$_createRangeStartKeyCallback$.bind(this, $index$$186$$, $callback$$inline_11126$$))
};
D.$DvtDataGrid$$.prototype.$_augmentSelectionAndFocusRangeCallback$ = function $$DvtDataGrid$$$$$_augmentSelectionAndFocusRangeCallback$$($index$$187$$, $event$$752$$, $range$$20$$) {
  var $selection$$35$$, $clone$$5$$;
  $selection$$35$$ = this.$GetSelection$();
  $clone$$5$$ = $selection$$35$$.slice(0);
  $selection$$35$$.push($range$$20$$);
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$752$$, $clone$$5$$);
  this.$highlightActive$();
  (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, $index$$187$$, "selected")
};
D.$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$188$$, $event$$753$$) {
  if(this.$m_discontiguousSelection$) {
    if(this.$m_active$ != D.$JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$.row == this.$m_active$.row && this.$m_selectionFrontier$.column == this.$m_active$.column) {
      this.$GetSelection$().pop();
      var $JSCompiler_inline_result$$318_index$$inline_8939$$;
      a: {
        $JSCompiler_inline_result$$318_index$$inline_8939$$ = this.$m_active$;
        window.ranges = this.$GetSelection$();
        for(window.i = 0;window.i < window.ranges.length;window.i += 1) {
          if(window.range = window.ranges[window.i], window.startIndex = window.range.startIndex, window.endIndex = (0,D.$JSCompiler_StaticMethods_getEndIndex$$)(window.range), window.rangeStartRow = window.startIndex.row, window.rangeEndRow = window.endIndex.row, !($JSCompiler_inline_result$$318_index$$inline_8939$$.row < window.rangeStartRow || -1 != window.rangeEndRow && $JSCompiler_inline_result$$318_index$$inline_8939$$.row > window.rangeEndRow)) {
            if(!(0,window.isNaN)(window.startIndex.column) && !(0,window.isNaN)(window.endIndex.column)) {
              if(window.rangeStartColumn = window.startIndex.column, window.rangeEndColumn = window.endIndex.column, !($JSCompiler_inline_result$$318_index$$inline_8939$$.column < window.rangeStartColumn || -1 != window.rangeEndColumn && $JSCompiler_inline_result$$318_index$$inline_8939$$.column > window.rangeEndColumn)) {
                $JSCompiler_inline_result$$318_index$$inline_8939$$ = D.$JSCompiler_alias_TRUE$$;
                break a
              }
            }else {
              $JSCompiler_inline_result$$318_index$$inline_8939$$ = D.$JSCompiler_alias_TRUE$$;
              break a
            }
          }
        }
        $JSCompiler_inline_result$$318_index$$inline_8939$$ = D.$JSCompiler_alias_FALSE$$
      }
      $JSCompiler_inline_result$$318_index$$inline_8939$$ || (0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)(this, this.$m_active$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods__clearSelection$$)(this)
  }
  (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)(this, $index$$188$$, $event$$753$$)
};
D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$ = function $$JSCompiler_StaticMethods_getFocusableElementsInNode$$$($node$$322_nodes$$18$$) {
  var $inputElems$$, $elem$$71$$, $nodeCount$$13$$, $inputRegExp$$, $i$$866$$;
  $inputElems$$ = [];
  if(window.document.evaluate) {
    $node$$322_nodes$$18$$ = window.document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A", $node$$322_nodes$$18$$, D.$JSCompiler_alias_NULL$$, window.XPathResult.ANY_TYPE, D.$JSCompiler_alias_NULL$$);
    for($elem$$71$$ = $node$$322_nodes$$18$$.iterateNext();$elem$$71$$;) {
      !$elem$$71$$.disabled && (!$elem$$71$$.tabIndex || 0 < $elem$$71$$.tabIndex) && $inputElems$$.push($elem$$71$$), $elem$$71$$ = $node$$322_nodes$$18$$.iterateNext()
    }
  }else {
    $node$$322_nodes$$18$$ = $node$$322_nodes$$18$$.getElementsByTagName("*");
    $nodeCount$$13$$ = $node$$322_nodes$$18$$.length;
    $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
    for($i$$866$$ = 0;$i$$866$$ < $nodeCount$$13$$;$i$$866$$ += 1) {
      $elem$$71$$ = $node$$322_nodes$$18$$[$i$$866$$], $elem$$71$$.tagName.match($inputRegExp$$) && (!$elem$$71$$.disabled && (!$elem$$71$$.tabIndex || 0 < $elem$$71$$.tabIndex)) && $inputElems$$.push($elem$$71$$)
    }
  }
  return $inputElems$$
};
D.$JSCompiler_StaticMethods__compareSelectionAndFire$$ = function $$JSCompiler_StaticMethods__compareSelectionAndFire$$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$754$$, $clone$$6$$) {
  var $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$;
  a: {
    $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$();
    var $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$, $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$, $foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$;
    if($JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$.length !== $clone$$6$$.length) {
      $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$ = D.$JSCompiler_alias_FALSE$$
    }else {
      for($bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ = 0;$bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ < $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$.length;$bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ += 1) {
        $foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$ = D.$JSCompiler_alias_FALSE$$;
        for($bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ = 0;$bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ < $clone$$6$$.length;$bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ += 1) {
          $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$[$bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$].startIndex.row === $clone$$6$$[$bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$].startIndex.row && ($JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$[$bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$].startIndex.column === 
          $clone$$6$$[$bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$].startIndex.column && $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$[$bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$].endIndex.row === $clone$$6$$[$bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$].endIndex.row && 
          $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$[$bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$].endIndex.column === $clone$$6$$[$bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$].endIndex.column) && ($foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$ = D.$JSCompiler_alias_TRUE$$)
        }
        if($foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$ === D.$JSCompiler_alias_FALSE$$) {
          $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$ = D.$JSCompiler_alias_FALSE$$;
          break a
        }
      }
      $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  if(!$JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$) {
    if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$)) {
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ == D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ = 
      (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, 
      -$bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ / 2, "top"), $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ = window.document.createElement("div"), $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancetop"), 
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.appendChild($bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), 
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, -1 * $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ / 2, "bottom"), $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ = window.document.createElement("div"), $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$.className = 
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancebottom"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.appendChild($bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$), $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ = 
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$(), "row" === $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ ? ($bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_databody$) / 2 + $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_currentScrollLeft$ - 
      $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$, $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, 
      $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$, $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$)) : ($bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$754$$.target), $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ = 
      (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$, $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$) - $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, 
      $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$, $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, 
      $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$), $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$)), $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.createRange($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_active$))[0].parentNode, 
      $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$));
      var $bottomIconCell$$inline_8964_elementsInRange$$inline_8965$$;
      $foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$();
      $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$();
      $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$[$foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$.length - 1].startKey.row);
      $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$[$foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$.length - 1].endKey.row);
      $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && ("row" === $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ ? ($JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), 
      $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$)) : ($bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomIconCell$$inline_8964_elementsInRange$$inline_8965$$ = 
      (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$[$foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$.length - 1]), $foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$ = $bottomIconCell$$inline_8964_elementsInRange$$inline_8965$$[0], $bottomIconCell$$inline_8964_elementsInRange$$inline_8965$$ = $bottomIconCell$$inline_8964_elementsInRange$$inline_8965$$[$bottomIconCell$$inline_8964_elementsInRange$$inline_8965$$.length - 
      1], $JSCompiler_inline_result$$168_dir$$inline_8956_row$$inline_8953_selection1$$inline_8941_topRow$$inline_8960$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $bottomRow$$inline_8961_i$$inline_8943_iconSize$$inline_8950_left$$inline_8955$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, 
      (0,D.$JSCompiler_StaticMethods_getElementDir$$)($foundMatch$$inline_8945_selection$$inline_8959_topIconCell$$inline_8963$$, $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) / 2, $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$), 
      (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIconCell$$inline_8964_elementsInRange$$inline_8965$$, $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$) + (0,D.$JSCompiler_StaticMethods_calculateColumnWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, 
      $bottomIconCell$$inline_8964_elementsInRange$$inline_8965$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) / 2, $bottomIcon$$inline_8952_cell$$inline_8949_dir$$inline_8966_j$$inline_8944_selectionMode$$inline_8954_selectionMode$$inline_8962_topIcon$$inline_8951$$)))
    }
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$fireSelectionEvent$($event$$754$$, $clone$$6$$)
  }
};
D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$$($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$) {
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode) && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), 
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$))
};
D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$) {
  var $newLeft$$2$$, $dir$$30$$;
  "row" === $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$() && $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && ($dir$$30$$ = $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $newLeft$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_databody$) / 
  2 + $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_currentScrollLeft$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, $newLeft$$2$$, $dir$$30$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, $newLeft$$2$$, $dir$$30$$))
};
D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$ = function $$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$$($JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$) {
  var $div$$2$$, $divWidth$$1$$;
  $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ == D.$JSCompiler_alias_NULL$$ && ($div$$2$$ = window.document.createElement("div"), $div$$2$$.className = $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.getMappedStyle("toucharea"), $div$$2$$.style.visibilty = "hidden", $div$$2$$.style.top = "0px", $div$$2$$.style.visibilty = "0px", $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.appendChild($div$$2$$), 
  $divWidth$$1$$ = $div$$2$$.offsetWidth, $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.removeChild($div$$2$$), $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ = $divWidth$$1$$);
  return $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_handleResize$$ = function $$JSCompiler_StaticMethods_handleResize$$$($JSCompiler_StaticMethods_handleResize$self$$, $event$$685$$) {
  var $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$;
  if($JSCompiler_StaticMethods_handleResize$self$$.$m_isResizing$ === D.$JSCompiler_alias_FALSE$$) {
    if($header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ = $JSCompiler_StaticMethods_handleResize$self$$.find($event$$685$$.target, "header"), $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ != D.$JSCompiler_alias_NULL$$ && ($header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ == 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$ || $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ == $JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$)) {
      $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ = (0,D.$JSCompiler_StaticMethods_manageHeaderCursor$$)($JSCompiler_StaticMethods_handleResize$self$$, $event$$685$$), $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.style.cursor = "default" == $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "" : $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$)
    }
  }else {
    var $newElementHeight$$inline_8355_newElementWidth$$inline_8353$$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$685$$.pageX;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$685$$.pageY;
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$685$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$685$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$685$$.pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$685$$.pageY);
    $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleResize$self$$.getMappedStyle("colheadercell")) ? "column" : "row";
    "col-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "column" === $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ ? ($header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ = (0,D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_8355_newElementWidth$$inline_8353$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$), (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$, $newElementHeight$$inline_8355_newElementWidth$$inline_8353$$)) : "row" === $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ && ($header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ = 
    (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_handleResize$self$$), $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ = $newElementHeight$$inline_8355_newElementWidth$$inline_8353$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$), 
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$, $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$), $JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeaderWidth$ = $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$, 
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleResize$self$$)) : "row-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ && ("row" === $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ ? ($header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ = 
    (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.parentNode), $newElementHeight$$inline_8355_newElementWidth$$inline_8353$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$), 
    (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$, $newElementHeight$$inline_8355_newElementWidth$$inline_8353$$)) : "column" === $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ && 
    ($header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_handleResize$self$$), $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$ = $newElementHeight$$inline_8355_newElementWidth$$inline_8353$$ = 
    (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$, $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$), 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_colHeaderHeight$ = $header$$15_newElementHeight$$inline_10938_newElementWidth$$inline_10935_oldElementHeight$$inline_8354_oldElementWidth$$inline_8352_resizeHeaderMode$$inline_8351$$, (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleResize$self$$)));
    (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleResize$self$$);
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseX$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseY$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseDown$$ = function $$JSCompiler_StaticMethods_handleResizeMouseDown$$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$, $event$$686$$) {
  if("col-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ || "row-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$) {
    $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_isResizing$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$686$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$686$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = 
    $event$$686$$.pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$686$$.pageY), $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeRight$ = 
    0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeBottom$ = 0
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseUp$$ = function $$JSCompiler_StaticMethods_handleResizeMouseUp$$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $event$$687$$) {
  var $details$$3_size$$48$$;
  $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ === D.$JSCompiler_alias_TRUE$$ && ($details$$3_size$$48$$ = "col-resize" === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.width : $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.height, $details$$3_size$$48$$ = {event:$event$$687$$, ui:{header:$JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), 
  size:$details$$3_size$$48$$}}, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.fireEvent("resize", $details$$3_size$$48$$), $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ = "default", $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.cursor = $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$)
};
D.$JSCompiler_StaticMethods__isDOMElementResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementResizable$$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$19$$) {
  return"true" === $element$$19$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
};
D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$$($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$, $element$$20$$) {
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$20$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("colheadercell"))) {
    if($element$$20$$.previousSibling !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$20$$.previousSibling.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
    }
  }else {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$20$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("rowheadercell")) && $element$$20$$.parentNode.previousSibling.firstChild !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$20$$.parentNode.previousSibling.firstChild.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_manageHeaderCursor$$ = function $$JSCompiler_StaticMethods_manageHeaderCursor$$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$688$$) {
  var $elem$$45$$ = $event$$688$$.target, $resizeHeaderMode$$, $edges_leftEdge$$inline_8360$$, $cursorX$$, $cursorY$$, $offsetPixel$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$;
  ($elem$$45$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$688$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$45$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$688$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
  if(!$elem$$45$$) {
    return"default"
  }
  "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $widthResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$45$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $elem$$45$$)) : "row" === $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $heightResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$45$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $elem$$45$$));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_utils$) ? ($cursorX$$ = $event$$688$$.touches[0].pageX, $cursorY$$ = $event$$688$$.touches[0].pageY, $offsetPixel$$ = 12) : ($cursorX$$ = $event$$688$$.pageX, $cursorY$$ = $event$$688$$.pageY, $offsetPixel$$ = 5);
  $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$ = $elem$$45$$;
  var $elementXY$$inline_8359_topEdge$$inline_8361$$, $targetWidth$$inline_8362$$;
  $elementXY$$inline_8359_topEdge$$inline_8361$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$);
  $edges_leftEdge$$inline_8360$$ = $elementXY$$inline_8359_topEdge$$inline_8361$$[0];
  $elementXY$$inline_8359_topEdge$$inline_8361$$ = $elementXY$$inline_8359_topEdge$$inline_8361$$[1];
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell")) ? ($targetWidth$$inline_8362$$ = (0,D.$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$), $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$)) : 
  ($targetWidth$$inline_8362$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$), $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$ = (0,D.$JSCompiler_StaticMethods_calculateRowHeaderHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$.parentNode));
  $edges_leftEdge$$inline_8360$$ = [$edges_leftEdge$$inline_8360$$, $elementXY$$inline_8359_topEdge$$inline_8361$$, $edges_leftEdge$$inline_8360$$ + $targetWidth$$inline_8362$$, $elementXY$$inline_8359_topEdge$$inline_8361$$ + $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$];
  $elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resources$.isRTLMode();
  if($widthResizable$$ && ($elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$ ? $cursorX$$ < $edges_leftEdge$$inline_8360$$[0] + $offsetPixel$$ : $cursorX$$ > $edges_leftEdge$$inline_8360$$[2] - $offsetPixel$$)) {
    return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$45$$, "col-resize"
  }
  if("column" === $resizeHeaderMode$$ && $siblingResizable$$ && ($elem$$inline_8358_rtl$$15_targetHeight$$inline_8363$$ ? $cursorX$$ > $edges_leftEdge$$inline_8360$$[2] - $offsetPixel$$ : $cursorX$$ < $edges_leftEdge$$inline_8360$$[0] + $offsetPixel$$)) {
    if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$45$$.previousSibling, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== D.$JSCompiler_alias_NULL$$) {
      return"col-resize"
    }
  }
  return $heightResizable$$ && $cursorY$$ > $edges_leftEdge$$inline_8360$$[3] - $offsetPixel$$ ? ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$45$$, "row-resize") : "row" === $resizeHeaderMode$$ && ($siblingResizable$$ && $cursorY$$ < $edges_leftEdge$$inline_8360$$[1] + $offsetPixel$$) && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$45$$.parentNode.previousSibling.firstChild, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== 
  D.$JSCompiler_alias_NULL$$) ? "row-resize" : "default"
};
D.$JSCompiler_StaticMethods_resizeColWidth$$ = function $$JSCompiler_StaticMethods_resizeColWidth$$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $oldElementWidth$$1_widthChange$$, $newElementWidth$$1$$) {
  var $newScrollerWidth_oldScrollerWidth$$;
  $oldElementWidth$$1_widthChange$$ = $newElementWidth$$1$$ - $oldElementWidth$$1_widthChange$$;
  if(0 != $oldElementWidth$$1_widthChange$$) {
    $newScrollerWidth_oldScrollerWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild);
    $newScrollerWidth_oldScrollerWidth$$ += $oldElementWidth$$1_widthChange$$;
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColWidth$self$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$, $newElementWidth$$1$$);
    var $dir$$inline_8368$$, $databodyRows$$inline_8369$$, $children$$inline_8370$$, $after$$inline_8371$$, $i$$inline_8372$$, $newStart$$inline_8373$$, $j$$inline_8374$$;
    $dir$$inline_8368$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $databodyRows$$inline_8369$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes;
    $children$$inline_8370$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.childNodes;
    $after$$inline_8371$$ = D.$JSCompiler_alias_FALSE$$;
    if($children$$inline_8370$$.length === $databodyRows$$inline_8369$$[1].childNodes.length) {
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
      for($i$$inline_8372$$ = 0;$i$$inline_8372$$ < $children$$inline_8370$$.length;$i$$inline_8372$$ += 1) {
        if($children$$inline_8370$$[$i$$inline_8372$$] !== $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ && $after$$inline_8371$$ === D.$JSCompiler_alias_TRUE$$) {
          $newStart$$inline_8373$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($children$$inline_8370$$[$i$$inline_8372$$], $dir$$inline_8368$$) + $oldElementWidth$$1_widthChange$$;
          (0,D.$JSCompiler_StaticMethods_setElementDir$$)($children$$inline_8370$$[$i$$inline_8372$$], $newStart$$inline_8373$$, $dir$$inline_8368$$);
          for($j$$inline_8374$$ = 1;$j$$inline_8374$$ < $databodyRows$$inline_8369$$.length;$j$$inline_8374$$ += 1) {
            (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_8369$$[$j$$inline_8374$$].childNodes[$i$$inline_8372$$], $newStart$$inline_8373$$, $dir$$inline_8368$$)
          }
        }else {
          if($children$$inline_8370$$[$i$$inline_8372$$] === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$) {
            $after$$inline_8371$$ = D.$JSCompiler_alias_TRUE$$;
            $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_sizingManager$.$setSize$("column", $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.getAttribute($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.getMappedAttribute("key")), $newElementWidth$$1$$);
            for($j$$inline_8374$$ = 1;$j$$inline_8374$$ < $databodyRows$$inline_8369$$.length;$j$$inline_8374$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyRows$$inline_8369$$[$j$$inline_8374$$].childNodes[$i$$inline_8372$$], $newElementWidth$$1$$)
            }
          }
        }
      }
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = ""
    }
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColHeaderPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_avgColWidth$ = $newScrollerWidth_oldScrollerWidth$$ / $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_dataSource$.getCount("column")
  }
};
D.$JSCompiler_StaticMethods_resizeRowHeight$$ = function $$JSCompiler_StaticMethods_resizeRowHeight$$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $heightChange_oldElementHeight$$1$$, $newElementHeight$$1$$) {
  var $newScrollerHeight_oldScrollerHeight$$, $databodyRows$$inline_8379_newParentHeight$$;
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1$$ - $heightChange_oldElementHeight$$1$$;
  if(0 != $heightChange_oldElementHeight$$1$$) {
    $newScrollerHeight_oldScrollerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild);
    $newScrollerHeight_oldScrollerHeight$$ += $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, $newElementHeight$$1$$);
    $databodyRows$$inline_8379_newParentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild) + $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $databodyRows$$inline_8379_newParentHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newScrollerHeight_oldScrollerHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newScrollerHeight_oldScrollerHeight$$);
    var $rowHeaders$$inline_8380$$, $after$$inline_8381$$, $i$$inline_8382$$, $newStart$$inline_8383$$;
    $databodyRows$$inline_8379_newParentHeight$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes;
    $rowHeaders$$inline_8380$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.parentNode.childNodes;
    $after$$inline_8381$$ = D.$JSCompiler_alias_FALSE$$;
    if($databodyRows$$inline_8379_newParentHeight$$.length === $rowHeaders$$inline_8380$$.length) {
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
      for($i$$inline_8382$$ = 1;$i$$inline_8382$$ < $rowHeaders$$inline_8380$$.length;$i$$inline_8382$$ += 1) {
        $rowHeaders$$inline_8380$$[$i$$inline_8382$$].firstChild !== $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && $after$$inline_8381$$ === D.$JSCompiler_alias_TRUE$$ ? ($newStart$$inline_8383$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeaders$$inline_8380$$[$i$$inline_8382$$], "top") + $heightChange_oldElementHeight$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeaders$$inline_8380$$[$i$$inline_8382$$], $newStart$$inline_8383$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_8379_newParentHeight$$[$i$$inline_8382$$], 
        $newStart$$inline_8383$$, "top")) : $rowHeaders$$inline_8380$$[$i$$inline_8382$$].firstChild === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && ($after$$inline_8381$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_sizingManager$.$setSize$("row", $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.getAttribute($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resources$.getMappedAttribute("key")), $newElementHeight$$1$$), 
        (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyRows$$inline_8379_newParentHeight$$[$i$$inline_8382$$], $newElementHeight$$1$$))
      }
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = ""
    }
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$);
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowHeaderPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_avgRowHeight$ = $newScrollerHeight_oldScrollerHeight$$ / $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_dataSource$.getCount("row")
  }
};
D.$JSCompiler_StaticMethods_getNewElementWidth$$ = function $$JSCompiler_StaticMethods_getNewElementWidth$$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$43$$, $oldElementWidth$$2$$) {
  var $minWidth$$9$$, $deltaWidth$$, $newElementWidth$$3$$, $halfGridWidth$$;
  $minWidth$$9$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_utils$) ? 24 : 10;
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_resources$.isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$2$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  $halfGridWidth$$ = window.Math.round($JSCompiler_StaticMethods_getNewElementWidth$self$$.getWidth() / 2);
  $newElementWidth$$3$$ < $minWidth$$9$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - $minWidth$$9$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $minWidth$$9$$) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$43$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$
};
D.$JSCompiler_StaticMethods_getNewElementHeight$$ = function $$JSCompiler_StaticMethods_getNewElementHeight$$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$44$$, $oldElementHeight$$2$$) {
  var $minHeight$$, $deltaHeight$$, $newElementHeight$$3$$, $halfGridHeight$$;
  $minHeight$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_utils$) ? 24 : 10;
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$2$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  $halfGridHeight$$ = window.Math.round($JSCompiler_StaticMethods_getNewElementHeight$self$$.getHeight() / 2);
  $newElementHeight$$3$$ < $minHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - $minHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $minHeight$$) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$44$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
  return $newElementHeight$$3$$
};
D.$JSCompiler_StaticMethods_manageResizeScrollbars$$ = function $$JSCompiler_StaticMethods_manageResizeScrollbars$$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$) {
  var $databodyWidth$$2_width$$162$$, $height$$136_scrollerHeight$$, $colHeader$$1$$, $rowHeader$$, $scroller$$, $databody$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$2$$, $dir$$13_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
  $databodyWidth$$2_width$$162$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getWidth();
  $height$$136_scrollerHeight$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getHeight();
  $colHeader$$1$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_colHeader$;
  $rowHeader$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_rowHeader$;
  $scroller$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scroller$;
  $databody$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_databody$;
  $colHeaderHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $rowHeaderWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $databodyContentWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$.firstChild);
  $databodyContentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$.firstChild);
  $height$$136_scrollerHeight$$ -= $colHeaderHeight$$1$$;
  $scrollerWidth$$ = $databodyWidth$$2_width$$162$$ - $rowHeaderWidth$$1$$;
  $databodyWidth$$2_width$$162$$ = window.Math.min($databodyContentWidth$$, $scrollerWidth$$);
  $databodyHeight$$2$$ = window.Math.min($databodyContentHeight$$, $height$$136_scrollerHeight$$);
  $scrollbarSize$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$);
  ($dir$$13_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $height$$136_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, 
  $height$$136_scrollerHeight$$)) && ($dir$$13_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$ - $scrollbarSize$$));
  !$isDatabodyVerticalScrollbarRequired$$ && (!$dir$$13_isDatabodyHorizontalScrollbarRequired$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$) && ($scroller$$.style.overflow = "visible");
  if($isDatabodyVerticalScrollbarRequired$$ && $dir$$13_isDatabodyHorizontalScrollbarRequired$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $isDatabodyVerticalScrollbarRequired$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $dir$$13_isDatabodyHorizontalScrollbarRequired$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$) {
    $scroller$$.style.overflow = "auto"
  }
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ = $dir$$13_isDatabodyHorizontalScrollbarRequired$$;
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$;
  $dir$$13_isDatabodyHorizontalScrollbarRequired$$ && $height$$136_scrollerHeight$$ - $scrollbarSize$$ < $databodyHeight$$2$$ && ($databodyHeight$$2$$ = $height$$136_scrollerHeight$$ - $scrollbarSize$$);
  $isDatabodyVerticalScrollbarRequired$$ && $scrollerWidth$$ - $scrollbarSize$$ < $databodyWidth$$2_width$$162$$ && ($databodyWidth$$2_width$$162$$ = $scrollerWidth$$ - $scrollbarSize$$);
  $dir$$13_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$, $colHeaderHeight$$1$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$, $databodyHeight$$2$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$1$$, $rowHeaderWidth$$1$$, $dir$$13_isDatabodyHorizontalScrollbarRequired$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$1$$, $databodyWidth$$2_width$$162$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$, $colHeaderHeight$$1$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$, $rowHeaderWidth$$1$$, $dir$$13_isDatabodyHorizontalScrollbarRequired$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$, $databodyWidth$$2_width$$162$$);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$, $databodyHeight$$2$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$, $colHeaderHeight$$1$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$, $rowHeaderWidth$$1$$, $dir$$13_isDatabodyHorizontalScrollbarRequired$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$, $scrollerWidth$$);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$, $height$$136_scrollerHeight$$);
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth$$2_width$$162$$;
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$2$$;
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$)
};
D.$JSCompiler_StaticMethods_handleContextMenuResize$$ = function $$JSCompiler_StaticMethods_handleContextMenuResize$$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$118$$, $id$$293$$, $val$$82_value$$150$$) {
  $val$$82_value$$150$$ = (0,window.parseInt)($val$$82_value$$150$$, 10);
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$118$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$118$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortdescending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$118$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortindicators"))) {
    $initialValue_target$$118$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$118$$)
  }
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$ = $initialValue_target$$118$$;
  "resizeWidth" === $id$$293$$ ? ($initialValue_target$$118$$ = $initialValue_target$$118$$.offsetWidth, $initialValue_target$$118$$ !== $val$$82_value$$150$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, 
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$118$$, $val$$82_value$$150$$) : ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_rowHeader$, $val$$82_value$$150$$), $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_rowHeaderWidth$ = $val$$82_value$$150$$, (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)))) : 
  "resizeHeight" === $id$$293$$ && ($initialValue_target$$118$$ = $initialValue_target$$118$$.offsetHeight, $initialValue_target$$118$$ !== $val$$82_value$$150$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_colHeader$, 
  $val$$82_value$$150$$), $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_colHeaderHeight$ = $val$$82_value$$150$$, (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, 
  $initialValue_target$$118$$, $val$$82_value$$150$$)));
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods__toggleSortIconDirection$$ = function $$JSCompiler_StaticMethods__toggleSortIconDirection$$$($JSCompiler_StaticMethods__toggleSortIconDirection$self$$, $header$$6_icon$$46$$, $direction$$34$$) {
  $header$$6_icon$$46$$ != D.$JSCompiler_alias_NULL$$ && ($header$$6_icon$$46$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$6_icon$$46$$), "descending" === $direction$$34$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$6_icon$$46$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")) ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$6_icon$$46$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$6_icon$$46$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending"))) : "ascending" === $direction$$34$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$6_icon$$46$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$6_icon$$46$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$6_icon$$46$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending"))))
};
D.$JSCompiler_StaticMethods__showOrHideSortIcon$$ = function $$JSCompiler_StaticMethods__showOrHideSortIcon$$$($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$7$$, $hide$$2$$) {
  var $icon$$47$$, $sorted$$ = D.$JSCompiler_alias_FALSE$$;
  $header$$7$$ != D.$JSCompiler_alias_NULL$$ && ($icon$$47$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$7$$), $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($sorted$$ = $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$_getKey$($header$$7$$)), $hide$$2$$ === D.$JSCompiler_alias_FALSE$$ && !$sorted$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$47$$, 
  $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$47$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default"))) : $hide$$2$$ === D.$JSCompiler_alias_TRUE$$ && !$sorted$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$47$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$47$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled"))))
};
D.$JSCompiler_StaticMethods__handleHeaderSort$$ = function $$JSCompiler_StaticMethods__handleHeaderSort$$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$682$$, $direction$$37$$) {
  var $header$$9$$;
  $header$$9$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$682$$.target);
  $header$$9$$ != D.$JSCompiler_alias_NULL$$ && ($direction$$37$$ == D.$JSCompiler_alias_NULL$$ && ($direction$$37$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$_getKey$($header$$9$$) ? "ascending" === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, 
  $event$$682$$, $header$$9$$, $direction$$37$$))
};
D.$JSCompiler_StaticMethods__doHeaderSort$$ = function $$JSCompiler_StaticMethods__doHeaderSort$$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $details$$2_event$$684$$, $criteria$$2_header$$11_sortedHeader$$inline_8293$$, $direction$$39$$) {
  var $key$$109$$, $axis$$42_columnHeaderCellClassName$$inline_8285$$;
  $criteria$$2_header$$11_sortedHeader$$inline_8293$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_resources$.getMappedAttribute("sortDir"), $direction$$39$$);
  $key$$109$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getKey$($criteria$$2_header$$11_sortedHeader$$inline_8293$$);
  var $oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$;
  $axis$$42_columnHeaderCellClassName$$inline_8285$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("colheadercell");
  $oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("rowheadercell");
  $axis$$42_columnHeaderCellClassName$$inline_8285$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($criteria$$2_header$$11_sortedHeader$$inline_8293$$, $axis$$42_columnHeaderCellClassName$$inline_8285$$) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($criteria$$2_header$$11_sortedHeader$$inline_8293$$, $oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$) ? "row" : D.$JSCompiler_alias_NULL$$;
  var $oldsortIcon$$inline_8290$$;
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldsortIcon$$inline_8290$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$), 
  (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$, "ascending"), "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_8290$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_8290$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_8290$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_8290$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$.lastChild, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ = {key:$key$$109$$, axis:$axis$$42_columnHeaderCellClassName$$inline_8285$$, direction:$direction$$39$$};
  (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $criteria$$2_header$$11_sortedHeader$$inline_8293$$, $direction$$39$$);
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($criteria$$2_header$$11_sortedHeader$$inline_8293$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($criteria$$2_header$$11_sortedHeader$$inline_8293$$), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_8289_rowHeaderCellClassName$$inline_8286_sortIcon$$inline_8294$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($criteria$$2_header$$11_sortedHeader$$inline_8293$$.lastChild, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
  $direction$$39$$ != D.$JSCompiler_alias_NULL$$ && ($key$$109$$ != D.$JSCompiler_alias_NULL$$ && $axis$$42_columnHeaderCellClassName$$inline_8285$$ != D.$JSCompiler_alias_NULL$$) && ((0,D.$JSCompiler_StaticMethods_showStatusText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$), $criteria$$2_header$$11_sortedHeader$$inline_8293$$ = {axis:$axis$$42_columnHeaderCellClassName$$inline_8285$$, key:$key$$109$$, direction:$direction$$39$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($criteria$$2_header$$11_sortedHeader$$inline_8293$$, 
  {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}), $details$$2_event$$684$$ = {event:$details$$2_event$$684$$, ui:{header:$key$$109$$, direction:$direction$$39$$}}, $JSCompiler_StaticMethods__doHeaderSort$self$$.fireEvent("sort", $details$$2_event$$684$$));
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, "ascending" === $direction$$39$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$109$$})
};
D.$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  var $newRowHeaderElements$$ = window.document.createElement("div");
  $newRowHeaderElements$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "rowHeader");
  $newRowHeaderElements$$.className = this.$m_resources$.getMappedStyle("rowheader") + " " + this.$m_resources$.getMappedStyle("header");
  this.fetchHeaders("row", this.$m_startRow$, $newRowHeaderElements$$, this.$m_endRow$ - this.$m_startRow$);
  this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_startCol$, this.$m_endRow$ - this.$m_startRow$, this.$m_endCol$ - this.$m_startCol$, {success:this.$handleCellsFetchSuccessForSort$.bind(this, $newRowHeaderElements$$), error:this.$handleCellsFetchError$})
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$, $cellSet_oldRowElements$$, $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$) {
  var $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$, $oldSet$$inline_8307_rowCount$$10$$, $animOrder$$inline_8309_columnStart$$, $newRowHeaderElementsFragment$$;
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$ = $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$[0].start;
  $oldSet$$inline_8307_rowCount$$10$$ = $cellSet_oldRowElements$$.getCount("row");
  $animOrder$$inline_8309_columnStart$$ = $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$[1].start;
  $cellSet_oldRowElements$$.getCount("column");
  $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$ = window.document.createDocumentFragment();
  $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$.appendChild(window.document.createElement("div"));
  $newRowHeaderElementsFragment$$ = window.document.createDocumentFragment();
  (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$, D.$JSCompiler_alias_TRUE$$, this.$m_startRowPixel$, $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$, $oldSet$$inline_8307_rowCount$$10$$, $animOrder$$inline_8309_columnStart$$, D.$JSCompiler_alias_FALSE$$, $cellSet_oldRowElements$$);
  $cellSet_oldRowElements$$ = this.$m_databody$.firstChild;
  $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$ = this.$m_rowHeader$.firstChild;
  if($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.firstChild) {
    for(;$newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.firstChild.firstChild;) {
      $newRowHeaderElementsFragment$$.appendChild($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.firstChild.firstChild)
    }
  }
  $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$ = $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$;
  var $me$$inline_8304$$, $pos$$inline_8305_restSet$$inline_8310$$, $idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$, $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$, $gridHeight$$inline_8312_rowHeight$$inline_8315$$, $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$, $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$, $rowsForAppend$$inline_8320$$, $rowHeadersForAppend$$inline_8321$$, 
  $restSetLength$$inline_8322$$, $j$$inline_8325_rowPos$$inline_8337$$, $k$$inline_8327_key$$inline_8326_l$$inline_8329$$, $keyAttr$$inline_8332$$, $rowHeaderSupport$$inline_8339$$, $newElementSetClone$$inline_8340$$, $newRowHeaderElementsClone$$inline_8341$$;
  $rowHeaderSupport$$inline_8339$$ = D.$JSCompiler_alias_FALSE$$;
  $me$$inline_8304$$ = this;
  $pos$$inline_8305_restSet$$inline_8310$$ = 0;
  $newElementSetClone$$inline_8340$$ = $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$.cloneNode(D.$JSCompiler_alias_TRUE$$);
  $newRowHeaderElementsClone$$inline_8341$$ = $newRowHeaderElementsFragment$$ ? $newRowHeaderElementsFragment$$.cloneNode(D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_NULL$$;
  $keyAttr$$inline_8332$$ = this.$m_resources$.getMappedAttribute("key");
  $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$ = $cellSet_oldRowElements$$.childElementCount;
  $idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$);
  $oldSet$$inline_8307_rowCount$$10$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $cellSet_oldRowElements$$);
  $animOrder$$inline_8309_columnStart$$ = [];
  $pos$$inline_8305_restSet$$inline_8310$$ = [];
  $rowsForAppend$$inline_8320$$ = [];
  $rowHeadersForAppend$$inline_8321$$ = [];
  $restSetLength$$inline_8322$$ = 0;
  $gridHeight$$inline_8312_rowHeight$$inline_8315$$ = this.getHeight();
  $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$ = (0,D.$JSCompiler_StaticMethods_getColumnHeaderHeight$$)(this);
  $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$ = $gridHeight$$inline_8312_rowHeight$$inline_8315$$ - $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$;
  $gridHeight$$inline_8312_rowHeight$$inline_8315$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  ($colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$ = (0,window.parseInt)($cellSet_oldRowElements$$.childNodes[1].style.top.split("px")[0])) || ($colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$ = 0);
  $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = this.$m_currentScrollTop$ - $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$;
  $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$ = [$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$, $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ + $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$];
  $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$ = [window.Math.ceil($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ / $gridHeight$$inline_8312_rowHeight$$inline_8315$$), window.Math.floor(($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ + $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$) / $gridHeight$$inline_8312_rowHeight$$inline_8315$$)];
  $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.childElementCount != $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.firstChild.children.length == $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$ + 1 && ($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$ = $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.firstChild);
  if($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.childElementCount == $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$ && $newRowHeaderElementsFragment$$) {
    $rowHeaderSupport$$inline_8339$$ = D.$JSCompiler_alias_TRUE$$;
    for($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = 1;$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ < $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.childElementCount;$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$++) {
      $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.childNodes[$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$].id += "_old"
    }
  }
  if($rowHeaderSupport$$inline_8339$$) {
    for($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = 0;$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ < $newRowHeaderElementsClone$$inline_8341$$.childNodes.length;$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$++) {
      $newRowHeaderElementsClone$$inline_8341$$.childNodes[$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$].style.top = $cellSet_oldRowElements$$.children[$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$].style.top
    }
  }
  for($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = 0;$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ < $oldSet$$inline_8307_rowCount$$10$$.length;$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$++) {
    $animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$]] = $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$
  }
  for($j$$inline_8325_rowPos$$inline_8337$$ = 0;$j$$inline_8325_rowPos$$inline_8337$$ < $idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$.length;$j$$inline_8325_rowPos$$inline_8337$$++) {
    if($animOrder$$inline_8309_columnStart$$.hasOwnProperty($idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$])) {
      if($animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] - 1 && $j$$inline_8325_rowPos$$inline_8337$$ < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] - 1 || $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] > 
      $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] + 1 && $j$$inline_8325_rowPos$$inline_8337$$ > $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] + 1 || $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] - 
      1 && $j$$inline_8325_rowPos$$inline_8337$$ > $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] + 1 || $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] > $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] + 1 && $j$$inline_8325_rowPos$$inline_8337$$ < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] - 
      1) {
        $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] = "no_0"
      }
      (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]]) && ($animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] > $j$$inline_8325_rowPos$$inline_8337$$ ? ($j$$inline_8325_rowPos$$inline_8337$$ < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] && 
      $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] > $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] ? $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] - ($bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] + 
      1) : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]]) && $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] > $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] && ($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = 
      $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] - $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] - 1, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet_oldRowElements$$.childNodes[$animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] + 1], 0, 0, "linear", 
      $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ * $gridHeight$$inline_8312_rowHeight$$inline_8315$$), $rowHeaderSupport$$inline_8339$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.childNodes[$animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] + 1], 0, 0, "linear", ($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ + 
      1) * $gridHeight$$inline_8312_rowHeight$$inline_8315$$)), $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] - $j$$inline_8325_rowPos$$inline_8337$$), $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] = "up_-" + $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$) : 
      $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] < $j$$inline_8325_rowPos$$inline_8337$$ ? ($j$$inline_8325_rowPos$$inline_8337$$ > $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] && $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] ? 
      $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] + 1 - $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]]) && 
      $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] && ($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] - $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] - 
      1, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet_oldRowElements$$.childNodes[$animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] + 1], 0, 0, "linear", $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ * $gridHeight$$inline_8312_rowHeight$$inline_8315$$), $rowHeaderSupport$$inline_8339$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.childNodes[$animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] + 
      1], 0, 0, "linear", $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ * $gridHeight$$inline_8312_rowHeight$$inline_8315$$)), $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = $j$$inline_8325_rowPos$$inline_8337$$ - $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]]), $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] = 
      "down_" + $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$) : $animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] == $j$$inline_8325_rowPos$$inline_8337$$ && ($animOrder$$inline_8309_columnStart$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] = "no_0"))
    }else {
      $pos$$inline_8305_restSet$$inline_8310$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$[$j$$inline_8325_rowPos$$inline_8337$$]] = $j$$inline_8325_rowPos$$inline_8337$$
    }
  }
  for($idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ = 0;$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ < $oldSet$$inline_8307_rowCount$$10$$.length;$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$++) {
    $animOrder$$inline_8309_columnStart$$.hasOwnProperty($oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]) && (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]]) && ($animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]] < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] && 
    ($animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]] = "no_0"), $animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]] > $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] && ($animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]] = 
    "no_0"), $animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]] >= $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[0] && $animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]] <= $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] && 
    ($dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$[1] - $animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]] + 2, $animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$]] = "down_" + $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$))
  }
  for($k$$inline_8327_key$$inline_8326_l$$inline_8329$$ in $pos$$inline_8305_restSet$$inline_8310$$) {
    $pos$$inline_8305_restSet$$inline_8310$$.hasOwnProperty($k$$inline_8327_key$$inline_8326_l$$inline_8329$$) && ($restSetLength$$inline_8322$$++, $idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ = $pos$$inline_8305_restSet$$inline_8310$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$], $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$ = $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$[1] + $cellSet_oldRowElements$$.childNodes[1].clientHeight, 
    $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ = $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$[0] - $cellSet_oldRowElements$$.childNodes[1].clientHeight, $j$$inline_8325_rowPos$$inline_8337$$ = $idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ * $cellSet_oldRowElements$$.childNodes[1].clientHeight, $j$$inline_8325_rowPos$$inline_8337$$ < $bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$ && 
    $j$$inline_8325_rowPos$$inline_8337$$ > $dv$$inline_8323_i$$inline_8324_scrollTop$$inline_8317_topLimit$$inline_8336_v$$inline_8311$$ && ($bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$ = $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$.childNodes[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ + 1], $rowsForAppend$$inline_8320$$.push($bottomLimit$$inline_8335_child$$inline_8338_gridBodyHeight$$inline_8314_limitRangeInRows$$inline_8319$$), 
    $rowHeaderSupport$$inline_8339$$ && $rowHeadersForAppend$$inline_8321$$.push($newRowHeaderElementsFragment$$.childNodes[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ + 1])))
  }
  for($k$$inline_8327_key$$inline_8326_l$$inline_8329$$ = 0;$k$$inline_8327_key$$inline_8326_l$$inline_8329$$ < $rowsForAppend$$inline_8320$$.length;$k$$inline_8327_key$$inline_8326_l$$inline_8329$$++) {
    for($idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ = 0;$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$ < $rowsForAppend$$inline_8320$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$].attributes.length;$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$++) {
      $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$ = D.$JSCompiler_alias_NULL$$, $rowsForAppend$$inline_8320$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$].attributes[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$].nodeName == $keyAttr$$inline_8332$$ && ($cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$ = $rowsForAppend$$inline_8320$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$].attributes[$idx$$inline_8334_kk$$inline_8328_newSet$$inline_8308$$].nodeValue, 
      $pos$$inline_8305_restSet$$inline_8310$$.hasOwnProperty($cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$) && ($cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$ = $pos$$inline_8305_restSet$$inline_8310$$[$cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$], (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($rowsForAppend$$inline_8320$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$], 
      0, 0, "linear", $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$[1] - $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$ * $gridHeight$$inline_8312_rowHeight$$inline_8315$$), $rowHeaderSupport$$inline_8339$$ && ($rowHeadersForAppend$$inline_8321$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$].style.top = $rowsForAppend$$inline_8320$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$].style.top, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($rowHeadersForAppend$$inline_8321$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$], 
      0, 0, "linear", $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$[1] - $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$ * $gridHeight$$inline_8312_rowHeight$$inline_8315$$))))
    }
    $cellSet_oldRowElements$$.appendChild($rowsForAppend$$inline_8320$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$]);
    $rowHeaderSupport$$inline_8339$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.appendChild($rowHeadersForAppend$$inline_8321$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$])
  }
  for($k$$inline_8327_key$$inline_8326_l$$inline_8329$$ = 0;$k$$inline_8327_key$$inline_8326_l$$inline_8329$$ < $cellSet_oldRowElements$$.childElementCount;$k$$inline_8327_key$$inline_8326_l$$inline_8329$$++) {
    if($cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$ = 0 * $k$$inline_8327_key$$inline_8326_l$$inline_8329$$ + "ms", $k$$inline_8327_key$$inline_8326_l$$inline_8329$$ < $oldLength$$inline_8306_oldRowHeaderElements_rowStart$$ - 1 ? ($pos$$inline_8305_restSet$$inline_8310$$ = (0,window.parseInt)($animOrder$$inline_8309_columnStart$$[$oldSet$$inline_8307_rowCount$$10$$[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$]].split("_")[1]) * $gridHeight$$inline_8312_rowHeight$$inline_8315$$, 
    $pos$$inline_8305_restSet$$inline_8310$$ < $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$[1] - $k$$inline_8327_key$$inline_8326_l$$inline_8329$$ * $gridHeight$$inline_8312_rowHeight$$inline_8315$$ || ($pos$$inline_8305_restSet$$inline_8310$$ = $colHeaderHeight$$inline_8313_limitRangeInPixels$$inline_8318_offset$$inline_8316$$[1] - ($k$$inline_8327_key$$inline_8326_l$$inline_8329$$ - 1) * $cellSet_oldRowElements$$.childNodes[1].clientHeight), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet_oldRowElements$$.childNodes[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$ + 
    1], "400ms", $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$, "ease-in", $pos$$inline_8305_restSet$$inline_8310$$), $rowHeaderSupport$$inline_8339$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.childNodes[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$ + 1], "400ms", $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$, "ease-in", $pos$$inline_8305_restSet$$inline_8310$$)) : 
    ((0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet_oldRowElements$$.childNodes[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$ + 1], "400ms", $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$, "ease-in", 0), $rowHeaderSupport$$inline_8339$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.childNodes[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$ + 1], "400ms", $cellRange$$1_delay$$inline_8331_dkey$$inline_8330_newRowElements_order$$inline_8333$$, 
    "ease-in", 0)), $k$$inline_8327_key$$inline_8326_l$$inline_8329$$ == $cellSet_oldRowElements$$.childElementCount - 2) {
      $cellSet_oldRowElements$$.childNodes[$k$$inline_8327_key$$inline_8326_l$$inline_8329$$].addEventListener("transitionend", function() {
        (0,window.setTimeout)(function() {
          if($rowHeaderSupport$$inline_8339$$) {
            var $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$ = $me$$inline_8304$$.$m_rowHeader$.firstChild;
            $me$$inline_8304$$.$m_rowHeader$.firstChild = D.$JSCompiler_alias_NULL$$;
            $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.innerHTML = "";
            $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.appendChild($newRowHeaderElementsClone$$inline_8341$$);
            $me$$inline_8304$$.$m_startRowHeader$ = 0
          }
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$ = $me$$inline_8304$$.$m_databody$.firstChild;
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.innerHTML = "";
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.appendChild($newElementSetClone$$inline_8340$$);
          $me$$inline_8304$$.$m_active$ && ($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$ = $me$$inline_8304$$.$m_active$, $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$ = $me$$inline_8304$$.createIndex(-1 === $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.row ? 0 : $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.row, -1 === $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.column ? 0 : $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$.column), 
          (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($me$$inline_8304$$, $newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($me$$inline_8304$$) ? $me$$inline_8304$$.$selectAndFocus$($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$) : $me$$inline_8304$$.$activeAndFocus$($newRowHeaderElements$$1_oldRowHeaderElements$$inline_8297$$))
        }, 100)
      }, D.$JSCompiler_alias_FALSE$$);
      break
    }
  }
};
D.$JSCompiler_StaticMethods_isNumeric$$ = function $$JSCompiler_StaticMethods_isNumeric$$$($v$$12$$) {
  return/^-{0,1}\d*\.{0,1}\d+$/.test($v$$12$$)
};
D.$JSCompiler_StaticMethods_getDataKeySet$$ = function $$JSCompiler_StaticMethods_getDataKeySet$$$($JSCompiler_StaticMethods_getDataKeySet$self$$, $initialData$$) {
  var $dataKeySet$$, $keyAttr$$, $i$$829$$, $j$$113$$;
  $dataKeySet$$ = [];
  $keyAttr$$ = $JSCompiler_StaticMethods_getDataKeySet$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$829$$ = 0;$i$$829$$ < $initialData$$.childNodes.length;$i$$829$$++) {
    for($j$$113$$ = 0;$j$$113$$ < $initialData$$.childNodes[$i$$829$$].attributes.length;$j$$113$$++) {
      if($initialData$$.childNodes[$i$$829$$].attributes[$j$$113$$].nodeName == $keyAttr$$) {
        $dataKeySet$$.push($initialData$$.childNodes[$i$$829$$].attributes[$j$$113$$].nodeValue);
        break
      }
    }
  }
  return $dataKeySet$$
};
D.$JSCompiler_StaticMethods_getCssSupport$$ = function $$JSCompiler_StaticMethods_getCssSupport$$$($cssprop$$) {
  function $toCamel$$($cssprop$$) {
    return $cssprop$$.replace(/\-([a-z])/gi, function($cssprop$$, $toCamel$$) {
      return $toCamel$$.toUpperCase()
    })
  }
  var $vendors$$, $root$$22$$, $i$$830$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$22$$ = window.document.documentElement;
  for($i$$830$$ = 0;$i$$830$$ < $vendors$$.length;$i$$830$$++) {
    if($css3mc$$ = $toCamel$$($vendors$$[$i$$830$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$22$$.style) {
      return $css3mc$$
    }
  }
};
D.$JSCompiler_StaticMethods_changeStyleProperty$$ = function $$JSCompiler_StaticMethods_changeStyleProperty$$$($target$$116$$, $prop$$18$$, $value$$149$$, $action$$19$$) {
  "undefined" != typeof $prop$$18$$ && ($target$$116$$.style[$prop$$18$$] = "remove" == $action$$19$$ ? "" : $value$$149$$)
};
D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$ = function $$JSCompiler_StaticMethods_addUpDownMoveStyle$$$($target$$117$$, $duration$$95$$, $delay$$69$$, $timing$$, $y$$284$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$117$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), $delay$$69$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$117$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), $timing$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$117$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), $duration$$95$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$117$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), "translate3d(0," + $y$$284$$ + "px,0)")
};
D.$JSCompiler_StaticMethods__getSortIcon$$ = function $$JSCompiler_StaticMethods__getSortIcon$$$($header$$13$$) {
  return $header$$13$$.lastChild.firstChild
};
return DvtDataGrid;
});