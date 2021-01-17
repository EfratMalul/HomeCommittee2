import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications:Notification[];
  constructor(private notificationService:NotificationService,private userService:UserService) { }

  ngOnInit(): void {

    // this.exppenditure_arr=e
    this.notificationService.getAllNotifications(this.userService.user.id).subscribe(n =>
      {
     this.notifications = n;
    
   });

  }

}
