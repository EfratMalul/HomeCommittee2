import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tenant } from '../classes/tenant';
import { formatters } from '../utils/global-function';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  apiClientURL = environment.BaseClientApiUrl;
  public isUpdateUser: Subject<boolean>;
  tenant: Tenant = new Tenant();

  constructor(private baseService: BaseService, private http: HttpClient) { }

  getType(userId: string): Observable<number> {
    return this.baseService.getData("Get", "userId");
  }

  AddTenant(tenant: Tenant): Observable<Object> {
    const url = `${this.apiClientURL}Tenant/AddTenant`;
    return this.http.post(url, tenant);
  }

  getTenant(userId: number): Observable<Tenant> {
    const url = `${this.apiClientURL}Tenant/GetTenant`;
    return this.baseService.getData("Tenant", "GetTenant", `${userId}`)
      .pipe(
        map((x: any) => {
          let result = <Tenant>formatters(x);
          this.tenant = result;
          return result;
        })
      );
  }

  GetNumTenant(buildingId: Number): Observable<number> {

    return this.baseService.getData("Tenant", "GetNumTenant");

  }



  GetAllTenantByBuildingId(buildingId: number): Observable<Tenant[]> {
    const url = `${this.apiClientURL}Tenant/GetAllTenantByBuildingId`;
    return this.baseService.getData("Tenant", "GetAllTenantByBuildingId", `${buildingId}`);

  }
  removeTenant(t: Tenant): Observable<Object> {
    const url = `${this.apiClientURL}Tenant/RemoveTenant`;
    return this.http.post(url, t);
  }

  updateTenantDetails(tenant: Tenant): Observable<Object> {
    const url = `${this.apiClientURL}Tenant/UpdateTenantDetails`;
    return this.http.post(url, tenant);
  }
}
