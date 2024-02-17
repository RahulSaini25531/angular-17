import { Component,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() rahul=new EventEmitter();
  count=0;
  value1!:string;
  value2!:string;
  
  send()
  {
   this.rahul.emit("name is : "+this.value1+" "+"\n Email is :"+this.value2)
  }
  @Input() msg!:String;
}
