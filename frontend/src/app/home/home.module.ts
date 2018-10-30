import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UsersModule } from '../control-panel/users/users.module';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { AddUsersModule } from '../control-panel/add-users/add-users.module';


@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    AddUsersModule
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, DefaultComponent]
})
export class HomeModule { }
