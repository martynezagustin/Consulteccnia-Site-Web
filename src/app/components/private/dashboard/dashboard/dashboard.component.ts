import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public userData: any
  public userId: string = ''
  public greeting: string = ""
  constructor(public route: ActivatedRoute, public router: Router, private loginService: LoginService){}
  ngOnInit(){
    if(!localStorage.getItem("mi_token")){
      alert("El token ha expirado.")
      this.router.navigate(["/iniciar-sesion"])
    } else {
      this.setGreeting()
      this.userData = this.loginService.getUserData()
      this.userData.usernameEnterprise = this.userData.usernameEnterprise
      console.log(this.userData);    
    }
  }
  setGreeting(){
    const date = new Date()
    const hour = date.getHours()
    switch (true) {
      case hour < 13 && hour >= 6:
        this.greeting = "Buenos días"
        break;
      case hour <= 20 && hour >= 13:
        this.greeting = "Buenas tardes"
        break;
      default:
        this.greeting = "Buenas noches"
        break;
    }
  }
}
