import { Capitulo } from './capitulo';
import { BaseModel, Numbered } from './base-model';
import { Materia } from './materia';

export interface Tema extends BaseModel, Numbered {
    materia: Materia;
    numero: number;
    nome: string;
    capitulos: Capitulo[];
}
