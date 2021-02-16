import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../classes/Category';
import { Expenditure } from '../classes/expenditure';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {

  public category: Array<Category>;
  isAddExpenditure = new BehaviorSubject(false);

  apiClientURL = environment.BaseClientApiUrl;
  constructor(private baseServise: BaseService, private http: HttpClient) {



  }
  getAllExpenditure(buildingId: number): Observable<Expenditure[]> {
    return this.baseServise.getData("Expenditure", "GetAllExpenditure", `${buildingId}`);
  }
  getAllExpenditureReport(buildingId: number): Observable<{TypeName:string,Value:number}[]> {
    return this.baseServise.getData("Expenditure", "GetAllExpenditureGroupType", `${buildingId}`);
  }
  getAllExpenditureReportDate(buildingId: number): Observable<{TypeName:string,Value:number}[]> {
    return this.baseServise.getData("Expenditure", "GetAllExpenditureGroupDate", `${buildingId}`);
  }
  addExpenditure(expenditure: Expenditure): Observable<Object> {
    const url = `${this.apiClientURL}Expenditure/AddExpenditure`;
    return this.http.post(url, expenditure);

  };

  getAllCategory() {
    this.category = new Array<Category>();
    return this.baseServise.getData("Expenditure", "GetAllExpenditureCategory").subscribe(x => {
      for (let i = 1; i < 13; i++) {
        this.category.push({ key: i, value: x[i] })
      }
    });

  }



}
