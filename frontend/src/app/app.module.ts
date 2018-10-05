import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './_guards/login.guard';
import { NoLoginGuard } from './_guards/no-login.guard';
import { LogoutComponent } from './logout/logout.component';
import { HttpModule } from '@angular/http';
import { componentFactoryName } from '@angular/compiler';
import { UsersComponent } from './control-panel/users/users.component';

const routes: Routes = [
  { path: '', component: ControlPanelComponent, canActivate: [LoginGuard] },
  { path: 'control-panel', component: ControlPanelComponent, canActivate: [LoginGuard], children: [
    { 
      path: 'users', 
      component: UsersComponent,
      canActivate: [LoginGuard]
    }
  ] },
  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: 'logout', component: LogoutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlPanelComponent,
    LogoutComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    //NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
