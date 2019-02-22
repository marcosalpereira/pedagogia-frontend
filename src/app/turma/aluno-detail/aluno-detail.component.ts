import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from 'src/app/model/aluno';
import { DadosService } from 'src/app/dados.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  @Input() aluno: Aluno;
  @Input() representante: boolean;

  constructor(
    private dadosService: DadosService,
  ) { }

  ngOnInit() {
    this.dadosService.getFotoAluno(this.aluno)
      .subscribe(data => this.createImageFromBlob(this.aluno, data));
  }

  createImageFromBlob(aluno: any, image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      aluno.imagem = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
