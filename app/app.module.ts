import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AppComponent }   from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'; 

import {AppRoutingModule, routableComponents } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    routableComponents
  ], 
  bootstrap: [ AppComponent]
})
export class AppModule {
}
