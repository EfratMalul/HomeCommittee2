import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { NotificationForUser } from '../classes/NotificationForUser';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  apiClientURL = environment.BaseClientApiUrl;
  constructor(private baseServise: BaseService, private http: HttpClient) { }

  getAllNotifications(userId: number): Observable<Notification[]> {
    return this.baseServise.getData("Notification", "GetNotificationByUserId", `${userId}`);
  }


  AddNotification(userNotification: NotificationForUser): Observable<Object> {

    const url = `${this.apiClientURL}Notification/AddNotificationToSpesficUser`;
    return this.http.post(url, userNotification);
    // return this.baseServise.postData("Notification","AddNotificationToSpesficUser",userNotification);
  }
  SendPaymentNotification(userNotification: NotificationForUser): Observable<Object> {
    const url = `${this.apiClientURL}Notification/AddNotificationToAllUserByBuildingId`;
    return this.http.post(url, userNotification);

  }

  removeUserNotification(userNotification: NotificationForUser): Observable<Object> {
    const url = `${this.apiClientURL}Notification/RemoveUserNotification`;
    return this.http.post(url, userNotification);
  }



}
