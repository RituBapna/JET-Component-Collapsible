define({
      'oj-message' : 
      {
        'fatal' : '치명적',
        'error': '오류',
        'warning': '경고',
        'info' : '정보',
        'confirmation' : '확인',
        'compact-type-summary': '{0}: {1}'
      },
      'oj-converter': 
      {
        'summary': '값이 예상된 형식이 아닙니다.',
        'detail': '예상된 형식으로 값을 입력하십시오.',
        'plural-separator' : ", ",

        
        // when we want to show a hint. 
        'hint': {
          'summary': "예: {exampleValue}",
          'detail': "다음 예와 동일한 형식으로 값을 입력하십시오. 예: '{exampleValue}'",
          'detail-plural': "다음 예와 동일한 형식으로 값을 입력하십시오. 예: '{exampleValue}'"
        },
        
        // when the option values are not what we expected and we tell users what values we accept
        'optionHint' : {
          'detail': "'{propertyName}' 옵션에 허용되는 값은 '{propertyValueValid}'입니다.",
          'detail-plural': "'{propertyName}' 옵션에 허용되는 값은 '{propertyValueValid}'입니다."
        },

        // when converter options are incorrect
        'optionTypesMismatch': {
          'summary': "'{propertyName}' 옵션이 '{propertyValue}'(으)로 설정되었으면 '{requiredPropertyName}' 옵션에 대한 값이 필수입니다."
        },
        'optionTypeInvalid': {
          'summary': "'{propertyName}' 옵션에 대해 예상된 유형의 값이 제공되지 않았습니다."
        },
        'optionOutOfRange': {
          'summary': "'{propertyName}' 옵션에 대한 {propertyValue} 값이 범위를 벗어납니다."
        },
        'optionValueInvalid': {
          'summary': "'{propertyName}' 옵션에 대해 부적합한 값 '{propertyValue}'이(가) 지정되었습니다."
        },

        'number': {
          // when the the value fails number conversion
          'decimalFormatMismatch': {
            'summary': "10진수 '{value}'이(가) 예상된 형식이 아닙니다."
          },
          'currencyFormatMismatch': {
            'summary': "통화 '{value}'이(가) 예상된 형식이 아닙니다."
          },
          'percentFormatMismatch' : {
            'summary': "백분율 '{value}'이(가) 예상된 형식이 아닙니다."
          }
        },
        'datetime': {
          // when the the value fails date time conversion
          'datetimeOutOfRange': {
            'summary': "'{value}' 값이 '{propertyName}'의 범위를 벗어납니다.",
            'detail': "'{minValue}'~'{maxValue}' 사이의 값을 입력하십시오."
          },
          'dateFormatMismatch': {
            'summary': "날짜 '{value}'이(가) 예상된 형식이 아닙니다."
          },
          'timeFormatMismatch': {
            'summary': "시간 '{value}'이(가) 예상된 형식이 아닙니다."
          },
          'datetimeFormatMismatch': {
            'summary': "날짜 및 시간 '{value}'이(가) 예상된 형식이 아닙니다."
          },
          'dateToWeekdayMismatch' : {
            'summary': "일자 '{date}'이(가) '{weekday}'에 포함되지 않습니다.",
            'detail' : "날짜와 일치하는 요일을 입력하십시오."
          }
        }
      },
      // translations used by the validators 
      'oj-validator': 
      {
        'length' :
        {
          'range':
          {
            'summary' : '문자 수가 범위를 벗어납니다.',
            'detail' : '문자 수는 {min}~{max} 사이여야 합니다.',
            'hint' : '{min} 이상 최대 {max}까지 문자를 입력하십시오.'
          },
          'min':
          {
            'summary' : '문자 수가 너무 적습니다.',
            'detail' : '{min}자 이상(그 이하는 안됨)을 입력하십시오.',
            'hint' : '{min}자 이상을 입력하십시오.'
          },
          'max':
          {
            'summary' : '문자 수가 너무 많습니다.',
            'detail' : '{max}자 이하(그 이상은 안됨)를 입력하십시오.',
            'hint' : '{max}자 이하를 입력하십시오.'
          },
          'exact': 
          {
            'summary': '문자 수가 잘못되었습니다.',
            'detail': '정확히 {length}자를 입력하십시오.',
            'hint': '{length}자를 입력하십시오.'
          }

        },
        'range':
        {
          'number': 
          {
            'range':
            {
              'summary' : '숫자가 범위를 벗어납니다.',
              'detail' : '숫자 {value}은(는) {min}~{max} 사이여야 합니다.',
              'hint' : '{min}~{max} 사이의 숫자를 입력하십시오.'
            },
            'min':
            {
              'summary' : '숫자가 너무 낮습니다.',
              'detail' : '숫자 {value}은(는) {min}보다 크거나 같아야 합니다.',
              'hint' : '{min}보다 크거나 같은 숫자를 입력하십시오.'
            },
            'max':
            {
              'summary' : '숫자가 너무 높습니다.',
              'detail' : '숫자 {value}은(는) {max}보다 작거나 같아야 합니다.',
              'hint' : '{max}보다 작거나 같은 숫자를 입력하십시오.'
            }
          },
          'datetime': 
          {
            'range':
            {
              'summary' : '날짜 및 시간이 범위를 벗어납니다.',
              'detail' : '날짜 및 시간은 {min}~{max} 사이여야 합니다.',
              'hint' : '{min}~{max} 사이의 날짜 및 시간을 입력하십시오.'
            },
            'min':
            {
              'summary': '날짜 및 시간이 최소 날짜보다 이전입니다.',
              'detail' : '날짜 및 시간은 {min} 또는 이후여야 합니다.',
              'hint' : '{min} 또는 이후의 날짜 및 시간을 입력하십시오.'
            },
            'max':
            {
              'summary' : '날짜 및 시간이 최대 날짜보다 이후입니다.',
              'detail' : '날짜 및 시간은 {max} 또는 이전이어야 합니다.',
              'hint' : '{max} 또는 이전의 날짜 및 시간을 입력하십시오.'
            }
          }
        },
        'restriction':
        {
          'date': 
          {
            'dayMetaData':
            {
              'summary': '날짜가 사용 안함으로 설정된 항목의 날짜입니다.',
              'detail': '날짜 {value}은(는) 사용 안함으로 설정된 항목의 날짜가 아니어야 합니다.'
            }
          }
        },
        'regExp': 
        {
          'summary': "형식이 잘못되었습니다.",
          'detail': "값 '{value}'은(는) 이 패턴 '{pattern}'과(와) 일치해야 합니다."
        },
        'required':
        {
          'summary': '값이 필요합니다.',
          'detail': '값을 입력해야 합니다.'
        }
      },
	  
      'oj-ojInputDate':
      {
        'closeText': '완료',
        'prevText': '이전',
        'nextText': '다음',
        'currentText': '오늘',
        'weekHeader': '주',
        'weekText': "주",
        'datePicker': '날짜 선택기',
        'inputHelp': '달력에 액세스하려면 아래로 키 또는 위로 키를 누르십시오.',
        'inputHelpBoth': '달력에 액세스하려면 아래로 키 또는 위로 키를 누르고 시간 드롭다운에 액세스하려면 Shift + 아래로 키 또는 Shift + 위로 키를 누르십시오.'
      },

      'oj-ojInputTime':
      {
        'inputHelp': '시간 드롭다운에 액세스하려면 아래로 키 또는 위로 키를 누르십시오.'
      },

      'oj-ojDataGrid':
      {
        'accessibleSortAscending': '{id}이(가) 오름차순으로 정렬됨',
        'accessibleSortDescending': '{id}이(가) 내림차순으로 정렬됨',
        'accessibleActionableMode': '작업 가능 모드 입력',
        'accessibleNavigationMode': '탐색 모드 입력',
        'accessibleSummaryExact': '{rownum} 행 및 {colnum} 열이 포함된 데이터 그리드입니다.',
        'accessibleSummaryEstimate': '알 수 없는 행 및 열 수를 포함하는 데이터 그리드입니다.',
        'accessibleSummaryExpanded' : '현재 {num}개 행이 확장되었습니다.',
        'accessibleRowExpanded': '행 확장',
        'accessibleRowCollapsed': '행 축소',
        'accessibleStateSelected': '선택됨',
        'accessibleMultiCellSelected': '{num}개 셀 선택됨',
        'msgFetchingData': '데이터 인출 중...',
        'msgNoData': '표시할 데이터가 없습니다.',
        'labelResize': '크기 조정',
        'labelResizeWidth': '너비 크기 조정',
        'labelResizeHeight': '높이 크기 조정',
        'labelSortRow': '행 정렬',
        'labelSortRowAsc': '행 정렬 오름차순',
        'labelSortRowDsc': '행 정렬 내림차순',
        'labelSortCol': '정렬 열',
        'labelSortColAsc': '열 정렬 오름차순',
        'labelSortColDsc': '열 정렬 내림차순',
        'labelCut': '잘라내기',
        'labelPaste': '붙여넣기'
      },
      'oj-ojRowExpander':
      {
        'accessibleRowDescription': '레벨 {level}, {num}/{total}',
        'accessibleRowExpanded': '행 확장',
        'accessibleRowCollapsed': '행 축소'
      },
      'oj-_ojLabel' :
      {
        'tooltipHelp':'도움말',
        'tooltipRequired':'필수'
      },
      'oj-ojInputNumber' :
      {
        'tooltipDecrement':'감소',
        'tooltipIncrement':'증가'
      },
      // translations used by the table component 
      'oj-ojTable': 
      {
        'labelSelectRow':'행 선택',
        'labelSelectColumn':'열 선택',
        'labelSort': '정렬',
		    'labelSortAsc': '오름차순 정렬',
		    'labelSortDsc': '내림차순 정렬',
        'msgFetchingData':'데이터 인출 중...',
        'msgNoData':'표시할 데이터가 없습니다.',
      },

      'oj-ojTabs':
      {
        'removeCueText': '제거 가능'
      },

      'oj-ojSelect':
      {
        'noMatchesFound': '일치 항목을 찾을 수 없습니다.'
      },

      'oj-ojTree':
      {
		'm_loading': '로드 중...',
		'm_newnode': '새 노드',
		'm_multisel': '다중 선택',
		'm_edit': '편집',
		'm_create': '생성',
		'm_cut': '잘라내기',
		'm_copy': '복사',
		'm_paste': '붙여넣기',
		'm_remove': '제거',
		'm_rename': '이름 바꾸기',
		'm_emptyText': '데이터 없음'
      },

      'oj-ojPagingControl': 
      {
        'labelAccPaging': '페이지 번호 매김',
        'labelAccNavFirstPage': '첫번째 페이지',
        'labelAccNavLastPage': '마지막 페이지',
        'labelAccNavNextPage': '다음 페이지',
        'labelAccNavPreviousPage': '이전 페이지',
        'labelAccNavPage': '페이지',
        'labelLoadMore':'추가 정보 표시...',
        'labelNavInputPage':'페이지',
        'labelNavInputPageMax':'/{pageMax}',
        'labelNavInputPageSummary':'({pageSummary})',
        'msgItemRange':'{pageFrom}-{pageTo}/{pageTotal} 항목',
        'msgItemRangeUnknown':'{pageFrom}-{pageTo} 항목',
        'tipNavInputPage':'페이지로 이동',
        'tipNavPageLink':'{pageNum} 페이지로 이동',
        'tipNavNextPage':'다음',
        'tipNavPreviousPage':'이전',
        'tipNavFirstPage':'첫번째',
        'tipNavLastPage':'마지막',
        
        'pageInvalid':
        {
          'summary': '입력된 페이지 값이 부적합합니다.',
          'detail': '0보다 큰 값을 입력하십시오.'
        },
        
        'maxPageLinksInvalid':
        {
          'summary': 'maxPageLinks 값이 부적합합니다.',
          'detail': '4보다 큰 값을 입력하십시오.'
        }
      },
      
      // DVT Components
      'oj-ojChart': {
        'labelDefaultGroupName': '그룹 {groupName}',
        'labelSeries': '계열: {seriesName}',
        'labelGroup': '그룹: {groupName}',
        'labelValue': '값: {value}',
        'labelTargetValue': '대상: {targetValue}',
        'labelX': 'X: {x}',
        'labelY': 'Y: {y}',
        'labelZ': 'Z: {z}',
        'labelLow': '낮음: {low}',
        'labelHigh': '높음: {high}',
        'labelOther': '기타',
        
        'tooltipPan': '이동',
        'tooltipSelect': '움직이는 텍스트 선택',
        'tooltipZoom': '움직이는 텍스트 확대/축소'
      },
      'oj-ojSunburst': {
        'labelColor': '색상',
        'labelSize': '크기'
      },
      'oj-ojTreemap': {
        'labelColor': '색상',
        'labelSize': '크기'
      },
      'oj-dvtBaseComponent': {
        'labelClearSelection': '선택 지우기',
        'labelScalingSuffixThousand': 'K',
        'labelScalingSuffixMillion': 'M',
        'labelScalingSuffixBillion': 'B',
        'labelScalingSuffixTrillion': 'T',
        'labelScalingSuffixQuadrillion': 'Q',
        
        'msgNoData': '표시할 데이터 없음',
        
        'notReadyToRender': {
          'summary': "이 구성 요소는 렌더링 이전에 DOM의 표시 가능한 하위 트리에 연결되어 있어야 합니다."
        },
        
        'stateSelected': '선택됨',
        'stateUnselected': '선택 취소됨',
        'stateMaximized': '최대화됨',
        'stateMinimized': '최소화됨',
        'stateExpanded': '확장됨',
        'stateCollapsed': '축소됨',
        'stateIsolated': '분리됨',
        'stateHidden': '숨김',
        'stateVisible': '표시 가능'
      },
      'oj-ojPopup': {
        'ariaLiveRegionInitialFocusFirstFocusable': '팝업 입력. F6를 눌러 팝업과 연관된 제어 사이를 이동합니다.',
        'ariaLiveRegionInitialFocusNone': '팝업 열림. F6를 눌러 팝업과 연관된 제어 사이를 이동합니다.'
      }
});
