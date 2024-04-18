import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/app/configs/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string
  constructor(private httpClient: HttpClient) {
    this.url = url.urlApi
  }

  singUp(user:any){
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
    return this.httpClient.post(`${this.url}/create-account`, user, {headers})
  }
  
}
