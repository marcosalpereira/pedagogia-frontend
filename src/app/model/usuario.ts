import { BaseModel } from './base-model';
import { Sede } from './sede';

export interface Usuario extends BaseModel {
    nome: string;
    sede: Sede;
    papeis: string[];
}
