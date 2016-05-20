define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$35$$, $ko$$4$$) {
  $oj$$35$$.$KnockoutUtils$ = function $$oj$$35$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$35$$.$KnockoutUtils$, $oj$$35$$);
  $oj$$35$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$35$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$35$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$35$$.$KnockoutUtils$.map = function $$oj$$35$$$$KnockoutUtils$$map$($m$$27$$, $callback$$106$$, $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$224$$) {
        $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] || $m$$27$$.set($argProp$$, $value$$224$$);
      };
    }
    var $koObject$$, $i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$27$$ instanceof $oj$$35$$.$Collection$) {
      $koObject$$ = $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$ ? $ko$$4$$.observableArray() : [];
      $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$27$$);
      for ($i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$ = 0;$i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$ < $m$$27$$.$_getLength$();$i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$ += 1) {
        $koObject$$.push($oj$$35$$.$KnockoutUtils$.map($m$$27$$.$_atInternal$($i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$, null, !0, !1), $callback$$106$$));
      }
      $i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$ = function $$i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$$($changes$$4$$) {
        var $i$$301$$;
        try {
          if (!$koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$301$$ = 0;$i$$301$$ < $changes$$4$$.length;$i$$301$$++) {
              var $index$$198$$ = $changes$$4$$[$i$$301$$].index, $model$$78$$ = $oj$$35$$.$KnockoutUtils$.$_getModel$($changes$$4$$[$i$$301$$].value), $status$$15$$ = $changes$$4$$[$i$$301$$].status;
              "added" === $status$$15$$ ? $index$$198$$ >= $m$$27$$.length - 1 ? $m$$27$$.add($model$$78$$) : $m$$27$$.add($model$$78$$, {at:$index$$198$$}) : "deleted" === $status$$15$$ && $m$$27$$.$_removeInternal$($model$$78$$, $index$$198$$);
            }
            $m$$27$$.comparator && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$88$$, $b$$54$$) {
              return $oj$$35$$.$KnockoutUtils$.$_callSort$($a$$88$$, $b$$54$$, $m$$27$$.comparator, $m$$27$$, this);
            }), $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$137$$) {
          throw $e$$137$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && $koObject$$.subscribe($i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$, null, "arrayChange");
      $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$ = function $$array$$15_data$$166_updateObservable_updateObservableArrayRemove$$$($model$$79$$, $collection$$54$$, $options$$324$$) {
        var $index$$199$$;
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$54$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$199$$ = $options$$324$$.index, $koObject$$.splice($index$$199$$, 1));
        } catch ($e$$138$$) {
          throw $e$$138$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$ = function $$i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$$($model$$80$$, $collection$$55$$, $options$$325$$) {
        var $index$$200$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$55$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$200$$ = $collection$$55$$.$_localIndexOf$($model$$80$$), void 0 !== $index$$200$$ && -1 < $index$$200$$)) {
            if ($newObservable$$ = $oj$$35$$.$KnockoutUtils$.map($model$$80$$, $callback$$106$$), $options$$325$$.fillIn) {
              for (var $i$$302$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$302$$ < $index$$200$$;$i$$302$$++) {
                $koObject$$.splice($i$$302$$, 0, $oj$$35$$.$KnockoutUtils$.map($collection$$55$$.$_atInternal$($i$$302$$, null, !0, !1), $callback$$106$$));
              }
              $koObject$$.splice($index$$200$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$200$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$139$$) {
          throw $e$$139$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_updateObservableArrayReset$$ = function $$converted_updateObservableArrayReset$$$($collection$$56$$) {
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$56$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$4$$.isObservable($koObject$$) ? $koObject$$.removeAll() : $koObject$$ = []);
        } catch ($e$$140$$) {
          throw $e$$140$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$57$$) {
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$57$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$89$$, $b$$55$$) {
            return $oj$$35$$.$KnockoutUtils$.$_callSort$($a$$89$$, $b$$55$$, $m$$27$$.comparator, $collection$$57$$, this);
          }));
        } catch ($e$$141$$) {
          throw $e$$141$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.ADD, $i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.REMOVE, $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.RESET, $converted_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$27$$) {
        return;
      }
      $koObject$$ = {};
      $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$ = $m$$27$$.attributes;
      $i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$ in $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$) {
        $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$) && ($converted_updateObservableArrayReset$$ = $ko$$4$$.observable($m$$27$$.get($i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$] = $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = $_makeUpdateModel$$($i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$), 
        $updateModel_updateObservableArraySort$$.$_prop$ = $i$$300_prop$$82_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$.subscribe && $converted_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$ = function $$array$$15_data$$166_updateObservable_updateObservableArrayRemove$$$($model$$81$$) {
        var $attrs$$20$$, $prop$$83$$;
        try {
          for ($prop$$83$$ in $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$20$$ = $model$$81$$.$changedAttributes$(), $attrs$$20$$) {
            if ($attrs$$20$$.hasOwnProperty($prop$$83$$)) {
              $koObject$$[$prop$$83$$]($model$$81$$.get($prop$$83$$));
            }
          }
        } catch ($e$$142$$) {
          throw $e$$142$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.CHANGE, $array$$15_data$$166_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$27$$);
      $callback$$106$$ && $callback$$106$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$35$$.$KnockoutUtils$.map, $oj$$35$$);
  $oj$$35$$.$KnockoutUtils$.$_getModels$ = function $$oj$$35$$$$KnockoutUtils$$$_getModels$$($arr$$24$$) {
    var $modelArray$$2$$ = [], $i$$303$$, $model$$82$$;
    for ($i$$303$$ = 0;$i$$303$$ < $arr$$24$$.length;$i$$303$$ += 1) {
      $model$$82$$ = $oj$$35$$.$KnockoutUtils$.$_getModel$($arr$$24$$[$i$$303$$]), $modelArray$$2$$.push($model$$82$$);
    }
    return $modelArray$$2$$;
  };
  $oj$$35$$.$KnockoutUtils$.$_getModel$ = function $$oj$$35$$$$KnockoutUtils$$$_getModel$$($val$$60$$) {
    return $val$$60$$ instanceof $oj$$35$$.$Model$ ? $val$$60$$ : $val$$60$$.hasOwnProperty($oj$$35$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$60$$[$oj$$35$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$60$$;
  };
  $oj$$35$$.$KnockoutUtils$.$_callSort$ = function $$oj$$35$$$$KnockoutUtils$$$_callSort$$($a$$90$$, $b$$56$$, $comparator$$16$$, $collection$$58$$, $caller$$8$$) {
    return $oj$$35$$.$Collection$.$SortFunc$($oj$$35$$.$KnockoutUtils$.$_getModel$($a$$90$$), $oj$$35$$.$KnockoutUtils$.$_getModel$($b$$56$$), $comparator$$16$$, $collection$$58$$, $caller$$8$$);
  };
  $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$35$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$7$$, $value$$225$$) {
    Object.defineProperty($object$$7$$, $oj$$35$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$225$$, enumerable:!1});
  };
});
