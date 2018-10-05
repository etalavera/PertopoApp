import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './_guards/login.guard';
import { NoLoginGuard } from './_guards/no-login.guard';
import { LogoutComponent } from './logout/logout.component';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', component: ControlPanelComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: 'logout', component: LogoutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ControlPanelComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    //NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
