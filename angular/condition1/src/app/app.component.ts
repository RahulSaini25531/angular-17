import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'condition1';
  name="shaker"
  isshaker =false;

  fun()
  {
    if(this.isshaker==false)
    {
      this.isshaker =true;
      document.body.classList.add('overlay')
    }
    else
    {
      this.isshaker =false;
      document.body.classList.remove('overlay')
    }
    }
 value!:String;
  }

