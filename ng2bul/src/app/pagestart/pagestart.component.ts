import { Component, style, animate, transition, state, trigger } from '@angular/core';

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
  animations:[
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

export class PageStartComponent{

  constructor() { }

}
