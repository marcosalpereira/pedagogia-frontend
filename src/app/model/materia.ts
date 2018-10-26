import { Capitulo } from './capitulo';
import { Tema } from './tema';

export interface Materia {
    nome: string;
    temas: Tema[];
}
