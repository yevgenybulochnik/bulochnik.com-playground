import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';
import { ImageUrls } from '../../assets/image.provider';

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
  }
  `],
  providers:[ImageUrls],
  animations:[routeAnimation]
})
export class NatureComponent {
  images: any; 
  constructor(ImageUrls:ImageUrls) { 
    this.images = ImageUrls.images; 
  }

}
