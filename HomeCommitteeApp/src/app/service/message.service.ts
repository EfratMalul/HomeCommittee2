import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../classes/message';
import { Payment } from '../classes/payment';
import { Session } from '../classes/session';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private baseService:BaseService) { }

  getAllSessions(buildingId:number):Observable< Message []>{
    return this.baseService.getData("Message","GetByBuilding",`${buildingId}`);
  }

  addMessage(message:Message)
  {
    return this.baseService.postData("Message","AddSession",message);
  }
}
