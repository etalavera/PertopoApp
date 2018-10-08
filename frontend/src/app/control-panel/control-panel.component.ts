import { Component, OnInit, Input } from '@angular/core';
import { LogoutService } from '../_services/logout/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  user = localStorage.user;

  constructor (private logoutService: LogoutService, private router: Router) {}
  ngOnInit() {
  }

  logout() {
    const token = localStorage.access_token;
    
    this.logoutService.logout(token)
      .subscribe((data) => {
        debugger;
        if (data.status == 200 && data.statusText == "OK")
          localStorage.access_token = "";
        this.router.navigate(['/logout']);
      }, error => {
        debugger;
      });
  }
}
