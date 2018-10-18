import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [ClientesComponent]
})
export class ClientesModule { }
