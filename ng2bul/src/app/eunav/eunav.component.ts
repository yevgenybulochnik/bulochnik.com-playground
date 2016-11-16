import {Component} from '@angular/core';

@Component({
  selector: 'eu-nav',
  templateUrl: './eunav.component.html',
  styleUrls: ['./eunav.component.css']
})
export class EunavComponent{
  constructor() { 
    this.links= [
      new eubutton("About"),
      new eubutton("Coding",["Virtual CV","Note Editor"]),
      new eubutton("Climbing"),
      new eubutton("Contact",["Github","Email"]),
      ]
  }

}

class eubutton {
  link: string;
  sublink: string[];
  link_isactive: boolean;
  constructor(link,sublink?){
    this.link = link;
    this.link_isactive = false; 
    this.sublink = this.gen_sublink(sublink);
  }
  
    gen_sublink(sublink) {
      if(sublink){
        var sublink_array = [];
        for(var i=0; i<sublink.length;i++){
          sublink_array.push({link:sublink[i], sublink_isactive:false});
        }
        return sublink_array
      }else{
        return null 
      }
    }
    
    activate(){
      if(this.link_isactive == false){
        this.link_isactive = true;
      }else{
        this.link_isactive = false;
      };
      console.log(this.link_isactive)
    }
    
    sub_activate(subbutton){
      if(subbutton.sublink_isactive){
        subbutton.sublink_isactive = true;
      }else{
        subbutton.sublink_isactive = false;
      }
    } 
}