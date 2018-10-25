import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../_services/login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
  
  constructor(private router: Router, 
    private loginService: LoginService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    document.body.className = "login";
  }

  login(form: NgForm) {
    
    this.email = form.value.email;
    this.password = form.value.password;

    this.spinner.show();

    this.loginService.login(this.email, this.password)
      .subscribe((data) => {
        
        localStorage.access_token = data.access_token;
        localStorage.loggedUser = data.user.primerNombre + ' ' + data.user.apellidoPaterno;
        this.spinner.hide();
        if (data.user.active == 0) {
          alert('Usuario desactivado, contacte al administrador del sistema');
          localStorage.clear();
        }
        else {
          this.router.navigate([''], {relativeTo: this.route});
        }        
      }, error => {
        this.spinner.hide();
        alert(error.statusText);
      });
  }
}
