app = angular.module('progressnote',['ngQuill','noteservice']);

app.controller('progressctrl',function($scope,noteservice){
  $scope.test =noteservice.hasbled_assessment;
});

app.directive("progressnote",function(noteservice){
  return{
    scope:{},
    restrict: "E",
    controller: "progressctrl",
    templateUrl: "progressnote/progressnote.html",
  };
});
