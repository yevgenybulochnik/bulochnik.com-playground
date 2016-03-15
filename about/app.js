var app = angular.module("about",["NavMenu","ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    .when("/about", {
      templateUrl: "views/about.html"
    })
});
