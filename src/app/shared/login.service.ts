
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig, APP_CONFIG } from 'src/app-config.module';

@Injectable()
export class LoginService {
  constructor(private http: Http, @Inject(APP_CONFIG) private config: AppConfig) { }

  update(picklistjson: any) {
    console.log(JSON.stringify(picklistjson));
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.config.url}/login`, picklistjson, {headers: headers})
    .map((response: Response) => {
      let picklistjson = response.json();
      if (picklistjson) {
        // localStorage.setItem('currentUser', JSON.stringify(user));
      }
      console.log(picklistjson);
      return picklistjson;
    });
  }  

  send(patchlistjson: any) {
    console.log(JSON.stringify(patchlistjson));
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var currentUser = sessionStorage.getItem('token');
    var token = "JWT"  + ' ' + (currentUser);
    console.log(token);
    headers.append('Authorization',token);
    return this.http.post(`${this.config.url}/costcenter`, patchlistjson, {headers: headers})
    .map((response: Response) => {
      let patchlistjson = response.json();
      if (patchlistjson) {
        // localStorage.setItem('currentUser', JSON.stringify(user));
      }
      console.log(patchlistjson);
      return patchlistjson;
    });
  }  

  get() {
   // console.log(JSON.stringify(patchlistjson));
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var currentUser = sessionStorage.getItem('token');
    var token = "JWT"  + ' ' + (currentUser);
    console.log(token);
    headers.append('Authorization',token);
    return this.http.get(`${this.config.url}/costcenter`, {headers: headers})
    .map((response: Response) => {
      let patchlistjson = response.json();
      if (patchlistjson) {
        // localStorage.setItem('currentUser', JSON.stringify(user));
      }
      console.log(patchlistjson);
      return patchlistjson;
    });
  }  
}