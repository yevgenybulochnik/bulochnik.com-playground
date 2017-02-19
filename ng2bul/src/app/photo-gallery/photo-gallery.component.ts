import { Component, Input } from '@angular/core';

@Component({
  selector: 'gallery',
  template: `
    <div class='gallery-container'>
      <div (click)="setselectedImage(image)" class = "image-container" *ngFor= "let image of datasource">
    	      <img src="{{image.url}}" class="tn" height="146">  
    	 </div>
  	<div>
  	<div class="selected" *ngIf="selectedImage"c>
  	  <img src="{{selectedImage.url}}" width="600">
  	</div>
  `,
  styles: [`
    .gallery-container{
      margin: 40px;
      margin-top: 125px;
      display: flex;
      flex-direction:row;
    }
    .image-container{ 
      margin: 5px;
      height:146px;
      overflow: hidden;
	    box-shadow:#999 1px 1px 3px 1px; 
	    cursor: pointer;
	    transition: 0.1s;
    }
    .image-container:hover{
      transform: scale(1.1,1.1);
      // border: solid darkblue 1px;
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

}
