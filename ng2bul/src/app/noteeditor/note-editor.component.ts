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
      <subjective (usr_input_strings)="getusr_input_strings($event)" (denial_strings)="getdenial_strings($event)"></subjective>
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
  denial_strings: string[];
  usr_input_strings: string[];
  chadsvasc: CHADS_vasc;
  hasbled: HasBled;
  buttons: any;
  progressnote: note;
  notetext: string; 
  editor: any;
  constructor(CHADS_vasc:CHADS_vasc, HasBled:HasBled) {
    this.denial_strings = [];
    this.usr_input_strings = [];
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
        this.editor.insertText(end,"- "+text +'\n',{"bold":false})
      }else{
        start = content.indexOf(text)
        // this.editor.removeFormat(start, text.length)
        this.editor.deleteText(start-3,text.length+3)
      }
    }else if(before_after === "before"){
      if(content.indexOf(text) === -1){
        this.editor.insertText(start, "- "+text+'\n',{"bold":false})
      }else{
        start = content.indexOf(text)  
        // this.editor.removeFormat(start,text.length)
        this.editor.deleteText(start-3,text.length+3)
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
  
  getdenial_strings(evt){
    for(var i=0;i<this.denial_strings.length;i++){
      this.addremove("before","Objective:",this.denial_strings[i])
    }
    this.denial_strings = evt;
    for(var i=0;i<this.denial_strings.length;i++){
      this.addremove("before","Objective:",this.denial_strings[i])
    }
  }
  
  getusr_input_strings(evt){
    for(var i=0;i<this.usr_input_strings.length;i++){
      this.addremove("after","Subjective:",this.usr_input_strings[i])
    }
    this.usr_input_strings = evt;
    for(var i=0;i<this.usr_input_strings.length;i++){
      this.addremove("after","Subjective:",this.usr_input_strings[i])
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