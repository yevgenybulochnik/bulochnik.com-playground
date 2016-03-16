var app = angular.module("NavMenu",[]);


app.controller("navctrl",function(){
  this.links =  [
      {link: "About", path: "#/about", isclicked: false , sublink:[]},
      {link: "Coding Projects", isclicked: false,
       sublink:[
         {link:"Progress Note Editor", isclicked: false},
         {link:"Electronic CV", isclicked: false}
       ]
      } ,
      {link: "Climbing", isclicked: false, sublink: []},
      {link: "Contact", iscliked:false,
      sublink:[
        {link: "Github", isclicked: false},
        {link: "Email", isclicked: false}
       ]
      }
     ];
  this.linkclicked = function(contentlink){
    for(i=0;i<this.links.length;i++){
      this.links[i].isclicked = false;
    }
    if(contentlink.isclicked){
      contentlink.isclicked = false;
    }else{
      contentlink.isclicked = true;
    }
  };
  this.sublinkclicked = function(itemlink){
    for(i=0;i<this.links.length;i++){
      if(this.links[i].sublink.length){
        for(n=0;n<this.links[i].sublink.length;n++){
          this.links[i].sublink[n].isclicked = false;
        }
      }
    }
    if(itemlink.isclicked){
      itemlink.isclicked = false;
    }else{
      itemlink.isclicked = true;
    }
  }
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
