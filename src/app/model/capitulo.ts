import { BaseModel, Numbered } from './base-model';
import { Tema } from './tema';

export interface Capitulo extends BaseModel, Numbered {
    tema: Tema;
    numero: number;
    nome: string;
}
