import { Capitulo } from './capitulo';
import { Tema } from './tema';
import { BaseModel } from './base-model';

export interface Materia extends BaseModel {
    nome: string;
    temas: Tema[];
}
