import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/classes/payment';
import { PaymentService } from 'src/app/service/payment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tenant-payment',
  templateUrl: './tenant-payment.component.html',
  styleUrls: ['./tenant-payment.component.scss']
})
export class TenantPaymentComponent implements OnInit {
  payments:Payment [] ;
  constructor(private paymentService:PaymentService,private userService:UserService) { }

  ngOnInit(): void {

 
     
       this.paymentService.getAllpayment(this.userService.user.buildingId).subscribe(p=> this.payments=p);
    
  }

}
