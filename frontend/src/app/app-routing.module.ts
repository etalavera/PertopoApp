import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './_guards/login/login.guard';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { NoLoginGuard } from './_guards/no-login.guard';
import { UsersComponent } from './control-panel/users/users.component';
import { UsersModule } from './control-panel/users/users.module';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './control-panel/add-users/add-users.component';
import { AddUsersModule } from './control-panel/add-users/add-users.module';

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [LoginGuard]},
  { path: 'users', redirectTo: 'control-panel/users', pathMatch: 'full' },
  { path: 'control-panel/users', component: UsersComponent },
  { path: 'addUsers', redirectTo: 'control-panel/users/add', pathMatch: 'full' },
  { path: 'control-panel/users/add', component: AddUsersComponent }
  
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    ControlPanelModule,
    UsersModule,
    AddUsersModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoginGuard, 
    NoLoginGuard, 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
