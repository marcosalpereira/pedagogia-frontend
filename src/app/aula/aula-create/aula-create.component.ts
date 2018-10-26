import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/model/turma';
import { Professor } from 'src/app/model/professor';
import { Aula } from 'src/app/model/aula';
import { Materia } from 'src/app/model/materia';
import { Capitulo } from 'src/app/model/capitulo';
import { MatSnackBar } from '@angular/material';
import { MATERIAS, TURMAS } from 'src/app/data-mock';

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

  displayedColumns: string[] = ['presenca'];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.turmas = TURMAS;
    this.materias = MATERIAS;
  }

  onProfessorChanged() {
    this.aula = {
      data: this.data,
      professor: this.professorSel,
      presencas: this.turmaSel.alunos.map(
        aluno => {
          return { presente: false, aluno: aluno };
        }),
      observacao: ''
    };
  }

  onRegistrarClick() {
    this.snackBar.open('Aula Registrada!', 'Fechar', { duration: 3000 });
  }

}
