import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Aluno } from 'src/app/model/aluno';
import { DadosService } from 'src/app/dados.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css'],
})
export class AlunoDetailComponent implements OnInit, OnChanges {
  @Input() aluno: Aluno;
  @Input() showFoto: boolean;
  @Input() marked: boolean;
  @Input() markedChar: string;
  @Input() markedDescription;

  imagem: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit() {
  }

  private carregarFoto() {
    this.dadosService.getFotoAluno(this.aluno)
      .subscribe(data => this.createImageFromBlob(this.aluno, data));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.showFoto) {
      this.carregarFoto();
    }
  }


  createImageFromBlob(aluno: any, image: Blob) {
    const reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imagem = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
