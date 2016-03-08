var app = angular.module('noteservice', []);

app.service('noteservice',function(){
  this.note = {
    chadsvasc: '',
    hasbled: '',
    subj_denial: [],
    subj_usrinput: [],
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
  this.pushusrinput = function(usrinput){
    this.note.subj_usrinput.length = 0;
    for(i=0;i<usrinput.length;i++){
      this.note.subj_usrinput.push(usrinput[i]);
    }
    console.log(this.note);
  };
});
