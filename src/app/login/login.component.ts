import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { config, from } from 'rxjs';
import { APP_CONFIG, AppConfig } from 'src/app-config.module';
import {LoginService} from '../shared/login.service';
import { ConditionalExpr } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
Email: any;
Password: any;
loginStatus: JSON;
  constructor(private router: Router , private loginService: LoginService, @Inject(APP_CONFIG) private config: AppConfig ) { }

  ngOnInit() {
  }

  onLogin() {
    // alert(this.Email + this.Password);
    // this.router.navigate(['/userdetails'])
    // var json : JSON = JSON.parse('{}');
    // json["status"] = 2;
    // this.loginStatus = json;
    // this.loginService.update(this.loginStatus).subscribe(data => {
    //   console.log(data);
    // },
    // error => {
    //   console.log(JSON.stringify(console.error())
    // ,
    //   )})
    
  //  // alert(this.Email + this.Password);
  //   var details : {
  //     Email:"nikhil",
  //     Password:"briot"
  //   };
    var json:JSON = JSON.parse('{}');
    json["username"] = this.Email;
    json["password"] = this.Password;
    this.loginStatus = json;
    console.log(this.loginStatus);
    this.loginService.update(this.loginStatus).subscribe(
      data=>{
        this.router.navigate(['/homepage']);
        console.log(data["user"]["token"]);
        sessionStorage.setItem('token', data["user"]["token"]);
        //this.router.navigate(['/dialog']);
       // console.log(data);
       // console.log("hello" + data);
        //this.router.navigate(['/userdetails']);
      },
      error=>{
        console.log(error);
      }
    );
    // this.loginService.update()
    //   .subscribe(response => {
    //     const result = response.json();
    //     if (result.status == 'error') {
    //       alert('invalid email or password');
    //     } else {
    //       sessionStorage['login_status'] = '1';

    //       alert('welcome to the application');
    //       this.router.navigate(['/userdetails']);
    //     }
    //   });
    //this.router.navigate(['/userdetails']);
    //this.router.navigate(['/dashboard']);
  }
  onCancel() {
    this.router.navigate(['/site']);
  }
}
