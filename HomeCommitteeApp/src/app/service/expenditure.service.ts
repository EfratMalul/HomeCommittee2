import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expenditure } from '../classes/expenditure';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {


  apiClientURL = environment.BaseClientApiUrl;
  constructor(private baseServise:BaseService,private http: HttpClient) { 

  

  }
  getAllExpenditure(buildingId:number):Observable<Expenditure []>{

    
    return this.baseServise.getData("Expenditure","GetAllExpenditure",`${buildingId}`);
   
  }
  addExpenditure(expenditure:Expenditure):Observable<Object>{

    const url = `${this.apiClientURL}Expenditure/AddExpenditure`;
 
    return this.http.post(url, expenditure) ;
  
     };

  
 

}
