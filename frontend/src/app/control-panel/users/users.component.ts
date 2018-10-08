import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe((data) => {
        debugger;
        this.users = data;
      }, error => {
        debugger;
      })
  }

}
