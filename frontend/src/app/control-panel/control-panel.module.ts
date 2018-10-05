import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ControlPanelComponent } from './control-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const controlPanelRouters: Routes = [
  {
    path: 'control-panel',
    component: ControlPanelComponent,
    children: [
      {
        path: 'control-panel/users',
        component: UsersComponent
      }
    ]
  }
];

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
    ControlPanelComponent
  ]
})
export class ControlPanelModule {
  
}
