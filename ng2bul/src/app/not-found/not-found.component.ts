import { Component, style, animate, transition, state, trigger } from '@angular/core';

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
export class NotFoundComponent {
  constructor() { }
}
