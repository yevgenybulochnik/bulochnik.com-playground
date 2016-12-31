import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';
import { CHADS_vasc, HasBled } from '../risk-calc/risk-calc.provider';

@Component({
  selector: 'eu-note-editor',
  host: {'[@routeAnimation]': 'true'},
  template: `
    <div>
      <risk-calc (notifyeditor)="getrisk($event)" [type]='chadsvasc'></risk-calc>
      <risk-calc [type]='hasbled'></risk-calc>
      <quill-editor (ngModelChange)="textchange()" [modules]='buttons' [(ngModel)]="progressnote"></quill-editor>
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
  chadsvasc: CHADS_vasc;
  hasbled: HasBled;
  buttons: any;
  progressnote: string;
  constructor(CHADS_vasc:CHADS_vasc, HasBled:HasBled) {
    this.chadsvasc = CHADS_vasc;
    this.hasbled = HasBled; 
    this.buttons = {toolbar: [['bold','italic','underline','strike'],[{ 'list': 'ordered'}, { 'list': 'bullet' }]]};
    this.progressnote = "helloworld"
  }
  getrisk(evt){
    this.progressnote = evt
    console.log(this)
  }
  textchange(){
    console.log(this.progressnote)
  }
}
