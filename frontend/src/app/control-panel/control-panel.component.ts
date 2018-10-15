import { Component, OnInit, Input } from '@angular/core';
import { LogoutService } from '../_services/logout/logout.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  user: any;

  constructor (private logoutService: LogoutService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.user = localStorage.user;
  }

  logout() {
    const token = localStorage.access_token;
    
    this.logoutService.logout(token)
      .subscribe((data) => {
        localStorage.clear();
        this.router.navigate(['logout']);
      }, error => {
        alert(error);
      });
  }
}
