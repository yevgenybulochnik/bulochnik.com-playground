import {Component} from '@angular/core';

@Component({
  selector: 'eu-nav',
  templateUrl: './eunav.component.html',
  styleUrls: ['./eunav.component.css'],
})

export class EunavComponent{
  links: eubutton[];
  constructor() { 
    this.links= [
      new eubutton("About"),
      new eubutton("Coding",["Virtual CV","Note Editor"]),
      new eubutton("Climbing"),
      new eubutton("Photography",["City","Nature","Food"]),
      new eubutton("Contact")
      ]
  }

  eu_reset(){
    for(var i =0;i<this.links.length;i++){
      this.deactivate(this.links[i])
      if(this.links[i].sublink){
        for(var n=0;n<this.links[i].sublink.length;n++){
          this.deactivate(this.links[i].sublink[n])
        }  
      }
    }
  }
  
   activate(button){
     if(button.sublink == null){
      this.eu_reset() 
     }
     button.link_isactive = true;
   }
   
   sub_activate(subbutton){
     this.eu_reset();
     subbutton.link_isactive = true; 
   }
   
   deactivate(button){
     button.link_isactive = false; 
   }
}

class eubutton {
  link: string;
  link_path: string;
  sublink: string[];
  link_isactive: boolean;
  constructor(link,sublink?){
    this.link = link;
    this.link_path= this.gen_path(link);
    this.link_isactive = false; 
    this.sublink = this.gen_sublink(sublink);
  }
  
    gen_sublink(sublink) {
      if(sublink){
        var sublink_array = [];
        for(var i=0; i<sublink.length;i++){
          sublink_array.push({link:sublink[i], link_isactive:false, link_path: this.gen_path(sublink[i])});
        }
        this.link_path = null; 
        return sublink_array
      }else{
        return null 
      }
    }
    
    gen_path(linkstring){
      return "/"+linkstring.toLowerCase().replace(" ","")
    }
    
    // gen_path(linkname){
    // var path_obj;
    // var path; 
    // var path_component;
    // var linknameLower = linkname.toLowerCase();
     
    // path = "/"+ linknameLower.replace(" ","");
    // path_component = linkname.replace(" ","")+"Component";
    // path_obj = {path: path, component: path_component};
    // console.log(path_obj)
    // console.log(document)
    // return path_obj
    // }
}