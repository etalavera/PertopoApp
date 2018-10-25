import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../_services/logout/logout.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedUser: string;
  constructor(
    private logoutService: LogoutService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.loggedUser = localStorage.loggedUser;
    document.body.className="nav-md";
    this.createScript("text/javascript", "../../assets/build/js/custom.1.0.js");
  }

  createScript(type: string, src: string): void {
    
    let createdScript = document.createElement('script');
    createdScript.type = type;
    createdScript.src = src;

    document.body.appendChild(createdScript);
  }

  logout() {
    this.spinner.show();
    const token = localStorage.access_token;
    
    this.logoutService.logout(token)
      .subscribe((data) => {
        
        if (data.message == "Successfully logged out") {
          localStorage.clear();
          this.router.navigate(['logout']);
        }
        this.spinner.hide();
      }, error => {
        alert(error.message)
      });
  }

}
