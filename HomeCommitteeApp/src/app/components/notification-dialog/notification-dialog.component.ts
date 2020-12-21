import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/service/notification.service';
import { LogInComponent } from '../log-in/log-in.component';
import { DialogData } from '../maim/maim.component';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {
  userId:number;
  notification: Notification;
  formNotification = new FormGroup(
    {
      messege: new FormControl(''),
    });


  constructor(@Inject(MAT_DIALOG_DATA) data, public dialogRef: MatDialogRef<NotificationDialogComponent>,
    private notificationService: NotificationService) { 
      this.userId=data.userId;
      console.log(data);
    }

  onNoClick(): void {
    this.dialogRef.close();

  }

  onSubmit() {
    this.notificationService.AddNotification(this.userId,this.formNotification.get("messege").value).subscribe(x=>{
      alert("yes0=");
    })
  }

  ngOnInit(): void {
  }

}
