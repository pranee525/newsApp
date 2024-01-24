import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsHomeComponent } from './news-home/news-home.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    
  NewsHomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NewsHomeComponent]
})
export class AppModule { }
