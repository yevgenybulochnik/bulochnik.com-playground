var app = angular.module('progressnote', []);

app.controller('progressctrl', function(){
  this.editor = new Quill('#editor', {
  modules: {
    'toolbar': { container: '#toolbar' },
  },
  theme: 'snow'
  });
});

app.directive("progressnote", function(){
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
        <div id='editor'></div>
      </div>`
  };
});
