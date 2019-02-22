import { BaseModel } from './base-model';
import { Sede } from './sede';

export interface Aluno extends BaseModel {
    nome: string;
    sede: Sede;
    matricula: number;
    imagem?: any;
}
