import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpellCheckComponent } from './spell-check.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SpellCheckComponent
  ],
  exports: [
    SpellCheckComponent
  ]
})
export class SpellCheckModule { }
