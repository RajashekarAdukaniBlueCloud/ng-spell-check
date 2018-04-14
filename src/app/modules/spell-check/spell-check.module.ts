import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

import { SpellCheckComponent } from './spell-check.component';
import { SpellCheckService } from './spell-check.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SpellCheckService
  ],
  declarations: [
    SanitizeHtmlPipe,
    SpellCheckComponent
  ],
  exports: [
    SpellCheckComponent
  ]
})
export class SpellCheckModule { }
