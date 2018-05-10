import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
              <h1 class="text-success">TEXT 1</h1>
              <h1 [class]=successClass>TEXT 2</h1>
              <h1 class="text-special" [class]=successClass >TEXT 3</h1>
              <h1 [class.text-danger]=hasError>TEXT 4</h1>
              <h1 [ngClass]=message>TEXT 5</h1>
              `,

  styles: [`
              .text-success{
                color:green;
              }

              .text-danger{
                color:red;
              }

              .text-special{
                font-style:italic;
              }
              `]
})
export class ClassBindingComponent implements OnInit {
  
  constructor() { }
  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public message={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  ngOnInit() {
  }

}
