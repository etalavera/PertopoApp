import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users/users.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  closeResult: string;
  registerForm: FormGroup;

  constructor(private usersService: UsersService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getUsers();
  }

  signup(form: NgForm) {
    debugger;
    const body = {
      primerNombre: form.value.primerNombre,
      segundoNombre: form.value.primerNombre,
      apellidoPaterno: form.value.apellidoPaterno,
      apellidoMaterno: form.value.apellidoMaterno,
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.password_confirmation 
    }
    console.log(body);
    this.usersService.postSignup(body)
      .subscribe((data) => {
        debugger;
      }, error => {
        alert(error);
      });
  }

  get f() { return this.registerForm.controls }

  getUsers() {
    return this.usersService.getUsers()
      .subscribe((data) => {
        this.users = data;
      }, error => {
        alert(error.message);
      });
  }

  openAddUsers(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
