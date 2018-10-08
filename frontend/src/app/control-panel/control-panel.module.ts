import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ControlPanelComponent } from './control-panel.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../_interceptor/auth.interceptor';
import { LogoutComponent } from '../logout/logout.component';
import { LoginGuard } from '../_guards/login.guard';

const controlPanelRouters: Routes = [
  {
    path: 'control-panel',
    component: ControlPanelComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'control-panel/users',
        component: UsersComponent,
        canActivate: [LoginGuard]
      }
    ]
  }, 
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(controlPanelRouters),
    HttpClientModule,
    HttpModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  declarations: [
    UsersComponent,
    ControlPanelComponent
  ]
})
export class ControlPanelModule {
  
}
