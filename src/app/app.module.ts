import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import {IMaskModule} from 'angular-imask';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
