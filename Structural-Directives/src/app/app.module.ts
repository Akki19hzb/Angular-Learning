import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';


@NgModule({
  declarations: [
    AppComponent,
    NgSwitchExampleComponent,
    NgForExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
