import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutService } from '../_services/logout/logout.service';
import { LogoutComponent } from './logout.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    LogoutService
  ],
  declarations: [LogoutComponent]
})
export class LogoutModule { }
