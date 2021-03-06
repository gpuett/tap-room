import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { DisplayKegComponent } from './display-keg/display-keg.component';
import { PercentagePipe } from './percentage.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddKegComponent,
    DisplayKegComponent,
    PercentagePipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
