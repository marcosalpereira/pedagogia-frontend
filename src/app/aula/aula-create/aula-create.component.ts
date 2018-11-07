import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/model/turma';
import { Professor } from 'src/app/model/professor';
import { Aula } from 'src/app/model/aula';
import { Materia } from 'src/app/model/materia';
import { Capitulo } from 'src/app/model/capitulo';
import { MatSnackBar } from '@angular/material';
import { MATERIAS, TURMAS } from 'src/app/data-mock';
import { Tema } from 'src/app/model/tema';
import { MessageService } from 'src/app/util/message.service';

@Component({
  selector: 'app-aula-create',
  templateUrl: './aula-create.component.html',
  styleUrls: ['./aula-create.component.css']
})
export class AulaCreateComponent implements OnInit {

  turmas: Turma[];
  turmaSel: Turma;
  professorSel: Professor;
  aula: Aula;
  data = new Date();
  materias: Materia[];
  materiaSel: Materia;
  capituloSel: Capitulo;
  temaSel: Tema;

  displayedColumns: string[] = ['presenca'];

  constructor(private message: MessageService) { }

  ngOnInit() {
    this.turmas = TURMAS;
    this.materias = MATERIAS;
  }

  onProfessorChanged() {
    this.aula = {
      turma: this.turmaSel,
      data: this.data,
      professor: this.professorSel,
      presencas: this.turmaSel.alunos.map(
        aluno => {
          return { aula: undefined, presente: false, aluno: aluno };
        }),
      observacao: ''
    };
  }

  onRegistrarClick() {
    this.message.show('Aula Registrada!');
  }

}
