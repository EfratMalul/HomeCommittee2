import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Building } from '../classes/building';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  apiClientURL = environment.BaseClientApiUrl;
  constructor(private baseService: BaseService, private http: HttpClient) { }

  AddBuildung(building: Building): Observable<number> {

    const url = `${this.apiClientURL}Building/AddBuilding`;
    // let b:Building=new Building();
    // b.address="sdsd";
    // b.city="sdsd";
    // b.id=3;
    // b.number=9;
    // b.numApartments=5;
    // b.zipCode=51309;
    return this.http.post(url, building).pipe
      (
        map((x: number) => { return x })
      );
    //return this.baseService.postData("Building", "AddBuilding",building)

  }
}
