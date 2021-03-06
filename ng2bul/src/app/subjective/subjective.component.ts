import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'subjective',
  template: `
    <div class="subj_button" *ngFor="let question of questions" [ngClass]="{'red':question.usr_input}">
      <button (click)="usr_activate(question)" class = "subj_positive" [ngClass] = "{'red':question.usr_isclicked,'red':question.usr_input}">+</button>
      <div class="subj_middle">{{question.text}}</div>
      <button (click)="d_activate(question)" class = "subj_negative" [ngClass]="{'green':question.d_isclicked,'hide':question.usr_input}">-</button>
      <textarea focusIn *ngIf="question.usr_isclicked" (blur)="gen_usr_input_strings(question)" [(ngModel)]="question.usr_input" class="subj_input" contenteditable="true">{{question.usr_input}}</textarea>
    </div>
  `,
  styles: [`
  :host{
    float: left; 
    margin: 5px; 
    padding: 10px; 
    border: solid grey 1px; 
    box-shadow: 2px 2px 5px 2px grey;
  }
  button{
    padding: 2px; 
    padding-top: 3px;
    margin: 0px;
    height: 100%;
    border: none;
    background: white;
    box-shadow: inset 0px 0px 2px 1px grey; 
  }
  .subj_button{
    border: solid grey 1px; 
    height: 25px;
    margin: 1px; 
    float: left; 
    clear: left; 
    box-shadow: inset 0px 0px 2px 1px grey;
    position: relative;
    transition: background-color 0.2s;
  }
  .subj_input{
    border: solid grey 1px; 
    background-color: white; 
    width: 300px;
    height: 50px;
    position: absolute; 
    left: 20px; 
    top: -50px; 
    overflow: auto;
  }
  .subj_positive{
    float: left;
    width: 25px;
    transition: background-color 0.2s;
  }
  .subj_positive:hover{
    background-color: pink; 
  }
  .subj_positive: active{
    background-color: darkred;
  }
  .subj_middle{
    float: left;
    width: 150px; 
    heigt: 22px; 
    padding-top: 3px;
    text-align: center;
    transition; background-color 1s; 
  }
  .subj_negative{
    float: left;
    width: 25px;
    transition: background-color 0.2s, opacity 0.2s;
  }
  .subj_negative:hover{
    background-color: rgba(180,238,184,0.65);
  }
  .subj_negative: active{
    background-color: green;
  }
  .red{
    background-color: red;
  }
  .red:hover{
    background-color: red;
  }
  .green{
    background-color: lightgreen;
  }
  .green:hover{
    background-color: lightgreen;
  }
  .hide{
    opacity:0;
  }
  .hide:hover{
    opacity:1;
  }
  `]
})
export class SubjectiveComponent {
  @Output() subjective_list: EventEmitter<any> = new EventEmitter();
  questions: question[];
  constructor() {
    this.questions = [
      new question("Missed doses", "Denies any missed doses, confirms correct dosage."), 
      new question("Bleeding/Bruising", "Denies any unusual bleeding or bruising."),
      new question("Medication Changes","Denies any medication changes."),
      new question("Dietary Changes","Denies any dietary changes."),
      new question("ETOH Intake", "Denies any ETOH intake."),
      new question("Health Changes", "Denies any health changes."),
      new question("Activity Changes", "Denies any changes in activity level."),
      new question("Pain Level/APAP","Denies any changes with pain. ")
      ]
  }
  
  
  usr_activate(question){
    for(var i = 0;i<this.questions.length;i++){
      this.questions[i].usr_isclicked = false; 
    }
    if(question.usr_isclicked == true){
      question.usr_isclicked = false;
    }else{
      question.usr_isclicked = true;
    }
  }
  
  d_activate(question){
   if(question.d_isclicked == true){
     question.d_isclicked = false;
   }else{
     question.d_isclicked = true;
     question.usr_isclicked = false; 
     question.usr_input = "";
   } 
   this.subjective_list.emit(this.gen_subjective_list())
  }
  
  gen_usr_input_strings(question){
    question.usr_isclicked = false;
    if(question.usr_input){
      question.d_isclicked = false;
    }
    this.subjective_list.emit(this.gen_subjective_list())
  }
  
  gen_subjective_list(){
    var denial_list = [];
    var usr_input_list = [];
    for(var i=0; i<this.questions.length;i++){
      if(this.questions[i].d_isclicked == true){
        denial_list.push("- "+this.questions[i].denial)
      }
      if(this.questions[i].usr_input){
        usr_input_list.push("+ "+this.questions[i].usr_input)
      }
    }
    var combined_list = usr_input_list.concat(denial_list)
    return combined_list
  }

}

class question {
  text: string;
  denial: string;
  d_isclicked: boolean; 
  usr_input: string; 
  usr_isclicked: boolean; 
  constructor(text, denial){
   this.text = text;
   this.denial = denial; 
   this.d_isclicked = false; 
   this.usr_input = "";
   this.usr_isclicked = false; 
  }
}