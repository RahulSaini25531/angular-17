import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-foody',
  templateUrl: './foody.component.html',
  styleUrl: './foody.component.css'
})
export class FoodyComponent {

  @Input() img!:String;
  @Input() title!:String;
  @Input() alt!:String;
  @Input() rating!:String;
  @Input() Resttaurant!:String;
  @Input() discount!:String;
  @Input() price!:String;
  @Input() money!:String;

}
