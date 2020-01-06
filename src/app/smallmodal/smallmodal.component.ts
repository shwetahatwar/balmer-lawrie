import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Http } from '@angular/http';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-smallmodal',
  templateUrl: './smallmodal.component.html',
  styleUrls: ['./smallmodal.component.css']
})
export class SmallmodalComponent implements OnInit {
  animal: 'panda' | 'unicorn' | 'lion';
  name: string;
  dialogRef: any;
  sitename: any;
  siteStatus: JSON;
  dialogRefee: any;
  constructor( private http: Http ,private spinnerService: Ng4LoadingSpinnerService, public dialog: MatDialog,  private router: Router , private loginService: LoginService , public dialogRefe : MatDialogRef<SmallmodalComponent>) { }

  ngOnInit() {
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(UserdetailsComponent,{
  //     width: '250px',
  //     data: {}
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

 Cancel() {
   this.dialogRefe.close(false);
  //this.dialogRef = this.dialog.closeAll();
 }
 Confirm(){
  this.dialogRefe.close(true);
}
onNoClick(){
  this.dialogRefee = this.dialog.closeAll();
 }
}