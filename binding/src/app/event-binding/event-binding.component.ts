import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
        <button (click)="onClick()">Greet</button>
        {{greeting}}
        <br><br>
        <button (click)="onClickDetails($event)">Button to get event details</button>
        {{details}}
        <button (click)="message='Welcome AKASH'">Without Event handler</button>
        {{message}}<br><br>
        <input #myInput type="text">
        <button (click)="logMessage(myInput.value)">Log</button>

               `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
  public greeting=""
  public details=""

  ngOnInit() {
  }
  onClick(){
    console.log("Welcome to Hazaribag");
    this.greeting="Welcome to Hazaribag";
  }
  onClickDetails(event){
    console.log(event);
    this.details=event.type
    }
  logMessage(value){
    console.log(value)
  }
}
