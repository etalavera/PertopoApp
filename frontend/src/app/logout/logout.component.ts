import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LogoutService } from '../_services/logout/logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService: LogoutService) { }

  ngOnInit() {
  }

  logout() {
    const token = localStorage.access_token;
    
    this.logoutService.logout(token)
      .subscribe((data) => {
      }, error => {
        alert(error.message)
      });
  }


}
