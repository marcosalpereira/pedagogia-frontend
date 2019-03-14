import { Pipe, PipeTransform } from '@angular/core';
import { HasAluno } from 'src/app/model/aluno';

@Pipe({
  name: 'sortByAluno'
})
export class SortByAlunoPipe implements PipeTransform {

  transform(alunosContainer: HasAluno[]): any[] {
    if (!alunosContainer) { return alunosContainer; }
    return alunosContainer.sort((a: HasAluno, b: HasAluno) => {
      if (a.aluno.nome < b.aluno.nome) { return -1; }
      if (a.aluno.nome > b.aluno.nome) { return 1; }
      return 0;
    });
  }

}
