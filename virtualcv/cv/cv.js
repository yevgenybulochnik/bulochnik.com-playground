var app = angular.module("cv",["cvservice"]);

app.controller("cv",function(cvservice){
  this.contact_visable = true;
  this.contact = cvservice.contact;
  this.education_visable = true;
  this.education = cvservice.edu;
  this.work_visible = true;
  this.work = cvservice.w_exps;
});

app.directive("cV",function(){
  return{
    restrict: "E",
    scope: {},
    controller: "cv",
    controllerAs: "ctrl",
    templateUrl: "cv/cv.html"
  };
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

app.directive("education",function(){
  return{
    restrict: "E",
    scope: {},
    controller: "cv",
    controllerAs: "ctrl",
    templateUrl: "cv/education.html"
  };
});

app.directive("workExperiance",function(){
  return{
    restrict: "E",
    scope:{},
    controller: "cv",
    controllerAs: "ctrl",
    templateUrl: "cv/work.html",
  };
});
