var app = angular.module("NavMenu",[]);


app.controller("navctrl",function(){

});

app.directive('euNav',function(){
  return{
    scope: {},
    restrict: "E",
    controller: "navctrl",
    templateUrl: "nav/nav.html",
    link: function(){
      $('nav').mouseenter(function(){
          $('li li').stop().show(500);
      });

      $('nav').mouseleave(function(){
          $('li li').stop().hide(500);
      });
    }
  };
});
