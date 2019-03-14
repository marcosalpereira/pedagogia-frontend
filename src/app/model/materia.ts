import { Capitulo } from './capitulo';
import { Tema } from './tema';
import { BaseModel, Named } from './base-model';
import { Nivel } from './turma';

export interface Materia extends BaseModel, Named {
    nivel: Nivel;
    nome: string;
    temas: Tema[];
}
