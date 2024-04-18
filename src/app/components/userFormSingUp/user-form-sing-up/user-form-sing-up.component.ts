import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService/auth-service.service';

@Component({
  selector: 'user-form-sing-up',
  templateUrl: './user-form-sing-up.component.html',
  styleUrls: ['./user-form-sing-up.component.css']
})
export class UserFormSingUpComponent {
  public error: string = ""
  constructor(private fb: FormBuilder, private authService: AuthService){
  }
  formSingUp = this.fb.group({
    nameEnterprise: ["", [Validators.required, Validators.minLength(5)]],
    email: ["", [Validators.required, Validators.email]],
    usernameEnterprise: ["", [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  get usernameEnterprise(){
    return this.formSingUp.get("usernameEnterprise")
  }
  get email(){
    return this.formSingUp.get("email")
  }
  get nameEnterprise(){
    return this.formSingUp.get("nameEnterprise")
  }
  get password(){
    return this.formSingUp.get("password")
  }

  createUser(){
    if(this.formSingUp.valid){
      const userData = this.formSingUp.value

      this.authService.singUp(userData).subscribe(
        (response) => {
          console.log("Usuario creado exitosamente.", response);
          
        },
        (error) => {
          console.error(error);
          this.error = error.error.message
        }
      )
    }
  }
}
