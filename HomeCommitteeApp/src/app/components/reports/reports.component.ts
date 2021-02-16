import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { PaymentService } from 'src/app/service/payment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

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