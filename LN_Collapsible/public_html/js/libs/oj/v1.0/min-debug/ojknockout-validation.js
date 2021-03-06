/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define("ojs/ojcore jquery knockout jqueryui ojs/ojknockout ojs/ojmessaging".split(" "), function($oj$$8$$, $$$$8$$, $ko$$2$$) {
  $oj$$8$$.$InvalidComponentTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$() {
    this.Init();
  };
  $goog$exportPath_$$("InvalidComponentTracker", $oj$$8$$.$InvalidComponentTracker$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$InvalidComponentTracker$, $oj$$8$$.$Object$, "oj.InvalidComponentTracker");
  $oj$$8$$.$InvalidComponentTracker$.prototype.Init = function $$oj$$8$$$$InvalidComponentTracker$$$Init$() {
    $oj$$8$$.$InvalidComponentTracker$.$superclass$.Init.call(this);
    this.$_tracked$ = [];
    this.$_invalid$ = [];
    this.$_invalidHidden$ = [];
    this.invalidHidden = this.invalidShown = !1;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$ = function $$oj$$8$$$$InvalidComponentTracker$$$$focusOnFirstInvalid$$() {
    var $firstInvalid$$ = null, $self$$45$$ = this, $updateCounter$$ = this.$_updateCounter$;
    this.invalidShown && ($firstInvalid$$ = this.$_getFirstInvalidComponent$());
    setTimeout(function() {
      ($firstInvalid$$ = $updateCounter$$ === $self$$45$$.$_updateCounter$ ? $firstInvalid$$ || $self$$45$$.$_getFirstInvalidComponent$() : $self$$45$$.$_getFirstInvalidComponent$()) && $firstInvalid$$.call($firstInvalid$$, "Focus");
    }, 1);
    return $firstInvalid$$ ? !0 : !1;
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.focusOnFirstInvalid", {$focusOnFirstInvalid$:$oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$});
  $oj$$8$$.$InvalidComponentTracker$.prototype.showMessages = function $$oj$$8$$$$InvalidComponentTracker$$$showMessages$() {
    var $tr$$, $len$$10$$, $index$$88$$;
    if (this.invalidHidden) {
      for ($len$$10$$ = this.$_invalidHidden$.length, $index$$88$$ = 0;$index$$88$$ < $len$$10$$;$index$$88$$++) {
        this.$_invalidHidden$[$index$$88$$] && ($tr$$ = this.$_tracked$[$index$$88$$].call($tr$$, "showMessages"));
      }
    }
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.showMessages", {showMessages:$oj$$8$$.$InvalidComponentTracker$.prototype.showMessages});
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_getFirstInvalidComponent$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_getFirstInvalidComponent$$() {
    for (var $firstInvalid$$1$$, $idx$$8$$ = 0, $len$$11$$ = this.$_invalid$.length, $idx$$8$$ = 0;$idx$$8$$ < $len$$11$$;$idx$$8$$++) {
      if ($firstInvalid$$1$$ = this.$_invalid$[$idx$$8$$]) {
        return this.$_tracked$[$idx$$8$$];
      }
    }
    return null;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_update$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_update$$($component$$6$$, $option$$21$$, $newMessages$$) {
    var $compValid$$ = $component$$6$$.call($component$$6$$, "isValid"), $trackedIndex$$ = -1;
    $$$$8$$.each(this.$_tracked$, function($index$$89$$, $item$$5$$) {
      0 > $trackedIndex$$ && $item$$5$$ === $component$$6$$ && ($trackedIndex$$ = $index$$89$$);
    });
    if ($newMessages$$) {
      0 > $trackedIndex$$ && ($trackedIndex$$ = this.$_tracked$.push($component$$6$$) - 1);
      this.$_updateInvalidTracker$(this.$_invalid$, $trackedIndex$$, !1);
      this.$_updateInvalidTracker$(this.$_invalidHidden$, $trackedIndex$$, !1);
      if (!$compValid$$) {
        switch($option$$21$$) {
          case "messagesShown":
            $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$($newMessages$$) && this.$_updateInvalidTracker$(this.$_invalid$, $trackedIndex$$ || 0, !0);
            break;
          case "messagesHidden":
            $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$($newMessages$$) && this.$_updateInvalidTracker$(this.$_invalidHidden$, $trackedIndex$$ || 0, !0);
        }
      }
      this.invalidShown = 0 <= this.$_invalid$.indexOf(!0);
      this.invalidHidden = 0 <= this.$_invalidHidden$.indexOf(!0);
      void 0 === this.$_updateCounter$ && (this.$_updateCounter$ = 0);
      this.$_updateCounter$++;
    }
    return!0;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_updateInvalidTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_updateInvalidTracker$$($arr$$21$$, $trackedIndex$$1$$, $value$$153$$) {
    0 <= $trackedIndex$$1$$ ? $arr$$21$$.splice($trackedIndex$$1$$, 1, $value$$153$$) : $arr$$21$$.push($value$$153$$);
  };
  $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$ = function $$oj$$8$$$$InvalidComponentTracker$$$_hasInvalidMessages$$($messages$$11$$) {
    return!$oj$$8$$.$Message$.isValid($messages$$11$$);
  };
  $oj$$8$$.$ValueBinding$ = function $$oj$$8$$$$ValueBinding$$() {
  };
  $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ = "invalidComponentTracker";
  $oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$ = "ojoptionchange";
  $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$ = "messagesShown";
  $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$ = "messagesHidden";
  $oj$$8$$.$ValueBinding$.$_afterCreate$ = function $$oj$$8$$$$ValueBinding$$$_afterCreate$$($property$$18$$, $element$$36$$, $component$$7$$, $optionsSet_valueAccessor$$10$$) {
    $optionsSet_valueAccessor$$10$$ = $optionsSet_valueAccessor$$10$$.call();
    $optionsSet_valueAccessor$$10$$[$property$$18$$] && $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($property$$18$$, $optionsSet_valueAccessor$$10$$, $element$$36$$, $component$$7$$);
    return{};
  };
  $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$ = function $$oj$$8$$$$ValueBinding$$$_updateInvalidComponentTracker$$($event$$44$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
    var $ictObs$$ = $event$$44$$.data.$tracker$, $icTracker$$ = $ko$$2$$.utils.unwrapObservable($ictObs$$), $component$$8$$ = $event$$44$$.data.$component$, $option$$22$$ = $JSCompiler_OptimizeArgumentsArray_p0$$.option, $msgs$$6$$ = $JSCompiler_OptimizeArgumentsArray_p0$$.value;
    ($option$$22$$ === $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$ || $option$$22$$ === $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$) && $ko$$2$$.isWriteableObservable($ictObs$$) && $icTracker$$.$_update$.call($icTracker$$, $component$$8$$, $option$$22$$, $msgs$$6$$) && $ictObs$$.valueHasMutated();
  };
  $oj$$8$$.$ValueBinding$.$_beforeDestroy$ = function $$oj$$8$$$$ValueBinding$$$_beforeDestroy$$($element$$37_jelem$$8$$) {
    ($element$$37_jelem$$8$$ = $$$$8$$($element$$37_jelem$$8$$)) && $element$$37_jelem$$8$$.off($oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$, $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$);
  };
  $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$ = function $$oj$$8$$$$ValueBinding$$$_registerInvalidComponentTrackerWriteback$$($ictObs$$1_property$$19$$, $icTracker$$1_options$$192$$, $element$$38_jElem$$, $component$$9_eventData$$4$$) {
    $ictObs$$1_property$$19$$ = $icTracker$$1_options$$192$$[$ictObs$$1_property$$19$$];
    var $messagesShown$$, $messagesHidden$$;
    $icTracker$$1_options$$192$$ = $ko$$2$$.utils.unwrapObservable($ictObs$$1_property$$19$$);
    $element$$38_jElem$$ = $$$$8$$($element$$38_jElem$$);
    if ($ko$$2$$.isObservable($ictObs$$1_property$$19$$)) {
      null == $icTracker$$1_options$$192$$ && ($icTracker$$1_options$$192$$ = new $oj$$8$$.$InvalidComponentTracker$, $ictObs$$1_property$$19$$($icTracker$$1_options$$192$$));
    } else {
      throw Error("Binding attribute " + $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ + " should be bound to a ko observable.");
    }
    null !== $icTracker$$1_options$$192$$ && ($ko$$2$$.isWriteableObservable($ictObs$$1_property$$19$$) && ($messagesShown$$ = $component$$9_eventData$$4$$.call($component$$9_eventData$$4$$, "option", $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$), $messagesHidden$$ = $component$$9_eventData$$4$$.call($component$$9_eventData$$4$$, "option", $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$), $icTracker$$1_options$$192$$.$_update$.call($icTracker$$1_options$$192$$, $component$$9_eventData$$4$$, 
    $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_SHOWN$, $messagesShown$$), $icTracker$$1_options$$192$$.$_update$.call($icTracker$$1_options$$192$$, $component$$9_eventData$$4$$, $oj$$8$$.$ValueBinding$.$_OPTION_MESSAGES_HIDDEN$, $messagesHidden$$), $ictObs$$1_property$$19$$.valueHasMutated()), $component$$9_eventData$$4$$ = {$tracker$:$ictObs$$1_property$$19$$, $component$:$component$$9_eventData$$4$$}, $element$$38_jElem$$.on($oj$$8$$.$ValueBinding$.$_EVENT_OPTIONCHANGE$, $component$$9_eventData$$4$$, 
    $oj$$8$$.$ValueBinding$.$_updateInvalidComponentTracker$));
  };
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"editableValue", attributes:[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$], afterCreate:$oj$$8$$.$ValueBinding$.$_afterCreate$, beforeDestroy:$oj$$8$$.$ValueBinding$.$_beforeDestroy$});
});
