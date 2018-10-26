import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UsersModule } from '../control-panel/users/users.module';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';


@NgModule({
  imports: [
    CommonModule,
    UsersModule
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, DefaultComponent]
})
export class HomeModule { }
