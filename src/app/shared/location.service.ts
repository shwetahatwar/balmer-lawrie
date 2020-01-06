import { Injectable, Inject } from '@angular/core';
import { Http , Response , Headers} from '@angular/http';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from 'src/app-config.module';

@Injectable()
export class LocationService {
    constructor(private http: Http , private router: Router, @Inject(APP_CONFIG) private config: AppConfig){
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
  post(patchlistjson:any) {
   console.log(JSON.stringify(patchlistjson));
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var currentUser = sessionStorage.getItem('token');
    var token = "JWT"  + ' ' + (currentUser);
    console.log(token);
    headers.append('Authorization',token);
    return this.http.post(`${this.config.url}/costcenter`,patchlistjson, {headers: headers})
    .map((response: Response) => {
      let patchlistjson = response.json();
      if (patchlistjson) {
         //localStorage.setItem('currentUser', JSON.stringify(user));
      }
      console.log(patchlistjson);
      return patchlistjson;
    });
  }  
}
