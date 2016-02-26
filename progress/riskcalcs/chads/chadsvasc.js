var app = angular.module('chadsvasc',[]);


app.controller('chadsvascctrl', function(){
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
    this.percent = this.CHADS_vasc.scores[this.score];
    this.getassessment(this.CHADS_vasc.riskcalc_name,this.score, this.percent, this.clicked_factors);
    };
    this.getassessment = function(riskcalc_name, score,percent, clicked_factors){
      var text = 'Patient has a '+riskcalc_name+'='+score+' (';
      if(clicked_factors.length === 0){
        text = "";
      }else if(clicked_factors.length == 1){
        text+=clicked_factors[0]+") corresponding to a "+percent+" annual stroke risk";
      }else{
        for(i=0;i<clicked_factors.length-1;i++){
          text+=clicked_factors[i]+', ';
        }
        text+=clicked_factors[clicked_factors.length-1]+') corresponding to a '+percent+" annual stroke risk";
      }
    };
  this.CHADS_vasc = {
  riskcalc_name:"CHADS-Vasc",
  riskfactors:[
    {name:'Congestive Heart Failure', abv:"CHF", value: 1, isclicked: false},
    {name: 'Hypertension', abv:"HTN", value: 1, isclicked: false},
    {name:'Age between 65 and 75', abv:"AGE 65-75", value: 1, isclicked: false},
    {name: 'Age over 75', abv:"AGE >75", value: 2, isclicked: false},
    {name: 'Diabetes', abv:"DM", value: 1, isclicked: false},
    {name: 'CVA/TIA', abv:"CVA", value: 2, isclicked: false},
    {name: 'Female', abv:"Female", value: 1, isclicked: false},
    {name: 'Coronary Artery Disease', abv:"CAD", value: 1, isclicked: false}
    ],
  scores:[
    '',
    '0.9%',
    '2.9%',
    '4.6%',
    '6.7%',
    '10%',
    '13.6%',
    '15.7%',
    '15.2%',
    '17.4%'
  ]
};
});

app.directive('chadsvasc', function(){
  return{
    restrict: "E",
    scope:{},
    controller: 'chadsvascctrl',
    controllerAs:'ctrl',
    template:`
    <button ng-click='ctrl.clicked(factor)' ng-class='{active:factor.isclicked}' ng-repeat='factor in ctrl.CHADS_vasc.riskfactors'>
      {{factor.abv}}
      <div class='right'>+</div>
    </button>`
  };
});
