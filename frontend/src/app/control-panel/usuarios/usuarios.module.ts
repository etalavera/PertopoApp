import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    TabsModule.forRoot(),
    AppRoutingModule
  ],
  exports: [RouterModule],
  declarations: [UsuariosComponent]
})
export class UsuariosModule { }
