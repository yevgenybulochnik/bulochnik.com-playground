var app = angular.module("NavMenu",[]);


app.controller("navctrl",function(){
  this.links =  [
      {link: "About", isclicked: false , sublink:[]},
      {link: "Coding Projects", isclicked: false,
       sublink:[
         {link:"Progress Note Editor", isclicked: false},
         {link:"Electronic CV", isclicked: false}
       ]
      } ,
      {link: "Climbing", isclicked: false, sublink: []},
      {link: "Contact", iscliked:false,
      sublink:[
        {link: "Github", isclicked: false},
        {link: "Email", isclicked: false}
       ]
      }
     ];
});

app.directive('euNav',function(){
  return{
    scope: {},
    restrict: "E",
    controller: "navctrl",
    controllerAs: "nav",
    templateUrl: "nav/nav.html",
  };
});
