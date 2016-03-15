var app = angular.module("NavMenu",[]);


app.controller("navctrl",function(){
  this.links =  [
      {link: "About", path: "#/about", isclicked: false , sublink:[]},
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
  this.clicked = function(contentlink){
    if(contentlink.isclicked){
      contentlink.isclicked = false;
    }else{
      contentlink.isclicked = true;
    }
  };
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
