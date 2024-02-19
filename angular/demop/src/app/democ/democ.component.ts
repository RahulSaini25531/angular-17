import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-democ',
  templateUrl: './democ.component.html',
  styleUrl: './democ.component.css'
})
export class DemocComponent {
@Output() messageEvent = new EventEmitter();

SendMessage()
{
  this.messageEvent.emit('this is message from child')
}

sayHello()
{
  alert('child component did something .');
}
}
