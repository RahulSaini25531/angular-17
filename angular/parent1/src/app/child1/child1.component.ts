import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  
  count=0;
  incr()
  {
       this.count++;
       alert("You have add +1 int the count");
       
  }
  decr()
  {
    this.count--;
    alert("You have subtract -1 int the count");

  }
  reset()
  {
    this.count=0;
    alert("You make the count zero");
  }

  incr2()
  {
       this.count=this.count+2;
       alert("You have add +2 int the count");
  }
  decr2()
  {
    this.count=this.count-2;
    alert("You have subtract -2 int the count");

  }

  
  
}
