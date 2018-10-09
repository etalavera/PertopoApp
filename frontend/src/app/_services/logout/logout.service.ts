import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers, Http } from '@angular/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient: HttpClient, private http: Http) { }

  logout(access_token: string): Observable<any> {
    return this.httpClient.get(environment.urlApi + 'auth/logout');
  }
}
