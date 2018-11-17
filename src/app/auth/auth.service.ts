import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Usuario } from '../model/usuario';
import { ApiErrorHandlerService } from '../api-error-handler-service.service';
import { environment } from 'src/environments/environment';
import { MessageService } from '../util/message.service';

import * as jwt_decode from "jwt-decode";

const SERVER_URL = environment.serverUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  usuarioLogado: Usuario;
  //  = {
  //   id: 1, nome: 'foo', sede: { id: 1, nome: 'foo' }, papeis: []
  // };

  constructor(
    private router: Router,
    private http: HttpClient,
    private message: MessageService,
    private errorHandler: ApiErrorHandlerService) {
    this.loadToken();
  }

  login(nome: string, senha: string) {
    const form = { nome, senha };
    return this.http
      .post<string>(`${SERVER_URL}/login`, form)
      .pipe(catchError(this.errorHandler.handle()))
      .subscribe(token => {
        this.storeToken(token);
        this.message.show('Login realizado com sucesso!');
        this.router.navigate(['/']);
      })
  }

  public storeToken(token: any) {
    this.token = token;
    if (token && !this.isTokenExpired(token)) {
      sessionStorage.put('token', token);
    } else {
      this.token = null;
      sessionStorage.removeItem('token');
    }
  }

  private isTokenExpired(token: string): boolean {
    return new Date().getTime() > this.getDecodedAccessToken(token).exp;
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return {exp: 0};
    }
  }

  private loadToken() {
    this.token = sessionStorage.get('token');
  }

  private clearToken() {
    this.storeToken(undefined);
  }

  logout() {
    this.clearToken();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this.token != null;
  }

}
