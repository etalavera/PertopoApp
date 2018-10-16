import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './_guards/login.guard';
import { NoLoginGuard } from './_guards/no-login.guard';
import { LogoutComponent } from './logout/logout.component';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from './_interceptor/auth.interceptor';

import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './control-panel/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgxSpinnerModule,
    UsersModule
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
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
