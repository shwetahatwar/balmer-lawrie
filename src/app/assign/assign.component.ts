import { Component, OnInit } from '@angular/core';

export interface Picker {
  value: string;
  viewValue: string;
}
export interface Loader{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  pickers:Picker[] = [
    {value: 'oil-0', viewValue: 'Oil'},
    {value: 'grys-1', viewValue: 'Grys'},
  ];

  loaders: Loader[] =[
    {value: 'cartons-0', viewValue: 'Cartons'},
    {value: 'pails-1', viewValue: 'Pails'},
    {value: 'drumps-2', viewValue: 'Drumps'},
  ];

DispatchList: any;
Picker: any;
Loader:any;
  constructor() { }

  ngOnInit() {
  }


}
