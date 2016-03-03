var app = angular.module('progressnote', ['noteservice']);

app.controller('progressctrl', function(){
  this.editor = new Quill('#editor', {
  modules: {
    'toolbar': { container: '#toolbar' },
  },
  theme: 'snow'
  });
  this.chadsvasc = '';
  this.hasbled = '';
  this.subj_denial = [];
  this.addremove = function(before_after,insertion_text,text){
    if(text === '' || text === undefined){
      return;
    }
    var content = this.editor.getText();
    var start = content.indexOf(insertion_text);
    var end = start+ insertion_text.length+1;
    if(before_after === "after"){
      if(content.indexOf(text) === -1){
        this.editor.insertText(end,text+'\n','bullet',true);
      }else{
        start = content.indexOf(text);
        end = start+ text.length;
        this.editor.deleteText(start-1,end);
      }
    }else if(before_after === 'before'){
      if(content.indexOf(text) === -1){
        this.editor.insertText(start,text+'\n','bullet',true);
      }else{
        start = content.indexOf(text);
        end = start+text.length;
        this.editor.deleteText(start-1,end);
      }
    }
  };
});

app.directive("progressnote", function(noteservice){
  return{
    restrict: "E",
    controller: 'progressctrl',
    controllerAs: 'ctrl',
    template:`
      <div class='editor_container'>
        <div id='toolbar'>
          <div class="ql-format-button ql-bold"></div>
          <div class="ql-format-separator"></div>
          <div class="ql-format-button ql-italic"></div>
          <div class="ql-format-separator"></div>
          <div class="ql-format-button ql-underline"></div>
          <div class="ql-format-separator"></div>
          <div class="ql-format-button ql-strike"></div>
          <div class="ql-format-separator"></div>
          <div class="ql-format-button ql-bullet"></div>
        </div>
        <div id='editor'>
          <div><b>Subjective:</b></div>
          <div><b>Objective:</b></div>
          <div><b>Assessment:</b></div>
          <div><b>Plan:</b></div>
        </div>
      </div>`,
    link: function(scope){
      $('chadsvasc').on('click','button', function(){
        scope.ctrl.addremove("before", "Plan:",scope.ctrl.chadsvasc);
        scope.ctrl.addremove("before", "Plan:", noteservice.note.chadsvasc);
        scope.ctrl.chadsvasc = noteservice.note.chadsvasc;
      });
      $('hasbled').on('click','button', function(){
        scope.ctrl.addremove("before", "Plan:",scope.ctrl.hasbled);
        scope.ctrl.addremove("before", "Plan:", noteservice.note.hasbled);
        scope.ctrl.hasbled= noteservice.note.hasbled;
      });
      $('subjective').on('click','.subj_negative', function(){
        for(i=0;i<scope.ctrl.subj_denial.length;i++){
          scope.ctrl.addremove("before", "Objective:", scope.ctrl.subj_denial[i]);
        }
        for(i=0;i<noteservice.note.subj_denial.length;i++){
          scope.ctrl.addremove("before", "Objective:", noteservice.note.subj_denial[i]);
        }
        scope.ctrl.subj_denial = noteservice.note.subj_denial.slice(0);
      });
    }
  };
});
