import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users/users.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from '../../_services/roles/roles.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  usersList: any = new Array();
  usersArray;

  closeResult: string;
  registerForm: FormGroup;
  rolesData: any;

  constructor(private usersService: UsersService,
    private spinner: NgxSpinnerService,
    private roles: RolesService,
    private router: Router,
    private route: ActivatedRoute) { 

    }

  ngOnInit() {
    this.spinner.show();
    this.getUsers();
    this.getRoles();
    console.log('users, activated');
    console.log(this.route);
  }

  signup(form: NgForm) {
    
    const body = {
      primerNombre: form.value.primerNombre,
      segundoNombre: form.value.primerNombre,
      apellidoPaterno: form.value.apellidoPaterno,
      apellidoMaterno: form.value.apellidoMaterno,
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.password_confirmation 
    }
    
    this.usersService.postSignup(body)
      .subscribe((data) => {
      }, error => {
        alert(error);
      });
  }

  getRoles() {
    return this.roles.getRoles()
      .subscribe((data) => {
        this.rolesData = data
      }, error => {
        alert(error);
      });
  }

  getUsers() {
    return this.usersService.getUsersAndStaff()
      .subscribe((data) => {
        this.users = data;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        alert(error.message);
      });
  }

  openAddUsers(content) {
    this.router.navigate(['addUsers']);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
