import { 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest, 
    HttpEvent 
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpEvent<any>> {
            
            const access_token = localStorage.access_token;
            
            const authRequest = req.clone({
                setHeaders: {'Authorization': "Bearer " + access_token,
                'Content-Type': 'application/json'}
            });

            return next.handle(authRequest);
        }
}