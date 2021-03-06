import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationForUser } from 'src/app/classes/NotificationForUser';
import { Payment } from 'src/app/classes/payment';
import { TenantPayment } from 'src/app/classes/tenantPayment';
import { NotificationService } from 'src/app/service/notification.service';
import { PaymentService } from 'src/app/service/payment.service';
import { UserService } from 'src/app/service/user.service';
import { SendPaymentNotificationComponent } from '../send-payment-notification/send-payment-notification.component';

@Component({
  selector: 'app-tenant-payment',
  templateUrl: './tenant-payment.component.html',
  styleUrls: ['./tenant-payment.component.scss']
})
export class TenantPaymentComponent implements OnInit {
  payments: TenantPayment[];
  orderPayment: TenantPayment[];
  myserch: any = '';
  nrSelect: any = "noOrder";
  userNotification: NotificationForUser[] = [];
  constructor(private paymentService: PaymentService, private userService: UserService, public dialog: MatDialog,
    private notificationServise:NotificationService) { }



  ngOnInit(): void {



    //  this.paymentService.getAllpayment(this.userService.user.buildingId).subscribe(p=> this.payments=p);

    this.paymentService.GetAllPaymentsFromAllTenants(this.userService.user.buildingId).subscribe((p: TenantPayment[]) => { this.payments = p; });

  }
  sendNotificationNotPay() {
    this.payments.forEach(p => {
      if (!this.userNotification.find(o => o.userId === p.tenantId && o.message === "תזכורת לתשלומים חיבים"&&o.notificationId==0))
        this.userNotification.push({ userId: p.tenantId, message: "תזכורת לתשלומים חיבים", notificationId: 0 });
    
    });
    this.notificationServise.SendPaymentNotificationNotPay(this.userNotification).subscribe(x=>{alert("OK")});
    console.log(this.userNotification);
  }
  openDialog() {

    this.dialog.open(SendPaymentNotificationComponent, {
      width: '400px'
    });

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
