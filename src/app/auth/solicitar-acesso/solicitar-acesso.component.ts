import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Sede } from 'src/app/model/sede';
import { DadosService } from 'src/app/dados.service';
import { MessageService } from 'src/app/util/message.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-solicitar-acesso',
  templateUrl: './solicitar-acesso.component.html',
  styleUrls: ['./solicitar-acesso.component.css']
})
export class SolicitarAcessoComponent implements OnInit {
  hide = true;
  sedes: Sede[];

  constructor(
    private message: MessageService,
    private dadosServce: DadosService,
    private authService: AuthService) { }

  ngOnInit() {
    this.dadosServce.findSedes()
      .subscribe(sedes => this.sedes = sedes);
  }

  onSubmit(sede: Sede, nome, email, senha) {
    this.authService.solicitarAcesso(sede, nome, email, senha)
      .subscribe(id => this.message.show('Acesso Solicitado!'));
  }

}
