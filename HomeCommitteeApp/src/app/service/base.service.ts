import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  apiClientURL = environment.BaseClientApiUrl;
 

  private handleError(error: any) {
    let errMsg: string;
    if (error.status === 401) {
      errMsg = error.statusText;
    } else {
      errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    }
    console.error(errMsg);
    return throwError(errMsg);
  }

  constructor(private http: HttpClient) {
    //this.messageSource = new BehaviorSubject("default msg")
  }

  changeMessage(msg:string) {
    this.messageSource.next(msg);
  }


  getData(controllerName:string,methodName: string, urlParameters?: string): Observable<any> {
    const url = urlParameters ? `${this.apiClientURL}${controllerName}/${methodName}/${urlParameters}`: `${this.apiClientURL}${methodName}`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  postData(controllerName:string,methodName: string, body: any): Observable<any> {

    const url = `${this.apiClientURL}${controllerName}/${methodName}`;
    return this.http.post(url, body)
      .pipe(
        catchError(this.handleError)
      );
  }
  public getJSON(filePath: string): Observable<any> {
    return this.http.get(filePath);
  }

  public getDataFromUrl(url: string): Observable<any> {
    return this.http.get(url, { responseType: 'text' });
  }
}
