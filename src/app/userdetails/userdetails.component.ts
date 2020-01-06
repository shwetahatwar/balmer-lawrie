import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

export interface Type {
  value: string;
  viewValue: string;
}
export interface Material{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  types:Type[] = [
    {value: 'oil-0', viewValue: 'Oil'},
    {value: 'grys-1', viewValue: 'Grys'},
  ];

  materials: Material[] =[
    {value: 'cartons-0', viewValue: 'Cartons'},
    {value: 'pails-1', viewValue: 'Pails'},
    {value: 'drumps-2', viewValue: 'Drumps'},
  ];
ProductCode: '';
ProductName: '';
TotalPack: '';
Quantity: '';
//Type: '';
MaterialType: '';
GrossWeight: '';
TareWeight: '';
BatchCode: '';
  constructor(private router: Router, private http: Http) { }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigate(['/login']);
  }
}
