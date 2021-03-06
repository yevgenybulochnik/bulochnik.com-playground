var app = angular.module('subj', []);

app.controller('subjctrl', function(){
  this.d_clicked = function(question){
    if(question.d_isclicked){
      question.d_isclicked = false;
    }else{
      question.d_isclicked = true;
    }
    noteservice.pushdenial(question.denial);
  };
  this.usr_clicked = function(question){
    if(question.usr_isclicked){
      question.usr_isclicked = false;
    }else{
      question.usr_isclicked = true;
    }
  };
  this.questions = [
    {text: "Missed doses", denial: "Denies any missed doses, confirms correct dosage.", d_isclicked: false, usr_input: "", usr_isclicked: false},
    {text: "Bleeding/Bruising", denial: "Denies any unusual bleeding or bruising.", d_isclicked: false, usr_input: "", usr_isclicked: false},
    {text: "Medication Changes", denial: "Denies any medication changes.", d_isclicked: false, usr_input:"", usr_isclicked: false},
    {text: "Dietary Changes", denial: "Denies any dietary changes.", d_isclicked: false, usr_input: "", usr_isclicked: false},
    {text: "ETOH Intake", denial: "Denies any unusal ETOH intake.", d_isclicked: false, usr_input: "", usr_isclicked: false},
    {text: "Health Changes", denial: "Denies any health changes.", d_isclicked: false, usr_input: "", usr_isclicked: false},
    {text: "Activity Changes", denial: "Denies any changes in activity level.", d_isclicked: false, usr_input: "", usr_isclicked: false},
    {text: "Pain Level/APAP", denial: "Denies any issues with pain", d_isclicked: false, usr_input: "", usr_isclicked: false}
  ];
});

app.directive("subjective", function(){
  return{
    scope:{},
    restrict: "E",
    controller: 'subjctrl',
    controllerAs: 'ctrl',
    templateUrl:"subjective/subjective.html" ,
    link: function($scope, element){
      $(element).on('click','.subj_positive', function(){
        $(element).find('.subj_input').focus();
      });
    }
  };
});
