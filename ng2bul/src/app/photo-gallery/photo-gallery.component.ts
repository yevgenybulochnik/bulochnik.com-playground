import { Component, Input } from '@angular/core';

@Component({
  selector: 'gallery',
  template: `
    <div class="selected" *ngIf="selectedImage">
      <span (click)="clearselectedImage()" class="close">&times;</span>
  	  <img class="tn" src="{{selectedImage.url}}" width="600">
  	</div>
  	<div class='gallery-container'>
      <div (click)="setselectedImage(image)" class = "image-container" *ngFor= "let image of datasource">
    	 <img src="{{image.url}}" height="146">  
    	</div>
  	</div>
  `,
  styles: [`
    .gallery-container{
      margin: 40px;
      margin-top: 125px;
      display: flex;
      flex-direction:row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .image-container{ 
      margin: 5px;
      height:146px;
	    box-shadow:#999 1px 1px 3px 1px; 
	    cursor: pointer;
	    transition: 0.1s;
    }
    .image-container:hover{
      transform: scale(1.1,1.1);
    }
    .tn{
     width:80%;
     max-width: 750px;
     margin: auto;
     display: block;
    }
    .selected{
      position: absolute;
      padding:100px;
      width: 100%;
      height:100%;
	    box-shadow:#999 1px 1px 3px 1px; 
	    box-sizing:border-box;
	    background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
      z-index: 100;
    }
    .close {
      position: absolute;
      top: 35px;
      right: 35px;
      color: #f1f1f1;
      font-size: 40px;
      font-weight: bold;
      transition: 0.3s;
      cursor: pointer;
    }
  `]
})
export class PhotoGalleryComponent {
  @Input() datasource;
  selectedImage;
  constructor() {
    
  }

  setselectedImage(image){
    this.selectedImage = image;
  }
  
  clearselectedImage(){
    this.selectedImage = null;
  }

}
