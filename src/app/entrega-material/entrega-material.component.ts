import { Component, OnInit } from '@angular/core';
import { Turma } from '../model/turma';
import { Professor } from '../model/professor';
import { Aula } from '../model/aula';
import { Materia } from '../model/materia';
import { Capitulo } from '../model/capitulo';
import { Tema } from '../model/tema';
import { MatSnackBar } from '@angular/material';
import { TURMAS, MATERIAS } from '../data-mock';

@Component({
  selector: 'app-entrega-material',
  templateUrl: './entrega-material.component.html',
  styleUrls: ['./entrega-material.component.css']
})
export class EntregaMaterialComponent implements OnInit {

  turmas: Turma[];
  turmaSel: Turma;
  professorSel: Professor;
  aula: Aula;
  data = new Date();
  materias: Materia[];
  materiaSel: Materia;
  capituloSel: Capitulo;
  temaSel: Tema;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.turmas = TURMAS;
    this.materias = MATERIAS;
  }

  onEntregarClick() {
    this.snackBar.open('Aula Registrada!', 'Fechar', { duration: 3000 });
  }

}
