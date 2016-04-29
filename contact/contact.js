var app = angular.module("contact",["cvservice"]);

app.controller("contact",function(cvservice){
  this.visable = true;
  this.content = cvservice.contact;
});

app.directive("contact",function(){
  return{
    restrict: "E",
    scope: {},
    controller: "contact",
    controllerAs: "ctrl",
    templateUrl:"contact/contact.html"
  };
});
