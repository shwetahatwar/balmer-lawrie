import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {

  selectedYear: any[];
  years: any[];
  
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

  ngOnInit(){
    this.years = [
      {id: 1, viewValue: "2017"},
      {id: 2, viewValue: "2018"},
      {id: 3, viewValue: "2019"},
      {id: 4, viewValue: "2020"},
      {id: 5, viewValue: "2021"}
    ]
  }
}



