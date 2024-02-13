import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="counter";
  count=0;
  isDisabled=false;
  isEven=true;
  evenFlag=true;
  check()
  {
    if(this.count%2==1||this.count%2==-1){this.isEven=false; this.evenFlag=false;}
    else{this.isEven=true; this.evenFlag=true;}
  }
 
  incre(){

    if(this.count>=20)
    {
      this.isDisabled=true;
      this.check();
    }
   else{
    this.count++;
    this.check();
    this.isDisabled=false;
   }
  
    
  }
  decre(){
   
      this.count--;
      this.check();
     
  }
  reset(){this.count=0;
    this.check();
  }



}
