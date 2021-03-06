import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { BaseService } from './base.service';
import { UserPermission } from '../classes/user-permission';
import { map } from 'rxjs/operators';
import { formatters } from '../utils/global-function';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserPermission = new UserPermission();
  constructor(private baseService: BaseService) {


  }

  // getUserById(id):Observable<any>{
  //   return this.http.get('http://localhost:65337/api/User/{{id}}');
  // }
  getUserByPasssword(password: string, name: string): Observable<any> {
    // console.log("succesfully");
    let urlParameters = `${password}/${name}`
    return this.baseService.getData("User", "GetByPassword", urlParameters);
    //return this.http.get('http://localhost:65337/api/User/{{name,password }}')
  }







  CheckUserAndPermissions(password: string, name: string): Observable<UserPermission> {
    // console.log("succesfully");
    let urlParameters = {name:name,password:password};
    return this.baseService.postData("User", "CheckUserAndPermissions", urlParameters)
      .pipe(
        map((x: any) => {
          let result = <UserPermission>formatters(x);
          this.user = result;
          return result;
        })
      )
    //return this.http.get('http://localhost:65337/api/User/{{name,password }}')
  }
}



