import { Component, OnInit } from '@angular/core';
import { Usuario, Perfil } from 'src/app/model/usuario';
import { AuthService } from '../auth.service';

import { ModelUtilService } from 'src/app/util/model-util.service';

@Component({
  selector: 'app-confirmar-acesso',
  templateUrl: './confirmar-acesso.component.html',
  styleUrls: ['./confirmar-acesso.component.css']
})
export class ConfirmarAcessoComponent implements OnInit {
  solicitacoes: Usuario[];
  perfils: Perfil[];

  displayedColumns: string[] = ['usuario', 'email', 'perfil', 'confirm'];
  usuarioLogado: Usuario;

  constructor(
    public Model: ModelUtilService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.usuarioLogado.subscribe(usuarioLogado => {
      this.usuarioLogado = usuarioLogado;
      if (usuarioLogado) {
        this.carregarSolicitacoes();
      }
    });

    this.authService
      .findAllPerfils()
      .subscribe(perfils => (this.perfils = perfils));
  }

  private carregarSolicitacoes() {
    this.authService
      .findAllUsuariosDisableds(this.usuarioLogado.sede)
      .subscribe(usuarios => (this.solicitacoes = usuarios));
  }

  confirmarAcesso(usuario: Usuario) {
    this.authService
      .habilitarUsuario(usuario)
      .subscribe(_ => this.carregarSolicitacoes());
  }
}
