var index_content = function(str){
   var content = editor.getText();
   return content.indexOf(str);
 };

var addremove = function(before_after,insertion_text,text){
 var content = editor.getText();
 var start = content.indexOf(insertion_text);
 var end = start+ insertion_text.length+1;
 if(before_after === "after"){
   if(content.indexOf(text) === -1){
     editor.insertText(end,text+'\n','bullet',true);
   }else{
     start = content.indexOf(text);
     end = start+ text.length;
     editor.deleteText(start-1,end);
   }
 }else if(before_after === 'before'){
   if(content.indexOf(text) === -1){
     editor.insertText(start,text+'\n','bullet',true);
   }else{
     start = content.indexOf(text);
     end = start+text.length;
     editor.deleteText(start-1,end);
   }
 }
};

function Button(name,denies_str){
 this.name = name;
 this.denies_str = denies_str;
 this.user_input ='';
}

Button.prototype.render = function ($container){
//Create dynamic div elements for buttons
//******************************************************************************
 var $element = $(
   "<div class ='button_box'>"+
       "<div class='left'>+</div>"+
       "<div class='middle'></div>"+
       "<div class='right'>-</div>"+
       "<div class='pop' contenteditable ='true'></div>"+
   "</div>"
 );
//end code----------------------------------------------------------------------


 var self = this;
// Add CSS styling to individual div element classes
//******************************************************************************
 $element.css({
   "float":"left",
   "padding":"1px",
   "width":"245px",
   'position':'relative'
 });

 $element.find('.left')
         .css({
   "border":"solid black 1px",
   "width": "8%",
   "height":"19px",
   "float":"left",
   "border-radius":"25px 0px 0px 25px",
   "text-align":"center",
 });

 $element.find('.middle')
         .css({
   "border-top": "solid black 1px",
   "border-bottom":"solid black 1px",
   "width":"81%",
   "height":"19px",
   "text-align":"center",
   "float":"left",
 });

 $element.find('.right')
         .css({
   'background-color':'white',
   "border":"solid black 1px",
   "border-radius":'0px 25px 25px 0px',
   "width": "8%",
   "height":"19px",
   "float":"left",
   "text-align":"center",
 });

 $element.find('.pop')
         .css({
   'width':'300px',
   'height':'50px',
   'border':'solid black 1px',
   'position':'absolute',
   'left':'20px',
   'bottom':'17px',
   'display':'none',
   'overflow':'auto',
   'background-color':'white',
   'z-index':'1',
   'box-shadow': '5px 5px 5px #888888'
 });

//End code---------------------------------------------------------------------


//Add names to button elements and bind click/focusout
//*****************************************************************************
 $element.find('.middle')
         .text(self.name);
 $element.find('.right')
         .click(function(){
   if($(this).css('background-color') === 'rgb(255, 255, 255)'){
     $(this).css('background-color','lightgreen');
   }else{
     $(this).css('background-color','rgb(255, 255, 255)');
   }
   addremove('before','Objective:',self.denies_str);
});

 $element.find(".left").click(function(){
    if($element.find('.pop').css('display')=="none"){
     $('.pop').hide('fast');
     $element.find('.pop').show('fast').focus();
     $element.find('.left').css('background-color','red');
   }else{
     $(".pop").hide('fast');
     $element.find('.left').css('background-color','white');
   }
 });

 $element.find(".pop").focusout(function(){
   if (index_content($(this).text()) === 0){
     $element.find('.left').css('background-color',"white");
     $element.find('.middle').css('background-color','white');
     $(this).hide('fast');
     $element.find('.right').show().animate({width:'8%',opacity:'1'},500);
     if(self.user_input !== ''){
     addremove('after','Subjective:',self.user_input);
     }
     self.user_input = '';
   }else{
     if(self.user_input !== ''){
       addremove('after','Subjective:',self.user_input);
     }
     self.user_input = $(this).text();
     $element.find('.middle').css("background-color","red");
     $element.find('.left').css("background-color","red");
     $(this).hide('fast');
     $element.find('.right').animate({width:'0px',opacity:'0'},500).hide(1);

     addremove('after','Subjective:',self.user_input);
   }
 });
//End code----------------------------------------------------------------------

//Append element to container
 $container.append($element);
};

