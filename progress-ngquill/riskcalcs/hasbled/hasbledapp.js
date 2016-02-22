var app = angular.module("hasbled", []);

app.controller("hasbledctrl",function(){
  this.hasbled =  {
  riskcalc_name:"HasBled",
  riskfactors:[
    {name:"HTN", value: 1, isclicked: false},
    {name:"Renal", value: 1, isclicked: false},
    {name:"Liver", value: 1, isclicked: false},
    {name:"CVA", value: 1, isclicked: false},
    {name:"Bleed", value: 1, isclicked: false},
    {name:"Labile INR", value: 1, isclicked: false},
    {name:"Age >65", value: 1, isclicked: false},
    {name:"ETOH", value: 1, isclicked: false},
    {name:"Thinners", value: 1, isclicked: false}
  ],
  scores:[
    "",
    "3.4%",
    "4.1%",
    "5.8%",
    "8.9%",
    "9.1%",
    ">10%"
  ]
};
});
