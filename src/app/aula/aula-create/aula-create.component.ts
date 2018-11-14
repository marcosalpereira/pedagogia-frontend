import { Component, OnInit } from '@angular/core';
import { Turma, dayOfWeek, DAYOFWEEK } from 'src/app/model/turma';
import { Professor } from 'src/app/model/professor';
import { Aula } from 'src/app/model/aula';
import { Materia } from 'src/app/model/materia';
import { Capitulo } from 'src/app/model/capitulo';
import { MatSnackBar } from '@angular/material';
import { MATERIAS, TURMAS } from 'src/app/data-mock';
import { Tema } from 'src/app/model/tema';
import { MessageService } from 'src/app/util/message.service';
import { AuthService } from 'src/app/auth/auth.service';
import { DadosService } from 'src/app/dados.service';
import { NgForm } from '@angular/forms';

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
      .subscribe(materias => this.materias = materias);
  }

  onChangeData() {
    const dia: DAYOFWEEK = dayOfWeek(this.data);
    this.dadosService.findTurmas(dia, this.auth.usuarioLogado.sede)
      .subscribe(turmas => this.turmas = turmas);
  }
 
  onChangeMateria() {
    this.dadosService.findAula(this.turmaSel, this.materiaSel, this.data)
      .subscribe(
        aula => {
          console.log(aula)
          this.aula = aula;
          this.capituloSel = aula.capitulo;
          this.temaSel = aula.capitulo.tema;
        },
        () => this.aula = {
          turma: this.turmaSel,
          data: this.data,
          materia: this.materiaSel,
          capitulo: this.capituloSel,
          presencas: this.turmaSel.alunos.map(
            aluno => {
              return { presente: false, aluno: aluno };
            }),
          observacao: ''
        }
      );
  }

  onRegistrarClick(form: NgForm) {
    this.aula.capitulo = this.capituloSel;
    this.dadosService.registrarAula(this.aula)
      .subscribe(() => {
        this.message.show('Aula Registrada!');
        form.reset();
      });
  }

}
