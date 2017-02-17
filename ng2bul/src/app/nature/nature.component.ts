import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';

@Component({
  selector: 'app-nature',
  host:{'[@routeAnimation]':'true'},
  template:`
  <div>Hello</div>
  `,
  styles: [`
  :host{
    margin-left: 200px;
    display: block;
    position: absolute;
    z-index:-1000;
    border-left: solid black 15px;
    height: 100%;
  }
  `],
  animations:[routeAnimation]
})
export class NatureComponent {

  constructor() { }

}
