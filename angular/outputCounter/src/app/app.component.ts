import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'outputCounter';
  @ViewChild(HeaderComponent) hc!:HeaderComponent;
  c=0;
  recieved()
  {
    this.c=this.hc.count
  }
  info!:String;
  receive(str:String)
  {
       this.info=str;
  }
}
