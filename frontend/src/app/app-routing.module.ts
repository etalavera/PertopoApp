import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './_guards/login/login.guard';
import { NoLoginGuard } from './_guards/login/no-login.guard';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_interceptor/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './_shared/page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './control-panel/users/users.component';
import { UsersModule } from './control-panel/users/users.module';
import { DefaultComponent } from './home/default/default.component';

const routes: Routes = [
  { path: '', redirectTo:'/home/index', pathMatch:'full', canActivate: [LoginGuard] },
  { 
    path: 'home', component: HomeComponent, canActivate: [LoginGuard], children: [
      {path: '', redirectTo: '/home/index', pathMatch:'full', canActivate: [LoginGuard]},
      { path: 'index', component: DefaultComponent, canActivate: [LoginGuard] },
      { path: 'users', component: UsersComponent, canActivate: [LoginGuard] }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [LoginGuard] },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    HomeModule,
    UsersModule,
    RouterModule.forRoot(routes)
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
