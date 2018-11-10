import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { MessageService } from '../util/message.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = 'foo';

  usuarioLogado: Usuario = {
    id: 1, nome: 'foo', sede: { id: 1, nome: 'foo' }, papeis: []
  };

  constructor(
    private router: Router,
    private message: MessageService) { }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(token => this.token = token);
          this.message.show('Login realizado com sucesso!');
          this.usuarioLogado = {
            id: 1, nome: 'foo', sede: { id: 1, nome: 'foo' }, papeis: []
          };
        }
      )
      .catch( () =>
        this.message.show('Falha na autenticacão!')
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
