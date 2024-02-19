import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receipes';

  receipe:any[]=[];

  constructor()
  {
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
      .then((data) => {  this.receipe = data.recipes });
  }
}
