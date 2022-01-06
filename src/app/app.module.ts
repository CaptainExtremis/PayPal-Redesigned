import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomepageComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ HomepageComponent ],
  bootstrap:    [ HomepageComponent ]
})
export class AppModule { }
