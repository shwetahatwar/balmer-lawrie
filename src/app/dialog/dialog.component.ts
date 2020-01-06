import { Component, OnInit, Inject } from '@angular/core';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { MatDialog } from '@angular/material';
import { SmallmodalComponent } from '../smallmodal/smallmodal.component';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  animal: 'panda' | 'unicorn' | 'lion';
  name: string;
  dialogRefee: any;
  ref: any;
  sitename: any;
  siteStatus: JSON;
  constructor(  private spinnerService: Ng4LoadingSpinnerService ,private router: Router , public dialog: MatDialog , private loginService: LoginService) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRefee = this.dialog.open(UserdetailsComponent,{
      width: '250px',
      data: {}
    });
    dialogRefee.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  onNoClick(){
  this.dialogRefee = this.dialog.closeAll();
 }
 Upload(){
   
 }
 AddData(){

// const ref = this.dialog.open(SmallmodalComponent,{
//   width: '20%',
//   height: '30%',
//   data:{}
// });
this.spinnerService.show();
 var json: JSON = JSON.parse('{}');
  json['name'] = this.sitename;
  this.siteStatus = json;
  let refr = this.dialog.open(SmallmodalComponent);
  refr.afterClosed().subscribe(
    data => {
     if(data){
      this.loginService.send(this.siteStatus).subscribe(
        data => {
          this.dialogRefee = this.dialog.closeAll();
          this.spinnerService.hide();
         
          this.router.navigate(['/location']);
        },
        error => {
          console.log(error);
        }
      )
     }
    }
  )
  console.log(this.siteStatus);
 
// ref.afterClosed().subscribe(result => {
//   console.log('The dialog was closed');
//   this.animal = result;
// });
 };
//  onNoClick(): void {
//   this.dialogRef.close();
// }

  }


