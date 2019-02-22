import { DadosService } from 'src/app/dados.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma, DIAS_SEMANA } from 'src/app/model/turma';
import { ModelUtilService } from 'src/app/util/model-util.service';
import { Aluno } from 'src/app/model/aluno';

@Component({
  selector: 'app-turma-edit',
  templateUrl: './turma-edit.component.html',
  styleUrls: ['./turma-edit.component.css']
})
export class TurmaEditComponent implements OnInit {
  turma: Turma;
  alunos: Aluno[];
  diasSemana = DIAS_SEMANA;
  alunoExpanded = true;

  constructor(
    private route: ActivatedRoute,
    private dados: DadosService,
    private router: Router,
    public Model: ModelUtilService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dados.findTurma(id).subscribe(turma => {
      this.turma = turma;
      this.dados.findAlunos(turma).subscribe(
        alunos => {this.alunos = alunos; this.carregarFotos();}
      );
    });
  }

  onSubmit() {
    this.dados.saveTurma(this.turma).subscribe(_ =>
      this.voltar()
    );
  }

  voltar() {
    this.router.navigate(['/turmas']);
  }

  carregarFotos() {
    this.alunos.forEach(a => this.carregarFoto(a));
  }

  carregarFoto(aluno: Aluno) {
    this.dados.getFotoAluno(aluno)
      .subscribe(data => this.createImageFromBlob(aluno, data));
  }

  createImageFromBlob(aluno: any, image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       aluno.imagem = reader.result;
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
}
}
