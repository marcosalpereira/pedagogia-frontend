import { MessageService } from './../util/message.service';
import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HandleNotLoggedInInterceptor implements HttpInterceptor {

  constructor(
    public auth: AuthService,
    private router: Router,
    private message: MessageService,
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 403) {
              this.router.navigate(['/login']);
            }
          }
          return throwError(err);
        })
      );
  }
}
