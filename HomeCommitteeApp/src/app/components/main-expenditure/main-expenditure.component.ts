import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-expenditure',
  templateUrl: './main-expenditure.component.html',
  styleUrls: ['./main-expenditure.component.scss']
})
export class MainExpenditureComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
