app = angular.module('progressnote',['ngQuill']);

app.controller('progressctrl',function(){
  this.test = "hello world";
});

app.directive("progressnote",function(){
  return{
    scope:{},
    restrict: "E",
    controller: "progressctrl",
    controllerAs: "ctrl",
    templateUrl: "progressnote/progressnote.html"
  };
});
