import { Component, Input } from '@angular/core';

@Component({
  selector: 'gallery',
  template: `
    <div class="selected" *ngIf="selectedImage">
  	  <img src="{{selectedImage.url}}" width="600">
  	</div>
  	<div class='gallery-container'>
      <div (click)="setselectedImage(image)" class = "image-container" *ngFor= "let image of datasource">
    	 <img src="{{image.url}}" class="tn" height="146">  
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
      flex:1;
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
      // border: solid darkblue 1px;
    }
    .selected{
      position: absolute;
      margin: 150px auto ;
      float: left;
      clear: left;
	    box-shadow:#999 1px 1px 3px 1px; 
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
