import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [0], label: 'הוצאות חודשיות' }
  ];

  constructor(public expenditureService: ExpenditureService, private userService: UserService) {
    this.expenditureService.getAllExpenditureReportDate(this.userService.user.buildingId)
      .subscribe((res: { TypeName: string, Value: number }[]) => {
        debugger;
        this.barChartLabels = res.map(a => a.TypeName);
        this.barChartData[0].data = res.map(a => a.Value);
      })
  }

  ngOnInit(): void {
  }

}
