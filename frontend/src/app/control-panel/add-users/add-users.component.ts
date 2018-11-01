import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../_services/users/users.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  addUsers(form: NgForm) {
    this.spinner.show();
    
    this.usersService.addUsers(form.value)
      .subscribe((data) => {
        
        this.spinner.hide();
        if (data.code == "201")
          alert("Usuario creado correctamente");
        
      }, error => {
        this.spinner.hide();
        alert(error.message);
      });
  }

}
