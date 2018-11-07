import { Professor } from './professor';
import { Presenca } from './presenca';
import { Materia } from './materia';
import { Capitulo } from './capitulo';
import { BaseModel } from './base-model';
import { Turma } from './turma';

export interface Aula extends BaseModel {
    data: Date;
    turma: Turma;
    professor: Professor;
    presencas: Presenca[];
    materia?: Materia;
    capitulo?: Capitulo;
    observacao?: string;
}
