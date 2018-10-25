import { Professor } from './professor';
import { Presenca } from './presenca';
import { Materia } from './materia';
import { Capitulo } from './capitulo';

export interface Aula {
    data: Date;
    professor: Professor;
    presencas: Presenca[];
    materia?: Materia;
    capitulo?: Capitulo;
    observacao?: string;
}
