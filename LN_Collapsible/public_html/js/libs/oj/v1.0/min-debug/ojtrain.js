define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$36$$, $$$$35$$) {
  (function() {
    $oj$$36$$.$__registerWidget$("oj.ojTrain", $$$$35$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selected:"", optionChange:null, beforeDeselect:null, deselect:null, beforeSelect:null, select:null}, $_stepNum$:0, $_stepArray$:null, _ComponentCreate:function() {
      this._super();
      var $i$$304_options$$329$$ = this.options, $stepTag_steps$$4$$ = $i$$304_options$$329$$.steps;
      this.$_stepNum$ = $stepTag_steps$$4$$.length;
      this.$_wrapper$ = $$$$35$$("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");
      this.$_wrapper$.appendTo(this.element);
      this.$_connectorWrapper$ = $$$$35$$("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");
      this.$_connectorWrapper$.appendTo(this.$_wrapper$);
      (this.$_stretch$ = 0 <= this.element.attr("class").indexOf("oj-train-stretch") ? !0 : !1) && this.$_connectorWrapper$.css("padding", "0 " + 100 / (2 * this.$_stepNum$) + "%");
      this.$_connector$ = $$$$35$$("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");
      this.$_connector$.appendTo(this.$_connectorWrapper$);
      this.$_stepList$ = $$$$35$$("\x3cul\x3e");
      this.$_stepList$.addClass("oj-train-step-list");
      this.$_connectorFill$ = $$$$35$$("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");
      this.$_connectorFill$.appendTo(this.$_connectorWrapper$);
      this.$_setupArray$();
      this.$_selectedIndex$ = this.$_getStepIndex$($i$$304_options$$329$$.selected);
      -1 === this.$_selectedIndex$ && (this.$_selectedIndex$ = 0, $i$$304_options$$329$$.selected = $stepTag_steps$$4$$[0].id);
      for ($i$$304_options$$329$$ = 0;$i$$304_options$$329$$ < this.$_stepNum$;$i$$304_options$$329$$++) {
        $stepTag_steps$$4$$ = $$$$35$$("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.$_stepArray$[$i$$304_options$$329$$][1]}), $stepTag_steps$$4$$.appendTo(this.$_stepList$), this.$_drawLabel$($i$$304_options$$329$$), this.$_drawStepFill$($i$$304_options$$329$$), this.$_drawButton$($i$$304_options$$329$$), this.$_drawMessageType$($i$$304_options$$329$$), this.$_stretch$ && $stepTag_steps$$4$$.css("width", 100 / this.$_stepNum$ + "%");
      }
      this.$_connectorFill$.css({width:(this.$_stepNum$ - 1 === this.$_selectedIndex$ ? 100 : 100 / (2 * (this.$_stepNum$ - 1)) + this.$_selectedIndex$ / (this.$_stepNum$ - 1) * 100) + "%"});
      this.$_stepList$.appendTo(this.$_wrapper$);
      this.element.addClass("oj-train");
    }, $_setupArray$:function() {
      var $options$$330$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$305$$ = 0;$i$$305$$ < this.$_stepNum$;$i$$305$$++) {
        var $step$$2$$ = $options$$330$$.steps[$i$$305$$];
        this.$_stepArray$[$i$$305$$] = Array(5);
        this.$_stepArray$[$i$$305$$][0] = $step$$2$$.label ? $step$$2$$.label : null;
        this.$_stepArray$[$i$$305$$][1] = $step$$2$$.id ? $step$$2$$.id : null;
        this.$_stepArray$[$i$$305$$][2] = $step$$2$$.disabled ? !0 : !1;
        this.$_stepArray$[$i$$305$$][3] = $step$$2$$.visited ? !0 : !1;
        this.$_stepArray$[$i$$305$$][4] = $step$$2$$.messageType ? $step$$2$$.messageType : null;
      }
    }, $_drawButton$:function($index$$201$$) {
      var $button$$1$$ = $$$$35$$("\x3cdiv/\x3e").addClass("oj-train-button"), $scrnRead$$ = $$$$35$$("\x3cspan/\x3e"), $self$$141$$ = this, $desc$$ = "";
      if (this.$_stepArray$[$index$$201$$]) {
        var $stepBackground_visited$$ = this.$_stepArray$[$index$$201$$][3], $disabled$$7$$ = this.$_stepArray$[$index$$201$$][2];
        this.$_selectedIndex$ === $index$$201$$ ? ($button$$1$$.addClass("oj-selected"), $desc$$ = " current ") : $stepBackground_visited$$ && !$disabled$$7$$ ? ($button$$1$$.addClass("oj-visited"), $desc$$ = " visited ") : $stepBackground_visited$$ || $disabled$$7$$ ? $button$$1$$.addClass("oj-disabled") : ($button$$1$$.addClass("oj-default"), $desc$$ = " not visited ");
        this.$_stepArray$[$index$$201$$][2] || this.$_selectedIndex$ === $index$$201$$ || (this._hoverable($button$$1$$), $button$$1$$.on("click" + this.eventNamespace, function() {
          $self$$141$$.$_fireOptionChange$("selected", $self$$141$$.options.selected, this.parentNode.parentNode.id, !0);
          $self$$141$$.refresh();
        }));
        $stepBackground_visited$$ = this.$_stepList$.children().eq($index$$201$$).find(".oj-train-button-connector");
        1 <= $stepBackground_visited$$.length && $stepBackground_visited$$.children().remove();
        $stepBackground_visited$$.append($button$$1$$);
        $scrnRead$$.text($desc$$);
        $scrnRead$$.addClass("oj-helper-hidden-accessible");
        this.$_stepList$.children().eq($index$$201$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$202$$) {
      var $icon$$4$$ = $$$$35$$("\x3cdiv/\x3e").addClass("oj-train-icon"), $scrnRead$$1$$ = $$$$35$$("\x3cspan/\x3e"), $desc$$1$$ = "", $self$$142$$ = this;
      if (this.$_stepArray$[$index$$202$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$202$$][4];
        "confirmation" === $messageType$$ ? ($icon$$4$$.addClass("oj-confirmation"), $desc$$1$$ = " Confirmation ") : "info" === $messageType$$ ? ($icon$$4$$.addClass("oj-info"), $desc$$1$$ = " Info ") : "error" === $messageType$$ ? ($icon$$4$$.addClass("oj-error"), $desc$$1$$ = " Error ") : "fatal" === $messageType$$ ? ($icon$$4$$.addClass("oj-error"), $desc$$1$$ = " Error ") : "warning" === $messageType$$ && ($icon$$4$$.addClass("oj-warning"), $desc$$1$$ = " Warning ");
        var $button$$2$$ = this.$_stepList$.children().eq($index$$202$$).find(".oj-train-button");
        1 <= $button$$2$$.children().length && $button$$2$$.children().remove();
        this.$_stepArray$[$index$$202$$][2] || this.$_selectedIndex$ === $index$$202$$ || (this._hoverable($icon$$4$$), $icon$$4$$.on("click" + this.eventNamespace, function() {
          $self$$142$$.$_fireOptionChange$("selected", $self$$142$$.options.selected, this.parentNode.parentNode.parentNode.id, !0);
          $self$$142$$.refresh();
        }));
        null != $messageType$$ && ($scrnRead$$1$$.text($desc$$1$$), $scrnRead$$1$$.addClass("oj-helper-hidden-accessible"), this.$_stepList$.children().eq($index$$202$$).find("a").append($scrnRead$$1$$), $button$$2$$.append($icon$$4$$));
      }
    }, $_fireOptionChange$:function($eventData$$17_key$$125$$, $previousValue$$10_stepIndex$$, $value$$226$$, $originalEvent$$7$$) {
      var $optionChangeData$$ = {option:$eventData$$17_key$$125$$, previousValue:$previousValue$$10_stepIndex$$, value:$value$$226$$, optionMetadata:{writeback:$originalEvent$$7$$ ? "shouldWrite" : "shouldNotWrite"}};
      $eventData$$17_key$$125$$ = {option:$eventData$$17_key$$125$$, fromStep:this.getStep($previousValue$$10_stepIndex$$), toStep:this.getStep($value$$226$$), optionMetadata:{writeback:$originalEvent$$7$$ ? "shouldWrite" : "shouldNotWrite"}};
      !1 !== this._trigger("beforeDeselect", null, $eventData$$17_key$$125$$) && !1 !== this._trigger("beforeSelect", null, $eventData$$17_key$$125$$) && ($previousValue$$10_stepIndex$$ = this.$_getStepIndex$($previousValue$$10_stepIndex$$), -1 !== $previousValue$$10_stepIndex$$ && (this.options.steps[$previousValue$$10_stepIndex$$].visited = !0), this._trigger("deselect", null, $eventData$$17_key$$125$$), this.options.selected = $value$$226$$, this._trigger("select", null, $eventData$$17_key$$125$$), 
      this._trigger("optionChange", $originalEvent$$7$$, $optionChangeData$$));
    }, $_drawStepFill$:function($index$$203_stepLi$$) {
      var $stepFill$$ = $$$$35$$("\x3cdiv/\x3e");
      $stepFill$$.addClass("oj-train-button-connector");
      this.$_stepArray$[$index$$203_stepLi$$] && ($index$$203_stepLi$$ <= this.$_selectedIndex$ && $stepFill$$.addClass("oj-train-fill"), $index$$203_stepLi$$ = this.$_stepList$.children().eq($index$$203_stepLi$$).children(), $stepFill$$.insertBefore($index$$203_stepLi$$));
    }, $_drawLabel$:function($index$$204$$) {
      var $self$$143$$ = this;
      if (this.$_stepArray$[$index$$204$$]) {
        var $labelWrapper$$ = $$$$35$$("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"), $label$$7_stepLi$$1$$ = $$$$35$$("\x3ca\x3e" + this.$_stepArray$[$index$$204$$][0] + "\x3c/a\x3e"), $disabled$$8$$ = this.$_stepArray$[$index$$204$$][2];
        $labelWrapper$$.append($label$$7_stepLi$$1$$);
        $label$$7_stepLi$$1$$.addClass("oj-train-label");
        $index$$204$$ === this.$_selectedIndex$ ? $label$$7_stepLi$$1$$.addClass("oj-selected") : this.$_stepArray$[$index$$204$$][3] && !$disabled$$8$$ ? $label$$7_stepLi$$1$$.addClass("oj-visited") : $disabled$$8$$ && $label$$7_stepLi$$1$$.addClass("oj-disabled");
        $disabled$$8$$ || this.$_selectedIndex$ === $index$$204$$ || ($label$$7_stepLi$$1$$.attr("href", "#"), this._hoverable($label$$7_stepLi$$1$$), $label$$7_stepLi$$1$$.on("click keydown" + this.eventNamespace, function($event$$388$$) {
          if ($event$$388$$.keyCode === $$$$35$$.ui.keyCode.ENTER || "click" === $event$$388$$.type) {
            $event$$388$$.preventDefault(), $self$$143$$.$_fireOptionChange$("selected", $self$$143$$.options.selected, this.parentNode.parentNode.id, !0), $self$$143$$.refresh();
          }
        }));
        $label$$7_stepLi$$1$$ = this.$_stepList$.children().eq($index$$204$$).children();
        1 <= $label$$7_stepLi$$1$$.length && $label$$7_stepLi$$1$$[0].remove();
        this.$_stepList$.children().eq($index$$204$$).append($labelWrapper$$);
      }
    }, $_getStepIndex$:function($id$$46$$) {
      for (var $i$$306$$ = 0;$i$$306$$ < this.$_stepNum$;$i$$306$$++) {
        if (this.$_stepArray$[$i$$306$$] && this.$_stepArray$[$i$$306$$][1] === $id$$46$$) {
          return $i$$306$$;
        }
      }
      return-1;
    }, getStep:function($id$$47$$) {
      for (var $i$$307$$ = 0;$i$$307$$ < this.$_stepNum$;$i$$307$$++) {
        if (this.$_stepArray$[$i$$307$$] && this.$_stepArray$[$i$$307$$][1] === $id$$47$$) {
          return jQuery.extend({}, this.options.steps[$i$$307$$]);
        }
      }
      return null;
    }, nextSelectableStep:function() {
      for (var $i$$308$$ = this.$_selectedIndex$;$i$$308$$ < this.$_stepNum$;$i$$308$$++) {
        if ($i$$308$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$308$$ + 1] && !this.$_stepArray$[$i$$308$$ + 1][2]) {
          return this.$_stepArray$[$i$$308$$ + 1][1];
        }
      }
      return null;
    }, previousSelectableStep:function() {
      for (var $i$$309$$ = this.$_selectedIndex$;0 <= $i$$309$$;$i$$309$$--) {
        if (this.$_stepArray$[$i$$309$$ - 1] && !this.$_stepArray$[$i$$309$$ - 1][2]) {
          return this.$_stepArray$[$i$$309$$ - 1][1];
        }
      }
      return null;
    }, setStep:function($stepProperties$$) {
      if ($stepProperties$$.id) {
        var $stepInfo$$ = this.getStep($stepProperties$$.id), $stepIndex$$1_stepObj$$ = this.$_getStepIndex$($stepProperties$$.id);
        -1 !== $stepIndex$$1_stepObj$$ && ($stepIndex$$1_stepObj$$ = this.options.steps[$stepIndex$$1_stepObj$$], $stepProperties$$.label && ($stepInfo$$[0] = $stepProperties$$.label, $stepIndex$$1_stepObj$$.label = $stepProperties$$.label), "boolean" === typeof $stepProperties$$.disabled && ($stepInfo$$[2] = $stepProperties$$.disabled, $stepIndex$$1_stepObj$$.disabled = $stepProperties$$.disabled), "boolean" === typeof $stepProperties$$.visited && ($stepInfo$$[3] = $stepProperties$$.visited, $stepIndex$$1_stepObj$$.visited = 
        $stepProperties$$.visited), $stepProperties$$.messageType && ($stepInfo$$[4] = $stepProperties$$.messageType, $stepIndex$$1_stepObj$$.messageType = $stepProperties$$.messageType));
      }
    }, _setOption:function($key$$126$$, $value$$227$$, $flags$$43$$) {
      if ("selected" === $key$$126$$) {
        var $oldValue$$ = this.options.selected;
        this.options.selected = $value$$227$$;
        $oldValue$$ && this.$_fireOptionChange$("selected", $oldValue$$, $value$$227$$, !0);
      }
      this._super($key$$126$$, $value$$227$$, $flags$$43$$);
    }, _setOptions:function($options$$331$$) {
      this._super($options$$331$$);
      this.refresh();
    }, refresh:function() {
      this._super();
      this._destroy();
      this._ComponentCreate();
    }, _destroy:function() {
      this.element.removeClass("oj-train oj-train-bar oj-train-wrapper oj-train-connector-wrapper oj-train-connector oj-train-connector-fill oj-train-fill oj-component-initnode");
      this.$_wrapper$.remove();
      this.$_connectorWrapper$.remove();
      this.$_connector$.remove();
      this.$_connectorFill$.remove();
      this.$_stepList$.remove();
      this.$_stepList$.children().each(function() {
        $$$$35$$(this).remove();
      });
      this._super();
    }, getNodeBySubId:function($locator$$28$$) {
      if (null === $locator$$28$$) {
        return this.element ? this.element[0] : null;
      }
      var $index$$205$$ = $locator$$28$$.index;
      if ("number" !== typeof $index$$205$$ || 0 > $index$$205$$ || $index$$205$$ >= this.$_stepNum$) {
        return null;
      }
      switch($locator$$28$$.subId) {
        case "oj-train-button":
          return this.$_stepList$.children().eq($index$$205$$).find(".oj-train-button");
        case "oj-train-button-connector":
          return this.$_stepList$.children().eq($index$$205$$).find(".oj-train-button-connector");
        case "oj-train-connector":
          return this.$_connector$;
        case "oj-train-connector-fill":
          return this.$_connectorFill$;
        case "oj-train-icon":
          return this.$_stepList$.children().eq($index$$205$$).find(".oj-train-icon");
        case "oj-train-label":
          return this.$_stepList$.children().eq($index$$205$$).find(".oj-train-button");
      }
      return null;
    }});
  })();
});
