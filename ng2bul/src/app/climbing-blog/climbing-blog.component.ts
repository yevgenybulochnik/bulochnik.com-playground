import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';


@Component({
  selector: 'flip-card',
  template:`
    <section class='container'>
      <div class='card' (click)='isflipped = !isflipped' [ngClass]="{'flipped':isflipped}">
        <figure class='front'>1</figure>
        <figure class='back'>2</figure>
      </div>
    </section>
  `,
  styles:[`
  .container{
    width: 1000px;
    height: 260px;
    position: relative;
    perspective: 800px;
    margin:10px;
  }
  .card{
    position:absolute;
    width:100%;
    height:100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    box-shadow: 2px 2px 5px 2px grey;
  }
  .card figure{
    margin: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .front{
    border: solid grey 1px;
  }
  .back{
    border: solid grey 1px;
    transform: rotateX( 180deg );
  }
  .flipped{
    transform: rotateX( 180deg );
  }
  `]
})
export class FlipCardComponent{
  isflipped: boolean;
  constructor(){
    this.isflipped = false; 
  }
}

@Component({
  selector: 'app-climbing-blog',
  host:{'[@routeAnimation]':'true'},
  template: `
    <div class="flip-container">
      <flip-card *ngFor='let card of cards'></flip-card>
    </div>
  `,
  styles: [`
  :host{
    margin-left:200px;
    display: block;
    position: absolute;
    z-index: -1000;
    border-left: solid black 15px;
  }
  .flip-container{
    padding: 100px;
    padding-top: 150px;
    display: flex;
    flex-direction: column;
  }
  `],
  animations:[routeAnimation]
})
export class ClimbingBlogComponent {
  cards;  
  constructor() {
   this.cards = [1,2] 
  }

}
