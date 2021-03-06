import { Component, OnInit } from '@angular/core';
import { Turma, dayOfWeek, DAYOFWEEK } from 'src/app/model/turma';
import { Aula } from 'src/app/model/aula';
import { Materia } from 'src/app/model/materia';
import { Capitulo } from 'src/app/model/capitulo';
import { Tema } from 'src/app/model/tema';
import { MessageService } from 'src/app/util/message.service';
import { AuthService } from 'src/app/auth/auth.service';
import { DadosService } from 'src/app/dados.service';
import { Aluno } from 'src/app/model/aluno';
import { Usuario } from 'src/app/model/usuario';
import { ModelUtilService } from 'src/app/util/model-util.service';

@Component({
  selector: 'app-aula-create',
  templateUrl: './aula-create.component.html',
  styleUrls: ['./aula-create.component.css']
})
export class AulaCreateComponent implements OnInit {

  turmas: Turma[];
  turmaSel: Turma;
  aula: Aula;
  data: Date;
  materias: Materia[];
  materiaSel: Materia;
  capituloSel: Capitulo;
  temaSel: Tema;
  temas: Tema[];
  capitulos: Capitulo[];
  alunos: Aluno[];
  showFoto = false;

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
          this.usuarioLogado = usuario;
          this.data = new Date();
          this.onChangeData();
        }
      }
    );
  }

  onChangeTurma() {
    this.materias = this.materiaSel = this.aula = this.temas = this.temaSel = this.capitulos = this.capituloSel = undefined;

    this.dadosService.findMaterias(this.turmaSel)
      .subscribe(materias => this.materias = materias);

    this.dadosService.findAlunos(this.turmaSel)
      .subscribe(alunos => this.alunos = alunos);
  }

  onChangeData() {
    this.turmaSel = this.turmas = this.materias = this.materiaSel = this.aula = undefined;
    this.temas = this.temaSel = this.capitulos = this.capituloSel = undefined;
    const dia: DAYOFWEEK = dayOfWeek(this.data);
    this.dadosService.findTurmas(dia, this.usuarioLogado.sede)
      .subscribe(turmas => this.turmas = turmas);
  }

  onChangeMateria() {
    this.temaSel = this.capitulos = this.capituloSel = undefined;

    this.temas = this.materiaSel.temas;

    this.dadosService.findAula(this.turmaSel, this.materiaSel, this.data)
      .subscribe(
        aula => {
          console.log('achou aula', aula);
          if (aula.capitulo) {
            this.temaSel = this.findTema(aula.capitulo);
            this.capituloSel = aula.capitulo;
            this.capitulos = this.temaSel.capitulos;
          }
          this.aula = aula;
        },
        // se nao existe ainda a aula registrada, cria-la
        () => this.aula = {
          turma: this.turmaSel,
          data: this.data,
          materia: this.materiaSel,
          capitulo: undefined,
          presencas: this.alunos.map(
            aluno => {
              return { presente: false, aluno: aluno };
            }),
          observacao: ''
        }
      );
  }

  private findTema(capitulo: Capitulo): Tema {
    return this.materiaSel.temas.find(tema =>
      tema.capitulos.findIndex(
        cap => cap.id === capitulo.id) > -1);
  }

  onRegistrarClick() {
    this.aula.data = this.data;
    this.aula.capitulo = this.temas.length ? this.capituloSel : undefined;
    this.dadosService.registrarAula(this.aula)
      .subscribe(auladb => {
        this.message.show('Aula Registrada!');
        this.aula = auladb;
      });
  }

}
