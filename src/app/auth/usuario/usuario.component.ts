import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];

  displayedColumns: string[] = ['usuario', 'email', 'perfil'];
  usuarioLogado: Usuario;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.usuarioLogado.subscribe(usuarioLogado => {
      this.usuarioLogado = usuarioLogado;
      if (usuarioLogado) {
        this.authService
          .findAllUsuariosEnableds(this.usuarioLogado.sede)
          .subscribe(usuarios => (this.usuarios = usuarios));
      }
    });

  }

}

