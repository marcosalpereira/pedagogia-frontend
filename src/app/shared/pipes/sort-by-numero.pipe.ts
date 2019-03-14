import { Pipe, PipeTransform } from '@angular/core';
import { Numbered } from 'src/app/model/base-model';

@Pipe({
  name: 'sortByNumero'
})
export class SortByNumeroPipe implements PipeTransform {

  transform(numbereds: Numbered[]): any[] {
    if (!numbereds) { return numbereds; }
    return numbereds.sort((a: Numbered, b: Numbered) => {
      if (a.numero < b.numero) { return -1; }
      if (a.numero > b.numero) { return 1; }
      return 0;
    });
  }

}
