import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginPageComponent } from '../views/loginPage/login-page/login-page.component';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  routes: Route[] = []
  constructor(private router: Router) {
    this.routes = this.router.config.filter(route => route.path !== "")
  }
  getRoutes(): Route[] {
    return this.routes
  }
}
