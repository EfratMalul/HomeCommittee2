import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../classes/payment';
import { Session } from '../classes/session';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(private baseService:BaseService) { }

  getAllSessions(buildingId:number):Observable< Session []>{
    return this.baseService.getData("Session","GetByBuilding",`${buildingId}`);
  }
}
