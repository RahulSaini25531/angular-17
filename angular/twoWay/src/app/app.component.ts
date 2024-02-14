import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twoWay';
  val:any;
  name5!:String;
  email!: String;
  pwd!:number;
  fun()
  {
     const el = document.getElementById('nam') as HTMLInputElement
     this.val=el.value;
  }
  
  show()
  {
    alert(`Register successfullt \n ${this.name5} \n ${this.email} \n ${this.pwd}`)
  }
}
