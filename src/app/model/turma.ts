import { Professor } from './professor';
import { Aluno } from './aluno';

export interface Turma {
    id: number;
    nome: string;

    professores?: Professor[];
    alunos?: Aluno[];
}
