import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { DisplayKegComponent } from './display-keg/display-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    AddKegComponent,
    DisplayKegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
