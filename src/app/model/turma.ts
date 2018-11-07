import { Professor } from './professor';
import { Aluno } from './aluno';
import { BaseModel } from './base-model';

export type DAYOFWEEK = 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';

export interface Turma extends BaseModel {
    nome: string;
    professores?: Professor[];
    alunos?: Aluno[];
    representant?: Aluno;
    diaSemana: DAYOFWEEK;
}

export function dayOfWeek(date: Date) {
    const weekday = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    return  weekday[date.getDay()];
}
