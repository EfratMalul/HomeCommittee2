import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationForUser } from 'src/app/classes/NotificationForUser';
import { NotificationService } from 'src/app/service/notification.service';
import { LogInComponent } from '../log-in/log-in.component';
import { DialogData } from '../maim/maim.component';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {
  userId: number;
  notification: Notification;
  userNotification: NotificationForUser=new NotificationForUser();
  formNotification = new FormGroup(
    {
      messege: new FormControl(''),
    });


  constructor(@Inject(MAT_DIALOG_DATA) data, public dialogRef: MatDialogRef<NotificationDialogComponent>,
    private notificationService: NotificationService) {
    this.userId = data.userId;
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();

  }

  onSubmit() {
   
    this.userNotification.userId=this.userId;
    this.userNotification.message=this.formNotification.get("messege").value;
    this.notificationService.AddNotification(this.userNotification).subscribe(x => {
      this.onNoClick();
      alert("ההודעה נשלחה בהצלחה")
 
    })
  }

  ngOnInit(): void {
  }

}
