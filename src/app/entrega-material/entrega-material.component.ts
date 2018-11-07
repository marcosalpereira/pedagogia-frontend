import { Component, OnInit } from '@angular/core';
import { Turma } from '../model/turma';
import { Materia } from '../model/materia';
import { Tema } from '../model/tema';
import { EntregaTema } from '../model/entrega-tema';
import { MessageService } from '../util/message.service';
import { DadosService } from '../dados.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-entrega-material',
  templateUrl: './entrega-material.component.html',
  styleUrls: ['./entrega-material.component.css']
})
export class EntregaMaterialComponent implements OnInit {

  turmas: Turma[];
  turmaSel: Turma;
  entregasTema: EntregaTema[];
  data = new Date();
  materias: Materia[];
  materiaSel: Materia;
  temaSel: Tema;

  displayedColumns: string[] = ['aluno', 'data'];

  constructor(
    private message: MessageService,
    private dadosService: DadosService,
    private auth: AuthService) { }

  ngOnInit() {
    this.dadosService.findTurmas(this.data, this.auth.usuarioLogado.sede)
      .subscribe(turmas => this.turmas = turmas);

    this.dadosService.findMaterias()
      .subscribe(materias => this.materias = materias);

  }

  onChangeEntregue(entrega: EntregaTema) {
    if (entrega.entregue) {
      entrega.data = new Date();
    } else {
      entrega.data = undefined;
    }
    this.entregasTema = Object.assign([], this.entregasTema);
  }

  onTemaChanged() {
    this.dadosService.findEntregas(this.turmaSel, this.temaSel)
      .subscribe(entregas => {
        this.entregasTema = entregas;
        this.turmaSel.alunos.forEach(aluno => {
          const index = this.entregasTema
              .findIndex(entrega => entrega.aluno.id === aluno.id);
          if (index === -1) {
            this.entregasTema.push( {
              turma: this.turmaSel,
              tema: this.temaSel,
              aluno,
              entregue: false});
          }
        });
      });
  }

  onRegistrarClick() {
    this.dadosService.registrarEntregaTema(this.entregasTema)
      .subscribe(
        () => this.message.show('Entrega Registrada!'),
        error => this.message.show(error)
      );
  }

}
