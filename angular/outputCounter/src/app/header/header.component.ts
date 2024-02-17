import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() rahul=new EventEmitter();
 count=0;
 value1!:string;
 value2!:string;
 value3!:string;
 send()
 {
  this.rahul.emit(this.value1+" "+this.value2+" "+this.value3)
 }
  incr()
  {
     this.count++;
  }
  decr()
  {
    this.count=this.count+2;
  }
  reset()
{
  this.count=0;
}
}
