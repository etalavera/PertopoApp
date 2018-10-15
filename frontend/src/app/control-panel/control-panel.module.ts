import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ControlPanelComponent } from './control-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddComponent } from './users/add/add.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const controlPanelRouters: Routes = [
  {
    
    path: 'users',
    component: UsersComponent,
    outlet: 'usersOutlet',
    children: [
      {
        path: 'add',
        component: AddComponent
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(controlPanelRouters);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(controlPanelRouters),
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    UsersComponent,
    ControlPanelComponent,
    AddComponent
  ],
  exports: [RouterModule]
})
export class ControlPanelModule {
}
