import { Component, style, animate, transition, state, trigger } from '@angular/core';
import { cvprovider } from "./cvprovider"

@Component({
  selector: 'virtual-cv',
  templateUrl: './virtual-cv.component.html',
  styleUrls: ['./virtual-cv.component.css'],
  host: {'[@routeAnimation]':'true'},
  providers:[cvprovider],
  animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
      ]),
      transition('* => void',
        animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
          transform: 'translateX(100%)',
          opacity: 0
        }))
      )
    ])
  ]
})
export class VirtualCvComponent{
  contact: any;
  edu: any;
  w_exps: any;
  in_exps: any;
  appe_exps: any;
  leadership: any;
  constructor(cvprovider: cvprovider) { 
    this.contact = cvprovider.contact;
    this.edu = cvprovider.edu;
    this.w_exps = cvprovider.w_exps;
    this.in_exps = cvprovider.in_exps;
    this.appe_exps = cvprovider.appe_exps;
    this.leadership = cvprovider.leadership;
  }
}
