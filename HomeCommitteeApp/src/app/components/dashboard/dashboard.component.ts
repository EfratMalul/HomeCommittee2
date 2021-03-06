import { Component, OnInit } from '@angular/core';
import { ExpenditureCategory } from 'src/app/enums/expenditure-category';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { PaymentService } from 'src/app/service/payment.service';
import { UserService } from 'src/app/service/user.service';
declare var angular: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sum = 0;
  total = 0;
  constructor(public expenditureService: ExpenditureService,
    private userService: UserService,
    private paymentService: PaymentService,) {
  }

  ngOnInit(): void {
    this.expenditureService.getAllExpenditure(this.userService.user.buildingId).subscribe(res => {
      res.forEach(e => {
        this.sum += e.sum;
      })
    })
    this.paymentService.getAllpayment(this.userService.user.buildingId).subscribe(res => {
      res.forEach(e => {
        this.total += e.sum;
      })
    })
  }


}
