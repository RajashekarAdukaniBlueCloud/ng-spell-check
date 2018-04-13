import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    SpellCheckComponent
  ],
  exports: [
    SpellCheckComponent
  ]
})
export class SpellCheckModule { }
