var app = angular.module("NavMenu",[]);


app.controller("navctrl",function(){
  this.links =  [
      {link: "About", visible: true, sublink:[]},
      {link: "Coding Projects", visible: true,
       sublink:{links:[
         {link:"Progress Note Editor",visible: true},
         {link:"Electronic CV",visible: true}
       ]}
      } ,
      {link: "Climbing", visible: true, sublink: []},
      {link: "Contact", visiible: true,
      sublink:{links:[
        {link: "Github", visible: true},
        {link: "Email", visible: true}
       ]}
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
