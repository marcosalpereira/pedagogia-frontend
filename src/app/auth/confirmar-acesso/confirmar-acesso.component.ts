import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { MessageService } from 'src/app/util/message.service';
import { DadosService } from 'src/app/dados.service';
import { AuthService } from '../auth.service';
import { dayOfWeek } from 'src/app/model/turma';

interface Solicitacao {
  usuario: Usuario;
  admin: boolean;
}

@Component({
  selector: 'app-confirmar-acesso',
  templateUrl: './confirmar-acesso.component.html',
  styleUrls: ['./confirmar-acesso.component.css']
})
export class ConfirmarAcessoComponent implements OnInit {

  solicitacoes: Solicitacao[];

  displayedColumns: string[] = ['usuario', 'email', 'admin', 'confirm'];

  constructor(
    private message: MessageService,
    private dadosService: DadosService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.usuarioLogado.subscribe(
      usuario => {
        if (usuario) {
          this.authService.findAllSolicitacoes(usuario.sede)
            .subscribe(solicitacoes => this.solicitacoes = solicitacoes);
        }
      }
    );
  }

  confirmarAcesso(solicitacao: Solicitacao) {

  }

}
