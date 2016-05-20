/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$25$$, $$$$25$$) {
  (function() {
    function $_addSheet$$($opts$$23$$) {
      var $tmp$$2$$ = !1, $isNew$$2$$ = !0;
      $opts$$23$$.$str$ && ($opts$$23$$.title && ($tmp$$2$$ = $$$$25$$("style[id\x3d'" + $opts$$23$$.title + "-stylesheet']")[0]), $tmp$$2$$ ? $isNew$$2$$ = !1 : ($tmp$$2$$ = document.createElement("style"), $tmp$$2$$.setAttribute("type", "text/css"), $opts$$23$$.title && $tmp$$2$$.setAttribute("id", $opts$$23$$.title + "-stylesheet")), $tmp$$2$$.styleSheet ? $isNew$$2$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$2$$), $tmp$$2$$.styleSheet.cssText = $opts$$23$$.$str$) : $tmp$$2$$.styleSheet.cssText = 
      $tmp$$2$$.styleSheet.cssText + " " + $opts$$23$$.$str$ : ($tmp$$2$$.appendChild(document.createTextNode($opts$$23$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$2$$)));
    }
    function $_addKeyFilter$$($obj$$53$$) {
      $_aKeyHandlerStack$$.push($obj$$53$$);
      $$$$25$$($obj$$53$$.$_selector$).keydown($_KeyFilterHandler$$);
    }
    function $_KeyFilterHandler$$($e$$90$$) {
      var $s$$11$$ = "";
      $oj$$25$$.$DomUtils$.$isMetaKeyPressed$($e$$90$$) ? $s$$11$$ += "ctrl+" : $e$$90$$.shiftKey && ($s$$11$$ += "shift+");
      var $key$$99$$ = $e$$90$$.which;
      switch($key$$99$$) {
        case 32:
          $s$$11$$ += "space";
          break;
        case 37:
          $s$$11$$ += "left";
          break;
        case 38:
          $s$$11$$ += "up";
          break;
        case 39:
          $s$$11$$ += "right";
          break;
        case 40:
          $s$$11$$ += "down";
          break;
        case 46:
          $s$$11$$ += "del";
          break;
        case 33:
          $s$$11$$ += "pgup";
          break;
        case 34:
          $s$$11$$ += "pgdn";
          break;
        case 35:
          $s$$11$$ += "end";
          break;
        case 36:
          $s$$11$$ += "home";
          break;
        case 56:
          $s$$11$$ = "*";
          break;
        case 113:
          $s$$11$$ += "f" + (1 - (112 - $key$$99$$));
      }
      if (0 !== $s$$11$$.length) {
        var $retHandler$$ = void 0;
        $$$$25$$.each($_aKeyHandlerStack$$, function($i$$260$$, $obj$$54$$) {
          if ($obj$$54$$.$_this$.$_data$.ui.$focused$ && $obj$$54$$.$_handler$[$s$$11$$]) {
            return $e$$90$$.preventDefault(), $retHandler$$ = $obj$$54$$.$_handler$[$s$$11$$].call($obj$$54$$.$_this$, $e$$90$$), !1;
          }
        });
        return $retHandler$$;
      }
    }
    function $_removeKeyFilter$$($selector$$18$$) {
      $$$$25$$.each($_aKeyHandlerStack$$, function($i$$261$$) {
        if ($_aKeyHandlerStack$$[$i$$261$$].$_selector$ === $selector$$18$$) {
          return $$$$25$$($selector$$18$$).off("keydown"), $_aKeyHandlerStack$$[$i$$261$$] = null, $_aKeyHandlerStack$$.splice($i$$261$$, 1), !1;
        }
      });
    }
    var $_arMenuCmdMap$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_aEvNames$$ = "optionChange hover dehover expand collapse loaded move remove rename refresh expandAll collapseAll destroy create before remove cut copy paste".split(" "), $scrollbar_width$$, $e1$$, $e2$$;
    $$$$25$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$ = $$$$25$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$ = $$$$25$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$.width() - $e2$$.width(), $e1$$.add($e2$$).remove()) : ($e1$$ = $$$$25$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$.width(), $e1$$.parent().remove());
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1, $_aInstances$$ = [];
    $oj$$25$$.$__registerWidget$("oj.ojTree", $$$$25$$.oj.baseComponent, {widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{dnd:{$reorder$:"disable"}, expandParents:!1, initExpanded:null, $initLoaded$:[], selection:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, destroy:null, expand:null, 
    expandAll:null, hover:null, loaded:null, move:null, optionChange:null, paste:null, refresh:null, rename:null}, collapse:function($node$$35$$, $skipAnim$$) {
      var $dur$$ = $skipAnim$$ ? 0 : this.$_animDuration$;
      $node$$35$$ = this.$_getNode$($node$$35$$);
      if (!$node$$35$$.length || -1 === $node$$35$$ || !$node$$35$$.hasClass("oj-expanded") || this.$_data$.$core$.locked || $node$$35$$.hasClass("oj-disabled")) {
        return!1;
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$35$$, func:"collapse"}, "before");
      if ("boolean" != typeof $rslt$$ || $rslt$$) {
        ($skipAnim$$ || $dur$$) && $node$$35$$.children("ul").attr("style", "display:block !important"), $node$$35$$.removeClass("oj-expanded").addClass("oj-collapsed").attr("aria-expanded", "false"), $$$$25$$($node$$35$$.children()[0]).removeClass("oj-selected").addClass("oj-default"), !$skipAnim$$ && $dur$$ ? this.$_slide$($node$$35$$, !0) : ($node$$35$$.children("ul")[0].style.display = "none", this.$_emitEvent$({obj:$node$$35$$}, "collapse"), this.after_close($node$$35$$));
      }
    }, $_slide$:function($node$$36$$, $bSlideUp$$) {
      var $ul$$, $hNow$$, $hFinal$$;
      $node$$36$$.on("transitionend", $$$$25$$.proxy(this.$_transitionEndHandler$, this));
      $ul$$ = $$$$25$$($node$$36$$.children("ul"));
      $bSlideUp$$ ? ($hNow$$ = $ul$$[0].offsetHeight, $hFinal$$ = 0) : ($hNow$$ = 0, $hFinal$$ = this.$_getElemHeight$($ul$$[0]));
      $ul$$.css("max-height", $hNow$$ + "px");
      $ul$$.css("overflow", "hidden");
      $bSlideUp$$ || ($ul$$[0].style.display = "block");
      setTimeout(function() {
        $ul$$.addClass("oj-tree-transition");
        $ul$$.css("max-height", $hFinal$$ + "px");
      }, 10);
    }, $_getElemHeight$:function($el$$17$$) {
      var $parent$$26$$, $nextSib$$, $h$$7$$, $disp$$, $div$$4$$ = $$$$25$$("\x3cdiv style\x3d'position: absolute'\x3e");
      $parent$$26$$ = $el$$17$$.parentNode;
      $nextSib$$ = $el$$17$$.nextSibling;
      $parent$$26$$.removeChild($el$$17$$);
      $disp$$ = $el$$17$$.style.display;
      $el$$17$$.style.display = "block";
      $div$$4$$.append($el$$17$$);
      this.$_$container$[0].appendChild($div$$4$$[0]);
      $h$$7$$ = $el$$17$$.offsetHeight || $el$$17$$.scrollHeight;
      $el$$17$$.style.display = $disp$$;
      this.$_$container$[0].removeChild($div$$4$$[0]);
      $div$$4$$[0].removeChild($el$$17$$);
      $nextSib$$ ? $parent$$26$$.insertBefore($el$$17$$, $nextSib$$) : $parent$$26$$.appendChild($el$$17$$);
      return $h$$7$$;
    }, $_transitionEndHandler$:function($$ul_e$$91$$) {
      $$ul_e$$91$$ = $$$$25$$($$ul_e$$91$$.target);
      var $node$$37$$ = $$ul_e$$91$$.closest("li");
      $node$$37$$.off("transitionend", this.$_transitionEndHandler$);
      $node$$37$$.hasClass("oj-collapsed") ? ($$ul_e$$91$$[0].style.display = "none", this.$_emitEvent$({obj:$node$$37$$}, "collapse"), this.after_close($node$$37$$)) : ($$ul_e$$91$$[0].style.display = "block", $$ul_e$$91$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$37$$}, "expand"), this.after_open($node$$37$$));
    }, collapseAll:function($node$$38$$, $anim$$) {
      var $origTarg$$ = $node$$38$$ ? $node$$38$$ : -1, $_this$$1$$ = this;
      if (!this.$_data$.$core$.locked && (($node$$38$$ = $node$$38$$ ? this.$_getNode$($node$$38$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$38$$), $node$$38$$ && -1 !== $origTarg$$ || ($node$$38$$ = this.$_$container_ul$), !$node$$38$$.hasClass("oj-disabled"))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$38$$) && ($subject$$ = $node$$38$$[0]);
        var $objs$$ = $node$$38$$.find("li.oj-expanded");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$);
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll");
      }
    }, expand:function($node$$39$$, $skipAnim$$1$$) {
      this.$_expand$($node$$39$$, !1, $skipAnim$$1$$);
    }, expanded:function($nodes$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if ($nodes$$ && "array" === $$$$25$$.type($nodes$$)) {
        if (this.$_data$.$core$.locked) {
          return null;
        }
        $exlen$$ = $nodes$$.length;
        $$$$25$$.each($nodes$$, function($i$$262$$, $val$$39$$) {
          $_this$$2$$.$_expand$($val$$39$$, !1, $skipAnim$$2$$);
        });
        return null;
      }
      $nodes$$ = this.$_$container_ul$.find("li.oj-expanded");
      $exlen$$ = $nodes$$.length;
      $exlr$$ = [];
      for (var $n$$26$$ = 0;$n$$26$$ < $exlen$$;$n$$26$$++) {
        $exlr$$.push($nodes$$[$n$$26$$]);
      }
      return $$$$25$$($exlr$$);
    }, expandAll:function($node$$40$$, $anim$$1$$) {
      this.$_expandAll$($node$$40$$, $anim$$1$$);
    }, toggleExpand:function($node$$41$$, $skipAnim$$3$$) {
      $node$$41$$ = this.$_getNode$($node$$41$$);
      if (-1 !== $node$$41$$ && !$node$$41$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if ($node$$41$$.hasClass("oj-collapsed")) {
          return this.expand($node$$41$$, $skipAnim$$3$$);
        }
        if ($node$$41$$.hasClass("oj-expanded")) {
          return this.collapse($node$$41$$, $skipAnim$$3$$);
        }
      }
    }, deselect:function($node$$42$$) {
      var $prevSelections$$ = this.options.selection.slice(0);
      this.$_deselect$($node$$42$$);
      this.$_fireOptionChangeEvent$("selection", $prevSelections$$, this.options.selection, null);
    }, deselectAll:function($context$$51$$) {
      if (!this.$_data$.$core$.locked) {
        var $prevSelections$$1$$ = this.options.selection.slice(0);
        this.$_deselectAll$($context$$51$$, !1);
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$1$$, this.options.selection, null);
      }
    }, select:function($node$$43$$) {
      this.$_select$($node$$43$$, !0);
    }, toggleSelect:function($node$$44$$) {
      $node$$44$$ = this.$_getNode$($node$$44$$);
      if (!$node$$44$$.length) {
        return!1;
      }
      $node$$44$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || (this.isSelected($node$$44$$) ? this.$_deselect$($node$$44$$) : this.$_select$($node$$44$$, !0));
    }, isCollapsed:function($node$$45$$) {
      return($node$$45$$ = this.$_getNode$($node$$45$$)) && -1 !== $node$$45$$ && $node$$45$$.hasClass("oj-collapsed");
    }, isExpanded:function($node$$46$$) {
      return($node$$46$$ = this.$_getNode$($node$$46$$)) && -1 !== $node$$46$$ && $node$$46$$.hasClass("oj-expanded");
    }, isLeaf:function($node$$47$$) {
      return this.$_isLeaf$($node$$47$$);
    }, isSelected:function($node$$48$$) {
      return 0 <= this.$_data$.ui.selected.index(this.$_getNode$($node$$48$$));
    }, create:function($refnode$$, $position$$12$$, $data$$142$$) {
      return this.$_create_node$($refnode$$, $position$$12$$, $data$$142$$);
    }, remove:function($node$$49$$) {
      $node$$49$$ = this.$_getNode$($node$$49$$);
      if (!$node$$49$$.length || $node$$49$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      var $p$$7_rslt$$1$$ = this.$_emitEvent$({obj:$node$$49$$, func:"remove"}, "before");
      if ("boolean" == typeof $p$$7_rslt$$1$$ && !$p$$7_rslt$$1$$) {
        return!1;
      }
      this.$__rollback$();
      var $p$$7_rslt$$1$$ = this.$_getParent$($node$$49$$), $prev$$3$$ = $$$$25$$([]), $t$$1$$ = this, $sib$$ = this.$_getPrev$($node$$49$$);
      $node$$49$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$1$$.$_getPrev$(this));
      });
      $node$$49$$ = $node$$49$$.detach();
      -1 !== $p$$7_rslt$$1$$ && 0 === $p$$7_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$7_rslt$$1$$.removeClass("oj-expanded oj-collapsed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_clean_node$($p$$7_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$49$$, prev:$sib$$, parent:$p$$7_rslt$$1$$}, "remove");
      return $node$$49$$;
    }, getText:function($node$$50$$) {
      $node$$50$$ = this.$_getNode$($node$$50$$);
      if (!$node$$50$$.length) {
        return!1;
      }
      var $ht$$ = this.$_data$.$core$.$htmlTitles$;
      $node$$50$$ = $node$$50$$.children("a:eq(0)");
      if ($ht$$) {
        return $node$$50$$ = $node$$50$$.clone(), $node$$50$$.children("INS").remove(), $node$$50$$.html();
      }
      $node$$50$$ = $node$$50$$.find("span:eq(0)");
      return $node$$50$$[0].textContent;
    }, rename:function($node$$51$$, $text$$15$$) {
      this.$_rename_node$($node$$51$$, $text$$15$$);
    }, hover:function($node$$52$$) {
      $node$$52$$ = this.$_getNode$($node$$52$$);
      if (!$node$$52$$.length) {
        return!1;
      }
      if (!$node$$52$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$52$$, func:"hover"}, "before");
        if ("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          this.$_data$.$core$.$initFocus$ = !0, $node$$52$$.hasClass("oj-hover") || this.dehover(), this.$_data$.ui.$hovered$ = $node$$52$$.children("a").addClass("oj-hover").parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$52$$), this.$_emitEvent$({obj:$node$$52$$}, "hover");
        }
      }
    }, dehover:function() {
      var $obj$$55$$ = this.$_data$.ui.$hovered$, $p$$8$$;
      if (!$obj$$55$$ || !$obj$$55$$.length) {
        return!1;
      }
      $obj$$55$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || ($p$$8$$ = $obj$$55$$.children("a").removeClass("oj-hover").parent(), this.$_$container_ul$.removeAttr("aria-activedescendant"), this.$_data$.ui.$hovered$[0] === $p$$8$$[0] && (this.$_data$.ui.$hovered$ = null), this.$_emitEvent$({obj:$obj$$55$$}, "dehover"));
    }, getPath:function($node$$53$$, $idMode$$) {
      var $p$$9$$ = [], $_this$$3$$ = this;
      $node$$53$$ = this.$_getNode$($node$$53$$);
      if (-1 === $node$$53$$ || !$node$$53$$ || !$node$$53$$.length) {
        return!1;
      }
      $node$$53$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$9$$.push($idMode$$ ? this.id : $_this$$3$$.getText(this));
      });
      $p$$9$$.reverse();
      $p$$9$$.push($idMode$$ ? $node$$53$$.attr("id") : this.getText($node$$53$$));
      return $p$$9$$;
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)");
    }, refresh:function($node$$54$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$54$$);
    }, move:function($node$$55$$, $refnode$$1$$, $position$$13$$, $iscopy$$) {
      this.$_move_node$($node$$55$$, $refnode$$1$$, $position$$13$$, $iscopy$$);
    }, getType:function($node$$56$$) {
      return this.$_getType$($node$$56$$);
    }, setType:function($node$$57$$, $str$$18$$) {
      return this.$_setType$($node$$57$$, $str$$18$$);
    }, getNodeBySubId:function($locator$$18$$) {
      return $locator$$18$$ ? this.$_processSubId$($locator$$18$$) : this.element ? this.element[0] : null;
    }, getParent:function($l$$10_node$$58$$) {
      return($l$$10_node$$58$$ = this.$_getParent$($l$$10_node$$58$$)) && 0 < $l$$10_node$$58$$.length ? $l$$10_node$$58$$ : null;
    }, getPrevSibling:function($l$$11_node$$59$$) {
      return($l$$11_node$$59$$ = this.$_getPrev$($l$$11_node$$59$$, !0)) && 0 < $l$$11_node$$59$$.length ? $l$$11_node$$59$$ : null;
    }, getNextSibling:function($l$$12_node$$60$$) {
      return($l$$12_node$$60$$ = this.$_getNext$($l$$12_node$$60$$, !0)) && 0 < $l$$12_node$$60$$.length ? $l$$12_node$$60$$ : null;
    }, getChildren:function($l$$13_node$$61$$) {
      return($l$$13_node$$61$$ = this.$_getChildren$($l$$13_node$$61$$ ? $l$$13_node$$61$$ : -1)) && 0 < $l$$13_node$$61$$.length ? $l$$13_node$$61$$ : null;
    }, destroy:function() {
      this.$_emitEvent$({obj:-1}, "destroy");
      this._super();
    }, _ComponentCreate:function() {
      this._super();
      this.$_index$ = this.$_newIndex$();
      $_aInstances$$.push(this);
      this.$_elemId$ = this.element.attr("id");
      void 0 === this.$_elemId$ && (this.$_elemId$ = "oj-tree-" + this.$_index$, this.element.attr("id", this.$_elemId$));
      this.$_elemId$ = "#" + this.$_elemId$;
      var $JSCompiler_inline_result$$7_hash$$inline_776$$;
      $JSCompiler_inline_result$$7_hash$$inline_776$$ = ($JSCompiler_inline_result$$7_hash$$inline_776$$ = this.$_elemId$) ? $JSCompiler_inline_result$$7_hash$$inline_776$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
      this.$_$container$ = $$$$25$$($JSCompiler_inline_result$$7_hash$$inline_776$$);
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_initTree$();
      this.$_animDuration$ = this.$_getAnimDuration$();
      this.$_start$();
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$markup_ul$ && (this.$_$container$.append(this.$_data$.html.$markup_ul$), this.$_data$.html.$markup_div$.remove(), this.$_data$.html.$markup_div$ = !1, this.$_data$.html.$useExistingMarkup$ = !1);
      this.$_data$.$ds$.type = 0;
      this._super();
    }, _setOption:function($key$$100$$, $newval$$, $flags$$36$$) {
      var $prev$$4_val$$40$$;
      if ("selection" === $key$$100$$) {
        $prev$$4_val$$40$$ = this.options[$key$$100$$].slice(0), this._super($key$$100$$, $newval$$, $flags$$36$$), this.$_handleSelectionOptionChange$(), this.$_fireOptionChangeEvent$($key$$100$$, $prev$$4_val$$40$$, this.options.selection, null);
      } else {
        if ("selectionMode" === $key$$100$$) {
          "none" === $newval$$ ? $prev$$4_val$$40$$ = 0 : "single" === $newval$$ ? $prev$$4_val$$40$$ = 1 : "multiple" === $newval$$ ? $prev$$4_val$$40$$ = -1 : ($prev$$4_val$$40$$ = 0, $newval$$ = "none"), $prev$$4_val$$40$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $prev$$4_val$$40$$);
        } else {
          if ("icons" === $key$$100$$) {
            "boolean" == $$$$25$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && ((this.$_data$.$themes$.icons = $newval$$) ? this.$_showIcons$() : this.$_hideIcons$());
          } else {
            if ("contextMenu" === $key$$100$$) {
              this.$_clearMenu$(), $newval$$ && this.$_initMenu$($newval$$);
            } else {
              if ("disabled" === $key$$100$$) {
                this.$_handleDisabledChanged$($newval$$);
              } else {
                if ("data" === $key$$100$$) {
                  this._super($key$$100$$, $newval$$, $flags$$36$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_initExpandedOpts$();
                  this.$_loadNodes$();
                  return;
                }
                if ("dnd" === $key$$100$$) {
                  this._super($key$$100$$, $newval$$, $flags$$36$$);
                  this.$_initDnDOpts$();
                  return;
                }
              }
            }
          }
        }
        this._super($key$$100$$, $newval$$, $flags$$36$$);
      }
    }, $_clearTree$:function() {
      var $n$$27$$ = this.$_index$;
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "");
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$25$$(document).unbind(".oj-tree-" + $n$$27$$).undelegate(".oj-tree-" + $n$$27$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null;
    }, $_getNode$:function($obj$$56$$, $allow_multiple$$) {
      if ("undefined" === typeof $obj$$56$$ || null === $obj$$56$$) {
        return $allow_multiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$last_selected$;
      }
      var $$obj$$ = $$$$25$$($obj$$56$$, this.$_$container$);
      if ($$obj$$.is(".oj-tree") || -1 === $obj$$56$$) {
        return-1;
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1;
    }, $_getPrev$:function($obj$$57$$, $strict$$) {
      $obj$$57$$ = this.$_getNode$($obj$$57$$);
      if (-1 === $obj$$57$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child");
      }
      if (!$obj$$57$$.length) {
        return!1;
      }
      if ($strict$$) {
        return 0 < $obj$$57$$.prevAll("li").length ? $obj$$57$$.prevAll("li:eq(0)") : !1;
      }
      if ($obj$$57$$.prev("li").length) {
        for ($obj$$57$$ = $obj$$57$$.prev("li").eq(0);$obj$$57$$.hasClass("oj-expanded");) {
          $obj$$57$$ = $obj$$57$$.children("ul:eq(0)").children("li:last");
        }
        return $obj$$57$$;
      }
      var $o$$11$$ = $obj$$57$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$11$$.length ? $o$$11$$ : !1;
    }, $_getNext$:function($obj$$58$$, $strict$$1$$) {
      $obj$$58$$ = this.$_getNode$($obj$$58$$);
      return-1 === $obj$$58$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$58$$.length ? $strict$$1$$ ? 0 < $obj$$58$$.nextAll("li").size() ? $obj$$58$$.nextAll("li:eq(0)") : !1 : $obj$$58$$.hasClass("oj-expanded") ? $obj$$58$$.find("li:eq(0)") : 0 < $obj$$58$$.nextAll("li").size() ? $obj$$58$$.nextAll("li:eq(0)") : $obj$$58$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1;
    }, $_getParent$:function($o$$12_obj$$59$$) {
      $o$$12_obj$$59$$ = this.$_getNode$($o$$12_obj$$59$$);
      if (-1 == $o$$12_obj$$59$$ || !$o$$12_obj$$59$$.length) {
        return!1;
      }
      $o$$12_obj$$59$$ = $o$$12_obj$$59$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$12_obj$$59$$.length ? $o$$12_obj$$59$$ : -1;
    }, $_getChildren$:function($obj$$60$$) {
      $obj$$60$$ = this.$_getNode$($obj$$60$$);
      return-1 === $obj$$60$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$60$$.length ? $obj$$60$$.children("ul:eq(0)").children("li") : !1;
    }, $_isLeaf$:function($node$$62$$) {
      return($node$$62$$ = this.$_getNode$($node$$62$$)) && -1 !== $node$$62$$ && $node$$62$$.hasClass("oj-tree-leaf");
    }, $_getNodeElem$:function($el$$18_node$$63$$) {
      $el$$18_node$$63$$ = this.$_$container_ul$.find($el$$18_node$$63$$);
      var $ret$$35$$ = !1;
      $el$$18_node$$63$$ && $el$$18_node$$63$$.length && 0 < $el$$18_node$$63$$.length && $$$$25$$($el$$18_node$$63$$).is("li") && ($ret$$35$$ = $el$$18_node$$63$$);
      return $ret$$35$$;
    }, $_reference$:function($node$$64$$) {
      $node$$64$$.parents("div").eq(0);
      return this;
    }, $_applyDefaults$:function($to$$1$$, $from$$1$$) {
      void 0 != $to$$1$$ && void 0 != $from$$1$$ && $$$$25$$.each($from$$1$$, function($prop$$76$$, $val$$41$$) {
        void 0 == $to$$1$$[$prop$$76$$] && ($to$$1$$[$prop$$76$$] = $val$$41$$);
      });
    }, $_handleDisabledChanged$:function($newval$$1$$) {
      var $curState$$ = this.$_$container_ul$.hasClass("oj-disabled");
      $curState$$ || ($curState$$ = !1);
      "undefined" !== typeof $newval$$1$$ && $curState$$ != $newval$$1$$ && ($newval$$1$$ ? (this.$_$container_ul$.addClass("oj-disabled"), this.$_$container_ul$.prop("disabled", "disabled")) : (this.$_$container_ul$.removeClass("oj-disabled"), this.$_$container_ul$.removeAttr("disabled")), this.$_treeDisable$($newval$$1$$));
    }, $_treeDisable$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass("oj-disabled").css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass("oj-disabled").css("opacity", this.$_data$.ui.opacity));
    }, $_handleSelectionOptionChange$:function() {
      var $sels$$ = this.options.selection.slice(0), $cur$$2$$ = [], $aSelected_newvals$$, $_this$$5$$ = this, $$elem$$, $id$$33$$, $inList$$, $len$$15$$;
      $aSelected_newvals$$ = $$$$25$$.grep($sels$$, function($node$$65$$, $i$$263$$) {
        if ($$elem$$ = $_this$$5$$.$_getNodeElem$($node$$65$$)) {
          $cur$$2$$.push($$elem$$), $sels$$[$i$$263$$] = $$elem$$[0];
        } else {
          return!1;
        }
        return!0;
      });
      this.options.selection = $aSelected_newvals$$;
      $aSelected_newvals$$ = this.$_getSelected$();
      $$$$25$$.each($aSelected_newvals$$, function($i$$264$$, $node$$66$$) {
        $len$$15$$ = $cur$$2$$.length;
        $id$$33$$ = $$$$25$$($node$$66$$).attr("id");
        $inList$$ = !1;
        for ($i$$264$$ = 0;$i$$264$$ < $len$$15$$;$i$$264$$++) {
          if ($id$$33$$ == $cur$$2$$[$i$$264$$].attr("id")) {
            $inList$$ = !0;
            break;
          }
        }
        $inList$$ || $_this$$5$$.$_deselect$($node$$66$$);
      });
      this.$_setSelected$($cur$$2$$, null);
    }, $_prepare_move$:function($o$$13$$, $r$$1$$, $pos$$9$$, $cb$$1$$, $is_cb$$) {
      var $p$$10$$ = {$ot$:this};
      $p$$10$$.$o$ = $p$$10$$.$ot$.$_getNode$($o$$13$$);
      $p$$10$$.$r$ = -1 === $r$$1$$ ? -1 : this.$_getNode$($r$$1$$);
      $p$$10$$.$p$ = "undefined" === typeof $pos$$9$$ || !1 === $pos$$9$$ ? "last" : $pos$$9$$;
      if (!$is_cb$$ && this.$_data$.$core$.$prepared_move$.$o$ && this.$_data$.$core$.$prepared_move$.$o$[0] === $p$$10$$.$o$[0] && this.$_data$.$core$.$prepared_move$.$r$[0] === $p$$10$$.$r$[0] && this.$_data$.$core$.$prepared_move$.$p$ === $p$$10$$.$p$) {
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$), $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$);
      } else {
        $p$$10$$.$ot$ = this;
        $p$$10$$.$rt$ = this;
        if (-1 !== $p$$10$$.$r$ && $p$$10$$.$r$) {
          if (!/^(before|after)$/.test($p$$10$$.$p$) && !this.$_is_loaded$($p$$10$$.$r$)) {
            return this.$_load_node$($p$$10$$.$r$, function() {
              this.$_prepare_move$($o$$13$$, $r$$1$$, $pos$$9$$, $cb$$1$$, !0);
            });
          }
          switch($p$$10$$.$p$) {
            case "before":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index();
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "after":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index() + 1;
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$10$$.$cp$ = 0;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$, $p$$10$$.$cr$ = $p$$10$$.$r$;
          }
        } else {
          switch($p$$10$$.$cr$ = -1, $p$$10$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$10$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$;
          }
        }
        $p$$10$$.$np$ = -1 == $p$$10$$.$cr$ ? $p$$10$$.$rt$.$_$container$ : $p$$10$$.$cr$;
        $p$$10$$.$op$ = $p$$10$$.$ot$.$_getParent$($p$$10$$.$o$);
        $p$$10$$.$cop$ = $p$$10$$.$o$.index();
        -1 === $p$$10$$.$op$ && ($p$$10$$.$op$ = $p$$10$$.$ot$ ? $p$$10$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$10$$.$p$) && $p$$10$$.$op$ && $p$$10$$.$np$ && $p$$10$$.$op$[0] === $p$$10$$.$np$[0] && $p$$10$$.$o$.index() < $p$$10$$.$cp$ && $p$$10$$.$cp$++;
        $p$$10$$.$or$ = $p$$10$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$10$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepared_move$ = $p$$10$$;
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$, "prepare_move");
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$, "prepare_move");
      }
    }, check_move:function() {
      var $obj$$61$$ = this.$_data$.$core$.$prepared_move$, $ret$$36$$ = !0, $r$$2$$;
      $r$$2$$ = -1 === $obj$$61$$.$r$ ? this.$_$container$ : $obj$$61$$.$r$;
      if (!$obj$$61$$ || !$obj$$61$$.$o$ || $obj$$61$$.$or$[0] === $obj$$61$$.$o$[0] || !$obj$$61$$.$r$) {
        return!1;
      }
      if (!$obj$$61$$.$cy$) {
        if ($obj$$61$$.$op$ && $obj$$61$$.$np$ && $obj$$61$$.$op$[0] === $obj$$61$$.$np$[0] && $obj$$61$$.$cp$ - 1 === $obj$$61$$.$o$.index()) {
          return!1;
        }
        $obj$$61$$.$o$.each(function() {
          if (-1 !== $r$$2$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$36$$ = !1;
          }
        });
      }
      return $ret$$36$$;
    }, $_rename_node$:function($node$$67$$, $text$$16$$) {
      var $t$$2$$;
      $node$$67$$ = this.$_getNode$($node$$67$$);
      this.$__rollback$();
      $t$$2$$ = this.getText($node$$67$$);
      if ($node$$67$$ && $node$$67$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$67$$, func:"rename", title:$text$$16$$, prevTitle:$t$$2$$}, "before");
        if ("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return;
        }
      }
      $node$$67$$ && $node$$67$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments)) && this.$_emitEvent$({obj:$node$$67$$, title:$text$$16$$, prevTitle:$t$$2$$}, "rename");
    }, $_move_node$:function($obj$$62$$, $d$$6_o$$14_ref$$3$$, $position$$14$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      if (!($obj$$62$$.hasClass && $obj$$62$$.hasClass("oj-disabled") || this.$_data$.$core$.locked)) {
        if (!$is_prepared$$) {
          return this.$_prepare_move$($obj$$62$$, $d$$6_o$$14_ref$$3$$, $position$$14$$, function($p$$11$$) {
            this.$_move_node$($p$$11$$, !1, !1, $is_copy$$, !0, $skip_check$$);
          });
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0);
        if (!$skip_check$$ && !this.check_move()) {
          return!1;
        }
        this.$__rollback$();
        $d$$6_o$$14_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$6_o$$14_ref$$3$$ = $obj$$62$$.$o$.clone(!0), $d$$6_o$$14_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id);
        })) : $d$$6_o$$14_ref$$3$$ = $obj$$62$$.$o$;
        $obj$$62$$.$or$.length ? $obj$$62$$.$or$.before($d$$6_o$$14_ref$$3$$) : ($obj$$62$$.$np$.children("ul").length || $$$$25$$("\x3cul /\x3e").appendTo($obj$$62$$.$np$), $obj$$62$$.$np$.children("ul:eq(0)").append($d$$6_o$$14_ref$$3$$));
        try {
          $obj$$62$$.$ot$.$_clean_node$($obj$$62$$.$op$), $obj$$62$$.$rt$.$_clean_node$($obj$$62$$.$np$), $obj$$62$$.$op$.find("\x3e ul \x3e li").length || $obj$$62$$.$op$.removeClass("oj-expanded oj-collapsed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
        } catch ($e$$92$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0, this.$_data$.$core$.$prepared_move$.$oc$ = $d$$6_o$$14_ref$$3$$);
        $d$$6_o$$14_ref$$3$$ = $$$$25$$.extend(!0, {}, this.$_data$.$core$.$prepared_move$);
        $d$$6_o$$14_ref$$3$$.obj = $obj$$62$$.$o$;
        this.$_emitEvent$($d$$6_o$$14_ref$$3$$, "move");
        return this.$_data$.$core$.$prepared_move$;
      }
    }, $_getMove$:function() {
      return this.$_data$.$crrm$.$prepared_move$;
    }, $_getType$:function($node$$68$$) {
      var $n$$28$$ = null;
      this.options.types && ($n$$28$$ = this.$_getNode$($node$$68$$));
      return $n$$28$$ && $n$$28$$.length ? $n$$28$$.attr(this.options.types.attr) || "default" : !1;
    }, $_setType$:function($node$$69$$, $str$$19$$) {
      var $s$$12$$ = this.options.types, $tattr$$, $ret$$37$$ = !1;
      $node$$69$$ = this.$_getNode$($node$$69$$);
      $s$$12$$ && $node$$69$$ && -1 != $node$$69$$ && $node$$69$$.length && $str$$19$$ && ($tattr$$ = $s$$12$$.attr) && $s$$12$$[$str$$19$$] && ($node$$69$$.attr($tattr$$, $str$$19$$), $node$$69$$.addClass("oj-tree-type"), $ret$$37$$ = !0);
      return $ret$$37$$;
    }, $_check$:function($rule$$3$$, $obj$$63$$, $opts$$24$$) {
      $obj$$63$$ = this.$_getNode$($obj$$63$$);
      var $v$$1$$ = !1, $ty$$ = this.$_getType$($obj$$63$$), $d$$7$$ = 0, $_this$$6$$ = this, $s$$13$$ = this.$_getOptions$().types, $data$$143$$ = !1;
      if (-1 === $obj$$63$$) {
        if ($s$$13$$[$rule$$3$$]) {
          $v$$1$$ = $s$$13$$[$rule$$3$$];
        } else {
          return;
        }
      } else {
        if (!1 === $ty$$) {
          return;
        }
        ($data$$143$$ = this.$_data$.types.$defaults$.useData ? $obj$$63$$.data("oj-tree") : !1) && $data$$143$$.types && "undefined" !== typeof $data$$143$$.types[$rule$$3$$] ? $v$$1$$ = $data$$143$$.types[$rule$$3$$] : $s$$13$$.types[$ty$$] && "undefined" !== typeof $s$$13$$.types[$ty$$][$rule$$3$$] ? $v$$1$$ = $s$$13$$.types[$ty$$][$rule$$3$$] : $s$$13$$.types["default"] && "undefined" !== typeof $s$$13$$.types["default"][$rule$$3$$] && ($v$$1$$ = $s$$13$$.types["default"][$rule$$3$$]);
      }
      $$$$25$$.isFunction($v$$1$$) && ($v$$1$$ = $v$$1$$.call(this, $obj$$63$$));
      var $md$$ = this.$_data$.types.$defaults$.maxDepth;
      "maxDepth" === $rule$$3$$ && -1 !== $obj$$63$$ && !1 !== $opts$$24$$ && -2 !== this.$_data$.types.$defaults$.maxDepth && 0 !== $v$$1$$ && $obj$$63$$.children("a:eq(0)").parentsUntil(".oj-tree", "li").each(function($i$$265$$) {
        if (-1 !== $md$$ && 0 >= $md$$ - ($i$$265$$ + 1)) {
          return $v$$1$$ = 0, !1;
        }
        $d$$7$$ = 0 === $i$$265$$ ? $v$$1$$ : $_this$$6$$.$_check$($rule$$3$$, this, !1);
        if (-1 !== $d$$7$$ && 0 >= $d$$7$$ - ($i$$265$$ + 1)) {
          return $v$$1$$ = 0, !1;
        }
        0 <= $d$$7$$ && ($d$$7$$ - ($i$$265$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $d$$7$$ - ($i$$265$$ + 1));
        0 <= $md$$ && ($md$$ - ($i$$265$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $md$$ - ($i$$265$$ + 1));
      });
      return $v$$1$$;
    }, $_clean_node$:function($obj$$64$$) {
      $obj$$64$$ = $obj$$64$$ && -1 != $obj$$64$$ ? $$$$25$$($obj$$64$$) : this.$_$container_ul$;
      $obj$$64$$ = $obj$$64$$.is("li") ? $obj$$64$$.find("li").addBack() : $obj$$64$$.find("li");
      $obj$$64$$.removeClass("oj-tree-last").addClass("oj-tree-node").addClass("oj-draggable").filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-expanded").removeClass("oj-tree-leaf").addClass("oj-collapsed").attr("aria-expanded", "false");
      $obj$$64$$.not(".oj-expanded, .oj-collapsed").addClass("oj-tree-leaf").children("ul").remove();
      var $typeAttr$$ = this.options.types ? this.options.types.attr : !1;
      $obj$$64$$.find("li");
      var $disc$$, $t$$4$$;
      $$$$25$$.each($obj$$64$$, function() {
        $t$$4$$ = $$$$25$$(this);
        $disc$$ = $t$$4$$.find("\x3e ins");
        1 < $disc$$.length && ($disc$$ = $$$$25$$($disc$$[0]));
        $t$$4$$.hasClass("oj-tree-leaf") ? ($disc$$.removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.addClass("oj-tree-icon")) : ($disc$$.addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), $disc$$.removeClass("oj-tree-node-icon"));
        $typeAttr$$ && $t$$4$$.attr($typeAttr$$) && $t$$4$$.addClass("oj-tree-type");
      });
    }, $_create_node$:function($obj$$65$$, $position$$15$$, $js$$, $callback$$98$$, $is_loaded$$) {
      $obj$$65$$ = this.$_getNode$($obj$$65$$);
      if (-1 !== $obj$$65$$ && !$obj$$65$$.length) {
        return!1;
      }
      var $ht$$1$$ = this.$_data$.$core$.$htmlTitles$;
      $position$$15$$ = "undefined" === typeof $position$$15$$ ? "last" : $position$$15$$;
      var $d$$8$$ = $$$$25$$("\x3cli /\x3e"), $tmp$$3$$;
      if (!$is_loaded$$ && !this.$_is_loaded$($obj$$65$$)) {
        return this.$_load_node$($obj$$65$$, function() {
          this.$_create_node$($obj$$65$$, $position$$15$$, $js$$, $callback$$98$$, !0);
        }), !1;
      }
      this.$__rollback$();
      "string" === typeof $js$$ && ($js$$ = {data:$js$$});
      $js$$ || ($js$$ = {});
      $js$$.attr && $d$$8$$.attr($js$$.attr);
      $js$$.metadata && $d$$8$$.data($js$$.metadata);
      $js$$.state && $d$$8$$.addClass("expanded" === $js$$.state ? "oj-expanded" : "oj-collapsed");
      $js$$.data || ($js$$.data = void 0 !== $js$$.title ? $js$$.title : this.$getTranslatedString$("m_newnode"));
      $$$$25$$.isArray($js$$.data) || ($tmp$$3$$ = $js$$.data, $js$$.data = [], $js$$.data.push($tmp$$3$$));
      var $sp$$2$$;
      $$$$25$$.each($js$$.data, function($i$$267$$, $m$$24$$) {
        $tmp$$3$$ = $$$$25$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$25$$.isFunction($m$$24$$) && ($m$$24$$ = $m$$24$$.call(this, $js$$));
        $sp$$2$$ = $$$$25$$("\x3cspan class\x3d'oj-tree-title'\x3e");
        "string" == typeof $m$$24$$ ? ($sp$$2$$[$ht$$1$$ ? "html" : "text"]($m$$24$$), $tmp$$3$$.attr("href", "#")) : ($m$$24$$.attr || ($m$$24$$.attr = {}), $m$$24$$.attr.href || ($m$$24$$.attr.href = "#"), $sp$$2$$[$ht$$1$$ ? "html" : "text"]($m$$24$$.title), $m$$24$$.language && $tmp$$3$$.addClass($m$$24$$.language));
        $tmp$$3$$.append($sp$$2$$);
        $tmp$$3$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e");
        !$m$$24$$.icon && $js$$.icon && ($m$$24$$.icon = $js$$.icon);
        $m$$24$$.icon && (-1 === $m$$24$$.icon.indexOf("/") ? $tmp$$3$$.children("ins").addClass($m$$24$$.icon) : $tmp$$3$$.children("ins").css("background", "url('" + $m$$24$$.icon + "') center center no-repeat"));
        $d$$8$$.append($tmp$$3$$);
      });
      $d$$8$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
      -1 === $obj$$65$$ && ($obj$$65$$ = this.$_$container$, "before" === $position$$15$$ && ($position$$15$$ = "first"), "after" === $position$$15$$ && ($position$$15$$ = "last"));
      switch($position$$15$$) {
        case "before":
          $obj$$65$$.before($d$$8$$);
          $tmp$$3$$ = this.$_getParent$($obj$$65$$);
          break;
        case "after":
          $obj$$65$$.after($d$$8$$);
          $tmp$$3$$ = this.$_getParent$($obj$$65$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e");
          $obj$$65$$.children("ul").prepend($d$$8$$);
          $tmp$$3$$ = $obj$$65$$;
          break;
        case "last":
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e");
          $obj$$65$$.children("ul").append($d$$8$$);
          $tmp$$3$$ = $obj$$65$$;
          break;
        default:
          $obj$$65$$.children("ul").length || $obj$$65$$.append("\x3cul /\x3e"), $position$$15$$ || ($position$$15$$ = 0), $tmp$$3$$ = $obj$$65$$.children("ul").children("li").eq($position$$15$$), $tmp$$3$$.length ? $tmp$$3$$.before($d$$8$$) : $obj$$65$$.children("ul").append($d$$8$$), $tmp$$3$$ = $obj$$65$$;
      }
      if (-1 === $tmp$$3$$ || $tmp$$3$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$3$$ = -1;
      }
      this.$_clean_node$($tmp$$3$$);
      this.$_emitEvent$({obj:$d$$8$$, parent:$tmp$$3$$}, "create_node");
      $callback$$98$$ && $callback$$98$$.call(this, $d$$8$$);
      return $d$$8$$;
    }, $_expand$:function($obj$$66$$, $callback$$99$$, $skipAnim$$4$$) {
      $obj$$66$$ = this.$_getNode$($obj$$66$$);
      if (!$obj$$66$$.length) {
        return!1;
      }
      if (!$obj$$66$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if (!$obj$$66$$.hasClass("oj-collapsed")) {
          return $callback$$99$$ && $callback$$99$$.call(), !1;
        }
        var $$ul$$1_dur$$1_rslt$$4$$ = this.$_emitEvent$({obj:$obj$$66$$, func:"expand"}, "before");
        if ("boolean" != typeof $$ul$$1_dur$$1_rslt$$4$$ || $$ul$$1_dur$$1_rslt$$4$$) {
          var $$ul$$1_dur$$1_rslt$$4$$ = $skipAnim$$4$$ ? 0 : this.$_animDuration$, $t$$5$$ = this;
          this.$_is_loaded$($obj$$66$$) ? (this.options.expandParents && $obj$$66$$.parentsUntil(".oj-tree", ".oj-collapsed").each(function() {
            $t$$5$$.$_expand$(this, !1, !0);
          }), ($skipAnim$$4$$ || $$ul$$1_dur$$1_rslt$$4$$) && $obj$$66$$.children("ul").css("display", "none"), $obj$$66$$.removeClass("oj-collapsed").addClass("oj-expanded").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $$$$25$$($obj$$66$$.children()[0]).removeClass("oj-selected").addClass("oj-default"), !$skipAnim$$4$$ && $$ul$$1_dur$$1_rslt$$4$$ ? this.$_slide$($obj$$66$$, !1) : ($$ul$$1_dur$$1_rslt$$4$$ = $obj$$66$$.children("ul"), $$ul$$1_dur$$1_rslt$$4$$.length && 
          ($$ul$$1_dur$$1_rslt$$4$$.css("max-height", ""), $$ul$$1_dur$$1_rslt$$4$$.css("overflow", "hidden"), $$ul$$1_dur$$1_rslt$$4$$[0].style.display = "block"), this.$_emitEvent$({obj:$obj$$66$$}, "expand"), this.after_open($obj$$66$$)), $callback$$99$$ && $callback$$99$$.call()) : ($obj$$66$$.children("a").addClass("oj-tree-loading"), this.$_load_node$($obj$$66$$, function() {
            $t$$5$$.$_expand$($obj$$66$$, $callback$$99$$, $skipAnim$$4$$);
          }, $callback$$99$$));
        }
      }
    }, $_expandAll$:function($obj$$67$$, $animate$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$67$$ ? $obj$$67$$ : -1;
      ($obj$$67$$ = $obj$$67$$ ? this.$_getNode$($obj$$67$$) : -1) && -1 !== $obj$$67$$ ? $origTarg$$1$$ = $obj$$67$$ : $obj$$67$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$67$$ = $obj$$67$$.find("li.oj-collapsed") : ($original_obj$$ = $obj$$67$$, $obj$$67$$ = $obj$$67$$.is(".oj-collapsed") ? $obj$$67$$.find("li.oj-collapsed").addBack() : $obj$$67$$.find("li.oj-collapsed"));
      var $_this$$8$$ = this;
      $obj$$67$$.each(function() {
        var $__this$$ = this;
        $_this$$8$$.$_is_loaded$(this) ? $_this$$8$$.$_expand$(this, !1, !$animate$$) : $_this$$8$$.expand(this, function() {
          $_this$$8$$.$_expandAll$($__this$$, $animate$$, $original_obj$$);
        }, !$animate$$);
      });
      0 === $original_obj$$.find("li.oj-collapsed").length && this.$_emitEvent$({obj:$obj$$67$$, targ:$origTarg$$1$$}, "expandAll");
    }, $_select$:function($node$$70$$, $check$$, $e$$93$$) {
      if (0 == this.$_data$.$core$.$selectMode$) {
        return!1;
      }
      $node$$70$$ = this.$_getNode$($node$$70$$);
      if (-1 == $node$$70$$ || !$node$$70$$ || !$node$$70$$.length) {
        return!1;
      }
      if (!$node$$70$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.$core$.$initFocus$ = !0;
        var $isSelected$$ = this.isSelected($node$$70$$);
        if (!$isSelected$$) {
          var $prevSelections$$2_rslt$$5$$ = this.$_emitEvent$({obj:$node$$70$$, func:"select"}, "before");
          if ("boolean" == typeof $prevSelections$$2_rslt$$5$$ && !$prevSelections$$2_rslt$$5$$) {
            return;
          }
        }
        var $prevSelections$$2_rslt$$5$$ = this.options.selection.slice(0), $s$$15$$ = this.options, $isMultiple_selMultMod$$ = this.$_data$.ui.$defaults$.selectMultipleModifier, $isRange_selRangeMod$$ = this.$_data$.ui.$defaults$.selectRangeModifier, $disSelChildren$$ = this.$_data$.ui.$defaults$.disableSelectingChildren, $isMultiple_selMultMod$$ = "on" == $isMultiple_selMultMod$$ || !1 !== $isMultiple_selMultMod$$ && $e$$93$$ && $oj$$25$$.$DomUtils$.$isMetaKeyPressed$($e$$93$$), $isRange_selRangeMod$$ = 
        !1 !== $isRange_selRangeMod$$ && $e$$93$$ && $e$$93$$[$isRange_selRangeMod$$ + "Key"] && this.$_data$.ui.$last_selected$ && this.$_data$.ui.$last_selected$[0] !== $node$$70$$[0] && this.$_data$.ui.$last_selected$.parent()[0] === $node$$70$$.parent()[0], $proceed$$ = !0, $t$$6$$ = this;
        if ($check$$) {
          if ($disSelChildren$$ && $isMultiple_selMultMod$$ && ($node$$70$$.parentsUntil(".oj-tree", "li").children("a.oj-selected").length || $node$$70$$.children("ul").find("a.oj-selected:eq(0)").length)) {
            return!1;
          }
          $proceed$$ = !1;
          switch(!0) {
            case $isRange_selRangeMod$$:
              this.$_data$.ui.$last_selected$.addClass("oj-tree-last-selected");
              $node$$70$$ = $node$$70$$[$node$$70$$.index() < this.$_data$.ui.$last_selected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
              -1 == this.$_data$.$core$.$selectMode$ || $node$$70$$.length < this.$_data$.$core$.$selectMode$ ? (this.$_data$.ui.$last_selected$.removeClass("oj-tree-last-selected"), this.$_data$.ui.selected.each(function() {
                this !== $t$$6$$.$_data$.ui.$last_selected$[0] && $t$$6$$.$_deselect$(this);
              }), $isSelected$$ = !1, $proceed$$ = !0) : $proceed$$ = !1;
              break;
            case $isSelected$$ && !$isMultiple_selMultMod$$:
              if (!$e$$93$$) {
                break;
              }
              this.$_deselectAll$();
              this.$_data$.ui.$spacebar$ || ($isSelected$$ = !1);
              $proceed$$ = !0;
              break;
            case !$isSelected$$ && !$isMultiple_selMultMod$$:
              $e$$93$$ ? this.$_data$.ui.selected && 1 == this.$_data$.ui.selected.length ? this.$_deselect$(this.$_data$.ui.selected) : this.$_deselectAll$(this.$_data$.ui.selected) : 1 === this.$_data$.$core$.$selectMode$ ? this.$_deselect$(this.$_data$.ui.selected) : 1 < this.$_data$.$core$.$selectMode$ && this.$_deselectAll$();
              $proceed$$ = !0;
              break;
            case $isSelected$$ && $isMultiple_selMultMod$$:
              this.deselect($node$$70$$);
              break;
            case !$isSelected$$ && $isMultiple_selMultMod$$:
              if (-1 == this.$_data$.$core$.$selectMode$ || this.$_data$.ui.selected.length + 1 <= this.$_data$.$core$.$selectMode$) {
                $proceed$$ = !0;
              }
            ;
          }
        }
        $proceed$$ && !$isSelected$$ && ($isRange_selRangeMod$$ || (this.$_data$.ui.$last_selected$ = $node$$70$$), $node$$70$$.children("a").addClass("oj-selected"), $node$$70$$.attr("aria-selected", "true"), $s$$15$$.selectedParentExpand && $node$$70$$.parents(".oj-collapsed").each(function() {
          $t$$6$$.$_expand$(this, !1, !0);
        }), this.$_data$.ui.selected = this.$_data$.ui.selected.add($node$$70$$), this.$_fix_scroll$($node$$70$$.eq(0)), this.$_maintainSelectionOption$($node$$70$$, !0), this.$_data$.$core$.$suppressSelectEvent$ || this.$_fireOptionChangeEvent$("selection", $prevSelections$$2_rslt$$5$$, this.options.selection, $e$$93$$));
      }
    }, $_deselect$:function($node$$71$$) {
      $node$$71$$ = this.$_getNode$($node$$71$$);
      if (!$node$$71$$.length) {
        return!1;
      }
      $node$$71$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || (this.isSelected($node$$71$$) && ($node$$71$$.children("a").removeClass("oj-selected"), $node$$71$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$71$$), this.$_data$.ui.$last_selected$.get(0) === $node$$71$$.get(0) && (this.$_data$.ui.$last_selected$ = this.$_data$.ui.selected.eq(0))), this.$_maintainSelectionOption$($node$$71$$, !1));
    }, $_deselectAll$:function($context$$52$$, $bSeparate$$) {
      if (!this.$_data$.$core$.locked) {
        if ($bSeparate$$) {
          $a$$81_origTarg$$2$$ = $context$$52$$ ? $context$$52$$ : -1, $ret$$38$$ = $context$$52$$ ? $$$$25$$($context$$52$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent(), $ret$$38$$.not(".oj-disabled"), 0 !== $ret$$38$$.length && ($_this$$9$$ = this, $$$$25$$.each($ret$$38$$, function() {
            $_this$$9$$.$_deselect$(this);
          }));
        } else {
          var $a$$81_origTarg$$2$$ = $context$$52$$ ? $context$$52$$ : -1, $ret$$38$$ = $context$$52$$ ? $$$$25$$($context$$52$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent();
          $ret$$38$$.not(".oj-disabled");
          if (0 === $ret$$38$$.length) {
            if (-1 === $a$$81_origTarg$$2$$) {
              for ($a$$81_origTarg$$2$$ = this.options.selection;$a$$81_origTarg$$2$$.length;) {
                $a$$81_origTarg$$2$$.pop();
              }
            }
          } else {
            $ret$$38$$.children("a.oj-selected").removeClass("oj-selected");
            $ret$$38$$.removeAttr("aria-selected");
            var $_this$$9$$ = this;
            $$$$25$$.each($ret$$38$$, function($i$$268$$, $n$$29$$) {
              $_this$$9$$.$_maintainSelectionOption$($$$$25$$($n$$29$$), !1);
            });
            this.$_data$.ui.selected = $$$$25$$([]);
            this.$_data$.ui.$last_selected$ = !1;
          }
        }
      }
    }, $_setSelected$:function($nodes$$2$$, $e$$94$$) {
      if (this.$_data$.$core$.locked) {
        return null;
      }
      if ($nodes$$2$$ && 0 < $nodes$$2$$.length) {
        var $_this$$10$$ = this;
        $$$$25$$.each($nodes$$2$$, function($i$$269$$, $val$$43$$) {
          $val$$43$$ && $_this$$10$$.$_select$($val$$43$$, !0, $e$$94$$);
        });
      }
    }, $_maintainSelectionOption$:function($nodes$$3$$, $bAdd$$) {
      var $ar$$1$$, $sels$$1$$, $j$$40$$, $k$$11$$, $$el$$1$$, $id$$34$$, $len$$16$$, $len2$$, $inList$$1$$, $_this$$11$$ = this, $bChange$$ = !1;
      $nodes$$3$$ && ($ar$$1$$ = this.options.selection.slice(0), $sels$$1$$ = this.options.selection, $len$$16$$ = $sels$$1$$.length, $$$$25$$.each($nodes$$3$$, function($i$$271$$, $val$$44$$) {
        $inList$$1$$ = !1;
        if ($$el$$1$$ = $_this$$11$$.$_getNodeElem$($val$$44$$)) {
          $id$$34$$ = $$el$$1$$.attr("id");
          for ($j$$40$$ = 0;$j$$40$$ < $len$$16$$;$j$$40$$++) {
            if ($id$$34$$ == $$$$25$$($sels$$1$$[$j$$40$$]).attr("id")) {
              $inList$$1$$ = !0;
              break;
            }
          }
          if ($bAdd$$) {
            $inList$$1$$ || ($ar$$1$$.push($val$$44$$), $bChange$$ = !0);
          } else {
            if ($inList$$1$$) {
              for ($len2$$ = $ar$$1$$.length, $k$$11$$ = 0;$k$$11$$ < $len2$$;$k$$11$$++) {
                if ($id$$34$$ == $$$$25$$($ar$$1$$[$k$$11$$]).attr("id")) {
                  $ar$$1$$.splice($k$$11$$, 1);
                  $bChange$$ = !0;
                  break;
                }
              }
            }
          }
        }
      }), $bChange$$ && (this.options.selection = $ar$$1$$));
    }, $_disclosureHover$:function($elem$$43$$, $bHover$$) {
      $elem$$43$$ = $$$$25$$($elem$$43$$);
      if (!$elem$$43$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $par$$ = $elem$$43$$.parent(), $bClosed$$ = $par$$.hasClass("oj-collapsed");
        if ($par$$.hasClass("oj-expanded") || $bClosed$$) {
          $bHover$$ ? ($elem$$43$$.addClass("oj-hover"), $elem$$43$$.removeClass("oj-default"), $elem$$43$$.removeClass("oj-selected")) : ($elem$$43$$.removeClass("oj-hover"), $elem$$43$$.addClass("oj-default"));
        }
      }
    }, $_refresh$:function($node$$72$$) {
      this.$_refresh_core$($node$$72$$);
    }, $_refresh_core$:function($node$$73$$) {
      var $origTarg$$3$$ = $node$$73$$ ? $node$$73$$ : -1, $_this$$12$$ = this;
      this.$_save_opened$();
      $node$$73$$ || ($node$$73$$ = -1);
      ($node$$73$$ = this.$_getNode$($node$$73$$)) ? $origTarg$$3$$ = $node$$73$$ : $node$$73$$ = -1;
      -1 !== $node$$73$$ ? $node$$73$$.children("UL").remove() : (this.$_$container_ul$.empty(), this.$_processExistingMarkup$());
      this.$_load_node$($node$$73$$, function() {
        $_this$$12$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$12$$.$_reload_nodes$();
      });
    }, $_refresh_ui$:function($obj$$68$$) {
      this.saveSelected();
      this.$_refresh_core$($obj$$68$$);
    }, after_open:function($obj$$69$$) {
      this.$_emitEvent$({obj:$obj$$69$$}, "after_open");
    }, after_close:function($obj$$70$$) {
      this.$_emitEvent$({obj:$obj$$70$$}, "after_close");
    }, $_reopen$:function() {
      var $_this$$13$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$25$$.each(this.$_data$.$core$.$toExpand$, function($i$$272$$, $val$$45$$) {
        $_this$$13$$.$_expand$($val$$45$$, !1, !0);
      });
      this.$_emitEvent$({}, "reopen");
    }, $_getSelected$:function($context$$53$$) {
      return $context$$53$$ ? $$$$25$$($context$$53$$).find("a.oj-selected").parent() : this.$_data$.ui.selected;
    }, $_set_text$:function($obj$$71$$, $val$$46$$) {
      $obj$$71$$ = this.$_getNode$($obj$$71$$);
      if (!$obj$$71$$.length) {
        return!1;
      }
      $obj$$71$$ = $obj$$71$$.children("a:eq(0)");
      if (this.$_data$.$core$.$htmlTitles$) {
        var $tmp$$4$$ = $obj$$71$$.children("INS").clone();
        $obj$$71$$.html($val$$46$$).prepend($tmp$$4$$);
        this.$_emitEvent$({obj:$obj$$71$$, name:$val$$46$$}, "set_text");
        return!0;
      }
      $obj$$71$$ = $obj$$71$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$71$$, name:$val$$46$$}, "set_text");
      return $obj$$71$$[0].textContent = $val$$46$$;
    }, $_loadNodes$:function() {
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$();
      }) : (this.$_applyEmptyText$(), this.$_loaded$());
    }, $_load_node$:function($obj$$72$$) {
      this.$_emitEvent$({obj:$obj$$72$$}, "load_node");
    }, $_is_loaded$:function() {
      return!0;
    }, $_load_node_DS$:function($obj$$74$$, $s_call$$, $e_call$$) {
      var $_this$$14$$ = this;
      this.$_load_node_tree$($obj$$74$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$74$$)}, "load_node");
        $s_call$$.call(this);
      }, $e_call$$);
    }, $_is_loaded_DS$:function($obj$$75$$) {
      $obj$$75$$ = this.$_getNode$($obj$$75$$);
      return-1 === $obj$$75$$ || !$obj$$75$$ || $obj$$75$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$75$$.children("ul").children("li").length;
    }, $_refresh_DS$:function($obj$$76$$) {
      ($obj$$76$$ = this.$_getNode$($obj$$76$$)) && -1 !== $obj$$76$$ && $obj$$76$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$76$$);
    }, $_load_node_J$:function($obj$$77$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$15$$ = this;
      this.$_load_node_json$($obj$$77$$, function() {
        $_this$$15$$.$_emitEvent$({obj:$_this$$15$$.$_getNode$($obj$$77$$)}, "load_node");
        $s_call$$1$$.call(this);
      }, $e_call$$1$$);
    }, $_is_loaded_J$:function($obj$$78$$) {
      var $s$$16$$ = this.options.data;
      $obj$$78$$ = this.$_getNode$($obj$$78$$);
      return-1 == $obj$$78$$ || !$obj$$78$$ || !$s$$16$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$25$$.isFunction($s$$16$$.data) || $obj$$78$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$78$$.children("ul").children("li").length;
    }, $_load_node_H$:function($obj$$79$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$16$$ = this;
      this.$_load_node_html$($obj$$79$$, function() {
        $_this$$16$$.$_emitEvent$({obj:$_this$$16$$.$_getNode$($obj$$79$$)}, "load_node");
        $s_call$$2$$.call(this);
      }, $e_call$$2$$);
    }, $_is_loaded_H$:function($obj$$80$$) {
      var $s$$17$$ = this.options.data, $data$$144$$ = null, $ajax$$ = null;
      $s$$17$$ && ($data$$144$$ = $s$$17$$.data || null, $ajax$$ = $s$$17$$.ajax || null);
      $obj$$80$$ = this.$_getNode$($obj$$80$$);
      return-1 == $obj$$80$$ || !$obj$$80$$ || !$ajax$$ && !$$$$25$$.isFunction($data$$144$$) || $obj$$80$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$80$$.children("ul").children("li").size();
    }, reselect:function() {
      var $_this$$17$$ = this, $s$$18$$ = this.$_data$.ui.$to_select$, $s$$18$$ = $$$$25$$.map($$$$25$$.makeArray($s$$18$$), function($n$$30$$) {
        return "#" + $n$$30$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      $$$$25$$.each($s$$18$$, function($i$$273$$, $val$$47$$) {
        $val$$47$$ && "#" !== $val$$47$$ && $_this$$17$$.select($val$$47$$);
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter(function() {
        return this.parentNode;
      });
      this.$_emitEvent$(null, "reselect");
    }, saveSelected:function() {
      var $_this$$18$$ = this;
      this.$_data$.ui.$to_select$ = [];
      this.$_data$.ui.selected.each(function() {
        this.id && $_this$$18$$.$_data$.ui.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$(this.$_data$.ui.$to_select$, "savedselected");
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && ($$$$25$$.isArray($rb$$1$$) || ($rb$$1$$ = [$rb$$1$$]), $$$$25$$.each($rb$$1$$, function() {
      }));
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback");
      return{$i$:this.$_index$, $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data};
    }, set_rollback:function($html$$3$$, $data$$145$$) {
      this.$_$container$ && this.$_$container_ul$ && this.$_$container_ul$.empty().append($html$$3$$);
      this.data = $data$$145$$;
      this.$_emitEvent$(null, "set_rollback");
    }, $_load_node_tree$:function($obj$$81$$, $s_call$$3$$) {
      var $d$$9_rslt$$6$$ = this.$_JsonDSToJson$($obj$$81$$);
      if ($d$$9_rslt$$6$$.success && $d$$9_rslt$$6$$.$js$) {
        var $$u_bTree$$ = !$obj$$81$$ || -1 === $obj$$81$$, $s$$19$$ = this.options.data;
        if ($s$$19$$.data && !$s$$19$$.ajax || $s$$19$$.data && $s$$19$$.ajax && $$u_bTree$$) {
          $$u_bTree$$ && (($d$$9_rslt$$6$$ = this.$_parseJson$($d$$9_rslt$$6$$.$js$, $obj$$81$$)) ? (this.$_$container_ul$.empty().append($d$$9_rslt$$6$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this);
        } else {
          if (!$s$$19$$.data && $s$$19$$.ajax || $s$$19$$.data && $s$$19$$.ajax && !$$u_bTree$$) {
            ($d$$9_rslt$$6$$ = this.$_parseJson$($d$$9_rslt$$6$$.$js$, $obj$$81$$)) ? ($$u_bTree$$ ? ($$u_bTree$$ = this.$_$container_ul$, $$u_bTree$$.empty().append($d$$9_rslt$$6$$.children()), $$u_bTree$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$.attr("aria-multiselectable", !0)) : ($obj$$81$$.append($d$$9_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading")), 
            this.$_clean_node$($obj$$81$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$81$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$81$$.removeData("oj-tree-is-loading"), $s$$19$$.correct_state && (this.$_correct_state$($obj$$81$$), $s_call$$3$$ && $s_call$$3$$.call(this)));
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$10$$, $node$$74$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$21$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$10$$ && ($parentKey$$10$$ = null, $range$$21$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$10$$);
      0 < $cc$$ && ($range$$21$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$10$$, $range$$21$$, {success:$$$$25$$.proxy(function($jns$$) {
        for (var $c$$30$$ = $jns$$.$getCount$(), $attr$$18_n$$31_r$$3$$, $i$$275$$ = 0;$i$$275$$ < $c$$30$$;$i$$275$$++) {
          $node$$74$$ = {};
          ($attr$$18_n$$31_r$$3$$ = $jns$$.getData($i$$275$$)) && ($node$$74$$.attr = $attr$$18_n$$31_r$$3$$);
          $node$$74$$.title = $jns$$.$m_nodes$[$i$$275$$].title;
          $attr$$18_n$$31_r$$3$$.$metadata$ && ($node$$74$$.metadata = $jns$$.$m_nodes$[$i$$275$$].metadata);
          var $key$$101$$ = $node$$74$$.attr.id;
          $attr$$18_n$$31_r$$3$$ = $ds$$.$getChildCount$($key$$101$$);
          0 < $attr$$18_n$$31_r$$3$$ && ($attr$$18_n$$31_r$$3$$ = this.$_JsonDSToJson$($key$$101$$, $node$$74$$), $node$$74$$.children = $attr$$18_n$$31_r$$3$$.$js$);
          $arJson$$.push($node$$74$$);
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$;
      }, this), error:function() {
        $rslt$$7$$.success = !1;
      }}));
      return $rslt$$7$$;
    }, $_refresh_json$:function($obj$$82$$) {
      $obj$$82$$ = this.$_getNode$($obj$$82$$);
      if (!this.$_data$.$core$.locked) {
        var $bTree$$1$$ = !$obj$$82$$ || -1 !== $obj$$82$$ || !$obj$$82$$.length;
        if ($bTree$$1$$ || !$obj$$82$$.hasClass("oj-disabled")) {
          var $s$$20$$ = this.options.data.json;
          !$bTree$$1$$ && this.$_data$.$ds$.$progressiveUnload$ && ($$$$25$$.isFunction($s$$20$$.data) || $s$$20$$.ajax) && $obj$$82$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$82$$);
        }
      }
    }, $_load_node_json$:function($obj$$83$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$10_s$$21$$ = this.$_getOptions$().data, $data$$146$$ = $d$$10_s$$21$$ && $d$$10_s$$21$$.data || null, $ajax$$1$$ = $d$$10_s$$21$$ && $d$$10_s$$21$$.ajax || null;
      !$d$$10_s$$21$$ || $data$$146$$ || $ajax$$1$$ || ($data$$146$$ = $d$$10_s$$21$$);
      if (($obj$$83$$ = this.$_getNode$($obj$$83$$)) && -1 !== $obj$$83$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$83$$.is(".oj-expanded, .oj-tree-leaf") && 0 === $obj$$83$$.children("ul").children("li").length && $obj$$83$$.data("oj-tree-children")) {
        if ($d$$10_s$$21$$ = this.$_parseJson$($obj$$83$$.data("oj-tree-children"), $obj$$83$$)) {
          $obj$$83$$.append($d$$10_s$$21$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$83$$.removeData("oj-tree-children");
        }
        this.$_clean_node$($obj$$83$$);
        $s_call$$4$$ && $s_call$$4$$.call(this);
      } else {
        if ($obj$$83$$ && -1 !== $obj$$83$$) {
          if ($obj$$83$$.data("oj-tree-is-loading")) {
            return;
          }
          $obj$$83$$.data("oj-tree-is-loading", !0);
        }
        switch(!0) {
          case !$data$$146$$ && !$ajax$$1$$:
            throw "ojTree - neither data nor ajax settings supplied.";;
          case $$$$25$$.isFunction($data$$146$$):
            $data$$146$$.call(this, $obj$$83$$, $$$$25$$.proxy(function($d$$11$$) {
              ($d$$11$$ = this.$_parseJson$($d$$11$$, $obj$$83$$)) ? (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.append($d$$11$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$11$$.children()), this.$_clean_node$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$83$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this));
            }, this));
            break;
          case !!$data$$146$$ && !$ajax$$1$$ || !!$data$$146$$ && !!$ajax$$1$$ && (!$obj$$83$$ || -1 === $obj$$83$$):
            $obj$$83$$ && -1 != $obj$$83$$ || (($d$$10_s$$21$$ = this.$_parseJson$($data$$146$$, $obj$$83$$)) ? (this.$_$container_ul$.empty().append($d$$10_s$$21$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$146$$ && !!$ajax$$1$$ || !!$data$$146$$ && !!$ajax$$1$$ && $obj$$83$$ && -1 !== $obj$$83$$:
            $error_func$$ = function $$error_func$$$($x$$54$$, $status$$13$$, $e$$95$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $status$$13$$, $e$$95$$, $x$$54$$);
              -1 != $obj$$83$$ && $obj$$83$$.length ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), "success" === $status$$13$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$83$$)) : "success" === $status$$13$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this);
            }, $success_func$$ = function $$success_func$$$($d$$12$$, $status$$14_tempd$$, $$u$$1_x$$55$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$12$$ = $sf$$.call(this, $d$$12$$, $status$$14_tempd$$, $$u$$1_x$$55$$) || $d$$12$$);
              if ("string" == typeof $d$$12$$) {
                $status$$14_tempd$$ = $d$$12$$.replace(/^[\s\n]+$/, "");
                try {
                  $status$$14_tempd$$ = $$$$25$$.parseJSON($status$$14_tempd$$);
                } catch ($err$$6$$) {
                  $status$$14_tempd$$ = null;
                }
                if (!$status$$14_tempd$$) {
                  return $error_func$$.call(this, $$u$$1_x$$55$$, "Bad JSON", "");
                }
              }
              ($d$$12$$ = this.$_parseJson$($d$$12$$, $obj$$83$$)) ? (-1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.append($d$$12$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading")) : ($$u$$1_x$$55$$ = this.$_$container_ul$, $$u$$1_x$$55$$.empty().append($d$$12$$.children()), $$u$$1_x$$55$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_x$$55$$.attr("aria-multiselectable", 
              !0)), this.$_clean_node$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$83$$ && $obj$$83$$ ? ($obj$$83$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$83$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$83$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this));
            }, $d$$10_s$$21$$.ajax.context = this, $d$$10_s$$21$$.ajax.error = $error_func$$, $d$$10_s$$21$$.ajax.success = $success_func$$, $d$$10_s$$21$$.dataType || ($d$$10_s$$21$$.ajax.dataType = "json"), $$$$25$$.isFunction($d$$10_s$$21$$.ajax.url) && ($d$$10_s$$21$$.ajax.url = $d$$10_s$$21$$.ajax.url.call(this, $obj$$83$$)), $$$$25$$.isFunction($d$$10_s$$21$$.ajax.data) && ($d$$10_s$$21$$.ajax.data = $d$$10_s$$21$$.ajax.data.call(this, $obj$$83$$)), $$$$25$$.ajax($d$$10_s$$21$$.ajax);
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$84_ul2$$, $isRecurse_ul1$$) {
      var $d$$13$$ = !1, $tmp$$5$$, $i$$276$$, $j$$41$$, $title$$10$$;
      if (!$js$$1$$) {
        return $d$$13$$;
      }
      this.$_data$.$ds$.$progressiveUnload$ && $obj$$84_ul2$$ && -1 !== $obj$$84_ul2$$ && $obj$$84_ul2$$.data("oj-tree-children", $d$$13$$);
      if ("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$25$$.parseJSON($js$$1$$);
        } catch ($err$$7$$) {
          $js$$1$$ = [];
        }
      }
      if ($$$$25$$.isArray($js$$1$$)) {
        $d$$13$$ = $$$$25$$("\x3cul\x3e");
        if (!$js$$1$$.length) {
          return!1;
        }
        $i$$276$$ = 0;
        for ($j$$41$$ = $js$$1$$.length;$i$$276$$ < $j$$41$$;$i$$276$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$276$$], $obj$$84_ul2$$, !0), $tmp$$5$$.length && ($d$$13$$ = $d$$13$$.append($tmp$$5$$));
        }
        $d$$13$$ = $d$$13$$.children();
      } else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$10$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$13$$ = $$$$25$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype", $d$$13$$.addClass("oj-tree-type")), $d$$13$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$13$$.data($js$$1$$.metadata);
        ($js$$1$$.state || $js$$1$$.children && 0 === $js$$1$$.children.length) && $d$$13$$.addClass("expanded" === $js$$1$$.state ? "oj-expanded" : "oj-collapsed");
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $ht$$2$$ = this.$_data$.$core$.$htmlTitles$, $bIns$$ = !1, $sp$$3$$;
        $tmp$$5$$ = $$$$25$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$25$$.each($js$$1$$.data, function($i$$277$$, $m$$25$$) {
          $$$$25$$.isFunction($m$$25$$) && ($m$$25$$ = $m$$25$$.call(this, $js$$1$$));
          "string" != typeof $m$$25$$ && ("attr" == $i$$277$$ ? $tmp$$5$$.attr($m$$25$$) : "style" == $i$$277$$ && $tmp$$5$$.css($m$$25$$), "language" == $i$$277$$ && $tmp$$5$$.addClass($m$$25$$));
          $bIns$$ || ($sp$$3$$ = $$$$25$$("\x3cspan class\x3d'oj-tree-title'\x3e"), $sp$$3$$[$ht$$2$$ ? "html" : "text"]($title$$10$$), $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e", $sp$$3$$), $bIns$$ = !0);
          !$m$$25$$.icon && $js$$1$$.icon && ($m$$25$$.icon = $js$$1$$.icon);
          $m$$25$$.icon && (-1 === $m$$25$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$25$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$25$$.icon + "') center center no-repeat"));
        });
        $d$$13$$.append($tmp$$5$$);
        $d$$13$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$13$$.addClass("oj-collapsed").attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$13$$.data("oj-tree-children", $js$$1$$.children), $$$$25$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$84_ul2$$, !0), $tmp$$5$$.length && ($obj$$84_ul2$$ = $$$$25$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$84_ul2$$.append($tmp$$5$$), $d$$13$$.append($obj$$84_ul2$$)))));
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$25$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$13$$), $d$$13$$ = $isRecurse_ul1$$);
      return $d$$13$$;
    }, $_correct_state$:function($obj$$85$$) {
      $obj$$85$$ = this.$_getNode$($obj$$85$$);
      if (!$obj$$85$$ || -1 === $obj$$85$$) {
        return!1;
      }
      $obj$$85$$.removeClass("oj-collapsed oj-expanded").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      $obj$$85$$.find("ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").addClass("oj-tree-icon");
      this.$_emitEvent$({obj:$obj$$85$$}, "correct_state");
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded");
    }, $_load_node_html$:function($obj$$86$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$14_s$$22$$ = this.$_getOptions$().data, $data$$147$$ = $d$$14_s$$22$$ && $d$$14_s$$22$$.data || null, $ajax$$2$$ = $d$$14_s$$22$$ && $d$$14_s$$22$$.ajax || null;
      if (($obj$$86$$ = this.$_getNode$($obj$$86$$)) && -1 !== $obj$$86$$) {
        if ($obj$$86$$.data("oj-tree-is-loading")) {
          return;
        }
        $obj$$86$$.data("oj-tree-is-loading", !0);
      }
      switch(!0) {
        case !$data$$147$$ && !$ajax$$2$$ && $d$$14_s$$22$$ && "string" === typeof $d$$14_s$$22$$:
          this.$_loadHtmlString$($d$$14_s$$22$$, $obj$$86$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$25$$.isFunction($data$$147$$):
          $data$$147$$.call(this, $obj$$86$$, $$$$25$$.proxy(function($d$$15$$) {
            this.$_loadHtmlString$($d$$15$$, $obj$$86$$, $s_call$$5$$, $e_call$$5$$);
          }, this));
          break;
        case !$data$$147$$ && !$ajax$$2$$:
          $obj$$86$$ && -1 != $obj$$86$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$cloneMarkup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon' \x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li").children("ins:first-child").addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$(), 
          this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$147$$ && !$ajax$$2$$ || !!$data$$147$$ && !!$ajax$$2$$ && (!$obj$$86$$ || -1 === $obj$$86$$):
          $obj$$86$$ && -1 != $obj$$86$$ || ($d$$14_s$$22$$ = $$$$25$$($data$$147$$), $d$$14_s$$22$$.is("ul") || ($d$$14_s$$22$$ = $$$$25$$("\x3cul /\x3e").append($d$$14_s$$22$$)), this.$_$container_ul$.empty().append($d$$14_s$$22$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && 
          this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$147$$ && !!$ajax$$2$$ || !!$data$$147$$ && !!$ajax$$2$$ && $obj$$86$$ && -1 !== $obj$$86$$:
          $obj$$86$$ = this.$_getNode$($obj$$86$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$56$$, $t$$7$$, $e$$96$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$56$$, $t$$7$$, $e$$96$$);
            -1 != $obj$$86$$ && $obj$$86$$.length ? ($obj$$86$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$86$$.removeData("oj-tree-is-loading"), "success" === $t$$7$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$86$$)) : "success" === $t$$7$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this);
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$16_parent$$27$$, $t$$8$$, $x$$57$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$16_parent$$27$$ = $sf$$1$$.call(this, $d$$16_parent$$27$$, $t$$8$$, $x$$57$$) || $d$$16_parent$$27$$);
            if ("" === $d$$16_parent$$27$$ || $d$$16_parent$$27$$ && $d$$16_parent$$27$$.toString && "" === $d$$16_parent$$27$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$57$$, $t$$8$$, "");
            }
            $d$$16_parent$$27$$ ? ($d$$16_parent$$27$$ = $$$$25$$($d$$16_parent$$27$$), $d$$16_parent$$27$$.is("ul") || ($d$$16_parent$$27$$ = $$$$25$$("\x3cul /\x3e").append($d$$16_parent$$27$$)), -1 != $obj$$86$$ && $obj$$86$$ ? ($obj$$86$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$86$$), $obj$$86$$.append($d$$16_parent$$27$$).children("ul").find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$86$$.removeData("oj-tree-is-loading"), $obj$$86$$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$16_parent$$27$$ = $obj$$86$$) : 
            (this.$_$container_ul$.empty().append($d$$16_parent$$27$$.children()).find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$16_parent$$27$$ = this.$_$container_ul$), this.$_handleHtmlParentNoChildren$($d$$16_parent$$27$$), 
            this.$_insertHtmlTextSpan$($d$$16_parent$$27$$), this.$_data$.types.$defType$ && $d$$16_parent$$27$$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$($obj$$86$$), $s_call$$5$$ && $s_call$$5$$.call(this)) : ($obj$$86$$ && -1 !== $obj$$86$$ ? ($obj$$86$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$86$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$86$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : 
            this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"));
          }, $d$$14_s$$22$$.ajax.context = this, $d$$14_s$$22$$.ajax.error = $error_func$$1$$, $d$$14_s$$22$$.ajax.success = $success_func$$1$$, $d$$14_s$$22$$.ajax.dataType || ($d$$14_s$$22$$.ajax.dataType = "html"), $$$$25$$.isFunction($d$$14_s$$22$$.ajax.url) && ($d$$14_s$$22$$.ajax.url = $d$$14_s$$22$$.ajax.url.call(this, $obj$$86$$)), $$$$25$$.isFunction($d$$14_s$$22$$.ajax.data) && ($d$$14_s$$22$$.ajax.data = $d$$14_s$$22$$.ajax.data.call(this, $obj$$86$$)), $$$$25$$.ajax($d$$14_s$$22$$.ajax);
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$28$$) {
      $lazy$$1_parent$$28$$ = $lazy$$1_parent$$28$$.find($lazy$$1_parent$$28$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      $$$$25$$.each($lazy$$1_parent$$28$$, function() {
        $$$$25$$(this).closest("li").addClass("oj-collapsed");
      });
    }, $_removeEmptyUL$:function($l$$14_parent$$29$$) {
      $l$$14_parent$$29$$ = $l$$14_parent$$29$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      0 < $l$$14_parent$$29$$.length && $l$$14_parent$$29$$.remove();
    }, $_loadHtmlString$:function($parent$$30_s$$23$$, $obj$$87$$, $s_call$$6$$) {
      $parent$$30_s$$23$$ && "" !== $parent$$30_s$$23$$ && $parent$$30_s$$23$$.toString && "" !== $parent$$30_s$$23$$.toString().replace(/^[\s\n]+$/, "") ? ($parent$$30_s$$23$$ = $$$$25$$($parent$$30_s$$23$$), $parent$$30_s$$23$$.is("ul") || ($parent$$30_s$$23$$ = $$$$25$$("\x3cul /\x3e").append($parent$$30_s$$23$$)), -1 != $obj$$87$$ && $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.append($parent$$30_s$$23$$).children("ul").find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
      }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$87$$.removeData("oj-tree-is-loading"), $parent$$30_s$$23$$ = $obj$$87$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($parent$$30_s$$23$$.children()).find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
      }).prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $parent$$30_s$$23$$ = this.$_$container_ul$, this.$_addDefType$(this.$_$container_ul$)), 
      $parent$$30_s$$23$$ && this.$_insertHtmlTextSpan$($parent$$30_s$$23$$), this.$_clean_node$($obj$$87$$), $s_call$$6$$ && $s_call$$6$$.call(this)) : $obj$$87$$ && -1 !== $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$87$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && 
      $s_call$$6$$.call(this));
    }, $_insertHtmlTextSpan$:function($elem$$44$$) {
      $$$$25$$.each($elem$$44$$.find("li a"), function($i$$278$$, $val$$49$$) {
        var $ih$$ = $val$$49$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$49$$.innerHTML = $ih$$ + "\x3c/span\x3e";
      });
    }, $_addDefType$:function($obj$$88$$) {
      var $s$$24$$, $typeAttr$$1$$;
      this.$_data$.types.$defType$ && ($typeAttr$$1$$ = ($s$$24$$ = this.options.types) ? $s$$24$$.attr : this.$_data$.types.$defaults$.attr, $$$$25$$.each($obj$$88$$.find("li"), function($i$$279$$, $val$$50$$) {
        $val$$50$$ = $$$$25$$($val$$50$$);
        $val$$50$$.attr($typeAttr$$1$$) || $val$$50$$.attr($typeAttr$$1$$, "oj-tree-deftype").addClass("oj-tree-type");
      }));
    }, $_dnd_prepare$:function() {
      var $a$$82_vars$$ = this.$_data$.dnd.$vars$;
      if ($a$$82_vars$$.$r$ && $a$$82_vars$$.$r$.length) {
        this.$_data$.dnd.off = $a$$82_vars$$.$r$.offset();
        this.$_isRtl$ && (this.$_data$.dnd.off.right = this.$_data$.dnd.off.left + $a$$82_vars$$.$r$.width() - $a$$82_vars$$.$r$.find("\x3ea").width() - 14);
        this.$_data$.dnd.$targ_ml_width$ = $a$$82_vars$$.$r$.find("a").width();
        if (this.$_data$.dnd.$foreign$) {
          return $a$$82_vars$$ = this.options.dnd.drag_check.call(this, {o:$a$$82_vars$$.$o$, r:$a$$82_vars$$.$r$}), this.$_data$.dnd.after = $a$$82_vars$$.after, this.$_data$.dnd.before = $a$$82_vars$$.before, this.$_data$.dnd.inside = $a$$82_vars$$.inside, this.$_data$.dnd.$prepared$ = !0, this.$_dnd_show$();
        }
        this.$_prepare_move$($a$$82_vars$$.$o$, $a$$82_vars$$.$r$, "before");
        this.$_data$.dnd.before = this.check_move();
        this.$_prepare_move$($a$$82_vars$$.$o$, $a$$82_vars$$.$r$, "after");
        this.$_data$.dnd.after = this.check_move();
        this.$_is_loaded$($a$$82_vars$$.$r$) ? (this.$_prepare_move$($a$$82_vars$$.$o$, $a$$82_vars$$.$r$, "inside"), this.$_data$.dnd.inside = this.check_move()) : this.$_data$.dnd.inside = !1;
        this.$_data$.dnd.$prepared$ = !0;
        return this.$_dnd_show$();
      }
    }, $_dnd_show$:function() {
      var $dnd_mLeft$$ = this.$_data$.dnd, $isParent$$1_lineTop_o$$15$$ = !1, $mlLeft_pos$$10$$;
      if ($dnd_mLeft$$.$prepared$) {
        var $isParent$$1_lineTop_o$$15$$ = ["before", "inside", "after"], $r$$4$$ = !1, $ctl$$ = $dnd_mLeft$$.$ctl$, $vars$$1$$ = $dnd_mLeft$$.$vars$, $isParent$$1_lineTop_o$$15$$ = $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 3 ? ["before", "inside", "after"] : $dnd_mLeft$$.$w$ <= 2 * this.$_data$.$core$.$li_height$ / 3 ? $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"];
        $$$$25$$.each($isParent$$1_lineTop_o$$15$$, $$$$25$$.proxy(function($i$$280$$, $val$$51$$) {
          if (this.$_data$.dnd[$val$$51$$]) {
            return $ctl$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $r$$4$$ = $val$$51$$, !1;
          }
        }, this));
        !1 === $r$$4$$ ? ($ctl$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), $vars$$1$$.$r$.addClass("oj-invalid-drop")) : $vars$$1$$.$r$.removeClass("oj-invalid-drop").addClass("oj-valid-drop");
        $mlLeft_pos$$10$$ = this.$_isRtl$ ? this.$_data$.dnd.off.right - 18 : this.$_data$.dnd.off.left + 5;
        $isParent$$1_lineTop_o$$15$$ = !this.isLeaf($vars$$1$$.$r$);
        $dnd_mLeft$$ = this.$_isRtl$ ? $mlLeft_pos$$10$$ + this.$_data$.dnd.$targ_ml_width$ + 18 : $mlLeft_pos$$10$$;
        $mlLeft_pos$$10$$ = this.$_isRtl$ ? $dnd_mLeft$$ - this.$_data$.dnd.$ml_width$ : $mlLeft_pos$$10$$ + 8;
        switch($r$$4$$) {
          case "before":
            $isParent$$1_lineTop_o$$15$$ = this.$_data$.dnd.off.top - 3;
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:$isParent$$1_lineTop_o$$15$$ - 7 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$10$$ + "px", top:$isParent$$1_lineTop_o$$15$$ + "px"}).show();
            break;
          case "after":
            $isParent$$1_lineTop_o$$15$$ = this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 3;
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:$isParent$$1_lineTop_o$$15$$ - 2 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$10$$ + "px", top:$isParent$$1_lineTop_o$$15$$ + 6 + "px"}).show();
            break;
          case "inside":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + (this.$_isRtl$ ? $isParent$$1_lineTop_o$$15$$ ? -4 : 0 : 4) + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ / 2 - 8 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
            break;
          default:
            $vars$$1$$.$m$.hide(), $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
        }
        return $vars$$1$$.$last_pos$ = $r$$4$$;
      }
    }, $_dnd_enter$:function($obj$$89_openTimeout_s$$25$$) {
      var $dnd$$1$$ = this.$_data$.dnd, $vars$$2$$ = $dnd$$1$$.$vars$;
      $dnd$$1$$.$mto$ && (clearTimeout($dnd$$1$$.$mto$), $dnd$$1$$.$mto$ = !1);
      $dnd$$1$$.$prepared$ = !1;
      $vars$$2$$.$r$ = this.$_getNode$($obj$$89_openTimeout_s$$25$$);
      $obj$$89_openTimeout_s$$25$$ = this.options.dnd;
      var $checkTimeout$$ = $obj$$89_openTimeout_s$$25$$.check_timeout;
      $checkTimeout$$ ? ($dnd$$1$$.$to1$ && clearTimeout($dnd$$1$$.$to1$), $dnd$$1$$.$to1$ = setTimeout($$$$25$$.proxy(this.$_dnd_prepare$, this), $checkTimeout$$)) : this.$_dnd_prepare$();
      ($obj$$89_openTimeout_s$$25$$ = $obj$$89_openTimeout_s$$25$$.open_timeout) ? ($dnd$$1$$.$to2$ && clearTimeout($dnd$$1$$.$to2$), $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-collapsed") && ($dnd$$1$$.$to2$ = setTimeout($$$$25$$.proxy(this.$_dnd_open$, this), $obj$$89_openTimeout_s$$25$$))) : $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-collapsed") && this.$_dnd_open$();
    }, $_dnd_leave$:function($e$$97$$) {
      var $dnd$$2$$ = this.$_data$.dnd, $vars$$3$$ = this.$_data$.dnd.$vars$;
      $dnd$$2$$.after = !1;
      $dnd$$2$$.before = !1;
      $dnd$$2$$.inside = !1;
      this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid");
      this.$_$container$.addClass("oj-invalid-drop");
      $vars$$3$$.$o$ && $vars$$3$$.$o$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop");
      $vars$$3$$.$r$ && $vars$$3$$.$r$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop");
      $vars$$3$$.$m$.hide();
      $vars$$3$$.$ml$ && $vars$$3$$.$ml$.hide();
      $vars$$3$$.$r$ && $vars$$3$$.$r$[0] === $e$$97$$.target.parentNode && ($dnd$$2$$.$to1$ && (clearTimeout($dnd$$2$$.$to1$), $dnd$$2$$.$to1$ = !1), $dnd$$2$$.$to2$ && (clearTimeout($dnd$$2$$.$to2$), $dnd$$2$$.$to2$ = !1));
    }, $_dnd_open$:function() {
      var $vars$$4$$ = this.$_data$.dnd.$vars$;
      this.$_data$.dnd.$to2$ = !1;
      this.expand($vars$$4$$.$r$, $$$$25$$.proxy(this.$_dnd_prepare$, this), !0);
    }, $_dnd_finish$:function($e$$98$$) {
      var $dnd$$3$$ = this.$_data$.dnd, $vars$$5$$ = this.$_data$.dnd.$vars$;
      $dnd$$3$$.$foreign$ ? ($dnd$$3$$.after || $dnd$$3$$.before || $dnd$$3$$.inside) && this.options.dnd.drag_finish.call(this, {o:$vars$$5$$.$o$, r:$vars$$5$$.$r$, p:$vars$$5$$.$last_pos$}) : (this.$_dnd_prepare$(), this.$_move_node$($vars$$5$$.$o$, $vars$$5$$.$r$, $vars$$5$$.$last_pos$, $e$$98$$[this.options.dnd.copy_modifier + "Key"]));
      $vars$$5$$.$o$ && $vars$$5$$.$o$.removeClass("oj-drag").removeClass("oj-invalid-drop").removeClass("oj-valid-drop");
      $vars$$5$$.$o$ = !1;
      $vars$$5$$.$r$ = !1;
      $vars$$5$$.$m$.hide();
      $vars$$5$$.$ml$ && $vars$$5$$.$ml$.hide();
    }, $_start_drag$:function($obj$$90$$, $e$$99$$) {
      var $dnd$$4$$ = this.$_data$.dnd, $vars$$6$$ = this.$_data$.dnd.$vars$;
      $vars$$6$$.$o$ = this.$_getNode$($obj$$90$$);
      if (!$vars$$6$$.$o$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.ui && this.isSelected($vars$$6$$.$o$) && ($vars$$6$$.$o$ = this.$_getNode$(null, !0));
        var $dt$$ = 1 < $vars$$6$$.$o$.length ? this.$getTranslatedString$("m_multisel") : this.getText($vars$$6$$.$o$), $cnt$$ = this.$_$container$;
        this.$_data$.$core$.$htmlTitles$ || ($dt$$ = $dt$$.replace(/</ig, "\x26lt;").replace(/>/ig, "\x26gt;"));
        $vars$$6$$.$o$.addClass("oj-drag");
        this.$_drag_start$($e$$99$$, {$jstree$:!0, $obj$:$vars$$6$$.$o$}, "\x3cspan\x3e" + $dt$$ + "\x3c/span\x3e");
        this.$_data$.$themes$ && ($vars$$6$$.$m$ && $vars$$6$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dnd$$4$$.$ctl$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
        $dnd$$4$$.$cof$ = $cnt$$.offset();
        $dnd$$4$$.$cw$ = parseInt($cnt$$.width(), 10);
        $dnd$$4$$.ch = parseInt($cnt$$.height(), 10);
        $dnd$$4$$.$active$ = !0;
      }
    }, $_drag_start$:function($e$$100$$, $data$$148$$, $html$$4$$) {
      var $ctl$$1$$ = this.$_data$.dnd.$ctl$;
      $ctl$$1$$.$is_drag$ && this.$_drag_stop$();
      try {
        $e$$100$$.currentTarget.unselectable = "on", $e$$100$$.currentTarget.onselectstart = function $$e$$100$$$currentTarget$onselectstart$() {
          return!1;
        }, $e$$100$$.currentTarget.style && ($e$$100$$.currentTarget.style.MozUserSelect = "none");
      } catch ($err$$8$$) {
      }
      $ctl$$1$$.$init_x$ = $e$$100$$.pageX;
      $ctl$$1$$.$init_y$ = $e$$100$$.pageY;
      $ctl$$1$$.$user_data$ = $data$$148$$;
      $ctl$$1$$.$is_down$ = !0;
      $ctl$$1$$.helper = $$$$25$$("\x3cdiv class\x3d'oj-tree-title oj-drag' style\x3d'top:-2000px' /\x3e").html($html$$4$$);
      $$$$25$$(document).bind("mousemove", this.$_drag$.bind(this));
      $$$$25$$(document).bind("mouseup", this.$_drag_stop$.bind(this));
      return!1;
    }, $_drag$:function($e$$101$$) {
      var $ctl$$2$$ = this.$_data$.dnd.$ctl$, $$title_vars$$7$$ = this.$_data$.dnd.$vars$;
      if ($ctl$$2$$.$is_down$) {
        if (!$ctl$$2$$.$is_drag$) {
          if (5 < Math.abs($e$$101$$.pageX - $ctl$$2$$.$init_x$) || 5 < Math.abs($e$$101$$.pageY - $ctl$$2$$.$init_y$)) {
            $ctl$$2$$.helper.appendTo("body"), $ctl$$2$$.$is_drag$ = !0, $$$$25$$(document).triggerHandler("drag_start.ojtreeu", [{event:$e$$101$$, data:$ctl$$2$$.$user_data$}]);
          } else {
            return;
          }
        }
        if ("mousemove" === $e$$101$$.type) {
          var $d$$17_l$$15$$ = $$$$25$$(document), $horizDisp_t$$9$$ = $d$$17_l$$15$$.scrollTop(), $d$$17_l$$15$$ = $d$$17_l$$15$$.scrollLeft();
          20 > $e$$101$$.pageY - $horizDisp_t$$9$$ ? ($$title_vars$$7$$.$sti$ && "down" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0), $$title_vars$$7$$.$sti$ || ($$title_vars$$7$$.$dir1$ = "up", $$title_vars$$7$$.$sti$ = setInterval(function() {
            $$$$25$$(document).scrollTop($$$$25$$(document).scrollTop() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sti$ && "up" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0);
          20 > $$$$25$$(window).height() - ($e$$101$$.pageY - $horizDisp_t$$9$$) ? ($$title_vars$$7$$.$sti$ && "up" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0), $$title_vars$$7$$.$sti$ || ($$title_vars$$7$$.$dir1$ = "down", $$title_vars$$7$$.$sti$ = setInterval(function() {
            $$$$25$$(document).scrollTop(Number($$$$25$$(document).scrollTop()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sti$ && "down" === $$title_vars$$7$$.$dir1$ && (clearInterval($$title_vars$$7$$.$sti$), $$title_vars$$7$$.$sti$ = void 0);
          20 > $e$$101$$.pageX - $d$$17_l$$15$$ ? ($$title_vars$$7$$.$sli$ && "right" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0), $$title_vars$$7$$.$sli$ || ($$title_vars$$7$$.$dir2$ = "left", $$title_vars$$7$$.$sli$ = setInterval(function() {
            $$$$25$$(document).scrollLeft($$$$25$$(document).scrollLeft() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sli$ && "left" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0);
          20 > $$$$25$$(window).width() - ($e$$101$$.pageX - $d$$17_l$$15$$) ? ($$title_vars$$7$$.$sli$ && "left" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0), $$title_vars$$7$$.$sli$ || ($$title_vars$$7$$.$dir2$ = "right", $$title_vars$$7$$.$sli$ = setInterval(function() {
            $$$$25$$(document).scrollLeft(Number($$$$25$$(document).scrollLeft()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $$title_vars$$7$$.$sli$ && "right" === $$title_vars$$7$$.$dir2$ && (clearInterval($$title_vars$$7$$.$sli$), $$title_vars$$7$$.$sli$ = void 0);
        }
        $horizDisp_t$$9$$ = $ctl$$2$$.$helper_horiz$;
        this.$_isRtl$ && $$title_vars$$7$$.$o$ && ($$title_vars$$7$$ = $$title_vars$$7$$.$o$.find("span.oj-tree-title:first")) && 0 < $$title_vars$$7$$.length && ($horizDisp_t$$9$$ = -$horizDisp_t$$9$$ - $$title_vars$$7$$[0].offsetWidth);
        $ctl$$2$$.helper.css({left:$e$$101$$.pageX + $horizDisp_t$$9$$ + "px", top:$e$$101$$.pageY + $ctl$$2$$.$helper_top$ + "px"});
        $$$$25$$(document).triggerHandler("drag.ojtreeu", [{event:$e$$101$$, data:$ctl$$2$$.$user_data$}]);
      }
    }, $_drag_stop$:function($e$$102$$) {
      var $vars$$8$$ = this.$_data$.dnd.$vars$, $ctl$$3$$ = this.$_data$.dnd.$ctl$;
      $vars$$8$$.$sli$ && clearInterval($vars$$8$$.$sli$);
      $vars$$8$$.$sti$ && clearInterval($vars$$8$$.$sti$);
      $vars$$8$$.$o$ && $vars$$8$$.$o$.removeClass("oj-drag").removeClass("oj-invalid-drop").removeClass("oj-valid-drop");
      $$$$25$$(document).unbind("mousemove", this.$_drag$.bind(this));
      $$$$25$$(document).unbind("mouseup", this.$_drag_stop$.bind(this));
      $$$$25$$(document).triggerHandler("drag_stop.ojtreeu", [{event:$e$$102$$ ? $e$$102$$ : {}, data:$ctl$$3$$.$user_data$}]);
      $ctl$$3$$.helper.remove();
      $ctl$$3$$.$init_x$ = 0;
      $ctl$$3$$.$init_y$ = 0;
      $ctl$$3$$.$user_data$ = {};
      $ctl$$3$$.$is_down$ = !1;
      $ctl$$3$$.$is_drag$ = !1;
      this.$_$container$.removeClass("oj-invalid-drop");
    }, $_save_opened$:function() {
      var $_this$$19$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-expanded").each(function() {
        this.id && $_this$$19$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
    }, $_reload_nodes$:function($bExpandAll_is_callback$$) {
      var $_this$$20$$ = this, $done$$1$$ = !0, $current$$7$$ = [], $remaining$$ = [];
      if (!$bExpandAll_is_callback$$) {
        this.$_data$.$core$.$reopen$ = !1;
        this.$_data$.$core$.$refreshing$ = !0;
        if ($bExpandAll_is_callback$$ = this.$_isOptExpandAll$()) {
          this.$_data$.$core$.$toExpand$ = [];
        }
        $bExpandAll_is_callback$$ && this.$_$container_ul$.find("li.oj-collapsed").each(function() {
          $$$$25$$(this).attr("id");
          $_this$$20$$.$_data$.$core$.$toExpand$.push("#" + $$$$25$$(this).attr("id"));
        });
        this.$_data$.$core$.$toExpand$ = $$$$25$$.map($$$$25$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$32$$) {
          return "#" + $n$$32$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
        });
        this.$_data$.$core$.$toLoad$ = $$$$25$$.map($$$$25$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$33$$) {
          return "#" + $n$$33$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
        });
        this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$));
      }
      this.$_data$.$core$.$toLoad$.length && ($$$$25$$.each(this.$_data$.$core$.$toLoad$, function($i$$281$$, $val$$52$$) {
        if ("#" == $val$$52$$) {
          return!0;
        }
        $$$$25$$($val$$52$$).length ? $current$$7$$.push($val$$52$$) : $remaining$$.push($val$$52$$);
      }), $current$$7$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$, $$$$25$$.each($current$$7$$, function($i$$282$$, $val$$53$$) {
        $_this$$20$$.$_is_loaded$($val$$53$$) || ($_this$$20$$.$_load_node$($val$$53$$, function() {
          $_this$$20$$.$_reload_nodes$(!0);
        }, function() {
          $_this$$20$$.$_reload_nodes$(!0);
        }), $done$$1$$ = !1);
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$25$$.each(this.$_data$.$core$.$toExpand$, function($i$$283$$, $val$$54$$) {
        $_this$$20$$.$_expand$($val$$54$$, !1, !0);
      });
      $done$$1$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$20$$.$_emitEvent$({}, "reload_nodes");
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$());
    }, setTheme:function($theme_name$$, $theme_url$$) {
      if (!$theme_name$$) {
        return!1;
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$25$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
      this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
    }, isIcons:function() {
      return this.$_data$.$themes$.icons;
    }, $_showIcons$:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons");
    }, $_hideIcons$:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons");
    }, toggleIcons:function() {
    }, $_enableKeys$:function() {
      this.$_data$.keys.$enabled$ = !0;
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$(!0);
      this.$_initTypeOpts$();
      this.$_initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_initDnD$();
      this.$_initMenu$();
    }, $_emitEvent$:function($data$$149$$, $eventname$$) {
      if ($eventname$$ && "string" === $$$$25$$.type($eventname$$)) {
        var $args$$14_rslt$$8$$, $func$$12_inst$$;
        $args$$14_rslt$$8$$ = Array.prototype.slice.call(arguments);
        var $evname_s$$inline_778$$ = $eventname$$;
        $func$$12_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $eventname$$, $b$$inline_781_isPublic$$ = !1, $item$$14$$;
        if (!0 !== this.$_data$.$core$.locked || "unlock" === $eventname$$ || "isLocked" === $eventname$$ || "lock" === $eventname$$) {
          $evname_s$$inline_778$$ = $eventname$$;
          "rename_node" === $evname_s$$inline_778$$ ? $evname_s$$inline_778$$ = "rename" : "set_focus" === $evname_s$$inline_778$$ ? $evname_s$$inline_778$$ = "focus" : "unset_focus" === $evname_s$$inline_778$$ ? $evname_s$$inline_778$$ = "unfocus" : "delete_node" === $evname_s$$inline_778$$ ? $evname_s$$inline_778$$ = "remove" : "move_node" === $evname_s$$inline_778$$ ? $evname_s$$inline_778$$ = "move" : "create_node" === $evname_s$$inline_778$$ && ($evname_s$$inline_778$$ = "create");
          ($b$$inline_781_isPublic$$ = 0 <= $$$$25$$.inArray($evname_s$$inline_778$$, $_aEvNames$$)) || "create_node" != $evname_s$$inline_778$$ || ($b$$inline_781_isPublic$$ = !0);
          $b$$inline_781_isPublic$$ || ($evname_s$$inline_778$$ = "tree" + $evname_s$$inline_778$$);
          $item$$14$$ = $data$$149$$ ? $data$$149$$.obj : void 0;
          if ("loaded" === $evname_s$$inline_778$$ || "optionChange" == $evname_s$$inline_778$$) {
            $item$$14$$ = -1;
          }
          var $eventdata$$ = {};
          $eventdata$$.item = $item$$14$$;
          $eventdata$$.inst = $func$$12_inst$$;
          $isBefore$$ ? ($func$$12_inst$$ = $data$$149$$.func, $eventdata$$.func = $func$$12_inst$$, $eventdata$$.args = $args$$14_rslt$$8$$, "rename" === $func$$12_inst$$ && ($eventdata$$.title = $data$$149$$.title, $eventdata$$.prevTitle = $data$$149$$.prevTitle)) : $b$$inline_781_isPublic$$ && ("move" == $evname_s$$inline_778$$ ? ($eventdata$$.position = $data$$149$$.$p$, $eventdata$$.reference = $data$$149$$.$r$, $eventdata$$.data = $data$$149$$) : "rename" == $evname_s$$inline_778$$ ? ($eventdata$$.title = 
          $data$$149$$.title, $eventdata$$.prevTitle = $data$$149$$.prevTitle) : "remove" == $evname_s$$inline_778$$ ? ($eventdata$$.parent = $data$$149$$.parent, $eventdata$$.prev = $data$$149$$.prev) : "delete" == $evname_s$$inline_778$$ ? ($eventdata$$.prev = $data$$149$$.prev, $eventdata$$.parent = $data$$149$$.parent) : "expandAll" === $evname_s$$inline_778$$ || "collapseAll" === $evname_s$$inline_778$$ || "deselectAll" === $evname_s$$inline_778$$ ? $eventdata$$.targ = $data$$149$$.targ : "optionChange" == 
          $evname_s$$inline_778$$ && ($eventdata$$.option = $data$$149$$.option, $eventdata$$.previousValue = $data$$149$$.previousValue, $eventdata$$.value = $data$$149$$.value, $eventdata$$.optionMetadata = $data$$149$$.optionMetadata));
          if ($b$$inline_781_isPublic$$) {
            if ($args$$14_rslt$$8$$ = this._trigger($evname_s$$inline_778$$, new $$$$25$$.Event("oj" + $evname_s$$inline_778$$), $eventdata$$), $isBefore$$) {
              return "undefined" != typeof $args$$14_rslt$$8$$ && ($args$$14_rslt$$8$$ = $args$$14_rslt$$8$$ ? !0 : !1), $args$$14_rslt$$8$$;
            }
          } else {
            this.$_$container$.trigger($evname_s$$inline_778$$, $eventdata$$);
          }
        }
      }
    }, $_fireOptionChangeEvent$:function($key$$102$$, $prevVal$$, $newVal$$, $origEvent$$) {
      var $i$$284$$, $j$$42$$, $id$$36$$, $len$$17$$, $inList$$2$$, $bFire$$ = $prevVal$$.length != $newVal$$.length;
      if (!$bFire$$) {
        for ($len$$17$$ = $prevVal$$.length, $i$$284$$ = 0;$i$$284$$ < $len$$17$$;$i$$284$$++) {
          $id$$36$$ = $$$$25$$($prevVal$$[$i$$284$$]).attr("id");
          $inList$$2$$ = !1;
          for ($j$$42$$ = 0;$j$$42$$ < $len$$17$$;$j$$42$$++) {
            if ($id$$36$$ == $$$$25$$($newVal$$[$j$$42$$]).attr("id")) {
              $inList$$2$$ = !0;
              break;
            }
          }
          if (!$inList$$2$$) {
            $bFire$$ = !0;
            break;
          }
        }
      }
      $bFire$$ && this.$_emitEvent$({option:$key$$102$$, previousValue:$prevVal$$, value:$newVal$$, optionMetadata:{writeback:$origEvent$$ ? "shouldWrite" : "shouldNotWrite"}}, "optionChange");
    }, $__rollback$:function() {
      return this.get_rollback();
    }, $__call_old$:function() {
    }, $_start$:function() {
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + "\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$getTranslatedString$("m_loading") + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_index$);
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-collapsed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "click.ojtree", $$$$25$$.proxy(function($event$$316_trgt$$) {
        $event$$316_trgt$$ = $$$$25$$($event$$316_trgt$$.target);
        this.toggleExpand($event$$316_trgt$$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mousedown", $$$$25$$.proxy(function($event$$317$$) {
        $$$$25$$($event$$317$$.target).removeClass("oj-default").removeClass("oj-hover").addClass("oj-selected");
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mouseup", $$$$25$$.proxy(function($event$$318$$) {
        $$$$25$$($event$$318$$.target).removeClass("oj-selected").addClass("oj-default");
      }, this)).bind("mousedown.ojtree", $$$$25$$.proxy(function() {
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$2$$;
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else {
          if (window.getSelection) {
            $sel$$2$$ = window.getSelection();
            try {
              $sel$$2$$.removeAllRanges(), $sel$$2$$.collapse(document.getElementsByTagName("body")[0], 0);
            } catch ($err$$9$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$25$$.proxy(function() {
        this.$_data$.ui.$focused$ = !0;
        if (this.$_data$.$core$.$initFocus$) {
          this.$_data$.ui.$lastHovered$ && (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastHovered$, this.hover(this.$_data$.ui.$hovered$), this.$_data$.ui.$lastHovered$ = null), this.$_$container_ul$.find("a.oj-selected").removeClass("oj-tree-inactive");
        } else {
          this.$_data$.$core$.$initFocus$ = !0;
          var $first$$7$$ = this.$_$container_ul$.find("li:first");
          this.hover($first$$7$$);
        }
      }, this)).blur($$$$25$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1;
        this.$_data$.ui.$lastHovered$ = this.$_data$.ui.$hovered$;
        this.$_data$.ui.$lastHovered$ && this.dehover(this.$_data$.ui.$hovered$);
        this.$_$container_ul$.find("a.oj-selected").addClass("oj-tree-inactive");
      }, this));
      this.$_data$.$core$.$load_open$ && this.$_$container$.bind("treeload_node", $$$$25$$.proxy(function($e$$105$$, $ui$$21$$) {
        var $o$$16$$ = this.$_getNode$($ui$$21$$.item);
        -1 === $o$$16$$ && ($o$$16$$ = this.$_$container_ul$);
        $o$$16$$.length && $o$$16$$.find("li.oj-expanded:not(:has(ul))").each(function() {
          this.$_load_node$(this, $$$$25$$.noop, $$$$25$$.noop);
        });
      }, this));
      this.$_emitEvent$({}, "init");
      this.$_loadNodes$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$();
      this.$_$container_ul$.focus();
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_index$);
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$25$$();
      this.$_data$.ui.$last_selected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      var $a$$83$$ = this.options.selection;
      $a$$83$$ && "array" === $$$$25$$.type($a$$83$$) && 0 < $a$$83$$.length && (this.$_data$.ui.$to_select$ = $a$$83$$, this.options.selection = []);
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$25$$.proxy(function($event$$320$$) {
        $event$$320$$.preventDefault();
        $event$$320$$.currentTarget.blur();
        $$$$25$$($event$$320$$.currentTarget).hasClass("oj-tree-loading") || (this.$_select$($event$$320$$.currentTarget, !0, $event$$320$$), this.$_$container_ul$.focus());
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$25$$.proxy(function($event$$321$$) {
        $$$$25$$($event$$321$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$321$$.target);
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$25$$.proxy(function($event$$322$$) {
        $$$$25$$($event$$322$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$322$$.target);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseenter.ojtree", $$$$25$$.proxy(function($event$$323$$) {
        $$$$25$$($event$$323$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$323$$.target, !0);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseleave.ojtree", $$$$25$$.proxy(function($event$$324$$) {
        $$$$25$$($event$$324$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$324$$.target, !1);
      }, this)).bind("treereopen", $$$$25$$.proxy(function() {
        this.reselect();
      }, this)).bind("treeget_rollback", $$$$25$$.proxy(function() {
        this.dehover();
        this.saveSelected();
      }, this)).bind("treeset_rollback", $$$$25$$.proxy(function() {
        this.reselect();
      }, this)).bind("ojcollapse", $$$$25$$.proxy(function($event$$325$$, $ui$$22$$) {
        var $obj$$91$$ = this.$_getNode$($ui$$22$$.item), $clk$$ = $obj$$91$$ && $obj$$91$$.length ? $obj$$91$$.children("ul").find("a.oj-selected") : $$$$25$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$91$$);
        });
      }, this)).bind("ojremove", $$$$25$$.proxy(function($event$$326$$, $ui$$23$$) {
        var $s$$26$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$92$$ = this.$_getNode$($ui$$23$$.item), $clk$$1_obj$$92$$ = $clk$$1_obj$$92$$ && $clk$$1_obj$$92$$.length ? $clk$$1_obj$$92$$.find("a.oj-selected") : [], $_this$$22$$ = this;
        $clk$$1_obj$$92$$.each(function() {
          $_this$$22$$.deselect(this);
        });
        $s$$26$$ && $clk$$1_obj$$92$$.length && $ui$$23$$.prev.each(function() {
          if (this.parentNode) {
            return $_this$$22$$.select(this), !1;
          }
        });
      }, this)).bind("ojmove", $$$$25$$.proxy(function($event$$327$$, $ui$$24$$) {
        var $data$$150$$ = $ui$$24$$.data;
        $data$$150$$.cy && ($data$$150$$.oc.find("a.oj-selected").removeClass("oj-selected"), $data$$150$$.oc.removeAttr("aria-selected"));
      }, this));
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$);
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("treeafter_close", function($e$$106$$, $ui$$25$$) {
        $ui$$25$$.item.children("ul").remove();
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$);
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_processExistingMarkup$(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$);
    }, $_processExistingMarkup$:function() {
      this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup_ul$ || (this.$_data$.html.$markup_ul$ = this.$_$container$.find(" \x3e ul"), this.$_data$.html.$markup_div$ = $$$$25$$("\x3cdiv id\x3d'oj-tree-existing-markup-" + this.$_index$ + "' style\x3d'display:none'\x3e").append(this.$_data$.html.$markup_ul$), this.$_$container$.after(this.$_data$.html.$markup_div$)), this.$_data$.html.$markup$ = this.$_data$.html.$markup_ul$.find(" \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), 
      this.$_data$.html.$cloneMarkup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType;
      }).remove());
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$25$$("script").each(function() {
        if (this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1;
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("treeinit", $$$$25$$.proxy(function() {
        var $s$$27$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$27$$.dots;
        this.$_data$.$themes$.icons = $s$$27$$.icons;
        this.setTheme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url);
      }, this)).bind("ojloaded", $$$$25$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
        this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      }, this));
    }, $_initTypes$:function() {
      var $s$$28$$ = this.options.types;
      $s$$28$$ && this.$_$container$.bind("treeinit", $$$$25$$.proxy(function() {
        var $types$$ = $$$$25$$.extend(!0, {}, $s$$28$$.types), $attr$$19$$ = $s$$28$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$23$$ = this;
        $$$$25$$.each($types$$, function($i$$285$$, $tp$$) {
          $$$$25$$.each($tp$$, function($k$$12$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$12$$) || $_this$$23$$.$_data$.types.$attachTo$.push($k$$12$$);
          });
          var $ot$$ = typeof $tp$$.icon;
          if ("undefined" === $ot$$) {
            $ot$$ = typeof $tp$$.image;
            if ("boolean" === $ot$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none";
            } else {
              if (!$tp$$.image && !$tp$$.position) {
                return!0;
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position);
          }
          if ($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$285$$ ? ($_this$$23$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$23$$.$_index$ + " .oj-tree-list li.oj-tree-type a \x3e .oj-tree-node-icon { ", $icons_css$$ += $_this$$23$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$23$$.$_index$ + " .oj-tree-list li[" + $attr$$19$$ + '\x3d"oj-tree-deftype"].oj-tree-type \x3e a ins.oj-tree-node-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + $_this$$23$$.$_index$ + 
            " .oj-tree-list li[" + $attr$$19$$ + '\x3d"' + $i$$285$$ + '"].oj-tree-type \x3e a \x3e ins.oj-tree-node-icon { '), $icons_css$$ += $_this$$23$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ";
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"});
      }, this)).bind("ojbefore", $$$$25$$.proxy(function($e$$107$$, $data$$151$$) {
        var $d$$18_o$$17_s$$29$$, $ty$$1$$, $func$$13$$ = $data$$151$$.func, $item$$15$$ = $data$$151$$.item;
        if (($d$$18_o$$17_s$$29$$ = ($d$$18_o$$17_s$$29$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$15$$) : !1) && -1 !== $d$$18_o$$17_s$$29$$ && $d$$18_o$$17_s$$29$$.length ? $d$$18_o$$17_s$$29$$.data("oj-tree") : !1) && $d$$18_o$$17_s$$29$$.types && !1 === $d$$18_o$$17_s$$29$$[$func$$13$$] || -1 !== $$$$25$$.inArray($func$$13$$, this.$_data$.types.$attachTo$) && $data$$151$$.item && ($data$$151$$.item.tagName || $data$$151$$.item.jquery) && ($d$$18_o$$17_s$$29$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$15$$), ($d$$18_o$$17_s$$29$$[$ty$$1$$] && "undefined" !== typeof $d$$18_o$$17_s$$29$$[$ty$$1$$][$func$$13$$] || $d$$18_o$$17_s$$29$$["default"] && "undefined" !== typeof $d$$18_o$$17_s$$29$$["default"][$func$$13$$]) && !1 === this.$_check$($func$$13$$, $item$$15$$))) {
          return $e$$107$$.stopImmediatePropagation(), !1;
        }
      }, this));
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$2$$ = "", $css$$2$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$2$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$2$$ + " background-image:none; ";
      return $css$$2$$ = $tp$$1$$.icon.position ? $css$$2$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$2$$ + " background-position:0 0; ";
    }, $_initDnD$:function() {
      if (this.$_data$.dnd.$reorder$) {
        var $s$$30_vars$$9$$ = this.$_data$.dnd.$vars$;
        $s$$30_vars$$9$$.$m$ = $$$$25$$("\x3cdiv class\x3d'oj-tree-drop-marker'\x3e\x3cspan class\x3d'oj-tree-drop-ptr oj-component-icon'\x3e\x26#160;\x3c/span\x3e\x3c/div\x3e").hide().bind("mouseleave mouseenter", $$$$25$$.proxy(function($e$$108$$) {
          var $vars$$10$$ = this.$_data$.dnd.$vars$;
          $vars$$10$$.$m$.hide();
          $vars$$10$$.$ml$.hide();
          $e$$108$$.preventDefault();
          $e$$108$$.stopImmediatePropagation();
          return!1;
        }, this)).appendTo("body");
        $s$$30_vars$$9$$.$ml$ = $$$$25$$("\x3cdiv /\x3e").addClass("oj-tree-drop-marker-line").hide().bind("mouseup", function($e$$109$$) {
          var $vars$$11$$ = this.$_data$.dnd.$vars$;
          if ($vars$$11$$.$r$ && $vars$$11$$.$r$.length) {
            return $vars$$11$$.$r$.children("a").trigger($e$$109$$), $e$$109$$.preventDefault(), $e$$109$$.stopImmediatePropagation(), !1;
          }
        }).bind("mouseleave", $$$$25$$.proxy(function($e$$110$$) {
          var $vars$$12$$ = this.$_data$.dnd.$vars$, $rt$$ = $$$$25$$($e$$110$$.relatedTarget);
          if (($rt$$.is(".oj-tree") || 0 === $rt$$.closest(".oj-tree").length) && $vars$$12$$.$r$ && $vars$$12$$.$r$.length) {
            return $vars$$12$$.$r$.children("a").trigger($e$$110$$), $vars$$12$$.$m$.hide(), $vars$$12$$.$ml$.hide(), $e$$110$$.preventDefault(), $e$$110$$.stopImmediatePropagation(), !1;
          }
        }, this)).appendTo("body");
        this.$_data$.dnd.$ml_width$ = $s$$30_vars$$9$$.$ml$.width();
        $$$$25$$(document).bind("drag_start.ojtreeu", $$$$25$$.proxy(function($e$$111$$, $data$$152$$) {
          var $vars$$13$$ = this.$_data$.dnd.$vars$;
          $data$$152$$.data.$jstree$ && ($vars$$13$$.$m$.show(), $vars$$13$$.$ml$ && $vars$$13$$.$ml$.show());
        }, this));
        $$$$25$$(document).bind("drag_stop.ojtreeu", $$$$25$$.proxy(function($e$$112$$, $data$$153$$) {
          var $vars$$14$$ = this.$_data$.dnd.$vars$;
          $data$$153$$.data.$jstree$ && ($vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide());
        }, this));
        this.$_$container$.bind("mouseenter.ojtree", $$$$25$$.proxy(function($dc_e$$113_tr$$1$$) {
          var $ctl$$4$$ = this.$_data$.dnd.$ctl$, $vars$$15$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$4$$.$is_drag$ && $ctl$$4$$.$user_data$.$jstree$ && (this.options.themes && ($vars$$15$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$15$$.$ml$ && $vars$$15$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $ctl$$4$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$)), $dc_e$$113_tr$$1$$.currentTarget === $dc_e$$113_tr$$1$$.target && $ctl$$4$$.$user_data$.$obj$ && $$$$25$$($ctl$$4$$.$user_data$.$obj$).length && $$$$25$$($ctl$$4$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== 
          $dc_e$$113_tr$$1$$.target)) {
            if ($dc_e$$113_tr$$1$$ = this.$_reference$($dc_e$$113_tr$$1$$.target), $dc_e$$113_tr$$1$$.data.dnd.$foreign$) {
              if ($dc_e$$113_tr$$1$$ = $dc_e$$113_tr$$1$$.options.dnd.drag_check.call(this, {o:$vars$$15$$.$o$, r:$dc_e$$113_tr$$1$$.$_$container$, is_root:!0}), !0 === $dc_e$$113_tr$$1$$ || !0 === $dc_e$$113_tr$$1$$.inside || !0 === $dc_e$$113_tr$$1$$.before || !0 === $dc_e$$113_tr$$1$$.after) {
                $ctl$$4$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$15$$.$o$ && $vars$$15$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop");
              }
            } else {
              $dc_e$$113_tr$$1$$.$_prepare_move$($vars$$15$$.$o$, $dc_e$$113_tr$$1$$.$_$container$, "last"), $dc_e$$113_tr$$1$$.check_move() && ($ctl$$4$$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$15$$.$o$ && $vars$$15$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop"));
            }
          }
        }, this)).bind("mouseup.ojtree", $$$$25$$.proxy(function($dc$$1_e$$114$$) {
          var $vars$$16$$ = this.$_data$.dnd.$vars$, $ctl$$5_tr$$2$$ = this.$_data$.dnd.$ctl$;
          $ctl$$5_tr$$2$$.$is_drag$ && $ctl$$5_tr$$2$$.$user_data$.$jstree$ && $dc$$1_e$$114$$.currentTarget === $dc$$1_e$$114$$.target && $ctl$$5_tr$$2$$.$user_data$.$obj$ && $$$$25$$($ctl$$5_tr$$2$$.$user_data$.$obj$).length && $$$$25$$($ctl$$5_tr$$2$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $dc$$1_e$$114$$.target && ($ctl$$5_tr$$2$$ = this.$_reference$($dc$$1_e$$114$$.currentTarget), $ctl$$5_tr$$2$$.data.dnd.foreign ? ($dc$$1_e$$114$$ = $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_check.call(this, 
          {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0}), !0 !== $dc$$1_e$$114$$ && !0 !== $dc$$1_e$$114$$.inside && !0 !== $dc$$1_e$$114$$.before && !0 !== $dc$$1_e$$114$$.after || $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_finish.call(this, {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0})) : $ctl$$5_tr$$2$$.$_move_node$($vars$$16$$.$o$, $ctl$$5_tr$$2$$.$_$container$, "last", $dc$$1_e$$114$$[$ctl$$5_tr$$2$$.options.dnd.copy_modifier + "Key"]));
        }, this)).bind("mouseleave.ojtree", $$$$25$$.proxy(function($e$$115$$) {
          var $ctl$$6$$ = this.$_data$.dnd.$ctl$;
          if ($e$$115$$.relatedTarget && $$$$25$$($e$$115$$.relatedTarget).hasClass("oj-tree-drop-marker-line")) {
            return!1;
          }
          $ctl$$6$$.$is_drag$ && $ctl$$6$$.$user_data$.$jstree$ && (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$to1$ && clearTimeout(this.$_data$.dnd.$to1$), this.$_data$.dnd.$to2$ && clearTimeout(this.$_data$.dnd.$to2$), $ctl$$6$$.helper.children("ins").hasClass("oj-tree-drop-ok") && ($ctl$$6$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), this.$_$container$.addClass("oj-invalid-drop"), 
          this.$_data$.dnd.$vars$.$o$ && this.$_data$.dnd.$vars$.$o$.removeClass("oj-valid-drop").removeClass("oj-invalid-drop")));
        }, this)).bind("mousemove.ojtree", $$$$25$$.proxy(function($e$$116$$) {
          var $ctl$$7$$ = this.$_data$.dnd.$ctl$;
          if ($ctl$$7$$.$is_drag$ && $ctl$$7$$.$user_data$.$jstree$) {
            var $cnt$$1$$ = this.$_$container$[0];
            $e$$116$$.pageX + 24 > this.$_data$.dnd.$cof$.left + this.$_data$.dnd.$cw$ ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$25$$.proxy(function() {
              this.scrollLeft += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$116$$.pageX - 24 < this.$_data$.dnd.$cof$.left ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$25$$.proxy(function() {
              this.scrollLeft -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$);
            $e$$116$$.pageY + 24 > this.$_data$.dnd.$cof$.top + this.$_data$.dnd.ch ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$25$$.proxy(function() {
              this.scrollTop += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$116$$.pageY - 24 < this.$_data$.dnd.$cof$.top ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$25$$.proxy(function() {
              this.scrollTop -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$);
          }
        }, this)).bind("scroll.ojtree", $$$$25$$.proxy(function() {
          var $ctl$$8$$ = this.$_data$.dnd.$ctl$, $vars$$17$$ = this.$_data$.dnd.$vars$;
          $ctl$$8$$.$is_drag$ && $ctl$$8$$.$user_data$.$jstree$ && $vars$$17$$.$m$ && $vars$$17$$.$ml$ && ($vars$$17$$.$m$.hide(), $vars$$17$$.$ml$.hide());
        }, this)).delegate(".oj-tree-list a", "mousedown.ojtree", $$$$25$$.proxy(function($e$$118$$) {
          if (1 === $e$$118$$.which) {
            return this.$_start_drag$($e$$118$$.currentTarget, $e$$118$$), !1;
          }
        }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$25$$.proxy(function($e$$119$$) {
          var $ctl$$9$$ = this.$_data$.dnd.$ctl$;
          $ctl$$9$$.$is_drag$ && $ctl$$9$$.$user_data$.$jstree$ && this.$_dnd_enter$($e$$119$$.currentTarget);
        }, this)).delegate(".oj-tree-list a", "mousemove.ojtree", $$$$25$$.proxy(function($e$$120$$) {
          var $ctl$$10$$ = this.$_data$.dnd.$ctl$, $vars$$18$$ = this.$_data$.dnd.$vars$;
          $ctl$$10$$.$is_drag$ && $ctl$$10$$.$user_data$.$jstree$ && ($vars$$18$$.$r$ && $vars$$18$$.$r$.length && $vars$$18$$.$r$.children("a")[0] === $e$$120$$.currentTarget || this.$_dnd_enter$($e$$120$$.currentTarget), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$25$$($e$$120$$.target).offset()), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$25$$($e$$120$$.target).offset()), this.$_data$.dnd.$w$ = ($e$$120$$.pageY - (this.$_data$.dnd.off.top || 
          0)) % this.$_data$.$core$.$li_height$, 0 > this.$_data$.dnd.$w$ && (this.$_data$.dnd.$w$ += this.$_data$.$core$.$li_height$), this.$_dnd_show$());
        }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$25$$.proxy(function($e$$121$$) {
          var $ctl$$11$$ = this.$_data$.dnd.$ctl$, $vars$$19$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$11$$.$is_drag$ && $ctl$$11$$.$user_data$.$jstree$) {
            if ($e$$121$$.relatedTarget && $$$$25$$($e$$121$$.relatedTarget).hasClass("oj-tree-drop-marker-line")) {
              return!1;
            }
            $vars$$19$$.$m$ && $vars$$19$$.$m$.hide();
            $vars$$19$$.$ml$ && $vars$$19$$.$ml$.hide();
            this.$_data$.dnd.$mto$ = setTimeout(function($t$$11$$) {
              return function() {
                $t$$11$$.$_dnd_leave$($e$$121$$);
              };
            }(this), 0);
          }
        }, this)).delegate(".oj-tree-list a", "mouseup.ojtree", $$$$25$$.proxy(function($e$$122$$) {
          var $ctl$$12$$ = this.$_data$.dnd.$ctl$;
          $ctl$$12$$.$is_drag$ && $ctl$$12$$.$user_data$.$jstree$ && this.$_dnd_finish$($e$$122$$);
        }, this));
        $$$$25$$(document).bind("drag_stop.ojtreeu", $$$$25$$.proxy(function() {
          var $dnd$$5$$ = this.$_data$.dnd, $vars$$20$$ = this.$_data$.dnd.$vars$;
          $dnd$$5$$.$to1$ && clearTimeout($dnd$$5$$.$to1$);
          $dnd$$5$$.$to2$ && clearTimeout($dnd$$5$$.$to2$);
          $dnd$$5$$.$i1$ && clearInterval($dnd$$5$$.$i1$);
          $dnd$$5$$.$i2$ && clearInterval($dnd$$5$$.$i2$);
          $dnd$$5$$.after = !1;
          $dnd$$5$$.before = !1;
          $dnd$$5$$.inside = !1;
          $dnd$$5$$.off = !1;
          $dnd$$5$$.$prepared$ = !1;
          $dnd$$5$$.$w$ = !1;
          $dnd$$5$$.$to1$ = !1;
          $dnd$$5$$.$to2$ = !1;
          $dnd$$5$$.$i1$ = !1;
          $dnd$$5$$.$i2$ = !1;
          $dnd$$5$$.$active$ = !1;
          $dnd$$5$$.$foreign$ = !1;
          $vars$$20$$.$m$ && $vars$$20$$.$m$.css({top:"-2000px"});
          $vars$$20$$.$ml$ && $vars$$20$$.$ml$.css({top:"-2000px"});
        }, this)).bind("drag_start.ojtreeu", $$$$25$$.proxy(function($e$$123$$, $data$$154$$) {
          if ($data$$154$$.data.$jstree$) {
            var $et$$ = $$$$25$$($data$$154$$.event.target);
            $et$$.closest(".jstree").hasClass("oj-tree-" + this.$_index$) && this.$_dnd_enter$($et$$);
          }
        }, this));
        $s$$30_vars$$9$$ = this.options.dnd;
        $s$$30_vars$$9$$.drag_target && $$$$25$$(document).delegate($s$$30_vars$$9$$.drag_target, "mousedown.ojtree-" + this.$_index$, $$$$25$$.proxy(function($e$$124$$) {
          var $cnt$$2_ctl$$13$$ = this.$_data$.dnd.$ctl$, $dnd$$6$$ = this.$_data$.dnd, $vars$$21$$ = this.$_data$.dnd.$vars$;
          $vars$$21$$.$o$ = $e$$124$$.target;
          this.$_drag_start$($e$$124$$, {$jstree$:!0, $obj$:$e$$124$$.target}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $$$$25$$($e$$124$$.target).text());
          this.$_data$.$themes$ && ($vars$$21$$.$m$ && $vars$$21$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$ml$ && $vars$$21$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $cnt$$2_ctl$$13$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
          $cnt$$2_ctl$$13$$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid");
          this.$_$container$.addClass("oj-invalid-drop");
          $vars$$21$$.$o$ && $vars$$21$$.$o$.removeClass("oj-valid-drop").addClass("oj-invalid-drop");
          $cnt$$2_ctl$$13$$ = this.$_$container$;
          $dnd$$6$$.$cof$ = $cnt$$2_ctl$$13$$.offset();
          $dnd$$6$$.$cw$ = parseInt($cnt$$2_ctl$$13$$.width(), 10);
          $dnd$$6$$.ch = parseInt($cnt$$2_ctl$$13$$.height(), 10);
          $dnd$$6$$.$foreign$ = !0;
          $e$$124$$.preventDefault();
        }, this));
        $s$$30_vars$$9$$.drop_target && $$$$25$$(document).delegate($s$$30_vars$$9$$.drop_target, "mouseenter.ojtreex-" + this.$_index$, $$$$25$$.proxy(function($e$$125$$) {
          var $dnd$$7$$ = this.$_data$.dnd, $vars$$22$$ = this.$_data$.dnd.$vars$;
          $dnd$$7$$.$active$ && this.options.dnd.drop_check.call(this, {o:$vars$$22$$.$o$, r:$$$$25$$($e$$125$$.target), e:$e$$125$$}) && ($dnd$$7$$.$ctl$.helper.children("ins").removeClass("oj-tree-drop-invalid").addClass("oj-tree-drop-ok"), this.$_$container$.removeClass("oj-invalid-drop"), $vars$$22$$.$o$ && $vars$$22$$.$o$.removeClass("oj-invalid-drop").addClass("oj-valid-drop"));
        }, this)).delegate($s$$30_vars$$9$$.drop_target, "mouseleave.ojtree-" + this.$_index$, $$$$25$$.proxy(function() {
          this.$_data$.dnd.$active$ && (this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-drop-ok").addClass("oj-tree-drop-invalid"), this.$_$container$.addClass("oj-invalid-drop"));
        }, this)).delegate($s$$30_vars$$9$$.drop_target, "mouseup.ojtreex-" + this.$_index$, $$$$25$$.proxy(function($e$$127$$) {
          var $vars$$23$$ = this.$_data$.dnd.$vars$;
          this.$_data$.dnd.$active$ && this.$_data$.dnd.$ctl$.helper.children("ins").hasClass("oj-tree-drop-ok") && this.options.dnd.drop_finish.call(this, {o:$vars$$23$$.$o$, r:$$$$25$$($e$$127$$.target), e:$e$$127$$});
        }, this));
      }
    }, $_initDnDOpts$:function() {
      this.$_data$.dnd.$reorder$ = !1;
      var $opts$$25$$ = this.options.dnd, $bFixup$$ = !0;
      "object" === typeof $opts$$25$$ && ($opts$$25$$ = $opts$$25$$.reorder, "string" === typeof $opts$$25$$ && ("enable" === $opts$$25$$ ? (this.$_data$.dnd.$reorder$ = !0, $bFixup$$ = !1) : "disable" == $opts$$25$$ && ($bFixup$$ = !1)));
      this.$_data$.dnd.$reorder$ ? (this.options.dnd = {}, this.$_applyDefaults$(this.options.dnd, this.$_data$.dnd.$defaults$), this.options.dnd.reorder = "enable") : $bFixup$$ && (this.options.dnd = {reorder:"disable"});
    }, $_initKeys$:function() {
    }, $_initMenu$:function($newVal$$1$$) {
      var $$m_menu$$11$$, $dm_t$$12$$;
      $newVal$$1$$ || this.options.contextMenu || ($$m_menu$$11$$ = this.$_$container$.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m_menu$$11$$);
      if ($newVal$$1$$ || this.options.contextMenu) {
        $$m_menu$$11$$ = $newVal$$1$$ || this.options.contextMenu;
        $dm_t$$12$$ = $$$$25$$.type($$m_menu$$11$$);
        if ("function" == $dm_t$$12$$) {
          try {
            $$m_menu$$11$$ = $$m_menu$$11$$();
          } catch ($e$$128$$) {
            $$m_menu$$11$$ = null;
          }
          $dm_t$$12$$ = $$$$25$$.type($$m_menu$$11$$);
        }
        if ("string" === $dm_t$$12$$) {
          if ($$m_menu$$11$$ = $$$$25$$($$m_menu$$11$$)) {
            $$m_menu$$11$$.css("display", "none"), $dm_t$$12$$ = this.$_data$.menu, $dm_t$$12$$.$$container$ = $$m_menu$$11$$, $dm_t$$12$$.$usermenu$ = !0;
          }
          this.$_data$.menu.$usermenu$ && $newVal$$1$$ && this.$_applyMenu$();
        }
      }
    }, $_handleContextMenuBeforeShow$:function($e$$129$$, $ui$$26$$) {
      this.$_data$.menu.$node$ = "keydown" === $e$$129$$.originalEvent.originalEvent.type ? this.$_data$.ui.$hovered$ : $$$$25$$($e$$129$$.originalEvent.target.parentNode);
      this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id");
      $ui$$26$$.openOptions.position = {my:"start top", at:"start bottom", of:this.$_data$.menu.$node$[0]};
      if (this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$) {
        var $state$$3$$ = this.$_data$.menu.$$elemPaste$.hasClass("oj-disabled"), $disabledState$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$;
        $state$$3$$ || ($state$$3$$ = !1);
        $state$$3$$ != $disabledState$$ && ($disabledState$$ ? this.$_data$.menu.$$elemPaste$.addClass("oj-disabled") : this.$_data$.menu.$$elemPaste$.removeClass("oj-disabled"), this.$_data$.menu.$$container$.ojMenu("refresh"));
      }
    }, $_handleContextMenuSelect$:function($ev$$4$$, $ui$$27$$) {
      if (!$ui$$27$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$.substr(1)) {
        var $id$$37$$ = $ui$$27$$ ? $ui$$27$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$37$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$37$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$37$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$37$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$37$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$37$$ && this.$_crrm_create$(this.$_data$.menu.$node$);
      }
    }, _OpenContextMenu:function($menu$$12$$, $event$$328$$) {
      $menu$$12$$.open($event$$328$$, {launcher:this.$_$container_ul$, initialFocus:"menu"});
    }, $_initCoreOpts$:function() {
      var $val$$55$$ = this.options.selectionMode, $val$$55$$ = void 0 == $val$$55$$ ? "single" : $val$$55$$;
      "none" === $val$$55$$ ? $val$$55$$ = 0 : "single" === $val$$55$$ ? $val$$55$$ = 1 : "multiple" === $val$$55$$ && ($val$$55$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$55$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_initExpandedOpts$();
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded;
    }, $_initUIOpts$:function() {
    }, $_initDSOpts$:function($bInit$$2$$) {
      var $s$$31$$ = this.options.data, $dt$$1_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      this.$_data$.html.$cloneMarkup$ = !1;
      if ($s$$31$$) {
        if ($dt$$1_ot$$2$$ = $$$$25$$.type($s$$31$$), "string" === $dt$$1_ot$$2$$) {
          this.$_isHtml$($s$$31$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3;
        } else {
          if ("array" === $dt$$1_ot$$2$$) {
            this.$_data$.$ds$.type = 3;
          } else {
            if ("object" === $dt$$1_ot$$2$$) {
              try {
                $s$$31$$ instanceof $oj$$25$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1);
              } catch ($e$$130$$) {
                this.$_data$.$ds$.type = -1;
              }
              if (1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$31$$ instanceof $oj$$25$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2);
                } catch ($e$$131$$) {
                  this.$_data$.$ds$.type = -1;
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$31$$.data || $s$$31$$.ajax) && (($dt$$1_ot$$2$$ = $s$$31$$.dataType) ? "json" === $dt$$1_ot$$2$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt$$1_ot$$2$$ && (this.$_data$.$ds$.type = 4) : ($s$$31$$.dataType = "json", this.$_data$.$ds$.type = 3));
            }
          }
        }
      }
      $bInit$$2$$ && 0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0);
    }, $_initTreeDSOpts$:function() {
    }, $_initJsonOpts$:function() {
    }, $_initHtmlOpts$:function() {
    }, $_initMenuOpts$:function() {
    }, $_initTypeOpts$:function() {
      var $o$$18$$ = this.options.types;
      "object" === typeof $o$$18$$ && this.$_applyDefaults$($o$$18$$, {attr:this.$_data$.types.$defaults$.attr});
    }, $_initExpandedOpts$:function() {
      this.$_data$.$core$.$toExpand$ = this.$_varCopy$(this.options, "initExpanded");
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
    }, $_initData$:function() {
      var $data$$155$$ = this.$_data$;
      $data$$155$$.$core$ = {$htmlTitles$:!1, $initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $notify_plugins$:!1, $toExpand$:!1, $toLoad$:!1, $prepared_move$:{}, $initFocus$:!1, $suppressSelectEvent$:!1};
      $data$$155$$.ui = {selected:$$$$25$$(), $last_selected$:!1, $hovered$:null, $lastHovered$:null, $to_select$:null, opacity:1, $spacebar$:!1, $focused$:!1, $animDurDiv$:null};
      $data$$155$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$155$$.$crrm$ = {};
      $data$$155$$.$crrm$.$cp_nodes$ = !1;
      $data$$155$$.$crrm$.$ct_nodes$ = !1;
      $data$$155$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:function $$data$$155$$$$crrm$$$defaults$$move$checkMove$() {
        return!0;
      }}};
      $data$$155$$.$crrm$.$prepared_move$ = {};
      $data$$155$$.$ds$ = {};
      $data$$155$$.$ds$.$progressiveRender$ = !1;
      $data$$155$$.$ds$.$progressiveUnload$ = !1;
      $data$$155$$.$ds$.$correctState$ = !0;
      $data$$155$$.$ds$.type = 0;
      $data$$155$$.$json$ = {};
      $data$$155$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$155$$.html = {};
      $data$$155$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$155$$.html.$useExistingMarkup$ = !1;
      $data$$155$$.html.$markup_ul$ = !1;
      $data$$155$$.html.$markup_div$ = !1;
      $data$$155$$.html.$markup$ = !1;
      $data$$155$$.html.$cloneMarkup$ = !1;
      $data$$155$$.$themes$ = {};
      $data$$155$$.$themes$.icons = !0;
      $data$$155$$.$themes$.$dots$ = !1;
      $data$$155$$.$themes$.$theme$ = "default";
      $data$$155$$.$themes$.url = !1;
      $data$$155$$.$themes$.$themes_loaded$ = [];
      $data$$155$$.$themes$.$_themes$ = !1;
      $data$$155$$.types = {};
      $data$$155$$.types.$attachTo$ = [];
      $data$$155$$.types.$defType$ = !1;
      $data$$155$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$155$$.menu = {};
      $data$$155$$.menu.$usermenu$ = !1;
      $data$$155$$.menu.$$container$ = !1;
      $data$$155$$.menu.$$elemPaste$ = !1;
      $data$$155$$.menu.$node$ = !1;
      $data$$155$$.keys = {};
      $data$$155$$.keys.$enabled$ = !0;
      $data$$155$$.keys.bound = [];
      $data$$155$$.dnd = {};
      $data$$155$$.dnd.$reorder$ = !1;
      $data$$155$$.dnd.$active$ = !1;
      $data$$155$$.dnd.after = !1;
      $data$$155$$.dnd.inside = !1;
      $data$$155$$.dnd.before = !1;
      $data$$155$$.dnd.off = !1;
      $data$$155$$.dnd.$prepared$ = !1;
      $data$$155$$.dnd.$w$ = 0;
      $data$$155$$.dnd.$to1$ = !1;
      $data$$155$$.dnd.$to2$ = !1;
      $data$$155$$.dnd.$cof$ = !1;
      $data$$155$$.dnd.$cw$ = !1;
      $data$$155$$.dnd.ch = !1;
      $data$$155$$.dnd.$i1$ = !1;
      $data$$155$$.dnd.$i2$ = !1;
      $data$$155$$.dnd.$mto$ = !1;
      $data$$155$$.dnd.$ml_width$ = 100;
      $data$$155$$.dnd.$targ_ml_width$ = 100;
      $data$$155$$.dnd.$defaults$ = {copy_modifier:"ctrl", check_timeout:100, open_timeout:500, drop_target:".oj-tree-drop", drop_check:function $$data$$155$$$dnd$$defaults$$drop_check$() {
        return!0;
      }, drop_finish:$$$$25$$.noop, drag_target:".oj-tree-draggable", drag_finish:$$$$25$$.noop, drag_check:function $$data$$155$$$dnd$$defaults$$drag_check$() {
        return{after:!1, before:!1, inside:!0};
      }};
      $data$$155$$.dnd.$vars$ = {};
      $data$$155$$.dnd.$vars$.$o$ = !1;
      $data$$155$$.dnd.$vars$.$r$ = !1;
      $data$$155$$.dnd.$vars$.$m$ = !1;
      $data$$155$$.dnd.$vars$.$ml$ = !1;
      $data$$155$$.dnd.$vars$.$sli$ = void 0;
      $data$$155$$.dnd.$vars$.$sti$ = void 0;
      $data$$155$$.dnd.$vars$.$dir1$ = !1;
      $data$$155$$.dnd.$vars$.$dir2$ = !1;
      $data$$155$$.dnd.$vars$.$last_pos$ = !1;
      $data$$155$$.dnd.$ctl$ = {};
      $data$$155$$.dnd.$ctl$.$is_down$ = !1;
      $data$$155$$.dnd.$ctl$.$is_drag$ = !1;
      $data$$155$$.dnd.$ctl$.helper = !1;
      $data$$155$$.dnd.$ctl$.$scroll_spd$ = 10;
      $data$$155$$.dnd.$ctl$.$init_x$ = 0;
      $data$$155$$.dnd.$ctl$.$init_y$ = 0;
      $data$$155$$.dnd.$ctl$.$threshold$ = 5;
      $data$$155$$.dnd.$ctl$.$helper_horiz$ = 15;
      $data$$155$$.dnd.$ctl$.$helper_top$ = 5;
      $data$$155$$.dnd.$ctl$.$user_data$ = {};
    }, $_fix_scroll$:function($obj$$93_t$$13$$) {
      var $c$$31$$ = this.$_$container$[0];
      $c$$31$$.scrollHeight > $c$$31$$.offsetHeight && ($obj$$93_t$$13$$ = this.$_getNode$($obj$$93_t$$13$$)) && -1 !== $obj$$93_t$$13$$ && $obj$$93_t$$13$$.length && $obj$$93_t$$13$$.is(":visible") && ($obj$$93_t$$13$$ = $obj$$93_t$$13$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$93_t$$13$$ && ($c$$31$$.scrollTop = $c$$31$$.scrollTop + $obj$$93_t$$13$$ - 1), $obj$$93_t$$13$$ + this.$_data$.$core$.$li_height$ + ($c$$31$$.scrollWidth > $c$$31$$.offsetWidth ? $scrollbar_width$$ : 0) > 
      $c$$31$$.offsetHeight && ($c$$31$$.scrollTop += $obj$$93_t$$13$$ - $c$$31$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$31$$.scrollWidth > $c$$31$$.offsetWidth ? $scrollbar_width$$ : 0)));
    }, $set_focus$:function() {
    }, $_isFocused$:function() {
      return this.$_data$.ui.$focused$;
    }, $unset_focus$:function() {
    }, $_focused$:function() {
      var $ret$$39$$ = null;
      $$$$25$$.each($_aInstances$$, function($i$$286$$, $_this$$24$$) {
        if ($_this$$24$$.$_data$.ui.$focused$) {
          return $ret$$39$$ = $_this$$24$$, !1;
        }
      });
      return $ret$$39$$;
    }, $_newIndex$:function() {
      return++$_instance$$;
    }, $_getIndex$:function() {
      return this.$_index$;
    }, $_getOptions$:function() {
      return $$$$25$$.extend(!0, {}, this.options);
    }, $_getContainer$:function() {
      return this.$_$container$;
    }, $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, left:function() {
      var $o$$25$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$25$$ && ($o$$25$$.hasClass("oj-expanded") ? this.collapse($o$$25$$) : this.hover(this.$_getPrev$($o$$25$$)));
      return!1;
    }, "ctrl+left":function() {
      var $o$$26$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$26$$ && ($o$$26$$.hasClass("oj-expanded") ? this.collapse($o$$26$$) : this.hover(this.$_getPrev$($o$$26$$)));
      return!1;
    }, "shift+left":function() {
      var $o$$27$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$27$$ && ($o$$27$$.hasClass("oj-expanded") ? this.collapse($o$$27$$) : this.hover(this.$_getPrev$($o$$27$$)));
      return!1;
    }, right:function() {
      var $o$$28$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$28$$ && $o$$28$$.length && ($o$$28$$.hasClass("oj-collapsed") ? this.expand($o$$28$$) : this.hover(this.$_getNext$($o$$28$$)));
      return!1;
    }, "ctrl+right":function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$29$$ && $o$$29$$.length && ($o$$29$$.hasClass("oj-collapsed") ? this.expand($o$$29$$) : this.hover(this.$_getNext$($o$$29$$)));
      return!1;
    }, "shift+right":function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$30$$ && $o$$30$$.length && ($o$$30$$.hasClass("oj-collapsed") ? this.expand($o$$30$$) : this.hover(this.$_getNext$($o$$30$$)));
      return!1;
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1;
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1;
    }, end:function() {
      var $a$$84$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      $a$$84$$ && $a$$84$$.length && this.hover($a$$84$$[$a$$84$$.length - 1]);
      return!1;
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1;
    }, "ctrl+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$5$$ = $$$$25$$.Event("click");
        $ev$$5$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$5$$);
      }
      return!1;
    }, "shift+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$6$$ = $$$$25$$.Event("click");
        $ev$$6$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$6$$);
      }
      return!1;
    }, "shift+home":function($event$$331$$) {
      var $prevSelections$$3$$, $hover$$1$$ = this.$_data$.ui.$hovered$;
      if ($hover$$1$$) {
        var $bContinue$$ = !0, $_this$$25$$ = this, $nodes$$4$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$3$$ = this.options.selection.slice(0);
        $hover$$1$$ = $hover$$1$$[0];
        $$$$25$$.each($nodes$$4$$, function($i$$287$$, $node$$75$$) {
          $node$$75$$ == $hover$$1$$ && ($bContinue$$ = !1);
          $_this$$25$$.$_select$($node$$75$$, !0);
          return $bContinue$$;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$3$$, this.options.selection, $event$$331$$);
      }
      return!1;
    }, "shift+pgdn":function($event$$332$$) {
      var $prevSelections$$4$$, $hover$$2$$ = this.$_data$.ui.$last_selected$ || this.$_data$.ui.$hovered$;
      if ($hover$$2$$) {
        var $bFound$$ = !1, $_this$$26$$ = this, $l$$17$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$4$$ = this.options.selection.slice(0);
        $hover$$2$$ = $hover$$2$$[0];
        $$$$25$$.each($l$$17$$, function($i$$288$$, $node$$76$$) {
          $bFound$$ || ($bFound$$ = $node$$76$$ == $hover$$2$$);
          $bFound$$ && !$_this$$26$$.isSelected($node$$76$$) && $_this$$26$$.$_select$($node$$76$$, !0);
          return!0;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$4$$, this.options.selection, $event$$332$$);
      }
      return!1;
    }, f2:function() {
      this.rename(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$);
      return!1;
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1;
    }}, $_applyMenu$:function() {
      if (this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$ = this.$_data$.menu.$$container$, $_this$$27$$ = this;
        $$menuContainer$$.on("ojselect", $$$$25$$.proxy(this.$_handleContextMenuSelect$, this));
        $$menuContainer$$.on("ojbeforeopen", $$$$25$$.proxy(this.$_handleContextMenuBeforeShow$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          var $cmd$$;
          0 === $$$$25$$(this).children("a").length && ($cmd$$ = $$$$25$$(this).attr("data-oj-command").split("-"), $$$$25$$(this).replaceWith($_this$$27$$.$_buildContextMenuItem$($cmd$$[$cmd$$.length - 1])), $$$$25$$(this).hasClass("oj-menu-divider") && $$$$25$$(this).removeClass("oj-menu-divider").addClass("oj-menu-item"), $bChanged$$ = !0);
        });
        $bChanged$$ && $$menuContainer$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$.find("#ojtreepaste");
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$.off("ojbeforeopen"), $um$$.$$container$ = null);
    }, $_buildContextMenuItem$:function($cmd$$1$$) {
      return $$$$25$$(this.$_buildContextMenuListItem$($cmd$$1$$));
    }, $_buildContextMenuListItem$:function($cmd$$2$$) {
      return "\x3cli id\x3d" + $_arMenuCmdMap$$[$cmd$$2$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$2$$) + "\x3c/li\x3e";
    }, $_buildContextMenuLabel$:function($cmd$$3$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$getTranslatedString$("m_" + $cmd$$3$$) + "\x3c/a\x3e";
    }, $_crrm_cut$:function($obj$$94$$) {
      $obj$$94$$ = this.$_getNode$($obj$$94$$, !0);
      if (!$obj$$94$$ || !$obj$$94$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$94$$;
      this.$_emitEvent$({obj:$obj$$94$$}, "cut");
    }, $_crrm_copy$:function($obj$$95$$) {
      $obj$$95$$ = this.$_getNode$($obj$$95$$, !0);
      if (!$obj$$95$$ || !$obj$$95$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$95$$;
      this.$_emitEvent$({obj:$obj$$95$$}, "copy");
    }, $_crrm_paste$:function($obj$$96$$) {
      $obj$$96$$ = this.$_getNode$($obj$$96$$);
      if (!$obj$$96$$ || !$obj$$96$$.length) {
        return!1;
      }
      var $nodes$$5$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if (!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$96$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$96$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$96$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$96$$, nodes:$nodes$$5$$}, "paste");
    }, $_crrm_move_node$:function($obj$$97$$, $ref$$4$$, $position$$16$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$32$$ = this.$_data$.$crrm$.$defaults$.move;
      if (!$is_prepared$$1$$) {
        return "undefined" === typeof $position$$16$$ && ($position$$16$$ = $s$$32$$.defaultPosition), "inside" !== $position$$16$$ || $s$$32$$.defaultPosition.match(/^(before|after)$/) || ($position$$16$$ = $s$$32$$.defaultPosition), this.$_move_node$($obj$$97$$, $ref$$4$$, $position$$16$$, $is_copy$$1$$, !1, $skip_check$$1$$);
      }
      if (!0 === $s$$32$$.alwaysCopy || "multitree" === $s$$32$$.alwaysCopy && $obj$$97$$.$rt$.$_index$ !== $obj$$97$$.$ot$.$_index$) {
        $is_copy$$1$$ = !0;
      }
      this.$_move_node$($obj$$97$$, $ref$$4$$, $position$$16$$, $is_copy$$1$$, !0, $skip_check$$1$$);
    }, $_crrm_remove$:function($obj$$98$$) {
      $obj$$98$$ = this.$_getNode$($obj$$98$$, !0);
      this.$__rollback$();
      this.remove($obj$$98$$);
    }, $_crrm_rename$:function($obj$$99$$) {
      $obj$$99$$ = this.$_getNode$($obj$$99$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$99$$, function() {
      });
    }, $_crrm_showInput$:function($obj$$101$$, $callback$$100$$) {
      $obj$$101$$ = this.$_getNode$($obj$$101$$);
      var $rtl$$2$$ = this.$_isRtl$, $w$$8$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$101$$.children("ins").width(), $w2$$ = $obj$$101$$.find("\x3e a:visible \x3e ins").width() * $obj$$101$$.find("\x3e a:visible \x3e ins").length, $t$$15$$ = this.getText($obj$$101$$), $_this$$28$$ = this, $h1$$ = $$$$25$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$2$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$101$$.css("position", 
      "relative").append($$$$25$$("\x3cinput /\x3e", {value:$t$$15$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$2$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$2$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$25$$.proxy(function() {
        var $i$$289$$ = $obj$$101$$.children(".oj-tree-rename-input"), $v$$3$$ = $i$$289$$.val();
        "" === $v$$3$$ && ($v$$3$$ = $t$$15$$);
        $h1$$.remove();
        $i$$289$$.remove();
        this.$_set_text$($obj$$101$$, $t$$15$$);
        this.$_rename_node$($obj$$101$$, $v$$3$$);
        $callback$$100$$.call(this, $obj$$101$$, $v$$3$$, $t$$15$$);
        $obj$$101$$.css("position", "");
      }, this), keyup:function($event$$333_key$$103$$) {
        $event$$333_key$$103$$ = $event$$333_key$$103$$.keyCode || $event$$333_key$$103$$.which;
        if (!$_this$$28$$.$_done$) {
          return $_this$$28$$.$_done$ = !0, !1;
        }
        27 == $event$$333_key$$103$$ ? ($_this$$28$$.$_done$ = !1, this.value = $t$$15$$, this.blur()) : 13 == $event$$333_key$$103$$ ? ($_this$$28$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$8$$));
      }, keypress:function($event$$334$$) {
        if (13 == ($event$$334$$.keyCode || $event$$334$$.which)) {
          return!1;
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$101$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$8$$))[0].select();
    }, $_crrm_create$:function($obj$$102$$, $position$$17$$, $js$$2$$, $callback$$101$$, $skip_rename$$) {
      var $_this$$29$$ = this;
      ($obj$$102$$ = this.$_getNode$($obj$$102$$)) || ($obj$$102$$ = -1);
      this.$__rollback$();
      return this.$_create_node$($obj$$102$$, $position$$17$$, $js$$2$$, function($t$$17$$) {
        var $p$$12$$ = this.$_getParent$($t$$17$$), $pos$$11$$ = $$$$25$$($t$$17$$).index();
        $callback$$101$$ && $callback$$101$$.call(this, $t$$17$$);
        $p$$12$$.length && $p$$12$$.hasClass("oj-collapsed") && this.expand($p$$12$$, !1, !0);
        $skip_rename$$ ? $_this$$29$$.$_emitEvent$({obj:$t$$17$$, name:this.getText($t$$17$$), parent:$p$$12$$, position:$pos$$11$$}) : this.$_crrm_showInput$($t$$17$$, function($obj$$103$$, $new_name$$1$$) {
          $_this$$29$$.$_emitEvent$({obj:$obj$$103$$, name:$new_name$$1$$, parent:$p$$12$$, position:$pos$$11$$});
        });
      });
    }, $_crrm_check_move$:function() {
      return!1;
    }, $_isHtml$:function($s$$34$$) {
      if (!$s$$34$$ || 3 > $s$$34$$.length) {
        return!1;
      }
      $s$$34$$ = $s$$34$$.trim();
      return "\x3c" === $s$$34$$.charAt(0);
    }, $_applyEmptyText$:function() {
      var $d$$19_txt$$ = this.option.emptyText;
      "string" !== typeof $d$$19_txt$$ && ($d$$19_txt$$ = this.$getTranslatedString$("m_emptyText"));
      $d$$19_txt$$ && 0 < $d$$19_txt$$.length && ($d$$19_txt$$ = "\x3cli class\x3d'oj-tree-empty'\x3e" + $d$$19_txt$$ + "\x3c/li\x3e", this.$_$container_ul$.empty().append($d$$19_txt$$));
    }, $_processSubId$:function($locator$$19_sNode$$) {
      var $c$$32_i$$290_subId$$11$$, $node$$77$$, $a$$85_sKey$$;
      $a$$85_sKey$$ = null;
      var $ret$$40$$;
      $locator$$19_sNode$$ && ($c$$32_i$$290_subId$$11$$ = $locator$$19_sNode$$.subId);
      if (!$c$$32_i$$290_subId$$11$$) {
        return null;
      }
      $a$$85_sKey$$ = $c$$32_i$$290_subId$$11$$.split("[");
      if (3 === $a$$85_sKey$$.length && ($a$$85_sKey$$[0] = $a$$85_sKey$$[0].trim(), "oj-tree-node" === $a$$85_sKey$$[0] && ($a$$85_sKey$$[1] = $a$$85_sKey$$[1].trim(), $c$$32_i$$290_subId$$11$$ = $a$$85_sKey$$[1].charAt(0), $c$$32_i$$290_subId$$11$$ = $a$$85_sKey$$[1].indexOf($c$$32_i$$290_subId$$11$$, 1), 0 <= $c$$32_i$$290_subId$$11$$ && ($locator$$19_sNode$$ = $a$$85_sKey$$[1].substring(1, $c$$32_i$$290_subId$$11$$).trim(), $a$$85_sKey$$[2] = $a$$85_sKey$$[2].trim(), $c$$32_i$$290_subId$$11$$ = 
      $a$$85_sKey$$[2].charAt(0), $c$$32_i$$290_subId$$11$$ = $a$$85_sKey$$[2].indexOf($c$$32_i$$290_subId$$11$$, 1), 0 <= $c$$32_i$$290_subId$$11$$)))) {
        $a$$85_sKey$$ = $a$$85_sKey$$[2].substring(1, $c$$32_i$$290_subId$$11$$).trim();
        try {
          $node$$77$$ = this.$_getNode$($locator$$19_sNode$$);
        } catch ($e$$132$$) {
          $node$$77$$ = null;
        }
        if ($a$$85_sKey$$ && $node$$77$$ && -1 !== $node$$77$$) {
          switch($a$$85_sKey$$) {
            case "icon":
              this.$_data$.$themes$.icons && ($ret$$40$$ = $node$$77$$.find(" \x3e a \x3e ins:eq(0)"));
              break;
            case "link":
              $ret$$40$$ = $node$$77$$.find(" \x3e a:eq(0)");
              break;
            case "disclosure":
              this.$_isLeaf$($node$$77$$) || ($ret$$40$$ = $node$$77$$.find(" \x3e ins:eq(0)"));
              break;
            case "title":
              $ret$$40$$ = $node$$77$$.find(" \x3e a \x3e span");
          }
        }
      }
      return $ret$$40$$ ? $ret$$40$$.length ? $ret$$40$$[0] : null : null;
    }, $_hideDots$:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots");
    }, $_showDots$:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots");
    }, $_isOptExpandAll$:function() {
      var $s$$35$$ = this.options.initExpanded;
      return $s$$35$$ && "all" == $s$$35$$ || $$$$25$$.isArray($s$$35$$) && $s$$35$$.length && "all" == $s$$35$$[0];
    }, $_getAnimDuration$:function() {
      var $ret$$41$$ = 0, $span$$1_val$$56$$, $$div_c$$33_s$$36$$;
      window.getComputedStyle && ($$div_c$$33_s$$36$$ = this.$_data$.ui.$animDurDiv$, $$div_c$$33_s$$36$$ || ($$div_c$$33_s$$36$$ = $$$$25$$("\x3cdiv id\x3d'ojtree-comp-animduration'\x3e\x3cspan class\x3d'oj-tree-transition'\x3edummy\x3c/span\x3e\x3c/div\x3e"), this.$_data$.ui.$animDurDiv$ = $$div_c$$33_s$$36$$, $$$$25$$(this.$_elemId$).append($$div_c$$33_s$$36$$)), $span$$1_val$$56$$ = $$div_c$$33_s$$36$$[0].childNodes[0], $span$$1_val$$56$$ = window.getComputedStyle($span$$1_val$$56$$), $span$$1_val$$56$$ = 
      $span$$1_val$$56$$.transitionDuration, $$div_c$$33_s$$36$$.detach(), "string" == typeof $span$$1_val$$56$$ && 1 < $span$$1_val$$56$$.length && ($$div_c$$33_s$$36$$ = $span$$1_val$$56$$.charAt($span$$1_val$$56$$.length - 1).toLowerCase(), "s" == $$div_c$$33_s$$36$$ ? ($span$$1_val$$56$$ = $span$$1_val$$56$$.substring(0, $span$$1_val$$56$$.length - 1), $span$$1_val$$56$$ = parseFloat($span$$1_val$$56$$), isNaN($span$$1_val$$56$$) || ($ret$$41$$ = 1E3 * $span$$1_val$$56$$)) : 2 < $span$$1_val$$56$$.length && 
      ($$div_c$$33_s$$36$$ = $span$$1_val$$56$$.substring($span$$1_val$$56$$.length - 2).toLowerCase(), "ms" == $$div_c$$33_s$$36$$ && ($span$$1_val$$56$$ = parseFloat($span$$1_val$$56$$), isNaN($span$$1_val$$56$$) || ($ret$$41$$ = $span$$1_val$$56$$)))));
      return $ret$$41$$;
    }, $_varCopy$:function($obj$$104$$, $s$$37$$) {
      var $o$$31$$ = {};
      $o$$31$$[$s$$37$$] = $obj$$104$$[$s$$37$$];
      return $$$$25$$.extend(!0, {}, $o$$31$$)[$s$$37$$];
    }});
  })();
});
