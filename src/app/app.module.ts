import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StlModelViewerModule } from 'angular-stl-model-viewer'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StlModelViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
