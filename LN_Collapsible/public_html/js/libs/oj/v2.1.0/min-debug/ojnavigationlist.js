/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojbutton", "ojs/ojmenu", "ojs/ojlistview"], function($oj$$20$$, $$$$19$$) {
  $oj$$20$$.$DefaultNavListHandler$ = function $$oj$$20$$$$DefaultNavListHandler$$($widget$$9$$, $root$$9$$, $component$$24$$) {
    this.$m_widget$ = $widget$$9$$;
    this.$m_root$ = $root$$9$$;
    this.$m_component$ = $component$$24$$;
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-expanded oj-navigationlist-vertical");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Expand$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Collapse$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$HandleExpandAndCollapseKeys$ = function $$oj$$20$$$$DefaultNavListHandler$$$$HandleExpandAndCollapseKeys$$() {
    return!1;
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ModifyListItem$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$52$$, $highlight$$1$$) {
    $elem$$52$$.attr("aria-selected", $highlight$$1$$ ? "true" : "false");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$BeforeRenderComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ItemInsertComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ItemInsertComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ItemRemoveComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ItemRemoveComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$HandleArrowKeys$ = function $$oj$$20$$$$DefaultNavListHandler$$$$HandleArrowKeys$$($keyCode$$9$$, $isExtend$$1$$, $event$$313$$) {
    return $_ojNavigationListView$$.$superclass$.$HandleArrowKeys$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$IsArrowKey$ = function $$oj$$20$$$$DefaultNavListHandler$$$$IsArrowKey$$($keyCode$$10$$) {
    return $_ojNavigationListView$$.$superclass$.$IsArrowKey$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$GetState$ = function $$oj$$20$$$$DefaultNavListHandler$$$$GetState$$($item$$79$$) {
    return $_ojNavigationListView$$.$superclass$.$GetState$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$SetState$ = function $$oj$$20$$$$DefaultNavListHandler$$$$SetState$$($item$$80$$, $state$$6$$) {
    $_ojNavigationListView$$.$superclass$.$SetState$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.Init = function $$oj$$20$$$$DefaultNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-expanded oj-navigationlist-vertical");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$IsSelectable$ = function $$oj$$20$$$$DefaultNavListHandler$$$$IsSelectable$$($item$$81$$) {
    return $_ojNavigationListView$$.$superclass$.$IsSelectable$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$CollapseCurrentList$ = function $$oj$$20$$$$DefaultNavListHandler$$$$CollapseCurrentList$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$setOptions$ = function $$oj$$20$$$$DefaultNavListHandler$$$$setOptions$$() {
  };
  $oj$$20$$.$HorizontalNavListHandler$ = function $$oj$$20$$$$HorizontalNavListHandler$$($widget$$10$$, $root$$10$$, $component$$25$$) {
    $oj$$20$$.$HorizontalNavListHandler$.$superclass$.constructor.call(this, $widget$$10$$, $root$$10$$, $component$$25$$);
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$HorizontalNavListHandler$, $oj$$20$$.$DefaultNavListHandler$, "oj.HorizontalNavListHandler");
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-expanded oj-navigationlist-horizontal");
    this.$m_root$.find("." + this.$m_widget$.$DIVIDER_STYLE_CLASS$).remove();
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$55$$, $highlight$$2$$) {
    $elem$$55$$.attr("aria-pressed", $highlight$$2$$ ? "true" : "false");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$HandleArrowKeys$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$HandleArrowKeys$$($keyCode$$11_processed$$3$$, $isExtend$$2$$, $event$$314$$) {
    $keyCode$$11_processed$$3$$ === $$$$19$$.ui.keyCode.LEFT ? $keyCode$$11_processed$$3$$ = this.$m_widget$.$isRtl$() ? $$$$19$$.ui.keyCode.DOWN : $$$$19$$.ui.keyCode.UP : $keyCode$$11_processed$$3$$ === $$$$19$$.ui.keyCode.RIGHT && ($keyCode$$11_processed$$3$$ = this.$m_widget$.$isRtl$() ? $$$$19$$.ui.keyCode.UP : $$$$19$$.ui.keyCode.DOWN);
    $keyCode$$11_processed$$3$$ = $_ojNavigationListView$$.$superclass$.$HandleArrowKeys$.call(this.$m_widget$, $keyCode$$11_processed$$3$$, $isExtend$$2$$, $event$$314$$);
    "top" === this.$m_widget$.$ojContext$.options.edge && this.$m_widget$.$m_active$.elem[0].scrollIntoView(!1);
    return $keyCode$$11_processed$$3$$;
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$IsArrowKey$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$IsArrowKey$$($keyCode$$12$$) {
    return $keyCode$$12$$ === this.$m_widget$.$UP_KEY$ || $keyCode$$12$$ === this.$m_widget$.$DOWN_KEY$ || $keyCode$$12$$ === this.$m_widget$.$LEFT_KEY$ || $keyCode$$12$$ === this.$m_widget$.$RIGHT_KEY$;
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ModifyListItem$$($$item$$1_focusableElement$$) {
    $$item$$1_focusableElement$$ = this.$m_widget$.$getSingleFocusableElement$($$item$$1_focusableElement$$);
    $$item$$1_focusableElement$$.attr("role", "button");
    $$item$$1_focusableElement$$[0].hasAttribute("aria-selected") && ($$item$$1_focusableElement$$.attr("aria-pressed", "false"), $$item$$1_focusableElement$$.removeAttr("aria-selected"));
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$BeforeRenderComplete$$() {
    var $self$$131$$ = this;
    this.$m_widget$.element.attr("role", "toolbar");
    this.$m_widget$.element.find("." + this.$m_widget$.$getItemElementStyleClass$() + ":visible").each(function($index$$144$$) {
      0 < $index$$144$$ && $self$$131$$.$_addSeparator$(this, $index$$144$$);
    });
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$_addSeparator$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$_addSeparator$$($elem$$56$$, $index$$145$$) {
    var $$elem$$ = $$$$19$$($elem$$56$$), $previousElement$$ = $$elem$$.prev();
    0 < $index$$145$$ && $$elem$$.is(":visible") && $previousElement$$.length && !$previousElement$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) && $$elem$$.before('\x3cli role\x3d"separator" class\x3d"' + this.$m_widget$.$DIVIDER_STYLE_CLASS$ + '"\x3e\x3c/li\x3e');
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ItemInsertComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ItemInsertComplete$$($elem$$57$$, $context$$97$$) {
    this.$_addSeparator$($elem$$57$$, $context$$97$$.index);
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ItemRemoveComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ItemRemoveComplete$$($$elem$$1_elem$$58_nextElement$$) {
    $$elem$$1_elem$$58_nextElement$$ = $$$$19$$($$elem$$1_elem$$58_nextElement$$);
    var $previousElement$$1$$ = $$elem$$1_elem$$58_nextElement$$.prev();
    $previousElement$$1$$.length && $previousElement$$1$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) ? $previousElement$$1$$.remove() : ($$elem$$1_elem$$58_nextElement$$ = $$elem$$1_elem$$58_nextElement$$.next(), $$elem$$1_elem$$58_nextElement$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) && $$elem$$1_elem$$58_nextElement$$.remove());
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$IsSelectable$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$IsSelectable$$($item$$83$$) {
    return this.$m_widget$.$getFocusItem$($$$$19$$($item$$83$$))[0].hasAttribute("aria-pressed");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.Init = function $$oj$$20$$$$HorizontalNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-expanded oj-navigationlist-horizontal");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$CollapsibleNavListHandler$ = function $$oj$$20$$$$CollapsibleNavListHandler$$($widget$$11$$, $root$$11$$, $component$$26$$) {
    $oj$$20$$.$CollapsibleNavListHandler$.$superclass$.constructor.call(this, $widget$$11$$, $root$$11$$, $component$$26$$);
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$CollapsibleNavListHandler$, $oj$$20$$.$DefaultNavListHandler$, "oj.CollapsibleNavListHandler");
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-collapsible oj-navigationlist-vertical");
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.Init = function $$oj$$20$$$$CollapsibleNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-collapsible oj-navigationlist-vertical");
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Expand$$($groupItem$$18$$, $animate$$7$$) {
    $_ojNavigationListView$$.$superclass$.$AnimateExpand$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Collapse$$($item$$85$$, $animate$$8$$) {
    $_ojNavigationListView$$.$superclass$.$AnimateCollapse$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$HandleExpandAndCollapseKeys$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$HandleExpandAndCollapseKeys$$($event$$315$$, $keyCode$$13$$, $current$$14$$, $currentItemKey$$1$$) {
    var $isGroupItem$$1$$ = 0 < $current$$14$$.children("." + this.$m_widget$.$getGroupStyleClass$()).length;
    if ($keyCode$$13$$ === this.$m_widget$.$LEFT_KEY$ || $keyCode$$13$$ === this.$m_widget$.$RIGHT_KEY$) {
      return $keyCode$$13$$ === this.$m_widget$.$LEFT_KEY$ && !this.$m_widget$.$isRtl$() || $keyCode$$13$$ === this.$m_widget$.$RIGHT_KEY$ && this.$m_widget$.$isRtl$() ? this.$m_widget$.$GetState$($current$$14$$) === this.$m_widget$.$STATE_EXPANDED$ && this.$m_widget$.$CollapseItem$($current$$14$$, $event$$315$$, !0, $currentItemKey$$1$$, !0, !0) : this.$m_widget$.$GetState$($current$$14$$) === this.$m_widget$.$STATE_COLLAPSED$ && this.$m_widget$.$ExpandItem$($current$$14$$, $event$$315$$, !0, $currentItemKey$$1$$, 
      !0, !0, !0), !0;
    }
    if ($isGroupItem$$1$$ && ($keyCode$$13$$ === $$$$19$$.ui.keyCode.ENTER || $keyCode$$13$$ === $$$$19$$.ui.keyCode.SPACE)) {
      if (0 >= $current$$14$$.length) {
        return;
      }
      this.$m_widget$.$GetState$($current$$14$$) === this.$m_widget$.$STATE_COLLAPSED$ ? this.$m_widget$.$ExpandItem$($current$$14$$, null, !0, $currentItemKey$$1$$, !0, !0, !0) : this.$m_widget$.$GetState$($current$$14$$) === this.$m_widget$.$STATE_EXPANDED$ && this.$m_widget$.$CollapseItem$($current$$14$$, null, !0, $currentItemKey$$1$$, !0, !0);
      return!0;
    }
    return!1;
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$SlidingNavListHandler$ = function $$oj$$20$$$$SlidingNavListHandler$$($widget$$12$$, $root$$12$$, $component$$27$$) {
    $oj$$20$$.$SlidingNavListHandler$.$superclass$.constructor.call(this, $widget$$12$$, $root$$12$$, $component$$27$$);
    this.$m_expanded$ = [];
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$SlidingNavListHandler$, $oj$$20$$.$CollapsibleNavListHandler$, "oj.SlidingNavListHandler");
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-slider oj-navigationlist-vertical");
    this.$_toolbar$.remove();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_slideAnimation$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_slideAnimation$$($item$$87$$, $isMovingNext$$, $focusableElement$$1$$) {
    var $self$$132$$ = this, $list_root$$ = this.$m_widget$.$getRootElement$(), $contentWidth$$ = $list_root$$.outerWidth() / 2, $isRtl$$1$$ = this.$m_widget$.$isRtl$();
    $isMovingNext$$ || ($contentWidth$$ *= -1);
    $isRtl$$1$$ ? ($list_root$$.css({"margin-right":$contentWidth$$}), $list_root$$.animate({"margin-right":"0px"}, 400, "swing", function() {
      $self$$132$$.$_slideAnimationComplete$($item$$87$$, $isMovingNext$$, $focusableElement$$1$$);
    })) : ($list_root$$.css({"margin-left":$contentWidth$$}), $list_root$$.animate({"margin-left":"0px"}, 400, "swing", function() {
      $self$$132$$.$_slideAnimationComplete$($item$$87$$, $isMovingNext$$, $focusableElement$$1$$);
    }));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_slideAnimationComplete$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_slideAnimationComplete$$($item$$88$$, $isMovingNext$$1$$, $focusableElement$$2_key$$105$$) {
    null !== this.$m_widget$.$m_contentHandler$ && ($focusableElement$$2_key$$105$$ && ($focusableElement$$2_key$$105$$ = this.$m_widget$.$GetKey$($focusableElement$$2_key$$105$$[0]), this.$m_widget$.$SetOption$("currentItem", $focusableElement$$2_key$$105$$)), $isMovingNext$$1$$ ? this.$m_widget$.$AnimateExpandComplete$($item$$88$$.children("." + this.$m_widget$.$getGroupStyleClass$())) : this.$m_widget$.$AnimateCollapseComplete$($item$$88$$.children("." + this.$m_widget$.$getGroupStyleClass$())));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Expand$$($groupItem$$19$$, $animate$$9$$) {
    var $target$$84$$ = $$$$19$$($groupItem$$19$$).parents(".oj-navigationlist-item-element:first"), $sublist$$3$$ = $target$$84$$.children("." + this.$m_widget$.$getGroupStyleClass$()), $parentLabel$$, $nextFocusableItem$$ = null, $currentListRoot$$ = $target$$84$$.closest("." + this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    if (0 < $currentListRoot$$.length) {
      $currentListRoot$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
      $target$$84$$.addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
      var $nextFocusableItem$$ = $sublist$$3$$.find("." + this.$m_widget$.$getItemElementStyleClass$() + ":eq(0)"), $listOfParents$$ = $target$$84$$.parentsUntil($currentListRoot$$, "ul"), $listOfParents$$ = $currentListRoot$$.is(this.$m_widget$.element) ? $listOfParents$$.get().concat($currentListRoot$$.get()) : $listOfParents$$.get(), $self$$133$$ = this, $itemNode$$, $listOfParents$$ = $$$$19$$($listOfParents$$.reverse());
      $listOfParents$$.each(function($i$$287$$, $parentList$$) {
        $parentLabel$$ = $$$$19$$($parentList$$).is($self$$133$$.$m_widget$.element) ? $self$$133$$.$m_widget$.$getRootLabel$() : $self$$133$$.$m_widget$.$getItemLabel$($$$$19$$($parentList$$).parent());
        $itemNode$$ = $i$$287$$ === $listOfParents$$.length - 1 ? $target$$84$$ : $$$$19$$($listOfParents$$.get($i$$287$$ + 1)).parent();
        $self$$133$$.$_addItemToHviewMenu$($self$$133$$.$m_widget$.$GetKey$($itemNode$$[0]), $self$$133$$.$m_widget$.$getItemLabel$($itemNode$$), $parentLabel$$);
        $self$$133$$.$m_expanded$.push($itemNode$$);
      });
    }
    $animate$$9$$ ? this.$_slideAnimation$($target$$84$$, !0, $nextFocusableItem$$) : this.$_slideAnimationComplete$($target$$84$$, !0, $nextFocusableItem$$);
    this.$m_widget$.element.focus();
    $target$$84$$.siblings().attr("aria-hidden", "true");
    $target$$84$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).attr("aria-hidden", "true");
    $sublist$$3$$.removeAttr("aria-hidden");
    $groupItem$$19$$.css("display", "");
    $target$$84$$.addClass("oj-skipfocus");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Collapse$$($target$$85$$, $animate$$10$$) {
    var $currentList$$ = $target$$85$$.children("." + this.$m_widget$.$getGroupStyleClass$()), $parentlist$$ = $target$$85$$.parent();
    $target$$85$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).removeAttr("aria-hidden");
    $currentList$$.attr("aria-hidden", "true");
    $target$$85$$.siblings().removeAttr("aria-hidden");
    $target$$85$$.removeClass("oj-skipfocus");
    $target$$85$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    0 === $target$$85$$.closest("." + this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$).length && ($parentlist$$.closest("." + this.$m_widget$.$getItemElementStyleClass$()).addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$), this.$m_widget$.element.is($parentlist$$) && this.$m_widget$.element.addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$));
    $animate$$10$$ ? this.$_slideAnimation$($target$$85$$, !1, $currentList$$.parent()) : this.$_slideAnimationComplete$($target$$85$$, !1, $currentList$$.parent());
    this.$_removeItemFromHviewMenu$();
    this.$m_widget$.element.focus();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$59$$, $highlight$$3$$) {
    $highlight$$3$$ ? $elem$$59$$.attr("aria-describedby", "selectedLabel") : $elem$$59$$.removeAttr("aria-describedby");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$GetState$ = function $$oj$$20$$$$SlidingNavListHandler$$$$GetState$$($expanded$$8_item$$89$$) {
    $expanded$$8_item$$89$$ = this.$m_widget$.$getFocusItem$($expanded$$8_item$$89$$).attr("aria-expanded");
    return "true" === $expanded$$8_item$$89$$ ? this.$m_widget$.$STATE_EXPANDED$ : "false" === $expanded$$8_item$$89$$ ? this.$m_widget$.$STATE_COLLAPSED$ : this.$m_widget$.$STATE_NONE$;
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$SetState$ = function $$oj$$20$$$$SlidingNavListHandler$$$$SetState$$($item$$90$$, $state$$7$$) {
    $state$$7$$ === this.$m_widget$.$STATE_EXPANDED$ ? (this.$m_widget$.$getFocusItem$($item$$90$$).attr("aria-expanded", "true"), $item$$90$$.removeClass(this.$m_widget$.$COLLAPSED_STYLE_CLASS$).addClass(this.$m_widget$.$EXPANDED_STYLE_CLASS$)) : $state$$7$$ === this.$m_widget$.$STATE_COLLAPSED$ && (this.$m_widget$.$getFocusItem$($item$$90$$).attr("aria-expanded", "false"), $item$$90$$.removeClass(this.$m_widget$.$EXPANDED_STYLE_CLASS$).addClass(this.$m_widget$.$COLLAPSED_STYLE_CLASS$));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$ModifyListItem$$($$item$$2$$, $itemContent$$5$$) {
    var $focusableElement$$3$$ = this.$m_widget$.$getFocusItem$($$item$$2$$);
    $focusableElement$$3$$.attr("role", "menuitem");
    $itemContent$$5$$.attr("id") || $itemContent$$5$$.uniqueId();
    var $groupItems$$4$$ = $$item$$2$$.children("." + this.$m_widget$.$getGroupStyleClass$());
    0 < $groupItems$$4$$.length && ($focusableElement$$3$$.attr("aria-haspopup", "true"), $groupItems$$4$$.attr("role", "menu"), $groupItems$$4$$.css("display", ""), $$item$$2$$.removeAttr("aria-expanded"), $focusableElement$$3$$.attr("aria-expanded", "false"));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$SlidingNavListHandler$$$$BeforeRenderComplete$$() {
    this.$m_widget$.element.attr("role", "menu");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.Init = function $$oj$$20$$$$SlidingNavListHandler$$$Init$($opts$$24$$) {
    this.$m_root$.addClass("oj-navigationlist-slider oj-navigationlist-vertical");
    $opts$$24$$.element.addClass("oj-navigationlist-current");
    this.$_buildSlidingNavListHeader$($opts$$24$$);
    this.$_initializeHierarchicalView$();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_buildSlidingNavListHeader$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_buildSlidingNavListHeader$$($opts$$25$$) {
    var $selectedLabel$$;
    this.$_toolbar$ = $$$$19$$(document.createElement("div"));
    this.$_toolbar$.addClass("oj-navigationlist-toolbar");
    this.$_previousLink$ = $$$$19$$(document.createElement("a"));
    this.$_prevIcon$ = $$$$19$$(document.createElement("span"));
    this.$_prevIcon$.addClass("oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext").attr("role", "img").attr("alt", this.$m_component$.$getTranslatedString$("previousIcon"));
    this.$_prevIcon$.css("visibility", "hidden");
    this.$_previousLink$.addClass("oj-navigationlist-previous-link").attr("tabindex", "-1").append(this.$_prevIcon$);
    this.$_headerLabel$ = $$$$19$$(document.createElement("label"));
    this.$_headerLabel$.addClass("oj-navigationlist-current-header").text(this.$m_widget$.$getRootLabel$());
    this.$_vSeparator$ = $$$$19$$(document.createElement("span"));
    this.$_vSeparator$.attr("role", "separator").attr("aria-orientation", "vertical").addClass("oj-navigationlist-toolbar-separator");
    this.$_hviewBtn$ = $$$$19$$(document.createElement("button"));
    this.$_hviewBtn$.addClass("oj-navigationlist-hierarchical-button");
    this.$_hviewMenu$ = $$$$19$$(document.createElement("ul"));
    this.$_hviewMenu$.addClass("oj-navigationlist-hierarchical-menu").hide();
    $selectedLabel$$ = $$$$19$$(document.createElement("label"));
    $selectedLabel$$.addClass("oj-helper-hidden-accessible").attr("aria-hidden", "true").attr("id", "selectedLabel");
    $selectedLabel$$.text(this.$m_component$.$getTranslatedString$("selectedLabel"));
    this.$_previousLink$.append(this.$_headerLabel$);
    this.$_toolbar$.append(this.$_previousLink$).append(this.$_vSeparator$).append(this.$_hviewBtn$).append(this.$_hviewMenu$).append($selectedLabel$$);
    this.$m_root$.prepend(this.$_toolbar$);
    this.$_showOrHideHierarchyMenu$($opts$$25$$.hierarchyMenuDisplayThresholdLevel);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$CollapseCurrentList$ = function $$oj$$20$$$$SlidingNavListHandler$$$$CollapseCurrentList$$() {
    var $current$$15$$ = this.$m_expanded$.pop();
    $current$$15$$ && this.$m_widget$.$CollapseItem$($current$$15$$, null, !0, null, !0, !0);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_initializeHierarchicalView$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_initializeHierarchicalView$$() {
    var $self$$135$$ = this, $menuid$$ = this.$_hviewMenu$.uniqueId().attr("id");
    this.$_hviewMenu$.ojMenu({openOptions:{position:{my:"end top", at:"end bottom"}}, select:function($event$$316$$, $ui$$16$$) {
      for (var $itemsToRemove$$ = $ui$$16$$.item.nextAll(), $currentKey$$, $item$$91$$, $expandedItems$$ = $self$$135$$.$m_expanded$, $targetItemKey$$ = $ui$$16$$.item.data("key");0 < $expandedItems$$.length && ($item$$91$$ = $expandedItems$$.pop(), $currentKey$$ = $self$$135$$.$m_widget$.$GetKey$($item$$91$$[0]), $self$$135$$.$m_widget$.$CollapseItem$($$$$19$$($item$$91$$), null, !0, $currentKey$$, !0, !0), $targetItemKey$$ !== $currentKey$$);) {
      }
      $itemsToRemove$$.remove();
      $ui$$16$$.item.remove();
      $self$$135$$.$_hviewMenu$.ojMenu("refresh");
    }});
    this.$_hviewBtn$.ojButton({label:this.$m_component$.$getTranslatedString$("hierMenuBtnLabel"), display:"icons", icons:{start:"oj-fwk-icon oj-hier-icon"}, menu:"#" + $menuid$$, disabled:!0, chroming:"half"});
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_addItemToHviewMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_addItemToHviewMenu$$($itemKey$$, $label$$12$$, $parentLabel$$1$$) {
    if (this.$_hviewBtn$) {
      var $itemsinTree_menuItemLabel$$ = this.$_hviewMenu$.find("li").length, $menuListItem$$ = $$$$19$$(document.createElement("li")), $menuItem$$ = $$$$19$$(document.createElement("a"));
      $menuItem$$.attr("href", "#");
      $menuListItem$$.append($menuItem$$);
      if (0 < $itemsinTree_menuItemLabel$$) {
        for (var $i$$288$$ = 0;$i$$288$$ < $itemsinTree_menuItemLabel$$;$i$$288$$++) {
          0 < $i$$288$$ && $menuItem$$.append($$$$19$$(document.createElement("span")).addClass("oj-navigationlist-hvitem-space"));
        }
        $menuItem$$.append($$$$19$$(document.createElement("span")).addClass("oj-menu-item-icon oj-icon oj-navigationlist-level-indicator"));
      }
      $itemsinTree_menuItemLabel$$ = $$$$19$$(document.createElement("span")).addClass("oj-navigationlist-hierarchical-menu-label");
      $itemsinTree_menuItemLabel$$.text($parentLabel$$1$$);
      $menuItem$$.append($itemsinTree_menuItemLabel$$);
      $menuListItem$$.data("key", $itemKey$$);
      this.$_hviewMenu$.append($menuListItem$$);
      this.$_hviewMenu$.ojMenu("refresh");
      this.$_showOrHideHierarchyMenu$(this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel"));
      this.$_hviewBtn$.ojButton("option", "disabled", !1);
      this.$_prevIcon$.css("visibility", "visible");
      this.$_previousLink$.attr("tabindex", "0");
      this.$_headerLabel$.text($label$$12$$);
    }
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$setOptions$ = function $$oj$$20$$$$SlidingNavListHandler$$$$setOptions$$($options$$262$$) {
    this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel") !== $options$$262$$.hierarchyMenuDisplayThresholdLevel && this.$_showOrHideHierarchyMenu$($options$$262$$.hierarchyMenuDisplayThresholdLevel);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_showOrHideHierarchyMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_showOrHideHierarchyMenu$$($hierarchyMenuDisplayThresholdLevel$$) {
    var $itemsinTree$$1$$ = this.$_hviewMenu$.find("li").length;
    -1 === $hierarchyMenuDisplayThresholdLevel$$ || $itemsinTree$$1$$ < $hierarchyMenuDisplayThresholdLevel$$ ? (this.$_vSeparator$.css("visibility", "hidden"), this.$_hviewBtn$.css("visibility", "hidden")) : $itemsinTree$$1$$ >= $hierarchyMenuDisplayThresholdLevel$$ && (this.$_vSeparator$.css("visibility", "visible"), this.$_hviewBtn$.css("visibility", "visible"));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_removeItemFromHviewMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_removeItemFromHviewMenu$$() {
    if (this.$_hviewBtn$) {
      var $removed$$2$$ = this.$_hviewMenu$.find("li").last().remove();
      this.$_hviewMenu$.ojMenu("refresh");
      this.$_showOrHideHierarchyMenu$(this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel"));
      0 === this.$_hviewMenu$.children("li").length ? (this.$_hviewBtn$.ojButton("option", "disabled", !0), this.$_prevIcon$.css("visibility", "hidden"), this.$_previousLink$.attr("tabindex", "-1"), this.$_headerLabel$.text(this.$m_widget$.$getRootLabel$())) : this.$_headerLabel$.text($removed$$2$$.children("a").text());
    }
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$RestoreItem$$($item$$92$$, $itemContent$$6$$) {
    $item$$92$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    $itemContent$$6$$.removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-describedby").removeAttr("aria-hidden");
  };
  var $_ojNavigationListView$$ = function($SuperClass$$2$$, $methods$$3$$) {
    function $constructor$$3$$() {
    }
    $oj$$20$$.$Object$.$createSubclass$($constructor$$3$$, $SuperClass$$2$$, "");
    $$$$19$$.extend($constructor$$3$$.prototype, $methods$$3$$);
    return $constructor$$3$$;
  }($oj$$20$$.$_ojListView$, {$ITEM_CONTENT_STYLE_CLASS$:"oj-navigationlist-item-content", $EXPANDED_STYLE_CLASS$:"oj-expanded", $COLLAPSED_STYLE_CLASS$:"oj-collapsed", $SLIDING_NAVLIST_CURRENT_STYLE_CLASS$:"oj-navigationlist-current", $DIVIDER_STYLE_CLASS$:"oj-navigationlist-divider", $_CATEGORY_DIVIDER_STYLE_CLASS$:"oj-navigationlist-category-divider", $_ITEM_LABEL_STYLE_CLASS$:"oj-navigationlist-item-label", $_ICON_ONLY_STYLE_CLASS$:"oj-navigationlist-icon-only", $_ITEM_ICON_STYLE_CLASS$:"oj-navigationlist-item-icon", 
  $_HORIZONTAL_NAVLIST_STYLE_CLASS$:"oj-navigationlist-horizontal", $_NAVLIST_HAS_ICONS$:"oj-navigationlist-has-icons", $_NAVLIST_ITEM_HAS_NO_ICON$:"oj-navigationlist-item-no-icon", $_NAVLIST_ITEM_TITLE$:"oj-navigationlist-item-title", $_NAVLIST_STYLE_CLASS$:"oj-navigationlist", $_NAVLIST_TOUCH_STYLE_CLASS$:"oj-navigationlist-touch", $_NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS$:"oj-navigationlist-listview-container", $_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$:"IsTitleAttrDueToTruncation", $_APPLICATION_LEVEL_NAV_STYLE_CLASS$:"oj-navigationlist-app-level", 
  $_PAGE_LEVEL_NAV_STYLE_CLASS$:"oj-navigationlist-page-level", $_NAVLIST_ITEM_ICON_HAS_TITLE$:"navigationListItemIconHastitle", $getItemLabel$:function($itemContent$$7_target$$86$$) {
    $itemContent$$7_target$$86$$ = this.$getItemContentElement$($itemContent$$7_target$$86$$);
    return $itemContent$$7_target$$86$$.is("a") ? $$$$19$$.trim($itemContent$$7_target$$86$$.text()) : $$$$19$$.trim($itemContent$$7_target$$86$$.find("." + this.$_NAVLIST_ITEM_TITLE$).text());
  }, $getItemContentElement$:function($item$$93$$) {
    var $itemContent$$8$$ = $item$$93$$.children("." + this.$ITEM_CONTENT_STYLE_CLASS$);
    0 === $itemContent$$8$$.length && ($itemContent$$8$$ = $item$$93$$.children("." + this.$getGroupItemStyleClass$()).children("." + this.$ITEM_CONTENT_STYLE_CLASS$), 0 === $itemContent$$8$$.length && ($itemContent$$8$$ = $item$$93$$.children("." + this.$getGroupItemStyleClass$()).children(":not(." + this.$getExpandIconStyleClass$() + "):not(." + this.$getCollapseIconStyleClass$() + ")")));
    return $itemContent$$8$$;
  }, $isRtl$:function() {
    return "rtl" === this.$ojContext$.$_GetReadingDirection$();
  }, $renderComplete$:function() {
    this.$m_listHandler$.$BeforeRenderComplete$();
    $_ojNavigationListView$$.$superclass$.$renderComplete$.apply(this, arguments);
  }, $itemInsertComplete$:function($elem$$60$$, $context$$98$$) {
    this.$m_listHandler$.$ItemInsertComplete$($elem$$60$$, $context$$98$$);
  }, $itemRemoveComplete$:function($elem$$61$$) {
    this.$m_listHandler$.$ItemRemoveComplete$($elem$$61$$);
    $_ojNavigationListView$$.$superclass$.$itemRemoveComplete$.apply(this, arguments);
  }, $_restoreContent$:function($i$$289_list$$10$$) {
    var $items$$8$$ = $i$$289_list$$10$$.children();
    $i$$289_list$$10$$.removeAttr("style").removeClass(this.$_NAVLIST_HAS_ICONS$).removeAttr("aria-hidden");
    for ($i$$289_list$$10$$ = 0;$i$$289_list$$10$$ < $items$$8$$.length;$i$$289_list$$10$$++) {
      var $item$$94$$ = $items$$8$$[$i$$289_list$$10$$], $item$$94$$ = $$$$19$$($item$$94$$);
      if ($item$$94$$.hasClass(this.$DIVIDER_STYLE_CLASS$)) {
        $item$$94$$.remove();
      } else {
        var $itemContent$$9$$ = this.$getItemContentElement$($item$$94$$);
        $itemContent$$9$$.removeClass(this.$ITEM_CONTENT_STYLE_CLASS$).removeClass(this.$_NAVLIST_ITEM_HAS_NO_ICON$).removeAttr("aria-haspopup");
        var $focusableItem_itemIcon_sublist$$5$$ = $itemContent$$9$$.children("." + this.$_ITEM_ICON_STYLE_CLASS$);
        $focusableItem_itemIcon_sublist$$5$$ && 0 < $focusableItem_itemIcon_sublist$$5$$.length && ($focusableItem_itemIcon_sublist$$5$$.removeAttr("role"), $focusableItem_itemIcon_sublist$$5$$.removeAttr("aria-label"), this.$_removeToolTipOnIcon$($focusableItem_itemIcon_sublist$$5$$));
        $item$$94$$.removeClass("oj-default").removeAttr("role").removeAttr("aria-disabled").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-pressed");
        $focusableItem_itemIcon_sublist$$5$$ = this.$getFocusItem$($item$$94$$);
        $focusableItem_itemIcon_sublist$$5$$.removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-pressed");
        $itemContent$$9$$.children("." + this.$_ITEM_LABEL_STYLE_CLASS$).contents().unwrap();
        $focusableItem_itemIcon_sublist$$5$$.data(this.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$) && $focusableItem_itemIcon_sublist$$5$$.removeAttr("title");
        $focusableItem_itemIcon_sublist$$5$$ = $item$$94$$.children("ul");
        0 < $focusableItem_itemIcon_sublist$$5$$.length ? (this.$m_listHandler$.$RestoreItem$($item$$94$$, $itemContent$$9$$, $focusableItem_itemIcon_sublist$$5$$), this.$_restoreContent$($focusableItem_itemIcon_sublist$$5$$)) : this.$m_listHandler$.$RestoreItem$($item$$94$$, $itemContent$$9$$);
      }
    }
  }, $IsNodeEditableOrClickable$:function($node$$74$$) {
    return $node$$74$$.hasClass(this.$ITEM_CONTENT_STYLE_CLASS$) || $node$$74$$.hasClass(this.$getExpandIconStyleClass$()) || $node$$74$$.hasClass(this.$getCollapseIconStyleClass$()) ? !1 : $_ojNavigationListView$$.$superclass$.$IsNodeEditableOrClickable$.apply(this, arguments);
  }, $IsElementEditableOrClickable$:function($node$$75$$) {
    return $node$$75$$.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && !$node$$75$$.hasClass(this.$ITEM_CONTENT_STYLE_CLASS$) || $node$$75$$.hasClass("oj-component");
  }, $_prepareListViewOptions$:function($navlistOptions$$) {
    var $opts$$26$$ = {drillMode:"none" !== $navlistOptions$$.drillMode ? "collapsible" : "none", selection:null !== $navlistOptions$$.selection ? [$navlistOptions$$.selection] : [], item:$navlistOptions$$.item, data:$navlistOptions$$.data, selectionMode:"single"};
    $opts$$26$$.element = this.$_list$;
    $opts$$26$$.item.focusable = function $$opts$$26$$$item$focusable$($context$$99$$) {
      return $$$$19$$($context$$99$$.data).is("li") ? !$$$$19$$($context$$99$$.data).hasClass("oj-disabled") : !$$$$19$$($context$$99$$.parentElement).hasClass("oj-disabled");
    };
    return $opts$$26$$ = $$$$19$$.extend($$$$19$$.extend({}, $navlistOptions$$), $opts$$26$$);
  }, $getRootLabel$:function() {
    return this.$ojContext$.options.rootLabel ? this.$ojContext$.options.rootLabel : this.$ojContext$.$getTranslatedString$("defaultRootLabel");
  }, $SetAriaProperties$:function() {
    var $ariaLabelId$$ = this.$ojContext$.element.attr("aria-labelledby");
    $ariaLabelId$$ ? (this.element.attr("aria-labelledby", $ariaLabelId$$), this.$ojContext$.element.removeAttr("aria-labelledby")) : this.element.attr("aria-label", this.$getRootLabel$());
    $_ojNavigationListView$$.$superclass$.$SetAriaProperties$.apply(this, arguments);
  }, $UnsetAriaProperties$:function() {
    this.element.attr("aria-labelledby") && (this.$ojContext$.element.attr("aria-labelledby", this.element.attr("aria-labelledby")), this.element.removeAttr("aria-labelledby"));
    this.element.attr("aria-label") && this.element.removeAttr("aria-label");
    $_ojNavigationListView$$.$superclass$.$UnsetAriaProperties$.apply(this, arguments);
  }, $init$:function($navlistopts_opts$$28$$) {
    var $self$$136$$ = this, $element$$112_listViewContainer$$ = $navlistopts_opts$$28$$.$ojContext$.element;
    $element$$112_listViewContainer$$.addClass(this.$_NAVLIST_STYLE_CLASS$);
    $oj$$20$$.$DomUtils$.$isTouchSupported$() && $element$$112_listViewContainer$$.addClass(this.$_NAVLIST_TOUCH_STYLE_CLASS$);
    this.$_list$ = $element$$112_listViewContainer$$.children("ul:first");
    0 === this.$_list$.length && (this.$_list$ = $$$$19$$(document.createElement("ul")), $element$$112_listViewContainer$$.append(this.$_list$));
    $element$$112_listViewContainer$$ = $$$$19$$(document.createElement("div"));
    $element$$112_listViewContainer$$.addClass(this.$_NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS$);
    this.$_list$.wrap($element$$112_listViewContainer$$);
    $navlistopts_opts$$28$$ = this.$_prepareListViewOptions$($navlistopts_opts$$28$$);
    $_ojNavigationListView$$.$superclass$.$init$.call(this, $navlistopts_opts$$28$$);
    this.element.removeClass("oj-component-initnode");
    this.$ojContext$._on(this.$ojContext$.element, {mouseup:function($event$$317$$) {
      $self$$136$$.$_clearActiveState$($event$$317$$);
    }, "click .oj-navigationlist-previous-link":function() {
      $self$$136$$.$_collapseCurrentList$();
    }, "keydown .oj-navigationlist-previous-link":function($event$$319$$) {
      $event$$319$$.keyCode === $$$$19$$.ui.keyCode.ENTER && $self$$136$$.$_collapseCurrentList$();
    }, "keydown .oj-navigationlist-element":function($event$$320$$) {
      $event$$320$$.keyCode !== $$$$19$$.ui.keyCode.ESCAPE || $event$$320$$.isDefaultPrevented() || $self$$136$$.$_collapseCurrentList$();
    }, "mouseenter a.oj-navigationlist-item-content":function($$itemLink_event$$321$$) {
      $$itemLink_event$$321$$ = $$$$19$$($$itemLink_event$$321$$.currentTarget);
      var $$label$$ = $$itemLink_event$$321$$.find("." + $self$$136$$.$_ITEM_LABEL_STYLE_CLASS$);
      $$label$$[0].offsetWidth < $$label$$[0].scrollWidth && !$$itemLink_event$$321$$.attr("title") && ($$itemLink_event$$321$$.attr("title", $$label$$.text().trim()), $$itemLink_event$$321$$.data($self$$136$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$, "true"));
    }, "mouseleave a.oj-navigationlist-item-content":function($event$$322$$) {
      var $$itemLink$$1$$ = $$$$19$$($event$$322$$.currentTarget);
      $$itemLink$$1$$.data($self$$136$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$) && ($$itemLink$$1$$.removeData($self$$136$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$), $$itemLink$$1$$.removeAttr("title"));
      $self$$136$$.$_clearActiveState$($event$$322$$);
    }});
  }, $_collapseCurrentList$:function() {
    this.$m_listHandler$.$CollapseCurrentList$();
  }, $_initListHandler$:function() {
    var $drillMode$$ = this.$ojContext$.options.drillMode, $edge$$ = this.$ojContext$.options.edge;
    this.$m_listHandler$ = "sliding" === $drillMode$$ ? new $oj$$20$$.$SlidingNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : "collapsible" === $drillMode$$ ? new $oj$$20$$.$CollapsibleNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : "none" === $drillMode$$ && "top" === $edge$$ ? new $oj$$20$$.$HorizontalNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : new $oj$$20$$.$DefaultNavListHandler$(this, this.$ojContext$.element, this.$ojContext$);
    this.$m_listHandler$.Init(this.options);
    this.$_setNavigationLevel$(this.$ojContext$.options.navigationLevel);
  }, $_setNavigationLevel$:function($navigationLevel$$1$$) {
    "none" === this.$ojContext$.options.drillMode && ("application" === $navigationLevel$$1$$ ? (this.$ojContext$.element.addClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$), this.$ojContext$.element.removeClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$)) : "page" === $navigationLevel$$1$$ && (this.$ojContext$.element.addClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$), this.$ojContext$.element.removeClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$)));
  }, $_clearActiveState$:function($event$$323_item$$95$$) {
    $event$$323_item$$95$$ = this.$FindItem$($$$$19$$($event$$323_item$$95$$.target));
    null != $event$$323_item$$95$$ && this.$HighlightUnhighlightElem$($event$$323_item$$95$$, "oj-active", !1);
  }, $afterCreate$:function() {
    this.$_initListHandler$();
    $_ojNavigationListView$$.$superclass$.$afterCreate$.apply(this, arguments);
  }, $HandleMouseDownOrTouchStart$:function($event$$324$$) {
    $_ojNavigationListView$$.$superclass$.$HandleMouseDownOrTouchStart$.apply(this, arguments);
    var $item$$96$$ = this.$FindItem$($$$$19$$($event$$324$$.target));
    $item$$96$$ && !$item$$96$$.hasClass("oj-disabled") && this.$HighlightUnhighlightElem$($item$$96$$, "oj-active", !0);
  }, $HandleTouchEndOrCancel$:function($event$$325$$) {
    this.$_clearActiveState$($event$$325$$);
    $_ojNavigationListView$$.$superclass$.$HandleTouchEndOrCancel$.apply(this, arguments);
  }, $GetContainerStyleClass$:function() {
    return "oj-navigationlist-listview";
  }, $GetStyleClass$:function() {
    return "oj-navigationlist-element";
  }, $getItemStyleClass$:function() {
    return "oj-navigationlist-item";
  }, $getFocusedElementStyleClass$:function() {
    return "oj-navigationlist-focused-element";
  }, $getItemElementStyleClass$:function() {
    return "oj-navigationlist-item-element";
  }, $getCollapseIconStyleClass$:function() {
    return "oj-navigationlist-collapse-icon";
  }, $getExpandIconStyleClass$:function() {
    return "oj-navigationlist-expand-icon";
  }, $getDepthStyleClass$:function($depth$$12$$) {
    return "oj-navigationlist-depth-" + $depth$$12$$;
  }, $getGroupItemStyleClass$:function() {
    return "oj-navigationlist-group-item";
  }, $getGroupStyleClass$:function() {
    return "oj-navigationlist-group";
  }, $getGroupExpandStyleClass$:function() {
    return "oj-navigationlist-collapsible-transition";
  }, $getGroupCollapseStyleClass$:function() {
    return this.$getGroupExpandStyleClass$();
  }, $AnimateExpand$:function($groupItem$$20$$, $animate$$11$$) {
    this.$m_listHandler$.$Expand$($groupItem$$20$$, $animate$$11$$);
  }, $AnimateCollapse$:function($item$$97$$, $animate$$12$$) {
    this.$m_listHandler$.$Collapse$($item$$97$$, $animate$$12$$);
  }, $HandleArrowKeys$:function($keyCode$$14$$, $isExtend$$3$$, $event$$326$$) {
    return this.$m_listHandler$.$HandleArrowKeys$($keyCode$$14$$, $isExtend$$3$$, $event$$326$$);
  }, $IsArrowKey$:function($keyCode$$15$$) {
    return this.$m_listHandler$.$IsArrowKey$($keyCode$$15$$);
  }, $GetState$:function($item$$98$$) {
    return this.$m_listHandler$.$GetState$($item$$98$$);
  }, $SetState$:function($item$$99$$, $state$$8$$) {
    this.$m_listHandler$.$SetState$($item$$99$$, $state$$8$$);
  }, $HandleMouseClick$:function($event$$327$$) {
    var $item$$100_url$$33$$ = this.$FindItem$($$$$19$$($event$$327$$.target));
    null != $item$$100_url$$33$$ && 0 !== $item$$100_url$$33$$.length && (this.$SkipFocus$($item$$100_url$$33$$) ? $event$$327$$.preventDefault() : (this.$GetKey$($item$$100_url$$33$$[0]), this.$IsNodeEditableOrClickable$($$$$19$$($event$$327$$.target)) || ($item$$100_url$$33$$ = this.$getItemContentElement$($item$$100_url$$33$$).attr("href"), $item$$100_url$$33$$ && "#" !== $item$$100_url$$33$$ && 0 === $event$$327$$.button && ($event$$327$$.shiftKey || $event$$327$$.ctrlKey) || ($_ojNavigationListView$$.$superclass$.$HandleMouseClick$.apply(this, 
    arguments), $event$$327$$.preventDefault()))));
  }, $HandleKeyDown$:function($event$$328$$) {
    var $keyCode$$16_processExpansion$$, $current$$16$$, $currentItemKey$$2$$;
    if (this.$m_active$) {
      if ($keyCode$$16_processExpansion$$ = $event$$328$$.keyCode, $current$$16$$ = this.$m_active$.elem, $currentItemKey$$2$$ = this.$m_active$.key, $keyCode$$16_processExpansion$$ === $$$$19$$.ui.keyCode.HOME || $keyCode$$16_processExpansion$$ === $$$$19$$.ui.keyCode.END) {
        var $item$$101_key$$106_processed$$4$$;
        $item$$101_key$$106_processed$$4$$ = $keyCode$$16_processExpansion$$ === $$$$19$$.ui.keyCode.HOME ? this.element.find("." + this.$ITEM_CONTENT_STYLE_CLASS$ + ":visible").first().closest("." + this.$getItemElementStyleClass$()) : this.element.find("." + this.$ITEM_CONTENT_STYLE_CLASS$ + ":visible").last().closest("." + this.$getItemElementStyleClass$());
        $item$$101_key$$106_processed$$4$$ = this.$GetKey$($item$$101_key$$106_processed$$4$$[0]);
        this.$SetOption$("currentItem", $item$$101_key$$106_processed$$4$$);
        $event$$328$$.preventDefault();
      } else {
        $item$$101_key$$106_processed$$4$$ = this.$HandleSelectionOrActiveKeyDown$($event$$328$$), $keyCode$$16_processExpansion$$ = this.$m_listHandler$.$HandleExpandAndCollapseKeys$($event$$328$$, $keyCode$$16_processExpansion$$, $current$$16$$, $currentItemKey$$2$$), !0 !== $item$$101_key$$106_processed$$4$$ && !0 !== $keyCode$$16_processExpansion$$ || $event$$328$$.preventDefault();
      }
    }
  }, $ToggleSelection$:function($event$$329$$, $keepCurrentSelection$$1$$, $skipIfNotSelected$$1$$) {
    var $item$$102$$ = this.$m_active$.elem;
    this.$IsSelectable$($item$$102$$[0]) && !this.$_isSelected$($item$$102$$) && this.$_fireBeforeSelectEvent$($event$$329$$, $item$$102$$) && ($_ojNavigationListView$$.$superclass$.$ToggleSelection$.apply(this, arguments), this.$_initiateNavigation$($item$$102$$));
  }, $HighlightUnhighlightElem$:function($elem$$62$$, $style$$7$$, $highlight$$4$$) {
    var $group$$4$$;
    $elem$$62$$ = $$$$19$$($elem$$62$$);
    "oj-selected" === $style$$7$$ && this.$m_listHandler$.$UpdateAriaPropertiesOnSelectedItem$(this.$getFocusItem$($elem$$62$$), $highlight$$4$$);
    $group$$4$$ = $elem$$62$$.children("." + this.$getGroupItemStyleClass$());
    0 < $group$$4$$.length && ($elem$$62$$ = $$$$19$$($group$$4$$[0]));
    $highlight$$4$$ ? $elem$$62$$.addClass($style$$7$$) : $elem$$62$$.removeClass($style$$7$$);
    $elem$$62$$.hasClass("oj-selected") || $elem$$62$$.hasClass("oj-hover") || $elem$$62$$.hasClass("oj-active") || $elem$$62$$.hasClass("oj-disabled") ? $elem$$62$$.removeClass("oj-default") : $elem$$62$$.addClass("oj-default");
  }, $IsSelectable$:function($item$$103$$) {
    return!$$$$19$$($item$$103$$).hasClass("oj-disabled") && this.$m_listHandler$.$IsSelectable$($$$$19$$($item$$103$$));
  }, $Trigger$:function($type$$84$$, $event$$330$$, $ui$$17$$) {
    return "ready" !== $type$$84$$ ? this.$ojContext$._trigger($type$$84$$, $event$$330$$, $ui$$17$$) : !0;
  }, $SetOption$:function($key$$107$$, $value$$245$$, $flags$$29$$) {
    if ("selection" === $key$$107$$) {
      var $context$$100$$ = $flags$$29$$._context, $selectedItem$$ = $context$$100$$ && $context$$100$$.$extraData$ && $context$$100$$.$extraData$.items;
      $selectedItem$$ && ($context$$100$$.$extraData$.item = $selectedItem$$, $context$$100$$.$extraData$.items = void 0);
      $value$$245$$ && 0 < $value$$245$$.length ? this.$ojContext$.option($key$$107$$, $value$$245$$[0], $flags$$29$$) : this.$ojContext$.option($key$$107$$, null, $flags$$29$$);
    } else {
      this.$ojContext$.option($key$$107$$, $value$$245$$, $flags$$29$$);
    }
    this.options[$key$$107$$] = $value$$245$$;
  }, $ShouldRefresh$:function($options$$263$$) {
    return null != $options$$263$$.data || null != $options$$263$$.drillMode || null != $options$$263$$.item || null != $options$$263$$.display || null != $options$$263$$.edge;
  }, $setOptions$:function($options$$264$$, $flags$$30$$) {
    var $result$$49$$ = {$skipOptions$:[]}, $newSelectionValue$$;
    void 0 !== $options$$264$$.hierarchyMenuDisplayThresholdLevel && this.$m_listHandler$.$setOptions$($options$$264$$);
    void 0 !== $options$$264$$.navigationLevel && this.$_setNavigationLevel$($options$$264$$.navigationLevel);
    if (void 0 !== $options$$264$$.selection) {
      if ($newSelectionValue$$ = $options$$264$$.selection) {
        var $item$$104_selection$$12$$ = this.$GetOption$("selection");
        $item$$104_selection$$12$$ && 0 !== $item$$104_selection$$12$$.length && $item$$104_selection$$12$$[0] === $newSelectionValue$$ ? delete $options$$264$$.selection : ($item$$104_selection$$12$$ = this.$FindElementByKey$($newSelectionValue$$)) && this.$IsSelectable$($item$$104_selection$$12$$) ? this.$_fireBeforeSelectEvent$(null, $$$$19$$($item$$104_selection$$12$$)) ? ($options$$264$$.selection = [$newSelectionValue$$], this.$_initiateNavigation$($$$$19$$($item$$104_selection$$12$$))) : (delete $options$$264$$.selection, 
        $result$$49$$.$skipOptions$.push("selection")) : (delete $options$$264$$.selection, $result$$49$$.$skipOptions$.push("selection"));
      } else {
        $options$$264$$.selection = [];
      }
    }
    $result$$49$$.$needRefresh$ = $_ojNavigationListView$$.$superclass$.$setOptions$.call(this, $options$$264$$, $flags$$30$$);
    void 0 !== $newSelectionValue$$ && ($options$$264$$.selection = $newSelectionValue$$);
    return $result$$49$$;
  }, $GetOption$:function($key$$108$$) {
    var $optionValue$$4$$ = this.$ojContext$.option($key$$108$$);
    return "selection" === $key$$108$$ ? $optionValue$$4$$ ? [$optionValue$$4$$] : [] : null === $optionValue$$4$$ ? this.options[$key$$108$$] : $optionValue$$4$$;
  }, $getWidgetConstructor$:function() {
    return $oj$$20$$.Components.$getWidgetConstructor$(this.$ojContext$.element);
  }, $SelectAndFocus$:function($item$$105$$, $event$$331$$) {
    !$item$$105$$.hasClass("oj-disabled") && this.$IsSelectable$($item$$105$$[0]) && (!this.$_isSelected$($item$$105$$) && this.$_fireBeforeSelectEvent$($event$$331$$, $item$$105$$) ? ($_ojNavigationListView$$.$superclass$.$SelectAndFocus$.apply(this, arguments), this.$_initiateNavigation$($item$$105$$)) : this.$HandleClickActive$($item$$105$$, $event$$331$$));
  }, $_fireBeforeSelectEvent$:function($event$$332$$, $item$$106$$) {
    var $key$$109$$ = this.$GetKey$($item$$106$$[0]);
    return this.$Trigger$("beforeSelect", $event$$332$$, {item:$item$$106$$, key:$key$$109$$});
  }, $_initiateNavigation$:function($item$$107_url$$34$$) {
    return($item$$107_url$$34$$ = this.$getItemContentElement$($item$$107_url$$34$$).attr("href")) && "#" !== $item$$107_url$$34$$ ? (window.location.href = $item$$107_url$$34$$, !0) : !1;
  }, $_isSelected$:function($item$$108_key$$110$$) {
    var $selection$$13$$;
    $selection$$13$$ = this.$GetOption$("selection");
    $item$$108_key$$110$$ = this.$GetKey$($item$$108_key$$110$$[0]);
    return-1 < $selection$$13$$.indexOf($item$$108_key$$110$$) ? !0 : !1;
  }, $_setToolTipOnIcon$:function($icon$$3$$, $itemLabel$$1$$) {
    $icon$$3$$.attr("title") || $icon$$3$$.attr("title", $itemLabel$$1$$);
  }, $_removeToolTipOnIcon$:function($icon$$4$$) {
    $icon$$4$$.data(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$) ? $icon$$4$$.removeData(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$) : $icon$$4$$.removeAttr("title");
  }, $itemRenderComplete$:function($elem$$63$$, $context$$101$$) {
    var $$item$$3$$ = $$$$19$$($elem$$63$$);
    if ($$item$$3$$.hasClass(this.$_CATEGORY_DIVIDER_STYLE_CLASS$)) {
      $$item$$3$$.removeClass(this.$getItemElementStyleClass$()), $$item$$3$$.removeClass(this.$getFocusedElementStyleClass$()), $$item$$3$$.removeClass(this.$getItemStyleClass$()), $$item$$3$$.removeAttr("aria-selected"), $$item$$3$$.children().remove(), $$item$$3$$.attr("role", "separator");
    } else {
      var $collapseIconClass$$1_icon$$5$$ = this.$getCollapseIconStyleClass$(), $expandIconClass$$1_groupIcon$$ = this.$getExpandIconStyleClass$(), $itemIconClass_itemLabel$$2$$ = this.$_ITEM_ICON_STYLE_CLASS$, $groupItem$$21$$ = $$item$$3$$.children("." + this.$getGroupItemStyleClass$()), $itemContent$$12$$;
      0 < $groupItem$$21$$.length ? ($groupItem$$21$$.addClass(this.$getItemStyleClass$()), $itemContent$$12$$ = $groupItem$$21$$.children(":not(." + $expandIconClass$$1_groupIcon$$ + "):not(." + $collapseIconClass$$1_icon$$5$$ + ")"), $expandIconClass$$1_groupIcon$$ = $groupItem$$21$$.children("." + $expandIconClass$$1_groupIcon$$), 0 === $expandIconClass$$1_groupIcon$$.length && ($expandIconClass$$1_groupIcon$$ = $groupItem$$21$$.children("." + $collapseIconClass$$1_icon$$5$$)), $expandIconClass$$1_groupIcon$$.attr("role", 
      "presentation"), $expandIconClass$$1_groupIcon$$.removeAttr("aria-labelledby"), $$item$$3$$.hasClass("oj-disabled") && $groupItem$$21$$.addClass("oj-disabled")) : $itemContent$$12$$ = $$item$$3$$.children().first();
      $itemContent$$12$$.addClass(this.$ITEM_CONTENT_STYLE_CLASS$);
      $collapseIconClass$$1_icon$$5$$ = $itemContent$$12$$.wrapInner('\x3cspan class\x3d"' + this.$_ITEM_LABEL_STYLE_CLASS$ + '"\x3e\x3c/span\x3e').find("." + $itemIconClass_itemLabel$$2$$);
      0 < $collapseIconClass$$1_icon$$5$$.length ? ($collapseIconClass$$1_icon$$5$$.insertBefore($collapseIconClass$$1_icon$$5$$.parent()), $collapseIconClass$$1_icon$$5$$.attr("title") && $collapseIconClass$$1_icon$$5$$.data(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$, $collapseIconClass$$1_icon$$5$$.attr("title")), "icons" === this.$ojContext$.options.display && (this.$ojContext$.element.addClass(this.$_ICON_ONLY_STYLE_CLASS$), $itemIconClass_itemLabel$$2$$ = this.$getItemLabel$($$item$$3$$), $collapseIconClass$$1_icon$$5$$.attr("aria-label", 
      $itemIconClass_itemLabel$$2$$), $collapseIconClass$$1_icon$$5$$.attr("role", "img"), this.$_setToolTipOnIcon$($collapseIconClass$$1_icon$$5$$, $itemIconClass_itemLabel$$2$$)), $$item$$3$$.closest("ul").addClass(this.$_NAVLIST_HAS_ICONS$)) : $itemContent$$12$$.addClass(this.$_NAVLIST_ITEM_HAS_NO_ICON$);
      $$item$$3$$.hasClass("oj-disabled") ? this.$getFocusItem$($$item$$3$$).attr("aria-disabled", "true") : 0 < $groupItem$$21$$.length ? $groupItem$$21$$.addClass("oj-default") : $$item$$3$$.addClass("oj-default");
      this.$m_listHandler$.$ModifyListItem$($$item$$3$$, $itemContent$$12$$);
      $_ojNavigationListView$$.$superclass$.$itemRenderComplete$.apply(this, arguments);
    }
  }, getNodeBySubId:function($item$$109_key$$111_locator$$28$$) {
    var $subId$$33$$;
    if (null === $item$$109_key$$111_locator$$28$$) {
      return this.element ? this.element[0] : null;
    }
    $subId$$33$$ = $item$$109_key$$111_locator$$28$$.subId;
    return "oj-navigationlist-item" === $subId$$33$$ ? ($item$$109_key$$111_locator$$28$$ = $item$$109_key$$111_locator$$28$$.key, $item$$109_key$$111_locator$$28$$ = this.$FindElementByKey$($item$$109_key$$111_locator$$28$$)) : "oj-navigationlist-previous-link" === $subId$$33$$ ? this.$m_listHandler$.$_previousLink$ ? this.$m_listHandler$.$_previousLink$[0] : null : "oj-navigationlist-hierarchical-button" === $subId$$33$$ ? this.$m_listHandler$.$_hviewBtn$ ? this.$m_listHandler$.$_hviewBtn$[0] : 
    null : "oj-navigationlist-hierarchical-menu" === $subId$$33$$ ? this.$m_listHandler$.$_hviewMenu$ ? this.$m_listHandler$.$_hviewMenu$[0] : null : null;
  }, getSubIdByNode:function($item$$110_key$$112_node$$76$$) {
    if (this.$m_listHandler$.$_previousLink$ && this.$m_listHandler$.$_previousLink$[0] === $item$$110_key$$112_node$$76$$) {
      return{subId:"oj-navigationlist-previous-link"};
    }
    if (this.$m_listHandler$.$_hviewBtn$ && this.$m_listHandler$.$_hviewBtn$[0] === $item$$110_key$$112_node$$76$$) {
      return{subId:"oj-navigationlist-hierarchical-button"};
    }
    if (this.$m_listHandler$.$_hviewMenu$ && this.$m_listHandler$.$_hviewMenu$[0] === $item$$110_key$$112_node$$76$$) {
      return{subId:"oj-navigationlist-hierarchical-menu"};
    }
    $item$$110_key$$112_node$$76$$ = this.$FindItem$($item$$110_key$$112_node$$76$$);
    return null != $item$$110_key$$112_node$$76$$ && 0 < $item$$110_key$$112_node$$76$$.length && ($item$$110_key$$112_node$$76$$ = this.$GetKey$($item$$110_key$$112_node$$76$$[0]), null != $item$$110_key$$112_node$$76$$) ? {subId:"oj-navigationlist-item", key:$item$$110_key$$112_node$$76$$} : null;
  }, refresh:function() {
    this.$_resetNavlist$();
    this.$_initListHandler$();
    $_ojNavigationListView$$.$superclass$.refresh.apply(this, arguments);
  }, $_resetNavlist$:function() {
    this.$ojContext$.element.removeClass(this.$_ICON_ONLY_STYLE_CLASS$);
    this.$ojContext$.element.removeClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$);
    this.$ojContext$.element.removeClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$);
    this.$_restoreContent$(this.element);
    this.$m_listHandler$.$Destroy$();
  }, destroy:function() {
    this.$_resetNavlist$();
    $_ojNavigationListView$$.$superclass$.destroy.apply(this, arguments);
    this.$_list$.unwrap();
    this.$_list$.is(":empty") && this.$_list$.remove();
    this.$ojContext$.element.removeClass(this.$_NAVLIST_STYLE_CLASS$ + " " + this.$_NAVLIST_TOUCH_STYLE_CLASS$);
    this.$ojContext$._off(this.element, "click");
    this.$ojContext$._off(this.element, "focus");
    this.$ojContext$._off(this.element, "blur");
    this.$ojContext$._off(this.element, "mouseover");
    this.$ojContext$._off(this.element, "mousein");
    this.$ojContext$._off(this.element, "mouseout");
    this.$ojContext$._off(this.element, "keydown");
  }});
  (function() {
    $oj$$20$$.$__registerWidget$("oj.ojNavigationList", $$$$19$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{currentItem:null, drillMode:"none", edge:"start", hierarchyMenuDisplayThresholdLevel:0, rootLabel:null, selection:null, expanded:"auto", data:null, display:"all", navigationLevel:"page", item:{renderer:null, selectable:!0}, beforeSelect:null, beforeCollapse:null, beforeCurrentItem:null, collapse:null, beforeExpand:null, expand:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$navlist$.$afterCreate$();
    }, $_NotifyContextMenuGesture$:function($menu$$8$$, $event$$333$$, $eventType$$37$$) {
      this.$navlist$.$notifyContextMenuGesture$($menu$$8$$, $event$$333$$, $eventType$$37$$);
    }, $_setup$:function() {
      for (var $key$$113_opts$$29$$ in this.options) {
        this.$_validateOptionValues$($key$$113_opts$$29$$, this.options[$key$$113_opts$$29$$]);
      }
      this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, this.options.display, this.options.edge);
      this.$navlist$ = new $_ojNavigationListView$$;
      $key$$113_opts$$29$$ = {$ojContext$:this};
      $key$$113_opts$$29$$ = $$$$19$$.extend(this.options, $key$$113_opts$$29$$);
      this.$navlist$.$init$($key$$113_opts$$29$$);
    }, getNodeBySubId:function($locator$$29$$) {
      return this.$navlist$.getNodeBySubId($locator$$29$$);
    }, getSubIdByNode:function($node$$77$$) {
      return this.$navlist$.getSubIdByNode($node$$77$$);
    }, expand:function($key$$114$$, $vetoable$$2$$) {
      this.$navlist$.$expandKey$($key$$114$$, $vetoable$$2$$, !0, !0);
    }, collapse:function($key$$115$$, $vetoable$$3$$) {
      this.$navlist$.$collapseKey$($key$$115$$, $vetoable$$3$$, !0);
    }, getExpanded:function() {
      return this.$navlist$.getExpanded();
    }, $_validateOptionsForIconsOnlyAndHorizontalList$:function($drillMode$$2$$, $display$$1$$, $edge$$1$$) {
      if ("none" !== $drillMode$$2$$) {
        if ("icons" === $display$$1$$) {
          throw "Icon only navigation list should have drillMode set to 'none'.";
        }
        if ("top" === $edge$$1$$) {
          throw "Horizontal navigation list should have drillMode set to 'none'.";
        }
      }
    }, $_validateOptionValues$:function($key$$116$$, $value$$246$$) {
      var $valid$$9$$ = !0;
      "drillMode" === $key$$116$$ ? $valid$$9$$ = "none" === $value$$246$$ || "collapsible" === $value$$246$$ || "sliding" === $value$$246$$ : "display" === $key$$116$$ ? $valid$$9$$ = "all" === $value$$246$$ || "icons" === $value$$246$$ : "edge" === $key$$116$$ && ($valid$$9$$ = "top" === $value$$246$$ || "start" === $value$$246$$);
      if (!$valid$$9$$) {
        throw "Invalid value: " + $value$$246$$ + " for key: " + $key$$116$$;
      }
    }, _setOption:function($key$$117$$, $value$$247$$) {
      this.$_validateOptionValues$($key$$117$$, $value$$247$$);
      switch($key$$117$$) {
        case "drillMode":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$($value$$247$$, this.options.display, this.options.edge);
          break;
        case "display":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, $value$$247$$, this.options.edge);
          break;
        case "edge":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, this.options.display, $value$$247$$);
      }
      return this._super($key$$117$$, $value$$247$$);
    }, _setOptions:function($options$$265$$, $flags$$31$$) {
      var $result$$50$$ = this.$navlist$.$setOptions$($options$$265$$, $flags$$31$$), $key$$118$$;
      for ($key$$118$$ in $options$$265$$) {
        0 > $result$$50$$.$skipOptions$.indexOf($key$$118$$) && this._setOption($key$$118$$, $options$$265$$[$key$$118$$], $flags$$31$$);
      }
      $result$$50$$.$needRefresh$ && this.$navlist$.refresh();
      return this;
    }, $_NotifyDetached$:function() {
      this.$navlist$.$notifyDetached$();
    }, $_NotifyShown$:function() {
    }, refresh:function() {
      this._super();
      this.$navlist$.refresh();
    }, _destroy:function() {
      this.$navlist$.destroy();
      this._super();
      delete this.$navlist$;
    }});
    $oj$$20$$.Components.$setDefaultOptions$({ojNavigationList:{hierarchyMenuDisplayThresholdLevel:$oj$$20$$.Components.$createDynamicPropertyGetter$(function() {
      return $oj$$20$$.$ThemeUtils$.$getOptionDefaultMap$("navigationList").hierarchyMenuDisplayThresholdLevel;
    })}});
  })();
});