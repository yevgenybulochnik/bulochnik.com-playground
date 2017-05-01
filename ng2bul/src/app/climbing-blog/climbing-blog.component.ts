import { Component } from '@angular/core';
import { routeAnimation } from '../pagetransition';


@Component({
  selector: 'flip-card',
  template:`
    <section class='container'>
      <div class='card' (click)='isflipped = !isflipped' [ngClass]="{'flipped':isflipped}">
        <figure class='front'>
          <div class="region">
            <img class="region_tn" src= "../assets/img/smithrock.jpg">
            <div class="tn_container">
              <div *ngFor='let tn of trip.tns' class="tn"></div>
            </div>
          </div>
          <div class="climb_summary">climb summary
          </div>
        </figure>
        <figure class='back'>
        </figure>
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
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .front{
    border: solid grey 1px;
  }
  .region{
    border: solid black 2px;  
    box-sizing: border-box;
    width: 45%;
  }
  .region_tn{
    object-fit:cover;
    width: 100%;
    height:100%;
  }
  .region_tn:hover{
    opacity:0.75;
  }
  .tn_container{
    position: absolute;
    top:0;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-around;
    width:45%;
  }
  .tn{
    border: solid red 2px;
    margin:0.5em;
    width: 4em;
    height: 4em;
  }
  .climb_summary{
    border:solid black 2px;
    box-sizing: border-box;
    width: 55%;
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
  trip: any;
  constructor(){
    this.isflipped = false; 
    this.trip = {
      region: "Smith Rock",
      tns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    }
  }
}

@Component({
  selector: 'climbing-blog',
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
    padding-top: 100px;
    display: flex;
    flex-direction: column;
  }
  `],
  animations:[routeAnimation]
})
export class ClimbingBlogComponent {
  cards;  
  constructor() {
   this.cards = [1,2,3] 
  }

}
