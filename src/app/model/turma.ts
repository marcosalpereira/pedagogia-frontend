import { Professor } from './professor';
import { Aluno } from './aluno';
import { BaseModel } from './base-model';
import { Materia } from './materia';

export type DAYOFWEEK = 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';

export interface Nivel extends BaseModel {
    codigo: string;
    materias: Materia[];
}

export interface Turma extends BaseModel {
    nome: string;
    sala?: string;
    nivel: Nivel;
    alunos?: Aluno[];
    professores: Professor[];
    representant?: Aluno;
    diaSemana: DAYOFWEEK;
}

export function dayOfWeek(date: Date): DAYOFWEEK {
    return  DIAS_SEMANA[date.getDay()].eng;
}

export interface DiaSemana {
    eng: DAYOFWEEK;
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
