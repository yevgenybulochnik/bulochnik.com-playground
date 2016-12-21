import { Component } from '@angular/core';
import {routeAnimation} from '../pagetransition';

@Component({
  selector: 'eu-not-found',
  host: {'[@routeAnimation]':'true'},
  template: `
    <div>
      <p>Opps! looks like im still working on this part.</p> 
    </div>
  `,
  styles: [`
  :host{
    margin-left: 200px;
    display: block;
    position: absolute;
    z-index:-1000;
    border-left: solid black 15px;
    height: 100%
  }
  div{
    padding-left: 40px;
    padding-top: 150px;
  }
  p{
    font-family: Impact, Charcoal, san-serif;
    font-size: x-large;
  }
  `],
  animations: [routeAnimation]
})
export class NotFoundComponent {
  constructor() { }
}
