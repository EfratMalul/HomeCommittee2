import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fault } from '../classes/fault';
import { UserPermission } from '../classes/user-permission';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FaultService {

  isUpdateStatus = new BehaviorSubject(false);
  isAddFault = new BehaviorSubject(false);

  apiClientURL = environment.BaseClientApiUrl;
  constructor(private baseServise:BaseService,private http: HttpClient) { }

  // ser:UserPermission
  
  getAllFault(buildingId:number):Observable<Fault []>{
   return  this.baseServise.getData("Fault", "GetAllFaults", `${buildingId}`);
  }

  addFault(fault:Fault):Observable<Object>{

    const url = `${this.apiClientURL}Fault/AddFault`;
 
    return this.http.post(url, fault);
  }

  updateStatus(fault:Fault):Observable<Object>
  {
    const url = `${this.apiClientURL}Fault/UpdateStatus`;
     return this.http.post(url, fault);

    //  return this.http.put<Fault>("http://localhost:52732/Api/Fault/UpdateStatus/" + fault.id,fault);
  }
  
}

  