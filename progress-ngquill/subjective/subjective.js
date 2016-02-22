var app = angular.module('subjective',[]);

app.controller('subjctrl',function(){
  this.questions = [
    {name:'Missed doses', denial:"Denies any missed doses. Confirms correct dosage", d_isclicked: false},
  ];
});
