import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../_services/login/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
  
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
  }

  login(form: NgForm) {
    
    this.email = form.value.email;
    this.password = form.value.password;
    
    this.loginService.login(this.email, this.password)
      .subscribe((data) => {
        debugger;
        if (data.user.active == 0) {
          return alert("El usuario está inactivo, favor de contactar al administrador del sistema");
        }
        localStorage.access_token = data.access_token;
        localStorage.user = data.user.name;
        this.router.navigate(['']);
      }, error => {
        alert(error.statusText);
      });
  }
}
