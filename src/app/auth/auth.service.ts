import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Usuario, Perfil } from '../model/usuario';
import { ApiErrorHandlerService } from '../api-error-handler.service';
import { environment } from 'src/environments/environment';
import { MessageService } from '../util/message.service';

import * as jwt_decode from 'jwt-decode';
import { LogService } from '../log.service';
import { Sede } from '../model/sede';

interface TokenPayload {
  sub: string;
  exp: number;
}

const SERVER_URL = environment.serverUrl;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userChange$ = new BehaviorSubject<Usuario>(undefined);
  private _usuarioLogado$ = this.userChange$.asObservable();

  token: string;

  private tokenPayload: TokenPayload;

  constructor(
    private message: MessageService,
    private router: Router,
    private http: HttpClient,
    private errorHandler: ApiErrorHandlerService,
    private log: LogService) {

  }

  get usuarioLogado(): Observable<Usuario> {
    if (!this.token) {
      this.storeToken(sessionStorage.getItem('token'));
      if (!this.isTokenExpired()) {
        this.carregarUsuarioLogado();
      }
    }
    return this._usuarioLogado$;
  }

  private carregarUsuarioLogado() {
    this.log.debug('carregando usuario');
    this.http.get<Usuario>(`${SERVER_URL}/usuarios/${this.tokenPayload.sub}`)
      .pipe(catchError(this.errorHandler.handle()))
      .subscribe(usuario => this.raiseUserChanged(usuario));
  }

  private raiseUserChanged(usuario: any): void {
    this.log.debug('user changed', usuario);
    return this.userChange$.next(usuario);
  }

  login(email: string, senha: string) {
    const form = { email, senha };
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    this.http
      .post(`${SERVER_URL}/login`, form, { observe: 'response' })
      .pipe(catchError(this.errorHandler.handle([401, 403])))
      .subscribe(response => {
        this.log.debug('Login realizado com sucesso!');
        const token = response.headers.get('Authorization');
        this.storeToken(token.substring('BEARER '.length));
        this.carregarUsuarioLogado();
        this.router.navigate(['/home']);
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.message.show('Solicitação ainda pendente', 'Fechar', 0);
          } else if (err.status === 403) {
            this.message.show('Falha no Login', 'Fechar', 0);
          }
        }
      });
  }

  solicitarAcesso(sede: Sede, nome: string, email: string, senha: string): Observable<number> {
    const usuario: Usuario = { sede, nome, email, senha };

    return this.http
      .post<number>(`${SERVER_URL}/usuarios/signon`, usuario)
      .pipe(catchError(this.errorHandler.handle()));
  }

  habilitarUsuario(usuario: Usuario) {
    return this.http
      .post<number>(`${SERVER_URL}/usuarios/enable`, usuario)
      .pipe(catchError(this.errorHandler.handle()));

  }

  findAllUsuariosDisableds(sede: Sede): Observable<Usuario[]> {
    const params = { idSede: `${sede.id}`, enabled: 'false' };

    return this.http
      .get<Usuario[]>(`${SERVER_URL}/usuarios`, { params })
      .pipe(catchError(this.errorHandler.handle()));
  }

  findAllUsuariosEnableds(sede: Sede): any {
    const params = { idSede: `${sede.id}`, enabled: 'true' };

    return this.http
      .get<Usuario[]>(`${SERVER_URL}/usuarios`, { params })
      .pipe(catchError(this.errorHandler.handle()));
  }

  findAllPerfils(): Observable<Perfil[]> {
    return this.http
      .get<Perfil[]>(`${SERVER_URL}/perfils`)
      .pipe(catchError(this.errorHandler.handle()));
  }

  public storeToken(token: string) {
    this.token = token;
    this.tokenPayload = this.getDecodedAccessToken(token);
    if (token && !this.isTokenExpired()) {
      sessionStorage.setItem('token', token);
    } else {
      this.token = null;
      sessionStorage.removeItem('token');
    }
  }

  private isTokenExpired(): boolean {
    const now = new Date().getTime() / 1000;
    return now > this.tokenPayload.exp;
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return { sub: undefined, exp: 0 };
    }
  }

  private clearToken() {
    this.storeToken(undefined);
  }

  logout() {
    this.clearToken();
    this.router.navigate(['/']);
    this.raiseUserChanged(null);
  }

  isAuthenticated() {
    return !this.isTokenExpired();
  }

}
