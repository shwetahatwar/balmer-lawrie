import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { LoginService } from '../shared/login.service';
import { DialogComponent } from '../dialog/dialog.component';
import { AssignComponent } from '../assign/assign.component';


@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css']
})
export class MattableComponent implements OnInit {
array = [];
name: any;
sitename: any;
siteStatus: JSON;
constructor(private router: Router, public dialog: MatDialog, private loginService: LoginService) { }

 displayedColumns: string[] = ['dispatchslipid','picker','loader','truckno','capacity','depo','action'];
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

ngOnInit() {
  this.dataSource.paginator = this.paginator;
}
  onAssign(): void {
    const dialogRef = this.dialog.open(AssignComponent,{
      width: '500px',
      height: '500px',
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}

export interface PeriodicElement {
  dispatchslipid: number;
  picker: string;
  loader: string;
  truckno: string;
  capacity: number;
  depo: number;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dispatchslipid: 1, picker: 'Mahesh', loader: 'Sanmit',truckno:'MH12QZ6421' ,capacity:1.988,depo:1,action:''},
  {dispatchslipid: 2, picker: 'Shubham', loader: 'sagar',truckno:'MH13QZ6754',capacity:1.765,depo:2,action:''},
  
];
