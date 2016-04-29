var app = angular.module("cv",["cvservice"]);

app.controller("cv",function(cvservice){
  this.contact_visable = true;
  this.header = cvservice.contact;
});

app.directive("contact",function(){
  return{
    restrict: "E",
    scope: {},
    controller: "cv",
    controllerAs: "ctrl",
    templateUrl:"cv/contact.html"
  };
});
