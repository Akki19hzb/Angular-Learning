import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  template: `<h1> Welcome {{name}}</h1>
  <input [id]='myId' type="text" value="Akash"> 
  <input id={{myId}} type="text" value="Akash"> <br><br>
    
  <input [disabled]="isDisabled" id={{myId}} type="text" value="Akash"> 
  <input bind-disabled="isDisabled" id={{myId}} type="text" value="Akash"> 
  `,
  styles: [``]
})
export class AttributeBindingComponent implements OnInit {
  public name= 'Akash'
  public myId= "testId"  
  public isDisabled =false
  constructor() { }

  ngOnInit() {
  }

}
