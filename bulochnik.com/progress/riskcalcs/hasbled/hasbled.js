var app = angular.module("hasbled", ['noteservice']);

app.controller("hasbledctrl",function(noteservice){
  this.score = 0;
  this.percent = "";
  this.clicked_factors = [];
  this.clicked = function(factor){
    if(factor.isclicked){
      factor.isclicked= false;
      this.score -= factor.value;
      var index = this.clicked_factors.indexOf(factor.abv);
      this.clicked_factors.splice(index,1);
    }else{
      factor.isclicked = true;
      this.score += factor.value;
      this.clicked_factors.push(factor.abv);
    }
  this.percent = this.hasbled.scores[this.score];
  var assessment = this.getassessment(this.hasbled.riskcalc_name,this.score, this.percent, this.clicked_factors);
  noteservice.pushAssessment('hasbled',assessment);
  };
  this.getassessment = function(riskcalc_name, score,percent, clicked_factors){
    var text = 'Patient has a '+riskcalc_name+'='+score+' (';
    if(clicked_factors.length === 0){
      text = "";
    }else if(clicked_factors.length == 1){
      text+=clicked_factors[0]+") corresponding to a "+percent+" annual bleed risk";
    }else{
      for(i=0;i<clicked_factors.length-1;i++){
        text+=clicked_factors[i]+', ';
      }
      text+=clicked_factors[clicked_factors.length-1]+') corresponding to a '+percent+" annual bleed risk";
    }
    return text;
  };
  this.hasbled =  {
  riskcalc_name:"HasBled",
  riskfactors:[
    {name: "Hypertension", abv:"HTN", value: 1, isclicked: false},
    {name: "Renal Failure", abv:"Renal", value: 1, isclicked: false},
    {name: "Liver Failure", abv:"Liver", value: 1, isclicked: false},
    {name: "CVA/TIA", abv:"CVA", value: 1, isclicked: false},
    {name: "Bleeding History", abv:"Bleed", value: 1, isclicked: false},
    {name: "Labile INR", abv:"Labile INR", value: 1, isclicked: false},
    {name: "Age > 65", abv:"Age >65", value: 1, isclicked: false},
    {name: "ETOH Intake", abv:"ETOH", value: 1, isclicked: false},
    {name: "Other anticoagulants", abv:"Thinners", value: 1, isclicked: false}
  ],
  scores:[
    "",
    "3.4%",
    "4.1%",
    "5.8%",
    "8.9%",
    "9.1%",
    ">10%",
    ">10%",
    ">10%",
    ">10%"
  ]
};

});
app.directive("hasbled",function(){
  return{
    restrict: "E",
    scope:{},
    controller: 'hasbledctrl',
    controllerAs:'ctrl',
    templateUrl:"progress/riskcalcs/hasbled/hasbled.html"
  };
});
