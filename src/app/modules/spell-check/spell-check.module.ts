import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellCheckComponent } from './spell-check.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpellCheckComponent
  ],
  exports: [
    SpellCheckComponent
  ]
})
export class SpellCheckModule { }
