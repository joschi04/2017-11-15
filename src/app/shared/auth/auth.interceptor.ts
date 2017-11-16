import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private oauthService: OAuthService) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let headers = req.headers
                            .set('Authorization', this.oauthService.authorizationHeader());

        let newReq = req.clone({ headers });

        // Alternative:
        // let newAlternativeReq = req.clone({ setHeaders: { 'Authorization': this.oauthService.authorizationHeader()} });

        let response = next.handle(newReq);
        return response;
    }
}
