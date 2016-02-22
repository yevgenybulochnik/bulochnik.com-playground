var app = angular.module('chadsvasc',[]);


app.controller('riskcalc', function(){
  this.clicked = function(factor){
    if(factor.isclicked){
      factor.isclicked= false;
    }else{
      factor.isclicked = true;
    }
  };
  this.CHADS_vasc = {
  riskcalc_name:"CHADS-Vasc",
  riskfactors:[
    {name:"CHF", value: 1, isclicked: false},
    {name:"HTN", value: 1, isclicked: false},
    {name:"AGE 65-75", value: 1, isclicked: false},
    {name:"AGE >75", value: 2, isclicked: false},
    {name:"DM", value: 1, isclicked: false},
    {name:"CVA", value: 2, isclicked: false},
    {name:"Female", value: 1, isclicked: false},
    {name:"CAD", value: 1, isclicked: false}
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
    controller: 'riskcalc',
    controllerAs:'ctrl',
    template:`
    <button ng-click='ctrl.clicked(factor)' ng-class='{active:factor.isclicked}' ng-repeat='factor in ctrl.CHADS_vasc.riskfactors'>
      {{factor.name}}
      <div class='right'>+</div>
    </button>`
  };
});
