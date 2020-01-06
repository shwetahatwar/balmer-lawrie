import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginService } from '../shared/login.service';

export interface Truck{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-uploaddialog',
  templateUrl: './uploaddialog.component.html',
  styleUrls: ['./uploaddialog.component.css']
})
export class UploaddialogComponent implements OnInit {
  trucks: Truck[] =[
    {value: 'cartons-0', viewValue: 'Cartons'},
    {value: 'pails-1', viewValue: 'Pails'},
    {value: 'drumps-2', viewValue: 'Drumps'},
  ];
  name: any;
  sitename: any;
  siteStatus: JSON;
   constructor(private router: Router, public dialog: MatDialog, private loginService: LoginService) { }

  ngOnInit() {
  }

  // onUpload(): void {
  //   const dialogRef = this.dialog.open(DialogComponent,{
  //     width: '300px',
  //     height: '300px',
  //     data: {},
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.name = result;
  //   });
  // }
}


