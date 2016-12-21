import { Component } from '@angular/core';
import { cvprovider } from "./cvprovider";
import { routeAnimation } from "../pagetransition";

@Component({
  selector: 'virtual-cv',
  templateUrl: './virtual-cv.component.html',
  styleUrls: ['./virtual-cv.component.css'],
  host: {'[@routeAnimation]':'true'},
  providers:[cvprovider],
  animations: [routeAnimation]
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
