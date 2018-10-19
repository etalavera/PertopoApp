import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './_guards/login/login.guard';
import { NoLoginGuard } from './_guards/login/no-login.guard';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_interceptor/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ClientesComponent } from './control-panel/clientes/clientes.component';
import { ClientesModule } from './control-panel/clientes/clientes.module';
import { UsuariosComponent } from './control-panel/usuarios/usuarios.component';
import { MaquinariaComponent } from './control-panel/maquinaria/maquinaria.component';
import { AddComponent } from './control-panel/usuarios/add/add.component';
import { AddModule } from './control-panel/usuarios/add/add.module';
import { UsuariosModule } from './control-panel/usuarios/usuarios.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [LoginGuard] },
  { 
    path: 'home', component: HomeComponent, canActivate: [LoginGuard], children: [
    { path: '', component: HomeComponent },
    {
      path: 'usuarios', component: UsuariosComponent, canActivate: [LoginGuard],
      outlet: "usuarios",
      loadChildren: './control-panel/usuarios/add/add.module#AddModule'
    },
    { 
      path: 'clientes', component: ClientesComponent, canActivate: [LoginGuard],
      outlet: "clientes" 
    }, 
    {
      path: 'maquinaria', component: MaquinariaComponent, canActivate: [LoginGuard],
      outlet: "maquinaria"
    }
    
  ]},
  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] }
  
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    HomeModule,
    ClientesModule,
    UsuariosModule,
    AddModule,
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
