import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    
    const body = {
      email: email,
      password: password
    }

    console.log('--------- body login -------');
    console.log(body);
    console.log('---------            -------');

    return this.http.post<any>(environment.urlApi + 'auth/login', body);
  }
}
