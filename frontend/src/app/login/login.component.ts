import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    
    if (form.value.email === "enrique" && form.value.password === "talavera") {
      localStorage.setItem('email', form.value.email);
      this.router.navigate(['']);
    }
    else {
      alert("Usuario o Contraseña Incorrectos")
    }
  }
}
