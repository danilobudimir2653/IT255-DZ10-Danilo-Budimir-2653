import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {SortSnaga} from './pipes/sortSnaga';
import {KubikazaMotora} from './pipes/sortKubikaza';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SortSnaga,
    KubikazaMotora

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
