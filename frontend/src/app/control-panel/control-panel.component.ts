import { Component, OnInit, Input } from '@angular/core';
import { LogoutService } from '../_services/logout/logout.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  constructor (private logoutService: LogoutService) {}
  ngOnInit() {
  }

  logout() {
    const token = localStorage.access_token;
    debugger;
    this.logoutService.logout(token)
      .subscribe((data) => {
        debugger;
      }, error => {
        debugger;
      });
  }
}
