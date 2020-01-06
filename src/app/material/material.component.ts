import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  array = [];
  name: any;
  sitename: any;
  siteStatus: JSON;
  constructor(private router: Router, public dialog: MatDialog, private loginService: LoginService) { }
  
   displayedColumns: string[] = ['productCode','productName','quantity','batchCode','grossWeight','tareWeight','netWeight','materialType'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
    // onAssign(): void {
    //   const dialogRef = this.dialog.open(AssignComponent,{
    //     width: '500px',
    //     height: '500px',
    //     data: {},
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     this.name = result;
    //   });
    // }
  }
  
  export interface PeriodicElement {
    productCode: number;
    productName: string;
    quantity: number;
    batchCode: number;
    grossWeight: number;
    tareWeight: number;
    netWeight: number;
    materialType: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {productCode: 1, productName: 'drumps', quantity: 1, batchCode:1 ,grossWeight:1.988, tareWeight:1.233,netWeight:0.89,materialType:'cartons'},
   
    
  ];
  