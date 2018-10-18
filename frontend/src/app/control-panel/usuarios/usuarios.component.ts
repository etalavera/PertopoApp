import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users/users.service';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: any;

  constructor(
    private usersServices: UsersService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getUsers();
  }

  getUsers()
  {
    this.usersServices.getUsers()
      .subscribe((data) => {
        this.spinner.hide();
        return  this.users = data;
      });
  }
}
