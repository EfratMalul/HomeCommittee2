import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Payment } from '../classes/payment';
import { TenantPayment } from '../classes/tenantPayment';
import { formatters } from '../utils/global-function';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private baseService:BaseService) { }


  getAllpayment(buildingId:number):Observable< Payment []>{
    return this.baseService.getData("Payment","GetAllPayments",`${buildingId}`);
  }


   getByTenantId(id:number):Observable< Payment []>{
    return this.baseService.getData("Payment","Get");
  }


  GetPaymentsByUser(buildingId:number,userId:number):Observable< TenantPayment []>{
 
    return this.baseService.getData("Payment","GetPaymentsByUser",`${buildingId}/${userId}`)
    .pipe(
     map((x: any) => {
      
       let result = <TenantPayment[]>formatters(x);
        console.log(result);
       return result;
     })
   )
     
 }
 AddPayment(payment:Payment):Observable<Object>{
  return this.baseService.getData("Payment","AddPayment");

 }












}
