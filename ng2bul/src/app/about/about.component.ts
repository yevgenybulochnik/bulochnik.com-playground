import {Component} from '@angular/core';
import {routeAnimation} from '../pagetransition';

@Component({
  selector: 'eu-about',
  host: { '[@routeAnimation]': 'true' },
  template: `
    <div>
      <h1>Bulochnik.com</h1>
      <p> Hello! and welcome to my website. My Name is Eugene Bulochnik. This website is a showcase of activities I like to do including rock climbing, photography, and programing. The website itself is built using angular 2 running off an AWS EC2 linux server with apache. The site is a work in progess and will continue to grow.</p>
      <p> Now about myself. I am a Pharmacist currently working at a local hospital in Portland Oregon. I graduated from Drake University in 2012 with a PharmD degree. Cardiology, hematology and blood thinners are my speciality. </p>
    <div>
  `,
  styles: [`
  :host{ 
    margin-left:200px;
    display: block;
    position: absolute;
    z-index:-1000;
    border-left: solid black 15px;
    height: 100%;
  }
  div{
    padding-left: 40px;
    padding-top: 150px;
  }
  h1{
     font-family: Impact, Charcoal, sans-serif;
  }
  p{
    width: 500px;
  }
    `],
  animations: [routeAnimation]
})
export class AboutComponent {

  constructor() { }


}
