import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/classes/payment';
import { TenantPayment } from 'src/app/classes/tenantPayment';
import { PaymentService } from 'src/app/service/payment.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tenant-payment',
  templateUrl: './tenant-payment.component.html',
  styleUrls: ['./tenant-payment.component.scss']
})
export class TenantPaymentComponent implements OnInit {
  payments:TenantPayment[] ;
  orderPayment:TenantPayment[] ;
  myserch: any = '';
  nrSelect:any="noOrder";
  constructor(private paymentService:PaymentService,private userService:UserService) { }

  ngOnInit(): void {

 
     
      //  this.paymentService.getAllpayment(this.userService.user.buildingId).subscribe(p=> this.payments=p);

      this.paymentService.GetAllPaymentsFromAllTenants(this.userService.user.buildingId).subscribe((p:TenantPayment[])=>{ this.payments=p;});
    
  }
  // changePayment(value: string){
  //   switch(value) {
  //     case "NoOrder":
  //       this.payments.forEach(p=>this.orderPayment.push(p));
  //        break;
  //     case "TenantsPaid":
  //       this.payments.forEach(p=>p.status==true??this.orderPayment.push(p));
  //        break;
  //        case "TenantsNotPaid":
  //         this.payments.forEach(p=>p.status==false??this.orderPayment.push(p));
  //          break;
        
        
  //       }


 
  

}
