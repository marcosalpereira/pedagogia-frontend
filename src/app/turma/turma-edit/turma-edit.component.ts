import { DadosService } from 'src/app/dados.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma, DIAS_SEMANA } from 'src/app/model/turma';
import { ModelUtilService } from 'src/app/util/model-util.service';
import { Aluno } from 'src/app/model/aluno';

@Component({
  selector: 'app-turma-edit',
  templateUrl: './turma-edit.component.html',
  styleUrls: ['./turma-edit.component.css'],
})
export class TurmaEditComponent implements OnInit {
  turma: Turma;
  alunos: Aluno[];
  diasSemana = DIAS_SEMANA;
  alunoExpanded = true;

  constructor(
    private route: ActivatedRoute,
    private dadosService: DadosService,
    private router: Router,
    public Model: ModelUtilService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dadosService.findTurma(id).subscribe(turma => {
      this.turma = turma;
      this.dadosService.findAlunos(turma).subscribe(alunos => (this.alunos = alunos));
    });
  }

  onSubmit() {
    this.dadosService.saveTurma(this.turma).subscribe(_ => this.voltar());
  }

  voltar() {
    this.router.navigate(['/turmas']);
  }

  carregarFotos() {
    const a = [];
    for (let i = 0; i < this.alunos.length; i++) {
      a[i] = { ...this.alunos[i] };
    }
    this.alunos = a;
  }
}
