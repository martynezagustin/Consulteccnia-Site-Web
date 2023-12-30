import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

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
