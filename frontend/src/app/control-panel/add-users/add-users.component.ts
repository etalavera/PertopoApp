import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../../_services/users/users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidacionesDirective } from '../../_directives/validaciones.directive';
import { RolesService } from '../../_services/roles/roles.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUserForm: FormGroup
  allRoles: any;

  constructor(
    private usersService: UsersService,
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private rolesService: RolesService
  ) { 
    this.addUserForm = this.formBuilder.group({
      primerNombre: ['', [
        Validators.required, 
        ValidacionesDirective.validateOnlyLetters
      ]],
      segundoNombre: ['', [
        ValidacionesDirective.validateOnlyLettersWithSpaces
      ]],
      apellidoPaterno: ['', [
        Validators.required,
        ValidacionesDirective.validateOnlyLettersWithSpaces
      ]],
      apellidoMaterno: ['', [
        Validators.required,
        ValidacionesDirective.validateOnlyLettersWithSpaces
      ]],
      domicilio: ['', [
        Validators.required,
        ValidacionesDirective.validateOnlyLettersWithSpaces
      ]],
      exterior: ['', Validators.required],
      interior: ['', [
        ValidacionesDirective.validateOnlyNumbers
      ]],
      colonia: ['', [
        Validators.required,
        ValidacionesDirective.validateOnlyLettersWithSpaces
      ]],
      municipio: ['', [
        Validators.required,
        ValidacionesDirective.validateOnlyLettersWithSpaces
      ]],
      estado: ['', [
        Validators.required,
        ValidacionesDirective.validateOnlyLettersWithSpaces
      ]],
      cp: ['', [
        Validators.required, 
        Validators.maxLength(5),
        ValidacionesDirective.validateOnlyNumbers
      ]],
      telefono: ['', [
        Validators.required, 
        Validators.maxLength(10)
      ]],
      password: ['', Validators.required],
      email: ['', [
        Validators.required, Validators.email
      ]],
      rol: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit() {
    this.getAllRoles();
  }

  addUsers(control: FormControl) {
    this.spinner.show();
    this.usersService.addUsers(control.value)
      .subscribe((data) => {
        
        this.spinner.hide();
        if (data.code == "201")
          alert("Usuario creado correctamente");
        
      }, error => {
        this.spinner.hide();
        alert(error.message);
      });
  }

  getAllRoles() {
    this.rolesService.getRoles()
      .subscribe((data) => {
        debugger;
        this.allRoles = data;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        alert(error.message);
      })
  }

}
