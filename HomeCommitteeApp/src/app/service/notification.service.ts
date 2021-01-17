import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  apiClientURL = environment.BaseClientApiUrl;
  constructor(private baseServise:BaseService,private http: HttpClient) { }

  getAllNotifications(userId:number):Observable<Notification[]>
  {
    return this.baseServise.getData("Notification","GetNotificationByUserId",`${userId}`);
  }
 
}
