import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormSingUpService {
  private apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient) {}
  createUser(nameEnterprise: any,email:any, usernameEnterprise:any, password:any){
    const userData = {nameEnterprise, email, usernameEnterprise, password}
    return this.http.post(`${this.apiUrl}/create-account`, userData)
  }
}
