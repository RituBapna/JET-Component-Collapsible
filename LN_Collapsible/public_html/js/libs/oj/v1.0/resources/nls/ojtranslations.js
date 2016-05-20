define({
'root': {
      'oj-message' : 
      {
        'fatal' : 'Fatal',
        'error': 'Error',
        'warning': 'Warning',
        'info' : 'Info',
        'confirmation' : 'Confirmation',
        'compact-type-summary': '{0}: {1}'
      },
      
      'oj-converter': 
      {
        'summary': 'Value is not in the expected format.',
        'detail': 'Enter a value in the expected format.',
        'plural-separator' : ", ",

        
        // when we want to show a hint. 
        'hint': {
          'summary': "Example: {exampleValue}",
          'detail': "Enter a value in the same format as this example: '{exampleValue}'",
          'detail-plural': "Enter a value in the same format as these examples: '{exampleValue}'"
        },
        
        // when the option values are not what we expected and we tell users what values we accept
        'optionHint' : {
          'detail': "An accepted value for option '{propertyName}' is '{propertyValueValid}'.",
          'detail-plural': "Accepted values for option '{propertyName}' are '{propertyValueValid}'."
        },

        // when converter options are incorrect
        'optionTypesMismatch': {
          'summary': "A value for the option '{requiredPropertyName}' is required when the option '{propertyName}' is set to '{propertyValue}'."
        },
        'optionTypeInvalid': {
          'summary': "A value of the expected type was not provided for option '{propertyName}'."
        },
        'optionOutOfRange': {
          'summary': "Value {propertyValue} is out of range for the option '{propertyName}'."
        },
        'optionValueInvalid': {
          'summary': "An invalid value '{propertyValue}' was specified for the option '{propertyName}'."
        },

        'number': {
          // when the the value fails number conversion
          'decimalFormatMismatch': {
            'summary': "Decimal '{value}' is not in the expected format."
          },
          'currencyFormatMismatch': {
            'summary': "Currency '{value}' is not in the expected format."
          },
          'percentFormatMismatch' : {
            'summary': "Percent '{value}' is not in the expected format."
          }
        },
        'datetime': {
          // when the the value fails date time conversion
          'datetimeOutOfRange': {
            'summary': "Value '{value}' is out of range for the '{propertyName}'.",
            'detail': "Enter a value between '{minValue}' and '{maxValue}'."
          },
          'dateFormatMismatch': {
            'summary': "Date '{value}' is not in the expected format."
          },
          'timeFormatMismatch': {
            'summary': "Time '{value}' is not in the expected format."
          },
          'datetimeFormatMismatch': {
            'summary': "Date and time '{value}' is not in the expected format."
          },
          'dateToWeekdayMismatch' : {
            'summary': "Day '{date}' does not fall on a '{weekday}'.",
            'detail' : "Enter a weekday that corresponds with the date."
          }
        }
      },
      
      // translations used by the validators 
      'oj-validator': 
      {
        'length' :
        {
            'hint' :
            {
              'min' : 'Enter {min} or more characters.',
              'max' : 'Enter {max} or fewer characters',
              'inRange' : 'Enter {min} or more characters, up to a maximum of {max}.',
              'exact' : 'Enter {length} characters.',
            },
            'messageDetail':
            {
              'tooShort' : 'Enter {min} or more characters, not fewer.',
              'tooLong' : 'Enter {max} or fewer characters, not more.'

            }, 
            'messageSummary':
            {
              'tooShort' : 'There are too few characters.',
              'tooLong' : 'There are too many characters.'
            }
        },
        'range':
        {
          'number': 
          {
            'hint' :
            {
              'min' : 'Enter a number greater than or equal to {min}.',
              'max' : 'Enter a number less than or equal to {max}.',
              'inRange' : 'Enter a number between {min} and {max}.'
            },
            'messageDetail':
            {
              'rangeUnderflow' : 'Number {value} must be greater than or equal to {min}.',
              'rangeOverflow' : 'Number {value} must be less than or equal to {max}.'

            }, 
            'messageSummary':
            {
              'rangeUnderflow' : 'Number is too low.',
              'rangeOverflow' : 'Number is too high.'
            }            
          },
          'datetime': 
          {
            'hint' :
            {
              'min' : 'Enter a date and time on or after {min}.',
              'max' : 'Enter a date and time on or before {max}.',
              'inRange' : 'Enter a date and time between {min} and {max}.'
            },
            'messageDetail':
            {
              'rangeUnderflow' : 'Date and time must be on or later than {min}.',
              'rangeOverflow' : 'Date and time must be on or sooner than {max}.'

            }, 
            'messageSummary':
            {
              'rangeUnderflow' : 'Date and time is earlier than the minimum date.',
              'rangeOverflow' : 'Date and time is later than the maximum date.'
            }
          }
        },
        'restriction':
        {
          'date': 
          {
            'messageSummary': 'Date {value} is of a disabled entry.',
            'messageDetail': 'Date {value} should not be of a disabled entry.'
          }
        },
        'regExp': 
        {
          'summary': "Format is incorrect.",
          'detail': "Value '{value}' must match this pattern: '{pattern}'"
        },
        'required':
        {
          'summary': 'Value is required.',
          'detail': 'You must enter a value.'
        }
      },
      
      'oj-editableValue':
      {
          /**
           * <p>Provides properties to customize the summary, detail and hint text used by the 
           * implicit required validator associated to any editable component.
           * 
           * <p>See the <a href="#translations">translations</a> option and 
           * <a href="#required">required</a> option for usage examples.
           * 
           * @alias translations.required
           * @memberof! oj.editableValue
           * @instance
           * @type {?Object}
           * @since 0.7
           */  
        'required': 
        {
          /**
           * <p>Hint text used by required validation error.
           * 
           * <p>See the <a href="#translations">translations</a> option for usage examples.
           * 
           * @alias translations.required.hint
           * @memberof! oj.editableValue
           * @instance
           * @type {?string}
           * @default <code class="prettyprint">""</code>
           * @see oj.RequiredValidator
           * @since 0.7
           */               
          'hint': '',
          
          /**
           * <p>Message text for summarizing a required validation error.
           * 
           * <p>See the <a href="#translations">translations</a> option for usage examples.
           * 
           * @alias translations.required.messageSummary
           * @memberof! oj.editableValue
           * @instance
           * @type {?string}
           * @default <code class="prettyprint">""</code>
           * @see oj.RequiredValidator
           * @since 0.7
           */          
          'messageSummary': '',
          
          /**
           * <p>Message text that describes the details of the required validation error.
           * 
           * <p>See the <a href="#translations">translations</a> option for usage examples.
           * 
           * @alias translations.required.messageDetail
           * @memberof! oj.editableValue
           * @instance
           * @type {?string}
           * @default <code class="prettyprint">""</code>
           * @see oj.RequiredValidator
           * @since 0.7
           */               
          'messageDetail': ''
        }
      },
      'oj-ojInputDate':
      {
        /**
         * <p>The text to display for the previous month link.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.prevText
         * @memberof! oj.ojInputDate
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">"Prev"</code>
         * @since 0.7
         */
        'prevText': 'Prev',
        /**
         * <p>The text to display for the next month link.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.nextText
         * @memberof! oj.ojInputDate
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">"Next"</code>
         * @since 0.7
         */
        'nextText': 'Next',
        /**
         * <p>The text to display for the current day link.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.currentText
         * @memberof! oj.ojInputDate
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">"Today"</code>
         * @since 0.7
         */
        'currentText': 'Today',
        /**
         * <p>The text to display for the week of the year column heading.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.weekHeader
         * @memberof! oj.ojInputDate
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">"Wk"</code>
         * @since 0.7
         */
        'weekHeader': 'Wk',
        'weekText': "Week",
        'datePicker': 'Date Picker',
        'inputHelp': 'Press Key down or Key up for access to Calendar',
        'inputHelpBoth': 'Press Key down or Key up for access to Calendar and Shift + Key down or Shift Key up for access to time drop down',
        
        /**
         * <p>Provides properties to customize the hint and message text used by the 
         * implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.dateTimeRange
         * @memberof! oj.ojInputDate
         * @instance
         * @type {?Object}
         * @since 0.7
         */
        'dateTimeRange':
        {
          /**
           * <p>Provides properties to customize the hint text used by the 
            * implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.dateTimeRange.hint
            * @memberof! oj.ojInputDate
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'hint': 
          {
            /**
             * <p>Hint text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components. 
             * hint.min is shown when min is set and max is not set, and is used 
             * to tell the user the allowed minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.hint.min
             * @memberof! oj.ojInputDate
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'min': '',
            /**
             * <p>Hint text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * hint.max is shown when max is set and min is not set, and is used 
             * to tell the user the allowed maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.hint.max
             * @memberof! oj.ojInputDate
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'max': '',
            /**
             * <p>Hint text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * hint.inRange is shown when both min and max are set, and is used 
             * to tell the user the allowed number range.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.hint.inRange
             * @memberof! oj.ojInputDate
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'inRange': ''
          },
          /**
           * <p>Provides properties to customize the error message text used by the 
            * implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.dateTimeRange.messageDetail
            * @memberof! oj.ojInputDate
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageDetail': 
          {
            /**
             * <p>Error message text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * messageDetail.rangeUnderflow is shown when min is set, and the
             * value is less than the minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.messageDetail.rangeUnderflow
             * @memberof! oj.ojInputDate
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'rangeUnderflow': '',
            /**
             * <p>Error message text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * messageDetail.rangeOverflow is shown when max is set, and the
             * value is greater than the maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.messageDetail.rangeOverflow
             * @memberof! oj.ojInputDate
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'rangeOverflow': ''
          },
           /**
           * <p>Provides properties to customize the error message summary text used by the 
            * implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.dateTimeRange.messageSummary
            * @memberof! oj.ojInputDate
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageSummary': 
          {
            /**
             * <p>Error message summary text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * messageSummary.rangeUnderflow is shown when min is set, and
             * the value is less than the minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.messageSummary.rangeUnderflow
             * @memberof! oj.ojInputDate
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'rangeUnderflow': '',
            /**
             * <p>Error message summary text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * messageSummary.rangeOverflow is shown when max is set, and the
             * value is greater than the maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.messageSummary.rangeOverflow
             * @memberof! oj.ojInputDate
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'rangeOverflow': ''
          }
        },
        
        /**
         * <p>Provides properties to customize the hint and message text used by the 
         * implicit date restriction validator associated to the ojInputDateTime and ojInputDate components.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.dateRestriction
         * @memberof! oj.ojInputDate
         * @instance
         * @type {?Object}
         * @since 0.7
         */
        'dateRestriction': 
        {
          /**
           * <p>Hint text used by the implicit date restriction validator associated to the ojInputDateTime and ojInputDate components.
           * 
           * <p>See the <a href="#translations">translations</a> option for usage examples.
           * 
           * @alias translations.dateRestriction.hint
           * @memberof! oj.ojInputDate
           * @instance
           * @type {?string}
           * @default <code class="prettyprint">""</code>
           * @see oj.DateRestrictionValidator
           * @since 0.7
           */               
          'hint': '',
          
          /**
           * <p>Message summary for the implicit date restriction validator associated to the ojInputDateTime and ojInputDate components.
           * 
           * <p>See the <a href="#translations">translations</a> option for usage examples.
           * 
           * @alias translations.dateRestriction.messageSummary
           * @memberof! oj.ojInputDate
           * @instance
           * @type {?string}
           * @default <code class="prettyprint">""</code>
           * @see oj.DateRestrictionValidator
           * @since 0.7
           */          
          'messageSummary': '',
          
          /**
           * <p>Message detail for the implicit date restriction validator associated to the ojInputDateTime and ojInputDate components.
           * 
           * <p>See the <a href="#translations">translations</a> option for usage examples.
           * 
           * @alias translations.dateRestriction.messageDetail
           * @memberof! oj.ojInputDate
           * @instance
           * @type {?string}
           * @default <code class="prettyprint">""</code>
           * @see oj.DateRestrictionValidator
           * @since 0.7
           */               
          'messageDetail': ''
        }
      },

      'oj-ojInputTime':
      {
        'inputHelp': 'Press Key down or Key up for access to time drop down',
        
        /**
         * <p>Provides properties to customize the hint and message text used by the 
         * implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.dateTimeRange
         * @memberof! oj.ojInputTime
         * @instance
         * @type {?Object}
         * @since 0.7
         */
        'dateTimeRange':
        {
          /**
           * <p>Provides properties to customize the hint text used by the 
            * implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.dateTimeRange.hint
            * @memberof! oj.ojInputTime
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'hint': 
          {
            /**
             * <p>Hint text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components. 
             * hint.min is shown when min is set and max is not set, and is used 
             * to tell the user the allowed minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.hint.min
             * @memberof! oj.ojInputTime
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'min': '',
            /**
             * <p>Hint text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * hint.max is shown when max is set and min is not set, and is used 
             * to tell the user the allowed maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.hint.max
             * @memberof! oj.ojInputTime
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'max': '',
            /**
             * <p>Hint text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * hint.inRange is shown when both min and max are set, and is used 
             * to tell the user the allowed number range.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.hint.inRange
             * @memberof! oj.ojInputTime
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'inRange': ''
          },
          /**
           * <p>Provides properties to customize the error message text used by the 
            * implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.dateTimeRange.messageDetail
            * @memberof! oj.ojInputTime
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageDetail': 
          {
            /**
             * <p>Error message text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * messageDetail.rangeUnderflow is shown when min is set, and the
             * value is less than the minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.messageDetail.rangeUnderflow
             * @memberof! oj.ojInputTime
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'rangeUnderflow': '',
            /**
             * <p>Error message text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * messageDetail.rangeOverflow is shown when max is set, and the
             * value is greater than the maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.messageDetail.rangeOverflow
             * @memberof! oj.ojInputTime
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'rangeOverflow': ''
          },
           /**
           * <p>Provides properties to customize the error message summary text used by the 
            * implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.dateTimeRange.messageSummary
            * @memberof! oj.ojInputTime
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageSummary': 
          {
            /**
             * <p>Error message summary text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * messageSummary.rangeUnderflow is shown when min is set, and
             * the value is less than the minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.messageSummary.rangeUnderflow
             * @memberof! oj.ojInputTime
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'rangeUnderflow': '',
            /**
             * <p>Error message summary text used by the implicit datetime range validator associated to the ojInputDateTime, ojInputDate, and ojInputTime components.
             * messageSummary.rangeOverflow is shown when max is set, and the
             * value is greater than the maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.dateTimeRange.messageSummary.rangeOverflow
             * @memberof! oj.ojInputTime
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.DateTimeRangeValidator
             * @since 0.7
             */
            'rangeOverflow': ''
          }
        }
      },
      
      'oj-inputBase':
      {
        /**
         * <p>Provides properties to customize the message text used by the 
         * implicit regexp validator associated to the ojInputText and ojTextArea components.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.regexp
         * @memberof! oj.inputBase
         * @instance
         * @type {?Object}
         * @since 0.7
         */
        'regexp':
        {
          /**
           * <p>Provides properties to customize the error message summary used by the 
            * implicit regexp validator associated to the ojInputText and ojTextArea components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.regexp.messageSummary
            * @memberof! oj.inputBase
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageSummary': '',
          /**
           * <p>Provides properties to customize the error message detail used by the 
            * implicit regexp validator associated to the ojInputText and ojTextArea components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.regexp.messageDetail
            * @memberof! oj.inputBase
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageDetail': ''
        }
      },
      
      'oj-ojInputPassword':
      {
        /**
         * <p>Provides properties to customize the message text used by the 
         * implicit regexp validator associated to the ojInputPassword components.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.regexp
         * @memberof! oj.ojInputPassword
         * @instance
         * @type {?Object}
         * @since 0.7
         */
        'regexp':
        {
          /**
           * <p>Provides properties to customize the error message detail used by the 
            * implicit regexp validator associated to the ojInputPassword components.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.regexp.messageDetail
            * @memberof! oj.ojInputPassword
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageDetail': "Value must match this pattern: '{pattern}'"
        }
      },

      'oj-ojDataGrid':
      {
        'accessibleSortAscending': '{id} sorted in ascending order',
        'accessibleSortDescending': '{id} sorted in decending order',
        'accessibleActionableMode': 'Enter actionable mode',
        'accessibleNavigationMode': 'Enter navigation mode',
        'accessibleSummaryExact': 'This is a data grid with {rownum} rows and {colnum} columns',
        'accessibleSummaryEstimate': 'This is a data grid with unknown number of rows and columns',
        'accessibleSummaryExpanded' : 'There are currently {num} rows expanded',
        'accessibleInitialFocus' : 'Press tab to focus on the current cell',
        'accessibleRowExpanded': 'Row expanded',
        'accessibleRowCollapsed': 'Row collapsed',
        'accessibleRowSelected': 'Row {row} selected',
        'accessibleColumnSelected': 'Column {column} selected',
        'accessibleStateSelected': 'selected',
        'accessibleMultiCellSelected': '{num} cells selected',
        'accessibleRowContext': 'Row {index}',
        'accessibleColumnContext': 'Column {index}',
        'accessibleRangeSelectModeOn': 'Add selected range of cells mode on',
        'accessibleRangeSelectModeOff': 'Add selected range of cells mode off',
        'accessibleFirstRow': 'You have reached the first row',
        'accessibleLastRow': 'You have reached the last row',
        'accessibleFirstColumn': 'You have reached the first column',
        'accessibleLastColumn': 'You have reached the last column',
        'msgFetchingData': 'Fetching Data...',
        'msgNoData': 'No data to display.',
        'labelResize': 'Resize',
        'labelResizeWidth': 'Resize Width',
        'labelResizeHeight': 'Resize Height',
        'labelSortRow': 'Sort Row',
        'labelSortRowAsc': 'Sort Row Ascending',
        'labelSortRowDsc': 'Sort Row Descending',
        'labelSortCol': 'Sort Column',
        'labelSortColAsc': 'Sort Column Ascending',
        'labelSortColDsc': 'Sort Column Descending',
        'labelCut': 'Cut',
        'labelPaste': 'Paste'
      },
      
      'oj-ojRowExpander':
      {
        'accessibleRowDescription': 'Level {level}, Row {num} of {total}',
        'accessibleRowExpanded': 'Row expanded',
        'accessibleRowCollapsed': 'Row collapsed',
        'accessibleStateExpanded': 'expanded',
        'accessibleStateCollapsed': 'collapsed'
      },
      
      'oj-_ojLabel' :
      {
        'tooltipHelp':'Help',
        'tooltipRequired':'Required'
      },
      
      'oj-ojInputNumber' :
      {
        /**
         * <p>Provides properties to customize the hint and message text used by the 
         * implicit number range validator associated to the inputNumber component.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.numberRange
         * @memberof! oj.ojInputNumber
         * @instance
         * @type {?Object}
         * @since 0.7
         */
        'numberRange':
        {
          /**
           * <p>Provides properties to customize the hint text used by the 
            * implicit number range validator associated to the inputNumber component.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.numberRange.hint
            * @memberof! oj.ojInputNumber
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'hint': 
          {
            /**
             * <p>Hint text used by the number range validator associated to the inputNumber
             * component. hint.min is shown when min is set and max is not set, and is used 
             * to tell the user the allowed minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.numberRange.hint.min
             * @memberof! oj.ojInputNumber
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.NumberRangeValidator
             * @since 0.7
             */
            'min': '',
            /**
             * <p>Hint text used by the number range validator associated to the inputNumber
             * component. hint.max is shown when max is set and min is not set, and is used 
             * to tell the user the allowed maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.numberRange.hint.max
             * @memberof! oj.ojInputNumber
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.NumberRangeValidator
             * @since 0.7
             */           
            'max': '',
            /**
             * <p>Hint text used by the number range validator associated to the inputNumber
             * component. hint.inRange is shown when both min and max are set, and is used 
             * to tell the user the allowed number range.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.numberRange.hint.inRange
             * @memberof! oj.ojInputNumber
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.NumberRangeValidator
             * @since 0.7
             */              
            'inRange': ''
          },
          /**
           * <p>Provides properties to customize the error message text used by the 
            * implicit number range validator associated to the inputNumber component.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.numberRange.messageDetail
            * @memberof! oj.ojInputNumber
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageDetail': 
          {
            /**
             * <p>Error message text used by the number range validator associated to the inputNumber
             * component. messageDetail.rangeUnderflow is shown when min is set, and the
             * value is less than the minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.numberRange.messageDetail.rangeUnderflow
             * @memberof! oj.ojInputNumber
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.NumberRangeValidator
             * @since 0.7
             */            
            'rangeUnderflow': '',
            /**
             * <p>Error message text used by the number range validator associated to the inputNumber
             * component. messageDetail.rangeOverflow is shown when max is set, and the
             * value is greater than the maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.numberRange.messageDetail.rangeUnderflow
             * @memberof! oj.ojInputNumber
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.NumberRangeValidator
             * @since 0.7
             */               
            'rangeOverflow': ''
          },
           /**
           * <p>Provides properties to customize the error message summary text used by the 
            * implicit number range validator associated to the inputNumber component.
            * 
            * <p>See the <a href="#translations">translations</a> option for usage examples.
            * 
            * @alias translations.numberRange.messageSummary
            * @memberof! oj.ojInputNumber
            * @instance
            * @type {?Object}
            * @since 0.7
           */
          'messageSummary': 
          {
            /**
             * <p>Error message summary text used by the number range validator associated to the 
             * inputNumber component. messageSummary.rangeUnderflow is shown when min is set, and
             * the value is less than the minimum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.numberRange.messageSummary.rangeUnderflow
             * @memberof! oj.ojInputNumber
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.NumberRangeValidator
             * @since 0.7
             */            
            'rangeUnderflow': '',
            /**
             * <p>Error message summary text used by the number range validator associated to the 
             * inputNumber component. messageSummary.rangeOverflow is shown when max is set, and the
             * value is greater than the maximum.
             * 
             * <p>See the <a href="#translations">translations</a> option for usage examples.
             * 
             * @alias translations.numberRange.messageSummary.rangeUnderflow
             * @memberof! oj.ojInputNumber
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">""</code>
             * @see oj.NumberRangeValidator
             * @since 0.7
             */               
            'rangeOverflow': ''
          }
        },
        /**
         * <p>Tooltip text for the inputNumber's Down arrow.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.tooltipDecrement
         * @memberof! oj.ojInputNumber
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">"Decrement"</code>
         */
        'tooltipDecrement':'Decrement',
        
        /**
         * <p>Tooltip text for the inputNumber's Up arrow.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.tooltipIncrement
         * @memberof! oj.ojInputNumber
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">"Increment"</code>
         */
        'tooltipIncrement':'Increment'
      },
      
      // translations used by the table component 
      'oj-ojTable': 
      {
        'labelSelectRow':'Select Row',
        'labelSelectColumn':'Select Column',
        'labelSort': 'Sort',
		    'labelSortAsc': 'Sort Ascending',
		    'labelSortDsc': 'Sort Descending',
        'msgFetchingData':'Fetching Data...',
        'msgNoData':'No data to display.'
      },

      'oj-ojTabs':
      {
        'removeCueText': 'Removable'
      },

      'oj-ojSelect':
      {
        'noMatchesFound': 'No matches found'
      },

      'oj-ojTree':
      {
		'm_loading': 'Loading...',
		'm_newnode': 'New Node',
		'm_multisel': 'Multiple Selection',
		'm_edit': 'Edit',
		'm_create': 'Create',
		'm_cut': 'Cut',
		'm_copy': 'Copy',
		'm_paste': 'Paste',
		'm_remove': 'Remove',
		'm_rename': 'Rename',
		'm_emptyText': 'No data'
      },

      'oj-ojPagingControl': 
      {
        'labelAccPaging': 'Pagination',
        'labelAccNavFirstPage': 'First Page',
        'labelAccNavLastPage': 'Last Page',
        'labelAccNavNextPage': 'Next Page',
        'labelAccNavPreviousPage': 'Previous Page',
        'labelAccNavPage': 'Page',
        'labelLoadMore':'Show More...',
        'labelNavInputPage':'Page',
        'labelNavInputPageMax':'of {pageMax}',
        'labelNavInputPageSummary':'({pageSummary})',
        'msgItemRange':'{pageFrom}-{pageTo} of {pageTotal} items',
        'msgItemRangeUnknown':'{pageFrom}-{pageTo} items',
        'tipNavInputPage':'Go To Page',
        'tipNavPageLink':'Go To Page {pageNum}',
        'tipNavNextPage':'Next',
        'tipNavPreviousPage':'Previous',
        'tipNavFirstPage':'First',
        'tipNavLastPage':'Last',
        
        'pageInvalid':
        {
          'summary': 'The page value entered is invalid.',
          'detail': 'Please enter a value greater than 0.'
        },
        
        'maxPageLinksInvalid':
        {
          'summary': 'Value for maxPageLinks is invalid.',
          'detail': 'Please enter a value greater than 4.'
        }
      },
      
      // DVT Components
      'oj-ojChart': {
        'labelDefaultGroupName': 'Group {groupName}',
        'labelSeries': 'Series: {seriesName}',
        'labelGroup': 'Group: {groupName}',
        'labelValue': 'Value: {value}',
        'labelTargetValue': 'Target: {targetValue}',
        'labelX': 'X: {x}',
        'labelY': 'Y: {y}',
        'labelZ': 'Z: {z}',
        'labelLow': 'Low: {low}',
        'labelHigh': 'High: {high}',
        'labelOther': 'Other',
        
        'tooltipPan': 'Pan',
        'tooltipSelect': 'Marquee select',
        'tooltipZoom': 'Marquee zoom',
        
        'msgInvalidData': 'Invalid data'
      },
      
      'oj-ojSunburst': {
        'labelColor': 'Color',
        'labelSize': 'Size'
      },
      
      'oj-ojTreemap': {
        'labelColor': 'Color',
        'labelSize': 'Size'
      },
      
      'oj-dvtBaseComponent': {
        'labelClearSelection': 'Clear Selection',
        'labelScalingSuffixThousand': 'K',
        'labelScalingSuffixMillion': 'M',
        'labelScalingSuffixBillion': 'B',
        'labelScalingSuffixTrillion': 'T',
        'labelScalingSuffixQuadrillion': 'Q',
        
        'msgNoData': 'No data to display',
        
        'notReadyToRender': {
          'summary': "This component must be attached to a visible subtree of the DOM prior to rendering."
        },
        
        'stateSelected': 'Selected',
        'stateUnselected': 'Unselected',
        'stateMaximized': 'Maximized',
        'stateMinimized': 'Minimized',
        'stateExpanded': 'Expanded',
        'stateCollapsed': 'Collapsed',
        'stateIsolated': 'Isolated',
        'stateHidden': 'Hidden',
        'stateVisible': 'Visible'
      },
      
      'oj-ojPopup': {
        'ariaLiveRegionInitialFocusFirstFocusable': 'Entering popup. Press F6 to navigate between the popup and associated control.',
        'ariaLiveRegionInitialFocusNone': 'Popup opened. Press F6 to navigate between the popup and associated control.'
      }
},
'zh-Hant': 1,
'it': 1,
'fr': 1,
'zh-Hans': 1,
'pt': 1,
'ja': 1,
'de': 1,
'pt-BR': 1,
'ko': 1,
'es': 1
});