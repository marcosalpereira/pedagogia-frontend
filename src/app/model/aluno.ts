import { BaseModel, Named } from './base-model';
import { Sede } from './sede';

export interface Aluno extends BaseModel, Named {
    nome: string;
    sede: Sede;
    matricula: number;
}

export interface HasAluno {
    aluno: Aluno;
}
