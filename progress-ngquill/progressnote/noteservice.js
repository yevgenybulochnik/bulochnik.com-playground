var app = angular.module('noteservice',[]);

app.service('noteservice',function(){
  this.note = '';
  this.hasbled_assessment= 'test';
  this.subj_denial =[];
  this.usr_input= [];
  this.gen_note = function(text){
    this.note = "<div>" + text + "</div>";
  };
});
