import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <!--<h1 style="text-align:center; color: brown;"> ngif Examples  </h1>
        <h2 *ngIf="true"> Jharkhand</h2>

        <h2 *ngIf="displayName; else elseBlock" >
        Akash
        </h2>-->


        <!--if block using then ng template-->

        <!--<div *ngIf="displayName; then thenBlock; else elseBlock"></div>

        <ng-template #thenBlock>
        <h2>
        Verma
        </h2>
        </ng-template>

       <ng-template #elseBlock>
       <h2>
       Name is Hidden
       </h2>
       </ng-template>
       <app-ng-switch-example></app-ng-switch-example>
       -->
       <app-ng-for-example></app-ng-for-example>
       
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayName=false;
}
