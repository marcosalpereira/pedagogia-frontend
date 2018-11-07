import { Professor } from './professor';
import { Aluno } from './aluno';
import { BaseModel } from './base-model';

export interface Turma extends BaseModel {
    nome: string;
    professores?: Professor[];
    alunos?: Aluno[];
    representant?: Aluno;
    diaSemana: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
}

export function dayOfWeek(date: Date) {
    const weekday = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    return  weekday[date.getDay()]; 
}
