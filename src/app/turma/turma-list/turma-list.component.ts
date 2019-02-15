import { Component, OnInit } from '@angular/core';
import { Turma, dayOfWeek, DAYOFWEEK } from 'src/app/model/turma';
import { DadosService } from 'src/app/dados.service';
import { Sede } from 'src/app/model/sede';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit {

  turmas: Turma[];
  data: Date;
  sedes: Sede[];
  sede: Sede;


  displayedColumns: string[] = ['nome', 'sede', 'dia', 'nivel', 'sala'];

  constructor(
    private dadosService: DadosService,
    ) { }

  ngOnInit() {
    this.dadosService.findSedes()
    .subscribe(sedes => this.sedes = sedes);

  }

  onSubmit() {
    const dia: DAYOFWEEK = dayOfWeek(this.data);

    this.dadosService.findTurmas(dia, this.sede)
      .subscribe(turmas => this.turmas = turmas);
  }


}

