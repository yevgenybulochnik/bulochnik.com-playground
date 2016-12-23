import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';
import { CHADS_vasc, HasBled } from '../risk-calc/risk-calc.provider';

@Component({
  selector: 'eu-note-editor',
  host: {'[@routeAnimation]': 'true'},
  template: `
    <div>
      <risk-calc [type]='chadsvasc'></risk-calc>
      <risk-calc [type]='hasbled'></risk-calc>
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
  `],
  animations: [routeAnimation],
  providers:[CHADS_vasc,HasBled]
})
export class NoteEditorComponent {

  constructor(CHADS_vasc:CHADS_vasc, HasBled:HasBled) {
    this.chadsvasc = CHADS_vasc;
    this.hasbled = HasBled; 
  }

}
