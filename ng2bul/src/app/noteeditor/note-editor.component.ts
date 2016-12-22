import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';

@Component({
  selector: 'eu-note-editor',
  host: {'[@routeAnimation]': 'true'},
  template: `
    <div>
      noteeditor Works!
    </div>
  `,
  styles: [`
  :host{
    margin-left: 200px;
    display: block;
    position: absolute;
    z-index: -1000;
    border-left: solid black 15px;
    height: 100%;
  }
  div{
    padding-left: 40px;
    padding-top: 150px;
  }
  `],
  animations: [routeAnimation]
})
export class NoteEditorComponent {

  constructor() { }

}
