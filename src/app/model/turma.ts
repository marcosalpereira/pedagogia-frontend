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
    return  DIAS_SEMANA[date.getDay()].eng;
}

export interface DiaSemana {
    eng: string;
    pt: string;
}

export const DIAS_SEMANA: DiaSemana[] = [
    {eng: 'SUNDAY', pt: 'Domingo'},
    {eng: 'MONDAY', pt: 'Segunda'},
    {eng: 'TUESDAY', pt: 'Terca'},
    {eng: 'WEDNESDAY', pt: 'Quarta'},
    {eng: 'THURSDAY', pt: 'Quinta'},
    {eng: 'FRIDAY', pt: 'Sexta'},
    {eng: 'SATURDAY', pt: 'Sábado'},
];
