import { Aluno, HasAluno } from './aluno';
import { Tema } from './tema';
import { Turma } from './turma';
import { BaseModel } from './base-model';

export interface EntregaTema extends BaseModel, HasAluno {
    turma: Turma;
    tema: Tema;
    aluno: Aluno;
    entregue: boolean;
    data?: Date;
}
