import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  token: string;

  usuarioLogado: Usuario;
  //  = {
  //   id: 1, nome: 'foo', sede: { id: 1, nome: 'foo' }, papeis: []
  // };

  constructor(
    private router: Router,
    private http: HttpClient,
    private message: MessageService,
    private errorHandler: ApiErrorHandlerService) {
    // this.loadToken();
  }

  login(nome: string, senha: string) {
    const form = { nome, senha };
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    this.http
      .post(`${SERVER_URL}/login`, form, { headers, responseType: 'text'})
      .pipe(catchError(this.errorHandler.handle()))
      .subscribe(token => {
        this.message.show('Login realizado com sucesso!');
        this.storeToken(token);
        this.router.navigate(['/home']);
      })
  }

  public storeToken(token: any) {
    this.token = token;
    if (token) {
      sessionStorage.setItem('token', token);
    } else {
      this.token = null;
      sessionStorage.removeItem('token');
    }
  }

  private isTokenExpired(token: string): boolean {
    return !token || new Date().getTime() > this.getDecodedAccessToken(token).exp;
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
    this.token = sessionStorage.getItem('token');
  }

  private clearToken() {
    this.storeToken(undefined);
  }

  logout() {
    this.clearToken();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    this.loadToken();
    return !this.isTokenExpired(this.token);
  }

}
