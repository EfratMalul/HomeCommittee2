import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationForUser } from 'src/app/classes/NotificationForUser';
import { User } from 'src/app/classes/user';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {



  notifications: Notification[];
  numNotification: number;
  userNotificatin: NotificationForUser = new NotificationForUser();
  constructor(private notificationService: NotificationService, private userService: UserService) { }

  ngOnInit(): void {

    // this.exppenditure_arr=e
    this.notificationService.getAllNotifications(this.userService.user.id).subscribe(n => {
      this.notifications = n;
      this.numNotification = this.notifications.length;
      console.log(this.numNotification);
    });

  }
  removeUserNotification(event, n) {
    alert("click me!");
    this.userNotificatin.userId = this.userService.user.id;
    this.userNotificatin.message = "";
    this.userNotificatin.notificationId = n.id;

    this.notificationService.removeUserNotification(this.userNotificatin).subscribe(u => {
      alert("removed sucssesfully!")
    });

  }




}
