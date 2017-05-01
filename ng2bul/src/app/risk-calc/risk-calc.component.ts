import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'risk-calc',
  template: `
    <button (click)="clicked(risk)" [ngClass]="{'active':risk.isclicked}" *ngFor="let risk of type.riskfactors">
      {{risk.abv}}
      <div class='right'>+</div>
    </button>
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
    display: block; 
    width: 87px; 
    height: 20px;
    padding: 0px; 
    margin: 2px auto; 
    border: solid grey 1px;
    box-shadow: inset 0px 0px 2px 1px grey;
    background-color: white;
    transition: width 0.5s, background-color 0.2s;
  }
  .right{
    float: left; 
    width: 15px;
    border-right: solid grey 1px; 
  }
  button:hover{
    background-color:pink;
  }
  button:active{
    bacground-color: darkred;
  }
  .active{
    background-color: red !important;
    width: 100px;
  }
  .active:hover{
    background-color: red;
  }
  .active:active{
    background-color: darkred;
  }
  `], 
})
export class RiskCalcComponent{
  @Input() type;
  @Output() riskassessment: EventEmitter<any> =new EventEmitter(); 
  score: number; 
  percent: string; 
  clicked_factors: string[];
  constructor () {
    this.score = 0;
    this.percent = "";
    this.clicked_factors = [];
  }
  clicked(risk){
   if(risk.isclicked == true){
     risk.isclicked = false; 
     this.score -=risk.value; 
     var index = this.clicked_factors.indexOf(risk.abv)
     this.clicked_factors.splice(index, 1)
   }else{
     risk.isclicked = true;
     this.score += risk.value;
     this.clicked_factors.push(risk.abv)
   }
   this.percent = this.type.scores[this.score]
   this.riskassessment.emit(this.gen_assessment())
  }
  
  gen_assessment(){
    var text = '- Patient has a ' +this.type.riskcalc_name +"=" + this.score + ' ('
    if(this.clicked_factors.length == 0){
      text = "";
    }else if(this.clicked_factors.length ==1){
      text+=this.clicked_factors[0]+") corresponding to a "+this.percent+" annual risk"
    }else{
      for(var i=0;i<this.clicked_factors.length-1;i++){
        text+=this.clicked_factors[i]+', '
      }
      text+=this.clicked_factors[this.clicked_factors.length-1]+') corresponding to a ' +this.percent+' annual risk' 
    }
    return text
  }
  
}
