import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/model/turma';
import { Professor } from 'src/app/model/professor';
import { Aula } from 'src/app/model/aula';
import { Materia } from 'src/app/model/materia';
import { Capitulo } from 'src/app/model/capitulo';

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

  constructor() { }

  ngOnInit() {
    this.turmas = [
      {
        id: 1,
        nome: 'N2 - Quarta - Seneca',
        professores: [
          { nome: 'Levi' },
          { nome: 'Plicia' }
        ],
        alunos: [
          { nome: 'Rui Barbosa' },
          { nome: 'Einstein' }
        ],
      },
      { id: 2, nome: 'Quarta' }];

    this.materias = [
      {
        nome: 'ISO', capitulos: [
          { numero: 1, nome: 'Introdução' },
          { numero: 2, nome: 'Enigma' }
        ]
      },
      {
        nome: 'Psicologia', capitulos: [
          { numero: 1, nome: 'Introdução' },
          { numero: 2, nome: 'Capítulo2' }
        ]
      }
    ];
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

}
