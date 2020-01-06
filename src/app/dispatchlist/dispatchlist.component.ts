import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginService } from '../shared/login.service';
import { UploaddialogComponent } from '../uploaddialog/uploaddialog.component';

@Component({
  selector: 'app-dispatchlist',
  templateUrl: './dispatchlist.component.html',
  styleUrls: ['./dispatchlist.component.css']
})
export class DispatchlistComponent implements OnInit {
  name: any;

  constructor(private router: Router, public dialog: MatDialog, private loginService: LoginService) { }

  ngOnInit() {
  }
onAdd():void {
const dialogRef = this.dialog.open(UploaddialogComponent,{
  width: '60%',
  height: '60%',
  data: {},
});
dialogRef.afterClosed().subscribe(result => {
  console.log('the dialog was closed');
  this.name = result;
});
}
}