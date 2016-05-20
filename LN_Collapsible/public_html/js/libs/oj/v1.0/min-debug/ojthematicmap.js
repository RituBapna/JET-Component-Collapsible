/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$23$$, $$$$23$$) {
  $oj$$23$$.$__registerWidget$("oj.ojThematicMap", $$$$23$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_loadedBasemaps$:[], $_checkBasemaps$:[], $_supportedLocales$:"ar cs da de el es fi fr hu it iw ja ko nl no pl pt pt_BR ro ru sk sv th tr zh_CN zh_TW".split(" "), $_CreateDvtComponent$:function($context$$50$$, $callback$$97$$, $callbackObj$$6$$) {
    return DvtThematicMap.newInstance($context$$50$$, $callback$$97$$, $callbackObj$$6$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$8$$ = this._super();
    $styleClasses$$8$$.push("oj-thematicmap");
    return $styleClasses$$8$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$9$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$9$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$9$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderStyle", property:"border-style"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}, {path:"styleDefaults/dataMarkerDefaults/borderWidth", 
    property:"border-width"}];
    return $styleClasses$$9$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, $_Render$:function() {
    this.$_loadBasemap$();
    for (var $i$$250$$ = 0;$i$$250$$ < this.$_checkBasemaps$.length;$i$$250$$++) {
      if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$250$$]]) {
        return;
      }
    }
    this.$_checkBasemaps$ = [];
    this.$_updateDataLayerSelection$();
    this._super();
    this._trigger("load", null, null);
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$22$$ = $oj$$23$$.$Config$.$getLocale$(), $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers_pointDataLayers$$ = this.options.areaLayers;
      if ($areaLayers_pointDataLayers$$) {
        for (var $i$$251$$ = 0;$i$$251$$ < $areaLayers_pointDataLayers$$.length;$i$$251$$++) {
          var $layer$$ = $areaLayers_pointDataLayers$$[$i$$251$$].layer;
          $layer$$ && ($layer$$ = $layer$$.charAt(0).toUpperCase() + $layer$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$, $locale$$22$$));
        }
      }
      ($areaLayers_pointDataLayers$$ = this.options.pointDataLayers) && 0 < $areaLayers_pointDataLayers$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$19$$) {
    if (!this.$_loadedBasemaps$[$url$$19$$]) {
      var $resolvedUrl$$ = $oj$$23$$.$Config$.$getResourceUrl$($url$$19$$), $thisRef$$ = this, $loadedBundles$$ = this.$_loadedBasemaps$;
      $$$$23$$.getScript($resolvedUrl$$, function() {
        $loadedBundles$$[$url$$19$$] = !0;
        $thisRef$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName$$, $i$$252_layer$$1$$, $bundleUrl_locale$$23_localeList$$) {
    var $relativeUrl$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1_bundleName$$ + $i$$252_layer$$1$$ + ".js";
    this.$_checkBasemaps$.push($relativeUrl$$);
    if (-1 === $bundleUrl_locale$$23_localeList$$.indexOf("en")) {
      var $splitLocale$$ = $bundleUrl_locale$$23_localeList$$.split("_");
      $bundleUrl_locale$$23_localeList$$ = [];
      for (var $j$$38$$ = 0;$j$$38$$ < $splitLocale$$.length;$j$$38$$++) {
        for (var $tempLocale$$ = "", $k$$10$$ = 0;$k$$10$$ < $j$$38$$ + 1;$k$$10$$++) {
          0 != $k$$10$$ && ($tempLocale$$ += "_"), $tempLocale$$ += $splitLocale$$[$k$$10$$];
        }
        $bundleUrl_locale$$23_localeList$$.push($tempLocale$$);
      }
      $basemap$$1_bundleName$$ = "resources/internal-deps/dvt/thematicMap/resourceBundles/" + $basemap$$1_bundleName$$ + $i$$252_layer$$1$$ + "Bundle";
      for ($i$$252_layer$$1$$ = $bundleUrl_locale$$23_localeList$$.length - 1;0 <= $i$$252_layer$$1$$;$i$$252_layer$$1$$++) {
        if (-1 !== this.$_supportedLocales$.indexOf($bundleUrl_locale$$23_localeList$$[$i$$252_layer$$1$$])) {
          $bundleUrl_locale$$23_localeList$$ = $basemap$$1_bundleName$$ + "_" + $bundleUrl_locale$$23_localeList$$[$i$$252_layer$$1$$] + ".js";
          this.$_checkBasemaps$.push($bundleUrl_locale$$23_localeList$$);
          this.$_loadResourceByUrl$($bundleUrl_locale$$23_localeList$$);
          break;
        }
      }
    }
    this.$_loadResourceByUrl$($relativeUrl$$);
  }, $_HandleEvent$:function($event$$270$$) {
    var $selection$$6$$, $id$$30$$;
    if (($event$$270$$ && $event$$270$$.getType ? $event$$270$$.getType() : null) === DvtSelectionEvent.TYPE) {
      $selection$$6$$ = {};
      $id$$30$$ = $event$$270$$.getParamValue("clientId");
      $selection$$6$$[$id$$30$$] = $event$$270$$.getSelection();
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$30$$ !== $dataLayerId$$ && ($selection$$6$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$6$$);
    } else {
      this._super($event$$270$$);
    }
  }, $_updateDataLayerSelection$:function() {
    var $selection$$7$$ = this.options.selection;
    if ($selection$$7$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$253$$ = 0;$i$$253$$ < $als_pdls$$.length;$i$$253$$++) {
          $selection$$7$$[$als_pdls$$[$i$$253$$].id] && ($als_pdls$$[$i$$253$$].selection = $selection$$7$$[$als_pdls$$[$i$$253$$].id]);
        }
      }
      $als_pdls$$ = this.options.areaLayers;
      for ($i$$253$$ = 0;$i$$253$$ < $als_pdls$$.length;$i$$253$$++) {
        var $adl$$ = $als_pdls$$[$i$$253$$].areaDataLayer;
        $selection$$7$$[$adl$$.id] && ($adl$$.selection = $selection$$7$$[$adl$$.id]);
      }
    }
  }, $_SupportsOptionChangeEvent$:function($key$$96$$) {
    return "selection" == $key$$96$$;
  }, getNodeBySubId:function($locator$$16$$) {
    return this._super($locator$$16$$);
  }, getSubIdByNode:function($node$$34$$) {
    return this._super($node$$34$$);
  }, getArea:function($dataLayerId$$1$$, $id$$31$$) {
    var $auto$$4$$ = this.$_component$.getAutomation();
    return new $oj$$23$$.$ThematicMapArea$($auto$$4$$.getData($dataLayerId$$1$$, "area", $id$$31$$));
  }, getMarker:function($dataLayerId$$2$$, $id$$32$$) {
    var $auto$$5$$ = this.$_component$.getAutomation();
    return new $oj$$23$$.$ThematicMapMarker$($auto$$5$$.getData($dataLayerId$$2$$, "marker", $id$$32$$));
  }});
  $oj$$23$$.$ThematicMapMarker$ = function $$oj$$23$$$$ThematicMapMarker$$($data$$136$$) {
    this.$_data$ = $data$$136$$;
  };
  $goog$exportPath_$$("ThematicMapMarker", $oj$$23$$.$ThematicMapMarker$, $oj$$23$$);
  $oj$$23$$.$ThematicMapMarker$.prototype.$getColor$ = function $$oj$$23$$$$ThematicMapMarker$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getColor", {$getColor$:$oj$$23$$.$ThematicMapMarker$.prototype.$getColor$});
  $oj$$23$$.$ThematicMapMarker$.prototype.$getTooltip$ = function $$oj$$23$$$$ThematicMapMarker$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getTooltip", {$getTooltip$:$oj$$23$$.$ThematicMapMarker$.prototype.$getTooltip$});
  $oj$$23$$.$ThematicMapMarker$.prototype.$getLabel$ = function $$oj$$23$$$$ThematicMapMarker$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getLabel", {$getLabel$:$oj$$23$$.$ThematicMapMarker$.prototype.$getLabel$});
  $oj$$23$$.$ThematicMapMarker$.prototype.isSelected = function $$oj$$23$$$$ThematicMapMarker$$$isSelected$() {
    return this.$_data$ ? this.$_data$.isSelected : !1;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.isSelected", {isSelected:$oj$$23$$.$ThematicMapMarker$.prototype.isSelected});
  $oj$$23$$.$ThematicMapArea$ = function $$oj$$23$$$$ThematicMapArea$$($data$$137$$) {
    this.$_data$ = $data$$137$$;
  };
  $goog$exportPath_$$("ThematicMapArea", $oj$$23$$.$ThematicMapArea$, $oj$$23$$);
  $oj$$23$$.$ThematicMapArea$.prototype.$getColor$ = function $$oj$$23$$$$ThematicMapArea$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getColor", {$getColor$:$oj$$23$$.$ThematicMapArea$.prototype.$getColor$});
  $oj$$23$$.$ThematicMapArea$.prototype.$getTooltip$ = function $$oj$$23$$$$ThematicMapArea$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getTooltip", {$getTooltip$:$oj$$23$$.$ThematicMapArea$.prototype.$getTooltip$});
  $oj$$23$$.$ThematicMapArea$.prototype.$getLabel$ = function $$oj$$23$$$$ThematicMapArea$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getLabel", {$getLabel$:$oj$$23$$.$ThematicMapArea$.prototype.$getLabel$});
  $oj$$23$$.$ThematicMapArea$.prototype.isSelected = function $$oj$$23$$$$ThematicMapArea$$$isSelected$() {
    return this.$_data$ ? this.$_data$.isSelected : !1;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.isSelected", {isSelected:$oj$$23$$.$ThematicMapArea$.prototype.isSelected});
});
