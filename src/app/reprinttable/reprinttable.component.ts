import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { LoginService } from '../shared/login.service';
import { NgModel } from '@angular/forms';

export interface productCode{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reprinttable',
  templateUrl: './reprinttable.component.html',
  styleUrls: ['./reprinttable.component.css']
})
export class ReprinttableComponent implements OnInit {
productCode: any[];
  selectedYears: any[];
  years: any[];
  array = [];
  name: any;
  sitename: any;
  siteStatus: JSON;
  constructor(private router: Router, public dialog: MatDialog, private loginService: LoginService) { }
  
   displayedColumns: string[] = ['checkbox','productCode','productName','quantity','batchCode','grossWeight','tareWeight','netWeight','materialType'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  productCodes: productCode[] =[
    {value: 'cartons-0', viewValue: 'Cartons'},
    {value: 'pails-1', viewValue: 'Pails'},
    {value: 'drumps-2', viewValue: 'Drumps'},
  ];

  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.id === objTwo.id;
    }
  }

  selectAll(checkAll, select: NgModel, values) {
    //this.toCheck = !this.toCheck;
    if(checkAll){
      select.update.emit(values); 
    }
    else{
      select.update.emit([]);
    }
  }
  
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
    checkbox:any;
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
    {checkbox:'',productCode: 1, productName: 'drumps', quantity: 1, batchCode:1 ,grossWeight:1.988, tareWeight:1.243,netWeight:0.89,materialType:'drump'},
    {checkbox:'',productCode: 2, productName: 'cartons', quantity: 9, batchCode:2 ,grossWeight:1.98, tareWeight:1.263,netWeight:0.90,materialType:'cartons'},
    {checkbox:'',productCode: 3, productName: 'pails', quantity: 11, batchCode:3 ,grossWeight:1.67, tareWeight:1.293,netWeight:0.99,materialType:'pails'},
    {checkbox:'',productCode: 4, productName: 'cartons', quantity: 20, batchCode:4 ,grossWeight:1.08, tareWeight:1.213,netWeight:0.60,materialType:'cartons'},
    {checkbox:'',productCode: 5, productName: 'drumps', quantity: 21, batchCode:5 ,grossWeight:1.128, tareWeight:1.243,netWeight:0.59,materialType:'drumps'},
   
    
  ];
  