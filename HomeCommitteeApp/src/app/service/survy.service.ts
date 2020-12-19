import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SekerCotert } from '../classes/seker-cotert';
import { Survey } from '../classes/survey';
import { formatters } from '../utils/global-function';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SurvyService {
survey:SekerCotert[];
apiClientURL = environment.BaseClientApiUrl;

  constructor(private baseService:BaseService,private http: HttpClient) { }
getSurvy (buildingId:number):Observable<SekerCotert []>
{
   return this.baseService.getData("Survey","GetAllSurvey",`${buildingId}`)
 .pipe(
  map((x: any) => {
  return  this.survey = <SekerCotert[]>formatters(x);
  })
);
}

addNewSurvey(sekerCotert:SekerCotert):Observable<Object>
{
  const url = `${this.apiClientURL}Survey/AddSurvey`;
  return this.http.post(url, sekerCotert) ;
}


}
