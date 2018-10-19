import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users/users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: any;
  usersLength: number;

  constructor(
    private usersServices: UsersService,
    private spinner: NgxSpinnerService,
    private router: Router
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
        this.users = data;
        this.usersLength = this.users.length;
        console.log(this.usersLength);
        return this.users;
      });
  }

  addUsers()
  {
    this.router.navigate([{outlet: {usuarios: 'add'}}]);
  }
}
