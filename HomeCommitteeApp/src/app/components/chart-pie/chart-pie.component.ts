import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [''];
  public pieChartData: SingleDataSet = [0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  colors: Color[] = [
    {
      backgroundColor: [
        '#fff2cc',
        '#ffe6cc',
        '#ffd9cc',
        '#ffcccc',
        '#f2ffcc',
        '#ffffcc',
        '#d9ffcc',
        '#e6ffcc',
        '#ccffe6',
        '#ccffcc',
        '#ccf2ff',
        '#ccffff',
        '#cce6ff'
      ]
    }
  ];

  constructor(public expenditureService: ExpenditureService, private userService: UserService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.expenditureService.getAllExpenditureReport(this.userService.user.buildingId)
      .subscribe((res: { TypeName: string, Value: number }[]) => {
        debugger;
        this.pieChartLabels = res.map(a => a.TypeName);
        this.pieChartData = res.map(a => a.Value);
      })
  }

  ngOnInit(): void {
  }

}
