import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public error: String = ""
  public userId: String = ""
  constructor(private fb: FormBuilder, private login: LoginService, private router: Router) { }
  formLogin = this.fb.group({
    usernameEnterprise: ["", Validators.required],
    password: ['', Validators.required]
  })
  loginForm() {
    const userData = this.formLogin.value
      this.login.login(userData, this.login.getUserToken()).subscribe(
        (response) => {
          console.log(response);
          this.userId = this.login.getUserId()
          this.router.navigate(["/dashboard"])
        },
        (err) => {
          this.error = err.error.message
        }
      )
  }
}
