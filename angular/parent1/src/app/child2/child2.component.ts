import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
 
  @Input() name!:string;

  
  // getInputValue()
  // {
  //   return this.cname;
  // }
 

}
