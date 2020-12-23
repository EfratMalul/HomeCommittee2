import { Component, OnInit } from '@angular/core';
import { ExpenditureCategory } from 'src/app/enums/expenditure-category';
declare var angular: any;

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
    angular.module("app", ["chart.js"]).controller("ChartCtrl", function ($scope) {
      // searching to singers
      $scope.labels1 = ["איציק דדיה", "אברהם פריד", "מרדכי בן דוד", "מוטי שטיינמץ", "ישי ריבו", "שלמה כהן", "אחר"];
      $scope.data1 = [89, 85, 80, 81, 56, 55, 40];
      $scope.options1 = {
        pieceLabel: {
          render: 'label',
          fontColor: '#000',
          position: 'outside'
        },
        legend: {
          display: true,
          position: 'right'
        }
      };
      // count of responses- maklot
      $scope.labels2 = ['08/20', '09/20', '10/20', '11/20', '12/20'];
      $scope.series2 = ['תגובות ליום בממוצע'];
      $scope.data2 = [
        [80, 81, 56, 55, 40]
      ];
      $scope.options2 = {
        pieceLabel: {
          render: 'label',
          fontColor: '#000',
          position: 'outside'
        },
        legend: {
          display: true,
          position: 'right'
        }
      };
      // count to janer cake
      $scope.labels1 = ["מזרחי", "חסידי", "ישראלי"];
      $scope.data1 = [46, 34, 20];
      $scope.options1 = {
        pieceLabel: {
          render: 'label',
          fontColor: '#000',
          position: 'outside'
        },
        legend: {
          display: true,
          position: 'right'
        }
      };
    });

}

}
