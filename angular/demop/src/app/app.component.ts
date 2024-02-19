import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DemocComponent } from './democ/democ.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'demop';
  msg!:String;
  recieve(str:String)
  {
    this.msg=str;
  }

  @ViewChild(DemocComponent) child! : DemocComponent;

  ngAfterViewInit()
  {
   
  }
  invokeChildMethod()
  {
    this.child.sayHello();
  }
}
