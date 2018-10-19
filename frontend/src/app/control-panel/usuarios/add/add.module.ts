import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddComponent],
  exports: [AddModule]
})
export class AddModule { }
