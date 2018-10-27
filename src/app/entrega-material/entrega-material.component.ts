import { Component, OnInit } from '@angular/core';
import { Turma } from '../model/turma';
import { Professor } from '../model/professor';
import { Aula } from '../model/aula';
import { Materia } from '../model/materia';
import { Capitulo } from '../model/capitulo';
import { Tema } from '../model/tema';
import { MatSnackBar } from '@angular/material';
import { TURMAS, MATERIAS } from '../data-mock';
import { TemaEntregue, Entrega } from '../model/tema-entregue';

@Component({
  selector: 'app-entrega-material',
  templateUrl: './entrega-material.component.html',
  styleUrls: ['./entrega-material.component.css']
})
export class EntregaMaterialComponent implements OnInit {

  turmas: Turma[];
  turmaSel: Turma;
  temaEntregue: TemaEntregue;
  data = new Date();
  materias: Materia[];
  materiaSel: Materia;
  temaSel: Tema;

  displayedColumns: string[] = ['aluno', 'data'];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.turmas = TURMAS;
    this.materias = MATERIAS;
  }

  onChangeEntregue(entrega: Entrega) {
    if (entrega.entregue) {
      entrega.data = new Date();
    } else {
      entrega.data = undefined;
    }
    this.temaEntregue.entregas = Object.assign([], this.temaEntregue.entregas);
  }

  onTemaChanged() {
    this.temaEntregue = {
      turma: this.turmaSel,
      tema: this.temaSel,
      entregas: this.turmaSel.alunos.map(
        aluno => {
          return { data: undefined, aluno: aluno, entregue: false };
        }),
    };
  }

  onRegistrarClick() {
    this.snackBar.open('Entrega Registrada!', 'Fechar', { duration: 3000 });
  }

}
