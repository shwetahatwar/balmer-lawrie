import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globalval:any;
 // url = 'http://192.168.0.5:1337/login';
  title = 'myFirstApp';

  constructor(private router:Router){
    router.events.subscribe((val)=>{
      if(this.router.url=="/" || this.router.url=="/login"){
        this.globalval = 0;
      }else{
        this.globalval = 1;
      }
    });
  }
}
