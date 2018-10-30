import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users/users.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService, private spinner: NgxSpinnerService) { }

  allUsers: any;
  allUsersLength: any;

  ngOnInit() {
    this.spinner.show();
    this.getAllUsers();
  }

  getAllUsers() {
    this.usersService.getUsers()
      .subscribe((data) => {
        this.allUsers = data;
        this.allUsersLength = this.allUsers.length;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        alert(error.message);
      });
  }

}
