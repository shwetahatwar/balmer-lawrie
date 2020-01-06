import { Component, OnInit } from '@angular/core';

export interface Material{
  value: string;
  viewValue: string;
}
export interface Product{
  value: string;
  viewValue: string;
}

export interface Batch{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-reprint',
  templateUrl: './reprint.component.html',
  styleUrls: ['./reprint.component.css']
})
export class ReprintComponent implements OnInit {

  materials: Material[] =[
    {value: 'cartons-0', viewValue: 'Cartons'},
    {value: 'pails-1', viewValue: 'Pails'},
    {value: 'drumps-2', viewValue: 'Drumps'},
  ];

  products: Product[] =[
    {value: 'cartons-0', viewValue: 'Cartons'},
    {value: 'pails-1', viewValue: 'Pails'},
    {value: 'drumps-2', viewValue: 'Drumps'},
  ];

  batchs: Batch[] =[
    {value: 'cartons-0', viewValue: 'Cartons'},
    {value: 'pails-1', viewValue: 'Pails'},
    {value: 'drumps-2', viewValue: 'Drumps'},
  ];

  ProductCode: '';
  BatchCode: '';
  MaterialType:'';

  constructor() { }

  ngOnInit() {
  }

  onReprint(){
    
  }

}
