import { Capitulo } from './capitulo';
import { Tema } from './tema';
import { BaseModel } from './base-model';
import { Nivel } from './turma';

export interface Materia extends BaseModel {
    nivel: Nivel;
    nome: string;
    temas: Tema[];
}
