import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'parent1';

  pname!:string;

  
 @ViewChild(Child2Component) C1 !:Child2Component;
cname!:string
 ngAfterViewInit()
 {
  
 }


 
// pass()
// {
//   const child = this.C1.getInputValue();
//   this.cname=child;
// }
 val2=true;
 val1=false;
 val3=false;

 btn1()
 {
  this.val2=false;
  this.val1=false;
  this.val3=false; 
 }

 btn2()
 {
  this.val2=true;
  this.val1=false;
  this.val3=false; 
 }
 btn3()
 {
  this.val2=false;
  this.val1=false;
  this.val3=false; 
 }




  //  str=this.C1.childname;
}
