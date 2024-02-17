import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="Input";
  img1="../../assets/book1.avif";
  title1="book1";

  img2="../../assets/book2.avif";
  title2="book2";


  img3="../../assets/book3.avif";
  title3="book3";


  img4="../../assets/book4.avif";
  title4="book4";
  c=0;
  incr()
  {
    this.c++;
  }

}
