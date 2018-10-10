import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './_guards/login.guard';
import { NoLoginGuard } from './_guards/no-login.guard';
import { LogoutComponent } from './logout/logout.component';
import { HttpModule } from '@angular/http';
import { UsersComponent } from './control-panel/users/users.component';
import { AuthInterceptor } from './_interceptor/auth.interceptor';

import { NgxSpinnerModule } from 'ngx-spinner';

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
  { path: 'logout', component: LogoutComponent, canActivate: [NoLoginGuard]},
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
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    NgxSpinnerModule
  ],
  providers: 
  [
    LoginGuard, 
    NoLoginGuard, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