var button_dict = {
 'Missed doses':"Denies any missed doses.",
 'Bleeding/Bruising':"Denies any unusual bleeding or bruising",
 'Diet changes':"Denies any dietary changes.",
 'Medication changes':"Denies any medication changes",
 'ETOH Intake':'Denies any atypical ETOH intake',
 'Activity changes':"Denies changes in activity level.",
 'Health changes':"Denies any changes in health.",
 'Pain level/APAP':"Denies any issues with pain"
};

var button_objs =[];

for (var index in button_dict){
 button_objs.push(new Button(index,button_dict[index]));
}

for (i= 0;i<button_objs.length;i++){
 button_objs[i].render($('.button_container'));
}

// Code for quill editor

var editor =new Quill('#editor');
editor.addModule('toolbar',{container:'#toolbar'});

//Code for calender
function DayDose(date){
 var d = new Date(date);
 this.date_str = d.toLocaleDateString();
 this.day = d.getDate();
 this.dayofweek= d.getDay();
 this.udose = "";
 this.maindose = "";
 this.inr = "";
}

DayDose.prototype.setuDose = function(mg){
 if(mg !== ""){
   this.udose = mg.toString()+"mg";
 }
};

DayDose.prototype.setmainDose = function(mg){
 this.maindose = mg.toString()+'mg';
};

DayDose.prototype.weekday = function(){
         if (this.dayofweek == "0"){
     return "Sun";
   }else if (this.dayofweek == "1"){
     return "Mon";
   }else if (this.dayofweek =="2"){
     return "Tue";
   }else if (this.dayofweek =="3"){
     return "Wed";
   }else if (this.dayofweek =="4"){
     return "Thu";
   }else if (this.dayofweek =="5"){
     return "Fri";
   }else if (this.dayofweek =='6'){
     return "Sat";
   }
};

DayDose.prototype.render = function($container){
 var $element = $(
   "<div class='datebox'>"+
       "<div class='day'></div>"+
       "<div class='dose'></div>"+
       "<div class='popday'>"+
           "<div class='fulldate'></div>"+
               "<div class='INR_container'>INR:"+
                   "<div class='inputINR' contenteditable='true'></div>"+
               "</div>"+
               "<div class='inputdose_container'>Mg:"+
                   "<div class='inputdose' contenteditable='true'></div>"+
               "</div>"+
       "</div>"+
   "</div>"
 );


 var self = this;

 $element.css({
   "border":"solid black 1px",
   'border-radius':'3px',
   "width":"67px",
   "height":"13%",
   "float":"left",
   "margin":"1px",
   "position":'relative'
 });

 $element.find('.day')
         .text(self.day)
         .css({
   "border-left":'solid black 1px',
   "border-bottom":'solid black 1px',
   "width":"20px",
   "text-align":"center",
   "margin":"0px",
   'float':'right',
 });

 $element.find('.dose')
         .text(self.udose)
         .css({
   "clear":'right',
   'height':'15px',
   'text-align':'center',
   'padding-top':'2px',

 });

 $element.find('.popday')
         .css({
   'border':'solid grey 1px',
   'width':'200px',
   'height':'100px',
   'position':'absolute',
   'left':'50%',
   'bottom':'50%',
   'background-color':'white',
   'display':'none',
   'text-align':'center',
   'z-index':'1',
   'box-shadow': '5px 5px 5px #888888'
 });

 $element.find('.fulldate')
         .text(self.date_str);

 $element.find('.inputdose_container')
         .css({
   'float':'left',
   'width':'49%',
   'margin-top':'15px'
 });

 $element.find('.inputdose')
         .css({
   'border':'solid black 1px',
   'float':'right',
   'width': '50px',
   'height':'30px',
   'margin-right':'15px',
   'font-size':'160%'
 });

 $element.find('.INR_container')
         .css({
   'float':'right',
   'width':'49%',
   'margin-top':'15px'
 });

 $element.find('.inputINR')
         .css({
   'border':'solid black 1px',
   'float':'right',
   'width':'50px',
   'height':'30px',
   'font-size':'160%',
   'margin-right':'10px'
 });

  $element.click(function(){
    if($element.find('.popday').css('display') === "none"){
      $element.find('.popday').show('fast');
      $element.find('.inputdose').focus();
     // $(this).css('background-color','lightblue');
    }else{

    }
  });

 $element.find('.popday').mouseleave(function(){
   $('.popday').hide('fast');
   self.setuDose($element.find('.inputdose').text());
   $element.find('.dose').text(self.udose);
 });

 $container.append($element);
};


