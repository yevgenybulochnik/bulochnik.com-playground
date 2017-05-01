import { Component } from '@angular/core';
import {routeAnimation} from '../pagetransition';

@Component({
  selector: 'eu-pagestart',
  host: {'[@routeAnimation]': 'true'},
  template: `
    <div>
      Bulochnik.com
    </div>
  `,
  styles: [`
  :host{
    margin-left: 200px;
    display: block;
    position: absolute;
    z-index: -1000;
    height: 100%
  }
  div{
    padding-left: 130px;
    padding-top: 150px;
    font-family: Impact, charcoal, snas-serif;
    font-size: 7em; 
  }
  `],
  animations:[routeAnimation]
})

export class PageStartComponent{

  constructor() { }

}
