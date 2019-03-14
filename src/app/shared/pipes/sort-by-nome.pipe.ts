import { Pipe, PipeTransform } from '@angular/core';
import { Named } from 'src/app/model/base-model';

@Pipe({
  name: 'sortByNome'
})
export class SortByNomePipe implements PipeTransform {

  transform(nameds: Named[]): any[] {
    if (!nameds) { return nameds; }
    return nameds.sort((a: Named, b: Named) => {
      if (a.nome < b.nome) { return -1; }
      if (a.nome > b.nome) { return 1; }
      return 0;
    });
  }


}
