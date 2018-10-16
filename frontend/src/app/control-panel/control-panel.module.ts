import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ControlPanelComponent } from './control-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddUsersComponent } from './add-users/add-users.component';
import { UsersModule } from './users/users.module';
import { AddUsersModule } from './add-users/add-users.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    UsersModule,
    AddUsersModule
  ],
  declarations: [
    UsersComponent,
    ControlPanelComponent,
    AddUsersComponent,
    UsersComponent
  ],
  exports: [RouterModule]
})
export class ControlPanelModule {
}
