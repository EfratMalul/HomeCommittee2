import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';

import { Expenditure } from 'src/app/classes/expenditure';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent implements OnInit {
  myserch: any = '';
  value = 'f';
  category: Array<Category>;


  exppenditure_arr: Expenditure[];
  constructor(private expenditureService: ExpenditureService, private userService: UserService) {
  }




  ngOnInit(): void {

    // this.exppenditure_arr=e
    this.expenditureService.getAllExpenditure(this.userService.user.buildingId).subscribe(e => {
      this.exppenditure_arr = e;




      var dt = (new Date(this.exppenditure_arr[2].date));
      var dtm = dt.getMonth() + 1;
      console.log("month  " + dtm);
    });

    this.category = new Array<Category>();


    this.expenditureService.getAllCategory().subscribe(e => {
      this.category.push({ key: e.key, value: e.value });
    });
  }

}
