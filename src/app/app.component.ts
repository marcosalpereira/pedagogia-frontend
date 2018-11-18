import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  usuarioLogado: Usuario;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
    ) { }  

  ngOnInit() {
    this.authService.usuarioLogado.subscribe(
      usuario => this.usuarioLogado = usuario
    )
  }

  logout() {
    this.authService.logout();
    return false;
  }

  isAutenticado(): boolean {
    return this.authService.isAuthenticated();
  }


}
