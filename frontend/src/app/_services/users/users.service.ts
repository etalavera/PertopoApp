import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get<any>(environment.urlApi + 'users');
  }

  postSignup(body: any): Observable<any> {
    return this.httpClient.post(environment.urlApi + 'auth/signup', body);
  }
}
