import { Component, OnInit } from '@angular/core';
import { Turma, DAYOFWEEK, DIAS_SEMANA, dayOfWeek } from '../model/turma';
import { Materia } from '../model/materia';
import { Tema } from '../model/tema';
import { EntregaTema } from '../model/entrega-tema';
import { MessageService } from '../util/message.service';
import { DadosService } from '../dados.service';
import { AuthService } from '../auth/auth.service';
import { Aluno } from '../model/aluno';
import { Usuario } from '../model/usuario';
import { BaseModel } from '../model/base-model';
import { ModelUtilService } from '../util/model-util.service';

@Component({
  selector: 'app-entrega-material',
  templateUrl: './entrega-material.component.html',
  styleUrls: ['./entrega-material.component.css']
})
export class EntregaMaterialComponent implements OnInit {

  turmas: Turma[];
  turmaSel: Turma;
  entregasTema: EntregaTema[];
  materias: Materia[];
  materiaSel: Materia;
  temaSel: Tema;
  diaSel: DAYOFWEEK;
  diasSemana = DIAS_SEMANA;
  alunos: Aluno[];


  displayedColumns: string[] = ['aluno', 'data'];
  usuarioLogado: Usuario;

  constructor(
    public Model: ModelUtilService,
    private message: MessageService,
    private dadosService: DadosService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.usuarioLogado.subscribe(
      usuario => {
        if (usuario) {
          console.log('usuario', usuario);
          this.usuarioLogado = usuario;
          this.diaSel = dayOfWeek(new Date());
          this.onChangeDia();
        }
      }
    );
  }

  onChangeDia() {
    this.dadosService.findTurmas(this.diaSel, this.usuarioLogado.sede)
      .subscribe(turmas => this.turmas = turmas);
    this.entregasTema = undefined;
  }

  onChangeEntregue(entrega: EntregaTema) {
    if (entrega.entregue) {
      entrega.data = new Date();
    } else {
      entrega.data = undefined;
    }
    this.entregasTema = Object.assign([], this.entregasTema);
  }

  onChangeTurma() {
    this.dadosService.findMaterias(this.turmaSel)
      .subscribe(materias => this.materias = materias);

    this.dadosService.findAlunos(this.turmaSel)
      .subscribe(alunos => this.alunos = alunos);

    this.entregasTema = undefined;
  }

  onMateriaChanged() {
    this.dadosService.findLastTemaEntregue(this.turmaSel, this.materiaSel)
      .subscribe(tema => {
        this.temaSel = tema;
        this.onTemaChanged();
      });
    this.entregasTema = undefined;
  }

  onTemaChanged() {
    this.dadosService.findEntregasTema(this.turmaSel, this.temaSel)
      .subscribe(entregasTema => {
        this.entregasTema = entregasTema;
        this.alunos.forEach(aluno => {
          const index = this.entregasTema
            .findIndex(entrega => entrega.aluno.id === aluno.id);
          if (index === -1) {
            this.entregasTema.push({
              turma: this.turmaSel,
              tema: this.temaSel,
              aluno,
              entregue: false
            });
          }
        });
      });
  }

  onRegistrarClick() {
    this.dadosService.registrarEntregaTema(this.entregasTema)
      .subscribe(
        (entregas) => {
          this.message.show('Entrega Registrada!');
          this.entregasTema = entregas;
        });
  }

}
