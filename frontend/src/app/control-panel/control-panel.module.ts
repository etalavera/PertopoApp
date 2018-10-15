import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ControlPanelComponent } from './control-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginGuard } from '../_guards/login.guard';
import { AddUsersComponent } from './add-users/add-users.component';

const controlPanelRouters: Routes = [
  {
    path: 'control-panel', component: ControlPanelComponent, canActivate: [LoginGuard],
    children: [
      { path: 'users', component: UsersComponent, children: [
        { path: 'addUsers', component: AddUsersComponent }
      ] },
    ]
  },

];

export const routing: ModuleWithProviders = RouterModule.forChild(controlPanelRouters);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(controlPanelRouters),
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    UsersComponent,
    ControlPanelComponent,
    AddUsersComponent
  ],
  exports: [RouterModule]
})
export class ControlPanelModule {
}
