import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { url } from 'src/app/configs/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url: String
  private TOKEN_KEY: string = "mi_token"
  private userData: any = {}
  private userId: string = ""
  constructor(private httpClient: HttpClient) {
    this.url = url.urlApi
  }
  login(user:any, token:any):Observable<any>{
    
    return this.httpClient.post(`${this.url}/login`, user, {headers: {Authorization: "Bearer " + token}})
    .pipe(map((response:any) => {
      this.userData = response.user
      localStorage.setItem(this.TOKEN_KEY, response.token);
      return response
    }))
  }
  getUserId(){
    return this.userId
  }
  getUserData(){
    return this.userData
  }
  getUserToken(){
    return localStorage.getItem(this.TOKEN_KEY)
  }
}
