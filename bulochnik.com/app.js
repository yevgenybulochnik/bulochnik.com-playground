var app = angular.module("bulochnik",["NavMenu","ngRoute","progressnote","chadsvasc","hasbled","subj"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/about", {
      templateUrl: "views/about.html"
    })
    .when("/climbing", {
      templateUrl: "views/climbing.html"
    });
});
