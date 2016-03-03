var app = angular.module('noteservice', []);

app.service('noteservice',function(){
  this.note = {
    chadsvasc: '',
    hasbled: '',
    subj_denial: [],
    subj_usertext: [],
  };
  this.pushAssessment = function(riskcalc, assessment){
    this.note[riskcalc] = assessment;
  };
  this.pushdenial = function(text){
    if(this.note.subj_denial.indexOf(text) == -1){
      this.note.subj_denial.push(text);
    }else{
      var index = this.note.subj_denial.indexOf(text);
      this.note.subj_denial.splice(index,1);
    }
  };
});
