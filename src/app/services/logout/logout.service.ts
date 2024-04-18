import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { url } from 'src/app/configs/config';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  public url: string = ""
  constructor(private http: HttpClient) {
    this.url = url.urlApi
  }
  logout(){
    return this.http.post(`${this.url}/logout`, {})
  }
}
