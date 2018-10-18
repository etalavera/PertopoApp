import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ClientesModule } from '../control-panel/clientes/clientes.module';
import { UsuariosModule } from '../control-panel/usuarios/usuarios.module';
import { MaquinariaModule } from '../control-panel/maquinaria/maquinaria.module';

@NgModule({
  imports: [
    CommonModule,
    UsuariosModule,
    ClientesModule,
    MaquinariaModule
  ],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class HomeModule { }