function Calender(){
 this.today = new Date();
 this.date_list =[];
 this.date_obj = [];
 this.start_date = 0;
 this.end_date = 0;
 this.gen_dates();
}

Calender.prototype.gen_dates = function(){
 var date = new Date();

 for(i = 0;i<100;i++){
   this.date_list.push(date.toLocaleDateString());
   date.setDate(date.getDate()+1);
 }

 date = new Date();

 for(i = 0;i<100;i++){
   date.setDate(date.getDate()-1);
   this.date_list.unshift(date.toLocaleDateString());
 }

 for(index = 0;index<this.date_list.length;index++){
   this.date_obj.push(new DayDose(this.date_list[index]));
 }

 var today = this.today.toLocaleDateString();
 var today_index = this.date_list.indexOf(today);
 var weekday = this.date_obj[today_index].dayofweek;
 var difference = 21;
 if(weekday=='0'){
   this.start_date = today_index;
   this.start_date -= difference;
 }else if(weekday=='1'){
   this.start_date = today_index-1;
   this.start_date -= difference;
 }else if(weekday == "2"){
   this.start_date=today_index-2;
   this.start_date -= difference;
 }else if(weekday =='3'){
   this.start_date=today_index-3;
   this.start_date -= difference;
 }else if(weekday =='4'){
   this.start_date=today_index-4;
   this.start_date -= difference;
 }else if(weekday =='5'){
   this.start_date=today_index-5;
   this.start_date -= difference;
 }else if(weekday =='6'){
   this.start_date=today_index-6;
   this.start_date -= difference;
 }

 this.end_date = this.start_date+42;

};

Calender.prototype.render = function($container){
 var $element = $(
   "<div class='calender_container'>"+
     "<div class='calender_topbar'>"+
       "<div class='calender_left'><</div>"+
       "<div class='calender_middle'></div>"+
       "<div class='calender_right'>></div>"+
     "</div>"+
   "</div>"
 );

 var self = this;

 $element.css({
   "border-left":"solid black 1px",
   "border-top":'solid black 1px',
   "width":"500px",
   "height":"350px",
 });

 $element.find('.calender_topbar')
         .css({
   "border-bottom":"solid black 1px",
   "margin":'auto',
   "width": "100%",
   "height": "40px"
 });

 $element.find('.calender_left')
         .css({
   "border-right":"solid black 1px",
   "width":"60px",
   "height":"100%",
   "float":"left",
   "text-align":"center",
   "font-size":"190%"
 });

 $element.find('.calender_middle')
         .css({
   //"border":"solid green 1px",
   "width":"374px",
   "float":"left",
   "text-align":"center",
   "font-size":"150%",
   "margin-top":"5px"
 });

 $element.find('.calender_right')
         .css({
   "border-left":"solid black 1px",
   "width":"60px",
   "height":"100%",
   "float":"left",
   "text-align":"center",
   "font-size":"190%"
 });

 $container.append($element);

 for(index=this.start_date;index<this.end_date;index++){
   this.date_obj[index].render($('.calender_container'));
 }

$('.calender_left').click(function(){
   $('.datebox').remove();
   self.start_date-=7;
   self.end_date-=7;
   for(index=self.start_date;index<self.end_date;index++){
     self.date_obj[index].render($('.calender_container'));
   }
 });

 $('.calender_right').click(function(){
 $('.datebox').remove();
 self.start_date+=7;
 self.end_date+=7;
 for(index=self.start_date;index<self.end_date;index++){
   self.date_obj[index].render($('.calender_container'));
 }
 });

 $('.inputdose').focusout(function(){
 });

};

Calender.prototype.past_weekly = function(){
 var today = this.today.toLocaleDateString();
 var today_index = this.date_list.indexOf(today);
 var dose_list =[];
 var total = 0;

 for(i= today_index-1;i>today_index-8;i--){
   if (this.date_obj[i].udose !== ""){
     dose_list.push(this.date_obj[i].udose);
   }
 }

 for(index =0;index<dose_list.length;index++){
   total += parseInt(dose_list[index]);
 }

return total.toString()+'mg';
};

function CHADS2_Container($container){
 this.chads2 = ['HTN','DM','CHF','CVA','AGE'];
 this.chads2_buttonobjs = [];
 this.gen_buttons();
 this.render($container);
 this.active_button = [];
 this.gen_assessment();
 this.assessment = '';

}

