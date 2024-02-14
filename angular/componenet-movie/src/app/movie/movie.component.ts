import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  @Input() img!:String;
  @Input() title!:String;
  @Input() alt!:String;
  @Input() link!:String;
}
