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
        localStorage.access_token = data.access_token;
      }, error => {
        debugger;
        alert("Service Response Error");
      });

    /*if (form.value.email === "enrique" && form.value.password === "talavera") {
      localStorage.setItem('email', form.value.email);
      this.router.navigate(['']);
    }
    else {
      alert("Usuario o Contraseña Incorrectos")
    }*/
  }
}
