import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userId: string = ""
  routes: Route[] = []
  constructor(public route: ActivatedRoute, private router: Router, private logoutService: LogoutService){}
  ngOnInit(){
    this.userId = this.route.snapshot.params["id"]
  }
  logout(){
    this.logoutService.logout()?.subscribe(
      response => {
        console.log(response);
        localStorage.removeItem("mi_token")
        this.router.navigate(["/iniciar-sesion"])
      },
      err => {
        console.log(err);
        
      }
    )
  }
  getUserId(){
    return this.userId
  }
}
