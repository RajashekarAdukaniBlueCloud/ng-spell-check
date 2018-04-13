import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpellCheckModule } from './modules/spell-check/spell-check.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpellCheckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
