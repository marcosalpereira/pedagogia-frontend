import { Pipe, PipeTransform } from '@angular/core';
import { DIAS_SEMANA } from '../model/turma';

@Pipe({
  name: 'diaSemana'
})
export class DiaSemanaPipe implements PipeTransform {

  transform(diaEng: string): string {
    for (const dia of DIAS_SEMANA) {
      if (dia.eng === diaEng) {
        return dia.pt;
      }
    }
    return null;
  }

}
