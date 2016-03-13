var app = angular.module("NavMenu",[]);


app.controller("navctrl",function(){
  this.links =  [
      {link: "About", sublink:[]},
      {link: "Coding Projects",
       sublink:[
         {link:"Progress Note Editor",visible: false},
         {link:"Electronic CV",visible: false}
       ]
      } ,
      {link: "Climbing", sublink: []},
      {link: "Contact",
      sublink:[
        {link: "Github", visible: false},
        {link: "Email", visible: false}
       ]
      }
     ];
     this.nav_mouseenter = function(){
       for(i=0;i<this.links.length;i++){
        if(this.links[i].sublink.length){
          for(n=0;n<this.links[i].sublink.length;n++){
            this.links[i].sublink[n].visible = true;
          }
        }
       }
     };
    this.nav_mouseleave = function(){
     for(i=0;i<this.links.length;i++){
      if(this.links[i].sublink.length){
        for(n=0;n<this.links[i].sublink.length;n++){
          this.links[i].sublink[n].visible = false;
        }
      }
     }
   };
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
