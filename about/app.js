var app = angular.module("about",["NavMenu","ngRoute","ngAnimate"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/about", {
      templateUrl: "views/about.html"
    })
    .when("/climbing", {
      templateUrl: "views/climbing.html"
    });
});
