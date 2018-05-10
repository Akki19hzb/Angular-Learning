import { Component, OnInit, style } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
            <h1 [style.color]="'orange'">Style-Binding 1</h1>
            <h1 [style.color]="hasError?'red':'green'">Style-Binding 2</h1>
            <h1 [style.color]="highlightcolor">Style-Binding 3</h1>
            <h1 [ngStyle]="titleStyle">Style-Binding 4</h1>
  `,
  styles: [``]
})
export class StyleBindingComponent implements OnInit {

  constructor() { }
  public hasError=false;
  public highlightcolor="blue"
  public titleStyle={
    color:"blue",
    fontStyle:"italic"
    
  }
  ngOnInit() {
  }

}
