import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  n = "Rahul"
 img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8p_uyHM6mH-1Y5gEWaIcjnodGx3gKikrgQ&usqp=CAU";
  title = "Samsung";
  price = "79,999";
  isNotAvailable=true ;
  fun()
  {
    alert("button clicked")
  }
}
