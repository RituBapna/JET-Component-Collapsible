require(['ojs/ojcore', 'knockout', 'jquery','ojs/ojbutton', 'ojs/ojknockout', 
    'ojs/ojcollapsible','ojs/ojselectcombobox', 'ojs/ojradioset'],
function(oj, ko, $)
{   
    function CollapsibleModel() {
                
    var self = this;
    
                self.multipleOption = ko.observable(false);
                self.disabledValue = ko.observable(false);
                self.expandAreaValue=ko.observable('header');
                self.expandedValue=ko.observable(true);
                self.expandOnValue=ko.observable('click');
                self.disabledOptions = ko.observableArray([
                    {id: 'true', value: 'true', label: 'true'},
                    {id: 'false', value: 'false', label: 'false'}
                ]);
                self.expandAreaValues = ko.observableArray([
                    {id: 'disclosureIcon', value: 'disclosureIcon', label: 'disclosureIcon'},
                    {id: 'header', value: 'header', label: 'header'}
                ]);
                self.expandedOptions = ko.observableArray([
                    {id: 'true', value: 'true', label: 'true'},
                    {id: 'false', value: 'false', label: 'false'}
                ]);
                self.expandOnValues = ko.observableArray([
                    {id: 'click', value: 'click', label: 'click'},
                    {id: 'mouseover', value: 'mouseover', label: 'mouseover'}
                ]);
                self.disabledUpdate=function(event,data){
                    if (data.value[0] === "false" || data.value[0] === "f"){
                        self.disabledValue(false);
                        $("#disableOutputText").html("Disabled: " +self.disabledValue() );
                    }
                    else {
                        self.disabledValue(true);
                        $("#disableOutputText").html("Disabled: " +self.disabledValue() );
                    }
                 };
//                self.disabledUpdate = function(event,data) {
//                    if (data.value[0] === "false" || data.value[0] === "f")
//                    {
//                        self.disabledValue(false);
//                         $("#disableOutputText").html("Disabled:" +self.disabledValue() );
//                         return;
//                    }
//                    else
//                    {
//                        self.disabledValue(true);
//                        $("#disableOutputText").html("Disabled:" +self.disabledValue() );
//                         return;
//                    }
//                };
                self.expandedUpdate=function(event,data){
                    if (data.value[0] === "false" || data.value[0] === "f"){
                        self.expandedValue(false);
                        $("#expandedOutputText").html("Expanded: " +self.expandedValue() );
                    }
                    else {
                        self.expandedValue(true);
                        $("#expandedOutputText").html("Expanded: " +self.expandedValue() );
                    }
                 };
                self.expandAreaUpdate=function(event,data){
                    if (data.value[0] === "disclosureIcon" || data.value[0] === "d"){
                        self.expandAreaValue('disclosureIcon');
                        $("#expandedAreaOutputText").html("Expanded Area:" +self.expandAreaValue() );
                    }
                    else{
                        self.expandAreaValue('header');
                        $("#expandedAreaOutputText").html("Expanded Area:" +self.expandAreaValue() );
                    }
                 };
                 
                 self.expandOnUpdate=function(event,data){
                    if (data.value[0] === "click" || data.value[0] === "c"){
                        self.expandOnValue('click');
                        $("#expandOnOutputText").html("Expand On: " +self.expandOnValue() );
                    }
                    else {
                        
                        self.expandOnValue('mouseover');
                        $("#expandOnOutputText").html("Expand On: " +self.expandOnValue() );
                    }
                 };
                 $("#selectedOptionsButton").click(function(event,data){
                     $("#disableOutputText").html("By Getter Option Disabled:: "+$( "#collapsiblePage" ).ojCollapsible( "option", "disabled" ));
                     $("#expandedOutputText").html("By Getter Option Expanded:: "+$( "#collapsiblePage" ).ojCollapsible( "option", "expanded" ));
                     
                     $("#expandedAreaOutputText").html("By Getter Option Expand Area:: "+$( "#collapsiblePage" ).ojCollapsible( "option", "expandArea" ));
                   $("#expandOnOutputText").html("By Getter Option Expand On:: "+$( "#collapsiblePage" ).ojCollapsible( "option", "expandOn" ));
                 });
                 self.setOptions=function(){
                     
                    $( "#collapsiblePage").ojCollapsible( "option", "expanded",false ); 
                    //$( "#collapsiblePage").ojCollapsible( "option", "disabled",true ); 
                    
                 };
                self.optionCheck=function(data,event){
                    var node = $( "#collapsiblePage" ).ojCollapsible( "getNodeBySubId", {'subId': 'oj-collapsible-header'} );
                    //console.log(node);
                    var disabled = $( "#collapsiblePage" ).ojCollapsible( "option", "disabled" );
                    var expanded = $( "#collapsiblePage" ).ojCollapsible( "option", "expanded" );
                    var expandedArea = $( "#collapsiblePage" ).ojCollapsible( "option", "expandArea" );
                    
                    $('#optionMethodheck').html("Disabled Value For Collapsible Is::\n\
                                                <span id='isDisableCheck' style='color:royalblue;' >" + self.disabledValue()+ "</span>\n\
                                                <h3 id='Expanded' style='color:black;'>Expanded Value For Collapsible Is::  \n\
                                                    <span style='color:royalblue'>" +self.expandedValue()+"</span>\n\
                                                </h3>\n\
                                                <h3 id='ExpandedArea' style='color:black;'>Expanded Area Value For Collapsible Is::  \n\
                                                    <span style='color:royalblue'>" +self.expandAreaValue()+"</span>\n\
                                                </h3>" 
                          );
                  $("#optionMethodheck").append("This is the appended Text\n\
                                            <span id='sampleText' style='color:red;'>" + "Appended Text using append method" + "</span>");
                    //  $('#inputButton').attr("disabled", true);
                      var optionEvent=$('#expandedValue');
                     // console.log(optionEvent);
                };
                 
                $("#collapsiblePage").on("ojbeforecollapse", function(event, ui) {
                    //console.log(event);
                    $('#functionName1').html("ojbeforecollapse");
                    ;
                });
                
                $("#collapsiblePage").on("ojcollapse", function(event, ui) {
                    $('#functionName2').html("ojcollapse");
                    ;
                });
                $("#collapsiblePage").on("ojbeforeexpand", function(event, ui) {
                   // alert("Before Expand");
                     //console.log(event);
                    $('#functionName1').html("ojbeforeexpand");
                    ;
                });
                $("#collapsiblePage").on("ojexpand", function(event, ui) {
                    $('#functionName2').html("ojexpand");
                     
                });
                $("#collapsiblePage").on("ojoptionchange", function(event, ui) {
                     //console.log(event);
                    $('#functionName1').html("ojoptionchange");
                });

            };
               

              $(document).ready(function(){
               // console.log(new CollapsibleModel());
                   ko.applyBindings(new CollapsibleModel(), document.getElementById('wrapperDiv'));
                }
              );
        });  
        
        