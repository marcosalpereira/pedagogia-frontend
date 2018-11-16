import { Component, OnInit } from '@angular/core';
import { Turma, dayOfWeek, DAYOFWEEK } from 'src/app/model/turma';
import { Professor } from 'src/app/model/professor';
import { Aula } from 'src/app/model/aula';
import { Materia } from 'src/app/model/materia';
import { Capitulo } from 'src/app/model/capitulo';
import { Tema } from 'src/app/model/tema';
import { MessageService } from 'src/app/util/message.service';
import { AuthService } from 'src/app/auth/auth.service';
import { DadosService } from 'src/app/dados.service';
import { NgForm } from '@angular/forms';
import { BaseModel } from 'src/app/model/base-model';
import { Presenca } from 'src/app/model/presenca';

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
  professorSel: Professor;
  professores: Professor[];
  temas: Tema[];
  capitulos: Capitulo[];
  presencas: Presenca[];


  displayedColumns: string[] = ['presenca'];

  constructor(
    private message: MessageService,
    private dadosService: DadosService,
    private auth: AuthService) { }

  ngOnInit() {
    this.data = new Date();
    this.onChangeData();
  }

  onChangeTurma() {
    this.dadosService.findMaterias(this.turmaSel)
      .subscribe(materias => {
        this.materias = materias;
        this.professores = this.turmaSel.professores;
      });
  }

  onChangeData() {
    const dia: DAYOFWEEK = dayOfWeek(this.data);
    this.dadosService.findTurmas(dia, this.auth.usuarioLogado.sede)
      .subscribe(turmas => this.turmas = turmas);
  }

  modelCompareFn(c1: BaseModel, c2: BaseModel): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
}
 
  onChangeMateria() {
    this.temas = this.materiaSel.temas;

    this.dadosService.findAula(this.turmaSel, this.materiaSel, this.data)
      .subscribe(
        aula => {
          console.log('achou aula', aula);
          aula.turma = this.turmaSel;
          aula.materia = this.materiaSel;      
          this.capituloSel = aula.capitulo;
          this.professorSel = aula.professor;
          this.temaSel = aula.capitulo.tema;
          this.capitulos = this.temaSel.capitulos;
          this.aula = aula;
          this.presencas = aula.presencas;
        },
        () => this.aula = {
          turma: this.turmaSel,
          data: this.data,
          materia: this.materiaSel,
          professor: undefined,
          capitulo: undefined,
          presencas: this.turmaSel.alunos.map(
            aluno => {
              return { presente: false, aluno: aluno };
            }),
          observacao: ''
        }
      );
  }

  onRegistrarClick(form: NgForm) {
    this.aula.data = this.data; 
    this.aula.capitulo = this.capituloSel;
    this.aula.professor = this.professorSel;
    this.dadosService.registrarAula(this.aula)
      .subscribe(() => {
        this.message.show('Aula Registrada!');
        form.reset();
        this.aula = undefined;
      });
  }

}
