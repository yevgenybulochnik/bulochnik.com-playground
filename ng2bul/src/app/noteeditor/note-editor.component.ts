import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';
import { CHADS_vasc, HasBled } from '../risk-calc/risk-calc.provider';

@Component({
  selector: 'eu-note-editor',
  host: {'[@routeAnimation]': 'true'},
  template: `
    <div>
      <risk-calc (riskassessment)="getchadsvasc($event)" [type]='chadsvasc'></risk-calc>
      <risk-calc (riskassessment)="gethasbled($event)" [type]='hasbled'></risk-calc>
      <quill-editor (onEditorCreated)="seteditor($event)" [modules]='buttons'></quill-editor>
      <subjective (subjective_list)="get_subjective_list($event)"></subjective>
    </div>
  `,
  styles: [`
  :host{
    margin-left: 200px;
    display: block;
    position: absolute;
    z-index: -1000;
    border-left: solid black 15px;
    height: 100%;
  }
  div{
    padding-left: 40px;
    padding-top: 150px;
  }
  quill-editor{
    float: left;
    width: 500px;    
    margin: 5px;
    padding: 10px;
    border: solid grey 1px;
    box-shadow: 2px 2px 5px 2px grey;
  }
  `],
  animations: [routeAnimation],
  providers:[CHADS_vasc,HasBled]
})
export class NoteEditorComponent {
  subjective_list: string[];
  chadsvasc: CHADS_vasc;
  hasbled: HasBled;
  buttons: any;
  progressnote: note;
  notetext: string; 
  editor: any;
  constructor(CHADS_vasc:CHADS_vasc, HasBled:HasBled) {
    this.subjective_list = [];
    this.chadsvasc = CHADS_vasc;
    this.hasbled = HasBled; 
    this.buttons = {toolbar: [['bold','italic','underline','strike'],[{ 'list': 'ordered'}, { 'list': 'bullet' }]]};
    this.editor= null; 
    this.progressnote = new note; 
    this.notetext = `
      <b>
        <p>Subjective:</p>
        <p>Objective:</p>
        <p>Assessment:</p>
        <p>Plan:</p>
      </b>
    `;
  }

  addremove(before_after, insertion_text, text){
    if(text === ""){
      return;
    }
    var content = this.editor.getText()
    var start = content.indexOf(insertion_text)
    var end = start+ insertion_text.length+1
    if(before_after === "after"){
      if(content.indexOf(text) === -1){
        this.editor.insertText(end,text +'\n',{"bold":false})
      }else{
        start = content.indexOf(text)
        this.editor.deleteText(start-1,text.length+1)
      }
    }else if(before_after === "before"){
      if(content.indexOf(text) === -1){
        this.editor.insertText(start,text+'\n',{"bold":false})
      }else{
        start = content.indexOf(text)  
        this.editor.deleteText(start-1,text.length+1)
      }
    } 
  }
  
  getchadsvasc(evt){
    this.addremove("before","Plan:",this.progressnote.chadsvasc)
    this.progressnote.chadsvasc = evt 
    this.addremove("before","Plan:",this.progressnote.chadsvasc)
  }  
  
  gethasbled(evt){
    this.addremove("before","Plan:",this.progressnote.hasbled)
    this.progressnote.hasbled= evt 
    this.addremove("before","Plan:",this.progressnote.hasbled)
  }
  
  get_subjective_list(evt){
    for(var i=0;i<this.subjective_list.length;i++){
      this.addremove("before","Objective:",this.subjective_list[i])
    }
    this.subjective_list = evt; 
    for(var i=0;i<this.subjective_list.length;i++){
      this.addremove("before","Objective:",this.subjective_list[i])
    }
  }
  
  seteditor(evt){
    this.editor = evt;
    this.editor.setText("Subjective:\nObjective:\nAssessment:\nPlan:")
    this.editor.formatText(0,40,"bold",true)
  }

}

class note {
  subjective: string[];
  objective: string;
  assessment: string;
  plan: string;
  chadsvasc: string;
  hasbled: string;
    constructor(){
      this.subjective =[];
      this.objective = "";
      this.assessment = "";
      this.plan = "";
      this.chadsvasc = "";
      this.hasbled = "";
    }
}