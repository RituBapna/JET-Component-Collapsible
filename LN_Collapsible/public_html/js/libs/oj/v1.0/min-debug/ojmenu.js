/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$21$$, $$$$21$$) {
  (function() {
    $oj$$21$$.$__registerWidget$("oj.ojMenu", $$$$21$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", $_MENU_CLICK_AWAY_HANDLER_KEY$:"ojMenuClickAwayHandler", options:{menuSelector:"ul", openOptions:{initialFocus:"menu", launcher:null, position:{my:"start top", at:"start bottom"}}, submenuOpenOptions:{position:{my:"start top", at:"end top"}}, beforeOpen:null, select:null}, _create:function() {
      this._focusForTesting = this.$_focus$;
      this._nextForTesting = this.$_next$;
      this._selectForTesting = this.$_select$;
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").toggleClass("oj-menu-icons", !!this.element.find(".oj-component-icon").length).attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$224$$) {
        this.options.disabled && $event$$224$$.preventDefault();
      }, click:function($event$$225$$) {
        this.options.disabled && $event$$225$$.preventDefault();
      }, keydown:function($event$$226$$) {
        this.options.disabled && $event$$226$$.keyCode === $$$$21$$.ui.keyCode.ESCAPE && this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$226$$);
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$227$$) {
        $event$$227$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$228$$) {
        $event$$228$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$230$$) {
        var $target$$79$$ = $$$$21$$($event$$230$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$79$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$230$$.preventDefault(), this.$active$ && this.$active$.closest($target$$79$$).length && this.$active$.get(0) != $target$$79$$.get(0) || ($target$$79$$.has(".oj-menu").length ? this.$_expand$($event$$230$$) : (this.$_select$($event$$230$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":function($event$$231$$) {
        var $target$$80$$ = $$$$21$$($event$$231$$.currentTarget);
        $target$$80$$.siblings().children(".oj-focus-ancestor").removeClass("oj-focus-ancestor");
        this.$_focus$($event$$231$$, $target$$80$$);
      }, mouseleave:function($event$$232$$) {
        this.$_collapse$($event$$232$$, "eventSubtree");
      }, "mouseleave .oj-menu":function($event$$233$$) {
        this.$_collapse$($event$$233$$, "eventSubtree");
      }, focus:function($event$$234$$, $keepActiveItem$$) {
        if (!$keepActiveItem$$) {
          var $item$$9$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
          this.$_focus$($event$$234$$, $item$$9$$);
        }
      }, keydown:this.$_keydown$, keyup:function($event$$235$$) {
        if ($event$$235$$.keyCode == $$$$21$$.ui.keyCode.ENTER || $event$$235$$.keyCode == $$$$21$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this.$_setup$();
      this.$_registerClickAwayHandler$();
      this._super();
    }, $_registerClickAwayHandler$:function() {
      var $clikAwayHandler$$ = this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$);
      $clikAwayHandler$$ || ($clikAwayHandler$$ = function $$clikAwayHandler$$$($event$$236$$) {
        if ("focus" === $event$$236$$.type || "mousedown" === $event$$236$$.type || 93 == $event$$236$$.which || 121 == $event$$236$$.which && $event$$236$$.shiftKey || 93 == $event$$236$$.keyCode) {
          var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
          $$$$21$$.each($openPopupMenus$$, function($index$$160$$, $menu$$8$$) {
            !$$$$21$$($event$$236$$.target).closest($menu$$8$$.element).length && ("keydown" === $event$$236$$.type || "mousedown" === $event$$236$$.type && 3 === $event$$236$$.which || !$$$$21$$($event$$236$$.target).closest($menu$$8$$.$_launcher$).length || $menu$$8$$.$_isContextMenu$ && "mousedown" === $event$$236$$.type && 3 !== $event$$236$$.which) && ($menu$$8$$.$_collapse$($event$$236$$, "eventSubtree"), $menu$$8$$.$_launcher$ && $menu$$8$$.$__dismiss$($event$$236$$));
          });
        }
      }, this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$, $clikAwayHandler$$), this.document[0].addEventListener("keydown", $clikAwayHandler$$, !0), this.document[0].addEventListener("mousedown", $clikAwayHandler$$, !0), this.document[0].addEventListener("focus", $clikAwayHandler$$, !0));
    }, $_unregisterClickAwayHandler$:function() {
      var $clikAwayHandler$$1$$ = this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$);
      $clikAwayHandler$$1$$ && 1 === $$$$21$$(":oj-menu").length && (this.document[0].removeEventListener("keydown", $clikAwayHandler$$1$$, !0), this.document[0].removeEventListener("mousedown", $clikAwayHandler$$1$$, !0), this.document[0].removeEventListener("focus", $clikAwayHandler$$1$$, !0), this.document.removeData(this.$_MENU_CLICK_AWAY_HANDLER_KEY$));
    }, _setOption:function($key$$94$$, $value$$197$$) {
      this._superApply(arguments);
      this.$_launcher$ || ("submenuOpenOptions" === $key$$94$$ ? this.$_submenuPosition$ = $oj$$21$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$197$$.position, this.$isRtl$) : "submenuOpenOptions.position" === $key$$94$$ && (this.$_submenuPosition$ = $oj$$21$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$197$$, this.$isRtl$)));
    }, _destroy:function() {
      this.element.removeAttr("aria-activedescendant").find(".oj-menu").addBack().removeClass("oj-menu oj-component oj-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$22$$ = $$$$21$$(this);
        $elem$$22$$.data("oj-ojMenu-submenu-icon") && $elem$$22$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      this.$_unregisterClickAwayHandler$();
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_keydown$:function($event$$237$$) {
      function $escape$$1$$($value$$198$$) {
        return $value$$198$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$18_prev$$2$$, $activeItemId_character$$, $skip_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$237$$.keyCode) {
        case $$$$21$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$237$$);
          break;
        case $$$$21$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$237$$);
          break;
        case $$$$21$$.ui.keyCode.UP:
          this.$_previous$($event$$237$$);
          break;
        case $$$$21$$.ui.keyCode.DOWN:
          this.$_next$($event$$237$$);
          break;
        case $$$$21$$.ui.keyCode.LEFT:
        ;
        case $$$$21$$.ui.keyCode.RIGHT:
          $event$$237$$.keyCode === $$$$21$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.$_expand$($event$$237$$) : this.$_collapse$($event$$237$$, "active");
          break;
        case $$$$21$$.ui.keyCode.ENTER:
        ;
        case $$$$21$$.ui.keyCode.SPACE:
          this.$_handleEnterSpace$($event$$237$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$112$$ = this;
          setTimeout(function() {
            $self$$112$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$21$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$ = this.element.attr("aria-activedescendant"), $skip_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$ && !$$$$21$$("#" + $activeItemId_character$$).is($skip_topLevelAnchorSelector$$) ? this.$_collapse$($event$$237$$, "active") : this.$_focusLauncherAndDismiss$($event$$237$$)) : this.$_collapse$($event$$237$$, "active");
          break;
        default:
          $preventDefault$$ = !1, $match$$18_prev$$2$$ = this.$previousFilter$ || "", $activeItemId_character$$ = String.fromCharCode($event$$237$$.keyCode), $skip_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$ === $match$$18_prev$$2$$ ? $skip_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$ = $match$$18_prev$$2$$ + $activeItemId_character$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$18_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$21$$(this).children("a").text());
          }), $match$$18_prev$$2$$ = $skip_topLevelAnchorSelector$$ && -1 !== $match$$18_prev$$2$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$18_prev$$2$$, $match$$18_prev$$2$$.length || ($activeItemId_character$$ = String.fromCharCode($event$$237$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$18_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$21$$(this).children("a").text());
          })), $match$$18_prev$$2$$.length ? (this.$_focus$($event$$237$$, $match$$18_prev$$2$$), 1 < $match$$18_prev$$2$$.length ? (this.$previousFilter$ = $activeItemId_character$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$237$$.preventDefault();
    }, $_handleEnterSpace$:function($event$$238$$) {
      this.$active$.is(".oj-disabled") || (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.$_expand$($event$$238$$) : this.$_select$($event$$238$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_submenuPosition$ = $oj$$21$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuOpenOptions.position, this.$isRtl$);
      var $self$$113$$ = this, $children$$5_submenus$$ = this.element.find(this.options.menuSelector);
      $children$$5_submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-component").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$9$$ = $$$$21$$(this), $item$$10_itemId$$ = $self$$113$$.$_getSubmenuItem$($menu$$9$$), $submenuIcon$$ = $$$$21$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$10_itemId$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").prepend($submenuIcon$$);
        $item$$10_itemId$$ = $item$$10_itemId$$.attr("id");
        $menu$$9$$.attr("aria-labelledby", $item$$10_itemId$$);
      });
      $children$$5_submenus$$ = $children$$5_submenus$$.add(this.element).children();
      $children$$5_submenus$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$5_submenus$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$5_submenus$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$11$$ = $$$$21$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$11$$.text()) || $item$$11$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$5_submenus$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$5_submenus$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      this.$active$ && !$$$$21$$.contains(this.element[0], this.$active$[0]) && this.$_blur$();
    }, $_getSubmenuItem$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, $_focus$:function($event$$239$$, $item$$12$$) {
      $event$$239$$ && "focus" === $event$$239$$.type || clearTimeout(this.$timer$);
      $item$$12$$ = $item$$12$$.first();
      this.$_makeActive$($item$$12$$, $event$$239$$);
      $item$$12$$.parent().closest(".oj-menu-item").children("a:first").addClass("oj-focus-ancestor");
      $event$$239$$ && "keydown" === $event$$239$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        this.$_close$();
      }, this.delay);
      var $nested$$ = $item$$12$$.children(".oj-menu");
      $nested$$.length && $event$$239$$ && /^mouse/.test($event$$239$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($nested$$);
      this.$activeMenu$ = $item$$12$$.parent();
    }, $_makeActive$:function($item$$13$$, $event$$240$$) {
      if (!$item$$13$$.is(this.$active$)) {
        var $previousItem$$ = this.$active$ ? this.$active$ : $$$$21$$(), $anchor$$ = $item$$13$$.children("a");
        this.$active$ = $item$$13$$;
        this.element.attr("aria-activedescendant", $anchor$$.attr("id"));
        $previousItem$$.children("a").removeClass("oj-focus");
        $anchor$$.addClass("oj-focus");
        this._trigger("_activeItem", $event$$240$$, {previousItem:$previousItem$$, item:$item$$13$$, privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_removeActive$:function($event$$241$$) {
      if (this.$active$) {
        var $previousItem$$1$$ = this.$active$;
        this.$active$ = null;
        this.element.removeAttr("aria-activedescendant");
        $previousItem$$1$$.children("a").removeClass("oj-focus");
        this._trigger("_activeItem", $event$$241$$, {previousItem:$previousItem$$1$$, item:$$$$21$$(), privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_blur$:function($event$$242$$) {
      clearTimeout(this.$timer$);
      this.$_removeActive$($event$$242$$);
    }, $_focusLauncherAndDismiss$:function($event$$243$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$243$$);
    }, $__dismiss$:function($event$$244$$) {
      this.element.hide().attr("aria-hidden", "true");
      this.$_launcher$ = void 0;
      this._trigger("__dismiss", $event$$244$$, {});
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, open:function($event$$245$$, $initialFocus_openOptions$$, $focusFirstItem_submenuOpenOptions$$) {
      $initialFocus_openOptions$$ = $$$$21$$.extend({}, this.options.openOptions, $initialFocus_openOptions$$);
      $focusFirstItem_submenuOpenOptions$$ = $$$$21$$.extend({}, this.options.submenuOpenOptions, $focusFirstItem_submenuOpenOptions$$);
      this.$_popupInited$ || (this.$_popupInit$(), this.$_popupInited$ = !0);
      this.$_isContextMenu$ = $event$$245$$ ? ("mousedown" === $event$$245$$.type || "contextmenu" === $event$$245$$.type) && 3 === $event$$245$$.which || 93 == $event$$245$$.which || 121 == $event$$245$$.which && $event$$245$$.shiftKey : !1;
      if (this._trigger("beforeOpen", $event$$245$$, {openOptions:$initialFocus_openOptions$$})) {
        var $launcher$$4$$ = $initialFocus_openOptions$$.launcher;
        if (($launcher$$4$$ = "string" === $$$$21$$.type($launcher$$4$$) ? $$$$21$$($launcher$$4$$) : $launcher$$4$$) && $launcher$$4$$.length) {
          var $currentMenu$$ = this.element[0], $openPopupMenus$$1_position$$9$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
          $$$$21$$.each($openPopupMenus$$1_position$$9$$, function($index$$161$$, $menu$$10$$) {
            $menu$$10$$.element[0] !== $currentMenu$$ && ($menu$$10$$.$_collapse$($event$$245$$, "eventSubtree"), $menu$$10$$.$_launcher$ && $menu$$10$$.$__dismiss$($event$$245$$));
          });
          $openPopupMenus$$1_position$$9$$ = $oj$$21$$.$PositionUtils$.$normalizeHorizontalAlignment$($initialFocus_openOptions$$.position, this.$isRtl$);
          null == $openPopupMenus$$1_position$$9$$.of && ($openPopupMenus$$1_position$$9$$.of = $event$$245$$ && "contextmenu" === $event$$245$$.type ? $event$$245$$ : $launcher$$4$$);
          this.$_submenuPosition$ = $oj$$21$$.$PositionUtils$.$normalizeHorizontalAlignment$($focusFirstItem_submenuOpenOptions$$.position, this.$isRtl$);
          this.element.show().removeAttr("aria-hidden").position($openPopupMenus$$1_position$$9$$);
          $initialFocus_openOptions$$ = $initialFocus_openOptions$$.initialFocus;
          (($focusFirstItem_submenuOpenOptions$$ = "firstItem" === $initialFocus_openOptions$$) || "menu" === $initialFocus_openOptions$$) && this.element.focus();
          $focusFirstItem_submenuOpenOptions$$ ? this.$_focus$($event$$245$$, this.element.children().first()) : this.$_blur$($event$$245$$);
          this.$_launcher$ = $launcher$$4$$;
          $_openPopupMenus$$.push(this);
        } else {
          $oj$$21$$.$Logger$.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call.");
        }
      }
    }, $_popupInit$:function() {
      this.element.css({position:"absolute"});
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ = this._delay(function() {
        this.$_close$();
        this.$_open$($submenu$$1$$);
      }, this.delay));
    }, $_open$:function($submenu$$2$$) {
      var $position$$10$$ = $$$$21$$.extend({of:this.$active$}, this.$_submenuPosition$);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$10$$);
      this.$_getSubmenuItem$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, $__collapseAll$:function($event$$246$$, $all$$1$$, $delay$$3$$) {
      function $collapseMenu$$() {
        var $currentMenu$$1$$ = $all$$1$$ ? $self$$114$$.element : $$$$21$$($event$$246$$ && $event$$246$$.target).closest($self$$114$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$114$$.element);
        $self$$114$$.$_close$($currentMenu$$1$$);
        $self$$114$$.$_blur$($event$$246$$);
        $self$$114$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$114$$ = this;
      $delay$$3$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$3$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true");
      this.$_getSubmenuItem$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("a.oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_collapse$:function($event$$247$$, $which$$) {
      if (null == $which$$ || "active" === $which$$) {
        var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
        $newItem$$ && $newItem$$.length && (this.$_close$(), this.$_focus$($event$$247$$, $newItem$$));
      } else {
        "all" === $which$$ || "eventSubtree" === $which$$ ? this.$__collapseAll$($event$$247$$, "all" === $which$$, this.delay) : $oj$$21$$.$Logger$.warn("Invalid param " + $which$$ + " passed to Menu._collapse().  Ignoring the call.");
      }
    }, $_expand$:function($event$$248$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this._delay(function() {
        this.$_focus$($event$$248$$, $newItem$$1$$);
      }));
    }, $_next$:function($event$$249$$) {
      this.$_move$("next", "first", $event$$249$$);
    }, $_previous$:function($event$$250$$) {
      this.$_move$("prev", "last", $event$$250$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$9$$, $filter$$5$$, $event$$251$$) {
      var $next$$2$$;
      this.$active$ && ($next$$2$$ = "first" === $direction$$9$$ || "last" === $direction$$9$$ ? this.$active$["first" === $direction$$9$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$9$$ + "All"](".oj-menu-item").eq(0));
      $next$$2$$ && $next$$2$$.length && this.$active$ || ($next$$2$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.$_focus$($event$$251$$, $next$$2$$);
    }, $_select$:function($event$$252$$) {
      if (!this.$active$ && $event$$252$$ && $event$$252$$.target) {
        var $menuItem_ui$$10$$ = $$$$21$$($event$$252$$.target).closest(".oj-menu-item");
        $menuItem_ui$$10$$.closest(this.element).length && this.$_makeActive$($menuItem_ui$$10$$, $event$$252$$);
      }
      this.$active$ ? this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$21$$.$Logger$.warn("Selecting a disabled menu item or parent menu item is not allowed.") : ($menuItem_ui$$10$$ = {item:this.$active$}, this.$__collapseAll$($event$$252$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$252$$), this._trigger("select", $event$$252$$, $menuItem_ui$$10$$)) : $oj$$21$$.$Logger$.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
    }});
    var $_openPopupMenus$$ = [];
  })();
});
