import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationForUser } from 'src/app/classes/NotificationForUser';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-send-payment-notification',
  templateUrl: './send-payment-notification.component.html',
  styleUrls: ['./send-payment-notification.component.scss']
})
export class SendPaymentNotificationComponent implements OnInit {

  userNotification: NotificationForUser = new NotificationForUser();

  constructor(@Inject(MAT_DIALOG_DATA) data, public dialogRef: MatDialogRef<SendPaymentNotificationComponent>,
    private notificationService: NotificationService,private userServise:UserService) { }

  formNotification = new FormGroup(
    {
      messege: new FormControl(''),
    });

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  onSubmit() {

    this.userNotification.userId = this.userServise.user.buildingId;
    this.userNotification.message = this.formNotification.get("messege").value;
    this.notificationService.SendPaymentNotification(this.userNotification).subscribe(x => {
      this.onNoClick();
      alert("ההודעה נשלחה בהצלחה")

    })
  }

}
