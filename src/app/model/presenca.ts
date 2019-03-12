import { Aluno, HasAluno } from './aluno';
import { BaseModel } from './base-model';
import { Aula } from './aula';

export interface Presenca extends BaseModel, HasAluno {
    aula?: Aula;
    aluno: Aluno;
    presente: boolean;
}
