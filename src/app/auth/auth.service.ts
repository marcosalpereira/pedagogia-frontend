import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MessageService } from '../util/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(
    private router: Router,
    private message: MessageService) { }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
          this.message.show("Login realizado com sucesso!")
        }
      )
      .catch( () => 
        this.message.show("Falha na autenticacão!")
      )
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
