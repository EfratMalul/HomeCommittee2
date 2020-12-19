import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import { Payment } from '../classes/payment';
// import { PaymentService } from '../service/payment.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Payment } from 'src/app/classes/payment';
import { TenantPayment } from 'src/app/classes/tenantPayment';
import { PaymentService } from 'src/app/service/payment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-payment',
  templateUrl:'./payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  isCommittee:boolean=false;
  myserch:any='';
  paymentsForTenant:TenantPayment [];

  // public model: any;

  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     // debounceTime(200),
  //     // distinctUntilChanged(),
  //     // map(term => term.length < 2 ? []
  //     //   : this.payments.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

      
  //   )
  constructor(private paymentService:PaymentService,private userService:UserService) { 

    const date: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);  

  }

  ngOnInit(): void {
    
    this.paymentService.GetPaymentsByUser(this.userService.user.buildingId,this.userService.user.id)
    .subscribe((p:TenantPayment[])=>{
      
      this.paymentsForTenant=p;
      console.log(this.paymentsForTenant)
    });
      
  }


}