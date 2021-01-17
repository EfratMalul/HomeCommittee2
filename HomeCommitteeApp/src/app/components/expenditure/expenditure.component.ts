import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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
  constructor(public expenditureService: ExpenditureService, private userService: UserService) {

    this.expenditureService.isAddExpenditure.subscribe((success) => {

      this.category = new Array<Category>();
      this.expenditureService.getAllCategory();

      forkJoin({
        res1: this.expenditureService.getAllExpenditure(this.userService.user.buildingId),
        // res2: this.expenditureService.getAllCategory()
      })
        .subscribe(({ res1 }) => {
          this.exppenditure_arr = res1;
          // for (let i = 1; i < 12; i++) {
          //   this.expenditureService.category.push({ key: i, value: res2[i] })
          // }

          // res2.array.forEach(element => {
          //   this.category.push({ key: element.key, value: element.value });
          // });
        });



    })
  }




  ngOnInit(): void {
    this.category = new Array<Category>();
    // this.expenditureService.getAllCategory();

    forkJoin({
      res1: this.expenditureService.getAllExpenditure(this.userService.user.buildingId),
      // res2: this.expenditureService.getAllCategory()
    })
      .subscribe(({ res1 }) => {
        this.exppenditure_arr = res1;
        // for (let i = 1; i < 12; i++) {
        //   this.expenditureService.category.push({ key: i, value: res2[i] })
        // }

        // res2.array.forEach(element => {
        //   this.category.push({ key: element.key, value: element.value });
        // });
      });





    // this.exppenditure_arr=e
    // this.expenditureService.getAllExpenditure(this.userService.user.buildingId).subscribe(e => {
    //   this.exppenditure_arr = e;
    //   var dt = (new Date(this.exppenditure_arr[2].date));
    //   var dtm = dt.getMonth() + 1;
    //   console.log("month  " + dtm);
    // });

    // this.expenditureService.getAllCategory().subscribe(e => {
    //   debugger;
    //   e.array.forEach(element => {
    //     this.category.push({ key: element.key, value: element.value });

    //   });
    // });
  }

}
