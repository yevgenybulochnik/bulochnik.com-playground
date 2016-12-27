import { Component, Input } from '@angular/core';

@Component({
  selector: 'risk-calc',
  template: `
    <button *ngFor="let risk of type.riskfactors">
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
  `], 
})
export class RiskCalcComponent{
  @Input() type;
  constructor () {
  }
}