CHADS2_Container.prototype.gen_assessment = function(){
 var self = this;
 $('.chads2_button').click(function(){
   var disease_state = $(this).find('.chads2_right').text();
   if(self.active_button.indexOf(disease_state) === -1){
     self.active_button.push(disease_state);
   }else{
     self.active_button.splice(self.active_button.indexOf(disease_state),1);
   }
 });

 $('.chads2_button').click(function(){
   var total = 0;
    for(index = 0;index<self.active_button.length;index++){
     total+= self.chads2_buttonobjs[self.chads2.indexOf(self.active_button[index])].value();
   }
   var assessment = "Patient has a CHADS2 ="+total+ " (";
   if(self.assessment !== ''){
     addremove('after',"Assessment:",self.assessment);
   }
   if(self.active_button.length === 0){
     self.assessment = '';
   }else if(self.active_button.length ===1){
     self.assessment = assessment + self.active_button[0]+')';
   }else{
     for(index = 0;index<self.active_button.length-1;index++){
       assessment+= self.active_button[index]+',';
     }
     assessment+= self.active_button[self.active_button.length-1]+')';
     self.assessment = assessment;
   }
 });

  $('.chads2_button').click(function(){
   if(self.assessment !== ''){
     addremove("after","Assessment:",self.assessment);
   }
  });
};

CHADS2_Container.prototype.render = function($container){
 var $element = $("<div class='chads2_container'></div>");

 $element.css({
  // 'border':'solid black 1px',
   'width':'120px',
   'float':'left',
 });

 $container.append($element);

   for(i=0;i<this.chads2_buttonobjs.length;i++){
   this.chads2_buttonobjs[i].render($('.chads2_container'));
 }
};

CHADS2_Container.prototype.gen_buttons = function(){

 for(index = 0;index<this.chads2.length;index++){
   this.chads2_buttonobjs.push(new CHADS2_Button(this.chads2[index]));
 }

};

function CHADS2_Button(type){
 this.type = type;
 this.value = function(){
   if(this.type !== 'CVA'){
     return 1;
   }else{
     return 2;
   }
 };
}

CHADS2_Button.prototype.render = function($container){
 var $element = $(
   "<div class = 'chads2_button'>"+
       "<div class= 'chads2_left'><div class='circle'></div></div>"+
       "<div class= 'chads2_right'></div>"+
   "</div>"
 );

 var self = this;

 $element.css({
   'width':'120px',
   'height':'18px',
   'float':'left',
   'clear':'left',
   'margin':'2px'
 });

 $element.find('.chads2_left')
         .css({
   'border':'solid black 1px',
   'border-radius':'40px 0 0 40px',
   'border-right':'none',
   'text-align':'center',
   'float':'left',
   'width':'21%',
   'height':'100%'
 });

 $element.find('.circle')
         .css({
   'border':'solid black 1px',
   'border-radius':'50px',
   'margin-top':'4px',
   'margin-left':'5px',
   'height':'8px',
   'width':'8px'
 });

 $element.find('.chads2_right')
         .text(self.type)
         .css({
   'border':'solid black 1px',
   'float':'left',
   'width':'50%',
   'height':'98%',
   'text-align':'center',
   'background-color':'white'
 });

 $container.append($element);

 $element.on('mouseenter',function(){
   $element.find('.circle')
           .stop().animate({width:"17px",backgroundColor:'black'});
 });

 $element.on('mouseleave',function(){
   $element.find('.circle')
           .css('background-color','white')
           .stop().animate({width:"8px"});
 });

$element.on('click',function(){
   if($element.find('.chads2_right').css('background-color') === 'rgb(255, 255, 0)'){
      $element.find('.chads2_right').animate({width:'50%',backgroundColor:'rgb(255, 255, 255)'},300);
      $element.find('.chads2_left').show(1).animate({width:'21%',opacity:'1'},600);
      $element.find('.circle').show(1);
      $element.on('mouseenter',function(){
        $(this).find('.circle').stop().animate({width:"17px",backgroundColor:'black'});
      });
     $element.on('mouseleave',function(){
       $(this).find('.circle').css('background-color','white').stop().animate({width:"8px"});
     });
      }else{
        $element.off('mouseleave');
        $element.find('.circle').hide('fast');
        $element.find('.chads2_left')
                .animate({width:'0%',opacity:'0'},300)
                .hide(1);
        $element.find('.chads2_right')
           .animate({width:'90%',backgroundColor:'yellow'},600);
      }
 });
};


container = new CHADS2_Container($('.button_container'));

var calender = new Calender();

calender.render($('.calender'));
