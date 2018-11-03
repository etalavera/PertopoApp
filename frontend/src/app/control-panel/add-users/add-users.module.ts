import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUpperCaseDirectiveModule
  ],
  declarations: [AddUsersComponent]
})
export class AddUsersModule { }
