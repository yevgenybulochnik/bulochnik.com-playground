import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';

@Component({
  selector: 'app-nature',
  host:{'[@routeAnimation]':'true'},
  template:`
  <gallery [datasource] ='images'></gallery>
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
  images: any; 
  constructor() { 
    this.images = [
      {'url':'../assets/img/penguin1.jpg'},
      {'url':'../assets/img/penguin2.jpg'},
      {'url':'../assets/img/penguin3.jpg'}
      ]
  }

}
