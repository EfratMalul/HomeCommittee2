import { Component, OnInit } from '@angular/core';
import { ExpenditureCategory } from 'src/app/enums/expenditure-category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor() { }

   
  ngOnInit(): void {
     let stringOne = ExpenditureCategory[1];
    console.log(stringOne);
  }

}
