import { Capitulo } from './capitulo';
import { BaseModel } from './base-model';
import { Materia } from './materia';

export interface Tema extends BaseModel {
    materia: Materia;
    numero: number;
    nome: string;
    capitulos: Capitulo[];
}
