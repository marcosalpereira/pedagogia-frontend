import { Component, OnInit } from '@angular/core';
import { Turma, DAYOFWEEK, DIAS_SEMANA } from 'src/app/model/turma';
import { DadosService } from 'src/app/dados.service';
import { Sede } from 'src/app/model/sede';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit {

  turmas: Turma[];
  diaSemana: DAYOFWEEK;
  sedes: Sede[];
  sede: Sede;
  diasSemana = DIAS_SEMANA;

  displayedColumns: string[] = ['nome', 'sede', 'dia', 'nivel', 'sala', 'representante'];

  constructor(
    private dadosService: DadosService,
    ) { }

  ngOnInit() {
    this.dadosService.findSedes()
    .subscribe(sedes => this.sedes = sedes);

  }

  onSubmit() {
    this.displayedColumns = this.displayedColumns.filter(col =>
      col === 'sede' ? !this.sede :
        col === 'dia' ?  !this.diaSemana : true);
    this.dadosService.findTurmas(this.diaSemana, this.sede)
      .subscribe(turmas => this.turmas = turmas);
  }


}

