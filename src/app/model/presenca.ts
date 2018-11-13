import { Aluno } from './aluno';
import { BaseModel } from './base-model';
import { Aula } from './aula';

export interface Presenca extends BaseModel {
    aula?: Aula;
    aluno: Aluno;
    presente: boolean;
}
